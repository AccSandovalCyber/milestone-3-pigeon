<<<<<<< Updated upstream
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
=======
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
// import { auth } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
>>>>>>> Stashed changes
import "./style.scss"
import Home from "./pages/Home"


function App() {
  // const [user] = useAuthState(auth);
  return (
  
    <div className="App">
     
        <Home />
    </div>
  );
}


export default App;