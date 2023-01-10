import { Box } from "@mui/material";


import Welcome from "..//Welcome";
import Chart from "../Chart";
import Session from "../Session";
import Session2 from "../Session2";

const Dashboard = () => {

  return (
    <Box m="20px">
      {/* HEADER */}
      <Welcome />

      {/* GRID & CHARTS */}
      <Chart/>
      <Session />
      <Session2 />
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        

        {/* ROW 2 */}


        {/* ROW 3 */}
      </Box>
    </Box>
  );
};

export default Dashboard;
