import { AppBar, Toolbar } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../../routes/NavItem";

const CustomHooks = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem label="Custom Counter Hook" to="custom-counter" color="black" />
          <NavItem label="Custom Name Hook" to="custom-name" color="black" />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default CustomHooks;
