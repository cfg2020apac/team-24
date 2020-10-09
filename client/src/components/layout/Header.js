
import React, { useContext } from "react"
import { NavLink, withRouter } from "react-router-dom"
import headerStyles from "./header.module.scss"
import CurrentUserContext from '../../context/current-user.context'

import firebase,{ firestore, auth } from '../../firebase'

const Header = ({ history }) => {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

  const LogOut = () => {
    if (currentUser.token) {
      auth.signOut()
      console.log(currentUser, "logging out");
      setCurrentUser({
        token: undefined,
        userId: "",
      });
      localStorage.removeItem("user");
      history.push("/");
    }
  };

  const signInWithGoogle = () => {

    const data = {
      email: 'diabhaque@gmail.com',
      password: '12345'
    }
    const userDetails={
      token: data.password,
      userId: data.email
    }
    
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    setCurrentUser(userDetails)
    history.push(`/profile/${data.email}`)
  }

  return (
    <header className={headerStyles.header}>
      <h1>
        <NavLink className={headerStyles.title} to="/">
          Blossom World Society
        </NavLink>
      </h1>
      <nav className={headerStyles.navWhole}>
        <ul className={headerStyles.navList}>
          <li>
            <NavLink
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
              exact={true}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/intro"
            >
              Getting Started
            </NavLink>
          </li>
          <li>
            <NavLink
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/chatroom"
            >
              Chatroom
            </NavLink>
          </li>
          <li>
            <NavLink
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/findjob"
            >
              Find Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/postjob"
            >
              Share an Event
            </NavLink>
          </li>
        </ul>
        <ul className={headerStyles.navList}>
          {!currentUser.token ? (
            <>
              <li>
                <button 
                  className={headerStyles.button}
                  onClick={signInWithGoogle}
                >
                  Sign In
                </button>

              </li>
              <li>
                <NavLink
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to={`/profile/${currentUser.userId}`}
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <button className={headerStyles.button} onClick={LogOut}>
                  Log out
                </button>
                {/* <NavLink
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to="/logout"
                >
                    Log out
                </NavLink> */}
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
