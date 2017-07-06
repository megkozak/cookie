// select the cookie
var chocolate = document.querySelector('.choco')
var lemon = document.querySelector('.lemon')
var oatmeal = document.querySelector('.oat')
// when the page loads, grab the value of the saved cookie, by its name
var clicks = Cookies.get('chocolate')


chocolate.addEventListener('click', function() {
  //add one to click
  clicks++
  //set the new value
  Cookies.set('chocolate', clicks)
  // document.getElementById("chocolate").innerHTML = clicks

  console.log(Cookies.get('chocolate'))
})

lemon.addEventListener('click', function() {
   clicks++
   Cookies.set('lemon', clicks)

   console.log(Cookies.get('lemon'))
 })

 oatmeal.addEventListener('click', function() {
    clicks++
    Cookies.set('oatmeal', clicks)

    console.log(Cookies.get('oatmeal'))
  })
