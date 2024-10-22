const PI =3.1415
const radius = 5
const area = PI * radius * radius 
const spacePlant = .8

let gardenCapacity = area/spacePlant

console.log(gardenCapacity)

let initalCount = 20
let weekCount = 2
let plantCount = initalCount * 2 ** (weekCount - 1)
console.log(plantCount);

if (plantCount < 50% gardenCapacity){ 
    console.log ('plant more')
  } if (plantCount === 50% gardenCapacity){
    console.log('watch');
} else if (plantCount >= 80% gardenCapacity) {
    console.log('prune');
}