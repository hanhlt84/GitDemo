package CommonFunctions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import junit.framework.Assert;

public class Common {
	
	WebDriver driver;
	
	public By INPUT_NAME = By.cssSelector("input[name='name'][required='']");
	public By INPUT_EMAIL = By.cssSelector("input[name='email']");
	public By INPUT_PASS =  By.cssSelector("input#exampleInputPassword1");
	public By CKB_ICECREAMS = By.cssSelector("input#exampleCheck1");
	public By DROPDOWN_GENDER = By.cssSelector("select#exampleFormControlSelect1");
	public By CBX_STATUS = By.cssSelector("input[name='inlineRadioOptions']");
	public By SL_DOB = By.cssSelector("input[name='bday']");

	public By BTN_SUBMIT = By.cssSelector("input[value='Submit']");
	
	public By MSG_SUCCESS = By.xpath("//strong[text()='Success!']");
	public By MSG_ERROR = By.xpath("//div[@class='alert alert-danger']");
	
	public void lauchBrowser(String browser) {
		System.setProperty("webdriver.chrome.driver",".\\src\\browsers\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
		driver.get(browser);
		
	} 
	
	public void inputData(By locator, String text) {
		
		driver.findElement(locator).sendKeys(text);
		
		}
	
	public void click(By locator) {
		
		driver.findElement(locator).click();
		
	}
	
	public void selectDropDownList(By locator, String item) {
		Select dropdown = new Select(driver.findElement(locator));
	     dropdown.selectByVisibleText(item); 
		
	}
	
	public void verifyText(By locator, String msg) {
		String actualResult = driver.findElement(locator).getText();
		String expectedResult = msg;
		Assert.assertEquals(actualResult, expectedResult);
	}
	
	public void verifyTextOnDropDown(By locator, String item) {
		String actualItem = new Select(driver.findElement(locator)).getFirstSelectedOption().getText();
		String expectedItem = item;
		Assert.assertEquals(actualItem, expectedItem);
	}
	
	
	public void verifyCheckbocIsChecked(By locator) {
		Assert.assertEquals(driver.findElement(locator).isSelected(),true);
		
		
	}
	
	public void selectDateOnCalendar(By locator, String date) {
		driver.findElement(locator).sendKeys(date);
	}

	
	public void refreshBrowser() {
		driver.navigate().refresh();
	}
	
	public void closeBrowser() {
		driver.close();
	}

}
