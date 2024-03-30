import React from "react";
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Nxtrenz from '../../img/Nxtrenz.png'
import Nxtwatch from '../../img/Nxtwatch.png'
import Jobby from '../../img/Jobby.png'
import TodoList from '../../img/Todo.png'

const Portfolio = ()=>{
    return(
        <div className="portfolio">
            {/*Recent Projects*/}
            <span>Recent Projects</span>
            <span>Portfolio</span>

            {/*Slider*/}
            <Swiper 
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Nxtrenz} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Jobby} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Nxtwatch} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={TodoList} alt=""/>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Portfolio