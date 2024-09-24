"use client";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import robot from "@/assets/lottie/robot.json";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Home() {
  const theme = useTheme();

  return (
    <Grid container spacing={2} sx={"column"}>
      <Grid sx={{}} width={"100%"}>
        <Grid
          xs={12}
          maxHeight={"100%"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          size="grow"
          sx={{ px: 3, pt: 4, textAlign: "center" }}
        >
          <Typography variant="h4">
            Olá, é um prazer ter você por aqui!
          </Typography>
        </Grid>
        <Grid xs={12} display="flex" alignItems="center" justifyContent={"center"}>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: {
                xs: 300, // Tamanho em telas pequenas (mobile)
                sm: 300, // Tamanho em tablets
                md: 300, // Tamanho em telas grandes (desktop)
              },
            }}
          >
            <DotLottieReact
              data={robot}
              width={200}
              autoResizeCanvas={false}
              loop
              autoplay
            />
          </Box>
        </Grid>
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          size="grow"
          sx={{
            px: 3,
            pb: 3,
            fontWeight: "regular",
            textAlign: "center",
            flexDirection: "column",
            "@media (min-width: 768px)": {
              backgroundColor: "#5D2E9A", // Fundo roxo em desktop
              pt: 4,
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              width: "100%", // Garante que ocupa a largura do contêiner
              "@media (min-width: 768px)": {
                whiteSpace: "nowrap", // Impede quebra de linha
                maxWidth: "100%", // Garante que não ultrapasse 100%
              },
            }}
          >
            Agora vamos te conectar com o serviço de produção da Magmeta.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
