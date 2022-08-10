import React from "react";
import "./VideoRow,css";

const VideoRow = ({ views, description, timestamp, channel, title, image }) => {
  return (
    <div className="videorow">
      <img src={image} alt="" />
      <div className="videorow_text">
        <h3>{title}</h3>
        <p className="videorow_headline">
          {channel} • {views} views • {timestamp}
        </p>
        <p className="videorow_description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
