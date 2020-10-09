import React, { useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import headerStyles from "./header.module.scss";
import CurrentUserContext from "../../context/current-user.context";

import firebase, { firestore, auth } from "../../firebase";
import { Input, Spin } from "antd";
const { Search } = Input;

const Header = ({ history }) => {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

  const LogOut = () => {
    if (currentUser.token) {
      auth.signOut();
      console.log(currentUser, "logging out");
      setCurrentUser({
        token: undefined,
        userId: "",
      });
      localStorage.removeItem("user");
      history.push("/");
    }
  };

  const signInWithGoogle = async () => {
    const data = {
      email: "diabhaque@gmail.com",
      password: "12345",
    };
    const userDetails = {
      token: data.password,
      userId: data.email,
    };

    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    setCurrentUser(userDetails);
    history.push(`/profile/${data.email}`);
  };

  return (
    <header className={headerStyles.header}>
      <h1>
        <NavLink className={headerStyles.title} to="/">
          Blossom World Society
        </NavLink>
      </h1>
      {/* <Search
        size="large"
        placeholder="search for the event you want"
        onSearch={(value) => console.log(value)}
        style={{ width: "100%" }}
        enterButton
      /> */}
      <nav className={headerStyles.navWhole}>
        <ul className={headerStyles.navList}>
          <li>
            <NavLink
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
              exact={true}
            >
              Home (Deprecated?)
            </NavLink>
          </li>
          <li>
            <NavLink
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/findjob"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/intro"
            >
              Timeline
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
