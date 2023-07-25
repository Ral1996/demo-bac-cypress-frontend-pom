Feature: Test Login Page For Demo BAC

    This is a test automation demo with Cypress, Cucumber and NodeJS tools and technologies.

    Scenario: User Should Be Able To Login Using Valid Credentials
        Given Visit Practice Test Automation Website
        Then User Provide Username
        Then User Provide Password
        Then User Click On Login Button To Log In Into The Practice Test Automation Website
        Then User Read The Text Of Successfully Log In Into The Website
        Then User Click On Logout Button For Reply To The Login Website