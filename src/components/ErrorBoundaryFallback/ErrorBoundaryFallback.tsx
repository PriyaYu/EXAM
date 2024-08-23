import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ErrorBoundaryFallback = () => {
    return (
        <Box sx={{ padding: "inherit" }}>
            <Container maxWidth={false}>
                <Typography variant="h5">Sorry, something went wrong!</Typography>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="body1">
                        Please click "Login" button to login again
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#006c69",
                            ":hover": { backgroundColor: "#328987" },
                        }}
                        onClick={() => {
                            window.location =
                                `${window.location.origin}/login` as unknown as Location;
                        }}
                    >
                        Login
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default ErrorBoundaryFallback;
