import { Box, Grid2, Typography } from "@mui/material";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { skillsImage } from "../../constants/skills";

function SkillsSection({ isMobile }: { isMobile: boolean }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const controls = animate([
      [scope.current, { x: ["20%", "0%"] }],
      ["li", { opacity: 1 }],
    ]);

    controls.speed = 0.8;

    return () => controls.stop();
  }, []);
  return (
    <Box
    ref={scope}

      textAlign={isMobile ? "center" : "end"}
      alignSelf={"self-start"}
      order={{ xs: 1, sm: 1, md: 2 }}
      width={{ md: "550px" }}
      
    >
      <Typography
        variant={!isMobile ? "h5" : "h6"}
        fontWeight="800"
        color="primary"
        alignSelf={"start"}
        mb={5}
      >
        Skills
      </Typography>
      <Grid2 container justifyContent="center" gap={1}>
        {skillsImage.map((item, index) => (
          <Box
            key={index}
            component="img"
            src={item.image}
            alt={`Skill ${index + 1}`}
            sx={{ objectFit: "contain" }}
            width={{ lg: "100px", md: "90px", sm: "80px", xs: "75px" }}
          />
        ))}
      </Grid2>
    </Box>
  );
}

export default SkillsSection;
