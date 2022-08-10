import React, { useEffect, useState } from "react";
import "./Recommended.css";
import VideoCard from "../VideoCard/VideoCard";
import axios from "axios";
import { DateTime } from "luxon";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { AiOutlineLoading3Quarters } from "@react-icons/all-files/ai/AiOutlineLoading3Quarters";

const RecommendedVideos = () => {
  const [videoCards, setVideoCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      )
      .then((response) => {
        console.log(response.data.items);
        createVideoCards(response.data.items);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  const createVideoCards = async (videoItems) => {
    let newVideoCards = [];
    for (const video of videoItems) {
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

      const title = snippet.title;
      const image = snippet.thumbnails.medium.url;
      const views = video.statistics.viewCount;
      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channel = snippet.channelTitle;

      new videoCards.push({
        videoId,
        image,
        title,
        channel,
        views,
        timestamp,
        channelImage,
      });
    }
    setVideoCards(newVideoCards);
    setIsLoading(false);
  };

  if (isError) {
    return (
      <ErrorOutlineOutlinedIcon className="loading">
        No Results found!
      </ErrorOutlineOutlinedIcon>
    );
  }

  return (
    <div className="recommededvideos_videos">
      {videoCards.map((item) => {
        return (
          <VideoCard
            key={item.videoId}
            title={item.title}
            image={item.image}
            views={item.views}
            timestamp={item.timestamp}
            channel={item.channel}
            channelImage={item.channelImage}
          />
        );
      })}
    </div>
  );
};

export default RecommendedVideos;
