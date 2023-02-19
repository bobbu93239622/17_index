// $(function(){
//   // $('ul li').hide()
  
//     // $('.origin li').hide()
//     $('#toggle').click(function(){
//       $('.origin li').toggleClass('.show');
//     })
  
  
  
//  })


 let a = document.getElementById('toggle');
 a.addEventListener('click',(e) => {
  let b = document.getElementsByClassName('origin')[0]
  b.classList.toggle('show');
 })


 