function passwordMatch() {
    let input1 = document.getElementById('password');
    let input2 = document.getElementById('confirm-password');
    errorText = document.getElementById('noMatch');
    if (input2.value == "" || input2.value == input1.value) {
        input1.classList.remove("error");
        input2.classList.remove("error");
        errorText.classList.remove("on");
        return;
    }
    else {
        console.log("No Match");
        input1.classList.add("error");
        input2.classList.add("error");
        errorText.classList.add("on");
    }
}

document.getElementById("password").addEventListener('input', passwordMatch);
document.getElementById('confirm-password').addEventListener('input', passwordMatch);
