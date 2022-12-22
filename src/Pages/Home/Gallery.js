// import React from 'react';
// import Masonry from 'react-masonry-component';
// import './Gallery.css'

// const Gallery = () => {
//     const masonryOptions = {
//         fitWidth: false,
//         columnWidth: 300,
//         gutter: 30,
//         itemSelector:'.photo-item',
//     };

//     const photos = [
//         {
//             id: 1,
//             img:'https://media.istockphoto.com/id/1302272289/photo/roasted-chicken-rice-from-a-hawker-stall-in-malaysia.jpg?b=1&s=170667a&w=0&k=20&c=r7aJ9MiA1tsuHQ4QO2GNv8Jg8oACQvDZKwS4vv2Fhys='
//         },
//         {
           
//                 id: 2,
//                 img:'https://cdn.pixabay.com/photo/2018/09/19/12/45/karimeen-3688474__340.jpg'
            
//         },
//         {
           
//             id: 3,
//             img:'https://cdn.pixabay.com/photo/2021/08/02/22/34/fish-6517941__340.jpg'
        
//         },
//         {
           
//             id: 4,
//             img:'https://media.istockphoto.com/id/477596753/photo/homemade-southern-fried-chicken.jpg?b=1&s=170667a&w=0&k=20&c=nnwH5XBvXSJalyZeHZzXwK7NnGch9BrC_0oTffi9gIA='
        
//         },
//         {
           
//             id: 5,
//             img:'https://media.istockphoto.com/id/174988238/photo/chicken-fingers.jpg?s=612x612&w=0&k=20&c=lHzg50VtB4D7pv2FLSuHDP0i4EmScYhN_SeZx3274qs='
        
//     }
//     ]
//     return (
//         <div>
            

//             {/* <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//     <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={img} alt=""/>
   
// </a> */}


//             <div>
//             <Masonry
//                 className={'photo-list'} // default ''
//                 elementType={'ul'} // default 'div'
//                     options={masonryOptions}
//                     disableImagesLoaded={false} // default false
//                     updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
//             >
                  
//                     {
//                         photos.map(photo => (
//                             <li className='photo-item hover:bg-gray-300 '
//                             key={photo.id}>
//                         <img src={photo.img} alt="" />
//                </li>
//                         ))
//                   }
                    
//             </Masonry>
//             </div>
//         </div>
//     );
// };

// export default Gallery;

import React from 'react';
import img from '../../assets/Images/img35.jpg';
import img2 from '../../assets/Images/img36.jpg';
import img3 from '../../assets/Images/img37.jpg';
import icon1 from '../../assets/Images/icon1.png';
import icon2 from '../../assets/Images/icon2.png';
import icon3 from '../../assets/Images/icon3.png';

const Gallery = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mb-32 gap-10 items-center mt-32'>
                <div class="grid grid-cols-3 gap-4" data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine">
            <img src="https://media.istockphoto.com/id/174988238/photo/chicken-fingers.jpg?s=612x612&w=0&k=20&c=lHzg50VtB4D7pv2FLSuHDP0i4EmScYhN_SeZx3274qs=" alt="" />
            <img src="https://media.istockphoto.com/id/477596753/photo/homemade-southern-fried-chicken.jpg?b=1&s=170667a&w=0&k=20&c=nnwH5XBvXSJalyZeHZzXwK7NnGch9BrC_0oTffi9gIA=" alt="" />
            <img src={"https://cdn.pixabay.com/photo/2021/08/02/22/34/fish-6517941__340.jpg"} alt="" />
            <img className='col-span-2' src={img} alt=""/>
            <img src={img2} alt="" />
            <img src="https://media.istockphoto.com/id/174988238/photo/chicken-fingers.jpg?s=612x612&w=0&k=20&c=lHzg50VtB4D7pv2FLSuHDP0i4EmScYhN_SeZx3274qs=" alt="" />
            <img className='col-span-2' src={img3} alt="" />
 
            </div>
            <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1500"
     data-aos-duration="1500">
                <h3 className='text-3xl font-bold'>Recipe Gallery</h3>
                <p className=''>Food is very important for every living being to stay alive. it is the basic material that the body needs for its survival and well-being. There are such various cooking styles and food inclinations topographical areas, and social classes. The human body needs a variety of the following five nutrients protein, carbohydrate, fat, vitamins, and minerals which comes from the Food we eat to stay healthy, active, and productive. </p>
                <div className='flex gap-10 mt-6'>
                <div className="card w-32 bg-base-100 shadow-xl">
  <figure><img src={icon1} alt="" /></figure>
    <p className='text-center'>Delicious</p>
                </div>
                <div className="card w-32 bg-base-100 shadow-xl">
  <figure><img src={icon2} alt="" /></figure>
    <p className='text-center'>Testy</p>
                </div>
                <div className="card w-32 bg-base-100 shadow-xl">
  <figure><img src={icon3} alt="" /></figure>
    <p className='text-center'>Fresh</p>
</div>
    
                     
                </div>
            </div>
            </div>
   
    );
};

export default Gallery;