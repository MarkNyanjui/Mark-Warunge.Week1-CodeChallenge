// Input the speed of the vehicle
let speed = parseInt(prompt("Enter car speed"))

let demeritPoints = 0
// Calculate the number of demerit points
if (speed > 70) {
    demeritPoints = Math.floor((speed - 70) / 5)
}
//Check if the speed is less than 70
if (speed <= 70) { 
    console.log("OK!")
}
else {
    console.log(demeritPoints)
    // Check if demerit points have exceeded the valid range
    if (demeritPoints > 12) {
        console.log("License Suspended")
    }
}
