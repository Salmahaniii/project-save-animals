function show() {
    document.getElementById("more").innerHTML = "Learn about endangered species in your area. Teach your friends and family about the wonderful wildlife, birds, fish and plants that live near you. The first step to protecting endangered species is learning about how interesting and important they are. For more information about endangered species, visit endangered.fws.gov";
}
if (new Date().getHours()<18){ docement.getElementById("greeting").innerHTML="Hello!"}
let day;
switch (new Date().getday()){
    case 0:
        day= "sunday";
        break;
        case 1:
        day= "Monday";
        break;
        case 2:
        day= "Tuesday";
        break;
        case 3:
        day= "Wednesday";
        break;
        case 4:
        day= "Thursday";
        break;
        case 5:
            day= "Friday";
            break;
            case 6:
                day= "Saturday";
                
}
document.getElementById ("days").innerHTML="Today is"+day;