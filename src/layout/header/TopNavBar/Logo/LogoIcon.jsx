import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import ROUTES from "../../../../routes/routesModel";

const LogoIcon = () => {
  return (
    <Link to={ROUTES.CARDS} style={{ textDecoration: "none" }}>
      {" "}
      {/* Use Link directly and remove text decoration */}
      <IconButton
        sx={{
          display: { xs: "inline-flex", md: "none" },
          size: "large",
          edge: "start",
          color: "inherit",
        }}
      >
        <Avatar
          alt="me"
          src={process.env.PUBLIC_URL + "/assets/images/buisnes-card.png"}
        />
      </IconButton>
    </Link>
  );
};

export default LogoIcon;
