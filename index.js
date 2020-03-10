'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Returns the input value unchanged.
 * @param {Any Datatype} value: Any value to be returnend as itself.
 * 
 * @return {Any Datatype}: Any value as dertermaned by our input value.
 */
 function identity(value){
    return value;
}

module.exports.identity = identity;


/**
 * typeOf: Returns the datatype as a string.
 * @param {Any Datatype} value: Any value to be inputed
 * 
 * @return {String}: Will return a string stating the data type.
 */

function typeOf(value){
    if (Array.isArray(value) === true){
        return "array";
    } else if (value === null){
        return 'null';
    } else {
        return typeof value;
    }
}

module.exports.typeOf = typeOf;

/**
 * first: used to select array indexes to th nth value.
 * @param {Array} array: a list of values
 * 
 * @param {Number} number: the number of spaces we will travle up an array.
 * 
 * @return {Array}: Return the array to the number of spaces equal to number, as 
 * long asnumber is not greater than array.length. we will return an empty array 
 * if the values number is negative, or array is not an array. if the number is 
 * not a number we will just return the first index of the array. 
 * 
 */
 
 function first(array, number){
    const newArray = [];
    let end = 0;
    if (!Array.isArray(array) || number < 1){
        return newArray;
    }
    if (typeof number !== 'number'){
        return array[0];
    }
    number > array.length ? end = array.length: end = number;
    for (let i = 0; i < end; i++){
        newArray.push(array[i]);
    }
        
    return newArray;
    
}

module.exports.first = first;

/**
 * last: used to select array indexes to th nth value starting from the last index.
 * @param {Array} array: a list of values
 * 
 * @param {Number} number: the number of spaces we will travle down an array.
 * 
 * @return {Array}: Return the array to the number of spaces equal to number from last index, 
 * as long as number is not greater than array.length then we return the array. We will 
 * return an empty array if the values number is negative, or array is not an array. if the number is 
 * not a number we will just return the first index of the array. 
 * 
 */

function last(array, number){
    const newArray = [];
    if (!Array.isArray(array) || number < 1){
        return newArray;
    }
    if (typeof number !== 'number'){
        return array[array.length - 1];
    }
    if (number >= array.length){
        return array;
    }
    for (let i = array.length - 1; i >= array.length - number; i--){
        newArray.unshift(array[i]);
    }
    return newArray;
}

module.exports.last = last;

/**
 * indexOf: Will return the index number of a value in an array, or -1 if value 
 * is not found.
 * 
 * @param {Array} array: the collection we will search through.
 * 
 * @param {Value} value: the data we are checking for in the array.
 * 
 * @return {Number}: if the value is found in the array the index number
 * of the first value will be returned. if the value is not found indexOf will return -1.
 */
 
 function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: checks if a value is in an array return true if so, false otherwise.
 * 
 * @param {Array} array: the collection we will search through.
 * 
 * @param {Value} value: the value we are checking for.
 * 
 * @return {Boolean}: If the value is stricktly equal to a value in the array true 
 * will be returned.  False will be returened in all other cases.
 */


function contains(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return true;
        }
    }
    return false;
}

module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * 
 * @param {Function} action: The Function to be applied to each value in the 
 * collection. Constrant determanins if array of object collection.
 * 
 */
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Used to loop through an array to select only unique values to be added to a new array.
 * 
 * @param {Array} array: the collection we will loop though to check for unique values.
 * 
 * @return {Array}: after finding each unique value and pushed into the new array, 
 * the new array is returned
 */

function unique(array){
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if (indexOf(newArray, array[i]) === -1){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
module.exports.unique = unique;

/**
 * filter: Search through an array returning an array of only values that are found true by the test funtion.
 * 
 * @param {Array} array: the collection we will search through
 * 
 * @param {Function} action: a function that will use each to test values in the array to see 
 * if the value is truthy and have the value be stored in a newArray.  If the function does not return a 
 * boolean, we will still look to see if the value is tuthy before puting it into the return array.
 * 
 * @return {Array}: after each has seen each element, the truty array will be returned
 */
 
function filter(array, action){
    const newArray = [];
    each(array, function(element, i, array){
        if (action(array[i], i, array) === true){
            newArray.push(array[i]);
        }
    });
    return newArray;
}
module.exports.filter = filter;

/**
 * reject: search through an array and return values that are found to be falsy by the test funtion
 * in an array.
 * 
 * @param {Array} array: the collection we will search through
 * 
 * @param {Function} action: a function that will use each to test values in the array to see 
 * if the value is falsy and have the value be stored in a array. If the function does not return a 
 * boolean, we will still look to see if the value is falsy before puting it into the return array.
 * 
 * @return {Array}: after each has seen each element, the falsy array will be returned
 */

function reject(array, action){
    return filter(array, function(element, i, array){
        return (!(action(element, i, array)));
    });
}
module.exports.reject = reject;

/**
 * partition: Seperat each value tested by the fuction where truthy vales are put into an array 
 * and the falsy values into a seperate array, aftewards placing both arrays into a singel array holding 
 * both the truthy and falsy arrays.
 * 
 * @param {Array} array: the array that is searched through.
 * 
 * @param {Function} action: the function that we will uses to test wether each element is 
 * truthy or falsy. If the function does not return a boolean, we will still look to see if the value 
 * is tuthy or falsy before puting it into the respective array.
 * 
 * @return {Array}: after each element is filtered/rejected we return an array with 
 * both a truthy and falsy array.
 */


function partition(array, action){
    let truthy = filter(array, function(element, i, array) {
        return action(element, i, array);
    });
    let falsy = reject(array, function(element, i, array) {
        return action(element, i, action);
    });
    return [truthy, falsy];
}
module.exports.partition = partition;

/**
 * map: loop through a collection preforming an action on each element and returning 
 * the affected elements in an array.
 * 
 * @param {Array or Object} collection: the collection we will iterate through
 * 
 * @param {Function} action: the change that will happen to each element in the collection.
 * 
 * @return {Array}: the new array with the elements that have been acted upon.
 */
 
function map(collection, action){
    const newArray = [];
    each(collection, function(element, i, array){
        newArray.push(action(element, i, array));
    });
    return newArray;
}
module.exports.map = map;

/**
 * pluck: Iterate over an array of objects to make an array of string values.
 * 
 * @param {Array} array: an array of objects that we will iterate though.
 * 
 * @param {String} key: the string we will use to find the values.
 * 
 * @return {Array}: an array of all the values from the objects
 */
 

function pluck(array, key){
    return map(array, function(element, i, array){
        return element[key];
    });
}
module.exports.pluck = pluck;

/**
 * every: a function that searches through a collection to return true if all values
 * are truthy, false if any value is falsy.
 * 
 * @param {Array or Object} collection: the collection we will iterate through
 * 
 * @param {Function} action: used to test if values are false
 * 
 * @return {Boolean}: after checking each value, and making sure there is a function, 
 * if any value is not true or unable to return true we will return false. Only if 
 * all values are truthy will we return true. If no function is given we will return true.
 */

function every(collection, action){
    let work = true;
    if (action){
        each(collection, function(element, i, array){
            if (action(array[i], i, array) === false){
                work = false;
            }
        });
    } else {
        each(collection, function(element, i, array){
            if (element === false){
                work = false;
            }
        });
    }
    return work;
}
module.exports.every = every;

/**
 * some: a function that searches through a collection to return true if any values
 * are truthy, false if all values are falsy.
 * 
 * @param {Array or Object} collection: the collection we will iterate through
 * 
 * @param {Function} action: used to test if values are true
 * 
 * @return {Boolean}: after checking each value, and making sure there is a function, 
 * if any value is found to be true we will return true. Only if all values are falsy
 * will we return false. If no function is given we will return false.
 */


function some(collection, action){
    let work = false;
    if (action){
         each(collection, function(element, i, array){
            if (action(array[i], i, array) == true){
                work = true;
            }
        });
    } else {
        each(collection, function(element, i, array){
            if (element === true){
                work = true;
            }
        });
    }
    return work;
}
module.exports.some = some;

/**
 * reduce: used to fold the values of an array into a singel value.
 * 
 * @param {Array} array: the collection we will iterate through.
 * 
 * @param {Function} action: the previous result being added to the curent result
 * 
 * @param {value} seed: the optional value that sets the start point, if there is 
 * no seed the first element will be the start.
 * 
 * @return {Value}: will return a value that has been folded.
 */


function reduce(array, action, seed){
    let previousResult;
    //if there is a seed
    if (seed !== undefined){
        previousResult = seed;
        //use each to gain acses to each value in the array
        each(array, function(e, i, a){
            // calling funtion for every element passing previous result, element, index
            previousResult = action(previousResult, e, i, a);
        });
    //if no seeduse the first element equal the seed
    } else {
        previousResult = array[0];
        //implement a for loop to start at the array[0]
        for (let i = 1; i < array.length; i++){
            previousResult = action(previousResult, array[i], i, array);
        }
    }
//return previous result
 return previousResult;
}
module.exports.reduce = reduce;

/**
 * extent: used to copy and update an object with many objects.
 * 
 * @param {Object} object1: the object we will be updating.
 * 
 * @param {Object} ...object: the objects we will use to update object1
 * 
 * @return {Object}: We will return object1 after it has copied and updated from all the other objects.
 */

function extend(object1, ...object){
    for (var i = 0; i < object.length; i++){
        Object.assign(object1, object[i]);
    } return object1;
}
module.exports.extend = extend;
