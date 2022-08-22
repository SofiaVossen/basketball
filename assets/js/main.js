// Window Prompt
// ==================================
function nameTeamHome(){
    let Team=prompt("whats the name of the home team?");
    if(Team!=null){
        document.getElementById('groupHome').innerHTML=Team;
    }
}
function nameTeamAway(){
    let Team=prompt("whats the name of the away team?");
    if(Team!=null){
        document.getElementById('groupAway').innerHTML=Team;
    }
}
// Buttons +1 +2 +3 Home Counter
// ==================================
function plusOneHome(){
    let startNmb=document.getElementById('nmbHome').innerHTML;
    let endNmb=Number(startNmb)+Number(1);
    document.getElementById('nmbHome').innerHTML=endNmb;
}
function plusTwoHome(){
    let startNmb=document.getElementById('nmbHome').innerHTML;
    let endNmb=Number(startNmb)+Number(2);
    document.getElementById('nmbHome').innerHTML=endNmb;
}
function plusThreeHome(){
    let startNmb=document.getElementById('nmbHome').innerHTML;
    let endNmb=Number(startNmb)+Number(3);
    document.getElementById('nmbHome').innerHTML=endNmb;
}
// Buttons +1 +2 +3 Away Counter
// ==================================
function plusOneAway(){ç
    let startNmb=document.getElementById('nmbAway').innerHTML;
    let endNmb=Number(startNmb)+Number(1);
    document.getElementById('nmbAway').innerHTML=endNmb;
}
function plusTwoAway(){
    let startNmb=document.getElementById('nmbAway').innerHTML;
    let endNmb=Number(startNmb)+Number(2);
    document.getElementById('nmbAway').innerHTML=endNmb;
}
function plusThreeAway(){
    let startNmb=document.getElementById('nmbAway').innerHTML;
    let endNmb=Number(startNmb)+Number(3);
    document.getElementById('nmbAway').innerHTML=endNmb;
}
// Button Reset
// ==================================
function reset(){
    document.getElementById('nmbHome').innerHTML=0;
    document.getElementById('nmbAway').innerHTML=0;
    document.getElementById('groupHome').innerHTML="Home";
    document.getElementById('groupAway').innerHTML="Away";
}