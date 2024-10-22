import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './album.css';
import Img11 from './img/img1/img21.jpg';
import Img111 from './img/img2/hi21.jpg';
import Img1111 from './img/img3/mo21.jpg';
import Img11111 from './img/img4/c21.jpg';
import Img111111 from './img/img5/ce21.jpg';

import Img1 from './img/img1/img1.jpg';
import Img2 from './img/img1/img2.jpg';
import Img3 from './img/img1/img3.jpg';
import Img4 from './img/img1/img4.jpg';
import Img5 from './img/img1/img5.jpg';
import Img6 from './img/img1/img6.jpg';
import Img7 from './img/img1/img7.jpg';
import Img8 from './img/img1/img8.jpg';
import Img9 from './img/img1/img9.jpg';
import Img10 from './img/img1/img10.jpg';
import Img101 from './img/img1/img11.jpg';
import Img12 from './img/img1/img12.jpg';
import Img13 from './img/img1/img13.jpg';
import Img14 from './img/img1/img14.jpg';
import Img15 from './img/img1/img15.jpg';
import Img16 from './img/img1/img16.jpg';
import Img17 from './img/img1/img17.jpg';
import Img18 from './img/img1/img18.jpg';
import Img19 from './img/img1/img19.jpg';
import Img20 from './img/img1/img20.jpg';

import Img21 from './img/img2/hi1.jpg';
import Img22 from './img/img2/hi2.jpg';
import Img23 from './img/img2/hi3.jpg';
import Img24 from './img/img2/hi4.jpg';
import Img25 from './img/img2/hi5.jpg';
import Img26 from './img/img2/hi6.jpg';
import Img27 from './img/img2/hi7.jpg';
import Img28 from './img/img2/hi8.jpg';
import Img29 from './img/img2/hi9.jpg';
import Img30 from './img/img2/hi10.jpg';
import Img31 from './img/img2/hi11.jpg';
import Img32 from './img/img2/hi12.jpg';
import Img33 from './img/img2/hi13.jpg';
import Img34 from './img/img2/hi14.jpg';
import Img35 from './img/img2/hi15.jpg';
import Img36 from './img/img2/hi16.jpg';
import Img37 from './img/img2/hi17.jpg';
import Img38 from './img/img2/hi18.jpg';
import Img39 from './img/img2/hi19.jpg';
import Img40 from './img/img2/hi20.jpg';

import Img41 from './img/img3/mo1.jpg';
import Img42 from './img/img3/mo2.jpg';
import Img43 from './img/img3/mo3.jpg';
import Img44 from './img/img3/mo4.jpg';
import Img45 from './img/img3/mo5.jpg';
import Img46 from './img/img3/mo6.jpg';
import Img47 from './img/img3/mo7.jpg';
import Img48 from './img/img3/mo8.jpg';
import Img49 from './img/img3/mo9.jpg';
import Img50 from './img/img3/mo10.jpg';
import Img51 from './img/img3/mo11.jpg';
import Img52 from './img/img3/mo12.jpg';
import Img53 from './img/img3/mo13.jpg';
import Img54 from './img/img3/mo14.jpg';
import Img55 from './img/img3/mo15.jpg';
import Img56 from './img/img3/mo16.jpg';
import Img57 from './img/img3/mo17.jpg';
import Img58 from './img/img3/mo18.jpg';
import Img59 from './img/img3/mo19.jpg';
import Img60 from './img/img3/mo20.jpg';

import Img61 from './img/img4/c1.jpg';
import Img62 from './img/img4/c2.jpg';
import Img63 from './img/img4/c3.jpg';
import Img64 from './img/img4/c4.jpg';
import Img65 from './img/img4/c5.jpg';
import Img66 from './img/img4/c6.jpg';
import Img67 from './img/img4/c7.jpg';
import Img68 from './img/img4/c8.jpg';
import Img69 from './img/img4/c9.jpg';
import Img70 from './img/img4/c10.jpg';
import Img71 from './img/img4/c11.jpg';
import Img72 from './img/img4/c12.jpg';
import Img73 from './img/img4/c13.jpg';
import Img74 from './img/img4/c14.jpg';
import Img75 from './img/img4/c15.jpg';
import Img76 from './img/img4/c16.jpg';
import Img77 from './img/img4/c17.jpg';
import Img78 from './img/img4/c18.jpg';
import Img79 from './img/img4/c19.jpg';
import Img80 from './img/img4/c20.jpg';

import Img81 from './img/img5/ce1.jpg';
import Img82 from './img/img5/ce2.jpg';
import Img83 from './img/img5/ce3.jpg';
import Img84 from './img/img5/ce4.jpg';
import Img85 from './img/img5/ce5.jpg';
import Img86 from './img/img5/ce6.jpg';
import Img87 from './img/img5/ce7.jpg';
import Img88 from './img/img5/ce8.jpg';
import Img89 from './img/img5/ce9.jpg';
import Img90 from './img/img5/ce10.jpg';
import Img91 from './img/img5/ce11.jpg';
import Img92 from './img/img5/ce12.jpg';
import Img93 from './img/img5/ce13.jpg';
import Img94 from './img/img5/ce14.jpg';
import Img95 from './img/img5/ce15.jpg';
import Img96 from './img/img5/ce16.jpg';
import Img97 from './img/img5/ce17.jpg';
import Img98 from './img/img5/ce18.jpg';
import Img99 from './img/img5/ce19.jpg';
import Img100 from './img/img5/ce20.jpg';


const Album = () => {
    const initialData = [
        { id: 1, imgSrc: Img11 , title: 'CATS', description: 'Cute Cats.'},
        { id: 2, imgSrc: Img111 , title: 'DOGS', description: 'Cute Dogs'},
        { id: 3, imgSrc: Img1111 , title: 'FISH' , description: 'Cute Fish'},
        { id: 4, imgSrc: Img11111 , title: 'BIRDS', description: 'Cute Birds'},
        { id: 5, imgSrc: Img111111 , title: 'SNAKES', description: 'Cute Snakes'},
    ];

    const secondGroup = [
        { id: 101, imgSrc: Img1 , title: 'CATS', description: '.'},
        { id: 102, imgSrc: Img2 , title: 'CATS', description: '.'},
        { id: 103, imgSrc: Img3 , title: 'CATS', description: '.'},
        { id: 104, imgSrc: Img4 , title: 'CATS', description: 'The Raptor comes with Fox Racing shocks and an independent front suspension, providing exceptional handling and ride comfort, whether on rugged trails or smooth highways.'},
        { id: 105, imgSrc: Img5 , title: 'CATS', description: ' Inside, the Raptor offers durable materials and a practical layout, combining functionality with comfort for both driver and passengers.'},
        { id: 6, imgSrc: Img6 , title: 'CATS', description: 'Featuring Ford’s SYNC infotainment system, the Raptor includes smartphone integration, navigation, and premium audio options for an enhanced driving experience.'},
        { id: 7, imgSrc: Img7 , title: 'CATS', description: 'Terrain Management System: This system allows drivers to select different driving modes tailored for various conditions, such as mud, sand, and snow, optimizing performance in real-time.'},
        { id: 8, imgSrc: Img8 , title: 'CATS', description: 'The Raptor’s LED headlights and distinctive taillights not only enhance visibility but also contribute to its modern and rugged aesthetic.'},
        { id: 9, imgSrc: Img9 , title: 'CATS', description: 'Spacious Cabin: With ample headroom and legroom, the Raptor’s cabin comfortably accommodates passengers while providing easy access to storage spaces.'},
        { id: 10, imgSrc: Img10 , title: 'CATS', description: 'Durable Bed Design: The Raptor features a high-strength, military-grade aluminum alloy body, along with a versatile bed that’s perfect for hauling gear or equipment.'},
        { id: 11, imgSrc: Img101 , title: 'CATS', description: 'Aggressive Tires: Equipped with all-terrain tires, the Raptor is ready for any adventure, ensuring excellent grip and stability on a variety of surfaces.'},
        { id: 12, imgSrc: Img12 , title: 'CATS', description: ' The bold Raptor badge is a symbol of performance and capability, highlighting Ford  commitment to creating a truck that can dominate in any environment.'},
        { id: 13, imgSrc: Img13 , title: 'CATS', description: 'Ford offers various trim levels and packages, allowing buyers to tailor the Raptor to their specific needs, whether for off-roading or daily driving.'},
        { id: 14, imgSrc: Img14 , title: 'CATS', description: 'With a robust chassis and powerful engine, the Raptor can tow heavy loads, making it a practical choice for adventure enthusiasts and workers alike.'},
        { id: 15, imgSrc: Img15 , title: 'CATS', description: 'The Raptor exhaust system produces a throaty roar, providing an exhilarating sound that complements its performance capabilities.'},
        { id: 16, imgSrc: Img16 , title: 'CATS', description: 'The Raptor is equipped with advanced safety technologies, including adaptive cruise control, lane-keeping assist, and collision warning systems.'},
        { id: 17, imgSrc: Img17 , title: 'CATS', description: 'The Raptor often comes in eye-catching colors, allowing owners to express their individuality and style on the road.'},
        { id: 18, imgSrc: Img18 , title: 'CATS', description: ' Ford backs the Raptor with a solid warranty, providing peace of mind for buyers regarding the durability and longevity of their vehicle.'},
        { id: 18, imgSrc: Img18 , title: 'CATS', description: ' The Raptor has cultivated a dedicated following among truck enthusiasts, known for its off-road prowess and rugged charm.'},
        { id: 19, imgSrc: Img19 , title: 'CATS', description: 'More than just a vehicle, the Raptor represents a lifestyle choice for adventure seekers, outdoor enthusiasts, and those who appreciate high-performance vehicles.'},
        { id: 20, imgSrc: Img20 , title: 'CATS', description: 'The CATS is renowned for its exceptional performance, seamlessly blending speed, agility, and power.'},
      ];

    const thirdGroup = [
        { id: 21, imgSrc: Img21 , title: 'DOGS' , description: ''},
        { id: 22, imgSrc: Img22 , title: 'DOGS', description: ''},
        { id: 23, imgSrc: Img23 , title: 'DOGS', description: ''},
        { id: 24, imgSrc: Img24 , title: 'DOGS', description: ''},
        { id: 25, imgSrc: Img25 , title: 'DOGS', description: ''},
        { id: 26, imgSrc: Img26 , title: 'DOGS', description: ''},
        { id: 27, imgSrc: Img27 , title: 'DOGS', description: ''},
        { id: 28, imgSrc: Img28 , title: 'DOGS', description: ''},
        { id: 29, imgSrc: Img29 , title: 'DOGS', description: ''},
        { id: 30, imgSrc: Img30 , title: 'DOGS', description: ''},
        { id: 31, imgSrc: Img31 , title: 'DOGS', description: ''},
        { id: 32, imgSrc: Img32 , title: 'DOGS', description: ''},
        { id: 33, imgSrc: Img33 , title: 'DOGS', description: ''},
        { id: 34, imgSrc: Img34 , title: 'DOGS', description: ''},
        { id: 35, imgSrc: Img35 , title: 'DOGS', description: ''},
        { id: 36, imgSrc: Img36 , title: 'DOGS', description: ''},
        { id: 37, imgSrc: Img37 , title: 'DOGS', description: ''},
        { id: 38, imgSrc: Img38 , title: 'DOGS', description: ''},
        { id: 39, imgSrc: Img39 , title: 'DOGS', description: ''},
        { id: 40, imgSrc: Img40 , title: 'DOGS', description: ''}, 
    ];

    const fourthGroup = [
        { id: 41, imgSrc: Img41 , title: 'FISH', description: ''},
        { id: 42, imgSrc: Img42 , title: 'FISH', description: ''},
        { id: 43, imgSrc: Img43 , title: 'FISH', description: ''},
        { id: 44, imgSrc: Img44 , title: 'FISH', description: ''},
        { id: 45, imgSrc: Img45 , title: 'FISH', description: ''},
        { id: 46, imgSrc: Img46 , title: 'FISH', description: ''},
        { id: 47, imgSrc: Img47 , title: 'FISH', description: ''},
        { id: 48, imgSrc: Img48 , title: 'FISH', description: ''},
        { id: 49, imgSrc: Img49 , title: 'FISH', description: ''},
        { id: 50, imgSrc: Img50 , title: 'FISH', description: ''},
        { id: 51, imgSrc: Img51 , title: 'FISH', description: ''},
        { id: 52, imgSrc: Img52 , title: 'FISH', description: ''},
        { id: 53, imgSrc: Img53 , title: 'FISH', description: ''},
        { id: 54, imgSrc: Img54 , title: 'FISH', description: ''},
        { id: 55, imgSrc: Img55 , title: 'FISH', description: ''},
        { id: 56, imgSrc: Img56 , title: 'FISH', description: ''},
        { id: 57, imgSrc: Img57 , title: 'FISH', description: ''},
        { id: 58, imgSrc: Img58 , title: 'FISH', description: ''},
        { id: 59, imgSrc: Img59 , title: 'FISH', description: ''},
        { id: 60, imgSrc: Img60 , title: 'FISH', description: ''}, 
    ];
    const fifthGroup = [
        { id: 61, imgSrc: Img61 , title: 'BIRDS', description: ''},
        { id: 62, imgSrc: Img62 , title: 'BIRDS', description: ''},
        { id: 63, imgSrc: Img63 , title: 'BIRDS', description: ''},
        { id: 64, imgSrc: Img64 , title: 'BIRDS', description: ''},
        { id: 65, imgSrc: Img65 , title: 'BIRDS', description: ''},
        { id: 66, imgSrc: Img66 , title: 'BIRDS', description: ''},
        { id: 67, imgSrc: Img67 , title: 'BIRDS', description: ''},
        { id: 68, imgSrc: Img68 , title: 'BIRDS', description: ''},
        { id: 69, imgSrc: Img69 , title: 'BIRDS', description: ''},
        { id: 70, imgSrc: Img70 , title: 'BIRDS', description: ''},
        { id: 71, imgSrc: Img71 , title: 'BIRDS', description: ''},
        { id: 72, imgSrc: Img72 , title: 'BIRDS', description: ''},
        { id: 73, imgSrc: Img73 , title: 'BIRDS', description: ''},
        { id: 74, imgSrc: Img74 , title: 'BIRDS', description: ''},
        { id: 75, imgSrc: Img75 , title: 'BIRDS', description: ''},
        { id: 76, imgSrc: Img76 , title: 'BIRDS', description: ''},
        { id: 77, imgSrc: Img77 , title: 'BIRDS', description: ''},
        { id: 78, imgSrc: Img78 , title: 'BIRDS', description: ''},
        { id: 79, imgSrc: Img79 , title: 'BIRDS', description: ''},
        { id: 80, imgSrc: Img80 , title: 'BIRDS', description: ''},
    ]
    const sixGroupth = [
        { id: 81, imgSrc: Img81 , title: 'SNAKES', description: ''},
        { id: 82, imgSrc: Img82 , title: 'SNAKES', description: ''},
        { id: 83, imgSrc: Img83 , title: 'SNAKES', description: ''},
        { id: 84, imgSrc: Img84 , title: 'SNAKES', description: ''},
        { id: 85, imgSrc: Img85 , title: 'SNAKES', description: ''},
        { id: 86, imgSrc: Img86 , title: 'SNAKES', description: ''},
        { id: 87, imgSrc: Img87 , title: 'SNAKES', description: ''},
        { id: 88, imgSrc: Img88 , title: 'SNAKES', description: ''},
        { id: 89, imgSrc: Img89 , title: 'SNAKES', description: ''},
        { id: 90, imgSrc: Img90 , title: 'SNAKES', description: ''},
        { id: 91, imgSrc: Img91 , title: 'SNAKES', description: ''},
        { id: 92, imgSrc: Img92 , title: 'SNAKES', description: ''},
        { id: 93, imgSrc: Img93 , title: 'SNAKES', description: ''},
        { id: 94, imgSrc: Img94 , title: 'SNAKES', description: ''},
        { id: 95, imgSrc: Img95 , title: 'SNAKES', description: ''},
        { id: 96, imgSrc: Img96 , title: 'SNAKES', description: ''},
        { id: 97, imgSrc: Img97 , title: 'SNAKES', description: ''},
        { id: 98, imgSrc: Img98 , title: 'SNAKES', description: ''},
        { id: 99, imgSrc: Img99 , title: 'SNAKES', description: ''},
        { id: 100, imgSrc: Img100 , title: 'SNAKES', description: ''},

    ];
    const [data, setData] = useState(initialData); 
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [tempTitle, setTempTitle] = useState(''); 
    const [tempDescription, setTempDescription] = useState('');

    const getImg = (imgSrc, description, title) => {
        setTempImgSrc(imgSrc);
        setTempDescription(description);
        setTempTitle(title);
        setModel(true);
        
    };
    

    
    const handleImageClick = (id) => {
        if (id === 1) {
            setData(secondGroup); 
        } else if (id === 2) {
            setData(thirdGroup); 
        } else if (id === 3) {
            setData(fourthGroup);
        } else if (id === 4) {
            setData(fifthGroup);
        } else if (id === 5) {
            setData(sixGroupth);
        } 
    };
    const handleClose = () => {
        setData(initialData); 
    };
    
    return (
        <div className="album">
            <div className={model ? "model open" : "model"}>
            <button className="close-button" onClick={() => setModel(false)}>
                        <CloseIcon />
                    </button>
                    <img src={tempImgSrc} alt={tempTitle} />
                    <p>{tempDescription}</p>
                    <h2>{tempTitle}</h2>
                    
            </div>
            

            <div className="gallery">
                {data.map((item, index) => (
                    <div key={index} className="pics" onClick={() => handleImageClick(item.id)}>
                        <img
                            src={item.imgSrc}
                            alt={item.title}
                            onClick={() => getImg(item.imgSrc, item.description, item.title)} // Pass the description
                        />
                        <p>{item.title}</p>
                    </div>
                ))}
                 {data !== initialData && (
                    <button className="close-button" onClick={handleClose}>Back</button>
                )}
                
            </div>
        </div>
    );
};

export default Album;