const fname = document.getElementById("fname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clickMe");
    let ebody = `
    <b>Name: </b>${fname.value}
    <br>
    <b>Phone.No: </b>${phone.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Message: </b>${message.value}
    <br>

    `
    email.send({
        SecureToken : "bf2c8237-b4bb-4429-b103-e23450a4b8ce",
        To : 'r7679237@gmail.com',
        From : "ranjithrb1213@gmail.com",
        Subject : " Email Send " + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
});