import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { useState } from "react";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div>
      <header>
        <div>
          <header>
            <nav className="navbar navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  EZWeather
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/">Home</Link>
                    </li>{" "}
                    |
                    {localStorage.jwt === undefined ? (
                      <>
                        <li className="nav-item">
                          <a onClick={handleLoginShow} href="#">
                            Login
                          </a>
                        </li>
                        <li className="nav-item">
                          <a onClick={handleSignupShow} href="#">
                            Signup
                          </a>
                        </li>
                        |
                      </>
                    ) : (
                      <li className="nav-item">
                        <a onClick={handleLogout} href="#">
                          Logout
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
            <Modal show={isSignupVisible} onClose={handleSignupClose}>
              <Signup />
            </Modal>

            <Modal show={isLoginVisible} onClose={handleLoginClose}>
              <Login />
            </Modal>
          </header>
        </div>
      </header>
    </div>
  );
}
