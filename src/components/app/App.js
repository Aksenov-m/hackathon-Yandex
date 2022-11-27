import { h } from "preact";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";

const App = () => (
  <div id="app">
    <>
      <Header />
      <Main />
      <Footer />
    </>
  </div>
);

export default App;
