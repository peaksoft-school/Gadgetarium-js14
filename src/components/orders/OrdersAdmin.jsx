import { useState, useEffect } from "react";
import {
  Box,
  styled,
  Pagination,
  Popover,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import Input from "../../components/UI/Input";
import Infografics from "../../components/UI/Infografics";
import ProductTable from "../../components/UI/table/ProductTable";
import ModalDelete from "../../components/UI/ModalDelete";
import AddBannerModal from "../../components/UI/AddBannerModal";
import DateRangePicker from "../../pages/admin/DateRangePicker";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdminOrders } from "../../store/ordersAdmin/orderAdminThunk";
import Loading from "../UI/Loading";
import { garbage, StateDown } from "../../assets/icon";

const OrdersAdmin = () => {
  const selfPickupStatuses = [
    "В ожидании",
    "Готов к выдаче",
    "Получен",
    "Отменить",
  ];

  const deliveryStatuses = [
    "В ожидании",
    "Готов к выдаче",
    "Курьер в пути",
    "Доставлен",
    "Отменить",
  ];
  const contentData = [
    {
      id: 1,
      fullName: "Азимбек Абдивалиев",
      orderNumber: "1",
      date: "2023-01-01",
      quantity: 1,
      totalPrice: 55000,
      deliveryType: "Самовывоз",
      status: "PENDING",
    },
    {
      id: 2,
      fullName: "Бека Ташкенбаев",
      orderNumber: "2",
      date: "2023-02-14",
      quantity: 2,
      totalPrice: 120000,
      deliveryType: "Доставка",
      status: "PROCESSING",
    },
    {
      id: 3,
      fullName: "Джулия Курманова",
      orderNumber: "3",
      date: "2023-03-25",
      totalPrice: 150000,
      quantity: 3,
      deliveryType: "Доставка",
      status: "ONTHEWAY",
    },
    {
      id: 3,
      fullName: "Марлен Марленов",
      orderNumber: "3",
      date: "2025-01-14",
      quantity: 3,
      totalPrice: 150000,
      deliveryType: "Доставка",
      status: "DELIVERED",
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [file, setFile] = useState(null);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("PENDING");
  const [before, setBefore] = useState("");
  const [from, setFrom] = useState("");
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [openBannerModal, setOpenBannerModal] = useState(false);
  const [orders, setOrders] = useState(contentData);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const rowsPerPage = 5;

  const debouncedSearchTerm = searchTerm;

  const { isLoading } = useSelector((state) => state.orderAdmin);

  useEffect(() => {
    const filteredOrders = contentData.filter((product) => {
      const matchesSearchTerm =
        product.orderNumber.includes(debouncedSearchTerm) ||
        product.fullName
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase());
      const matchesFilter = product.status === filter;
      return matchesSearchTerm && matchesFilter;
    });

    setOrders(filteredOrders);
  }, [debouncedSearchTerm, filter]);
  const handleSortOptionClick = (newStatus) => {
    console.log("Новый статус:", newStatus);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSubMenu(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlerSelectorInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handlerDeleteProduct = (productId) => {
    setSelectedProductId(productId);
    setOpenModal(true);
  };

  const confirmDelete = async () => {
    if (selectedProductId) {
      console.log(selectedProductId);

      try {
        await dispatch(deleteAdminOrders(selectedProductId));
        setOpenModal(false);
      } catch (error) {}
    }
  };

  const handleNameClick = (id) => {
    navigate(ROUTES.ADMIN.orderDetail.replace(":orderId", id));
  };

  const columns = [
    {
      Header: "ID",
      accessorFn: (_, index) => index + 1,
      Cell: ({ cell }) => (
        <div style={{ textAlign: "center" }}>{cell.value}</div>
      ),
    },
    {
      Header: "ФИО",
      accessor: "fullName",
      Cell: ({ row }) => (
        <span
          style={{
            cursor: "pointer",
            textDecoration: "none",
            textAlign: "center",
            display: "block",
          }}
          onClick={() => handleNameClick(row.original.id)}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
        >
          {row.original.fullName}
        </span>
      ),
    },
    {
      Header: "Номер/дата",
      accessor: "date",
      Cell: ({ cell }) => (
        <div style={{ textAlign: "center" }}>{cell.value}</div>
      ),
    },
    {
      Header: "Кол-во",
      accessor: "quantity",
      Cell: ({ cell }) => (
        <div style={{ textAlign: "center" }}>{cell.value}</div>
      ),
    },
    {
      Header: "Общая сумма",
      accessor: "totalPrice",
      Cell: ({ row }) => (
        <div style={{ textAlign: "center" }}>
          <p>{row.original.totalPrice}с</p>
        </div>
      ),
    },
    {
      Header: "Оформление заказа",
      accessor: "deliveryType",
      Cell: ({ cell }) => (
        <div style={{ textAlign: "center" }}>{cell.value}</div>
      ),
    },
    {
      Header: "Статус",
      accessor: "status",
      Cell: ({ row }) => {
        const { deliveryType, status } = row.original;

        const statuses =
          deliveryType === "Самовывоз" ? selfPickupStatuses : deliveryStatuses;

        return (
          <div style={{ textAlign: "center" }}>
            {status}{" "}
            <img
              src={StateDown}
              alt=""
              style={{ filter: "invert(1)", cursor: "pointer" }}
              onClick={handleClick}
            />
            <Menu
              style={{ position: "absolute", left: "910px", top: "400px" }}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              PaperProps={{
                sx: {
                  borderRadius: "12px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
                  padding: "8px 0",
                },
              }}
            >
              {statuses.map((statusOption) => (
                <MenuItem
                  key={statusOption}
                  onClick={() => handleSortOptionClick(statusOption)}
                  sx={{
                    fontWeight: 500,
                    padding: "10px 20px",
                    "&:hover": { color: "magenta" },
                  }}
                >
                  {statusOption}
                </MenuItem>
              ))}
            </Menu>
          </div>
        );
      },
    },
    {
      Header: "Действия",
      accessor: "actions",
      Cell: ({ row }) => (
        <StyledBoxDeleite>
          <div
            style={{
              marginLeft: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => handlerDeleteProduct(row.original.id)}
          >
            <img src={garbage} onClick={() => handleOpen} />
          </div>
        </StyledBoxDeleite>
      ),
    },
  ];

  const paginatedOrders = orders.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Box>
      {isLoading && <Loading />}
      <Box sx={{ boxSizing: "border-box", margin: "0 auto", padding: "10px" }}>
        <StyledContainer>
          <Box className="search-section">
            <Box className="input-and-buttons">
              <Input
                placeholder="Поиск по артикулу или названию"
                className="search-input"
                value={searchTerm}
                onChange={handlerSelectorInput}
              />
              <StyledButtonGroup>
                <StyledButton
                  selected={filter === "PENDING"}
                  onClick={() => handleFilterChange("PENDING")}
                >
                  В ожидании
                </StyledButton>
                <StyledButton
                  selected={filter === "PROCESSING"}
                  onClick={() => handleFilterChange("PROCESSING")}
                >
                  В обработке
                </StyledButton>
                <StyledButton
                  selected={filter === "ONTHEWAY"}
                  onClick={() => handleFilterChange("ONTHEWAY")}
                >
                  Курьер в пути
                </StyledButton>
                <StyledButton
                  selected={filter === "DELIVERED"}
                  onClick={() => handleFilterChange("DELIVERED")}
                >
                  Доставлены
                </StyledButton>

                <StyledButton
                  selected={filter === "CANCELLED"}
                  onClick={() => handleFilterChange("CANCELLED")}
                >
                  Отменены
                </StyledButton>
              </StyledButtonGroup>
            </Box>
            <div style={{ width: "300px", marginRight: "40px" }}>
              <Infografics />
            </div>
          </Box>
          <StyledDivider />

          <StyledInputDate>
            <DateRangePicker
              from={from}
              before={before}
              onFromChange={setFrom}
              onBeforeChange={setBefore}
            />
          </StyledInputDate>
          <StyledBoxTable>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "600px",
              }}
            >
              <Box
                sx={{
                  marginTop: "-45px",
                }}
              >
                <p>Найдено {orders.length} товаров</p>
              </Box>
            </Box>
            <Box style={{ width: "1000px" }}>
              <ProductTable
                data={paginatedOrders}
                columns={columns}
                onClick={() => handleBeforeChange(contentData)}
              />
            </Box>
          </StyledBoxTable>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              width: "1100px",
            }}
          >
            <Pagination
              count={Math.ceil(orders.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
            />
          </Box>
        </StyledContainer>
      </Box>
      <ModalDelete
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmDelete}
      />
      <Box>
        <AddBannerModal
          open={openBannerModal}
          onClose={() => setOpenBannerModal(false)}
          onFileChange={(e) => setFile(e.target.files[0])}
          onSave={() => {}}
          disabled={!file}
          file={file}
        />
      </Box>
    </Box>
  );
};

export default OrdersAdmin;

const StyledBoxTable = styled(Box)(() => ({
  width: "1130px",
  marginTop: "60px",
}));

const StyledInputDate = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  marginTop: "20px",
}));

const StyledContainer = styled("div")({
  boxSizing: "border-box",
  margin: "0 auto",
  width: "100%",
  padding: "15px 30px",
  gap: "20px",
  fontFamily: "'Roboto', sans-serif",

  ".search-section": {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  ".input-and-buttons": {
    gap: "10px",
  },
  ".search-input": {
    width: "400px",
    padding: "10px 18px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 400,
  },
  ".action-buttons": {
    display: "flex",
    gap: "15px",

    "& .add-product": {
      "&.MuiButtonBase-root": {
        width: "200px",
        height: "43px",
        color: "#88226a",
        fontSize: "18px",
        borderRadius: "4px",
        border: "1px solid #e313bf",
        backgroundColor: "transparent",
        textTransform: "lowercase",
        "&:hover": {
          color: "white",
          backgroundColor: "#cb11ab",
        },
        "&:active": {
          backgroundColor: "#e313bf",
          color: "white",
        },
      },
    },

    "& .create-discount": {
      width: "180px",
      height: "40px",
      color: "#FF55AA",
      borderColor: "#FF55AA",
      borderRadius: "8px",
      fontWeight: "bold",
      fontSize: "14px",
    },
  },
});

const StyledDivider = styled("div")({
  borderTop: "2px solid #f0f0f0",
  width: "1000px",
  marginTop: "-200px",
});

const StyledButtonGroup = styled(Box)({
  display: "flex",
  padding: "10px",
  gap: "8px",
});

const StyledButton = styled("button")(({ selected }) => ({
  minWidth: "133.5px",
  padding: "10px 20px",
  backgroundColor: selected ? "#CB11AB" : "#f0f0f0",
  color: selected ? "#fff" : "#333",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: selected ? "bold" : "normal",
}));

const StyledBoxDeleite = styled("div")(() => ({
  display: "flex",
  gap: "20px",
}));
