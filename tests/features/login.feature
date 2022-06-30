Feature: Sample feature file to illustrate app and browser tests

  @androidApp
  Scenario Outline: Login with invalid credentials
    Given Im on the login page
    When I login with invalid credentials <username> and <password>
    Then I should see an error message

    Examples:
      | username  | password              | 
      | james     | SuperSecretPassword!  |
      | tomsmith  | SuperPassword!        |

  @androidApp
  Scenario: Login with valid credentials
    Given Im on the login page
    When I enter valid credentials
    Then I should see the home page

  
