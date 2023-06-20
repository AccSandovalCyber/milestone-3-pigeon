// import React from 'react';
// import Home from './pages/Home';
// // import CreateUser from './pages/CreateUser';
// import './style.scss';
// import { BrowserRouter } from 'react-router-dom';
// // import Navbar from './components/Navbar';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <div className="header">
//           <Home /> 
//         </div>
//       </div>
//      </BrowserRouter>
//   );
// }

// export default App;
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Navbar from "./components/Navbar";
import Chatbox from "../src/components/Chatbox";


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Navbar />
      {user ? (
        <>
          <Chatbox user={user} />
        </>
      ) : null}
    </div>
  );
}


export default App;