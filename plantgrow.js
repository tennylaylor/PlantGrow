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
/** *Part 2: thinking Bigger**/
const PI = 3.1415;
const spacePerPlant = 0.8;

// Starting with 100 plants
let initialPlantCount = 100;
let weeks = 10;

// Calculate total number of plants after 10 weeks
let totalPlantCount = initialPlantCount * 2 ** (weeks - 1);
console.log("Total plants after 10 weeks:", totalPlantCount);

let spacerequired = totalPlantCount * spacePerPlant; //are needed by plants//
console.log("Total area required for all plants:", requiredArea, "")

let additionalspace =/* something*/ areaneeded/PI;
console.log(   )



/**Part 3: Error in Judgement */
const PI = 3.1415;
const initialRadius = 5;  // radius garden
const numberOfPlants = 100;  // The original number of plants


try {
    // available area in the garden
    const spaceavailable = PI * /*something*/......;
    console.log("Available garden area:", spaceavailable. "");

    // Calculate required area for 100 plants
    const spaceavailable = numberOfPlants * spacePerPlant;
    console.log("Required area for plants:", requiredArea. "");

    //  throw an error
    if (requiredArea > spaceavailable) {
        throw  Error("exceeds  available space in the garden!");
    } else {
        console.log(" The plants fit the garden.");
    }
} catch (error) {
    // Log the error 
    console.error(error);
} finally {
    console.log("Garden space assessment complete.");
}