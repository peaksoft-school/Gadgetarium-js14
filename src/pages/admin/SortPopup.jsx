import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { Streca } from "../../assets/icon";

const SortPopup = ({ onClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSubMenuOpen, setSubMenu] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenu(false);
  };

  const toggleSubMenu = () => {
    setSubMenu((prev) => !prev);
  };

  const handleSortOptionClick = (sortOption) => {
    onClick(sortOption);
    handleClose();
  };

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          cursor: "pointer",
          background: "#fff",
          marginTop: "-49px",
          borderRadius: "8px",
        }}
        onClick={handleOpen}
      >
        <Typography sx={{ fontWeight: 500 }}>Сортировать</Typography>
        <img src={Streca} alt="arrow" />
      </Box>

      <Menu
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
        <MenuItem
          onClick={() => handleSortOptionClick("Новинки")}
          sx={{
            fontWeight: 500,
            padding: "10px 20px",
            "&:hover": { color: "magenta" },
          }}
        >
          Новинки
        </MenuItem>
        <MenuItem
          onClick={() => handleSortOptionClick("По акции")}
          sx={{
            fontWeight: 500,
            padding: "10px 20px",
            "&:hover": { color: "magenta" },
          }}
        >
          По акции
        </MenuItem>
        <MenuItem
          onClick={() => handleSortOptionClick("Рекомендуемые")}
          sx={{
            fontWeight: 500,
            padding: "10px 20px",
            "&:hover": { color: "magenta" },
          }}
        >
          Рекомендуемые
        </MenuItem>
        {/* <MenuItem onClick={() => handleSortOptionClick("По увеличению цены")} sx={{ fontWeight: 500, padding: "10px 20px", "&:hover": { color: "magenta" } }}>По увеличению цены</MenuItem> */}
        <MenuItem
          onClick={() => handleSortOptionClick("По уменьшению цены")}
          sx={{
            fontWeight: 500,
            padding: "10px 20px",
            "&:hover": { color: "magenta" },
          }}
        >
          По уменьшению цены
        </MenuItem>
      </Menu>

      {isSubMenuOpen && (
        <Menu
          anchorEl={anchorEl}
          open={isSubMenuOpen}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              borderRadius: "12px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              padding: "8px 0",
              marginLeft: "340px",
              marginTop: "8px",
            },
          }}
        >
          <MenuItem
            sx={{
              fontWeight: 500,
              padding: "10px 20px",
              "&:hover": { color: "magenta" },
            }}
          >
            Все акции
          </MenuItem>
          <MenuItem
            sx={{
              fontWeight: 500,
              padding: "10px 20px",
              "&:hover": { color: "magenta" },
            }}
          >
            До 50%
          </MenuItem>
          <MenuItem
            sx={{
              fontWeight: 500,
              padding: "10px 20px",
              "&:hover": { color: "magenta" },
            }}
          >
            Свыше 50%
          </MenuItem>
        </Menu>
      )}
    </Box>
  );
};

export default SortPopup;
