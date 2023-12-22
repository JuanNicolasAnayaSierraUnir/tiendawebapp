import React, {useState} from "react";

const GroupButton = ({initialValue}) => {
    const [value, setValue] = useState(initialValue);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };
    return (<div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success" onClick={handleIncrement}>+</button>
                <button type="button" className="btn btn-danger" onClick={handleDecrement}>-</button>
            </div>
        </div>

    );
};

export default GroupButton;