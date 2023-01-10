import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "./App.css";
import Topbar from "./models/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./models/dashboard";
import Sidebar from "./models/global/Sidebar";
import Team from "./models/team";
import Invoices from "./models/invoices";
import Contacts from "./models/contacts";
// import Bar from "./models/bar";
import Form from "./models/form";
// import Line from "./models/line";
// import Pie from "./models/pie";
// import FAQ from "./models/faq";
// import Geography from "./models/geography";
import Calendar from "./models/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              <Route path="/calendar" element={<Calendar />} />
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
