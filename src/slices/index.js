import { combineReducers } from "redux";

//reducers
import loginReducer from "./login";
import registerReducer from "./register";

const rootReducer = combineReducers({
  loginData: loginReducer,
  registerData: registerReducer,
});

export default rootReducer;
