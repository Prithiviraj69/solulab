const catchAsync = require('../helpers/catchAsync.js')
const Category = require('../models/categoryModel.js')
const { create, findOne } = require('../helpers/common.js');


// his is an Express.js route handler function that creates a new category in the database. 
// It imports the catchAsync utility function to handle any errors that occur, the Category model 
// to interact with the categories collection in the database, and the create function to create a 
// new category. 
const createCategory = catchAsync(async(req, res, next) => {
    try {
        const {

            categoryId,
            categoryName
        } = req.body;


        const data = {
            categoryId,
            categoryName

        };

        const category = await create(Category, data);

        category
            ?
            res.status(200).json({
                message: "Category create success",
                data: category,
            }) :
            res.status(400).json({
                message: "Category Create failed",
            });
    } catch (error) {
        next(new Error(error));
    }

})


module.exports = { createCategory };

/*

It exports an object with a single key-value pair: createCategory. This key is the name of the route
 handler function, which is exported so that it can be imported and used in another file, such as an 
 index.js file.

When the createCategory function is called, it first destructures the request body to get the categoryId 
and categoryName properties. It then creates an object data with these properties. Next, it calls the 
create function and passes in the Category model and data object as arguments.

If the category has been created successfully it will return a message of "Category create success" 
and the data of the category. Otherwise, it will return a message of "Category Create failed" .

If there is any error it will be caught by the try-catch block and passed to the next function, 
which will trigger the next middleware function in the Express.js middleware chain to handle the error.



 */