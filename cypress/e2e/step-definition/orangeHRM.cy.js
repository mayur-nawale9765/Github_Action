import Login from '../../pages/orangeHRMLoogin'
import data from'../../fixtures/orangeHRM.json'


describe('pom',()=>{
it.only('login test',()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
Login.setUserName(data.username);
Login.setPassword(data.password)
Login.clickSubmit();
Login.verifyLogin();  

})
})