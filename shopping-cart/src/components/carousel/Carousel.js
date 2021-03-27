import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";

export function Slider() {
        const [index, setIndex] = useState(0);    
        const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        };
    
        return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://img-cicis-chocolates.s3.us-east-2.amazonaws.com/car.png"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Chocolate</h3>
            
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://img-cicis-chocolates.s3.us-east-2.amazonaws.com/car2.png"
                alt="Second slide"
            />
    
            <Carousel.Caption>
                <h3>que</h3>
            
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://img-cicis-chocolates.s3.us-east-2.amazonaws.com/car3.png"
                alt="Third slide"
            />
    
            <Carousel.Caption>
                <h3>te lleva</h3>
            
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        );
    }
    


    // <Carousel>
    // <Carousel.Item interval={1000}>
    //     <img
    //     className="d-block w-100"
    //     src="holder.js/800x400?text=First slide&bg=373940"
    //     alt="First slide"
    //     />
    //     <Carousel.Caption>
    //     <h3>First slide label</h3>
    //     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    // </Carousel.Item>
    // <Carousel.Item interval={500}>
    //     <img
    //     className="d-block w-100"
    //     src="holder.js/800x400?text=Second slide&bg=282c34"
    //     alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //     <h3>Second slide label</h3>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    // </Carousel.Item>
    // <Carousel.Item>
    //     <img
    //     className="d-block w-100"
    //     src="holder.js/800x400?text=Third slide&bg=20232a"
    //     alt="Third slide"
    //     />
    //     <Carousel.Caption>
    //     <h3>Third slide label</h3>
    //     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //     </Carousel.Caption>
    // </Carousel.Item>
    // </Carousel>
