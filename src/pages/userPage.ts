// import { Page } from 'playwright';

// export class UserPage {
//     private page: Page;

//     constructor(page: Page) {
//         this.page = page;
//     }

//     async navigateTo() {
//         await this.page.goto('https://example.com/user');
//     }

//     async getUsername() {
//         return await this.page.textContent('#username');
//     }

//     async setUsername(username: string) {
//         await this.page.fill('#username', username);
//     }

//     async getPassword() {
//         return await this.page.textContent('#password');
//     }

//     async setPassword(password: string) {
//         await this.page.fill('#password', password);
//     }

//     async submit() {
//         await this.page.click('#submit');
//     }
// }

import { APICalls } from "../enums/APICalls";
import {selectDropdown} from "../utils/commands";

class UserPage{

    // async getButton(){
    //      return await $('#submitajax');
    // }

    private get ajax_btn() { return $('#submitajax'); }
    private get status_Code() { return $('#statuspre'); }
    private get output_Text() { return $('#outputpre'); }
    private get endpoint_Field() { return $('#urlvalue'); }
    private get name_param() { return $("//div[@class='httpfile']//input[@type='text']"); }
    private get name_param_value() { return $("//div[@id='allparameters']//div[@class='span3']//input[@type='text']"); }
    private get select_type_call() { return $('#httpmethod'); }
    private get add_parameter() { return $('#addprambutton'); }
   
    
    
    
    async openApp(pageURL:string){
        await browser.url(pageURL);
        await browser.maximizeWindow();
    }

    async setEndPoint(endPoint:string){ 
        
        await this.endpoint_Field.setValue(endPoint);
        // await browser.pause(3000);
    }

    async getStatusCode():Promise<string>{
        
        await this.status_Code.waitUntil(async function () {
            return (await this.getText()) === 'HTTP 200 success'
        }, {
            timeout: 3000,
            timeoutMsg: 'expected text to be different after 5s',
            interval: 1000
        })
        // let value = await this.status_Code.getText();
        // return value;
        return this.status_Code.getText();
        
    }

    async getResponseText():Promise<string>{
           // Optionally, log out the current status code text for debugging purposes
    // const statusText = await this.output_Text.getText();
    // console.log('Initial status text:', statusText); // Debugging log

    await this.output_Text.waitUntil(async function () {
        // let text = await this.getText();
        // console.log('Current status code text during wait:', text); // Debugging log
        return (await this.getText()).includes('data');  // Ensure the text contains 'data'
    }, {
        timeout: 5000,  // Increase timeout to 10 seconds
        timeoutMsg: 'expected text to contain "data" after 10s',
        interval: 1000
    });

    // Once the condition is met, get and return the output text
    return this.output_Text.getText();
        // await this.output_Text.waitForDisplayed();


        // await this.status_Code.waitUntil(async function () {
        //     let text = await this.getText();
        //     return text.includes('data');
        // }, {
        //     timeout: 5000,
        //     timeoutMsg: 'expected text length to be greater than 0 after 5s',
        //     interval: 1000
        // })
        // return this.output_Text.getText();
        // const elem = await $('#someText')
    // await this.output_Text.waitUntil(async function () {
    //     return (await this.getText().length) > 0
    // }, {
    //     timeout: 5000,
    //     timeoutMsg: 'expected text to be different after 5s'
    // });

    // return await this.output_Text.getText();
    // $(selector).waitUntil(condition, { timeout, timeoutMsg, interval })

        // await this.status_Code.waitUntil(async () => {} , { timeout: 3000 });

        // let value= await this.output_Text.getText();
        // return value;

        // let value= (await this.status_Code.waitUntil(async () => { ( this.status_Code.getText().length !== 0)} , { timeout: 3000 })).getText();
    }

    async clickButton(){
        // const button = await this.getButton();
        await this.ajax_btn.click();
    }

    async setNameParam(name:string){
        await this.name_param.setValue(name);
    }

    async setNameParamValue(nameValue:string){
        await this.name_param_value.setValue(nameValue);
    }

    async setTypeCall(apiType:APICalls,type:string){
        await browser.pause(3000);
        await this.select_type_call.waitForClickable();
        await this.select_type_call.waitForDisplayed();
        await this.select_type_call.waitForEnabled();
        await this.select_type_call.waitForExist();
        await this.select_type_call.waitForStable();

        selectDropdown(await this.select_type_call,type);
    }

    async addParamButton(){
        await this.add_parameter.waitForClickable();
        await this.add_parameter.click();
    }
  

}

export default new UserPage();