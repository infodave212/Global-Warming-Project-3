import { Link } from 'react-router-dom';
import "../../App.css"
import Auth from '../../utils/auth';
function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return <>
    <div class="header ">
      <div class="header_resize ">

        <div className='nav-link w-100 d-flex justify-content-right'> 
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>

        <div class="logo">
          <h1><a href="index.html"><span>Global</span> Warming<br />
            </a></h1>
        </div>
        <div class="clr"></div>
      </div>
    </div>
  </>
}
export default Navbar 