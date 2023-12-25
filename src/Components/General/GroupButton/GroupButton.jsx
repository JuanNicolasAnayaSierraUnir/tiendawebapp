import React, {useState} from "react";
import useCounter from "../../../Custom";

const GroupButton = ({initialValue}) => {
    const [value, setValue] = useState(initialValue);

    const { count, increment, decrement } = useCounter(0, 1);

    return (<div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success" onClick={increment}>+</button>
                <button type="button" className="btn btn-danger" onClick={decrement}>-</button>
                <label>Contador: {count}</label>
            </div>
        </div>

    );
};

export default GroupButton;