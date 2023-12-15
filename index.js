// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  let distanceBlocks = blocks-42
  if (blocks < 42){
return 42 - blocks
  }
  return distanceBlocks
}
function distanceFromHqInFeet(blocks){
  let distanceBlocks = distanceFromHqInBlocks(blocks)
  if (distanceBlocks < 0){
    return 42 - distanceBlocks
  }
  return distanceBlocks * 264
}
function distanceTravelledInFeet(start, destination){
  let travelDistance = destination-start
  if (travelDistance < 0){
   travelDistance = start-destination
  
  }
  return travelDistance*264
}
//400 ft free
//400-2000 ft = 2cents per ft not including 400 free
//flat rate $25 for >2000 ft & <2500ft
//not allow >2500ft
//cannot travel that far=>2500ft
function calculatesFarePrice(start, destination){
  const totalDistance = distanceTravelledInFeet(start, destination)
  if (totalDistance <400){
    return 0
  }else if (totalDistance>400 && totalDistance<2000){
    return (totalDistance-400)*0.02
  }else if (totalDistance>2000 && totalDistance<2500){
    return 25
  }else if (totalDistance >2500){
    return 'cannot travel that far'
  }
}