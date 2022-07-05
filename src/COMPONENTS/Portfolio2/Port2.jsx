import React from 'react'
import './Port2.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import img1 from '../../images/img1.jfif'
import img2 from '../../images/img2.jfif'
import img3 from '../../images/img3.jfif'
import img4 from '../../images/img4.jfif'
import img5 from '../../images/img5.jfif'
import img6 from '../../images/img6.jfif'
import twitter from '../../images/twitter.png'
import whatsapp from '../../images/whatsapp.png'

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCube, EffectFade, Navigation, Pagination } from "swiper";
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import { click } from '@testing-library/user-event/dist/click';
const Port2 = () => {
    const client=[
        {
            img:img1,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta ipsam animi maiores consectetur? Provident architecto illo facilis animi voluptatibus ad sed inventore nemo. Officia deserunt autem, fugiat accusantium expedita consectetur. Inventore minus ab ipsum sequi pariatur maiores debitis eum reiciendis ipsam repellendus beatae sed molestiae nulla, odio placeat accusantium error quos totam, dicta mollitia impedit fugiat officiis? Sequi corrupti voluptatibus doloremque, ducimus soluta cum, corporis consectetur porro reprehenderit magni totam nesciunt sunt repudiandae vel excepturi neque nisi optio rem sint perferendis obcaecati? Voluptates eveniet nostrum nam officiis minima in, tenetur sunt pariatur illo provident blanditiis animi accusamus esse corporis."
        
        },
        {
            img:img2,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta ipsam animi maiores consectetur? Provident architecto illo facilis animi voluptatibus ad sed inventore nemo. Officia deserunt autem, fugiat accusantium expedita consectetur. Inventore minus ab ipsum sequi pariatur maiores debitis eum reiciendis ipsam repellendus beatae sed molestiae nulla, odio placeat accusantium error quos totam, dicta mollitia impedit fugiat officiis? Sequi corrupti voluptatibus doloremque, ducimus soluta cum, corporis consectetur porro reprehenderit magni totam nesciunt sunt repudiandae vel excepturi neque nisi optio rem sint perferendis obcaecati? Voluptates eveniet nostrum nam officiis minima in, tenetur sunt pariatur illo provident blanditiis animi accusamus esse corporis."
        
        },
        {
            img:img3,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta ipsam animi maiores consectetur? Provident architecto illo facilis animi voluptatibus ad sed inventore nemo. Officia deserunt autem, fugiat accusantium expedita consectetur. Inventore minus ab ipsum sequi pariatur maiores debitis eum reiciendis ipsam repellendus beatae sed molestiae nulla, odio placeat accusantium error quos totam, dicta mollitia impedit fugiat officiis? Sequi corrupti voluptatibus doloremque, ducimus soluta cum, corporis consectetur porro reprehenderit magni totam nesciunt sunt repudiandae vel excepturi neque nisi optio rem sint perferendis obcaecati? Voluptates eveniet nostrum nam officiis minima in, tenetur sunt pariatur illo provident blanditiis animi accusamus esse corporis."
        
        },
        {
            img:img4,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta ipsam animi maiores consectetur? Provident architecto illo facilis animi voluptatibus ad sed inventore nemo. Officia deserunt autem, fugiat accusantium expedita consectetur. Inventore minus ab ipsum sequi pariatur maiores debitis eum reiciendis ipsam repellendus beatae sed molestiae nulla, odio placeat accusantium error quos totam, dicta mollitia impedit fugiat officiis? Sequi corrupti voluptatibus doloremque, ducimus soluta cum, corporis consectetur porro reprehenderit magni totam nesciunt sunt repudiandae vel excepturi neque nisi optio rem sint perferendis obcaecati? Voluptates eveniet nostrum nam officiis minima in, tenetur sunt pariatur illo provident blanditiis animi accusamus esse corporis."
        
        },
        {
            img:img5,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta ipsam animi maiores consectetur? Provident architecto illo facilis animi voluptatibus ad sed inventore nemo. Officia deserunt autem, fugiat accusantium expedita consectetur. Inventore minus ab ipsum sequi pariatur maiores debitis eum reiciendis ipsam repellendus beatae sed molestiae nulla, odio placeat accusantium error quos totam, dicta mollitia impedit fugiat officiis? Sequi corrupti voluptatibus doloremque, ducimus soluta cum, corporis consectetur porro reprehenderit magni totam nesciunt sunt repudiandae vel excepturi neque nisi optio rem sint perferendis obcaecati? Voluptates eveniet nostrum nam officiis minima in, tenetur sunt pariatur illo provident blanditiis animi accusamus esse corporis."
        
        },
        {
            img:img6,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta ipsam animi maiores consectetur? Provident architecto illo facilis animi voluptatibus ad sed inventore nemo. Officia deserunt autem, fugiat accusantium expedita consectetur. Inventore minus ab ipsum sequi pariatur maiores debitis eum reiciendis ipsam repellendus beatae sed molestiae nulla, odio placeat accusantium error quos totam, dicta mollitia impedit fugiat officiis? Sequi corrupti voluptatibus doloremque, ducimus soluta cum, corporis consectetur porro reprehenderit magni totam nesciunt sunt repudiandae vel excepturi neque nisi optio rem sint perferendis obcaecati? Voluptates eveniet nostrum nam officiis minima in, tenetur sunt pariatur illo provident blanditiis animi accusamus esse corporis."
        
        },
    ]
  return (
    <div className='port2'>
        <div className='divspan'>
            <span className='tsp'>Client Always get</span>
            
            <span className='tsp'>Exceptional Work</span>
            
            <span className='tsp'>from me.....</span>
        </div>
        <div className="swiper2">
        
        <Swiper
        modules={[Pagination ]}
        slidesPerView={1}
        pagination={{clickable: true}}>
        {
            client.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                    <div className="testimonial">
                    <img src={client.img} alt="" />
                    <span>{client.review}</span>
                    </div>
                    </SwiperSlide>
                )
            })
        }    
        </Swiper>          
              
    </div>
      
    </div>
  )
}

export default Port2
