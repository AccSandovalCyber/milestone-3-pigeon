import {auth, provider} from '../firebase';
import {useState} from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function App() {

  const [ user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider).then((result)=>{
      const user = result.user;
      console.log(user);
      setUser(user);
      navigate('/home'); // Redirect to the home page;
    })
  //https://firebase.google.com/docs/auth/web/google-signin
    .catch((err)=>{
      console.log(err);
    });
  }

  return (
    <div className='formContainer' >
      <div className="signContainer">
      <h1>Pigeon</h1>
      <h2>Welcome Back!</h2>
          {user?(
            <>
            </>
          ):(
          <button className='btn' onClick={handleGoogleSignIn}> Sign In With Google </button>  
          )} 
      </div>
    </div>
  );
}

export default App;


