// Code your solution in this file!
function distanceFromHqInBlocks(block) {
   const newDist=(42-block);
   const newDist2=newDist**2;
   const newDist3=Math.sqrt(newDist2);
return newDist3;
}
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(block) {
    const newDist=(42-block);
   const newDist2=newDist**2;
   const newDist3=Math.sqrt(newDist2);
   const distInFt=newDist3*264;
   return distInFt;
}
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination) {
    const dist1=destination-start;
    const dist2=dist1**2;
    const dist3=Math.sqrt(dist2);
    const dist4=dist3*264;
    return dist4;

}
console.log(distanceTravelledInFeet(34,28));

function calculatesFarePrice(start, destination) {
    const dist1=destination-start;
    const dist2=dist1**2;
    const dist3=Math.sqrt(dist2);
    const dist4=dist3*264;

    if(dist4<=400) {
        const price=0;
        return price;
    }

    else if (dist4>400 && dist4<=2000) {
        
        const price=(dist4-400)*(.02/1);
        return price;
    }

    else if (dist4>2000 && dist4<=2500) {
        return 25;
    }

    else if (dist4>2500) {
        return 'cannot travel that far';
    }
    
}

console.log(calculatesFarePrice(34,32))





