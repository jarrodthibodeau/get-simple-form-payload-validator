# get-simple-form-payload-validator
Lambda built for validating get-simple-form payload to reduce the obnoxious amounts of spam you get from bots.

## Setup
To use the form-payload-validation in your get-simple-form, you just need to do the following

1. Replace the form actions URL to [https://get-simple-form-payload-git-master.jarrodthibodeau.now.sh/]()

2. Take the URL that used to be the form's action URL and set it to a new hidden input with the name `form_destination`

3. Done! 

## How it works
The validator accepts these current form input names
 1. name
 2. email
 3. message
 4. form_destination
 5. redirect_to

The validation ensures that both name and email meet the standards of a you know, a name and email. If the validation succeeds, you will be redirected to the page you expect and receive an email. If not, you will still be redirected so that bots and spammer get the assumption that their job is done. 

To ensure that your end users are filling in email and name correctly, please use form validation on the client-side.
