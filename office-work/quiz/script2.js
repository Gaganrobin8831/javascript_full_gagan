let score = 0;

function sendData(data) {
  let storedData = localStorage.getItem("data");
  let dataArray = storedData ? JSON.parse(storedData) : [];

  dataArray.push(data);
  localStorage.setItem("data", JSON.stringify(dataArray));
  alert("add new another quiz");
  showData();
}


let inputs = document.querySelectorAll(".inp");

function getInputValues() {
  return {
    question: inputs[0].value,
    answer1: inputs[1].value,
    answer2: inputs[2].value,
    answer3: inputs[3].value,
    answer4: inputs[4].value,
    trueanswer: inputs[5].value,
  };
}

document.querySelector(".AddButton").addEventListener("click", () => {
  let newObj = getInputValues();
  sendData(newObj);
});

function showData() {
  let readData = JSON.parse(localStorage.getItem("data"));
  console.log(readData);
  
  let dataBox = document.querySelector(".databox");
    
  let element = "";
  for (let j = 0; j < readData.length; j++) {
    console.log(readData[j].question);

    element += `<h3> Question : ${readData[j].question}</h3>
                <li> Answer 1 :${readData[j].answer1}</li>
                <li> Answer 2 :${readData[j].answer2}</li>
                <li> Answer 3 :${readData[j].answer3}</li>
                <li> Answer 4 :${readData[j].answer4}</li>
                <li> Right Answer :${readData[j].trueanswer}</li>
                <button class="Edit" onclick="edit(${j})">Edit</button>
                <button class="delete" onclick="del(${j})">Delete</button>
                <hr>`;
  }

  dataBox.innerHTML = element;
}

window.addEventListener('load', () => {
  showData();
});

function edit(id) {
  let data = JSON.parse(localStorage.getItem("data"));
  let itemToEdit = data[id];

  update(itemToEdit, id);
}

function update(d, id) {
    const btn1 = document.querySelector(".AddButton");
    const btn2 = document.querySelector("#Update");
    const inputs = document.querySelectorAll(".inp");

    btn1.style.display = 'none';
    btn2.style.display = 'block';

   
    inputs[0].value = d.question;
    inputs[1].value = d.answer1;
    inputs[2].value = d.answer2;
    inputs[3].value = d.answer3;
    inputs[4].value = d.answer4;
    inputs[5].value = d.trueanswer;

    btn2.addEventListener("click", () => {
       
        const updatedData = {
            question: inputs[0].value,
            answer1: inputs[1].value,
            answer2: inputs[2].value,
            answer3: inputs[3].value,
            answer4: inputs[4].value,
            trueanswer: inputs[5].value,
        };

      
        let data = JSON.parse(localStorage.getItem("data"));
        data[id] = updatedData;
        localStorage.setItem("data", JSON.stringify(data));

       
        inputs.forEach(input => input.value = '');

        btn1.style.display = 'block';
        btn2.style.display = 'none';

            showData();
    });
}


function del(id) {
  let data = JSON.parse(localStorage.getItem("data"));
  data.splice(id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  showData();
}
