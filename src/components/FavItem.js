import React from "react";
import { removeFav } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

function FavItem({ item }) {
  console.log("item",item);
  const dispatch = useDispatch();
  const removeHandler = (id) => {
    dispatch(removeFav(id));
  }
  return (
    <div className="bg-[#3b3b3b] shadow hover:shadow-lg p-3 pl-5 flex items-center group transition-all">
      <div className="flex-1 flex justify-start items-center pr-4">
        <img className='rounded' src={item.picture.large} alt={`ProfileImgBy${item.name.first}`} />
        <p className="pl-4">{`${item.name.first} ${item.name.last} / ${item.favGame} / ${item.registered.age} years playing`}</p>
      </div>
      <button
        onClick={() => {removeHandler(item.id.value)}}
        className="transition-all px-3 py-2 block text-sm rounded bg-[#efefef] text-[#3b3b3b] opacity-30 group-hover:opacity-100"
      >
        Remove
      </button>
    </div>
  );
}

export default FavItem;
