//Objects


function printName(person:{first:string; last:string}):void{
  console.log(`${person.first} ${person.last}`);
} 

type coordinate = {x:number,y:number}
let coordinate:coordinate;

coordinate={x:34,y:23};

function randomCoordinate() : coordinate{
  return {x:Math.random(),y:Math.random()}
}

randomCoordinate();