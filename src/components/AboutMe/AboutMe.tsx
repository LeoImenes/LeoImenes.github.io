import { Box, Button, Stack, Typography } from "@mui/material";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./aboutMe.css";

export const AboutMe = () => {
  const { darkMode } = useDarkMode();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={4}
      justifyContent="space-around"
      alignItems="center"
    >
      <Box
        mt={{ xs: 2, md: 5 }}
        order={{ xs: 2, md: 1 }}
        textAlign={{ xs: "center", md: "left" }}
      >
        <Typography variant="h4" color="secondary" className="greetingText">
          Olá, eu sou
        </Typography>
        <Typography variant="h4" color="textSecondary" className="myNameTyp">
          Leonardo Imenes
        </Typography>
        <Typography color="textPrimary" className="roleText">
          Desenvolvedor Front-end
        </Typography>
        <Box
          mt={2}
          gap={2}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Button variant="outlined" color="secondary">
            Baixar Currículo
          </Button>
          <Button variant="contained">Entre em contato</Button>
        </Box>
      </Box>

      <Box
        component="img"
        order={{ xs: 1, md: 2 }}
        sx={{
          width: { xs: "150px", sm: "200px", md: "250px", lg: "300px" },
          height: { xs: "150px", sm: "200px", md: "250px", lg: "300px" },
        }}
        alt="Foto de perfil."
        src={`src/assets/ProfilePic/${
          !darkMode ? "photoDark" : "photoLight"
        }.png`}
      />
    </Stack>
  );
};
