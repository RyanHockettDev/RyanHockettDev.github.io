 on=0
iter =  [0,1]
document.querySelectorAll('#rightArrow').forEach(addEventListener("click", () => {
    if(on==1){
        on = 0
        off = 1
        
    } else{
        on = 1
        off = 0
    }
    let indicatorOn = `indicator${on}`
    let indicatorOff = `indicator${off}`
    let screenOn = `screen${on}`
    let screenOff = `screen${off}`
    console.log(screenOn)
    console.log(screenOff)
    document.getElementById(indicatorOn).classList.add("neonText")
    document.getElementById(indicatorOff).classList.remove("neonText")
    document.getElementById(screenOn).classList.remove("d-none")
    document.getElementById(screenOn).classList.add("d-block")
    document.getElementById(screenOff).classList.remove("d-block")
    document.getElementById(screenOff).classList.add("d-none")

}))

document.getElementById("leftArrow").addEventListener("click", () => {
    if(i==1){
        i = 0
    } else{
        i += 1
    }
    let indicatorOn = `indicator${iter[i]}`
    let indicatorOff = `indicator${iter.at(i-1)}`
    let screenOn = `screen${iter[i]}`
    let screenOff = `screen${iter[i-1]}`
    console.log(i-1)
    document.getElementById(indicatorOn).classList.add("neonText")
    document.getElementById(indicatorOff).classList.remove("neonText")
})