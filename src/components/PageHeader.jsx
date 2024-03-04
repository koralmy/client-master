//בסטייל במקום מקו עושים קאמל קייס למשל במקום פונט-פמילי יהיה
//fontFamily

import { string } from "prop-types";
import { Box, Divider, Typography } from "@mui/material";

const PageHeader = ({ title, subtitle }) => {
  return (
    <Box pt={2}>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography variant="h5" component="h2">
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }}></Divider>
    </Box>
  );
};

PageHeader.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
};
export default PageHeader;






// const PageHeader = () => {

//   //אובייקט של מידע
//   const data = {
//         title: "Page header",
//         description: "this is a page header component",
//   };

//   //אובייקט של סטייל
//   const headLineStyle = {
//         color: "red",
//         fontFamily: "Roboto, sans-serif",
//   };


//   return (
//     //חייב לעשות עטיפה ריקה כשיש יותר מאלמנט אחד
//     <>
//       <h2 className="pink">page header works </h2>
//       <p>hello world</p>

//       {/* מימוש באובייקטים */}
//       <h1 style={headLineStyle}>titel</h1>
//       <p>{data.title}</p>

//       <h1>description</h1>
//       {/* מימוש אובייקט אינלייןת אובייקט בצהוב בתוך סוגריים מסולסים בכחול */}
//       <p style={{ color: "blue", marginTop: "5px" }}>{data.description}</p>
//     </>
//   );
// }

// export default PageHeader;