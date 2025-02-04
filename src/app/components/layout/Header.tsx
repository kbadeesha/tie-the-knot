"use client";

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
import { usePathname, useRouter } from "next/navigation";
import { makeStyles } from "@mui/styles";
const settings = ["Profile", "Logout"];

const useStyles: any = makeStyles({
  appBar: {
    position: "absolute",
    top: "4%",
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    zIndex: 10,
  },
  appBarSolid: {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#333",
    boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 10,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    color: "white",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
});

const Header: React.FC = () => {
  const router = useRouter();

  const classes = useStyles();
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
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isLoginOrRegisterPage =
    pathname.includes("login") || pathname.includes("register");
    if (isLoginOrRegisterPage) {
      return null;
    }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleMenuItems = async (setting: string) => {
    if (setting === "Profile") {
      router.push("/pages/profile");
      console.log("profile Clicked");
    } else {
      await logoutUser();
      await window.location.reload();
    }
  };

  return (
    <AppBar
      className={isHomePage ? classes.appBar : classes.appBarSolid}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar className={classes.toolbar}>
          {/* Centered Logo */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "start" }}>
            <Typography variant="h6" className={classes.title}>
              <Image
                src={"/assets/logo_lite.svg"}
                // src={
                //   theme === "dark"
                //     ? "/assets/logo_lite.svg"
                //     : "/assets/logo.svg"
                // }
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
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleOnClickLogin}
              >
                Login
              </TTKCustomButton>
            </Link>
            <Link href="/pages/register/register_type" passHref>
              {/* Use Link component */}
              <TTKCustomButton
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
              >
                Get Started
              </TTKCustomButton>
            </Link>

            {
              // isActive &&
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={user == null ? "Z" : user.firstName}
                    // src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
