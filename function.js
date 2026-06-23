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
    // 1. Generate a random 4-digit OTP
    let generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

   let templateParams = {
        email: 'rehan2005asif@gmail.com', 
        otp_code: generatedOtp,          
        time: '15 minutes'                
    };

    // 3. Send the real email
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