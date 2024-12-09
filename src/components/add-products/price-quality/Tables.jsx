import React, { useEffect, useState } from "react";
import ProductTable from "../../UI/table/ProductTable";
import Button from "../../UI/Button";
import { Box, styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductPrice,
  setProductQuantity,
} from "../../../store/admin-addproduct/productsSlice";

const Tables = ({ setNewValue }) => {
  const [smartwatch, setSmartWatch] = useState([]);
  const [smartPhone, setSmartPhone] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [tablet, setTablet] = useState([]);
  const dispatch = useDispatch();
  const { subProducts } = useSelector((state) => state.product.mainData);

  const [price, setPrice] = useState("");

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const onSendPrice = () => {
    if (subProducts.length) {
      subProducts.forEach((product) => {
        dispatch(
          setProductPrice({ productId: product.productId, updatedPrice: price })
        );
      });
    }
  };

  const handlePriceChange = (e, productId) => {
    const updatedPrice = e.target.value;
    dispatch(setProductPrice({ productId, updatedPrice }));
  };

  const tabletColumns = [
    { Header: "Бренд", accessor: "brand" },
    { Header: "Объём памяти", accessor: "characteristics.memorySize" },
    { Header: "Оперативная память", accessor: "characteristics.ram" },
    { Header: "Цвет", accessor: "colour" },
    { Header: "Кол-во SIM-карт", accessor: "characteristics.simCart" },
    { Header: "Дата выпуска", accessor: "date" },
    {
      Header: "Количество товара",
      accessor: "quantity",
      Cell: ({ value, row }) => {
        const productId = row.original.productId;

        const handleQuantityChange = (e, productId) => {
          const updatedQuantity = e.target.value;
          dispatch(setProductQuantity({ productId, updatedQuantity }));
        };

        return (
          <Box key={`quantity-${row.index}`}>
            <input
              style={{
                border: "none",
                backgroundColor: "#CB11AB1A",
                padding: "10px",
              }}
              value={value}
              onChange={(e) => handleQuantityChange(e, productId)}
            />
          </Box>
        );
      },
    },
    {
      Header: "Цена",
      accessor: "price",
      Cell: ({ value, row }) => {
        const productId = row.original.productId;

        const handlePriceChange = (e, productId) => {
          const updatedPrice = e.target.value;
          dispatch(setProductPrice({ productId, updatedPrice }));
        };

        return (
          <Box key={`price-${row.index}`}>
            <input
              style={{
                border: "none",
                backgroundColor: "#CB11AB1A",
                padding: "10px",
              }}
              value={value}
              onChange={(e) => handlePriceChange(e, productId)}
            />
          </Box>
        );
      },
    },
  ];
  const smartPhoneColumns = [
    { Header: "Бренд", accessor: "brand" },
    { Header: "Объём памяти", accessor: "characteristics.memorySizes" },
    { Header: "Оперативная память", accessor: "characteristics.ram" },
    { Header: "Цвет", accessor: "colour" },
    { Header: "Кол-во SIM-карт", accessor: "characteristics.simCart" },
    { Header: "Дата выпуска", accessor: "date" },
    {
      Header: "Кол-во товара",
      accessor: "quantity",
      Cell: ({ value, row }) => {
        const productId = row.original.productId;
        const handleQuantityChange = (e, productId) => {
          const updatedQuantity = e.target.value;
          dispatch(setProductQuantity({ productId, updatedQuantity }));
        };

        return (
          <Box key={`quantity-${row.index}`}>
            <input
              style={{
                border: "none",
                backgroundColor: "#CB11AB1A",
                padding: "10px",
              }}
              value={value}
              onChange={(e) => handleQuantityChange(e, productId)}
            />
          </Box>
        );
      },
    },
    {
      Header: "Цена",
      accessor: "price",
      Cell: ({ value, row }) => {
        const productId = row.original.productId;
        return (
          <Box key={`price-${row.index}`}>
            <input
              style={{
                border: "none",
                backgroundColor: "#CB11AB1A",
                padding: "10px",
              }}
              value={value}
              onChange={(e) => handlePriceChange(e, productId)}
            />
          </Box>
        );
      },
    },
  ];

  const watchColumns = [
    { Header: "Бренд", accessor: "brand" },
    { Header: "Объём памяти", accessor: "characteristics.memorySizes" },
    { Header: "Цвет", accessor: "colour" },
    { Header: "Материал ремешка", accessor: "characteristics.strapMaterial" },
    { Header: "Материал корпуса", accessor: "characteristics.caseMaterial" },
    { Header: "Размер часов", accessor: "characteristics.watchSize" },
    { Header: "Размер дисплея", accessor: "characteristics.displayDiagonal" },
    { Header: "Форма корпуса", accessor: "characteristics.bodyForm" },
    { Header: "Пол", accessor: "characteristics.gender" },
    { Header: "Водонепраницаемый", accessor: "characteristics.confirm" },
    {
      Header: "Беспроводные интерфейсы",
      accessor: "characteristics.interfaces",
    },
    { Header: "Дата выпуска", accessor: "date" },
    {
      Header: "Кол-во товара",
      accessor: "quantity",
      Cell: ({ value, row }) => {
        const productId = row.original.productId;

        const handleQuantityChange = (e, productId) => {
          const updatedQuantity = e.target.value;
          dispatch(setProductQuantity({ productId, updatedQuantity }));
        };

        return (
          <Box key={`quantity-${row.index}`}>
            <input
              style={{
                border: "none",
                backgroundColor: "#CB11AB1A",
                padding: "10px",
              }}
              value={value}
              onChange={(e) => handleQuantityChange(e, productId)}
            />
          </Box>
        );
      },
    },

    {
      Header: "Цена",
      accessor: "price",
      Cell: ({ value, row }) => {
        const productId = row.original.productId;

        return (
          <Box key={`price-${row.index}`}>
            <input
              style={{
                border: "none",
                backgroundColor: "#CB11AB1A",
                padding: "10px",
              }}
              value={value}
              onChange={(e) => handlePriceChange(e, productId)}
            />
          </Box>
        );
      },
    },
  ];

  const laptopColumns = [
    { Header: "Бренд", accessor: "brand" },
    { Header: "Объём памяти", accessor: "characteristics.memorySize" },
    { Header: "Оперативная память", accessor: "characteristics.ram" },
    { Header: "Цвет", accessor: "colour" },
    { Header: "Тип хранения", accessor: "characteristics.storageType" },
    { Header: "Дата выпуска", accessor: "date" },
    {
      Header: "Кол-во товара",
      accessor: "quantity",
      Cell: ({ value, row }) => {
        const productId = row.original.productId;

        const handleQuantityChange = (e, productId) => {
          const updatedQuantity = e.target.value;
          dispatch(setProductQuantity({ productId, updatedQuantity }));
        };

        return (
          <Box key={`quantity-${row.index}`}>
            <input
              style={{
                border: "none",
                backgroundColor: "#CB11AB1A",
                padding: "10px",
              }}
              value={value}
              onChange={(e) => handleQuantityChange(e, productId)}
            />
          </Box>
        );
      },
    },
    {
      Header: "Цена",
      accessor: "price",
      Cell: ({ value, row }) => {
        const productId = row.original.productId;

        const handlePriceChange = (e, productId) => {
          const updatedPrice = e.target.value;
          dispatch(setProductPrice({ productId, updatedPrice }));
        };

        return (
          <Box key={`price-${row.index}`}>
            <input
              style={{
                border: "none",
                backgroundColor: "#CB11AB1A",
                padding: "10px",
              }}
              value={value}
              onChange={(e) => handlePriceChange(e, productId)}
            />
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    const watches = subProducts.filter(
      (item) => item.category === "smartWatch"
    );
    const phones = subProducts.filter((item) => item.category === "smartPhone");
    const laptops = subProducts.filter((item) => item.category === "laptop");
    const tablets = subProducts.filter((item) => item.category === "tablet");

    setSmartWatch(watches);
    setSmartPhone(phones);
    setLaptop(laptops);
    setTablet(tablets);
  }, [subProducts]);

  return (
    <div style={{ width: "100%" }}>
      <WrapperBox>
        <p>Общая цена</p>
        <StyledBox>
          <input onChange={priceChangeHandler} value={price} />
          <Box sx={{ width: "200px" }}>
            <Button variant="contained" type="submit" onClick={onSendPrice}>
              Указать цену
            </Button>
          </Box>
        </StyledBox>
      </WrapperBox>

      {smartPhone.length > 0 && (
        <>
          <h2>Смартфоны</h2>
          <ProductTable data={smartPhone} columns={smartPhoneColumns} />
        </>
      )}
      {smartwatch.length > 0 && (
        <>
          <h2>Smart часы</h2>
          <ProductTable data={smartwatch} columns={watchColumns} />
        </>
      )}
      {laptop.length > 0 && (
        <>
          <h2>Laptop</h2>
          <ProductTable data={laptop} columns={laptopColumns} />
        </>
      )}
      {tablet.length > 0 && (
        <>
          <h2>Tablet</h2>
          <ProductTable data={tablet} columns={tabletColumns} />
        </>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 2,
          width: "100%",
          "& .MuiButtonBase-root": {
            width: "100px",
          },
        }}
      >
        <Box sx={{ width: "130px" }}>
          <Button variant="contained" onClick={() => setNewValue("3")}>
            Далее
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Tables;

const StyledBox = styled(Box)(() => ({
  width: "400px",
  display: "flex",
  gap: "10px",
  paddingBottom: "60px",
  alignItems: "center",
  "& input": {
    width: "140px",
    height: "45px",
    borderRadius: "6px",
    border: "1px solid #909CB580",
    textAlign: "center",
  },
}));

const WrapperBox = styled(Box)(() => ({
  paddingTop: "30px",
}));
