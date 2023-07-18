import React, { useEffect } from "react";
import { BrowserRouter as Router,Routes,Route, useNavigate} from "react-router-dom";
import { useState } from "react";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";

function App() {
  const [user,setUser]=useState();
  const [acitveState, setActiveState] = useState(0)
  
  const activeChangeHandler = () => {
    setActiveState((prevState) => {
      return prevState + 1;
    });
  };
  const getUserName=(user)=>{
    setUser(user);
  }


  return (
  <Router>
      <Routes>
        <Route path="/" element={<FirstPage
            active={acitveState}
            onClickChange={activeChangeHandler}
            getUser={getUserName}
          ></FirstPage>} />
        <Route path="/workspace" element={<SecondPage
            active={acitveState}
            onClickChange={activeChangeHandler}
          ></SecondPage>} />
        <Route path="/plan" element={<ThirdPage
            active={acitveState}
            onClickChange={activeChangeHandler}
          ></ThirdPage>} />
        <Route path="/done" element={ <FourthPage
            active={acitveState}
            onClickChange={activeChangeHandler}
            userNameGot={user ?? ""}
          ></FourthPage>} />
      </Routes>
  </Router>
  )
}

export default App;


