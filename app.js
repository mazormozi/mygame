const warriorstype = ['archer', 'axeman', 'swordman',]

const warriorurl =[
    "./download.jpg",
    "./download(1).jpg",

]

function generateSinglewarrior(){
  
    
function _generatewarrior(){
    return warriorstype[Math.floor(Math.random()*warriorstype.length)];
}

function _generatepower(){
    return Math.floor(Math.random()*101)
}

function _generatelevel(){
    return Math.floor(Math.random()*11)
}

function _generateurl(){
    return warriorurl[Math.floor(Math.random()*warriorurl.length)]    
}

 const warrior={
    wrtype:_generatewarrior(),
    power: _generatepower(),
    level: _generatelevel(),
    imgurl : _generateurl()
}

    warrior.damage =warrior.power * warrior.level
    return warrior;
}

function _generatewarriors(numberOfwarriors){
    if (typeof numberOfwarriors !== "number") return;
    const warrior = [];
    for (let index = 0 ; index<numberOfwarriors ; index++){
        warrior.push(generateSinglewarrior())
        
    }
    return warrior ;

}
const result = _generatewarriors(5);
console.log(result);