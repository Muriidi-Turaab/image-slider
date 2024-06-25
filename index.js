const image1 = document.getElementById("image1");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const text = document.getElementById("text");



let indexNumber = 0
let last;


btn1.addEventListener("click", () => {

        
    if(indexNumber < imgs.length -1) {
        image1.src = imgs[indexNumber]
    indexNumber++;

       text.innerHTML = indexNumber
    }
    
    if(indexNumber == imgs.length -1){
        text.innerHTML = "last img"
    }
})


btn2.addEventListener("click", () => {
    if(indexNumber > 0) {
    indexNumber--
    image1.src = imgs[indexNumber]
    text.innerHTML = indexNumber
    }

    if(indexNumber == 0) {
        text.innerHTML = "Frist Img"
    }
    
    
})

let imgs = [
    "https://wallpapers.com/images/featured/lion-pictures-snw3r6217skr1ni5.jpg",
    "https://img.freepik.com/photos-gratuite/vue-du-lion-sauvage-dans-nature_23-2150460851.jpg",
    "https://cdn.britannica.com/30/150930-120-D3D93F1E/lion-Namibia.jpg",
    "https://m.media-amazon.com/images/I/81eSkgnULzL.jpg",
    "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F02%2Fcristiano-ronaldo-nike-500-million-value-social-media-influence-00-1.jpg?cbr=1&q=90",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcah4T4_d2CRDlUs-e8ESNKqk2DDksB4Uh2g&"
]





