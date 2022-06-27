Feature: Sample feature file to illustrate app and browser tests

  @androidApp
  Scenario: Login with invalid credentials
    Given Im on the login page
    When I login with invalid credentials
    Then I should see an error message
  
  @androidApp
  Scenario: Login with valid credentials
    Given Im on the login page
    When I enter valid credentials
    Then I should see the home page

  
