import React from "react";
import Header from "./components/header/index";
import "./app.scss";
import Headline from "./components/headline/index";
import { Provider } from "react-redux";
import { store } from "./createStore";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
        </section>
      </div>
    </Provider>
  );
}

export default App;
