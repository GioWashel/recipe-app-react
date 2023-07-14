import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Menu } from "antd";
import logoImage from "./first-color-logo.png";
import {
  HomeOutlined,
  CompassOutlined,
  UserOutlined,
  PlusCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./NavBar.css";

export const NavBar = ({ authenticated }) => {
  const navigate = useNavigate();
  //css
  const menuStyle = {
    display: "flex",
  };
  const profileItemStyle = {
    marginLeft: "auto",
    display: 'flex',
  alignItems: 'center',
  };
  const logoTextStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };
  // logout function
  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/home");
  }
  return (
    <Menu mode="horizontal" theme="light" style={menuStyle}>
      <Menu.Item key="logo" style={{ marginRight: "0" }}>
        <Link to="/">
          <img
            src={logoImage}
            alt="Logo"
            style={{ height: "32px", marginRight: "8px"}}
          />
          <span style={logoTextStyle}>Recipe App</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="explore" icon={<CompassOutlined />}>
        <Link to="/explore">explore</Link>
      </Menu.Item>
      <Menu.Item key="create" icon={<PlusCircleOutlined />}>
        <Link to="/create">create</Link>
      </Menu.Item>

      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      {authenticated && (
        <Menu.Item
          key="logout"
          icon={<LogoutOutlined />}
          style={profileItemStyle}
          onClick={logout}
        >
          Logout
        </Menu.Item>
      )}
    </Menu>
  );
};
