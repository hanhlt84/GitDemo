package StepDefinitions;

import CommonFunctions.Common;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterStep extends Common {
	 
	Common reg = new Common();

	    @Given("^Accademy Register page is opened$")   //regular epression regex
	    public void accademy_register_page_is_opened() throws Throwable {
	    	reg.lauchBrowser("https://rahulshettyacademy.com/angularpractice/");
	    }

	    @When("^I input username (.+) and email (.+)$")
	    public void i_input_username_and_email(String username, String email) throws Throwable {
	    	
	    	//input username
	    	reg.inputData(INPUT_NAME, username);
	    	
	    	//input email
	    	reg.inputData(INPUT_EMAIL, email);
	    }
	    
	    @Then("^I register suscessfully$")
	    public void i_register_suscessfully() throws Throwable {
	    	reg.verifyText(MSG_SUCCESS,"Success!");
	    }


	    @Then("^I receive error message (.+)$")
	    public void i_receive_error_message(String message) throws Throwable {
	        reg.verifyText(MSG_ERROR, message);
	    }
	    
	    @And("^I input password (.+)$")
	    public void i_input_password(String password) throws Throwable {
	    	reg.inputData(INPUT_PASS, password);
	       
	    }

	    @And("^I tick on checkbox$")
	    public void i_tick_on_checkbox() throws Throwable {
	    	reg.click(CKB_ICECREAMS);
	    	reg.verifyCheckbocIsChecked(CKB_ICECREAMS);
	    	
	    }

	    @And("^I select Gender (.+)$")
	    public void i_select_gender(String gender) throws Throwable {
	    	reg.selectDropDownList(DROPDOWN_GENDER, gender );
	       	reg.verifyTextOnDropDown(DROPDOWN_GENDER, gender);
	    }

	    @And("^I choose status$")
	    public void i_choose_status() throws Throwable {
	    	reg.click(CBX_STATUS);
	    }

	    @And("^I fill DOB (.+)$")
	    public void i_fill_dob(String dob) throws Throwable {
	    	reg.selectDateOnCalendar(SL_DOB, dob);
	    }

	    
	    @And("^I click Submit button$")
	    public void i_click_submit_button() throws Throwable {
	       // click on Submit button
	    	reg.click(BTN_SUBMIT);
	    	
	    } 
	    
	    @Given("^I refresh browser$")
	    public void i_refresh_browser() throws Throwable {
	       reg.refreshBrowser();
	    }
	    	    
	    @When("^I close browser$")
	    public void i_close_browser() throws Throwable {
	       reg.closeBrowser();
	       
	    }
}
