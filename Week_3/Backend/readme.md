1. Generate package.json
2. Create express server
3. Install mongoose and connect to MongoDB server

REST API ----- MongoDB native driver ---> DB Server
REST API ----- Mongoose ODM tool ---> DB Server

4. Build USER REST API
            - Create User
            - Read User all users
            - Read User by ID
            - Update User by ID
            - Delete User by ID

5. Create Schema and Model of the Resource(User)
6. Create UserAPI and Define the routes

---> Handling unavailable resources
---> Validators during update
---> Hashing password (bcryptjs)
---> Unique fields
---> Refined version of error handling middleware

hello ---> adags33467eygasyd7162rd8g8g68tg ---> hello || we can decode this. This is called encryption and decryption.
hello ---> 2fb3jh5h3j4hj4hj4454534bgvuy4u5 || This is called hashing. Once we converted into the encrypted key we cannot decrypt it.



### User Authentication(Login)
--- Sumbit credentials and get tokens


--- request -----> Public routes (By anyone)
--- request -----> middleware -----> Protected routes (By authenticated users only)
