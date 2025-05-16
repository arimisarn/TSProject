async function loadHeader() {
    try{
        const response = await fetch ("../components/headers.html")
        const data =await response.text()
        const headerElement = document.getElementById("header")
        if(headerElement){
            headerElement.innerHTML = data
        }
    } catch(error){
        console.error('erreur lors du chargement')
    }
}
loadHeader()

async function loadHeaderMain() {
    try{
        const response = await fetch ("../components/header.html")
        const data =await response.text()
        const headerElement = document.getElementById("headerMain")
        if(headerElement){
            headerElement.innerHTML = data
        }
    } catch(error){
        console.error('erreur lors du chargement')
    }
}
loadHeaderMain()

async function loadMain() {
    try{
        const response = await fetch ("../components/mainIndex.html")
        const data =await response.text()
        const headerElement = document.getElementById("main")
        if(headerElement){
            headerElement.innerHTML = data
        }
    } catch(error){
        console.error('erreur lors du chargement')
    }
}
loadMain()

async function loadFooter() {
    try{
        const response = await fetch ("../components/footer.html")
        const data =await response.text()
        const headerElement = document.getElementById("footer")
        if(headerElement){
            headerElement.innerHTML = data
        }
    } catch(error){
        console.error('erreur lors du chargement')
    }
}
loadFooter()