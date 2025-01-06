import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  styled,
  Modal,
  InputAdornment,
  IconButton,
  TextField,
  Rating,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { signInRequest } from "../../store/auth/authThunk";
import { useForm } from "react-hook-form";
import Input from "../UI/Input";
import { SystemX } from "../../assets/icon";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Loading from "../UI/Loading";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { getRating } from "../../store/cardof-product-description/cardofProductDescriptionThunk";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат Email")
    .required("Email обязателен"),
  password: yup
    .string()
    .min(8, "Пароль должен содержать не менее 8 символов")
    .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .matches(/\d/, "Пароль должен содержать хотя бы одну цифру")
    .required("Пароль обязателен"),
});

const Ratings = ({ onClose, openSignUp }) => {
  const { ratingData } = useSelector((state) => state.cardofProduct);
  console.log("RAITINGS", ratingData);

  const ratings = ratingData
    ? [
        { stars: 5, count: ratingData.five || 0 },
        { stars: 4, count: ratingData.four || 0 },
        { stars: 3, count: ratingData.three || 0 },
        { stars: 2, count: ratingData.two || 0 },
        { stars: 1, count: ratingData.one || 0 },
      ]
    : [];

  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const { isLoading, error } = useSelector((state) => state.auth);
  const { isAuth } = useSelector((state) => state.auth.userData);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const onSubmit = (data) => {
    const newUserData = {
      email: data.email,
      password: data.password,
    };

    dispatch(signInRequest({ userData: newUserData, onClose }));
  };
  const productId = 1;
  useEffect(() => {
    dispatch(getRating({ productId }));
  }, []);

  return (
    <Box>
      <StyledMainBox>
        <StyledBox>
          <Box className="leftSection">
            <Box sx={{ display: "flex" }}>
              <Typography variant="h4" className="rating">
                {ratingData?.rating}
              </Typography>
              <Box className="stars">
                {Array.from({ length: Math.floor(ratingData?.rating) }).map(
                  (_, index) => (
                    <StarIcon key={index} color="warning" />
                  )
                )}
                {ratingData?.rating % 1 !== 0 && (
                  <StarHalfIcon color="warning" />
                )}
              </Box>
            </Box>

            <Typography className="totalReviews">
              {ratingData?.totalReviews} отзывов
            </Typography>
          </Box>

          <Box className="rightSection">
            {ratings?.map((item) => (
              <Box key={item.stars} className="ratingRow">
                <Box className="starsRow">
                  {Array.from({ length: 5 }).map((_, index) => {
                    if (index < item.stars) {
                      return (
                        <StarIcon
                          key={index}
                          color="warning"
                          fontSize="small"
                        />
                      );
                    }
                    return (
                      <StarBorderIcon
                        sx={{
                          color: "#f69a19",
                        }}
                        key={index}
                        fontSize="small"
                      />
                    );
                  })}
                </Box>
                <Typography className="reviewCount">
                  {item.count} отзывов
                </Typography>
              </Box>
            ))}
          </Box>
        </StyledBox>

        <Button
          variant="contained"
          className="reviewButton"
          onClick={handleOpenModal}
        >
          Оставить отзыв
        </Button>
      </StyledMainBox>

      <StyledModal open={openModal} onClose={handleCloseModal}>
        <StyledModalContent>
          {isAuth ? (
            <>
              <Typography variant="h5" component="h1">
                Оставьте свой отзыв
              </Typography>
              <Box
                sx={{
                  marginBottom: "20px",
                  display: "flex",
                  marginTop: "20px",
                }}
              >
                <Typography>Оценка</Typography>
                <Box sx={{ display: "flex" }}>
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Box>
              </Box>
              <Typography>Ваш комментарии</Typography>
              <TextField
                minRows={1}
                maxRows={10}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "150px",
                    overflow: "auto",
                    alignItems: "flex-start",
                  },
                }}
                placeholder="Напишите ваш отзыв"
                multiline
                fullWidth
              />
              <Button variant="contained" sx={{ marginTop: "20px" }}>
                Отправить отзыв
              </Button>
            </>
          ) : (
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <img src={SystemX} alt="" onClick={handleCloseModal} />
              <h3>
                Войдите или зарегистрируйтесь <br /> чтобы опубликовать отзыв
              </h3>

              <Input
                {...register("email")}
                placeholder="Напишите email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />

              <Input
                {...register("password")}
                placeholder="Напишите пароль"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />

              {(errors.email || errors.password) && (
                <ErrorMessage>
                  Неправильно указан Email и/или пароль
                </ErrorMessage>
              )}

              {error && <ErrorMessage>{error}</ErrorMessage>}

              <Button variant="contained" type="submit">
                {isLoading ? (
                  <>
                    <Loading /> <p>... </p>
                  </>
                ) : (
                  "Войти"
                )}
              </Button>
              <StyledP>
                Нет аккаунта?
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/");
                    onClose();
                  }}
                >
                  Зарегистрироваться
                </span>
              </StyledP>
            </StyledForm>
          )}
        </StyledModalContent>
      </StyledModal>
    </Box>
  );
};

export default Ratings;

const StyledMainBox = styled(Box)(() => ({
  backgroundColor: "#f4f4f4",
  borderRadius: "12px",
  padding: "24px",
  width: "400px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  alignItems: "center",
  "& button": {
    width: "80%",
    display: "flex",
    margin: "auto",
    height: "45px",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "40px",
  "& .leftSection": {
    textAlign: "center",
    marginBottom: "12px",
  },
  "& .rating": {
    fontWeight: "bold",
    fontSize: "30px",
    marginRight: "8px",
  },
  "& .stars": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "6px 0",
    "& svg": {
      width: "16px",
      height: "16px",
    },
  },
  "& .totalReviews": {
    fontSize: "14px",
    color: "#888",
  },
  "& .rightSection": {
    width: "100%",
    marginBottom: "16px",
  },
  "& .ratingRow": {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
    justifyContent: "space-between",
  },
  "& .starsRow": {
    display: "flex",
    "& svg": {
      width: "16px",
      height: "16px",
    },
  },
  "& .reviewCount": {
    fontSize: "12px",
    color: "#555",
  },
  "& .reviewButton": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const StyledModal = styled(Modal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
}));

const StyledModalContent = styled(Box)(() => ({
  backgroundColor: "white",
  height: "auto",
  borderRadius: "4px",
  padding: "30px",
  width: "544px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  // textAlign: "center",
  "& h1": {
    marginTop: "20px",
  },
  "& button ": {
    height: "50px",
  },
}));

const StyledForm = styled("form")(() => ({
  // width: "580px",
  height: "auto",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  padding: "60px",
  textAlign: "center",
  position: "relative",

  "& img": {
    width: "35px",
    height: "35px",
    position: "absolute",
    top: "10px",
    right: "10px",
  },
}));

const ErrorMessage = styled("p")(() => ({
  color: "red",
  fontSize: "16px",
  marginTop: "10px",
  marginBottom: "0px",
}));

const StyledP = styled("p")(() => ({
  "& span": {
    fontWeight: "bold",
    color: "#3268e6",
    marginLeft: "3px",
  },
}));
