// select the cookie
var chocolate = document.querySelector('.choco')
var lemon = document.querySelector('.lemon')
var oatmeal = document.querySelector('.oat')
// var total= document.querySelector('.sum')


var chocolateCookie = Cookies.get('chocolate') || 0
var lemonCookie = Cookies.get('lemon') || 0
var oatmealCookie = Cookies.get('oatmeal') || 0
var totalCookie = ('chocolate' + 'lemon' + 'oatmeal')



// document.querySelector('#choco').innerText = chocolateCookie
    // console.log(chocolateCookie)
chocolate.addEventListener('click', function(e) {
  e.preventDefault()
  console.log(chocolateCookie)
    chocolateCookie++
  Cookies.set('chocolate', chocolateCookie)
  document.querySelector('#choco').innerText = chocolateCookie
  console.log(Cookies.get('chocolate'))
})

lemon.addEventListener('click', function(e) {
  e.preventDefault()
    lemonCookie++
  Cookies.set('lemon', lemonCookie)
  document.querySelector('#lemon').innerText = lemonCookie
  console.log(Cookies.get('lemon'))
})

oatmeal.addEventListener('click', function(e) {
  e.preventDefault()
    oatmealCookie++
  Cookies.set('oatmeal', oatmealCookie)
  document.querySelector('#oat').innerText = oatmealCookie
  console.log(Cookies.get('oatmeal'))
})




function clearcookies() {
  	Cookies.set("chocolate", 0);
  	Cookies.set("lemon", 0);
  	Cookies.set("oatmeal", 0);
  	Cookies.set("total", 0);
  	// displaycookie_count();
  }






  
