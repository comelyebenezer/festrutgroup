import { useState, useEffect } from "react";
import { baseUrl } from "../../configs/Config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../__public/__layouts/Header";
import Swal from "sweetalert2";
import logo from '../../../assets/images/logo/festrut-logo.png';
import { UilUser, UilEnvelope, UilLock, UilPhone, UilEye, UilEyeSlash } from '@iconscout/react-unicons';

const Signup = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `${props.company} | Create Account`;
  }, [props.company]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!data.fname || !data.lname || !data.email || !data.phone || !data.password) {
      Swal.fire({ position: "center", icon: "warning", title: "Please fill in all required fields.", showConfirmButton: false, timer: 1500 });
      return;
    }

    if (data.password !== data.confirmPassword) {
      Swal.fire({ position: "center", icon: "error", title: "Passwords do not match!", showConfirmButton: false, timer: 1500 });
      return;
    }

    if (data.password.length < 6) {
      Swal.fire({ position: "center", icon: "error", title: "Password must be at least 6 characters.", showConfirmButton: false, timer: 1500 });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("fname", data.fname);
    formData.append("lname", data.lname);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("password", data.password);

    try {
      const response = await axios.post(`${baseUrl}/signup/`, formData);

      if (response.data.bool === true) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account created successfully!",
          text: "You can now log in.",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/login");
        });
      } else {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "error",
          title: response.data.msg || "Registration failed!",
          text: "Please try again.",
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
              <h1>Join Us</h1>
              <p>Create an account to stay connected with Festrut Group — explore our real estate offerings, schedule inspections, and manage your profile.</p>
              <div className="login-features">
                <div className="login-feature">
                  <span className="login-feature-dot"></span>
                  <span>Schedule site inspections</span>
                </div>
                <div className="login-feature">
                  <span className="login-feature-dot"></span>
                  <span>Manage your profile</span>
                </div>
                <div className="login-feature">
                  <span className="login-feature-dot"></span>
                  <span>Stay updated on new projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="login-right">
            <div className="login-form-wrap">
              <h3>Create Account</h3>
              <p className="login-form-sub">Fill in your details to get started.</p>

              <form onSubmit={submitForm} className="login-form">
                <div className="login-row">
                  <div className="login-input-group">
                    <label htmlFor="fname">First Name</label>
                    <div className="login-input-icon">
                      <UilUser className="login-icon" />
                      <input type="text" id="fname" name="fname" onChange={handleChange} value={data.fname} placeholder="John" required />
                    </div>
                  </div>
                  <div className="login-input-group">
                    <label htmlFor="lname">Last Name</label>
                    <div className="login-input-icon">
                      <UilUser className="login-icon" />
                      <input type="text" id="lname" name="lname" onChange={handleChange} value={data.lname} placeholder="Doe" required />
                    </div>
                  </div>
                </div>

                <div className="login-input-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="login-input-icon">
                    <UilEnvelope className="login-icon" />
                    <input type="email" id="email" name="email" onChange={handleChange} value={data.email} placeholder="myname@mail.com" required />
                  </div>
                </div>

                <div className="login-input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="login-input-icon">
                    <UilPhone className="login-icon" />
                    <input type="tel" id="phone" name="phone" onChange={handleChange} value={data.phone} placeholder="+234 800 000 0000" required />
                  </div>
                </div>

                <div className="login-row">
                  <div className="login-input-group">
                    <label htmlFor="password">Password</label>
                    <div className="login-input-icon">
                      <UilLock className="login-icon" />
                      <input type={showPassword ? "text" : "password"} id="password" name="password" onChange={handleChange} value={data.password} placeholder="Min. 6 characters" required />
                      <button type="button" className="login-password-toggle" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <UilEyeSlash /> : <UilEye />}
                      </button>
                    </div>
                  </div>
                  <div className="login-input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="login-input-icon">
                      <UilLock className="login-icon" />
                      <input type={showConfirm ? "text" : "password"} id="confirmPassword" name="confirmPassword" onChange={handleChange} value={data.confirmPassword} placeholder="Repeat password" required />
                      <button type="button" className="login-password-toggle" onClick={() => setShowConfirm(!showConfirm)}>
                        {showConfirm ? <UilEyeSlash /> : <UilEye />}
                      </button>
                    </div>
                  </div>
                </div>

                <button type="submit" className="login-submit" disabled={loading}>
                  {loading ? <span className="login-spinner"></span> : "Create Account"}
                </button>
              </form>

              <div className="login-links">
                Already have an account? <Link to="/login" className="login-link">Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
