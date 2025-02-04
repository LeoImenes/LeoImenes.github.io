import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./aboutMe.css";
import { useState } from "react";
import { ContactsModal } from "../Modals/ContactsModal";

export const AboutMe = () => {
  const { darkMode } = useDarkMode();
  const [open, setOpen] = useState<true | false>(false);

  const handleOpenModal = () => {
    setOpen((prevState) => !prevState);
  };

  const isMobile = useMediaQuery("(max-width:700px)");
  return (
    <>
      <Stack
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? 0 : 4}
        justifyContent="space-around"
        alignItems={isMobile ? "center" : "flex-start"}
      >
        <Box
          mt={isMobile ? 2 : 15}
          textAlign={isMobile ? "center" : "left"}
          order={isMobile ? 2 : 1}
        >
          <Typography
            variant={!isMobile ? "h4" : "h5"}
            color="secondary"
            className={!isMobile ? "greetingText" : undefined}
          >
            Olá, eu sou
          </Typography>
          <Typography
            variant="h4"
            color="textSecondary"
            className={!isMobile ? "myNameTyp" : undefined}
          >
            Leonardo Imenes
          </Typography>
          <Typography color="textPrimary" className="roleText">
            Desenvolvedor Front-end
          </Typography>

          <Stack
            mt={2}
            gap={2}
            direction={isMobile ? "column" : "row"}
            justifyContent={isMobile ? "center" : "flex-start"}
          >
            <Button
              variant="outlined"
              color="secondary"
              href="src\assets\Portfolio\CV-Leonardo-31-01.pdf"
              download
            >
              Baixar Currículo
            </Button>
            <Button variant="contained" onClick={handleOpenModal}>
              Entre em contato
            </Button>
          </Stack>
        </Box>

        <Box
          component="img"
          sx={{
            width: { xs: "200px", sm: "200px", md: "250px", lg: "300px" },
            height: { xs: "200px", sm: "200px", md: "250px", lg: "300px" },
          }}
          style={isMobile ? { transform: "scaleX(-1)" } : undefined}
          alt="Foto de perfil."
          src={`src/assets/ProfilePic/${
            !darkMode ? "photoDark" : "photoLight"
          }.png`}
          order={isMobile ? 1 : 2}
        />
      </Stack>
      <ContactsModal open={open} setOpen={setOpen} />
    </>
  );
};
