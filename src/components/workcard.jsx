import React from "react";

const WorkCard = ({ rm, edit, data }) => {
  return (
    <div className="p-5 bg-white shadow-lg border-2 rounded-xl transition-transform hover:scale-105">
      <img
        src={
          data?.image ||
          "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
        }
        className="w-full h-[200px] object-cover rounded-lg mb-4"
        alt="card-image"
      />
      <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
        {data?.title}
      </h3>
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{data?.info}</p>
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => edit(data)}
          className="flex-1 py-2 px-4 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-all"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => rm(data?.id)}
          className="flex-1 py-2 px-4 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-all"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
