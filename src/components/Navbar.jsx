import React from 'react';
//import { Link } from 'react-router-dom';
//import logo from '../pigeon.png';
// import { useDispatch } from 'react-redux';

const Navbar = () => {
    return (
      <div className='navbar'>
        <span className="logo"> Pigeon</span>
        <div className="user">
          <img src="https://i1.sndcdn.com/avatars-000867944221-g1mgn0-t500x500.jpg" alt=""/>
          <span>Pak</span>
          <button>Logout</button>
  
        </div>
      </div>
    )
  }
  
  export default Navbar;

// function NavBar() {

//     return (
//         <nav class= "navbar navbar-expand-lg navbar-light bg-light">
//             <div className="navbar-left">
//                 <span class="navbar-toggler-icon"></span>
//                 <img src={logo} alt="logo" title="Pigeon Logo" width="30" height="30" class="d-inline-block aling-top"/>
//                 <Link className="navbar-brand" to="/">Home</Link>
//             </div>
//         </nav>
//     );
// }

// export const navForm = ({text, style, _onClick }) => {
//     const _onClickHandler = (event) => {
//         event.preventDefault();
//         _onClick?.(event);
//     };

//     return (
//         <button {...style}>
//             <Link href='#' onClick={_onClickHandler}>
//                 {text}
//             </Link>
//         </button>
//     );
// };
// export default NavBar;