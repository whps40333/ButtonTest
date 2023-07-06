import { createStore } from "redux";

// 初始狀態
const initialState = {
  count: 0,
  disable: false,
};

// Reducer 函數
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "CLEAR":
      return { ...state, count: 0 };
    case "DISABLE":
      return { ...state, disable: true };
    case "ENABLE":
      return { ...state, disable: false };
    default:
      return state;
  }
};

// 建立 Store
const store = createStore(reducer);

export default store;
