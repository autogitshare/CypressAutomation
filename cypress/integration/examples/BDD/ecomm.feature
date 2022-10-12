Feature: End to end Ecommerce validation
    application Regression1
    @Smoke
    Scenario: Filling the form to shop
        Given I open ECommerce Page
        When I fill the form details
            | name | gender |
            | bobz | Female |

        Then validate the forms behaviour
        And select the Shop Page