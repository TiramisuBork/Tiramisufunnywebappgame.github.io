// Zdrowie
let health = 5000;
let money = 0;



function set_health_bar(){
    var boss_bar = document.getElementById("health_display");
    boss_bar.textContent = health;
}
function button_onadd(){
    if(health > 0){
    health = health -1;
    play_attack();
    set_health_bar();
    }
    if (health <= 0){
        alert("U KILED HIM WHY HE WAS INOCENT BRO");
        boss_bar = "0";
        set_health_bar();
        death_sprite();
        play_death();
    }
}
function death_sprite(){
    var img = document.getElementById('sprite');
    img.setAttribute('src','src/img/hell_2.gif');
}
function play_attack(){
    var audio = new Audio('attack.wav');
    audio.play();

}
function play_death(){
    var audio_death = new Audio('1.mp3');
    audio_death.play()
}