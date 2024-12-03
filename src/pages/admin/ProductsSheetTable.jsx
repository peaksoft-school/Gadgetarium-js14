import React, { useEffect, useState, useMemo } from "react";
import { Box, styled, Pagination, ButtonBase } from "@mui/material";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import Infografics from "../../components/UI/Infografics";
import ProductTable from "../../components/UI/table/ProductTable";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from '../../components/UI/AdminHeader'
import {
  deleteProdates,
  getProdates,
  uploadFile,
  saveBanner, 
} from "../../store/productAdmin/productAdminAuthThank";
import { ChangeAican, EditLine, Garbage, Streca } from "../../assets/icon";
import Loading from "../../components/UI/Loading";
import ModalDelete from "../../components/UI/ModalDelete";
import ModalScitca from "./ModalScitca";
import AddBannerModal from "../../components/UI/AddBannerModal";
import { useDebounce } from "./useDebounce";
import SortPopup from "./SortPopup";
import { display } from "@mui/system";

const ProductsSheetTable = () => {
  const dispatch = useDispatch();
  const { products, loading, uploadLoading, error } = useSelector(
    (state) => state.productAdmin
  );

  const [openModal, setOpenModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [openModalScitca, setOpenModalScitca] = useState(false);
  const [downLoadBanner, setDownloadBanner] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [file, setFile] = useState(null);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const rowsPerPage = 10;

  const debautsTaimer = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debautsTaimer) {
      console.log(debautsTaimer, "day");
    }
    dispatch(getProdates({ filter, keyWord: debautsTaimer }));
  }, [dispatch, filter, debautsTaimer]);

  const handlerSelectorInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSaveBanner = () => {
    if (file) {
      const formData = new FormData();
      formData.append("bannerList", file);
      dispatch(saveBanner(file));

      setFile(null);
    }
  };

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
    { Header: "Наименование товара", accessor: "name" },
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

  return (
    <>
    <AdminHeader/>
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
                  selected={filter === "все товары "}
                  onClick={() => handleFilterChange("все товары ")}
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
                  selected={filter === " В корзине"}
                  onClick={() => handleFilterChange(" В корзине")}
                >
                  В корзине
                </StyledButton>
              </StyledButtonGroup>
            </Box>
            <Box className="action-buttons">
              <Button variant="contained" className="add-product">
                ДОБАВИТЬ ТОВАР
              </Button>
              <Box>
                <Button onClick={() => setOpenModalScitca(true)}>
                  СОЗДАТЬ СКИДКУ
                </Button>
                {openModalScitca && (
                  <ModalScitca
                    open={openModalScitca}
                    onClose={() => setOpenModalScitca(false)}
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
          <StyledInputDate >
            <Input type='date' placeholder='до ' />
            <Input type='date' />
          </StyledInputDate>
          <StyledBoxTable>
          
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "1100px",
              }}
            >
              <Box>
                <p>Найдено {filteredProducts.length} товаров</p>
              </Box>
              <Box>
                <SortPopup />
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
        />
      </Box>
    </>
  );
};

export default ProductsSheetTable;

const StyledBoxTable = styled(Box)(() => ({
  width: "1130px",
  marginTop: "90px",
}));

const StyledInputDate = styled(Box)(()=>({
  display:'flex',
  gap:'10px'

}))

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
      width: "180px",
      height: "40px",
      backgroundColor: "#FF55AA",
      color: "#fff",
      fontWeight: "bold",
      borderRadius: "8px",
      fontSize: "14px",
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
