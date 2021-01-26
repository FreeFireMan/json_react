import './App.css';
import Routers from './routers';
import TopBar from "./components/topBar";


function App() {
    return (
        <div className="App">
            <TopBar/>
            <Routers/>
        </div>
    );
}

export default App;
