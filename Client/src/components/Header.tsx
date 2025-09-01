import { AppBar, Box, Button, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const links = [
  { title: "Home", to: "/" },
  { title: "Catalog", to: "/catalog" },
  { title: "About", to: "/about" },
  { title: "Contact", to: "/contact" },
];

export default function Header() {
  return (
    <AppBar position="static" sx={{ mb: 4, backgroundColor: "primary.dark" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Site Title */}
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          🛒 E-Commerce
        </Typography>

        {/* Nav Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {links.map((link) => (
            <Button
              key={link.to}
              component={NavLink}
              to={link.to}
              sx={{
                color: "white",
                textTransform: "none",
                "&.active": {
                  borderBottom: "2px solid white",
                  fontWeight: "bold",
                },
              }}
            >
              {link.title}
            </Button>
          ))}

          {/* Cart Icon with Badge */}
          <IconButton component={NavLink} to="/cart" sx={{ color: "white" }}>
            <Badge badgeContent={2} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
