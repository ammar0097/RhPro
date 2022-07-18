import "./App.css";
import { Box, Container} from "@chakra-ui/react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Box>
        <div className="App">
          <Navbar/>
          <Home/>
        </div>
    </Box>
  );
}

export default App;
