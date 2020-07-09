import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';;
import NavTop from "../../components/navTop";
import NavBottom from "../../components/navBottom";
import ThingContext from "../../contexts/thing";
import Routes from '../../routes';
import 'react-router-modal/css/react-router-modal.css';

const App = () => {
  const [foo, setFoo] = useState(null);
  const [bar, setBar] = useState([]);

  return (
    <BrowserRouter>
      <ThingContext.Provider value={{ foo, setFoo, bar, setBar }}>
        <NavTop />
        <Routes />
        <NavBottom />
      </ThingContext.Provider>
    </BrowserRouter>
  );
};

export default App;
