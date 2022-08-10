import React from "react";
import "./VideoCard.css";

const VideoCard = ({
  title,
  image,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="videocard">
      <img className="videocard_image" src={image} alt="" />
      <div className="videocard_info">
        <Avatar className="videocard_avatar" alt={channel} src={channelImage} />
        <div className="videocard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
