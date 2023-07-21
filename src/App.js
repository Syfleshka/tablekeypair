import logo from './logo.svg';
import './App.css';
import Table from "./Table";
import {useState} from "react";

function App() {

    const [chtoto, setChtoto] = useState({
        a: 1,
        b: 2,
        c: 3,
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Table
                    chtoto={chtoto}
                    setChtoto={setChtoto}
                />

                <p>{JSON.stringify(chtoto)}</p>
            </header>
        </div>
    );
}

    export default App;
