import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function Header() {
    return (
        <AppBar position="static" sx={{mb:4}}>
            <Container>
                <Toolbar>
                <Typography variant="h6"> E-Commerce</Typography>
                </Toolbar>   
            </Container>                
        </AppBar>    
    );
}
