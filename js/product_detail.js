var pluscount = document.getElementById("plusone");
var cutcount = document.getElementById('cutone');
var counter = document.getElementsByClassName('count')[1];

pluscount.addEventListener('click', function(){
  // let num = 1;
  // var counte = document.getElementsByClassName('count')[1];
//  console.log(counter);
  var num = counter.innerText;
  // console.log(plusone)
  if(num < 10){
    num ++;
    counter.innerText = num;
    
  }
  cutcount.addEventListener('click', function(){
  if(num > 1){
    num--;
    counter.innerText = num;
  }
})
  // console.log(plusone);
})