'use-strict'

//On iOS, AsyncStorage is backed by native code that stores small values in a serialized dictionary and larger values in separate files.
//On Android, AsyncStorage will use either RocksDB or SQLite based on what is available.
 //import AsyncStorage from '@react-native-community/async-storage';

///////////////////////////Public Functions START//////////////////////////////
let LocalStorage = {

  /********************************************************************
  Save string in local storage

  @param key {String} - a constant which will be used as identifier while retriving or editing value
  @param value {String} - string what we will saving in async storage

  *********************************************************************/

  saveDataInLocalStorage: function (key, value, cb){

    localStorage.setItem(
      key,
      value,
      function(err, data){
        if(err){
          return cb(true);
        }
        return cb(false);
      }
    );

  },


  /********************************************************************
  Get data from local storage

  @param key {String} - a constant which will be used as identifier while retriving or editing value

  *********************************************************************/

  getDataFromLocalStorage: function (key, cb){

    var data = localStorage.getItem(key)
    if(data){
      return cb(false, data);
    }
    return cb(true);

  },


  /********************************************************************
  Delete data from local storage

  @param key {String} - a constant which will be used as identifier while retriving or editing value

  *********************************************************************/

  clearDataFromLocalStorage: function (key, value, cb){

    localStorage.removeItem(
      key,
      function(err, data){
        if(err){
          return cb(true);
        }
        return cb(false);
      }
    );

  }

}

export default LocalStorage;
////////////////////////////Public Functions END///////////////////////////////
