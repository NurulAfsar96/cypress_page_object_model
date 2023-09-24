
export function sendData(xpath, value)
{
    return cy.xpath(xpath).type(value);
}

export function buttonClick(xpath)
{
    return cy.xpath(xpath).click();
}

export function verifyTitle(expectedTitle)
{
    return cy.title().should('eq', expectedTitle);
}

export function fullScreenshot(screenshotName)
{
    return cy.screenshot(screenshotName);
}

export function specificScreenshot(xpath, screenshotName)
{
    return cy.xpath(xpath).screenshot(screenshotName);
}

export function time()
{
    return cy.wait(5000);
}