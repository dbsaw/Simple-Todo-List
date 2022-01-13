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
    console.log(data.value)

    // making li element <li class="list-group-item oline" aria-current="true">An active item</li>
    // in  <ul class="list-group ps-5 pe-5">
    const ulD = document.getElementById('list')
    const liE = document.createElement('li')
    liE.className = 'list-group-item oline'
    liE.innerHTML = `${data.value}`
    ulD.appendChild(liE)
    data.value = ""

    liE.addEventListener("click", function(){
        liE.remove()
    })
    }
}


