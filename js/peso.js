function selec() {
    let opt= document.getElementById('de').value
    let opt2= document.getElementById('para').value
    let val= document.getElementById('val').value
    let res

    if(opt== 1 && opt2== 1){
        res= val
    } else if(opt== 1 && opt2== 2){
        res= val*1000;
    } else if(opt== 1 && opt2== 3){
        res= val*2.20462;
    } else if(opt== 2 && opt2== 1){
        res= val/1000
    } else if(opt== 2 && opt2== 2){
        res= val
    } else if(opt== 2 && opt2== 3){
        res= val/454.6
    } else if(opt== 3 && opt2== 1){
        res= val*0.453592
    } else if(opt== 3 && opt2== 2){
        res= val*453.592
    } else if(opt== 3 && opt2== 3){
        res= val
    }
    
    document.getElementById('result').textContent= res

}

document.getElementById('convert').addEventListener('click', selec)