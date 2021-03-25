

// const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);



// function changeColor() {
//     setInterval(
//         function () {
//             const container = document.getElementsByClassName('col_container')
//             for (y = 0; y < container.length; y++) {
//                 container[y].style.backgroundColor = "#" + randomColor();
//             }
//         }, 3000);
// }

// function randnum() {
    
//     console.log(x);
//     return x;
//   }







const randomcolor = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ", "Cyan", "Purple"];   
function changeColor() {
    setInterval(
        function () {
            var arr= [];
           
            const container = document.getElementsByClassName('col_container')
            for (y = 0; y < container.length; y++) {
                do{
                    var randnum = Math.floor((Math.random() * 9));
                }while( arr[randnum])
                 arr[randnum] = true;

                container[y].style.backgroundColor = randomcolor[randnum];
            }
        }, 3000);
}

// arr = [] , arr[5] = true , [emoty, emptry, trye, empty , empty, true]

function initialload_Color() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += Math.floor((Math.random() * 16)).toString(16);
    }

    return color;
}




for (x = 0; x < 3; x++) {
    var div_row = document.createElement('div');
    div_row.className = 'row_container';
    div_row.setAttribute(
        "style", "border: 2px solid black; height: 200px; padding:30px; display: flex; margin: 10px 0px");
    document.body.appendChild(div_row);
    for (y = 0; y < 3; y++) {
        var div_col = document.createElement('div');
        div_col.className = 'col_container';
        var a = initialload_Color();
        div_col.setAttribute("style", "border: 1px solid black; height: 100px; width:100%; padding:30px; margin: 0px 20px; background-color:" + a);
        div_row.appendChild(div_col);
        setInterval(initialload_Color, 3000);

        changeColor();

    }
}



















// h1.appendChild(node);
// var body = document.getElementsByTagName("body")[0];

// body.appendChild(row1);
// const element = document.getElementById("row_first");
// element.appendChild(h1);


// var para = document.createElement("p");
// var h1 = document.createElement("h1");
// var div = document.createElement('div');
// var node = document.createTextNode("Welcome!!")
// var btn = document.createElement("BUTTON");
// const row1 = document.createElement("div");
// row1.id ="row_first";


// h1.appendChild(node);

// document.body.appendChild(div);
// var element = document.getElementById("row_first");

// element.appendChild(h1);

// var button = document.createElement("button");
// button.innerHTML = "Switch color";

// var body = document.getElementsByTagName("body")[0];
// body.appendChild(button);

// document.querySelector("body").style.textAlign = "center";

// function randmColor() {
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += Math.floor((Math.random() * 16)).toString(16);
//     }

//     return color;
// }


// document.querySelector("button").addEventListener("click", function () {

//     document.querySelector("body").style.background = randmColor();


// });












// =====================Colors====================

// var color =["#35FF69", "#44CCFF","#7494EA", "#D138BF", "#494947", "#3DE6B4", "#f20505", "#f0e80a"];
// var i=0;
// const rannumber1=Math.floor(Math.random() * 256 );
// const rannumber2=Math.floor(Math.random() * 256 );
// const rannumber3=Math.floor(Math.random() * 256 );
// const ranrgb="rgb("+rannumber1+","+rannumber2+","+rannumber3+")";



// const random =Math . floor(Math.random() * months.length);

// button.addEventListener("click", function() {

//     alert("random, months[random]");
// })



// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);
// var element = document.getElementById("div1");


// element.appendChild(para);
// console.log(element);



// ===========================other processes====================================



// =====================Colors====================

// var color =["#35FF69", "#44CCFF","#7494EA", "#D138BF", "#494947", "#3DE6B4", "#f20505", "#f0e80a"];
// var i=0;
// const rannumber1=Math.floor(Math.random() * 256 );
// const rannumber2=Math.floor(Math.random() * 256 );
// const rannumber3=Math.floor(Math.random() * 256 );
// const ranrgb="rgb("+rannumber1+","+rannumber2+","+rannumber3+")";



// function randmColor() {
//     let color = "#";
//   for(let i = 0; i < 6; i++){
//         color += Math.floor((Math.random() * 16)).toString(16);
//   }
//     return color;

// }


// document.querySelector("button").addEventListener("click", function(){
//     // i = 1<color.length? ++i : 0;
//     document.querySelector("body").style.background=ranrgb;
// document.querySelector("body").style.background=color[i]


// });




// const random =Math . floor(Math.random() * months.length);

// button.addEventListener("click", function() {

//     alert("random, months[random]");
// })



// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);
// var element = document.getElementById("div1");


// element.appendChild(para);
// console.log(element);







