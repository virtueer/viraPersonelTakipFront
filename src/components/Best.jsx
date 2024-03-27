import React, { useContext } from "react";
import { timelineContext } from "../Context/Timeline";

import HakanImage from "../assets/images/Hakan.jpg";

const Best = () => {
  const { timeline, setTimeline } = useContext(timelineContext);
  return (
    <div className="flex flex-col mx-4 gap-4 bg-red-700 p-4 items-center justify-center rounded-lg">
      <img
        src={HakanImage}
        alt="Hakan"
        className="w-52 h-52 object-cover rounded-full"
      />
      <h1 className="font-bold text-white">Hakan Çelik</h1>
      {/* TODO:Buraya Toplam Gelecek */}
    </div>
  );
};

export default Best;
