#RESTful API Activity - Jojo J. Malangis
##Best Practices Implementation
1. Environment Variables:
    -Why did we put 'BASE_URI in '.env' instead of hardcoding it?

    -Answer: We put BASE_URI in the .env file instead of hardcoding it to keep sensitive or changing information like URLs safe and separate from our code.

2. Resource Modeling:
    -Why did we use plural nouns (e.g., '/dishes') for our routes?

    -Answer: We use plural nouns like '/dishes' for routes because it follows the standard REST API rule where the endpoint shows a collection of items. Using plural makes it clear that '/dishes' means many dishes while '/dishes/1' means one specific dish, so everyone understands the structure faster.

3. Status Codes:
    -When do we use '201 Created' vs '200 OK'?
    -Why is it important to return '404' instead of just an empty array or generic error?

    -Answer: The status code '201 Created' gets used when we successfully create a new resource through the POST method which adds a new dish while the status code 200 OK gets used to show successful reading and updating operations which do not create any new content. 
    
    The system should return 404 instead of empty arrays or generic errors because 404 provides clear information to users and applications that the requested item does not exist in the system.
    
4. Testing:
