import Routes from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, AppBar, Avatar, Box, Toolbar, Container } from "@mui/material";
const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar style={{ background: '#FFFFFF', opacity: "0.8" }} position="relative">
                <Box sx={{ display: "flex", padding: "0px 20px 0px 20px", justifyContent: "space-between" }}>
                    <Avatar
                        alt="Avatar"
                        src="/img/logo.png"
                        position="flex"
                        sx={{ width: 250, height: 130, padding: "0px 0px 0px 10px" }}
                    ></Avatar>
                    <Toolbar position="right">
                        <Link href="https://warsomewizards.com/" underline="hover" color="black" padding="0 25px"><b>Home</b></Link>
                        <Link href="https://warsomewizards.com/team/" underline="hover" color="black" padding="0 25px"><b>Team</b></Link>
                        <Link href="https://warsomewizards.com/gallery/" underline="hover" color="black" padding="0 25px"><b>Gallery</b></Link>
                        <Link href="https://warsomewizards.com/faqs/" underline="hover" color="black" padding="0 25px"><b>FAQ</b></Link>
                        <Link href="https://warsomewizards.com/news/" underline="hover" color="black" padding="0 25px"><b>News</b></Link>
                        <Link href="https://discord.com/invite/2YFTnWGHQH" underline="hover" color="black" padding="0 25px"><b>Join</b></Link>
                    </Toolbar>
                </Box>
            </AppBar>
            <main>
                <Box>
                    <Container maxWidth="md">
                        <Routes />
                    </Container>
                </Box>
            </main>
        </ThemeProvider>
    );
}

export default App;
