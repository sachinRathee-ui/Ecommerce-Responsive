import "./App.css";
import Home from "./Pages/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="nav">
        <Sidebar />
      </div>
      <div className="home">
        <Home />
      </div>
    </>
  );
}

export default App;
