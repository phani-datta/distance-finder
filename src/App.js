import React from "react";
import OpenMap from "./components/OpenMap";
import store from "./store/store";
import { Provider } from 'react-redux'

function App() {

  return(
    <Provider store={store}>
      <OpenMap />
    </Provider>
  )
}

export default App