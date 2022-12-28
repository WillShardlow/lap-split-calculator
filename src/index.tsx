import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";

const Calculator = () => {
    return (
        <div className='flex-col items-center'>
            <h1 className="font-Helvetica">
                This will be my lap split calculator
            </h1>
            <h1>Cool stuff</h1>
        </div>
    );
};

ReactDOM.render(<Calculator/>, document.getElementById("root"));
