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


// Load initial item
window.addEventListener('DOMContentLoaded', showPerson(currentItem)); 


// Show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};


// Show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});


// Show previous person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});


// Show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});