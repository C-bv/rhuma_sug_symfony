import User from "../classes/User.js";

const response = await fetch("src/scripts/getAccount.php");
const users = await response.json();

users.forEach(user => {
    const data = new User(
        user.idClient,
        user.nomClient, 
        user.prenomClient, 
        user.emailClient, 
        user.telClient,
        user.addresseClient,
        user.villeClient,
        user.cpClient);
        data.displayUserInfos()
});

import disableForm from "./_disableForms.js";
disableForm();

import passwordChangeModal from "./_passwordChangeModal.js";
passwordChangeModal();