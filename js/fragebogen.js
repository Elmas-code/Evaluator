var slider = document.getElementsByClassName('slider');
var sliderResult = document.getElementsByClassName('sliderResult');
document.getElementById('loggedUser').innerHTML = localStorage.getItem('user');
var current = localStorage.getItem('current').split(',');

var prof = document.getElementById("profName").innerHTML = current[1];
var lecture = document.getElementById("lecture").innerHTML = current[0];
var currentQuestionPage = document.getElementById('currentQuestionPage').innerText;

var questionsAnswered = [];

var color1 = "color: #cb3333";
var color2 = "color: #B24D26";
var color3 = "color: darkorange";
var color4 = "color: #7F800D";
var color5 = "color: #669900";



if(localStorage.questionAnswers == null){
    localStorage.setItem('questionAnswers', '3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3');
    questionsAnswered = localStorage.getItem('questionAnswers').split(',');
} else {
    questionsAnswered = localStorage.getItem('questionAnswers').split(',');
}

Array.from(sliderResult).forEach(function(e){
    switch(questionsAnswered[Array.from(sliderResult).indexOf(e) + (parseInt(currentQuestionPage)-1)*5]){
        case "1": 
            e.innerText = "Trifft überhaupt nicht zu";
            e.style.cssText = color1;
            console.log(Array.from(slider).indexOf(e));
            break;
        case "2":
            e.innerText = "Trifft nicht zu";
            e.style.cssText = color2;
            break;
        case "3":
            e.innerText = "Trifft eher nicht zu";
            e.style.cssText = color3;
            break;
        case "4":
            e.innerText = "Trifft zu";
            e.style.cssText = color4;
            break;
        case "5":
            e.innerText = "Trifft sehr zu";
            e.style.cssText = color5;
            break;
        default: console.log("gibts nicht");
    }
})

Array.from(slider).forEach(function(e) {

    switch(questionsAnswered[Array.from(slider).indexOf(e) + (parseInt(currentQuestionPage)-1)*5]){
        case "1": 
            e.value = 1;
            e.style.cssText = color1;
            console.log(Array.from(slider).indexOf(e));
            break;
        case "2":
            e.value = 2;
            e.style.cssText = color2;
            break;
        case "3":
            e.value = 3;
            e.style.cssText = color3;
            break;
        case "4":
            e.value = 4;
            e.style.cssText = color4;
            break;
        case "5":
            e.value = 5;
            e.style.cssText = color5;
            break;
        default: console.log("gibts nicht");
    }


    e.oninput = function(){
        let value = this.value;
        let resultNode = this.nextElementSibling;
        let pos = Array.from(slider).indexOf(this) + (parseInt(currentQuestionPage)-1)*5
        switch(value){
            case "1": 
                resultNode.innerHTML = "Trifft überhaupt nicht zu";
                resultNode.style.cssText = color1;
                questionsAnswered[pos] = '1';
                break;
            case "2":
                resultNode.innerHTML = "Trifft nicht zu";
                resultNode.style.cssText = color2;
                questionsAnswered[pos] = '2';
                break;
            case "3":
                resultNode.innerHTML = "Trifft eher nicht zu";
                resultNode.style.cssText = color3;
                questionsAnswered[pos] = '3';
                break;
            case "4":
                resultNode.innerHTML = "Trifft zu";
                resultNode.style.cssText = color4;
                questionsAnswered[pos] = '4';
                break;
            case "5":
                this.nextElementSibling.innerHTML = "Trifft sehr zu";
                resultNode.style.cssText = color5;
                questionsAnswered[pos] = '5';
                break;
            default: console.log("gibts nicht");
        }
        localStorage.setItem('questionAnswers', questionsAnswered.toString());
    }
});

if (document.getElementById("profName").innerHTML == 'Prof. Moriarty') {
    var img = document.createElement("img");
    img.src = "../assets/professors/moriarty.png";
    var src = document.getElementById("info");
    src.appendChild(img);
}
if (document.getElementById("profName").innerHTML == 'Prof. Chaos') {
    var img = document.createElement("img");
    img.src = "../assets/professors/chaos.jpg";
    var src = document.getElementById("info");
    src.appendChild(img);
}
if (document.getElementById("profName").innerHTML == 'Prof. White') {
    var img = document.createElement("img");
    img.src = "../assets/professors/white.jpg";
    var src = document.getElementById("info");
    src.appendChild(img);
}
if (document.getElementById("profName").innerHTML == 'Prof. Sanchez') {
    var img = document.createElement("img");
    img.src = "../assets/professors/rick.png";
    var src = document.getElementById("info");
    src.appendChild(img);
}
if (document.getElementById("profName").innerHTML == 'Prof. Dumbledore') {
    var img = document.createElement("img");
    img.src = "../assets/professors/Dumbledore.jpg";
    var src = document.getElementById("info");
    src.appendChild(img);
}

/*if (localStorage.getItem(pictureDumbledore) == null) {
    localStorage.setItem('pictureDumbledore', '../assets/professors/Dumbledore.jpg');
    localStorage.setItem('pictureChaos', '../assets/professors/chaos.jpg');
    localStorage.setItem('pictureMoriarty', '../assets/professors/moriarty.png');
    localStorage.setItem('pictureRick', '../assets/professors/rick.png');
    localStorage.setItem('pictureWhite', '../assets/professors/white.jpg');

}*/