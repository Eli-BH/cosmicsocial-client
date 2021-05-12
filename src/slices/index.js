import { combineReducers } from "redux";

//reducers
import loginReducer from "./login";
import registerReducer from "./register";
import exploreReducer from "./explore";
import userDataReducer from "./user";

const rootReducer = combineReducers({
  loginData: loginReducer,
  registerData: registerReducer,
  exploreData: exploreReducer,
  userData: userDataReducer,
});

export default rootReducer;
