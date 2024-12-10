import WorkCard from "../components/workcard";
import { useSelector, useDispatch } from "react-redux";
import { saveData, deleteData } from "../store/portfolioSlice";
import { Link, useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const works = useSelector((state) => state.portfolio.value);

  const removeData = (id) => {
    dispatch(deleteData(id));
  };

  const editData = (data) => {
    dispatch(saveData(data));
    navigate("/");
  };

  return (
    <div className="container mx-auto py-12 px-4 lg:px-0 relative">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        My Portfolio
      </h1>
      <button onClick={()=> navigate("/")} className="absolute top-12 right-0 bg-green-400 text-white px-10 py-2 rounded-md">Go Home</button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {works.length ? (
          works.map((item) => (
            <WorkCard
              rm={removeData}
              edit={editData}
              data={item}
              key={item?.id}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 bg-gray-100 rounded-lg shadow-lg">
            <span className="text-2xl font-semibold text-gray-700 mb-4">
              No data available
            </span>
            <Link
              to="/"
              className="py-3 px-6 rounded-lg bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 transition"
            >
              Create Work
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
