import React from "react";
import location from "../images/location.png"

function Card(props) {
    console.log(props.imageUrl)
    return (
        <article className="card">
            <img className="card-img" src={props.imageUrl} alt="galapagos sea lion" />
            <div className="content">
                <div className="location">
                    <img className="location-logo" src={location} alt="" />
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <div className="date">{props.startDate} - {props.endDate}</div>
                <p className="text">{props.description}</p>
            </div>
        </article>
    );
}

export default Card;

// {
//     title: "The Galápagos Islands",
//     location: "Ecuador",
//     googleMapsUrl: "https://www.google.com/maps/place/Galapagoseilanden/@-0.3773122,-92.6728517,7z/data=!3m1!4b1!4m5!3m4!1s0x9021d9b43bec07cd:0xfb3e68fef05dae23!8m2!3d-0.383106!4d-90.4233344",
//     startDate: "15 Dec, 2020",
//     endDate: "30 Dec, 2020",
//     description: "The Galapagos Islands are known for their fearless and curious wildlife. You can’t find another place in the world where sea lions will play with you in the water, iguanas pose for pictures, and sea birds walk right up to you.",
//     imageUrl: "https://images.unsplash.com/photo-1504963394739-cc0883df542c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
// },