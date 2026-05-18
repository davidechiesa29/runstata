import { useState } from "react";
import Activity from "../components/Activity.tsx";
import '../styles/activities.css';
import { MdFilterList } from "react-icons/md";
import { HiOutlineUpload } from "react-icons/hi";
import UploadModal from "../components/UploadModal.tsx";
import FilterModal from "../components/FilterModal.tsx";


export default function Activities() {

  let activitiesData = [{name: "recovery", date: "December 20, 2024", time: "1:02 PM", type:"Easy", distance: "6.00 mi", pace: "8:20 min/mile", duration: "50:00"}, 
    {name: "5x3 min 60s jog rest", date:"October 27, 2022", time: "4:15 PM", type:"Workout", distance: "7.00 mi", pace: "8:03 min/mile", duration: "56:21"}, 
    {name: "chill sesh", date: "March 12, 2026", time: "10:10 AM", type:"Long", distance: "7.56 mi", pace: "7:58 min/mile", duration: "1:00:20"},
    {name: "South hudson 5k", date:"October 13, 2022", time: "5:46 PM",type:"Race", distance: "3.11 mi", pace: "5:33 min/mile", duration: "17:15"}];

  const [activities] = useState(activitiesData);
  
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  return <div>
    <div id="b-triangleContainer">
        <div id="b-triangleLeft"></div>
        <div id="b-triangleRight"></div>
        <div id="b-triangle"></div>
    </div>
    <div id="activityContainer">
      <div style={{display: "flex"}}>
        <h1 id="header"> Activities </h1>
      </div>
      <div>
        <button id="filterButton"  onClick={() => setFilterModalOpen(open => {
          setUploadModalOpen(false);
          return !open })}> Filter <MdFilterList/> </button>
        <button id="uploadButton" onClick={() => setUploadModalOpen(open => {
          setFilterModalOpen(false);
          return !open })}> Upload <HiOutlineUpload/> </button>
      </div>
      { uploadModalOpen && <UploadModal /> }
      { filterModalOpen && <FilterModal /> }
      {
        activities.map((a) => (<Activity key={a.name} {...a}/>))
      }
    </div>
</div>
}