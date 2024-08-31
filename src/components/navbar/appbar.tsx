"use client";
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
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CartButton from "./cart-button";

const pages = ["Collections", "Men", "Women", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{
      children: <span className="MuiTabs-indicatorSpan" />,
    }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "80%",
    backgroundColor: "#FF8040",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(16),
  marginRight: theme.spacing(1),
  color: "rgba(129, 133, 137, 0.8)",
  "&.Mui-selected": {
    color: "#000",
  },
  "&:hover": {
    backgroundColor: "rgba(129, 133, 137, 0.1)",
  },
}));

const styleModal = {
  position: "absolute" as "absolute",
  height: "100vh",
  bgcolor: "background.paper",
  border: "1px solid #C7D0DD",
  boxShadow: 24,
  px: 4,
  py: 6,
  display: "flex",
  flexDirection: "column",
};

const styleCart = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "100%",
  maxWidth: 345,
  bgcolor: "background.paper",
  border: "1px solid #C7D0DD",
  boxShadow: 5,
  pb: 2,
  display: "flex",
  flexDirection: "column",
};

function ResponsiveAppBar() {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    console.log(anchorElUser);
  };
  const handleCloseUserMenu = () => {
    console.log(anchorElUser);
    setAnchorElUser(null);
  };

  const handleOnClick = () => {};

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl" sx={{ paddingX: { sm: "3rem", md: "5rem" } }}>
        <Toolbar disableGutters sx={{ borderBottom: "1px solid #C7D0DD" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, pr: 2 }}>
            <Image
              src="/images/logo.svg"
              width={138}
              height={20}
              alt="logo"
              priority={true}
            />
          </Box>
          {/* part of menu app bar sm screen*/}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenModal}
              color="inherit"
            >
              <MenuIcon sx={{ color: "gray" }} />
            </IconButton>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleModal}>
                <CloseIcon
                  onClick={handleCloseModal}
                  sx={{
                    color: "gray",
                    position: "absolute",
                    top: "20px",
                    left: "5%",
                    cursor: "pointer",
                  }}
                />
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseModal}
                    sx={{ display: "flex", color: "black" }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </Button>
                ))}
              </Box>
            </Modal>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                alignItems: "center",
              }}
            >
              <Image
                src="/images/logo.svg"
                width={138}
                height={20}
                alt="logo"
                priority={true}
              />
            </Box>
          </Box>
          {/* part of menu list in medium screen  */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box sx={{ width: "100%" }}>
              <Box>
                <StyledTabs
                  value={value}
                  onChange={handleChange}
                  aria-label="styled tabs example"
                >
                  {pages.map((page) => (
                    <StyledTab key={page} label={page} sx={{ mt: 3, mb: 3 }} />
                  ))}
                </StyledTabs>
              </Box>
            </Box>
          </Box>
          {/* Cart */}
          <Box sx={{ flexGrow: 0 }}>
            <CartButton />
          </Box>
          {/* Avatar with seting menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/images/image-avatar.png"
                  sx={{ "&:hover": { borderRadius: "2px solid #C7D0DD" } }}
                />
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
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
