@login
Feature: Login functionality

    Scenario Outline: Login
        Given User is on Sauce demo page
        When User logged in with "<user>" "<pass>"
        Then User should login successful

        Examples:
            | user          | pass         |
            | standard_user | secret_sauce |
            | standard_user | secret_sauce |