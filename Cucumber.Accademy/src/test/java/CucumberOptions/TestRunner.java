package CucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/Features", glue = "StepDefinitions", plugin = { "pretty",
		"html:target/cucumber-report-html/report.html", "json:target/cucumber.json",  }

)

public class TestRunner {

	// thiếu test report
}