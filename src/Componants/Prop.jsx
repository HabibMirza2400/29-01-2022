import React from 'react';
import PropsChild from "./PropsChild";
const Prop = () => {
    // const InitiaState = {
    const Card = [
        {
            id: 1,
            title: "PDAC",
            desc: "This is Reducer of groups",
            cardImg: "https://i.pinimg.com/736x/91/4c/8a/914c8ad918ebadc9b8a23a18bd592c6d.jpg",

        },
        {
            id: 2,
            title: "PDAC",
            desc: "This is Reducer of groups",
            cardImg: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

        },
        {
            id: 3,
            title: "PDAC",
            desc: "This is Reducer of groups",
            cardImg: "https://i.pinimg.com/736x/91/4c/8a/914c8ad918ebadc9b8a23a18bd592c6d.jpg",

        },
        {
            id: 4,
            title: "PDAC",
            desc: "This is Reducer of groups",
            cardImg: "https://i.pinimg.com/736x/91/4c/8a/914c8ad918ebadc9b8a23a18bd592c6d.jpg",

        },
        {
            id: 5,
            title: "PDAC",
            desc: "This is Reducer of groups",
            cardImg: "https://i.pinimg.com/736x/91/4c/8a/914c8ad918ebadc9b8a23a18bd592c6d.jpg",

        },
        {
            id: 6,
            title: "PDAC",
            desc: "This is Reducer of groups",
            cardImg: "https://i.pinimg.com/736x/91/4c/8a/914c8ad918ebadc9b8a23a18bd592c6d.jpg",

        },
    ]


    return (
        <div>
            <h1> Dynamic Props</h1>
            <PropsChild InitiaState={Card} />
        </div>
    );
};

export default Prop;