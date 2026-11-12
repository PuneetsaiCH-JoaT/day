
const { Builder, By, until } = require("selenium-webdriver");

async function test() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://www.bing.com");

        // Test 1: Check title
        console.log("Test 1:", await driver.getTitle());

        // Test 2: Search something
        let searchBox = await driver.findElement(By.name("q"));

        await searchBox.sendKeys("Selenium");
        await searchBox.submit();

        await driver.wait(until.urlContains("/search"), 15000);

        console.log("Test 2: Search completed");

        // Test 3: Check URL
        console.log("Test 3:", await driver.getCurrentUrl());

        // Keep Chrome open for 3 seconds
        await driver.sleep(1000);

    } catch (error) {
        console.log("Test failed:", error.message);

    } finally {
        await driver.quit();
    }
}

test();
