class registerPage{

    weblocators={

        fname:"#input-firstname",
        lname:"#input-lastname",
        email:"#input-email",
        telephone:"#input-telephone",
        password:"#input-password",
        passconfirm:"#input-confirm",
       privacycheckbox:'input[type="checkbox"]',
        continuebtn:"input[value='Continue']"

    }
    openUrl(){
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(fname){
        cy.get(this.weblocators.fname).type(fname)
    }

    enterLastName(lname){
        cy.get(this.weblocators.lname).type(lname);
    }
    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
    }

enterTelephone(number){
    cy.get(this.weblocators.telephone).type(number);
}

enterPassword(password){
    cy.get(this.weblocators.password).type(password);
    cy.get(this.weblocators.passconfirm).type(password);

}

selectChechbox(){
    cy.get(this.weblocators.privacycheckbox).check();
}

clickOnContinue(){
    cy.get(this.weblocators.continuebtn).click();
}
}
export default new registerPage();