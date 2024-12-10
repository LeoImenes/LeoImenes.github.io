import { Grid } from "@mui/joy";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import "./app.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Header } from "./components/header/Header";
import { skillsImage } from "./constants/skills";

function App() {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <>
      <Header />
      <AboutMe />
      <Stack
        mt={10}
        gap={{ md: 20, xs: 10 }}
        ml={{ md: 10, xs: 0 }}
        direction={{ sx: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Box textAlign={{ md: "start", xs: "center" }}>
          <Typography variant="h5" fontWeight={"800"} color="primary">
            Sobre mim
          </Typography>
          <Typography
            mt={{ xs: 0, md: 5 }}
            ml={{ xs: 0, md: 2 }}
            variant="h4"
            color="textPrimary"
            className="aboutMeText"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            suscipit ac augue in egestas. Nullam dui ipsum, commodo quis nisl
            sit amet, commodo
          </Typography>
        </Box>

        <Box textAlign={{ md: "end", xs: "center" }}>
          <Typography
            alignSelf={"end"}
            variant="h5"
            fontWeight={"800"}
            color="primary"
            mr={{ md: 10, xs: 0 }}
          >
            Skills
          </Typography>
          <Grid mt={2} id={isMobile ? "carroussel" : undefined} container>
            {skillsImage.map((item) => (
              <img src={item.image} />
            ))}
          </Grid>
        </Box>
      </Stack>
    </>
  );
}

export default App;
