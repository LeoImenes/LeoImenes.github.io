import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Stack, Typography } from "@mui/material";
import { useDarkMode } from "../../hooks/useDarkMode";
import { MaterialUISwitch } from "../Switch/DarkModeSwitch";
import "./Header.css";

export const Header = () => {
  const { toggleMode } = useDarkMode();
  return (
    <Stack
      height={"9vh"}
      alignItems={"center"}
      justifyContent={"space-around"}
      flexDirection={"row"}
      sx={{
        backgroundColor: "#0D1B2A",
      }}
    >
      <MaterialUISwitch
        sx={{
          color: "#fff",
        }}
        onChange={toggleMode}
      />
      <Typography
        variant="h4"
        color="#E0E1DD"
        sx={{ fontSize: { xs: "1em", sm: "2em" } }}
      >
        Portfolio
      </Typography>

      <IconButton aria-label="delete" size="small">
        <MenuIcon
          sx={{
            width: { xs: "30px", sm: "40px", lg: "50px" },
            height: { xs: "35px", sm: "40px", lg: "50px" },
            color: "#fff",
          }}
          fontSize="inherit"
        />
      </IconButton>
    </Stack>
  );
};
