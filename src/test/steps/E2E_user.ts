import { Given, When, Then } from "@wdio/cucumber-framework";
// import userPage from "../../pages/userPage.ts";
import userPage from "src/pages/userPage";

// import { APIURI } from "../../config/APIconfig";
import{APIURI} from 'src/config/APIconfig';
import axios from "axios";

let axiosResponse:any; 
let data={
	"name":"sadab",
	"job":"leader"
};

Given(/^I am on page (.+)$/, async (url: string) => {
  // await browser.pause(5000);
  await userPage.openApp(url);
});

When(/^I perform (.+) user search$/, async (EndPoint: string) => {
  await userPage.setEndPoint(APIURI + EndPoint);
  await userPage.clickButton();
});

When(/^I make GET (.+) api call$/, async (EndPoint: string) => {
	axiosResponse=await axios.get(APIURI + EndPoint);

//   console.log("to Implement:", EndPoint);
});

Then(/^I validate the search result$/, async () => {
	//   await browser.pause(3000);
	console.log("printing response +++++++++++++++++++++++++++++++");
	let value2 = await userPage.getResponseText();
	console.log("Response Text : ", JSON.parse(value2));


  // await browser.pause(3000);
  console.log("printing status code +++++++++++++++++++++++++++++++");
  let value = await userPage.getStatusCode();
  console.log("status code : ", value);
  
  
  console.log("validating API response to UI response +++++++++++++++++++++++++++++++");
  console.log("API Response Text : ", axiosResponse.data);

  expect(value2).toEqual(JSON.stringify(axiosResponse.data));
});


When(/^I perform create use search for api (.+)$/, async (EndPoint:string) => {
	await userPage.setEndPoint(APIURI + EndPoint);
	// await userPage.setTypeCall("POST");
	// await browser.pause(3000);
	let dropdown=await $('#httpmethod')
	await dropdown.click();
	// await browser.pause(3000);
	let option=await $("//option[normalize-space()='POST']");
	// let option=await $("//option[contains(text(),'POST')]");
	await option.click();
	await browser.pause(3000);
	console.log("selected POST method");
	
	// await dropdown.selectByVisibleText("POST");
	// await dropdown.selectByIndex(1);
	// await userPage.addParamButton();
	// await userPage.setNameParam("name");
	// await userPage.setNameParamValue(data.name);
	// await browser.pause(3000);
	// await userPage.addParamButton();
	// await userPage.setNameParam("job");
	// await userPage.setNameParamValue(data.job);
	
	// await userPage.clickButton();
	await browser.pause(3000);
	let res= await axios.post(APIURI + EndPoint, data);
	console.log("response : ", res.data);
	
});

When(/^I make POST (.+) api call$/, async(endPoint:string) => {
	console.log("to Implement:");
	
});

Then(/^I validate the create user search result$/, async() => {
		//   await browser.pause(3000);
		console.log("printing response +++++++++++++++++++++++++++++++");
		let value2 = await userPage.getResponseText();
		console.log("Response Text : ", JSON.parse(value2));
	
	
	  // await browser.pause(3000);
	//   console.log("printing status code +++++++++++++++++++++++++++++++");
	//   let value = await userPage.getStatusCode();
	//   console.log("status code : ", value);
	
});
