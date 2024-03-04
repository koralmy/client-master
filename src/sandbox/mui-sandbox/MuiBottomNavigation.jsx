import BottomNavigation from '@mui/material/BottomNavigation'
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const BottomNavigationn = () => {
    return (
      <Box sx={{ marginTop: 8 }}>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          dignissimos amet deleniti quam voluptates illum, ipsum iure aperiam
          deserunt aut laborum, aspernatur hic ab excepturi facere, iusto
          repudiandae consequatur quos!
        </Box>
        <Paper sx={{ position: "sticky" }} elevation={4}>

          {/* footer */}
          <BottomNavigation>
                <BottomNavigationAction label="Facebook" icon={<FacebookIcon />}></BottomNavigationAction>
                <BottomNavigationAction label="Instagram" icon={<InstagramIcon />}></BottomNavigationAction>
                <BottomNavigationAction label="Twitter" icon={<TwitterIcon />}></BottomNavigationAction>

          </BottomNavigation>
        </Paper>
      </Box>
    );
}

export default BottomNavigationn;