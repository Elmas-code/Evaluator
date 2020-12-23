class User{

    constructor(username, done, questionAnswers, firstTime = false){
        this.username = username;
        this.done = done;
        this.questionAnswers = questionAnswers;
        this.firstTime = firstTime;
    }

    setLocalStorage() {
        localStorage.setItem('user', this.username);
        localStorage.setItem('done', done.toString());
        localStorage.setItem('questionAnswers', questionAnswers.toString());
    }

    getExistingUser(loggedUser){
        if(localStorage.getItem(loggedUser) != null) {
            return JSON.parse(localStorage.getItem(loggedUser));
        }
    }

    createUser() {
        localStorage.setItem(this.username.toString(), JSON.stringify(this));
    }

}

let sendButton = document.getElementById('loginButton');
let password = document.getElementById('password');

sendButton.addEventListener('click', function(){
    let username = document.getElementById('username');
    /*let re = new RegExp()*/
    if(password.value == '' /*|| !(/[a-z]{5}[0-9]{3}/.test(username.value))*/){
        username.style.border = "2px solid red";
        username.nextElementSibling.style.border = '2px solid red';
        username.previousElementSibling.style.visibility = 'visible'
    } else {
        setLocalStorage(username.value);
        window.open('pages/chooseLecture.html',"_self","",true)
    }
});

function setLocalStorage(loggedUser) {
    if(localStorage.getItem(loggedUser) != null) {
        let student = JSON.parse(localStorage.getItem(loggedUser));

        localStorage.setItem('user', student.username);
        localStorage.setItem('done', student.done);
        localStorage.setItem('questionAnswers', student.questionAnswers);
    } else {
        localStorage.setItem('user', loggedUser);
        localStorage.setItem('done','');
        localStorage.setItem('questionAnswers', '3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3');
    }
}


