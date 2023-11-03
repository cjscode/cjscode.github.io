let xml = new XMLHttpRequest()
xml.onload = async function () {
    let r = JSON.parse(xml.responseText)
    let n = []
    let lnk = []
    for (let i = 0; i < r.length; i++) {
        if (!(r[i]["archived"]) && !(r[i]["name"] == "cjscode") && !(r[i]["name"] == "cjscode.github.io")) {
            let c = document.createElement("div")
            c.id = r[i]["id"]
            c.classList.add("pj")
            c.innerHTML = "<h1>"+r[i]["name"]+"</h1>"
            c.innerHTML += "<img src='https://raw.githubusercontent.com/cjscode/"+r[i]["name"]+"/main/favicon.ico' style='display:none;'>"
            c.querySelector("img").onload = function () {
                this.style.display = "block"
            }
            c.onclick = function () {
                location.href= r[i]["html_url"]
            }
            document.querySelector("#pj").appendChild(c)
        }
    }
}
xml.open("GET","https://api.github.com/users/cjscode/repos")
xml.send()
let n = ["game developer","web developer","middle school student","cool guy","html, css, js","video gamer"]
let str = "game developer"
let abc = "abcdefghijklmnopqrstuvwxyz, "
let i = 0
function frm () {
    if (i == str.length) {
        return
    }
    let g = ""
    for (let x = 0; x < str.length; x++) {
        g = g+(x <= i ? str.charAt(x) : abc.charAt(Math.floor(Math.random()*abc.length)))
    }
    document.querySelector("#tp > p").textContent = g
    i += 0.4
    setTimeout(frm,100)
}
let r
setInterval(function () {
    r = Math.floor(Math.random()*n.length)
    str = n[r]
    i = 0
    frm()
},5000)
window.onscroll = function () {
    let x = document.querySelector("#dw")
    x.style.display = "none"
}