import React, { useState } from 'react'
import "./style.css";
import Menu from './MenuApi';
import MenuCard from './MenuCard';

const uniqueList = [
  ...new Set(Menu.map((curEle)=>{
  return curEle.category;
}))
];

console.log(uniqueList);

const Resturant = () => {

  // this is react hooks
  const [menuData, setMenuData]= useState (Menu);

  // console.log(menuData);
  // here we are now using javascript events
  const filterItem = (category) => {
    const updateList = Menu.filter((curEle) => {
      return curEle.category === category;
    });

    setMenuData(updateList);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className='px-12 bg-white py-5 text-lg rounded-md hover:text-purple-700 hover:border-b-4 border-purple-700  font-bold' onClick={() => setMenuData(Menu)}>All</button>
          <button className='px-12 bg-white py-5 text-lg rounded-md hover:text-purple-700 hover:border-b-4 border-purple-700 font-bold' onClick={() => filterItem("breakfast")}>Breakfast</button>
          <button className='px-12 bg-white py-5 text-lg rounded-md hover:text-purple-700 hover:border-b-4 border-purple-700  font-bold' onClick={() => filterItem("lunch")}>Lunch</button>
          <button className='px-12 bg-white py-5 text-lg rounded-md hover:text-purple-700 hover:border-b-4 border-purple-700  font-bold' onClick={() => filterItem("evening")}>Evening</button>
          <button className='px-12 bg-white py-5 text-lg rounded-md hover:text-purple-700 hover:border-b-4 border-purple-700  font-bold' onClick={() => filterItem("dinner")}>Dinner</button>
        </div>
      </nav>
    <div className='grid grid-cols-3 gap-4 my-8'>
      <MenuCard menuData={menuData}/>
    </div>
    </>
  )
}

export default Resturant