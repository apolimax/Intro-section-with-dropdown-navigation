import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useSidebarContext } from "./context/sidebarContext";

function App() {
  const { showNavBar } = useSidebarContext();
  return (
    <div className={`container ${showNavBar && "overlay"}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
