import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow';
import "./Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbsUpDownTwoToneIcon from '@mui/icons-material/ThumbsUpDownTwoTone';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={WhatshotIcon} title='Trending' />
      <SidebarRow Icon={SubscriptionsIcon} title='Subscription' />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title='Library' />
      <SidebarRow Icon={HistoryIcon} title='History' />
      <SidebarRow Icon={PermMediaIcon} title='Your videos' />
      <SidebarRow Icon={WatchLaterIcon} title='Watch later' />
      <SidebarRow Icon={ThumbsUpDownTwoToneIcon} title='Liked videos' />
      <hr />
    </div>
  )
}

export default Sidebar 