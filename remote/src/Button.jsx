import { useState } from "react";


export const Button = () => {
    const [count, setCount] = useState(0);
    return (
        <fieldset className={"scheduler-border"}>
            <legend className={"scheduler-border"}>My name</legend>
            <button onClick={() => setCount(count + 1)}>
                Click me only for abc: {count}
            </button>
            <div className={"panel-name-label w-100 d-flex justify-content-between align-items-center"}>
                come va
            </div>
        </fieldset>
    );
};

export default Button;