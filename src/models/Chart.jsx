
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import StatBox from "../components/StatBox"
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const Chart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
         <div className="flex flex-row m-auto w-[100%] py-5 gap-3 justify-center">
        <div className="basis-1/4 ">
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingY={4}
            border={2}
            borderRadius={2}
            >
            <StatBox
                title="12,361"
                subtitle="Emails Sent"
                progress="0.75"
                increase="+14%"
                icon={
                <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                }
            />
            </Box> 
        </div>
        <div className="basis-1/4">
          <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingY={4}
          border={2}
            borderRadius={2}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>  
        </div>
        <div className="basis-1/4">
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingY={4}
            border={2}
            borderRadius={2}
            >
            <StatBox
                title="32,441"
                subtitle="New Clients"
                progress="0.30"
                increase="+5%"
                icon={
                <PersonAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                }
            />
            </Box>
        </div>
        <div className="basis-1/4">
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingY={4}
            border={2}
            borderRadius={2}
            >
            <StatBox
                title="1,325,134"
                subtitle="Traffic Received"
                progress="0.80"
                increase="+43%"
                icon={
                <TrafficIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                }
            />
            </Box>
        </div>
    </div>
  );
};

export default Chart;
