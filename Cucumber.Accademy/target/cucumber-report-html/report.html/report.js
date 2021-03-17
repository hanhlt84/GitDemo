$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Register new account",
  "description": "",
  "id": "register-new-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Register with all valid value",
  "description": "",
  "id": "register-new-account;register-with-all-valid-value",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Accademy Register page is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I input username \u003cusername\u003e and email \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I input password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I tick on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select Gender \u003cgender\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose status",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I fill DOB \u003cdob\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I register suscessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "register-new-account;register-with-all-valid-value;",
  "rows": [
    {
      "cells": [
        "username",
        "email",
        "password",
        "gender"
      ],
      "line": 16,
      "id": "register-new-account;register-with-all-valid-value;;1"
    },
    {
      "cells": [
        "Hanh",
        "test1@gmail.com",
        "12345678",
        "Female"
      ],
      "line": 17,
      "id": "register-new-account;register-with-all-valid-value;;2"
    },
    {
      "cells": [
        "Truc",
        "truc@gmail.com",
        "123456",
        "Male"
      ],
      "line": 18,
      "id": "register-new-account;register-with-all-valid-value;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Register with all valid value",
  "description": "",
  "id": "register-new-account;register-with-all-valid-value;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Accademy Register page is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I input username Hanh and email test1@gmail.com",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I input password 12345678",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I tick on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select Gender Female",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose status",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I fill DOB \u003cdob\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I register suscessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.accademy_register_page_is_opened()"
});
formatter.result({
  "duration": 7029938500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hanh",
      "offset": 17
    },
    {
      "val": "test1@gmail.com",
      "offset": 32
    }
  ],
  "location": "RegisterStep.i_input_username_and_email(String,String)"
});
formatter.result({
  "duration": 308625600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 17
    }
  ],
  "location": "RegisterStep.i_input_password(String)"
});
formatter.result({
  "duration": 107589600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.i_tick_on_checkbox()"
});
formatter.result({
  "duration": 158344200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 16
    }
  ],
  "location": "RegisterStep.i_select_gender(String)"
});
formatter.result({
  "duration": 295499700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.i_choose_status()"
});
formatter.result({
  "duration": 75133100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cdob\u003e",
      "offset": 11
    }
  ],
  "location": "RegisterStep.i_fill_dob(String)"
});
formatter.result({
  "duration": 66418900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.i_click_submit_button()"
});
formatter.result({
  "duration": 94018500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.i_register_suscessfully()"
});
formatter.result({
  "duration": 51141800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Register with all valid value",
  "description": "",
  "id": "register-new-account;register-with-all-valid-value;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Accademy Register page is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I input username Truc and email truc@gmail.com",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I input password 123456",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I tick on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select Gender Male",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose status",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I fill DOB \u003cdob\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I register suscessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.accademy_register_page_is_opened()"
});
formatter.result({
  "duration": 3258941500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Truc",
      "offset": 17
    },
    {
      "val": "truc@gmail.com",
      "offset": 32
    }
  ],
  "location": "RegisterStep.i_input_username_and_email(String,String)"
});
formatter.result({
  "duration": 279682400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "RegisterStep.i_input_password(String)"
});
formatter.result({
  "duration": 93589600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.i_tick_on_checkbox()"
});
formatter.result({
  "duration": 104937100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 16
    }
  ],
  "location": "RegisterStep.i_select_gender(String)"
});
formatter.result({
  "duration": 185742000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.i_choose_status()"
});
formatter.result({
  "duration": 88890500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cdob\u003e",
      "offset": 11
    }
  ],
  "location": "RegisterStep.i_fill_dob(String)"
});
formatter.result({
  "duration": 82662400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.i_click_submit_button()"
});
formatter.result({
  "duration": 108535300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.i_register_suscessfully()"
});
formatter.result({
  "duration": 40160800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Register with invalid value",
  "description": "",
  "id": "register-new-account;register-with-invalid-value",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "Accademy Register page is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I input username \u003cusername\u003e and email \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I receive error message \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "register-new-account;register-with-invalid-value;",
  "rows": [
    {
      "cells": [
        "username",
        "email",
        "message"
      ],
      "line": 26,
      "id": "register-new-account;register-with-invalid-value;;1"
    },
    {
      "cells": [
        "A",
        "test1@gmail.com",
        "Name should be at least 2 characters"
      ],
      "line": 27,
      "id": "register-new-account;register-with-invalid-value;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Register with invalid value",
  "description": "",
  "id": "register-new-account;register-with-invalid-value;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "Accademy Register page is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I input username A and email test1@gmail.com",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I receive error message Name should be at least 2 characters",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.accademy_register_page_is_opened()"
});
formatter.result({
  "duration": 3704523000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A",
      "offset": 17
    },
    {
      "val": "test1@gmail.com",
      "offset": 29
    }
  ],
  "location": "RegisterStep.i_input_username_and_email(String,String)"
});
formatter.result({
  "duration": 366994500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name should be at least 2 characters",
      "offset": 24
    }
  ],
  "location": "RegisterStep.i_receive_error_message(String)"
});
formatter.result({
  "duration": 38831000,
  "status": "passed"
});
});