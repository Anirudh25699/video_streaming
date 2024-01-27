import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between" }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
      <img src={logo} alt="logo" height={90} /> {/* Increased logo height */}
      <div style={{ marginLeft: "10px", fontSize: "24px", color: "#ff0000", display: "flex", alignItems: "center" }}> {/* Increased font size */}
        <span style={{ fontWeight: "bold" }}>Anirudh's Streaming</span>
        <span style={{ fontWeight: "bold", marginLeft: "5px" }}>APP</span> {/* Adjusted position of 'APP' */}
      </div>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
