import { Given,When } from "@wdio/cucumber-framework";
import formdata from "src/test/resources/formdata.json";
import fs from 'fs'
import { fileRead } from "src/utils/fileutils";
import { RESOURCE_FILE_PATH } from "src/constants/pathconst";

Given(/^I am open QA Demo page "([^"]*)"$/, async(url:string) => {
await browser.url(url);
await browser.maximizeWindow();
});

When(/^I fill the form$/, async() => {
    console.log("type of the value from json : ",typeof formdata.name);
    let name =formdata.name;
    let lname=formdata.lname;
    let email=formdata.email;

    console.log("name : ",name);
    console.log("lastname : ",lname);
    console.log("email : ",email);
        
	await $('#firstName').setValue(name);
    await $('#lastName').setValue("lname");
    await $('#userEmail').setValue(email);
});


When(/^I fill the form from files (.+)$/, async(fileName:string) => {
let formdata = fileRead(RESOURCE_FILE_PATH+fileName);
	await $('#firstName').setValue(formdata.name);
    await $('#lastName').setValue(formdata.lname);
    await $('#userEmail').setValue(formdata.email);
    await browser.pause(2000);
});
