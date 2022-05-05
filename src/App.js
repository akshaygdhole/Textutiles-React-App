import { useState } from "react";
import "./App.css";
// import About from "./componants/About";
import Alert from "./componants/Alert";
import Navbar from "./componants/Navbar";
// import {
//   BrowserRouter as
//   Router,
//   Routes,
//   Route,
// } from "react-router-dom"; 
import TextForm from "./componants/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
  };
  setTimeout(() => {
    setAlert(null);
  }, 2000);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutiles-Dark Mode'
      // setInterval(() => {
      //   document.title = 'Textutiles-Amazing Mode'
      // },2000);
      // setInterval(() => {
      //   document.title = ' Install Textutiles'
      // },1500);
      


    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title ='Textutiles-Light Mode'
    }
  };
  return (
    <>  
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      {<div className="container my-3">
        {/* <Routes>
            <Route
              exact
               path="/"
            element={ */}
              <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below "
          mode={mode} />
          {/* }  */}
              {/* > */}
              {/* </Route> */}
        {/* <Route exact path="/About" element={<About />} ></Route> */}
      {/* </Routes> */}
        </div>}
      {/* </Router> */}
    </>
  );
}
export default App;
//  <Routes>
//             <Route exact path="/About" element={<About />}></Route>
//             <Route
//               exact
//               path="/"
//               element={
//                 <TextForm heading="Enter text" mode={mode} />
//               }
//             ></Route>
//           </Routes>
//         </div>
//       </Router>