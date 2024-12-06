import { Box, Button, Stack, Typography } from "@mui/material";

export const AboutMe = () => {
  return (
    <Stack direction={"row"} gap={90}>
      <Box mt={15} ml={20}>
        <Typography variant="h4" color="secondary">
          Olá, eu sou
        </Typography>
        <Typography variant="h4" color="textSecondary">
          Leonardo Imenes
        </Typography>
        <Typography color="textPrimary">Desenvolvedor Front-end</Typography>
        <Box mt={2}>
          <Button variant="outlined" color="secondary" sx={{ mr: 2 }}>
            Baixar Curriculo
          </Button>

          <Button variant="contained">Entre em contato</Button>
        </Box>
      </Box>
    </Stack>
  );
};
