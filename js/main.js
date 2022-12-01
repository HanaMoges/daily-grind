//alert("hola");

/*

This page Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page 
that rotates unique colors and content for each weekday (Sunday to Saturday) 
into the page.  The content must include:



One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph 
must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content

The items we need are:

image (a pic of the coffe)
alt ( a description of the pic for the cant see it )
descripstion ( a note about the coffee )
weekday
Color (to support the coffee )

The unique color could affect the background HTML, or an element on the page 
for each day of the week.  All of the above must occur within one page.
*/

function coffeeTemplate(coffee){
    return `<p>
    <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
   <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>,${coffee.desc}
</p>`;
}



let myDate = new Date ();
let today = myDate.getDay ();
let coffee = "";


//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

 //convert the string to an interger
 today = parseInt(today);


switch(today){
        case 1:
            today = "Monday";
            coffee = {
                color:"pink",
                name:"Bubble Tea",
                pic:"bubble-tea.jpg",
                alt:"A picture of a bubble tea",
                day:"Monday",
                desc:`I Like me some bubble Tea!`
            };
        break;

       
            case 2:
                today = "Tuesday";
                coffee = {
                    color:"brown",
                    name:"Frappaccion",
                    pic:"frappaccion.jpg",
                    alt:"A picture of a frappaccion",
                    day:"Tuesday",
                    desc:`it's cold, so a Frappaccion sounds good right now!`
                };
            break;


            case 3:
                today = "Wednesday";
                coffee = {
                    color:"black",
                    name:"Cold-brew",
                    pic:"cold-brew.jpg",
                    alt:"A picture of a cold-brew",
                    day:"Wednesday",
                    desc:`Cold-brew sounds good!`
                };
            break;

            case 4:
                today = "Thursday";
                coffee = {
                    color:"Black",
                    name:"drip",
                    pic:"drip.jpg",
                    alt:"A picture of a drip",
                    day:"Tuesday",
                    desc:`In need for some Drip!`
                };
            break;

            case 5:
                today = "Friday";
                coffee = {
                    color:"brown",
                    name:"mocha",
                    pic:"mocha.jpg",
                    alt:"A picture of a mocha",
                    day:"Tuesday",
                    desc:`It's cold, mocha would be nice!`
                };
            break;

            case 6:
                today = "Satarday";
                coffee = {
                    color:"brown",
                    name:"Pumpkin-spice latte",
                    pic:"pumpkin-spice-latte.jpg",
                    alt:"A picture of a Pumpkin-spice latte",
                    day:"Pumpkin-spice latte",
                    desc:`I love Pumpkin-spice latte!`
                };
            break;

            case 0:
                today = "Sunday";
                coffee = {
                    color:"white",
                    name:"Caramel-latte",
                    pic:"caramel-latte.jpg",
                    alt:"A picture of a Caramel-latte",
                    day:"Caramel-latte",
                    desc:`I want some Caramel-latte!`
                };
            break;


        defoult:
        alert("somthing went wrong!")
}

console.log(coffee);

document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee)

//Here we are chaning the background color of the html tag
document.querySelector("html").style.backgroundColor = coffee.color;


