let reviews = [
    {
        id: 1,
        img:"img5.jpg",
        name: "John Doe",
        position: "Web Developer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."  
    },
    {
        id: 2,    
        img:"img2.jpg",
        name: "Mahira Khan",
        position: "Web Designer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." 
    },
    {
        id: 3,
        img:"img3.jpg",
        name: "Sara Ali seikh",
        position: "manager",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        id: 4,
        img:"img6.jpg",
        name: "Larry Ellison",
        position: "CEO",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        id: 5,
        img:"img7.jpg",
        name: "Sergey Brin",
        position: "businessman",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        id: 6,
        img:"img10.jpg",
        name: "samaira ali",
        position: "data analyst",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."

    },
    {
        id: 7,
        img:"img8.jpg",
        name: "Carlos Slim",
        position: "Web Developer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        id: 8,
        img:"img9.jpg",
        name: "Angelina Jolie",
        position: "Actress",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        id: 9,
        img:"img1.jpg",
        name: "Angeline Malik",
        position: "photographer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        id: 10,
        img:"img4.jpg",
        name: "Armeena Khan",
        position: "designer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
];
let img = document.getElementById("person-img");
let names = document.getElementById("name");
let position = document.getElementById("position");
let review = document.getElementById("review");

let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");
let randomBtn = document.querySelector("#random-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
    console.log("hello");
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    names.textContent = item.name;
    position.textContent = item.position;
    review.textContent = item.review;
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

