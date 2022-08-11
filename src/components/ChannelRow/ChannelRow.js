import React from "react";
import "./ChannelRow.css";
import Avatar from "react-avatar";

const ChannelRow = ({ image, channel, subs, noOfVideos, description }) => {
  return (
    <div className="channelrow">
      <Avatar className="channelrow_logo" alt={channel} src={image} />
      <div className="channelrow_text">
        <h4>{channel}</h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
