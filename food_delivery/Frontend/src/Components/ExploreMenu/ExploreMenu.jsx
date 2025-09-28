// import React from 'react';
// import './ExploreMenu.css';
// import { menu_list } from '../../../assets/assets';

// const ExploreMenu = ({category,setCategory}) => {
//     return (
//         <div className='explore-menu' id='explore-menu'>
//             <h1>Explore our menu</h1>
//             <p className='explore-menu-text'>
//             Choose from a diverse menu featuring a delectable array of dishes crafted with finest ingredients and culinary which satisfy your craving and elevate your dining experience
//             </p>
//             <div className="explore-menu-list">
//                 {menu_list.map((item, index) => (
//                     <div onClick={()=>setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} key={index} className='explore-menu-list-item'>
//                         <img className={category===item.menu_name?"activate":""} src={item.menu_image} alt={item.menu_name} />
//                         <p>{item.menu_name}</p>
//                     </div>
//                 ))}
//             </div>
//             <hr/>
//         </div>
//     );
// }

// export default ExploreMenu;
 
import React, { useState } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../../assets/assets';

const ExploreMenu = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>
                Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy you.
            </p>
            <hr />
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div
                        key={index}
                        className={`explore-menu-list-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        <img src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExploreMenu;
