function addNewRow() {
    
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("mnum").value;
    let place = document.getElementById("location").value;


    if (name === "" || email === "" || phone === "" || place === "") {
        alert("Please fill out all fields!");
        return;
    }

    
    let tableBody = document.getElementById("customer-list");

    let newRow = document.createElement("tr");

    
    newRow.innerHTML = "<td>" + name + "</td>" +
                       "<td>" + email + "</td>" +
                       "<td>" + phone + "</td>" +
                       "<td>" + place + "</td>" +
                       "<td><button type='button' onclick='deleteRow(this)'>delete</button></td>";

    tableBody.appendChild(newRow);

    
    document.getElementById("fname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mnum").value = "";
    document.getElementById("location").value = "";
}

function deleteRow(button) {
   
    let code = prompt("Enter the deletion code to remove this record:");

    if (code === "123") {
        
        let row = button.parentElement.parentElement;
        row.remove();
        alert("Record deleted successfully.");
    } else if (code === null) {
        
        return;
    } else {
        alert("Incorrect password! You cannot delete this record.");
    }
}