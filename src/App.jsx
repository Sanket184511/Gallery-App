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
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h2 className="text-gray-300 text-xs absolute left-1/2 top-1/2 -translate-x-1/2  -traslate-y-1/2 font-semibold">
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
    <div className="bg-black h-screen p-4 overflow-auto text-white ">
      <div className="flex h-[82%] flex-wrap gap-4"> {printUserData} </div>
      <div className="flex justify-center gap-6 items-center p-4">
        <button
        style={{opacity:index==1?0.6:1}}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95  text-balck rounded px-4 py-2 font-semibold ">
          Prev
        </button>
        <h4>page {index}</h4>
        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-balck rounded px-4 py-2 font-semibold ">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
