function weight (mass,planet){
    let newMass=document.getElementById("mass")
    let newPlanet=document.getElementById("planet")
    let Mass=newMass.value
    let Planet=newPlanet.value
    let image
    console.log(Mass)
    console.log(Planet)
    switch(Planet){
        case "earth":
            weight=9.8*Mass
            document.getElementById("weight").innerHTML=weight;
            
            console.log(weight)
            break
        case "galaxy":
             weight=9.8*Mass
             document.getElementById("weight").innerHTML=weight;
                console.log("hello")
                break

        case "jupiter":
            weight=23.1*Mass
            document.getElementById("weight").innerHTML=weight; 
            console.log(weight)
            break
        case "mars":
            weight=3.7*Mass
            document.getElementById("weight").innerHTML=weight;
            console.log(weight)
            break
        case "mercury":
            weight=3.7*Mass
            document.getElementById("weight").innerHTML=weight;
            console.log(weight)
            break
        case "moon":
            weight=1.6*Mass
            document.getElementById("weight").innerHTML=weight;
            console.log(weight)
            break
        case "neptune":
            weight=11*Mass
            document.getElementById("weight").innerHTML=weight;
            console.log(weight)
            break
        case "pluto":
            weight=0.7*Mass
            document.getElementById("weight").innerHTML=weight;
            console.log(weight)
            break
        case "saturn":
            weight=9*Mass
            document.getElementById("weight").innerHTML=weight;
            console.log(weight)
            break
        case "uranus":
            weight=8.7*Mass
            document.getElementById("weight").innerHTML=weight;
            console.log(weight)
            break
        case "venus":
            weight=8.9*Mass
            document.getElementById("weight").innerHTML=weight;
            console.log(weight)
            break
        case "sun":
            weight=274*Mass
            document.getElementById("weight").innerHTML=weight;
            console.log(weight)
            break











    }
}