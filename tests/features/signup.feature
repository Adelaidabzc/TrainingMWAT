Feature: Sample feature file to illustrate app and browser tests
  
  @androidApp
  Scenario Outline: Signup with invalid credentials
    Given Im on the signup page
    When I signup with invalid credentials <username> and <password>
    Then I should see an error message

    Examples:
      | username  | password              | 
      | james     | SuperSecretPassword!  |
      | tomsmith  | SuperPassword!        |

  @androidApp
  Scenario: Signup with valid credentials
    Given Im on the signup page
    When I signup with new valid credentials
    Then I should see the home page