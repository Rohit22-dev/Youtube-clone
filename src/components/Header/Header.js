import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ytlogo from "../../assets/youtube.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <div className="header">
      {/* left side */}
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img src={ytlogo} alt="" className="header_logo" />
        </Link>
      </div>

      {/* center */}
      <div className="header_center">
        <input type="text" />
        <SearchIcon className="header_searchbutton" />
      </div>

      {/* right side */}
      <div className="header_right">
        <VideoCallOutlinedIcon className="header_icon" />
        <NotificationsNoneSharpIcon className="header_icon" />
        <AccountCircleOutlinedIcon className="header_icon" />
        <Avatar
          src="https://avatars.githubusercontent.com/u/100214144?v=4"
          round={true}
          size={30}
        />
      </div>
    </div>
  );
};

export default Header;
