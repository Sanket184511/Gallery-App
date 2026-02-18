import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
    console.log(response);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h2 className="text-gray-300 text-xs sm:text-sm absolute left-1/2 top-1/2 -translate-x-1/2  -traslate-y-1/2 font-semibold">
      Loading.....
    </h2>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black min-h-screen p-2 sm:p-4 overflow-auto text-white ">
      <div className="flex h-[82%] sm:h-[82%] flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
        {" "}
        {printUserData}{" "}
      </div>
      <div className="flex justify-center gap-3 sm:gap-6 items-center p-2 sm:p-4 mt-4">
        <button
          style={{ opacity: index == 1 ? 0.6 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 text-xs sm:text-sm cursor-pointer active:scale-95  text-balck rounded px-3 py-1.5 sm:px-4 sm:py-2 font-semibold ">
          Prev
        </button>
        <h4 className="text-sm sm:text-base">page {index}</h4>
        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
          className="bg-amber-400 text-xs sm:text-sm cursor-pointer active:scale-95 text-balck rounded px-3 py-1.5 sm:px-4 sm:py-2 font-semibold ">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
