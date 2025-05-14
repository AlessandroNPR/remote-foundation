import { useState } from "react";
import Button from "remoteApp/Button";
import {Test1, Test2} from "remoteApp/Components"
function App() {
/*
    const [count, setCount] = useStore();
*/

    return (
        <div className="App">
            <h1>Host Application</h1>
            <Button />
            <Test2/>
            {/*<div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>*/}
        </div>
    );
}

export default App;