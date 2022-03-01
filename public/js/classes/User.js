export default class User {
    id;
    nom;
    prenom;
    email;
    telephone;
    addresse;
    ville;
    cp;

    constructor(id, nom, prenom, email, telephone, addresse, ville, cp) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.addresse = addresse;
        this.ville = ville;
        this.cp = cp;
    }
    displayUserInfos() {
        const accountForm = document.querySelector("#account_form"),
            accountFormInputs = accountForm.querySelectorAll("input");

        accountFormInputs[0].value = this.nom;
        accountFormInputs[1].value = this.prenom;
        accountFormInputs[2].value = this.email;
        accountFormInputs[3].value = this.telephone;
        accountFormInputs[4].value = this.addresse;
        accountFormInputs[5].value = this.ville;
        accountFormInputs[6].value = this.cp;
    }
}