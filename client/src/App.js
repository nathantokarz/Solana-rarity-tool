import Routes from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, AppBar, Avatar, Box, Toolbar, Container } from "@mui/material";
const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar style={{ background: 'white', opacity: "1" }} position="relative">
                <Box sx={{ display: "flex", padding: "0px 20px 0px 20px", justifyContent: "space-between" }}>
                    <Avatar
                        alt="Avatar"
                        src="/img/logo.png"
                        position="flex"
                        sx={{ width: 180, height: 100, padding: "0px 0px 0px 0px" }}
                    ></Avatar>
                    <Toolbar position="relative">
                        <Link href="https://discord.gg/Q4TQkbTH8Z" underline="hover" color="black" padding="0 10px"><b>Discord</b></Link>
                        <Link href="https://zuse.market/launchpad" underline="hover" color="black" padding="0 10px"><b>Zuse</b></Link>
                        <Link href="https://ugamart.app/" underline="hover" color="black" padding="0 10px"><b>UGA-Mart</b></Link>
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
