function creatE(dat){
    const ulD = document.getElementById('list')
    const liE = document.createElement('li')
    liE.className = 'list-group-item oline'
    liE.innerHTML = `${dat}`
    ulD.appendChild(liE)
    sessionStorage.setItem(`${dat}`,null)
    liE.addEventListener("click",function(){
        liE.remove()
        sessionStorage.removeItem(liE.innerText)
    })
}
const keys = Object.keys(sessionStorage);
for(const key of keys) {
    console.log(key)
    creatE(key)
}



function addList(){
    // getting the text value from input
    const data = document.getElementById('TextValue')
    if (data.value == ""){
        const ulD = document.getElementById('list')
        const alert = document.createElement('div')
        alert.className = 'alert alert-warning'
        alert.innerHTML = 'You must provide some text'
        ulD.prepend(alert)
        setTimeout(() => {alert.remove()}, 3000);
    }
    else{
        creatE(data.value)
        data.value = ""
    }

}

