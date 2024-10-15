import React from "react";
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilepic1 from '../../img/profile1.jpg';
import profilepic2 from '../../img/profile2.jpg';
import profilepic3 from '../../img/profile3.jpg';
import profilepic4 from '../../img/profile4.jpg';
import { Pagination } from "swiper/modules"; // Fix import for Pagination
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
    const clients = [
        {
            img: profilepic1,
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Quam nam repellat laborum voluptates numquam error molestias voluptas laudantium nesciunt dicta deleniti dolor opti ea cupiditate tempora eos quasi ab nihil."
        },
        {
            img: profilepic2,
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Quam nam repellat laborum voluptates numquam error molestias voluptas laudantium nesciunt dicta deleniti dolor opti ea cupiditate tempora eos quasi ab nihil."
        },
        {
            img: profilepic3,
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Quam nam repellat laborum voluptates numquam error molestias voluptas laudantium nesciunt dicta deleniti dolor opti ea cupiditate tempora eos quasi ab nihil."
        },
        {
            img: profilepic4,
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Quam nam repellat laborum voluptates numquam error molestias voluptas laudantium nesciunt dicta deleniti dolor opti ea cupiditate tempora eos quasi ab nihil."
        },
    ];

    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional work</span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: 'var(--purple)' }}></div>
                <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
            </div>
            {/* Slides */}
            <Swiper
                modules={[Pagination]} // Use Pagination module
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index} >
                        <div className="testimonial">
                            <img src={client.img} alt={`Client ${index + 1}`} />
                            <p>{client.review}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Testimonials;
