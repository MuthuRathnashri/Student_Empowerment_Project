// TeamCard.jsx

import React from "react";
import { team } from "../../dummydata";

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow' key={val.id}>
          <div className="img">
            <img src={val.cover} alt='' />
          </div>
          <div className='details'>
            <h2>{val.courseName}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
