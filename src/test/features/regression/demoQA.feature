Feature: check QA demo with json file input

Scenario: Validate demo form QA
    Given I am open QA Demo page "https://demoqa.com/automation-practice-form"
    When I fill the form

Scenario Outline: Validate demo form QA from data file
    Given I am open QA Demo page "https://demoqa.com/automation-practice-form"
    When I fill the form from files <fileName>

    Examples:
        | fileName |
        | formdata2.json |
        | formdata3.json |
    