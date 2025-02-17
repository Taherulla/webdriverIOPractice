import { Given,Then } from "@wdio/cucumber-framework";

Given(/^I open url$/, async() => {
    await browser.maximizeWindow();
	await browser.url('/');
});

Then(/^I validate the title$/, async() => {
	let title=await browser.getTitle();
    console.log('title is : ', title);
    
});
