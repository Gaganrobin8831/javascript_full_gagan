
let score = 0
let questionIndex
function getData() {
  let readData = JSON.parse(localStorage.getItem('data'))
  
  return readData
  
}


window.addEventListener('load', async () => {
   questionIndex = 0;
   mydata = await getData();
   showData();
 });
 
 function showData() {
   console.log(questionIndex);
   
   document.querySelector("p").innerText = mydata[questionIndex].question;
   document.querySelector(".l1").innerHTML = mydata[questionIndex].answer1;
   document.querySelector(".l2").innerText = mydata[questionIndex].answer2;
   document.querySelector(".l3").innerText = mydata[questionIndex].answer3;
   document.querySelector(".l4").innerText = mydata[questionIndex].answer4;
 
 
 
   document.querySelector("#r1").value = mydata[questionIndex].answer1;
   document.querySelector("#r2").value = mydata[questionIndex].answer2;
   document.querySelector("#r3").value = mydata[questionIndex].answer3;
   document.querySelector("#r4").value = mydata[questionIndex].answer4;
 
   let rightAnswer = mydata[questionIndex].trueanswer
   return rightAnswer
   
 }


 
document.querySelector(".btn1").addEventListener("click", () => {
   questionIndex++;
   if (questionIndex < mydata.length) {
     showData();
   } else {
     let sc = checkAnswer()
     alert(sc);
   }
 });
 
 
 
 function checkAnswer(v,r){
     score = score
     if (r === v) {
         score++;
        console.log(score);
     }
     return score - 1
 }
 
 
 const radioButtons = document.querySelectorAll('input');
 for (let i = 0; i < radioButtons.length; i++) {
  
     
     radioButtons[i].addEventListener('click',(e)=>{
         let val = e.target.value
         let realAnswer = showData()
      
         
        checkAnswer(val,realAnswer)
   
     })
 }
 