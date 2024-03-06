

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

const CardDetailsPage = () => {
  const { id } = useParams();
  const [cardData, setCardData] = useState();

  const apiUrl =
    process.env.REACT_APP_API_URL ||
    "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";

  useEffect(() => {
    axios
      .get(`${apiUrl}/cards/${id}`)
      .then((response) => setCardData(response.data));
  }, [id]);

  const fieldsList = [
    "bizNumber",
    "createdAt",
    "description", // Fixed typo
    "email",
    "phone",
    "subtitle",
    "title",
    "web",
  ];

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Details"
        subtitle="Here you can find all the information about the business you are looking for."
      />
      <Box mt={4}>
        {cardData && (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={cardData.image.url}
                  alt={cardData.image.alt}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {cardData.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cardData.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                {fieldsList.map((currentField, index) => (
                  <Typography key={`field-${index}`} variant="body1">
                    <strong>{`${currentField}: `}</strong>{" "}
                    {cardData[currentField]}
                  </Typography>
                ))}
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Address
                </Typography>
                {Object.keys(cardData.address).map((currentField, index) =>
                  currentField !== "_id" ? (
                    <Typography key={`field-${index}`} variant="body1">
                      <strong>{`${currentField}: `}</strong>{" "}
                      {cardData.address[currentField]}
                    </Typography>
                  ) : null
                )}
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default CardDetailsPage;
