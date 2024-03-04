import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Fab from "@mui/material/Fab";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";



const BusinessCard = () => {
  return (
    <>

    <Card sx={{ width: 250, height: 300, m: 1 }}>
      <CardActionArea>
        <CardHeader title="" />
        <CardContent>

        <Box display="flex" flexDirection="column" justifyContent="space-between"  textAlign="left" color="grey"> 

            <Typography variant="h3" fontSize="large" fontWeight={400}> forth </Typography>
            <Typography variant="h3" fontSize="small" > subtitle </Typography>
            <Divider/>

            <Typography variant="h3" fontSize="small" fontWeight={600}> Phone: <span style={{ fontWeight: 200 }}>050-0000000</span></Typography>
                
            <Typography variant="h3" fontSize="small" fontWeight={600}> Adresses: <span style={{ fontWeight: 200 }}>Shonkin 3 tel-aviv</span></Typography>

            <Typography variant="h3" fontSize="small" fontWeight={600}> Card Number: <span style={{ fontWeight: 200 }}>400000</span></Typography>

        </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
};

export default BusinessCard;
