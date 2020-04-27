import $ from "jquery";
import 'bootstrap';
// setTimeout(()=>{alert($)}, 2000)
window.addEventListener('load', fn, false )

function fn(){
  //alert('ok')
  $('#menu>li>a').each((i,e)=>{e.className+=document.location.href.indexOf(e.href)!=-1?" active":""})
  $('#menu>li>a').click((e)=>{$('#menu>li>a.active').toggleClass('active');$(e.target).addClass('active')})
  $('#home').click((e)=>{$('#menu>li>a.active').toggleClass('active')})
}
