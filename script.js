const button = document.querySelector(".botaoSortear")

function sortearValues(){
    const inputMin = parseInt(document.querySelector(".inputMin").value)
    const inputMax = parseInt(document.querySelector(".inputMax").value)
    console.log(inputMin, inputMax)

    const valuesresult = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin
    console.log(valuesresult) 

}
button.addEventListener("click", sortearValues)


