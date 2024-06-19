import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../../utils/APIRoutes";
import "./Register.css";
import login from "../../assets/login.png";
import logo from "../../assets/logo-web.jpg";
export default function Register() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone:"",
  });

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email,phone, } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }else if (phone === "") {
      toast.error("Phone is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password,phone } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
        phone,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div  className="container">
          <div className="row">
            <div style={{ padding: 0, margin: 0 }} className="col-md-6">
              <img className="login-img" src={login} alt="login" />
            </div>
            <div
              style={{ padding: 0, margin: 0 }}
              className="col-md-6 login-right"
            >
              <img src={logo} alt="logo" />
              <div className="d-flex flex-column text-center" style={{ marginTop: 150, marginRight: 70 }}>
                <h1>Đăng kí</h1>
                <div className="input-item1">
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                    min="3"
                  />
                </div>
                <div className="input-item1">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    min="3"
                  />
                </div>
                <div className="input-item1">
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    name="phone"
                    onChange={handleChange}
                    min="3"
                  />
                </div>
                <div className="input-item1">
                  <input
                    type="text"
                    placeholder="Mật khẩu"
                    name="password"
                    onChange={handleChange}
                    min="3"
                  />
                </div>
                <div className="input-item1">
                  <input
                    type="text"
                    placeholder="Nhập lại mật khẩu"
                    name="confirmPassword"
                    onChange={handleChange}
                    min="3"
                  />
                </div>
                
          
                <button className="button" type="submit">Đăng kí</button>
                <div style={{ fontSize: 20, marginTop: 10 }}>
                  Bạn đã có tài khoản? 
                  <Link style={{ textDecoration: "none" }} to="/login">
                    <span style={gradientTextStyle}>Đăng nhập</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

const gradientTextStyle = {
  background: 'linear-gradient(90deg, #F5C46A, #FA8DAE)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  marginLeft:'5px'
};
