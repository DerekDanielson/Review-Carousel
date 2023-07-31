// Local reviews data
const reviews = [
    {
        id: 1,
        name: "Bob Bobson",
        job: "ux designer",
        img: "./person1.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut repellat facilis, odio excepturi assumenda culpa veniam impedit quae quibusdam corrupti est. Consequatur velit odit animi perferendis harum maxime tempora."
    },
    {
        id: 2,
        name: "John Doe",
        job: "web developer",
        img: "./person2.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut repellat facilis, odio excepturi assumenda culpa veniam impedit quae quibusdam corrupti est. Consequatur velit odit animi perferendis harum maxime tempora."
    },
    {
        id: 3,
        name: "Susan Swanson",
        job: "ux designer",
        img: "./person3.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut repellat facilis, odio excepturi assumenda culpa veniam impedit quae quibusdam corrupti est. Consequatur velit odit animi perferendis harum maxime tempora."
    },
    {
        id: 4,
        name: "Steve Simpson",
        job: "web developer",
        img: "./person4.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut repellat facilis, odio excepturi assumenda culpa veniam impedit quae quibusdam corrupti est. Consequatur velit odit animi perferendis harum maxime tempora."
    }
];


// Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// Set starting item
let currentItem = 0;


