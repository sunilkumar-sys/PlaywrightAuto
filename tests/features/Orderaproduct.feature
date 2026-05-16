Feature: order a product from the website

    Scenario: Login into application and order the product

        Given User Login into application with "sk876sunil@gmail.com" and "Tcs@1234"
        When User search for the product "ZARA COAT 3" in the homepage
        Then Add the product into the cartpage
        Then verify if the product added to cart page
        When User enter the payment details and order the product
        Then verify the order details in summary page
