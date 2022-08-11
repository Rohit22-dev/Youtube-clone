import React from "react";
import "./VideoInfo.css";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SidebarRow from "../SidebarRow/SidebarRow";
import Avatar from "react-avatar";

const VideoInfo = ({
  title,
  description,
  publishedDate,
  channelTitle,
  channelImage,
  viewCount,
  likeCount,
  dislikeCount,
  subs,
}) => {
  return (
    <div className="videoinfo">
      <div className="videoinfo_headline">
        <h1>{title}</h1>
      </div>
      <div className="videoinfo_stats">
        <p>
          {viewCount} views • {publishedDate}
        </p>
        <div className="videoinfo_likes">
          <SidebarRow Icon={ThumbUpAltOutlinedIcon} title={likeCount} />
          <SidebarRow Icon={ThumbDownAltOutlinedIcon} title={dislikeCount} />
          <SidebarRow Icon={ReplyOutlinedIcon} title="SHARE" />
          <SidebarRow Icon={PlaylistAddOutlinedIcon} title="SAVE" />
          <SidebarRow Icon={MoreHorizOutlinedIcon} title="" />
        </div>
      </div>
      <hr />
      <div className="videoinfo_channel">
        <div>
          <Avatar
            className="videoinfo_avatar"
            alt={channelTitle}
            src={channelImage}
          />
          <div className="videoinfo_channelinfo">
            <h3 className="videoinfo_channeltitle">{channelTitle}</h3>
            <p className="videoinfo_channelsubs">{subs} subscribers</p>
          </div>
        </div>
        <div className="videoinfo_subscribe">
          <button color="secondary">SUBSCRIBE</button>
        </div>
      </div>
      <div className="videoinfo_channeldesc">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoInfo;
