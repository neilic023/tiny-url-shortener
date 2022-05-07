import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar } from "@mui/material";

const NavBar = () => {
  return (
    <div>
      <AppBar color="default">
        <Toolbar
          sx={{
            pr: "16px",
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="info"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            TinyUrl
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
