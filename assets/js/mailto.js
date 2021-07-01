const cname = document.getElementById('name');
const cemail = document.getElementById('email');
const cphone = document.getElementById('phone');
const cmessage = document.getElementById('message');
const csend = document.getElementById('send-btn');

csend.addEventListener("click",()=>{
    const link = "mailto:sliet.ssdc@gmail.com?subject=" + cname.value + "&body=" + cname.value + "%0A" + cemail.value + "%0A" + cphone.value + "%0A" + cmessage.value;
    console.log(link);
    window.open(link);
});
