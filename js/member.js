let sign_button = document.getElementById('sign-in')
let count = 0
// console.log(sign_button);
sign_button.addEventListener('click',function(){
    let sign_el = document.querySelectorAll('input')
    // console.log(sign_el);
    for(let i = 0; i < sign_el.length; i++){
        // console.log(sign_el[i]);
        if(sign_el[i].value == ''){
            
            

            count = 1;
            
           
           

        }

    
    }
    console.log(count);
    if(count == 1){
        alert('請填入完整資料')
        for(let i = 0; i < sign_el.length; i++){
            sign_el[i].classList.add('redcolor')

            if(sign_el[i].value !== ''){
                sign_el[i].classList.remove('redcolor')
                count = 0
                // return count
            }else{
                sign_el[i].classList.add('redcolor')
                // count = 0
                
            }
            
        }
       
       

    }
  
})

let sign_el = document.querySelectorAll('input')
for(let i = 0; i < sign_el.length; i++){
    sign_el[i].addEventListener('blur', function(e){
        if(sign_el[i].value !== ''){
            sign_el[i].classList.remove('redcolor')

        }
    })
}





//全域變數 紀錄驗證碼
var code="";
//
var checkCode = document.getElementById("code");

//顏色組
var fontColor=["blue","yellow","red"];
var bgColor=["yellow","green","blue",];
var ls=["2px","6px","-2px",];
var iColor;
// alert(iColor);

//隨機設定顏色組合
function randColor(){
  iColor=Math.floor(Math.random()*(fontColor.length));
//   alert(iColor);
  return iColor;
}
function createCode(){
  var ci=randColor()
//   checkCode.style['color']=fontColor[ci];
//   checkCode.style['background-color']=bgColor[ci];
  checkCode.style['letter-spacing']=ls[ci];
//   alert (ci);
	code = ""; 
	var codeLength = 6;//驗證碼的長度	
	var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//隨機數 
	for(var i = 0; i < codeLength; i++  ) {//迴圈操作 
		var index = Math.floor(Math.random()*36);//取得隨機數的索引（0~35） 
		code  += random[index];//根據索引取得隨機數加到code上 
	} 
	checkCode.innerHTML= code;//把code值賦給驗證碼
  	// console.log(code);
}

//更新驗證碼
var recode=document.getElementById('recode');
recode.addEventListener("click",function(e){
	createCode();
  document.getElementById("input").value = "";//清空文字框
  e.preventDefault();	
});

//點擊更新驗證碼
checkCode.addEventListener("click",function(e){
	createCode();
  document.getElementById("input").value = "";//清空文字框
  e.preventDefault();	
});

//驗證
var validate=document.getElementById('sign-in');
validate.addEventListener("click",function(e){
    
	var inputCode = document.getElementById("input").value.toUpperCase(); //取得輸入的驗證碼並轉化為大寫 
	if(inputCode.length <= 0) { //若輸入的驗證碼長度為0 
		alert("請輸入驗證碼！"); //則彈出請輸入驗證碼 
	} 
	else if(inputCode !== code ) { //若輸入的驗證碼與產生的驗證碼不一致時 
      alert("驗證碼輸入錯誤！"); //則彈出驗證碼輸入錯誤 
      createCode();//重新整理驗證碼 
	    document.getElementById("input").value = "";//清空文字框 
	} 
	else if(sign_el[0].value !== '' && sign_el[1].value !== ''){ //輸入正確時 
        
		alert("驗證碼輸入正確！"); //彈出^-^ 
    createCode();//重新整理驗證碼 
    document.getElementById("input").value = "";//清空文字框 
	} 
});

createCode();

