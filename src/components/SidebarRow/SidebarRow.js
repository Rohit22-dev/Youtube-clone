import React from "react";
import "./SidebarRow.css";

const SidebarRow = ({ selected, Icon, title }) => {
  return (
    <div className={`sidebarrow ${selected ? 'selected' : ''}`}>
      <Icon className='sidebarrow_icon' />
      <h2 className="sidebarrow_title">{title}</h2>
    </div>
  )
};

export default SidebarRow;
