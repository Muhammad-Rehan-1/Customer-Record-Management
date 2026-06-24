let editingRow = null;
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

if(editingRow !== null){
    editingRow.cells[0].innerText= name;
    editingRow.cells[1].innerText= email;
    editingRow.cells[2].innerText= phone;
    editingRow.cells[3].innerText= place;
    document.querySelector("#new-customer-data button").innerText= "Saved information"
    editingRow= null;
    alert("Record successfuly updated");

}
else {
    let newRow = document.createElement("tr");
    newRow.innerHTML = "<td>" + name + "</td>" +
                   "<td>" + email + "</td>" +
                   "<td>" + phone + "</td>" +
                   "<td>" + place + "</td>" +
                   "<td><button type='button' onclick='deleteRow(this)'>delete</button></td>" +
                   "<td><button type='button' onclick='PreviewRow(this)'>Preview</button></td>" + 
                   "<td><button type='button' onclick='EditRow(this)'>Edit</button></td>"; 
                   tableBody.appendChild(newRow);
                   alert("New Record Added")   
}






document.getElementById("fname").value = "";
document.getElementById("lastname").value = "";
document.getElementById("email").value = "";
document.getElementById("mnum").value = "";
document.getElementById("location").value = "";
}

function deleteRow(button) {

    let generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

   let templateParams = {
        email: 'rehan2005asif@gmail.com', 
        otp_code: generatedOtp,          
        time: '15 minutes'                
    };

    emailjs.send('service_jrpk53y', 'template_a61bpvm', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            let userOtp = prompt("A real OTP has been sent to your email! Enter it here to confirm deletion:");

            if (userOtp === generatedOtp) {
                let row = button.parentElement.parentElement;
                row.remove();
                alert("Record deleted successfully.");
            } else if (userOtp === null) {
                return;
            } else {
                alert("Incorrect OTP! Row not deleted.");
            }
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to send OTP email. Please try again.");
        });
}
function PreviewRow(button){
    let row = button.parentElement.parentElement;
    let name = row.cells[0].innerText;
    let email = row.cells[1].innerText;
    let phone= row.cells[2].innerText;
    let place = row.cells[3].innerText; 

    alert("Customer Details: \n \n Name:  "+ name+ "\nEmail :  " + email + "\nContact number :  " + phone + "\n Adress :  "+ place);
}




function EditRow(button){

    let generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

   let templateParams = {
        email: 'rehan2005asif@gmail.com', 
        otp_code: generatedOtp,          
        time: '15 minutes'                
    };

    emailjs.send('service_jrpk53y', 'template_a61bpvm', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);

        let userOtp = prompt("A real OTP has been sent to your email! Enter it here to confirm Editing:");
    editingRow = button.parentElement.parentElement;
        

            
            

            if (userOtp === generatedOtp) {

                
                 document.getElementById("fname").value = editingRow.cells[0].innerText;
    document.getElementById("email").value = editingRow.cells[1].innerText;
    document.getElementById("mnum").value = editingRow.cells[2].innerText;
    document.getElementById("location").value = editingRow.cells[3].innerText;

    document.querySelector("#new-customer-data button").innerText = "Updates";

                
                alert("Verification successful Now you can edit the customer details");
            } else if (userOtp === null) {
                return;
            } else {
                alert("Incorrect OTP! ");
            }
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to send OTP email. Please try again.");
        });
   

}