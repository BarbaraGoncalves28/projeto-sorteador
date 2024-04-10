const button = document.querySelector(".botaoSortear")

function sortearValues(){
    const inputMin = parseInt(document.querySelector(".inputMin").value)
    const inputMax = parseInt(document.querySelector(".inputMax").value)
    
    console.log(inputMin, inputMax)

    if(inputMin >= inputMax){
        alert("O valor mínimo tem que ser MENOR que o valor máximo!")
    } else {
        const valuesresult = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin
        alert(valuesresult) 
    }

}
button.addEventListener("click", sortearValues)


