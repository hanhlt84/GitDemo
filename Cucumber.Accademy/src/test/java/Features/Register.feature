Feature: Register new account 

Scenario Outline: Register with all valid value 
	Given Accademy Register page is opened 
	When I input username <username> and email <email> 
	And I input password <password> 
	And I tick on checkbox 
	And I select Gender <gender>
	And I choose status 
	And I fill DOB <dob> 
	And I click Submit button 
	Then I register suscessfully 
	
	
	Examples: 
		|username|		email	|password | gender|
		|Hanh	 |test1@gmail.com|12345678| Female|
		|Truc	 |truc@gmail.com | 123456 | Male  |
		
Scenario Outline: Register with invalid value 
	Given Accademy Register page is opened 
	When I input username <username> and email <email> 
	Then I receive error message <message> 
	
	Examples: 
		|username		|		email	|message							 |
		|	A     		|test1@gmail.com|Name should be at least 2 characters|
		
		
		
		
