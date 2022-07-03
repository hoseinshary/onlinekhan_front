/*fateme tekrar*/
const question_send = document.getElementById("question-send");
const main = document.getElementById("main");
const popUpPage = document.getElementById("popUp-page");
const popUpImg = document.getElementById("popUpImg");

popUpImg.addEventListener("click", (e) => {
    e.stopPropagation();
    main.style = 'filter: blur(0px)';
    popUpPage.style = 'display:none';
})
question_send.addEventListener("click", (e) => {
    e.stopPropagation();
    main.style = 'filter: blur(4px)';
    popUpPage.style = 'display:inline';
})
/*fateme tekrar*/