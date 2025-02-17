import { Given,When,Then } from "@wdio/cucumber-framework";
import report from '@wdio/allure-reporter';


Given(/^I open application$/, async() => {
    // await browser.pause(10000);

    console.log("First step called ");
    await browser.url('https://the-internet.herokuapp.com/');
    report.addStep('Open the application');
    report.addAttachment('Open the application','','');
    await browser.maximizeWindow();
    await browser.pause(3000);
	
});

Then(/^I validate the heading "([^"]*)"$/, async(title) => {
    console.log("senecod step called ");
    
	const ele=await $('.heading');//.getText();
    await browser.pause(3000);
    report.addStep('capturing the heading frmo addtep');
    report.addAttachment('capturing the heading','','');
    console.log("printintg the ele Text : ", await ele.getText());
    
    await expect(ele).toHaveText(title);
    // report.addStep('validated the heading')
    report.addStep("validate", [], );
    report.addAttachment('validated the heading','','');
    
});
