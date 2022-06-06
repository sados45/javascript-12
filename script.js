//_________________Event 
//___________Load Konusu:

window.onload = ()=> {

}

window.addEventListener("load", function(){

}) //ÖNEMLI .bütün yapilan calismalari bu güzel parantez icine alirsan bodydeki yazilanlari yani, su olur, ilk önce bu sayfam yüklensin sonra javascripte ait olan özellikler yüklensin. tabiki javascripti head icine tasimalisin.


//Lastname icine 40 harf almasini istiyoruz sinirimiz bu. bunu event ile yapamk istiyoruz. 

/*
const lastName = document.getElementById("last-name")
const charCount= document.getElementById("char-count")
const maxLength = lastName.getAttribute("max-length")
const showRemaninChar=() =>{

//const val = lastName.value
    //charCount.innerText= lastName.value.length + "/" + maxLength
    if(lastName.value.length == 0) {
        charCount.style.display= "none"
    }else{
        console.log("else")
        charCount.style.display = "inline"
        charCount.innerText= lastName.value.length + "/" + maxLength
    }
}
lastName.addEventListener("keyup", showRemaninChar)

//burada sunu anlatmaya calisti, maxlength ile ve keyup vererek, verilecek degeri bir event ile yön etilebilecegini anlatti. ama anlamadim. anlatim cok kötü...
*/
/*
//Change yada onChange eventi:

jobList.addEventListener("change", function(){

    position.innerText= 'You selected ${jobList.value}'

})//change yada onchange eventi genelde select listlerde kullaniliyor.
*/
//_________________________________________________________________________________

const addButton = document.querySelector(".add-button")
const input = document.querySelector("#input")
const ul = document.querySelector("ul")

const addListElement = () => {
    const val = input.value

    if(val.trim() !== ""){
        const listElement = document.createElement("li")
        const content = document.createElement("span")
        content.setAttribute("class", "list-element")
        content.textContent = val
        const deleteButton = document.createElement("span")
        deleteButton.setAttribute("class", "delete-button")
        deleteButton.textContent = "delete"

        listElement.appendChild(content)
        listElement.appendChild(deleteButton)

        ul.appendChild(listElement)

        const deleteButtons = document.querySelectorAll(".delete-button")

        Array.from(deleteButtons).forEach(function (btn){
            btn.addEventListener("click", function (e) { //her tusun bir karsiligi olan bir sayi var js,de. google a event key code yazinca cikar. enterin  13 mesela
                console.log(e)
                const li = e.target.parentElement //biz hangi elementi kastettigimizi target ile hedef göstererek islem yapiyoruz. 
                li.remove()// olusturdugumuz listede silmek istedigimiz yazilari silmek icin ilgili listeyi remove etmemiz lazim bunun icin li.remove yaptik.
            })
        })
    }
    else{
        alert("Please enter a valid value")
    }
    input.value = ""
}

addButton.addEventListener("click",addListElement)
input.addEventListener("keyup", function(e) {
    if(e.keyCode === 13) {
        addListElement()
        input.value = ""
    }
}) 