import { When } from "@wdio/cucumber-framework";

When(/^I click on first file$/, async ()=> {
    const fileElement = $("//a[contains(@href, 'download')]");
    await fileElement.click();
    await browser.pause(6000)
})