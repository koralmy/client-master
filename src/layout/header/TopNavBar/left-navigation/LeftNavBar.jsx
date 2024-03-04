import { Box, Button, Typography } from "@mui/material";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

const LeftNavBar = () => {
  const { user } = useUser();

  const routes = [
    {
      label: "Cards",
      route: ROUTES.CARDS,
    },
    {
      label: "Fav Cards",
      route: ROUTES.FAV_CARDS,
    },
    {
      label: "My Cards",
      route: ROUTES.MY_CARDS,
    },
  ];

  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem label="About" to={ROUTES.ABOUT}></NavItem>
        {user &&
          user.isBusiness &&
          routes.map((element) => (
            <NavItem
              key={element.label}
              label={element.label}
              to={element.route}
            />
          ))}
        {user && user.isAdmin && (
          <NavItem label="Sandbox 🧃" to={ROUTES.SANDBOX}></NavItem>
        )}
      </Box>
    </Box>
  );
};
export default LeftNavBar;
