import { ChainablePromiseElement } from 'webdriverio';

export const selectDropdown =async (selectDropdownEle:ChainablePromiseElement<Promise<WebdriverIO.Element>> , value:string)=>{
    // const selectDropdown = 
    console.log("value to be selected :",value);
    await (await selectDropdownEle).waitForClickable();
    
    await (await selectDropdownEle).selectByVisibleText(value);
    // await selectDropdown.selectByVisibleText(value);
}