import './App.css';
import {useState} from "react";
import Form from "./components/Form/Form";
import Data from "./components/Data/Data";

function App() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    return (
        <div className="App">
            <Form inputs={state} setInputs={setState} />
            <Data outputs={state}/>
        </div>
    );
}

export default App;
