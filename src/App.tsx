import {
  Box,
  Divider,
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import "./app.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Header } from "./components/header/Header";
import PortfolioCard from "./components/ProjectsCard";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import { Projects } from "./constants/projects";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const { darkMode } = useDarkMode();
  const date = new Date();
  const [scope, animate] = useAnimate();
  const [scopeBox, animateBox] = useAnimate();
  const [showText, setShowText] = useState(false);
  const isInView = useInView(scopeBox, { once: true });
  useEffect(() => {
    const controls = animate([[scope.current, { x: ["-26%", "0%"] }]]);

    controls.speed = 0.5;

    return () => controls.stop();
  }, []);

  useEffect(() => {
    if (isInView) {
      const controls = animateBox([[scopeBox.current, { opacity: [0, 1] }]]);
      controls.speed = 0.15;
      return () => controls.stop();
    }
  }, [isInView]);

  const handleShowText = () => setShowText((prev) => !prev);

  return (
    <Box sx={{ backgroundColor: "primary.main" }}>
      <Header />
      <AboutMe />
      <Stack
        mt={isMobile ? 0 : 7}
        spacing={5}
        direction={isMobile ? "column" : "row"}
        justifyContent="space-evenly"
        px={isMobile ? 2 : 10}
        mr={isMobile ? 0 : 15}
        width={"100%"}
      >
        <Box
          textAlign={isMobile ? "center" : "start"}
          display={"flex"}
          flexDirection={"column"}
          height={isMobile ? "undefined" : "50vh"}
          alignItems={""}
          order={{ xs: 2, sm: 2, md: 1 }}
          width={!isMobile ? "620px" : "100%"}
          sx={{ overflowY: isMobile ? "auto" : "none" }}
          mb={5}
        >
          <Typography
            variant={!isMobile ? "h5" : "h6"}
            fontWeight="800"
            color="primary"
            mt={isMobile ? 5 : 0}
          >
            Sobre mim
          </Typography>
          <Typography
            mt={2}
            variant="h6"
            color="textPrimary"
            className="aboutMeText"
            textAlign={isMobile ? "center" : "start"}
            ref={scope}
            sx={{
              maxHeight: isMobile ? (!showText ? "200px" : "100%") : "350px",
              overflowY: isMobile ? "hidden" : "hidden",
              paddingRight: isMobile ? "16px" : "0",
            }}
          >
            Desenvolvedor com experiência em ReactJS, TypeScript e ferramentas
            como MUI, React Hook Form, Vite e muito mais. Focado em interfaces
            modernas, responsivas e de alta performance, com deploy contínuo,
            testes automatizados e integração com APIs REST. Proativo, orientado
            a resultados, e aplicando boas práticas de desenvolvimento,
            versionamento com Git/GitHub e metodologias ágeis como SCRUM. Busco
            aprimorar habilidades com desafios de programação e projetos
            pessoais. Formado em Ciências da Computação e Técnico em Análise e
            Desenvolvimento de Sistemas, pronto para contribuir com soluções
            inovadoras no desenvolvimento web.
          </Typography>
          {isMobile && (
            <Typography
              onClick={handleShowText}
              variant="body2"
              m={2}
              color="secondary"
              sx={{
                width: "80px",
                textDecoration: "underline",
                cursor: "pointer",
                textAlign: "start",
              }}
            >
              {!showText ? "Ler mais..." : "Ler menos..."}
            </Typography>
          )}
        </Box>
        {!isMobile && (
          <Divider
            orientation="vertical"
            variant="fullWidth"
            flexItem
            sx={{
              height: "30vh",
              order: 2,
              width: 2,
              backgroundColor: !darkMode ? "#1B263B" : "#fff",
            }}
          />
        )}
        <SkillsSection isMobile={isMobile} />
      </Stack>
      <Box
        mt={!isMobile ? 10 : 0}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        ref={scopeBox}
      >
        <Typography
          variant={!isMobile ? "h5" : "h6"}
          fontWeight="800"
          color="primary"
          mt={5}
        >
          Projetos
        </Typography>
        <Grid2 container my={2} px={!isMobile ? 10 : 0} display={'flex'} justifyContent={!isMobile ?'space-between' : 'center'}>
          {Projects.map((project, index) => (
            <PortfolioCard key={index} portfolio={project} />
          ))}
        </Grid2>
      </Box>
      <Box component={"footer"} textAlign={"center"} m={2}>
        <Typography color="primary">
          Todos os direitos reservados a Leonardo Panigassi Imenes -{" "}
          {date.getUTCFullYear().toString()}
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
