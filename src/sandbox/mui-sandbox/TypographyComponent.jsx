import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";


const TypographyComponent = () =>{
    return(
        <>
            <Typography component="h6" variant="h4">One</Typography>
            <Divider />
            <Typography align='center' fontWeight={700} component="p" variant="h5">One</Typography>
            <Divider> Divider Text </Divider>
            <Typography align='right' fontWeight={700} component="p" variant="h5">One</Typography>
            <Divider />
            <Typography align='left' fontWeight={400} variant="h5" color="primary.main">primary.main</Typography>

            <Divider textAlign='right'> 13 </Divider>

            <Typography fontWeight={400} variant="h5" color="primary.light">primary.light</Typography>

            <Divider >
                <Chip label= "chip">
                CHiP UI
                </Chip>
            </Divider>

            <Typography fontWeight={400} variant="h5" color="primary.dark">primary.dark</Typography>
            <Typography fontWeight={400} variant="h5" color="success.main">success.main</Typography>
            <Typography fontWeight={300} variant="h5" sx={{color:"red"}}>One</Typography>


            <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eaque aliquam illum laborum dolores facere ipsam, autem labore, atque ipsum distinctio illo cupiditate quis voluptatibus eligendi minima? Velit, culpa quas!</Typography>
            <Typography noWrap>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eaque aliquam illum laborum dolores facere ipsam, autem labore, atque ipsum distinctio illo cupiditate quis voluptatibus eligendi minima? Velit, culpa quas!</Typography>
            <p>Two</p>
        </>
    )

}

export default TypographyComponent