var loaddiv = $(".load")

var i = 0
const txt = $(".loader-text").text()
loaderinterval = setInterval(() => {
    $(".load").css("width",`${i}%`)
    i+=1
    if (i >= 102) {
        $(".loader-bg").css("opacity","0")
        $(".loader-bg").css("pointer-events","none")
        clearInterval(loaderinterval)
    }
}, 40);

var intervals = []
var intvervalnum = 1
var iarr = []
var id = 0
function typer(txt,sel) {
    let tmptxt = ""
    let i = 0

    let myternal = setInterval(() => {
        tmptxt += txt.split("")[i]
        $(sel).text(tmptxt)
        i+=1
        if (i >= txt.split("").length) {
            clearInterval(myternal)
        }
    },50)
}

function deleter(txt,sel) {
    let i = txt.length
    let myternal = setInterval(() => {
        txt = txt.slice(0, -1);
        $(sel).text(txt)
        i-=1
        if (i <= 0) {
            clearInterval(myternal)
        }
    },50)
}

typer(txt,".loader-text")

txtss = ["PHP DEVELOPER","WEB DEVELOPER","JS DEVELOPER","PYTHON DEVELOPER","AKARGANG MEMBER"]