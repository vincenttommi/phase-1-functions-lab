
// Code your solution in this file!


function distanceFromHqInBlocks(blocks){

    const hq = 42;
    
    return Math.abs(blocks - hq);

}


function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)* 264;
  }
  


function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    return blocks * 264;
  }

  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination )
    if(distance<=400){
       return 0 ;
    }
    else if(distance > 400 && distance <= 2000 ) {
       return (distance - 400) * 0.02 ;
    }
    else if(distance>2000 && distance <= 2500){
       return 25 ;
    }
    else {
       return 'cannot travel that far' ;
    }
  }