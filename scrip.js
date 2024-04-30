const selectMenu = document.querySelectorAll('select');
const timebox =document.querySelector('.time');
const setAlarmBtn = document.querySelector('button');
const content =document.querySelector('.content');
let alarmTime , alarmState ='noset';
const ringtone = new Audio('./ssmm/1623497558_S8nC4.mp3')


for (let i=23 ; i >=0 ;i--) {
    i = i < 10 ? '0' + i : i;
    let option =`<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend' , option)
    console.log(option)
}

for (let i=59 ; i >=0 ;i--) {
    i = i < 10 ? '0' + i : i;
    let option =`<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend' , option)
    console.log(option)
}

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    timebox.innerHTML =`${h}:${m}:${s}` ;
    if(alarmTime == `${h}:${m}` ){
        ringtone.play();
        ringtone.loop = true;

    }


    
}, 1000);

setAlarmBtn.addEventListener('click' , ()=>{
    alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`
    if(alarmTime.includes('hour') || alarmTime.includes('minute')){
        return alert('زمان را به درستی مشخص کنید')
    }
    checkState(alarmState)
   
    
})

function checkState(state){
    if(state == 'noset'){
        content.classList.add('disable')
        setAlarmBtn.innerText ='clear Alarm'
        alarmState ='set'
    }else{
        content.classList.remove('disable')
        alarmTime = '' 
        ringtone.pause()
        alarmState = 'noset'
        setAlarmBtn.innerText ='set alarm'

}
}