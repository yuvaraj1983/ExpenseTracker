
import './App.css';
//import Expenses from "../src/Page/Expenses"
import Expenses from "./Page/Expenses"
import PieChartData from "./components/PieChartData";
import { PieChart, Pie } from "recharts";
import { SnackbarProvider } from 'notistack'

function App() {
 
  return (
    <SnackbarProvider>
    <div>
        <Expenses /> 
    </div>
    </SnackbarProvider>
  );
}

export default App;
