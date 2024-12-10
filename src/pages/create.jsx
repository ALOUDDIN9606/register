import { useSelector, useDispatch } from "react-redux";
import { createData, editData } from "../store/portfolioSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CreateWork = () => {
  const initState = {
    title: "",
    image: "",
    info: "",
  };
  const [data, setData] = useState(initState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, editedData } = useSelector((state) => state.portfolio);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function sendData(e) {
    e.preventDefault();
    if (status === "created") {
      dispatch(createData({ id: Math.random(), ...data }));
    } else {
      dispatch(editData({ ...data }));
    }
    setData(initState);
    navigate("/portfolio");
  }

  useEffect(() => {
    if (status === "updated") {
      setData({
        ...editedData,
      });
    }
  }, []);
  return (
    <div className="pt-12 bg-gray-50 min-h-screen relative">
    <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
      Portfolio Page
    </h1>
    <button className="absolute top-12 right-32 bg-blue-500 text-white px-7 py-2 rounded-md" onClick={()=> navigate("/portfolio")}>View gallery</button>
  
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <form
        onSubmit={sendData}
        className="flex flex-col w-full gap-4"
      >
        <label className="text-gray-700 font-semibold">Title</label>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          value={data.title}
          onChange={handleChange}
          required
          className="py-2 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
  
        <label className="text-gray-700 font-semibold">Enter Image URL</label>
        <input
          type="text"
          placeholder="Enter image URL"
          name="image"
          required
          value={data.image}
          onChange={handleChange}
          className="py-2 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
  
        {/* Info Textarea */}
        <label className="text-gray-700 font-semibold">Description</label>
        <textarea
          className="resize-none w-full h-32 py-2 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter a short description"
          name="info"
          value={data.info}
          onChange={handleChange}
          required
        ></textarea>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          {status === "created" ? "Create" : "Update"}
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default CreateWork;
