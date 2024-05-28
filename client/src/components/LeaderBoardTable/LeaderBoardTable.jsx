import React, { useEffect, useState } from "react";
import axios from "axios";
import lang from "../../utils/langaugeConstant";
import { useSelector } from "react-redux";

const LeaderBoardTable = () => {
  const [leaderData, setLeaderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const langKey=useSelector((store)=>store.config.lang)

  const fetchLeaderData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/leaderboard`
      );
      if (response.status === 200) {
        setLeaderData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeaderData();
  }, []);

  const totalItems = leaderData.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = leaderData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const Pagination = () => (
    <div className="flex justify-center mt-4">
      <button
        className={`mx-1 px-3 py-1 rounded-md ${
          currentPage === 1 ? "bg-black text-white" : "bg-gray-300"
        }`}
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      >
        {lang[langKey].First}
      </button>
      <button
        className={`mx-1 px-3 py-1 rounded-md ${
          currentPage === 1 ? "bg-black text-white" : "bg-gray-300"
        }`}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {lang[langKey].Prev}
      </button>
      <span className="mx-2">
        {lang[langKey].Page} {currentPage} {lang[langKey].of} {totalPages}
      </span>
      <button
        className={`mx-1 px-3 py-1 rounded-md ${
          currentPage === totalPages ? "bg-black text-white" : "bg-gray-300"
        }`}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {lang[langKey].Next}
      </button>
      <button
        className={`mx-1 px-3 py-1 rounded-md ${
          currentPage === totalPages ? "bg-black text-white" : "bg-gray-300"
        }`}
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        {lang[langKey].Last}
      </button>
    </div>
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{lang[langKey].Leaderboard}</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">{lang[langKey].Rank}</th>
              <th className="px-4 py-2">{lang[langKey].ProfilePhoto}</th>
              <th className="px-4 py-2">{lang[langKey].Username}</th>
              <th className="px-4 py-2">{lang[langKey].Coins}</th>
              <th className="px-4 py-2">{lang[langKey].Notes}</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user, index) => (
              <tr
                key={user._id}
                className={`${
                  (indexOfFirstItem + index) % 2 === 0
                    ? "bg-gray-100"
                    : "bg-white"
                } hover:bg-gray-200 transition-colors duration-200`}
              >
                <td className="px-4 py-2 border border-gray-300">
                  {indexOfFirstItem + index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <img
                    src={user.userPhoto}
                    alt={user.username}
                    className="w-8 h-8 rounded-full"
                  />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {user.username}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {user.coins}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {user.notes.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default LeaderBoardTable;
