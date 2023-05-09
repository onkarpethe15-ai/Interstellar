import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import SilderOneCard from "./SilderOneCard";
// import React from 'react';
// import { Carousel } from 'react-bootstrap';

const SliderOne = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const productData = [
        {
            id: 1,
            url:
                "https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?q=10&h=200",
            name: "abc",
            desc: "description about product ",
        },
        {
            id: 2,
            url:
                "https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?q=10&h=200",
            name: "pqr",
            desc: "description about product ",
        },
        {
            id: 3,
            url:
                "https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?q=10&h=200",
            name: "dfg",
            desc: "description about product ",
        },
        {
            id: 3,
            url:
                "https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?q=10&h=200",
            name: "hjg",
            desc: "description about product ",
        },
        {
            id: 3,
            url:
                "https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?q=10&h=200",
            name: "sdw",
            desc: "description about product ",
        },
        {
            id: 3,
            url:
                "https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?q=10&h=200",
            name: "qwe",
            desc: "description about product ",
        },
    ];

    const slider_card = productData.map((item) => (
        <SilderOneCard
            key={item.id}
            name={item.name}
            url={item.url}
            desc={item.desc}
        />
    ));

    return (
        <div className="App">
            <h1>hello</h1>
            <br />
            <Carousel
                responsive={responsive}
                autoPlaySpeed={1000}
                autoPlay={true}
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                transitionDuration={500}
            // showDots={true}
            >
                {slider_card}
            </Carousel>;
        </div>
    );
};

export default SliderOne;
