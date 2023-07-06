import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

// Redux actions
const increment = () => {
  return { type: "INCREMENT" };
};

const clear = () => {
  return { type: "CLEAR" };
};

const toggleDisable = () => {
  return { type: "TOGGLE_DISABLE" };
};

// Redux reducer
const reducer = (state = { count: 0, disabled: false }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "CLEAR":
      return { ...state, count: 0 };
    case "TOGGLE_DISABLE":
      return { ...state, disabled: !state.disabled };
    default:
      return state;
  }
};

const Counter = () => {
  const { count, disabled } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleClear = () => {
    dispatch(clear());
  };

  const handleToggleDisable = () => {
    dispatch(toggleDisable());
  };

  return (
    <div>
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button disabled={disabled} onClick={handleIncrement}>
          CLICK: {count}
        </Button>
        <Button onClick={handleClear}>CLEAR</Button>
        <Button onClick={handleToggleDisable}>
          {disabled ? "ABLE" : "DISABLE"}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
