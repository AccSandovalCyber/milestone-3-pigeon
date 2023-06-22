// export default App;
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
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