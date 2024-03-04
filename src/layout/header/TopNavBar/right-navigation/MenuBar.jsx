import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, Modal, Typography } from "@mui/material";
import NavBarLink from "../../../../routes/NavBarLink";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers.js";
import EditProfile from "../../../../users/pages/EditProfile.jsx";
import { useState } from "react";

const MenuBar = ({ isMenuOpen, anchorEl, onCloseMenu }) => {
  const { user } = useUser();
  const { handleLogout } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onLogout = () => {
    handleLogout();
    onCloseMenu();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    border: "2px solid #000",
    boxShadow: 24,
    padding: "30px",
    backgroundColor: "white",
  };

  return (
    <MuiMenu
      open={isMenuOpen}
      onClose={onCloseMenu}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style}>
          <EditProfile />
        </Box>
      </Modal>
      {user && (
        <Box>
          <div onClick={() => setIsModalOpen(true)}>
            <MenuItem onClick={onCloseMenu}>Edit account</MenuItem>
          </div>
          <NavBarLink to={ROUTES.LOGIN}>
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </NavBarLink>
        </Box>
      )}
      <NavBarLink to={ROUTES.ABOUT}>
        <Button color="inherit">
          <Typography>About</Typography>
        </Button>
      </NavBarLink>
      {!user && (
        <Box>
          <NavBarLink to={ROUTES.LOGIN}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}
            >
              Login
            </MenuItem>
          </NavBarLink>

          <NavBarLink to={ROUTES.SIGNUP}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}
            >
              SignUp
            </MenuItem>
          </NavBarLink>
        </Box>
      )}
    </MuiMenu>
  );
};

export default MenuBar;
