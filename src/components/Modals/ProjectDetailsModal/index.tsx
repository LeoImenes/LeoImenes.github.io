import { Box, Button, Modal, Typography, useMediaQuery } from "@mui/material";
import { PortfolioCardProps } from "../../ProjectsCard";

type ModalProjectCard = PortfolioCardProps & {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProjectDetailsModal: React.FC<ModalProjectCard> = ({
  portfolio,
  open,
  setOpen,
}) => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { md: "60%", sm: "90%", lg: 1100, xs: "90%" },
          bgcolor: "primary.main",
          boxShadow: 20,
          p: 4,
          display: { lg: "flex" },
          textAlign: { xs: "center", lg: "initial" },
        }}
      >
        <Box
          component="img"
          src={portfolio.image}
          alt={portfolio.name}
          sx={{
            width: { xs: "100%", sm: "50%" },
            height: { xs: 250, lg: 400 },
            objectFit: "fill",
            borderRadius: 2,
            filter: "brightness(0.4)",
            transition: "filter 0.3s ease-in-out",
            "&:hover": {
              filter: "brightness(0.5)",
            },
          }}
        />

        <Box sx={{ m: 4 }}>
          <Typography id="modal-modal-title" variant="h4" color="primary">
            {portfolio.name}
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="body1"
            color="textPrimary"
            sx={{ mt: 2, height: 200, overflowY: "auto" }}
          >
            {portfolio.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              sx={{ my: 3, width: 200 }}
              variant="contained"
              color="secondary"
              onClick={() => setOpen(false)}
            >
              Veja no GitHub
            </Button>
          </Box>

          <Typography
            sx={{
              position: "absolute",
              top: 10,
              right: !isMobile ? 20 : 10,
              fontSize: 20,
              cursor: "pointer",
            }}
            color="secondary"
            onClick={() => setOpen(false)}
          >
            X
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};
