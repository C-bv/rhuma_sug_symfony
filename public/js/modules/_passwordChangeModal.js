export default function passwordChangeModal(){

    const passwordChangeModal = document.querySelector("#password_change_modal"),
        changePasswordForm = document.querySelector("#change_password_form"),
        changePasswordButton= document.querySelector("#change_password_button"),
        closeModal = document.querySelector("#close_modal_button"),
        formAccount = document.querySelector("#account_form"),
        invalidNewPasswordInputs = changePasswordForm.querySelectorAll(".invalid_input");

    changePasswordButton.onclick = function() {
        passwordChangeModal.style.display = "block";
        formAccount.style.filter = "blur(4px)";
    };
    closeModal.onclick = function() {
        passwordChangeModal.style.display = "none";
        formAccount.removeAttribute("style");
    };
    invalidNewPasswordInputs.forEach(element => {
        if(element.textContent){
            passwordChangeModal.style.display = "block";
            formAccount.style.filter = "blur(4px)";
        }
    });
}