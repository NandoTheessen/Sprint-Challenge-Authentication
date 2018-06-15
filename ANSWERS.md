<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
Middleware is a function that we pipe our requests through before reaching our endpoints.
Sessions are small JS objects that save information about the client in order to allow the client to stay loggedin for a predetermined amount of time and access the resources desired.
bcrypt is a key derived function that is used to hash (and salt) passwords. It adds the time / rounds concept to our hashes which makes them a lot more secure. Also it adds a random salt to the hashes to only bcrypt can compare the hashes
JWT has similar goals to sessions, the process is a little different though. 
The server creates a token upon authentication which is used by the client to access the desired resources. it is also handled by the client until it expires.

2.  What does bcrypt do in order to prevent attacks?

Hashes and salts our passwords, also doesn't hash once but as many rounds as we want it to (hence key derived funciton)

3.  What are the three parts of the JSON Web Token?

header, payload, secret