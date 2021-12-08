import { createStore } from "redux";
import reducers from "./reducer/reducer";

export const store = createStore(reducers);
