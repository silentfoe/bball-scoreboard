//setting both scores to 0
let homeScore = 0;
let awayScore = 0

//reassigning the dom object for score to a variable
let home = document.getElementById('home-score')
let away = document.getElementById('away-score')

//putting the scores in the dom with the starting value as 0
 home.textContent = homeScore
 away.textContent = awayScore

//clicking the button on the page resets the scores to 0
document.querySelector('button').addEventListener('click',resetScore)

document.querySelector('#add-one-home').addEventListener('click',addOneHome)
document.querySelector('#add-two-home').addEventListener('click',addTwoHome)
document.querySelector('#add-three-home').addEventListener('click',addThreeHome)
document.querySelector('#add-one-away').addEventListener('click',addOneAway)
document.querySelector('#add-two-away').addEventListener('click',addTwoAway)
document.querySelector('#add-three-away').addEventListener('click',addThreeAway)


function addOneHome() {
    homeScore += 1
    home.textContent = homeScore
}
function addTwoHome() {
    homeScore += 2
    home.textContent = homeScore
}
function addThreeHome() {
    homeScore += 3
    home.textContent = homeScore
}
function addOneAway() {
    awayScore += 1
    away.textContent = awayScore
}
function addTwoAway() {
    awayScore += 2
    away.textContent = awayScore
}
function addThreeAway() {
    awayScore += 3
    away.textContent = awayScore
}





//function to reset the scores to 0
function resetScore() {

    homeScore = 0
    awayScore = 0
    home.textContent = homeScore
    away.textContent = awayScore
}