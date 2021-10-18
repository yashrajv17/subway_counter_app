let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count=0

console.log(saveEl)

function increment(){
    count +=1
    countEl.innerText = count
}

function save(){
    let vari = count + "-" 
    saveEl.textContent += vari
    console.log(count)
    countEl.textContent = 0
    count = 0 
    
}

