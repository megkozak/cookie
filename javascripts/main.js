// select the cookie
var chocolate = document.querySelector('.choco')
var lemon = document.querySelector('.lemon')
var oatmeal = document.querySelector('.oat')


var chocolateCookie = Cookies.get('chocolate') || 0
var lemonCookie = Cookies.get('lemon') || 0
var oatmealCookie = Cookies.get('oatmeal') || 0
var totalCookie = Cookies.get('totalCookies') || 0

document.querySelector('#chocoTotal').innerText = chocolateCookie
document.querySelector('#lemonTotal').innerText = lemonCookie
document.querySelector('#oatTotal').innerText = oatmealCookie
document.querySelector('#sumTotal').innerText = totalCookie

var totalCookie = chocolateCookie + lemonCookie + oatmealCookie
console.log(totalCookie);


// document.querySelector('#choco').innerText = chocolateCookie
    // console.log(chocolateCookie)
chocolate.addEventListener('click', function(e) {
  e.preventDefault()
  console.log(chocolateCookie)
    chocolateCookie++
  Cookies.set('chocolate', chocolateCookie)
  document.querySelector('#chocoTotal').innerText = chocolateCookie
  console.log(Cookies.get('chocolate'))
  updateTotalCookie()
})

lemon.addEventListener('click', function(e) {
  e.preventDefault()
    lemonCookie++
  Cookies.set('lemon', lemonCookie)
  document.querySelector('#lemonTotal').innerText = lemonCookie
  console.log(Cookies.get('lemon'))
  updateTotalCookie()
})

oatmeal.addEventListener('click', function(e) {
  e.preventDefault()
    oatmealCookie++
  Cookies.set('oatmeal', oatmealCookie)
  document.querySelector('#oatTotal').innerText = oatmealCookie
  console.log(Cookies.get('oatmeal'))
  updateTotalCookie()
})

function updateTotalCookie() {
  var tc = parseInt(Cookies.get("chocolate")) + parseInt(Cookies.get("lemon")) + parseInt(Cookies.get('oatmeal'))
  Cookies.set('totalCookies', tc);
  console.log("tc:", tc);
  document.querySelector('#sumTotal').innerText = tc
}


function clearcookies() {
  	Cookies.set("chocolate", 0);
    document.querySelector('#chocoTotal').innerText = 0
  	Cookies.set("lemon", 0);
    document.querySelector('#lemonTotal').innerText = 0
  	Cookies.set("oatmeal", 0);
    document.querySelector('#oatTotal').innerText = 0

  	Cookies.set("totalCookies", 0);
    updateTotalCookie()
  }
