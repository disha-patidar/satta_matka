export const convertTimeToMinutes = (time:string) => {

const [hourMin, modifier] = time.split(" ");
let [hours, minutes] = hourMin.split(":").map(Number);

if(modifier === "PM" && hours !== 12) hours += 12;
if(modifier === "AM" && hours === 12) hours = 0;

return hours * 60 + minutes;

};


export const getGameStatus = (open:string, close:string) => {

const now = new Date();
const currentMinutes = now.getHours()*60 + now.getMinutes();

const closeTime = convertTimeToMinutes(close);

/* GAME STATUS LOGIC */

if(currentMinutes <= closeTime){

return {
text:"Open for today",
color:"green",
isOpen:true
};

}

return {

text:"Closed for today",
color:"red",
isOpen:false

};

};