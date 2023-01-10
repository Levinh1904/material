import { Box,IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../components/LineChart";
import { tokens } from "../theme";
import XAUUSD from "./XAUUSD";

const Session = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="flex flex-row m-auto justify-center w-[100%] gap-3">
        <div className="basis-2/4 pb-5">
            <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            >
            <Box
                mt="25px"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
            >
                <Box>
                <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                >
                    Revenue Generated
                </Typography>
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    color={colors.greenAccent[500]}
                >
                    $59,342.32
                </Typography>
                </Box>
                <Box>
                <IconButton>
                    <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                    />
                </IconButton>
                </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
                <LineChart isDashboard={true} />
            </Box>
            </Box>
        </div>
        <div className="basis-2/4">
            <XAUUSD />
        </div>
    </div>
      );
};

export default Session;