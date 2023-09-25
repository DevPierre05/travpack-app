/* eslint-disable react/prop-types */
import { useState } from "react";
import editImg from "../assets/edit-96.png"
import deleteImg from "../assets/delete-96.png"
import tickImg from "../assets/tick-100.png"

export default function DisplayList ({ items, capFirstLetter, handleComplete, deleteItem, editItem, deleteAll}) {
  const [sortBy, setSortBy] = useState("input")

  const updateSort = (e) => {
    setSortBy(e.target.value)
  }

  let sortedItems;
  switch (sortBy) {
    case "packed":
      sortedItems = items.toSorted((a, b) => Number(a.isDone) - Number(b.isDone))
      break;
    case "description":
      sortedItems = items.toSorted((a, b) => a.item.localeCompare(b.item));
      break;
    default:
    sortedItems = items;
  }

  return (
    <div className="travel_items_container mt-14 mb-10">
      <h2 className="text-xl underline underline-offset-8 text-center uppercase tracking-wide font-medium">
        Travel Items
      </h2>
      {items.length === 0 ? (
        <div className="text-center">
          <p className="pt-20 ">There are no travel Items.😒</p>
          <p className="pt-2">Start Adding 😊</p>
        </div>
      ) : (
        <ul className="items-ul gap-2 mt-10 px-2 sm:gap-5 md:gap-10">
          {sortedItems.map((item, i) => {
            return (
              <li
                key={i}
                className="flex gap-3 justify-between items-center text-lg p-2"
              >
                <div className="flex gap-3 items-center">
                  {!item.isDone ? (
                    <div
                      onClick={() => handleComplete(i)}
                      className="w-5 h-5 border border-gray-400 rounded cursor-pointer"
                    ></div>
                  ) : (
                    <img
                      onClick={() => handleComplete(i)}
                      src={tickImg}
                      alt="tick icon"
                      className="w-6 h-6 cursor-pointer"
                    />
                  )}
                  <span
                    style={
                      item.isDone ? { textDecoration: "line-through" } : {}
                    }
                  >
                    {item.quantity} {capFirstLetter(item.item)}
                  </span>
                </div>
                <div className="flex gap-2 items-center sm:gap-5">
                  <img
                    src={editImg}
                    alt="edit icon"
                    className="w-5 h-5 opacity-80 hover:opacity-100"
                    onClick={() => editItem(i)}
                  />
                  <img
                    src={deleteImg}
                    alt="delete icon"
                    className="w-5 h-5 opacity-80 hover:opacity-100"
                    onClick={() => deleteItem(i)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {items.length > 0 && (
        <div className="flex gap-4 mt-10 justify-center">
          {items.length > 1 && (
            <select onChange={updateSort} className="bg-orange-800 text-white border rounded-md p-1 px-2">
              <option value="input">Sort by input Items</option>
              <option value="description">Sort by description</option>
              <option value="packed">Sort by Packed Items</option>
            </select>
          )}
          <button
            onClick={deleteAll}
            className="bg-orange-700 text-white border rounded-md p-1 px-2"
          >
            Clear List
          </button>
        </div>
      )}
    </div>
  );
}