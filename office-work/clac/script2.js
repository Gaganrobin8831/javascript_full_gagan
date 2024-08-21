const buttons = document.querySelectorAll('.btn1');
const myinput = document.querySelector('.inp');
let newString = ''
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const val = button.innerText;
      if (val == "C") {
        myinput.value = '';
        newString = '';
      } else if (val == "del") {
        newString = newString.slice(0, -1);
        myinput.value = newString; 
      }else if(val == "="){
        newString = eval(newString)
       if (newString == "0") {
        myinput.value = ' '
       }else{
        myinput.value = newString
       }

      }else {
        myinput.value += val;
        newString += val;
      }
    });
  });
