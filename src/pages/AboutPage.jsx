import React from "react";
import PageHeader from "../components/PageHeader";
import { Container, Paper, Typography, Box, Grid } from "@mui/material";

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <PageHeader
        title="About Page"
        subtitle="On this page, you can find explanations about the application"
      />
      <Grid container spacing={4}>
        <Grid item md={8} xs={12}>
          <Paper elevation={3} sx={{ p: { xs: 2, md: 3 } }}>
            {/* Each Typography now has a larger variant and margin bottom for spacing */}
            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2 }}>
              My name is Koral, I'm a 26-year-old living in the beautiful city
              of Ramat Gan, Israel. I embrace life with a smile, living in a
              loving relationship and connecting with nature through my sweet
              dog and charming parrot.
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2 }}>
              As part of my personal and professional journey, I created a
              website that showcases business cards, aiming to build an online
              community where small businesses can thrive and succeed. In a
              world where competition is fierce and visibility is key, my
              website offers a unique platform for businesses to present
              themselves professionally and attractively.
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2 }}>
              Each business card on the site is meticulously designed,
              highlighting the unique characteristics of each business and the
              story behind it. This is where passion meets professionalism, and
              I am proud to be part of the success story of every business that
              joins us.
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Alongside my work, I enjoy spending time with my partner, walking
              our dog in nearby parks and beaches, and teaching my parrot new
              tricks. My life in Ramat Gan is filled with the joy of connecting
              with others, whether through my personal relationships or by
              helping businesses showcase their unique stories.
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
        >
          <Box
            component="img"
            sx={{
              width: "100%",
              maxWidth: 360,
              borderRadius: 1,
            }}
            src={`${process.env.PUBLIC_URL}/assets/images/card.jpg`}
            alt="card"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
