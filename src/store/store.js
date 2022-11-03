import { createStore } from "redux";
import mapReducer from "./_reducers/mapReducer";

const store = createStore(mapReducer);

export default store;