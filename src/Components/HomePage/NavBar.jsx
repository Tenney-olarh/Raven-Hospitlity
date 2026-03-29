// import { Link } from "react-router-dom";

// function Navbar({ menu }) {
//   return (
//     <nav className="nav">
//     <Link to="/">
//       <img src="/logo.svg" alt="Site Logo" className="logo" />
//    </Link>

//       <div className="nav__bar">
//         <ul className="nav__menus">
//           {menu.map((item) => (
//             <li key={item.id}>
//               <Link to={item.path}>{item.name}</Link>
//             </li>
//           ))}
//         </ul>

//         <div className="nav__avatar-wrapper">
//           <img
//             src="/avatar-homepage.jpg"
//             alt="Profile Image"
//             className="nav__avatar"
//           />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { Link } from "react-router-dom";

function Navbar({ menu }) {
  
  return (
    <nav className="navs">
      {/* Logo */}
      <Link to="/">
        <img src="/logo.svg" alt="Site Logo" className="navselogo" />
      </Link>

      <div className="nav__bar">
        {/* Navigation Links */}
        <ul className="nav__menus">
          {menu.map((item) => (
            <li key={item.id}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Avatar */}
        <div className="nav__avatar-wrapper">
          <img
            src="/avatar-homepage.jpg"
            alt="Profile Image"
            className="nav__avatar"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;