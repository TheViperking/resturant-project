const subDivs = document.querySelectorAll(".all");

    subDivs.forEach(div => {
        div.addEventListener("click", () => {
        subDivs.forEach(d => d.classList.remove("selected"));
        div.classList.add("selected");
        });
    });

var data = [
    {   
        category:1,
        categoryName:"Biryani",
        description:"Chicken Biryani",
        image:"/chickenbiryani-d1e04a9d.jpg",
        price:"140"
    },
    {   
        category:1,
        categoryName:"Biryani",
        description:"Mutton Biryani",
        image:"/muttonbiryani-7a80d1a2.jpg",
        price:"160"
    },
    {
        category:1,
        categoryName:"Biryani",
        description:"Egg Biryani",
        image:"/eggbiryani-ec0cf3e5.jpg",
        price:"130"
    },
    {
        category:1,
        categoryName:"Biryani",
        description:"Paneer Biryani",
        image:"/paneerbiryani-12a261d8.jpg",
        price:"130"
    },
    {   
        category:2,
        categoryName:"Starters",
        description:"Sandwich",
        image:"/sandwich-de9f7368.jpg",
        price:"100"
    },
    {   
        category:2,
        categoryName:"Starters",
        description:"French Fries",
        image:"/fries-da9018a7.jpg",
        price:"80"
    },
    {   
        category:2,
        categoryName:"Starters",
        description:"Spring Rolls",
        image:"/springrolls-00774bca.jpg",
        price:"90"
    },
    {   
        category:2,
        categoryName:"Starters",
        description:"Chicken Wings",
        image:"/wings-cf6b77ec.jpg",
        price:"140"
    },
    {   
        category:3,
        categoryName:"Soup",
        description:"Tomato Soup",
        image:"/tomato-b597a6f9.jpg",
        price:"100"
    },
    {   
        category:3,
        categoryName:"Soup",
        description:"Chicken Soup",
        image:"/chicken-af88438c.jpg",
        price:"80"
    },
    {   
        category:3,
        categoryName:"Soup",
        description:"Momo Soup",
        image:"/momo-a7e92b1f.jpg",
        price:"140"
    },
    {   
        category:3,
        categoryName:"Soup",
        description:"Noodles Soup",
        image:"/noodles-e5d7901d.jpg",
        price:"140"
    },
    {   
        category:4,
        categoryName:"Italian",
        description:"Pasta",
        image:"/pasta-2baaf971%20(1).jpg",
        price:"90"
    },
    {   
        category:4,
        categoryName:"Italian",
        description:"Bruschetta",
        image:"/bruschetta-463eb56a%20(1).jpg",
        price:"80"
    },
    {   
        category:4,
        categoryName:"Italian",
        description:"Lasagna",
        image:"/lasagna-6ee2714e%20(1).jpg",
        price:"100"
    },
    {   
        category:4,
        categoryName:"Italian",
        description:"Margherita",
        image:"/margherita-4484540d%20(4).jpg",
        price:"140"
    },
    {   
        category:5,
        categoryName:"Shakes",
        description:"Mango Shakes",
        image:"/mango-6e053d77%20(1).jpg",
        price:"100"
    },
    {   
        category:5,
        categoryName:"Shakes",
        description:"Oreo Shakes",
        image:"/oreo-e7116559%20(1).jpg",
        price:"80"
    },
    {   
        category:5,
        categoryName:"Shakes",
        description:"Faluda Shakes",
        image:"/faluda-a542ad33%20(1).jpg",
        price:"90"
    },
    {   
        category:5,
        categoryName:"Shakes",
        description:"Chocolate Shakes",
        image:"/chocolate-233e4c8f%20(1).jpg",
        price:"140"
    },
    {   
        category:6,
        categoryName:"Pizza",
        description:"Chicken Pizza",
        image:"/chicken-a7813578%20(1).jpg",
        price:"100"
    },
    {   
        category:6,
        categoryName:"Pizza",
        description:"Veg Pizza",
        image:"/veg-ad6e1a5f%20(1).jpg",
        price:"80"
    },
    {   
        category:6,
        categoryName:"Pizza",
        description:"Carbonara Pizza",
        image:"/pizza.jpg",
        price:"140"
    },
    {   
        category:6,
        categoryName:"Pizza",
        description:"Cheese Pizza",
        image:"/cheese-404fed99%20(1).jpg",
        price:"90"
    }    
]


const biryaniSection = data.filter(one => one.category === 1);
const startersSection = data.filter(one => one.category === 2);
const soupSection = data.filter(one => one.category === 3);
const italianSection = data.filter(one => one.category === 4);
const shakesSection = data.filter(one => one.category === 5);
const pizzaSection = data.filter(one => one.category === 6);

const viewPort = document.getElementById("content");
// function show(cat){
//    var biryaniSection = data.filter(one => one.category === cat);
// biryaniShow()
// }
function allShow(){
    viewPort.innerHTML = "";
    for (const specific of data) {
    viewPort.innerHTML += `
    <div id="container">
        <div id="left">
            <img id=image5 src="${specific.image}"alt="image of ${specific.categoryName}">
            <div id="containerName">
                <h1 id="category1">${specific.categoryName}</h1>
                <h2 id="sub1">${specific.description}</h2>
            </div>    
        </div>
            <h2 id="itemprice">₹${specific.price}</h2>
    </div>
`
    }
};

function biryaniShow(){
    viewPort.innerHTML = "";
    for (const specific of biryaniSection) {
    viewPort.innerHTML += `
    <div id="container">
        <div id="left">
            <img id=image5 src="${specific.image}"alt="image of ${specific.categoryName}">
            <div id="containerName">
                <h1 id="category1">${specific.categoryName}</h1>
                <h2 id="sub1">${specific.description}</h2>
            </div>    
        </div>
            <h2 id="itemprice">₹${specific.price}</h2>
    </div>
`
    }
};

function startersShow(){
    viewPort.innerHTML = "";
    for (const specific of startersSection) {
    viewPort.innerHTML += `
    <div id="container">
        <div id="left">
            <img id=image5 src="${specific.image}"alt="image of ${specific.categoryName}">
            <div id="containerName">
                <h1 id="category1">${specific.categoryName}</h1>
                <h2 id="sub1">${specific.description}</h2>
            </div>    
        </div>
            <h2 id="itemprice">₹${specific.price}</h2>
    </div>
`
    }
};

function pizzaShow(){
    viewPort.innerHTML = "";
    for (const specific of pizzaSection) {
    viewPort.innerHTML += `
    <div id="container">
        <div id="left">
            <img id=image5 src="${specific.image}"alt="image of ${specific.categoryName}">
            <div id="containerName">
                <h1 id="category1">${specific.categoryName}</h1>
                <h2 id="sub1">${specific.description}</h2>
            </div>    
        </div>
            <h2 id="itemprice">₹${specific.price}</h2>
    </div>
`
    }
};

function italianShow(){
    viewPort.innerHTML = "";
    for (const specific of italianSection) {
    viewPort.innerHTML += `
    <div id="container">
        <div id="left">
            <img id=image5 src="${specific.image}"alt="image of ${specific.categoryName}">
            <div id="containerName">
                <h1 id="category1">${specific.categoryName}</h1>
                <h2 id="sub1">${specific.description}</h2>
            </div>    
        </div>
            <h2 id="itemprice">₹${specific.price}</h2>
    </div>
`
    }
};

function shakesShow(){
    viewPort.innerHTML = "";
    for (const specific of shakesSection) {
    viewPort.innerHTML += `
    <div id="container">
        <div id="left">
            <img id=image5 src="${specific.image}"alt="image of ${specific.categoryName}">
            <div id="containerName">
                <h1 id="category1">${specific.categoryName}</h1>
                <h2 id="sub1">${specific.description}</h2>
            </div>    
        </div>
            <h2 id="itemprice">₹${specific.price}</h2>
    </div>
`
    }
};

function soupShow(){
    viewPort.innerHTML = "";
    for (const specific of soupSection) {
    viewPort.innerHTML += `
    <div id="container">
        <div id="left">
            <img id=image5 src="${specific.image}"alt="image of ${specific.categoryName}">
            <div id="containerName">
                <h1 id="category1">${specific.categoryName}</h1>
                <h2 id="sub1">${specific.description}</h2>
            </div>    
        </div>
            <h2 id="itemprice">₹${specific.price}</h2>
    </div>
`
    }
};



// const pizza = document.getElementById("pizza");
// const biryani = document.getElementById("biryani");
// const starters = document.getElementById("starters");
// const soup = document.getElementById("soup");
// const italian = document.getElementById("italian");
// const shakes = document.getElementById("shakes");


// function startersShow(){
//     if(biryani.style.display = "block"){
//         biryani.style.display = "none"
//     };
//     if(pizza.style.display = "block"){
//         pizza.style.display = "none"
//     };
//     if(soup.style.display = "block"){
//         soup.style.display = "none"
//     };
//     if(italian.style.display = "block"){
//         italian.style.display = "none"
//     };
//     if(shakes.style.display = "block"){
//         shakes.style.display = "none"
//     };

//     starters.style.display = "block";
// };

// function biryaniShow(){
//     if(starters.style.display = "block"){
//         starters.style.display = "none"
//     };
//     if(pizza.style.display = "block"){
//         pizza.style.display = "none"
//     };
//     if(soup.style.display = "block"){
//         soup.style.display = "none"
//     };
//     if(italian.style.display = "block"){
//         italian.style.display = "none"
//     };
//     if(shakes.style.display = "block"){
//         shakes.style.display = "none"
//     };

//     biryani.style.display = "block";
// }

// function pizzaShow(){
//     if(starters.style.display = "block"){
//         starters.style.display = "none"
//     };
//     if(biryani.style.display = "block"){
//         biryani.style.display = "none"
//     };
//     if(soup.style.display = "block"){
//         soup.style.display = "none"
//     };
//     if(italian.style.display = "block"){
//         italian.style.display = "none"
//     };
//     if(shakes.style.display = "block"){
//         shakes.style.display = "none"
//     };

//     pizza.style.display = "block";
// }

// function soupShow(){
//     if(starters.style.display = "block"){
//         starters.style.display = "none"
//     };
//     if(pizza.style.display = "block"){
//         pizza.style.display = "none"
//     };
//     if(soup.style.display = "block"){
//         soup.style.display = "none"
//     };
//     if(italian.style.display = "block"){
//         italian.style.display = "none"
//     };
//     if(shakes.style.display = "block"){
//         shakes.style.display = "none"
//     };

//     soup.style.display = "block";
// }

// function pizzaShow(){
//     if(starters.style.display = "block"){
//         starters.style.display = "none"
//     };
//     if(biryani.style.display = "block"){
//         pizza.style.display = "none"
//     };
//     if(soup.style.display = "block"){
//         soup.style.display = "none"
//     };
//     if(italian.style.display = "block"){
//         italian.style.display = "none"
//     };
//     if(shakes.style.display = "block"){
//         shakes.style.display = "none"
//     };

//     pizza.style.display = "block";
// }

