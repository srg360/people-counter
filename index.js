let currCount=0;
let savedResults;
let prevResult;

function increment(){
    document.getElementById("warning-msg").textContent="";       
    currCount++;
    document.getElementById("count").textContent=currCount;
}

function save(){
    if(currCount!=0){
        if(savedResults==undefined){
            savedResults=currCount;
            prevResult=currCount;
            currCount=0;
        }else{
            savedResults+=" - "+currCount;
            prevResult=count;
            currCount=0;
            
        }
        document.getElementById("count").textContent=currCount;
        document.getElementById("saved-rslt").textContent=savedResults;
    }else{
        document.getElementById("warning-msg").style.color="#ff9c00";
        document.getElementById("warning-msg").textContent="Invalid number";
    }
}