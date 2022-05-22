Feature: Sauce Demo Shopping

    Scenario: End to end journey
        Given User is on Sauce demo page
        When User logged in with "standard_user" "secret_sauce"
        And User add fleece jacket to the cart
        And User checkout the product
        And User submits his personal information
        And User confirmed the product
        Then User sees order confirmed
