var lastIndex = 0; //compare index to imgIndex
var lastIndex2 = 0;

function randomImage1() {
    var theImage1 = document.querySelector(".img1"); // select the image class inHTML

    var imgDir =  'images/'; // setup a file directory
    var imgArray = new Array('dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png') //create an array of the images
    var imgIndex = 0; // image index

    if(imgArray.length > 1) { // functioned is called when the page refreshes, this means this if statement will run every time the page refreshes or is when function is called
        while(imgIndex == lastIndex) { // while loop will run if the statement is achieved, as this will make the requirement in the parameters be 0 equal to 0, when after it will stop
            imgIndex = Math.floor(Math.random() * imgArray.length); // give a new random value to imgIndex from 1 - 6;
        }
        lastIndex = imgIndex; // this will stop the while loop 
    }

    var imgPath = imgDir + imgArray[imgIndex]; // new variable created for imgPath which will be given the value of images/ + which string chosen in the array randomly

    theImage1.src = imgPath; // here we set the selected element from HTML to equal the attribute src to the variable and value from imgPath giving a new picture from images

    var theImage2 = document.querySelector(".img2");

    var imgDir2 =  'images/';
    var imgArray2 = new Array('dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png')
    var imgIndex2 = 0;

    if(imgArray2.length > 1) {
        while(imgIndex2 == lastIndex2) {
            imgIndex2 = Math.floor(Math.random() * imgArray2.length);
        }
        lastIndex2 = imgIndex2;
    }

    var imgPath2 = imgDir2 + imgArray2[imgIndex2];

    theImage2.src = imgPath2;
    
    if(imgIndex > imgIndex2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    } else if (imgIndex < imgIndex2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }
}

randomImage1()

