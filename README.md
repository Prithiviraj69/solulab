# Solulab-Node.js-Task
A RESTful API that can /create/read/update/delete Product and Category data from a database.

There is only 5 request in this API, 
1. create Request (POST) : Create request is fro save Product Data with there Category in Database, But the Database table is seperate for both product detail and category.
2. read Request (GET) : This request return the particular data of product, you also need to send categoryId with request  for searching particular product in database.
3. readAll Requrest (GET) : This request return all the Data of Products and there Category.
4. update Request (POST) : This request is for update the details of product , you need to send categoryId with request for searching particular product in database.
5. delete Request (POST) : This is for delete a particular product, you need to send categoryId with request for searching particular product in database and delete it.

NOTE : Before testing the API you need to start the server. Download the code and and run "npm i" command to install all the dependencies and after when all dependencies is insalled , run "npm start" command to start the server.

