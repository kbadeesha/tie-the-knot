import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu"; 
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import TranslateIcon from "@mui/icons-material/Translate";
import { useContext, useState } from "react";
import "../../styles/components/button.css"
import { useTranslation } from "next-i18next";
import ThemeContext from "@/context/ThemeContext";
import CustomButton from "../components/inputs/TTKCustomButton";
import TTKCustomButton from "../components/inputs/TTKCustomButton";



const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];


const Header = () => {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const handleOnClickRegister = ()=>{
    console.log("register clicked")

    }
    const handleOnClickLogin = ()=>{
    console.log("login clicked")

    }
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="static" className="bg-white dark:bg-gray-800">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Navigation Links (left) */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start", // Align to the left
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Centered Logo */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              className="text-gray-900 dark:text-white"
            >
              <Image
                src={
                  theme === "dark" ? "/assets/logo_lite.svg" : "/assets/logo.svg"
                }
                alt="TieTheKnot"
                width={120}
                height={20}
              />
            </Typography>
          </Box>

          {/* User Settings, Theme Toggle, and Language (right) */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end", // Align to the right
              alignItems: "center"
            }}
          >
            <IconButton
              className={`ml-1 ${
                theme === "dark" ? "text-inherit" : "text-black"
              }`}
            >
              <TranslateIcon />
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={() => handleLanguageChange("en")}>
                <Typography textAlign="center">English</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("es")}>
                <Typography textAlign="center">Spanish</Typography>
              </MenuItem>{" "}
              {/* Add more languages as needed */}
            </Menu>
            <IconButton
              className={`ml-1 ${
                theme === "dark" ? "text-inherit" : "text-black"
              }`}
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton>

            {/* Responsive Menu Icon (Hamburger on mobile) */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon /> {/* Use the hamburger icon */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Login Register Buttons  */}
            <TTKCustomButton
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleOnClickRegister}
          >
            Register
          </TTKCustomButton>
            <TTKCustomButton
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleOnClickLogin}
          >
            Login
          </TTKCustomButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;