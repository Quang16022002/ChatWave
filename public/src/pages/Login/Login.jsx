import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../../utils/APIRoutes";
import "./Login.css";
import login from "../../assets/login.png";
import logo from "../../assets/logo-web.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Username and Password are required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Username and Password are required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handleSubmit called");  // Log để kiểm tra hàm handleSubmit có được gọi không
    if (validateForm()) {
      const { username, password } = values;
      try {
        const { data } = await axios.post(loginRoute, {
          username,
          password,
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
      } catch (error) {
        toast.error("Something went wrong. Please try again later.", toastOptions);
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
              <div className="d-flex flex-column text-center" style={{ marginTop: 200, marginRight: 70 }}>
                <h1>Đăng nhập</h1>
                <div className="input-item">
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    name="username"
                    onChange={handleChange}
                    min="3"
                  />
                </div>
                <div className="input-item">
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <button className="button" type="submit">Đăng nhập</button>
                <div style={{ fontSize: 20, marginTop: 10 }}>
                  Bạn chưa có tài khoản? 
                  <Link style={{ textDecoration: "none" }} to="/register">
                    <span style={gradientTextStyle}>Đăng ký</span>
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
