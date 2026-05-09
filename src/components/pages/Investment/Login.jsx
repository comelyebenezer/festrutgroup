import { useState, useEffect } from "react";
import { baseUrl } from "../../configs/Config";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../__public/__layouts/Header";
import Swal from "sweetalert2";
import logo from '../../../assets/images/logo/festrut-logo.png';
import { UilEnvelope, UilLock, UilEye, UilEyeSlash } from '@iconscout/react-unicons';

const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `${props.project} | Member Login`;

    const loggedInStatus = localStorage.getItem("loggedInStatus");
    if (loggedInStatus === "true") {
      window.location.href = `${window.location.origin}/dashboard`;
    }
  }, [props.project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please fill in all required fields.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const response = await axios.post(`${baseUrl}/login/`, formData);

      if (response.data.bool === true) {
        localStorage.setItem("loggedInStatus", true);
        localStorage.setItem("memberId", response.data.member_id);
        localStorage.setItem("fname", response.data.fname);
        localStorage.setItem("sname", response.data.sname);
        localStorage.setItem("isAdmin", response.data.is_admin);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = `${window.location.origin}/dashboard`;
        });
      } else {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Invalid credentials!",
          text: "Please check your email and password.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      setLoading(false);
      console.error("There was an error!", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "An error occurred!",
        text: "Please try again later.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const loggedInStatus = localStorage.getItem("loggedInStatus");
  if (loggedInStatus === "true") {
    window.location.href = `${window.location.origin}/dashboard`;
  }

  return (
    <>
      <Header />
      <Helmet>
        <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
      </Helmet>

      <div className="login-page">
        <div className="login-container">
          <div className="login-left">
            <div className="login-left-content">
              <div className="login-brand">
                <img src={logo} alt="Festrut Group" />
                <h2>Festrut <span>Group</span></h2>
              </div>
              <h1>Welcome Back</h1>
              <p>Sign in to your member dashboard to manage your investments, track returns, and access exclusive resources.</p>
              <div className="login-features">
                <div className="login-feature">
                  <span className="login-feature-dot"></span>
                  <span>Schedule site inspections</span>
                </div>
                <div className="login-feature">
                  <span className="login-feature-dot"></span>
                  <span>Manage your profile</span>
                </div>
              </div>
            </div>
          </div>

          <div className="login-right">
            <div className="login-form-wrap">
              <h3>Member Login</h3>
              <p className="login-form-sub">Enter your credentials to access your account.</p>

              <form onSubmit={submitForm} className="login-form">
                <div className="login-input-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="login-input-icon">
                    <UilEnvelope className="login-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={data.email}
                      maxLength="50"
                      placeholder="myname@mail.com"
                      required
                    />
                  </div>
                </div>

                <div className="login-input-group">
                  <label htmlFor="password">Password</label>
                  <div className="login-input-icon">
                    <UilLock className="login-icon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      onChange={handleChange}
                      value={data.password}
                      maxLength="100"
                      placeholder="Enter your password"
                      required
                    />
                    <button type="button" className="login-password-toggle" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <UilEyeSlash /> : <UilEye />}
                    </button>
                  </div>
                </div>

                <button type="submit" className="login-submit" disabled={loading}>
                  {loading ? <span className="login-spinner"></span> : "Log into Dashboard"}
                </button>
              </form>

              <div className="login-links">
                <Link to="/signup" className="login-link">Create an account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
