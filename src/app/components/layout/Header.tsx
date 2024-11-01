import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useState } from "react";
import ThemeContext from "@/context/ThemeContext";
import TTKCustomButton from "../common/TTKCustomButton";
import Link from "next/link";
import useAuthStore from "@/stores/authStore";
import { logoutUser } from "@/api/authApi";
import { useRouter } from "next/navigation";
const pages = ["Vendors", "Plan Your Wedding", "Blog"];
const settings = ["Profile", "Logout"];

const Header = () => {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { theme } = useContext(ThemeContext);

  const user = useAuthStore((state) => state.user);

  React.useEffect(() => {
    if (user !== null) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [user]);
  const handleOnClickLogin = () => {
    console.log("login clicked");
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
  const handleMenuItems = async (setting: string) => {
    await logoutUser();
    await window.location.reload();
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
                  theme === "dark"
                    ? "/assets/logo_lite.svg"
                    : "/assets/logo.svg"
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
              alignItems: "center",
            }}
          >
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
                  <Typography
                    onClick={() => handleMenuItems(setting)}
                    textAlign="center"
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>

            <Link href="/pages/login" passHref>
              <TTKCustomButton
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleOnClickLogin}
              >
                Login
              </TTKCustomButton>
            </Link>
            <Link href="/pages/register" passHref>
              {/* Use Link component */}
              <TTKCustomButton
                type="submit"
                variant="contained"
                color="primary"
              >
                Get Started
              </TTKCustomButton>
            </Link>
            {isActive && (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={user == null ? "Z" : user.firstName}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
