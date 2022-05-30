import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);

    
    return (
        <>
            {menuData.map((curEle) => {

                const {id, name, category, description, image} = curEle;
                return (
                    <>
                        <div className='m-auto w-[400px] my-5 shadow-sm'>
                            <div className="card" key={id}>
                                <div className="card-body">
                                    <span className="card-number card-circle subtle -my-8">{id}</span>
                                    <span className="card-author subtle text-red-600 font-bold text-lg">{category}</span>
                                    <h2 className="card-title">{name}</h2>
                                    <span className="card-description">
                                       {description}
                                    </span>

                                    <div className="card-read">Read</div>

                                    <img src={image} alt="Food Image" className='card-media w-[340px] h-[250px]' />
                                    <button className='hover:border-b-4 border-gray-600 px-3 py-1 my-8 font-medium text-lg rounded'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}

        </>
    )
}

export default MenuCard
