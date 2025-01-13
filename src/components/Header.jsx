import styled from "@emotion/styled";
import {
  Box,
  TextField,
  InputAdornment,
  Autocomplete,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import {
  IconBasket,
  IconFacebook,
  IconInstagram,
  IconLike,
  IconPersonal,
  IconSearch,
  IconShoppingCard,
  IconWhatsApp,
  Gadgettarium,
} from "../assets/icon";
import ClearIcon from "@mui/icons-material/Clear";
import theme from "../assets/theme/theme";
import SidebarMenu from "./UI/SaidebarMenu";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import LogOut from "./LogOut";

const links = [
  { id: 2, text: "Главная", path: ROUTES.USER.index },
  { id: 3, text: "О магазине", path: ROUTES.USER.aboutStore },
  { id: 5, text: "Доставка", path: ROUTES.USER.delivery },
  { id: 7, text: "FAQ", path: ROUTES.USER.faq },
  { id: 8, text: "Контакты", path: ROUTES.USER.contacts },
];

const suggestions = [
  "Электроника",
  "Мобильные телефоны",
  "Ноутбуки",
  "Аксессуары",
  "Смарт-часы",
  "Гаджеты",
];

const Header = () => {
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [, setShowMainElements] = useState(true);
  const [showAdgetariumImg, setShowAdgetariumImg] = useState(false);

  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const [logout, setLogout] = useState(false);

  const toggleSignInModal = () => {
    setOpenSignIn((prev) => !prev);
  };

  const toggleSignUpModal = () => {
    setOpenSignUp((prev) => !prev);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowMainElements(false);
      setShowAdgetariumImg(true);
    } else {
      setShowMainElements(true);
      setShowAdgetariumImg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLogout = () => {
    setLogout((prev) => !prev);
    handleClose();
  };

  const menuLinks = [
    { key: "history", text: "История заказов", path: ROUTES.USER.orderHistory },
    {
      key: "favorites",
      text: "Избранное",
      path: ROUTES.USER.accountFavourites,
    },
    { key: "profile", text: "Профиль", path: ROUTES.USER.profile },

    { key: "logout", text: "Выйти", action: toggleLogout },
  ];

  return (
    <>
      <FirstBox>
        <StyledAdgetariumImg onClick={() => navigate("/")}>
          <img src={Gadgettarium} alt="iconG" />
        </StyledAdgetariumImg>
        <LinkBox>
          {links.map(({ id, text, path }) => (
            <StyledNavLink
              key={id}
              data-active={location.pathname.startsWith(path)}
              to={path}
            >
              {text}
            </StyledNavLink>
          ))}
        </LinkBox>
        <StyledPersonBox>
          {userData.isAuth && <span>{userData.name}</span>}
          <Tooltip
            title="Профиль"
            PopperProps={{
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [15, -10],
                  },
                },
              ],
            }}
          >
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <img src={IconPersonal} alt="pr" />
            </IconButton>
          </Tooltip>
          <StyledMenu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {!userData.isAuth
              ? [
                  <StyledMenuItem key="signin" onClick={toggleSignInModal}>
                    <p>Войти</p>
                  </StyledMenuItem>,
                  <StyledMenuItem key="signup" onClick={toggleSignUpModal}>
                    <p>Регистрация</p>
                  </StyledMenuItem>,
                ]
              : [
                  <>
                    {menuLinks.map((link) => (
                      <StyledMenuItem
                        key={link.key}
                        onClick={
                          link.action ? link.action : () => navigate(link.path)
                        }
                      >
                        <p>{link.text}</p>
                      </StyledMenuItem>
                    ))}
                  </>,
                ]}
          </StyledMenu>
        </StyledPersonBox>
      </FirstBox>

      <SecondBox>
        <BoxCatalog>
          {showAdgetariumImg && (
            <StyledAdgetariumImg onClick={() => navigate("/")}>
              <img src={Gadgettarium} alt="Gadgetarium" />
            </StyledAdgetariumImg>
          )}
          <SidebarMenu />
        </BoxCatalog>
        <hr />
        <StyledAutcompled
          options={suggestions}
          value={selectedValue}
          onChange={(event, newValue) => {
            setSelectedValue(newValue);
            setInputValue(newValue);
          }}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              placeholder="Поиск по каталогу магазина"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="start">
                    {selectedValue ? (
                      <InputAdornment position="end">
                        <ClearIcon
                          onClick={() => {
                            setInputValue("");
                            setSelectedValue(null);
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </InputAdornment>
                    ) : (
                      <img src={IconSearch} alt="search" />
                    )}
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          )}
          freeSolo
        />
        {!showAdgetariumImg && (
          <StyledImg>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61551382664778"
            >
              <img key={"1"} src={IconFacebook} alt="face" />
            </a>

            <a
              href="https://www.instagram.com/bayelbikiev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img key={"3"} src={IconInstagram} alt="insta" />
            </a>
            <a
              href="https://wa.me/996707507530"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img key={"5"} src={IconWhatsApp} alt="whatsapp" />
            </a>
          </StyledImg>
        )}
        {userData.isAuth && (
          <StyledImgBox>
            <img
              src={IconShoppingCard}
              alt=""
              onClick={() => navigate("/user/compare")}
            />
            <IconButton onClick={() => navigate("/user/basket")}>
              <img src={IconBasket} alt="like" />
            </IconButton>
            <img
              src={IconLike}
              alt="like"
              onClick={() => navigate("/user/favourit")}
            />
          </StyledImgBox>
        )}
      </SecondBox>

      <SignIn
        open={openSignIn}
        onClose={toggleSignInModal}
        openSignUp={toggleSignUpModal}
      />
      <SignUp
        open={openSignUp}
        onClose={toggleSignUpModal}
        openSignIn={toggleSignInModal}
      />

      <LogOut open={logout} onClose={toggleLogout} />
    </>
  );
};

export default Header;

const FirstBox = styled(Box)(() => ({
  width: "100%",
  height: "60px",
  backgroundColor: theme.palette.black.dark,
  padding: "10px 60px 10px 60px",
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.lightGrey.light,
  alignItems: "center",
  borderBottom: "1px solid",
  borderColor: theme.palette.black.main,
}));

const SecondBox = styled(Box)(() => ({
  width: "100%",
  padding: "10px 60px 10px 60px",
  backgroundColor: theme.palette.black.dark,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center ",
  position: "sticky",
  top: "0",
  zIndex: 1000,

  "& hr": {
    width: "2px",
    height: "40px",
    backgroundColor: theme.palette.black.main,
    border: "none",
    margin: "0 30px",
  },
}));

const LinkBox = styled(Box)(() => ({
  display: "flex",
  gap: "24px",
  fontSize: "17px",
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  alignContent: "center",
  height: "40px",
  borderRadius: "4px",
  textAlign: "center",
  transition: "color 0.3s ease",
  cursor: "pointer",
  textDecoration: "none",
  color: "#fff",
  padding: "0 10px",

  "& span:hover": {
    backgroundColor: theme.palette.darkGrey.dark,
  },

  "&.active": {
    backgroundColor: theme.palette.darkGrey.dark,
  },
}));

const StyledAutcompled = styled(Autocomplete)(() => ({
  width: "100%",
  color: "#fff",
  margin: "0 150px 0 0",
}));

const StyledTextField = styled(TextField)(() => ({
  color: "#fff",
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    padding: "0",
    "& fieldset": {
      borderColor: theme.palette.darkGrey.dark,
      borderRadius: "8px",
      color: "#fff",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.lightGrey.main,
      borderRadius: "8px",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.lightGrey.main,
      borderRadius: "8px",
      color: "#fff",
    },
  },
}));

const StyledAdgetariumImg = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",

  "& img:first-of-type": {
    alignSelf: "start",
    marginTop: "-2px",
    marginRight: "3px",
    padding: "5px 4px",
  },
}));

const StyledPersonBox = styled(Box)(() => ({
  display: "flex",
  "& img": {
    width: "25px",
    height: "25px",
    marginLeft: "30px",
  },
  "& span": {
    marginTop: "2.5px",
    fontSize: "20px",
    fontWeight: "lighter",
  },
}));

const StyledImg = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  margin: "0 120px 0 0",
  cursor: "pointer",
  "& img": {
    width: "30px",
    height: "30px",
  },
  "& img:nth-of-type(2)": {
    width: "24px",
    height: "24px",
  },
}));

const StyledImgBox = styled(Box)(() => ({
  display: "flex",
  padding: "0",
  gap: "20px",
  alignItems: "center",
  cursor: "pointer",
}));

const BoxCatalog = styled(Box)(() => ({
  display: "flex",
  gap: "30px",
  alignItems: "center",
}));

const StyledMenu = styled(Menu)(() => ({
  "& .MuiPaper-root": {
    elevation: 0,
    marginTop: "1.5rem",
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      marginLeft: "-0.5rem",
      marginRight: "1rem",
    },
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
