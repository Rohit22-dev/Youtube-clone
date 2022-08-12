import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ytlogo from "../../assets/youtube.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
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
        <input
          type="text"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_searchbutton" />
        </Link>
      </div>

      {/* right side */}
      <div className="header_right">
        <VideoCallOutlinedIcon className="header_icon" />
        <NotificationsNoneSharpIcon className="header_icon" />
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
