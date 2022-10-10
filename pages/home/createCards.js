const ul = document.querySelector(".list")

function createCards (list) {

    let li = document.createElement("li")
        li.classList.add("card")
        li.id = list.id
    let div = document.createElement("div")
        div.classList.add("card-container")

    let h2 = document.createElement("h2")
        h2.innerText = list.title

    let div2 = document.createElement("div")
        div2.classList.add("enterprise-and-location")
    let p = document.createElement("p")
        p.innerText = list.enterprise
    let span = document.createElement("span")
        span.innerText = list.location

    let text = document.createElement("p")
        text.innerText = list.descrition

    let div3 = document.createElement("div")
        div3.classList.add("div-modalities")
    
    let div4 = document.createElement("div")
        div4.classList.add("div-span")
    let modalities1 = document.createElement("span")
        modalities1.innerText = list.modalities[0]
    let modalities2 = document.createElement("span")
        modalities2.innerText = list.modalities[1]
    let button = document.createElement("button")
        button.classList.add("button-user")
        button.innerText = "Candidatar"
        button.id = list.id
        button.addEventListener("click", (event) => {
            if(event.target.innerText == "Candidatar"){
                button.innerText = "Remover Candidatura"
            }else{
                button.innerText = "Candidatar"
            }
        })

    div4.append(modalities1, modalities2)
    div3.append(div4, button)
    div2.append(p, span)
    div.append(h2, div2, text, div3)
    li.appendChild(div)

    return li
}

function cards (jobs) {
    ul.innerHTML = ""
    jobs.forEach((element) => {
        ul.appendChild(createCards(element))
    })
}
cards(jobsData)