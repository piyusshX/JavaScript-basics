// Syntax :-

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "jan"

switch (month) {
    case "jan":
        console.log("January");
        break; 
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break; // agar break use nhi kiya to march ke baad ka sara code execute hoga without being check except default
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}