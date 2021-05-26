import Webhelper from 'web-helper';
import React from 'react'
///////////////////////////Private Functions START//////////////////////////////
//On iOS, AsyncStorage is backed by native code that stores small values in a serialized dictionary and larger values in separate files.
//On Android, AsyncStorage will use either RocksDB or SQLite based on what is available.
let WebStorage = {
    /********************************************************************
    Save string in asyc storage
    @param key {String} - a constant which will be used as identifier while retriving or editing value
    @param value {String} - string what we will saving in async storage
    @param success_callback {function} - callback function to be executed when value saved successfuly
    @param failed_callback {function} - callback function to be executed when saving value failed
    *********************************************************************/
    saveAppData: function (key, value, cb){
      Webhelper.AppStorageManager.saveStringAsyncStorage(localStorage, key, value, cb);
    },
    /********************************************************************
    get string from Asycstorage
    @param key {String} - a constant which will be used as identifier while retriving or editing value
    @param success_callback {function} - callback function to be executed when value saved successfuly
    @param failed_callback {function} - callback function to be executed when saving value failed
    *********************************************************************/
    getAppData: function (key, cb){
      Webhelper.AppStorageManager.getStringAsyncStorage(localStorage, key, cb);
    },
    /********************************************************************
    remove value from Asycstorage
    @param key {String} - a constant which will be used as identifier while retriving or editing value
    @param success_callback {function} - callback function to be executed when value saved successfuly
    @param failed_callback {function} - callback function to be executed when saving value failed
    *********************************************************************/
    deleteAppData: function (key, cb){
      Webhelper.AppStorageManager.deleteValueAsyncStorage(localStorage, key, cb);
    }
}
export default WebStorage;
////////////////////////////Private Functions END///////////////////////////////
