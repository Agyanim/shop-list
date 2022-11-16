import React from "react";
import { useState } from "react";
import { render } from "react-dom";

const Shoplist = () => {
  const [item, setItem] = useState({
    itemName: "",
    price: 0,
  });
  const [itemList, setItemList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setItemList((prev) => [
      ...prev,

      {
        id: new Date().getMilliseconds(),
        itemName: item.itemName,
        price: item.price,
      },
    ]);
    setItem({
      itemName: "",
      price: 0,
    });
  };

  const changeHandlerItem = (e) => {
    setItem({ ...item, itemName: e.target.value });
  };

  const changeHandlerPrice = (e) => {
    setItem({ ...item, price: e.target.value });
  };

  const deleteHandler = (id) => {
    const newItemList = itemList.filter((item) => item.id !== id);
    setItemList(newItemList);
  };

  const renderShopList = itemList.map((value) => {
    return (
      <>
        <ul
          className="flex justify-between items-center w-[60vw]
          sm:w-[40vw]
          lg:w-[20vw]
          "
          key={value.id}
        >
          <li>
            <span className="mr-2">
              <input type="checkbox" name="" id="" />
            </span>
            {value.itemName}
          </li>
          <li>
            {value.price}{" "}
            <span
              onClick={() => deleteHandler(value.id)}
              className="text-red-600 border-red-600 border-[1px] px-[0] py-0 cursor-pointer ml-4 "
            >
              x
            </span>
          </li>
        </ul>
        <hr className="w-full h-[2px] bg-gray-400 my-2 " />
      </>
    );
  });

  return (
    <section className="bg-gray-500 h-screen flex flex-col items-center">
      <div
        className="w-[80vw]  h-[80vh] bg-white m-auto rounded-lg flex
      flex-col items-center
      sm:w-[50vw]
      lg:w-[30vw]
      "
      >
        <div className=" my-5">
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
            <div className="flex flex-col items-center gap-2 [&_input]:w-[60vw] sm:[&_input]:w-[40vw] lg:[&_input]:w-[20vw]
            
            ">
              <input
                type="text"
                name="list"
                value={item.itemName}
                placeholder="Enter item"
                onChange={changeHandlerItem}
                className="bg-gray-100   py-2 pl-4 
           hover:border-red-300 hover:border-solid hover:border-[1px] 
          "
              />
              <input
                type="text"
                name="price"
                value={item.price}
                placeholder="price"
                onChange={changeHandlerPrice}
                className="bg-gray-100 py-2 pl-4 
            hover:border-red-300 hover:border-solid hover:border-[1px]
            "
              />
            </div>
            <div
              className="mt-4
          "
            >
              <button
                type="submit"
                className=" bg-gray-700 px-10 py-2 rounded-xl text-white font-bold sm:px-12 sm:py-2
            hover:bg-opacity-60
            "
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="mt-4">
          <div className="">{renderShopList}</div>
        </div>
      </div>
    </section>
  );
};

export default Shoplist;
