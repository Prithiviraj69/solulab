/*These are four utility functions that perform basic CRUD (Create, Read, Update, and Delete) 
operations on a MongoDB model */


/* The create function creates a new document in the specified model using the create method and returns
 the created document. */
const create = async(model, data) => {
    try {
        const doc = await model.create(data);
        return doc ? doc : false;
    } catch (error) {
        return false;
    }
};

/*The findOne function finds a single document in the specified model that matches the provided data and
returns it. */
const findOne = async(model, data) => {
    try {
        data.isDeleted = false;
        const doc = await model.findOne(data);
        return doc ? doc : false;
    } catch (error) {
        return false;
    }
};

/*The find function finds all documents in the specified model that match the provided data 
and returns them.  */
const find = async(model, data) => {
    try {
        if (!data) {
            data = {};
        }
        data.isDeleted = false;
        const doc = await model.find(data);
        return doc ? doc : false;
    } catch (error) {
        return false;
    }
};

/*The deleteOne function finds and updates a single document in the specified model that matches the provided 
data and sets the isDeleted field to true. All the functions return false if there is an error. */
const deleteOne = async(model, data) => {
    try {
        console.log("deleteone");
        console.log(data);
        data.isDeleted = false;
        const doc = await model.findOneAndUpdate(data, {
            isDeleted: true,
        });
        // console.log("got data", doc);
        return doc ? doc : false;
    } catch (error) {
        new Error(error);
    }
};


module.exports = { create, findOne, find, deleteOne };