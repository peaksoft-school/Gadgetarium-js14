import { useEffect, useState } from "react";
import { Box, styled, Pagination } from "@mui/material";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import Infografics from "../../components/UI/Infografics";
import ProductTable from "../../components/UI/table/ProductTable";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProdates,
  getProdates,
  uploadFile,
  saveBanner,
} from "../../store/productAdmin/productAdminAuthThank";
import { ChangeAican, EditLine, Garbage } from "../../assets/icon";
import Loading from "../../components/UI/Loading";
import ModalDelete from "../../components/UI/ModalDelete";
import ModalScitca from "./ModalScitca";
import AddBannerModal from "../../components/UI/AddBannerModal";
import { useDebounce } from "./useDebounce";
import SortPopup from "./SortPopup";
import DateRangePicker from "./DateRangePicker";
import { useNavigate } from "react-router-dom";

const ProductsSheetTable = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productAdmin);
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [openModalScitca, setOpenModalScitca] = useState(false);
  const [downLoadBanner, setDownloadBanner] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [file, setFile] = useState(null);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("все товары");
  const [before, setBefore] = useState("");
  const [from, setFrom] = useState("");
  const [sortBy, setSortBy] = useState("");

  const rowsPerPage = 10;

  const debautsTaimer = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(
      getProdates({ filter, from, before, sortBy, keyWord: debautsTaimer })
    );
  }, [dispatch, filter, debautsTaimer, before, from, sortBy]);

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  const handlerSelectorInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // dispatch(uploadFile(file));
  };

  const handleSaveBanner = () => {
    if (file) {
      const formData = new FormData();
      formData.append("bannerList", file);

      dispatch(saveBanner(formData));

      setFile(null);
    }
  };
  useEffect(() => {
    if (file) {
      dispatch(uploadFile(file)).unwrap();
    }
  }, [dispatch, file]);

  const handleOpenModal = () => setDownloadBanner(true);
  const handleOnClose = () => setDownloadBanner(false);

  const filteredProducts = products;

  const handlerDeleteProduct = (productId) => {
    setSelectedProductId(productId);
    setOpenModal(true);
  };

  const confirmDelete = () => {
    if (selectedProductId) {
      dispatch(deleteProdates(selectedProductId));
      setOpenModal(false);
    }
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const toggleDiscountModal = () => setOpenModalScitca((prev) => !prev);

  const navigateToDetail = (id) => {
    navigate(`/admin/${id}`);
  };

  const columns = [
    { Header: "ID", accessorFn: (_, index) => index + 1 },
    {
      Header: "Фото",
      Cell: ({ row }) => (
        <div style={{ width: "50px", height: "50px" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={row.original.image}
            alt="product"
          />
        </div>
      ),
    },
    { Header: "Артикул", accessor: "itemNumber" },
    {
      Header: "Наименование товара",
      accessor: "name",
      Cell: ({ row }) => (
        <StyledText onClick={() => navigateToDetail(row.original.subProductId)}>
          {row.original.name}
        </StyledText>
      ),
    },
    { Header: "Дата создания", accessor: "createdAt" },
    { Header: "Кол-во", accessor: "quantity" },
    {
      Header: "Цена товара",
      accessor: "totalPrice",
      Cell: ({ row }) => (
        <div>
          <p>{row.original.totalPrice}</p>
          <p>{row.original.percentOfDiscount || "0%"}</p>
        </div>
      ),
    },
    { Header: "Текущая цена", accessor: "price" },
    {
      Header: "Действия",
      accessor: "actions",
      Cell: ({ row }) => (
        <StyledBoxDeleite>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handlerDeleteProduct(row.original.subProductId)}
          >
            <img src={Garbage} alt="Удалить" />
            <img
              src="https://login.kg/image/cache/catalog/new/Phones/Apple/iPhone%2014/Pro-Pro%20Max/1-500x500.jpg"
              alt=""
            />
          </div>
          <img src={EditLine} alt="Редактировать" />
        </StyledBoxDeleite>
      ),
    },
  ];

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const navigateToAddProduct = () => {
    navigate("/admin/add-product");
  };

  return (
    <>
      {loading && <Loading />}
      <Box sx={{ boxSizing: "border-box", margin: "0 auto" }}>
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
                  selected={filter === "все товары"}
                  onClck={() => handleFilterChange("все товары")}
                >
                  Все товары
                </StyledButton>
                <StyledButton
                  selected={filter === "в продаже"}
                  onClick={() => handleFilterChange("в продаже")}
                >
                  В продаже
                </StyledButton>
                <StyledButton
                  selected={filter === "В избранном"}
                  onClick={() => handleFilterChange("В избранном")}
                >
                  В избранном
                </StyledButton>
                <StyledButton
                  selected={filter === "В корзине"}
                  onClick={() => handleFilterChange("В корзине")}
                >
                  В корзине
                </StyledButton>
              </StyledButtonGroup>
            </Box>
            <Box className="action-buttons">
              <Button className="add-product" onClick={navigateToAddProduct}>
                Добавить товар
              </Button>
              <Box>
                <Button className="add-product" onClick={toggleDiscountModal}>
                  Создать скидку
                </Button>
                {openModalScitca && (
                  <ModalScitca
                    open={openModalScitca}
                    onClose={toggleDiscountModal}
                  />
                )}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    marginTop: "40px",
                    marginLeft: "40px",
                  }}
                  onClick={handleOpenModal}
                >
                  <img src={ChangeAican} alt="Icon" />
                  <p>Загрузить баннер</p>
                </Box>
              </Box>
            </Box>
            {/* {uploadLoading && <Loading />}
            {error && <p style={{ color: "red" }}>Ошибка: {error}</p>} */}
            <Infografics />
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
                width: "1100px",
              }}
            >
              <Box
                sx={{
                  marginTop: "-45px",
                }}
              >
                <p>Найдено {filteredProducts.length} товаров</p>
              </Box>
              <Box>
                <SortPopup onClick={handleSortChange} />
              </Box>
            </Box>
            <ProductTable data={paginatedProducts} columns={columns} />
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
              count={Math.ceil(filteredProducts.length / rowsPerPage)}
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
          open={downLoadBanner}
          onClose={handleOnClose}
          onFileChange={handleFileChange}
          onSave={handleSaveBanner}
          disabled={!file}
          file={file}
        />
      </Box>
    </>
  );
};

export default ProductsSheetTable;

const StyledText = styled("p")(() => ({
  cursor: "pointer",

  ":hover": {
    textDecoration: "underline",
  },
}));

const StyledBoxTable = styled(Box)(() => ({
  width: "1130px",
  marginTop: "90px",
}));

const StyledInputDate = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
}));

const StyledContainer = styled("div")({
  boxSizing: "border-box",
  // margin: "0 auto",
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
        textTransform: "lowercase", // Все буквы станут маленькими
        "&:hover": {
          color: "white",
          backgroundColor: "#cb11ab",
        },
        "&:active": {
          backgroundColor: "#e313bf",
          color: "white",
        },
        "&:before": {
          // content: '"A"', // Добавляем первую букву
          // textTransform: 'uppercase', // Первая буква заглавная
          // marginRight: '4px', // Зазор после первой буквы, если нужно
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
  width: "1090px",
  marginTop: "-140px",
});

const StyledButtonGroup = styled(Box)({
  display: "flex",
  padding: "10px",
  gap: "8px",
});

const StyledButton = styled("button")(({ selected }) => ({
  minWidth: "120px",
  padding: "10px 20px",
  backgroundColor: selected ? "#384255" : "#f0f0f0",
  color: selected ? "#fff" : "#333",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: selected ? "bold" : "normal",
  "&:hover": {
    backgroundColor: selected ? "#2c3445" : "#e6e6e6",
  },
}));

const StyledBoxDeleite = styled("div")(() => ({
  display: "flex",
  gap: "20px",
}));
