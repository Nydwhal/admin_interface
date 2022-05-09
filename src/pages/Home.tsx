import React, { FunctionComponent } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import UserService from "../services/user-service";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const disconnect = () => {
    UserService.logout().then(() => navigate("/login"));
  };

  return (
    <div>
      <div>
        <nav className='nav-extended teal'>
          <div className='nav-wrapper'>
            <a href='#' className='brand-logo center'>
              <Link to='/' className=''>
                Marketplace
              </Link>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a>
                  <i
                    onClick={disconnect}
                    style={{ marginRight: "10px" }}
                    className='material-icons'
                  >
                    power_settings_new
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <div className='nav-content center  '>
            <ul className='tabs tabs-transparent'>
              <li className='tab'>
                <a className='active'>
                  <Link to='/users'></Link>
                </a>
              </li>
              {/* <li className='tab'>
                <Link to='/products'>Products</Link>
              </li> */}
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
