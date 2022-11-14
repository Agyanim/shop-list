import React from "react";
import { useState } from "react";
import { render } from "react-dom";

const Shoplist = () => {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setItemList((prev) => [
      ...prev,
      {
        id: new Date().getMilliseconds(),
        addToList: item,
      },
    ]);
    setItem("");
  };
  console.log(itemList);

  const changeHandler = (e) => {
    setItem(e.target.value);
  };

  const renderShopList = itemList.map((value) => {
    return <li>{value.addToList}</li>;
  });

  return (
    <div className="bg-gray-500 h-screen flex flex-col items-center">
      <div
        className="w-[80vw] h-[80vh] bg-white m-auto rounded-lg flex
      flex-col items-center
      "
      >
        <div className=" my-10">
          <h1
            className=" text-lg font-bold uppercase sm:text-2xl
          "
          >
            Shop List
          </h1>
        </div>
        <form action="#" onSubmit={submitHandler}>
          <div
            className="flex flex-col items-center
            "
          >
            <input
              type="text"
              name="list"
              value={item}
              onChange={changeHandler}
              className="bg-gray-100 w-[14rem] py-2 pl-4 sm:w-[26rem]
           hover:border-red-300 hover:border-solid hover:border-[1px]
          "
            />
            <div
              className="mt-4
          "
            >
              <button
                type="submit"
                className=" bg-gray-700 px-10 py-2 rounded-xl text-white font-bold sm:px-16 sm:py-3
            hover:bg-opacity-60
            "
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="mt-4">
          <ul className="list-decimal">{renderShopList}</ul>
        </div>
      </div>
    </div>
  );
};

export default Shoplist;
