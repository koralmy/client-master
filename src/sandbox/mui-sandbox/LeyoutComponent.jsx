import Grid from '@mui/material/Grid'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const LeyoutComponent = () => {
    return (
      <Container sx={{mt: 2, p: 3}}>

            <Grid container spacing={1} justifyContent='flex-start' alignItems='flex-start' sx={{height: 250}}>

                <Grid item xs={12} md={6} lg={4}>
                    <Box style={{backgrounColor: 'red', height: 50, width: '100'}}></Box>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Box style={{backgrounColor: 'blue', height: 50, width: '100'}}></Box>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Box style={{backgrounColor: 'green', height: 50, width: '100'}}></Box>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Box style={{backgrounColor: 'yellow', height: 50, width: '100'}}></Box>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Box style={{backgrounColor: 'purple', height: 50, width: '100'}}></Box>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Box style={{backgrounColor: 'orange', height: 50, width: '100'}}></Box>
                </Grid>

            </Grid>

      </Container>
    );
};

export default LeyoutComponent;