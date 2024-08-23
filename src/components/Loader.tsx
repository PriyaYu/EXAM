import CircularProgress from "@mui/material/CircularProgress";
import Box from '@mui/material/Box';


const Loader = () => (
    <Box
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1201",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }}
    >
        <CircularProgress />
    </Box>
);

export default Loader;
