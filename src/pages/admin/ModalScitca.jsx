import React, { useState } from "react";
import { Modal, Button, TextField, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { createDiscount } from "../../store/productAdmin/productAdminAuthThank";

const ModalScitca = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { ids } = useSelector((state) => state.productAdmin);
  const [percentOfDiscount, setPercentOfDiscount] = useState("");
  const [dateOfStart, setDateOfStart] = useState("");
  const [dateOfFinish, setDateOfFinish] = useState("");

  console.log(ids);

  const handleCreateDiscount = () => {
    dispatch(
      createDiscount({
        percentOfDiscount,
        dateOfStart,
        dateOfFinish,
      })
    );

    onClose ? onClose() : null;
  };

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setDateOfStart(newStartDate);


    if (dateOfFinish && new Date(dateOfFinish) < new Date(newStartDate)) {
      setDateOfFinish("");
    }
  };

  if (!open) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModal>
        <FieldWrapper>
          <p>Процент скидки *</p>
          <TextField
            fullWidth
            placeholder="Введите процент скидки"
            variant="outlined"
            size="small"
            type="number"
            value={percentOfDiscount}
            onChange={(e) => setPercentOfDiscount(e.target.value)}
          />
        </FieldWrapper>
        <div style={{ display: "flex", gap: "16px" }}>
          <FieldWrapper style={{ flex: 1 }}>
            <p>Дата начала скидки </p>
            <TextField
              fullWidth
              type="date"
              size="small"
              value={dateOfStart}
              onChange={handleStartDateChange}
            />
          </FieldWrapper>
          <FieldWrapper style={{ flex: 1 }}>
            <p>Дата окончания скидки </p>
            <TextField
              fullWidth
              type="date"
              size="small"
              value={dateOfFinish}
              onChange={(e) => setDateOfFinish(e.target.value)}
              disabled={!dateOfStart} 
              inputProps={{
                min: dateOfStart || null,
                max: dateOfStart
                  ? new Date(
                      new Date(dateOfStart).getTime() + 20 * 24 * 60 * 60 * 1000
                    )
                      .toISOString()
                      .split("T")[0] 
                  : null,
              }}
            />
          </FieldWrapper>
        </div>
        <Actions>
          <Button className="cancel-btn" variant="outlined" onClick={onClose}>
            Отменить
          </Button>
          <Button
            className="add-btn"
            variant="contained"
            onClick={handleCreateDiscount}
            disabled={!percentOfDiscount || !dateOfStart || !dateOfFinish} 
          >
            Добавить
          </Button>
        </Actions>
      </StyledModal>
    </Modal>
  );
};

export default ModalScitca;




const StyledModal = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "#ffffff",
  borderRadius: 8,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: 24,
}));

const FieldWrapper = styled("div")(({ theme }) => ({
  marginBottom: 16,

  "& > p": {
    fontSize: 14,
    marginBottom: 8,
    color: "#333",
  },
}));

const Actions = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: 20,

  "& > button": {
    fontWeight: "bold",
    padding: "8px 16px",
    borderRadius: 4,
  },

  "& .cancel-btn": {
    color: "#ff0077",
    border: "1px solid #ff0077",
  },

  "& .add-btn": {
    backgroundColor: "#ff0077",
    color: "#fff",
  },
}));
