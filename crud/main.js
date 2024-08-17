window.addEventListener('load', () => {
    getList();
  });
function readAll(data){
    if (localStorage.length == 0) {
        localStorage.setItem("obj",JSON.stringify([data]))    
    }else{
        localStorage.setItem("obj",JSON.stringify([...JSON.parse(localStorage.getItem("obj")) ,data]))
    }
    
    
}

 function getList(){
    let tabledata = document.querySelector('.data_table');
    let object = localStorage.getItem("obj") || []
    let objectData = JSON.parse(object)
    
    let element = ""
  
    objectData.map(record =>{
        console.log(record);
        
        element += `<tr>
        <td> ${record.name}</td>
        <td> ${record.email}</td>
        <td>
        <button class ="Edit" onclick = {edit(${record.id})}>Edit</button>
        
         <button class = "del" onclick= {del(${record.id})}>Delete</button>
         </td>
        
        
        </tr>`
    } )
    tabledata.innerHTML = element;
 }
 

function create(){
     document.querySelector('.addData').style.display = "block"
    document.querySelector('.add_div').style.display = 'none'


}
function add() {
    let name = document.querySelector('.name').value
    let Email = document.querySelector('.email').value

    let newObj = {id: new Date().getMilliseconds(),name:name ,email : Email}


    document.querySelector('.addData').style.display = "none"
    document.querySelector('.add_div').style.display = 'block'

    readAll(newObj)
    getList()

   
    
}
function edit(id) {
    let data = JSON.parse(localStorage.getItem("obj"))
    console.log(data);

    document.querySelector('.updateData').style.display = "block"
    let obj = data.find(rec => rec.id === id)
    console.log(obj);
    
    document.querySelector('.name1').value = obj.name
    document.querySelector('.email2').value = obj.email
    document.querySelector('.id').value = obj.id
}

function update() {
    let data = JSON.parse(localStorage.getItem("obj"))
    console.log(data);
    let id =parseInt( document.querySelector('.id').value)
    let name = document.querySelector('.name1').value
    let email = document.querySelector('.email2').value
   console.log(id,name,email);
   
   let obj1 = data.findIndex( rec => rec.id === id)
   data[obj1] = {id,name,email}
console.log(obj1);

localStorage.setItem("obj",JSON.stringify(data))
   
   document.querySelector('.updateData').style.display = "none"
   getList()

}
function del(id) {
    let data = JSON.parse(localStorage.getItem("obj"))
    console.log(data);
    
  data =  data.filter(rec => rec.id !== id)
   localStorage.setItem("obj",JSON.stringify(data))
   getList()
}