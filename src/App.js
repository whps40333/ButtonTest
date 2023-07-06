import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/system";

const RootContainer = styled("div")({
  display: "flex",
  flexFlow: "column wrap",
  width: "100px",
  height: "100%",
  margin: "30px",
});

const StyledButtonGroup = styled(ButtonGroup)({
  display: "flex",
  flexDirection: "column",
});

const StyledButton = styled(Button)(({ disable }) => ({
  borderRadius: 0,
  background: "white",
  color: "blue",
  border: "1px solid blue",
  "&:hover": {
    background: "blue",
    color: "white",
  },
  "&:disabled": {
    background: disable ? "gray" : "white",
    color: disable ? "white" : "blue",
    border: disable ? "1px solid gray" : "1px solid blue",
  },
}));

const App = () => {
  const count = useSelector((state) => state.count);
  const disable = useSelector((state) => state.disable);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleDisable = () => {
    dispatch({ type: "DISABLE" });
  };

  const handleEnable = () => {
    dispatch({ type: "ENABLE" });
  };

  return (
    <RootContainer>
      <StyledButtonGroup disableElevation variant="contained" color="primary">
        <StyledButton
          onClick={handleIncrement}
          disabled={disable}
          disable={disable}
        >
          CLICK:{count}
        </StyledButton>
        <StyledButton onClick={handleClear} disable={disable}>
          CLEAR
        </StyledButton>
        <StyledButton
          onClick={disable ? handleEnable : handleDisable}
          disable={disable}
        >
          {disable ? "ABLE" : "DISABLE"}
        </StyledButton>
      </StyledButtonGroup>
    </RootContainer>
  );
};

export default App;
