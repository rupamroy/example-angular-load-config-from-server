# example-angular-load-config-from-server
Say you need to make a fetch from the server (node/web api/ java spring etc) before any of the code written in controllers
start executing. 
How will you do that? The fetch call is async and if you write it in any such call in the config phase of the angular app
then the callback will be fired after the controller code has run since async calls will not block code execution. 

In such a scenario this code shows how can you achieve the same using route resolvers. 
