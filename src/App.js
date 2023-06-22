import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./style.scss"
import Navbar from "./components/Navbar";
import Chatbox from "./components/Chatbox";



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