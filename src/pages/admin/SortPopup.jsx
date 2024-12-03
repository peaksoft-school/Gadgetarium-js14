import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { Streca } from "../../assets/icon";

const SortPopup = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenu, setSubMenu] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenu(false);
  };

  const handleSubMenuToggle = () => {
    setSubMenu(!subMenu);
  };

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          cursor: "pointer",
          background: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        onClick={handleOpen}
      >
        <Typography sx={{ fontWeight: 500 }}>Сортировать</Typography>
        <img src={Streca} alt="arrow" style={{ marginLeft: "8px" }} />
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
          sx={{
            fontWeight: 500,
            padding: "10px 20px",
            "&:hover": { color: "magenta" },
          }}
        >
          Новинки
        </MenuItem>
        <MenuItem
          onClick={handleSubMenuToggle}
          sx={{
            fontWeight: 500,
            padding: "10px 20px",
            "&:hover": { color: "magenta" },
          }}
        >
          По акции
        </MenuItem>
        <MenuItem
          onClick={handleSubMenuToggle}
          sx={{
            fontWeight: 500,
            padding: "10px 20px",
            "&:hover": { color: "magenta" },
          }}
        >
          Рекомендуемые
        </MenuItem>
        <MenuItem
          onClick={handleSubMenuToggle}
          sx={{
            fontWeight: 500,
            padding: "10px 20px",
            "&:hover": { color: "magenta" },
          }}
        >
          По увеличению цены
        </MenuItem>
        <MenuItem
          onClick={handleSubMenuToggle}
          sx={{
            fontWeight: 500,
            padding: "10px 20px",
            "&:hover": { color: "magenta" },
          }}
        >
          По уменьшению цены
        </MenuItem>
      </Menu>

      {subMenu && (
        <Menu
          anchorEl={anchorEl}
          open={subMenu}
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
