import registerPage from "../../pages/register-page"
import registerdata from"../../fixtures/registerdata.json"


describe('test automation',()=>{
    it('register flow',()=>{

registerPage.openUrl();
registerPage.enterFirstName(registerdata.name);
registerPage.enterLastName(registerdata.lname);
registerPage.enterEmail(registerdata.email);
registerPage.enterTelephone(registerdata.telphone);
registerPage.enterPassword(registerdata.password);
registerPage.selectChechbox();
registerPage.clickOnContinue();

    })
})