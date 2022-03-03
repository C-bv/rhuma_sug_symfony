export default function disableForm(){
    
    const accountForm =  document.querySelector("#account_form"),
        accountFormInputs = accountForm.querySelectorAll("input"),
        editButtonsContainer = accountForm.querySelector("#edit_buttons_container"),
        editButton = editButtonsContainer.querySelector("#edit_button");

    accountFormInputs.forEach(element => {
        element.disabled = true;
    });
    
    editButton.addEventListener("click", function(){

        let validateEdits = document.createElement("input"),
            cancelEdits = document.createElement("button");
            
        validateEdits.setAttribute("type", "submit");
        cancelEdits.id = "cancel_button";
        cancelEdits.innerText = "Cancel";

        cancelEdits.addEventListener("click", function(){
            window.location.href = "account";
        })
            
        accountFormInputs.forEach(element => {
            element.disabled = false;
        });
        
        editButton.style.display = "none";
    
        editButtonsContainer.appendChild(cancelEdits);
        editButtonsContainer.appendChild(validateEdits);
    });
};