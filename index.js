/*
    You are to use arrow functions for this task.

    Every second, change the background color of <span> according to the elements in `colours` array. The display of color should repeat from the top.

    Hint:
    - Look for interval setting functions.
    - You should use DOM Manipulation to update the style of <div> element.

    Code Challenge:
    - Provide a checkbox "stop". When it is checked, the colour change will not repeat and end at the last element.
*/

const colours = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];
const colorDiv = document.getElementById("target")
const stopCheckbox = document.getElementById("stopCheckbox")


let currentIndex = 0 //position of the index in the updateBackgroundColor function below 

function assignBackgroundColor(){
    const colorValue = colours[currentIndex].value
    colorDiv.style.backgroundColor = colorValue
    currentIndex = (currentIndex + 1) % colours.length // incrementing the the currentIndex by 1 in the array

}

let intervalColor = setInterval(assignBackgroundColor, 1000)


stopCheckbox.addEventListener("change", () => {
    if (stopCheckbox.checked) {
        clearInterval(intervalColor);
    } else {
        intervalColor = setInterval(setBackgroundColor, 1000);
    }
})




/*
colours.forEach(function(color){
    const colorValue = color[currentIndex].value;
    colorDiv.style.backgroundColor = colorValue
})
*/
//need to iterate through objects using a loop to get the color and then i need to change the color in the css box 


/*
function colorChange(){
    const colorValue = colours[1].value;
    //console.log(colorValue)
    colorDiv.style.backgroundColor = colorValue

}
*/