Feature: The first Demo testing

@smoke
  Scenario: As auser I crete my Demo test
    Given I open application
    Then I validate the heading "Welcome to the-internet"
  
  Scenario: second time test for the failed test
    Given I open application
    Then I validate the heading "Welcome to the-internet123"