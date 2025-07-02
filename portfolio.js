 i=0
iter =  [0,1,2]
document.getElementById("rightArrow").addEventListener("click", () => {
    if(i==2){
        i = 0
    } else{
        i += 1
    }
    let indicatorOn = `indicator${iter[i]}`
    let indicatorOff = `indicator${iter.at(i-1)}`
    console.log(i-1)
    document.getElementById(indicatorOn).classList.add("neonText")
    document.getElementById(indicatorOff).classList.remove("neonText")
})
