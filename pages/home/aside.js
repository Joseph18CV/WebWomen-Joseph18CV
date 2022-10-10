const newArray = []
const buttonUser = [...document.querySelectorAll(".button-user")]
const divEmpty = document.querySelector(".div-empty")
const buttonTrash = document.querySelectorAll("trash")
const aside = document.querySelector(".empty")

buttonUser.forEach((button) => {
    button.addEventListener("click", (event) => {
        jobsData.forEach((element) => {
            if(event.target.id == element.id && event.target.innerText == "Remover Candidatura"){
                newArray.push(element)
            }
        })
            if(event.target.innerText == "Candidatar"){
            const liEvent = document.getElementsByClassName("card-aside")
            const liAsideEvent = Array.from(liEvent)

            liAsideEvent.forEach((element) => {
                if(event.target.id == element.id){
                    element.remove()
                }
            })

        }       
        if(newArray.length > 0) {
            divEmpty.innerHTML = ""
            createCardAside(newArray)
        } 
        if(event.target.innerText == "Candidatar"){
            const liEvent = document.getElementsByClassName("card-aside")
            const liAsideEvent = Array.from(liEvent)

            liAsideEvent.forEach((element) => {
                if (event.target.id == element.id) {
                    element.remove()
                }
            })
            let searchIndex = newArray.findIndex((element) => {
                return element.id == event.target.id
                
            })
            newArray.splice(searchIndex, 1)     
        }
        if(!newArray.length){
            divEmpty.innerHTML = ""
            createAside()
        }
        let dataJobsContainer = JSON.stringify(newArray)
        localStorage.setItem('dataJobs', dataJobsContainer)
    })
})


function createCardAside () {

    let ulAside = document.createElement("ul")
        ulAside.classList.add("ul-aside")

    newArray.forEach((element) => {

        let liAside = document.createElement("li")
            liAside.classList.add("card-aside")
            liAside.id = element.id

        let divAside = document.createElement("div")
            divAside.classList.add("div-aside")
        let h3 = document.createElement("h3")
            h3.innerText = element.title
        let trashButton = document.createElement("button")
            trashButton.classList.add("trash")
            trashButton.id = element.id
            trashButton.addEventListener("click", (event) => {
                buttonUser.forEach((element) => {
                    if(element.id == event.target.id){
                        element.innerText = "Candidatar"
                    }
                })

                let searchButton = newArray.findIndex((element) => {
                    return element.id == event.target.id
                })

                newArray.splice(searchButton, 1)
                liAside.remove()

                if(!newArray.length){
                    divEmpty.innerHTML = ""
                    createAside()
                }
            })
        
        let divAside2 = document.createElement("div")
            divAside2.classList.add("div-aside2")
        let p = document.createElement("p")
            p.innerText = element.enterprise
        let span = document.createElement("span")
            span.innerText = element.location
        let img = document.createElement("img")
            img.src = "../../assets/img/trash.png"

        trashButton.appendChild(img)
        divAside.append(h3, trashButton)
        divAside2.append(p, span)
        liAside.append(divAside, divAside2)
        ulAside.appendChild(liAside)
        divEmpty.appendChild(ulAside)
    })
}


function createAside () {

    let p = document.createElement("p")
        p.innerText = "Você ainda não aplicou para nenhuma vaga"
    let div = document.createElement("div")
        div.classList.add("empty-color1")
    let div2 = document.createElement("div")
        div2.classList.add("empty-color2")
    let div3 = document.createElement("div")
        div3.classList.add("empty-color3")

    divEmpty.append(p, div, div2, div3)
}
createAside()

