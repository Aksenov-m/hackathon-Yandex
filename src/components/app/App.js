import { h } from "preact";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";

const App = () => (
  <div class='app' id="app">
    <div className='app__root'>
      <Header />
       <Main />
      <Footer />
    </div>
  </div>
);

export default App;
