var selectedRow = null;
function showAlert(message, className){
  const div =document.createElement("div");
  div.className ='alert alert-${className}';

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(" .container");
  const main =document.querySelector(" .main");
  container.insertBefore(div, main);

  setTimeout(()=> document.querySelector(" .alert").remove(), 3000);
}

// clear All fields
function clearFields(){
  const firstname = document.querySelector("#firstname").value ="";
  const comment = document.querySelector("#comment").value ="";
};

// add data
document.querySelector("#student-form").addEventListener("submit" , (e) =>{
  e.preventDefault();
  //get  from values

  const firstname = document.querySelector("#firstname").value;
  const comment = document.querySelector("#comment").value;

//validate
if (firstname == "" || comment =="" ) {
  showAlert("Please fill in all fields", "danger");
  
}else{
  if(selectedRow == null){
    const list = document.querySelector("#student-list");
    const row = document.createElement("tr");

    row.innerHTML =`
      <td> ${firstname} </td>
      <td> ${comment} </td>
     <td>  <a href="#" class="btn btn-warning btn-sm delete"> Delete</a></td>
    `;
    list.appendChild(row);
    selectedRow = null;
    showAlert("Added" ,"seccess");

}
else{
  selectedRow.children[0].textContent = firstname;
  selectedRow.children[1].textContent = comment;
  selectedRow= null;
  showAlert("jj" ,"info");

}
clearFields();
}

});

// delete data

document.querySelector("#student-list").addEventListener("click" , (e) =>{
  target = e.target; 
  if(target.classList.contains("delete")){
    target.parentElement.parentElement.remove();
    showAlert("Data Deleted" ,"danger");
  }
})






