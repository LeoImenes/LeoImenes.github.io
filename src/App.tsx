import { Header } from "./components/header/Header";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const { darkMode } = useDarkMode();
  console.log(darkMode);
  return (
    <>
      <Header />
      <AboutMe />
      <Stack mt={10} ml={10} direction={"row"} justifyContent={"space-evenly"}>
        <Box border={1} width={"40%"}>
          <Typography variant="h4" fontWeight={"800"} color="primary">
            Sobre mim
          </Typography>
          <Typography mt={2} ml={2} variant="h5" color="textPrimary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            suscipit ac augue in egestas. Nullam dui ipsum, commodo quis nisl
            sit amet, commodo
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          variant="fullWidth"
          flexItem
          sx={{
            height:'30vh',
            width: 2,
            backgroundColor: !darkMode ? "#1B263B" : "#fff",
          }}
        />
        <Box width={"40%"} border={"1px solid #000"} textAlign={"end"}>
          <Typography
            alignSelf={"end"}
            variant="h4"
            fontWeight={"800"}
            color="primary"
          >
            Skills
          </Typography>
          <Box></Box>
        </Box>
      </Stack>
    </>
  );
}

export default App;
