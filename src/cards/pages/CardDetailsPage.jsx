import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { useEffect, useState } from "react";
import axios from "axios";

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

  console.log(cardData);

  const filedsList = [
    "bizNumber",
    "createdAt",
    "descriprion",
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
      ></PageHeader>
      <div>
        {cardData && (
          <>
            <div>
              <img src={cardData.image.url} alt={cardData.image.alt} />
            </div>
            <span>likes number: </span>
            <span>{cardData.likes.length}</span>
            {filedsList.map((currentField, index) => (
              <div key={`field-${index}`}>
                <span>{`${currentField}: `}</span>
                <span>{cardData[currentField]}</span>
              </div>
            ))}
            {Object.keys(cardData.address).map(
              (currentField, index) =>
                currentField !== "_id" && (
                  <div key={`field-${index}`}>
                    <span>{`${currentField}: `}</span>
                    <span>{cardData.address[currentField]}</span>
                  </div>
                )
            )}
          </>
        )}
      </div>
    </Container>
  );
};

export default CardDetailsPage;
