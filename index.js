'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
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
 * identity: Takes in any value and returns the value unchanged.
 * 
 * @param: {*} value: the value to be returned
 * 
 * @returns: {*}: Returns the value unchanged
 * 
 */
 function identity(value){
     return value;
 }
 module.exports.identity = identity;
 
 /**
  * typeOf :
  */
  function typeOf(value){
    //input: a value
    //Output: the data type of value
    //Check if the value is an array
  if (Array.isArray(value)){
      return 'array';
      //check if the value is null
  } else if (value === null){
      return 'null';
      //chekc if the value is a date
  } else if (value instanceof Date){
      return 'date';
      //else return the typeof value
  } else {return typeof value}
}
module.exports.typeOf = typeOf;

   /**
  * first :
  */
   function first(array, num){
   let arr = [];
    if (!Array.isArray(array) || num < 0){
        return [];
    } else if (!num){
        return array[0];
    } else if (num > array.length){
        return array;
    }
   for (let i = 0; i < array.length; i++){
       if (i < num){
           arr.push(array[i])
       }
   } return arr;
}
module.exports.first = first;

   /**
  * last :
  */
  function last(array, num){
    //input: an array and a number
    //output: return the last <number> of items of <array>
    //create an array to hold the return values
    let arr = [];
    //Check is the array is an array or if the num is negative
    if (!Array.isArray(array) || num < 0){
       //return an empty array literal
        return [];
    //check is num is given
    } else if (!num){
        //return the last element of array
        return array[array.length -1];
    //check is num greater than the array's length   
    } else if (num > array.length){
       //return the entire argument array
        return array;
    }
    //look reverse through the array
   for (let i = array.length-1; i > 0; i--){
       //check if the number is greater than or equal too the current index
       if (num >= i){
          //add the elemnt to the return array
           arr.unshift(array[i])
       }
       //return arr
   } return arr;
}
module.exports.last = last; 

   /**
  * indexOf :
  */
  function indexOf(array, value){
    //loop through the array and compare the element ot the value
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        } 
    } return -1;
}
module.exports.indexOf = indexOf;

   /**
  * contains :
  */
  function contains(array, value){
    //input: an array and a value
    //output: boolean
    //try using indexOf 
    for (let i = 0; i < array.length; i++){
    //   return array[i] === value ? true : false; 
        if (array[i] === value){
            return true;
        } 
    }
     return false;
}
module.exports.contains = contains;

   /**
  * unique :
  */
  function unique(array){
    //input: an array
    //output: array with duplicates removed
    //constraint: must use indexOf
    //create a new array to hold the new values
    let arr = [];
   //
   for (let i = 0; i < array.length; i++){
       if (arr.indexOf(array[i]) === -1){
           arr.push(array[i]);
       }
   } return arr;
}
module.exports.unique = unique;

   /**
  * filter :
  */
  function filter(array, action){
    //input: array  and function
    //output: return the element that pass true from the function parameter
   let arr = [];
    for (let i = 0; i < array.length; i++){
       if (action(array[i], i, array) === true){
           arr.push(array[i])
       }
       }
       return arr;
}
module.exports.filter = filter; 
   /**
  * reject :
  */
  function reject(array, action){
    let arr = [];
    for (let i = 0; i < array.length; i++){
       if (action(array[i], i, array) === false){
           arr.push(array[i])
       }
       }
       return arr;
}
module.exports.reject = reject;

   /**
  * partition :
  */
  function partition(array, action){
  //loop through the array 
  let arrTrue = [];
  let arrFalse = [];
  let arrReturn = [];
  for (let i = 0 ; i < array.length; i++){
      if (action(array[i], i , array) === true){
          arrTrue.push(array[i]);
      }else if (action(array[i], i, array) === false){
          arrFalse.push(array[i]);
      }
  } arrReturn.push(arrTrue, arrFalse);
  return arrReturn;
}
module.exports.partition = partition;

  /**
  * map:
  */
  function map(collection, action){
    //input: collection, array or object, and a function
    //output: a new array of altered values
    let arr = [];
     if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            arr.push(action(collection[i], i, collection));
        } 
    } 
    //if the collection is an object
    else if (typeof collection === 'object'){
        for (let key in collection){
            arr.push(action(collection[key], key, collection))
    }
    }
    return arr;
}
module.exports.map = map;

  /**
  * pluck :
  */
  function pluck(array, property){
   //input: an array of objects and a property
   //output: an array with the property values
 
  return array.map(function(element){
      return element[property];
  });
}
module.exports.pluck = pluck;

  /**
  * every:
  */
  function every(collection, action){
    //input: a collection and function
    //output: true or false
   if (!action){
       if (Array.isArray(collection)){
           for (let i = 0; i < collection.length; i ++){
               if (collection[i] === true){
                   return true
               } 
           } return false;
       }
   }
   
   if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (action(collection[i], i, collection) === false){
                return false;
            }
        } return true
    }
    
    //if the collection is an object
    else if (typeof collection === 'object'){
        for (let key in collection){
        if (action(collection[key], key, collection) === false){
            return false;
        }
    } return true;
    }
}
module.exports.every = every;

  /**
  * some :
  */
  function some(collection, action){
       if (!action){
       if (Array.isArray(collection)){
           for (let i = 0; i < collection.length; i ++){
               if (collection[i] === true){
                   return true
               } 
           } return false;
       }
   }
   
   if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (action(collection[i], i, collection) === true){
                return true;
            }
        } return false
    }
    
    //if the collection is an object
    else if (typeof collection === 'object'){
        for (let key in collection){
        if (action(collection[key], key, collection) === true){
            return true;
        }
    } return false;
    }
}
module.exports.some = some;

  /**
  * reduce :
  */
 function reduce(array, action, seed){
 if(seed !== undefined){
        //this is the accumulator value
        let result = seed;
        //loop using .ech function
        each(array, function(element, index, array){
            //assign the result of passing each elemnt to the function to the result variable
            result = action(result, element, index)
            //the each/foreach does not return anything
        })
        return result;
    } else {
        //if no seed given, array[0] is seed
        let result = array[0];
        each(array, function(element, index, array){
            //assign the result of passing each elemnt to the function to the result variable
            //only reassing if index is not zero
            if (index !== 0){
            result = action(result, element, index)
        
        }    //the each/foreach does not return anything
        })
        return result;
    }
}
module.exports.reduce = reduce;

  /**
  * extend :
  */
  function extend(object1, object2, ...object){
    //input: at least two maybe more objects
    //output: object1 (first parameter) with all other object parameter data added to it
    
    //return object1 with all other object data added to it
    return Object.assign(object1, object2, ...object)
}
module.exports.extend = extend; 