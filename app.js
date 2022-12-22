const endDate = "21 March 2023 3:30 am";

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input") 

function clock(){
    const end = new Date(endDate);
    const now = new Date;
    const diff = (end-now)/1000;
    if(diff<0) return;
    //convert into days
    input[0].value = (Math.floor(diff/3600/24));
    //convert into hours
    input[1].value =(Math.floor(diff/3600)%24);
    //convert into minutes
    input[2].value =(Math.floor(diff/60)%60);
    //convert into seconds
    input[3].value =(Math.floor(diff)%60);
}
clock()

//to call funtion at every second
setInterval(
    ()=>{
        clock()
    },
    1000
)
