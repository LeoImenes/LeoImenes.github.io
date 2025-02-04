import { Box } from "@mui/joy";
import { Button, Card, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { ProjectDetailsModal } from "../Modals/ProjectDetailsModal";

export type Portfolio = {
  id: number;
  name: string;
  description: string;
  image: string;
  languages: string[];
};
export type PortfolioCardProps = {
  portfolio: Portfolio;
};
const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio }) => {
  const [open, setOpen] = useState<true | false>(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleOpenModal = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <Card
        sx={{
          m:2,
          width: {xs: "80%", md: '500px'},
          height: "300px",
          position: "relative",
          overflow: "hidden",
          boxShadow: 3,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.10)",
          },
        }}
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          zIndex={2}
          sx={{
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography variant={!isMobile ? "h4" : "h5"}>
            {portfolio.name}
          </Typography>
          <Button
            sx={{ my: 3 }}
            variant="contained"
            color="secondary"
            onClick={handleOpenModal}
          >
            Ver mais detalhes
          </Button>
        </Box>

        <Box
          component="img"
          src={portfolio.image}
          alt={portfolio.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.4)",
            transition: "filter 0.3s ease-in-out",
            "&:hover": {
              filter: "brightness(0.5)",
            },
          }}
        />
      </Card>
      <ProjectDetailsModal
        open={open}
        setOpen={setOpen}
        portfolio={portfolio}
      />
    </>
  );
};

export default PortfolioCard;
