import { footerList, footerMenu } from "./config";
import { Link } from "react-router-dom";

const currentYear = 2026; //will be dynamically assigned with a function later

function Footer() {
  return (
    <div className="footer">
      <div className="footer__main">
        <div className="footer__left">
          <h1>The Smarter Way to Stay</h1>
          <p>
            We've reimagined luxury for the modern era. No more waiting in lines
            or standard experiences. Every detail is calibrated to your personal
            taste.
          </p>

          <button>START BOOKING</button>
        </div>

        <div className="footer__right">
          {footerList.map((list) => (
            <div key={list.id} className="footer__right-content">
              <img src={list.icon} alt={list.alt} />

              <div>
                <h3 className="footer__right-title">{list.title}</h3>
                <p className="footer__right-desc">{list.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__base">
        <p>
          &copy; {currentYear} RAVEN HOSPITALITY GROUP. ALL RIGHTS RESERVED.
        </p>

        <ul className="footer__menu">
          {footerMenu.map((menu) => (
            <li key={menu.id}>
              <Link to={menu.path}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Footer;
