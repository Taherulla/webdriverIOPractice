Feature: Validate download functionality

    Scenario Outline: Test File download
        Given I am on page <PageUrl>
        When I click on first file
        # Then I validate downloaded file extension

        Examples:
            | PageUrl                                     |
            | https://the-internet.herokuapp.com/download |