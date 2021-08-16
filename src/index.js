import { firstLetterIsCaps } from "../src/stringFactory";
import { circleArea } from "../src/shapeFactory";

//This index file is just an area to perform simple tests
//On the right of Code Sandbox, there is a browser and Tests panel.
//I have a few tests purposefully failing to let you know if it is working or not.
console.log(`Calculate area of Circle with 20 as radius: ${circleArea(20)}`);
console.log(
  `Check if Jarrod starts with a capital letter: ${firstLetterIsCaps("Jarrod")}`
);
