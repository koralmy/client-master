import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Fab from "@mui/material/Fab";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";



const ButtonComponent = () => {
    return (

        <>
         {/* m2 אומר מארגין כי ככה הגדרנו */}
        {/* בלי גדלים */}
        <Box m={2} display="flex" justifyContent="space-between">

            <Button variant="text" size="small" startIcon= { <DeleteIcon /> }>Simple btn</Button>
            <Button variant="contained" size="medium" endIcon= { <SendIcon /> }>full btn</Button>
            <Button variant="outlined" size="large"  endIcon= { <SendIcon /> }>border btn</Button>
            <Button variant="contained" disabled >none func btn</Button>


            <Fab color= "primary" aria-label="add">
                <AddShoppingCartIcon />
            </Fab>
        </Box>


        {/* עם גדלים */}
        <Box m={2}>

            <Button variant="text" size="small" >Simple btn</Button>
            <Button variant="contained" size="medium">full btn</Button>
            <Button variant="outlined" size="large">border btn</Button>
            <Button variant="contained" disabled >none func btn</Button>

      </Box>


        {/* עבור כל הבנים של הבוקס אני רוצה מארגין 1 בלי לגעת בתצורה של הבוקס */}
        {/* ז"א מה יהיה הסיאסאס עבור כל הילדים */}

       <Box sx={{"& button": {m: 1 } }}>

            <Button variant="text" size="small"  >Simple btn</Button>
            <Button variant="contained" size="medium">full btn</Button>
            <Button variant="outlined" size="large">border btn</Button>
            <Button variant="contained" disabled >none func btn</Button>

      </Box>
</>
    );
}

export default ButtonComponent;