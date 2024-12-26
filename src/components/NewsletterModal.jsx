import { useCallback, useEffect, useState } from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import Button from "./UI/Button";
import Input from "./UI/Input";
import styled from "@emotion/styled";
import { Photo } from "../assets/icon";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";

const schema = yup.object().shape({
  title: yup.string().required("Название рассылки обязательно"),

  description: yup.string().required("Описание рассылки обязательно"),

  startDate: yup
    .date()
    .typeError("Дата начала акции обязательна")
    .required("Дата начала акции обязательна"),
  endDate: yup
    .date()
    .typeError("Дата окончания акции обязательна")
    .min(
      yup.ref("startDate"),
      "Дата окончания акции должна быть после даты начала"
    )
    .required("Дата окончания акции обязательна"),
});

const NewsletterModal = ({ open, onClose, data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedImage(
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
  }, []);

  useEffect(() => {
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage.preview);
      }
    };
  }, [selectedImage]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });

  const onSubmit = (data) => {
    data.startDate = dayjs(data.startDate).format("YYYY-MM-DD");
    data.endDate = dayjs(data.endDate).format("YYYY-MM-DD");
    reset();
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };

  return (
    <StyledModal open={open}>
      <StyledModalContent>
        <Typography variant="h5" component="h1">
          Создать рассылку
        </Typography>
        <StyledBox hasImage={!!selectedImage}>
          {!selectedImage ? (
            <AddDropzoneBox {...getRootProps()}>
              <input
                {...getInputProps()}
                type="file"
                accept=".png, .jpg, .jpeg, .gif, .bmp, .webp"
              />
              <img src={Photo} alt="addPhoto" />
              <p>Нажмите для добавления фотографии</p>
            </AddDropzoneBox>
          ) : (
            <Box sx={{ position: "relative", height: "217px" }}>
              <StyledNewsLetterImg
                src={selectedImage.preview}
                alt={selectedImage.name}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: "2px",
                  right: "3px",
                  backgroundColor: "#d4d6db",
                  borderRadius: "10%",
                  padding: "5px",
                  "&:hover": {
                    backgroundColor: "#909bb9",
                  },
                }}
                onClick={handleDeleteImage}
              >
                <DeleteIcon sx={{ color: "#f44336" }} />
              </IconButton>
            </Box>
          )}
        </StyledBox>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <Input
              label={
                <>
                  Название рассылки
                  {errors.title && <span style={{ color: "red" }}>*</span>}{" "}
                </>
              }
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
            />
            <Input
              label={
                <>
                  Описание рассылки
                  {errors.description && (
                    <span style={{ color: "red" }}>*</span>
                  )}
                </>
              }
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          </InputBox>

          <StyledInputBox>
            <Input
              label={
                <>
                  Дата начала акции
                  {errors.startDate && (
                    <span style={{ color: "red" }}>*</span>
                  )}{" "}
                </>
              }
              type="date"
              {...register("startDate")}
              error={!!errors.startDate}
              helperText={errors.startDate?.message}
            />
            <Input
              label={
                <>
                  Дата окончания акции
                  {errors.endDate && (
                    <span style={{ color: "red" }}>*</span>
                  )}{" "}
                </>
              }
              type="date"
              {...register("endDate")}
              error={!!errors.endDate}
              helperText={errors.endDate?.message}
            />
          </StyledInputBox>

          <StyledButtonBox>
            <Button variant="text" onClick={onClose}>
              Отменить
            </Button>
            <Button type="submit" variant="contained">
              Отправить
            </Button>
          </StyledButtonBox>
        </form>
      </StyledModalContent>
    </StyledModal>
  );
};

export default NewsletterModal;

const StyledModal = styled(Modal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledModalContent = styled(Box)(() => ({
  backgroundColor: "white",
  borderRadius: "4px",
  padding: "30px",
  width: "544px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "center",
  "& h1": {
    marginTop: "20px",
  },
  "& box": {},
}));

const StyledButtonBox = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
}));

const StyledInputBox = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  paddingBottom: "20px",
  paddingTop: "20px",
}));

const AddDropzoneBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "100%",
  width: "100%",

  "& p": {
    margin: "8px",
    color: "#b4b6be",
  },
  "& img": {
    width: "30px",
    height: "30px",
    marginTop: "60px",
  },
}));

const StyledNewsLetterImg = styled("img")(() => ({
  objectFit: "cover",
  width: "230px",
  height: "217px",
}));

const StyledBox = styled(Box)(({ hasImage }) => ({
  width: "230px",
  backgroundColor: "#eaebf0",
  maxHeight: hasImage ? "217px" : "auto",
  minHeight: "217px",
  borderRadius: "2px",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  marginTop: "20px",
  marginBottom: "20px",
}));

const InputBox = styled(Box)(() => ({
  "& .MuiFormControl-root": {
    paddingBottom: "20px",
  },
}));
