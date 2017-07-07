// select the cookie
var chocolate = document.querySelector('.choco')
var lemon = document.querySelector('.lemon')
var oatmeal = document.querySelector('.oat')
// when the page loads, grab the value of the saved cookie, by its name
var chocolateCookie = Cookies.get('chocolate') || 0
var lemonCookie = Cookies.get('lemon') || 0
var oatmealCookie = Cookies.get('oatmeal') || 0

document.querySelector('#choco').innerText = chocolateCookie

chocolate.addEventListener('click', function(e) {
  e.preventDefault()
  console.log(chocolateCookie)

  //add one to click
  chocolateCookie++
  //set the new value
  Cookies.set('chocolate', chocolateCookie)
  // console.log('fdsaf', chocolateCookie);
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
