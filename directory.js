'use strict'

module.exports = class Directory{

    // initializing a new instance with an empty
    // array of staff.
    constructor(){
        this.directory = [];
    }

    
    // returning an array of staff for a particular
    // instance of Directory
    getDirectory(){
        return this.directory;
    }

    // adding a given staff to the directory
    // of the calling instance
    addStaff(staff){
        this.getDirectory().push(staff);
    }

    // returning a single staff with the specified staffID.
    // returns "undefined" if no staff's id matches the
    // provided staffID
    getStaff(staffID){
        const staff = this.directory.find(
            s => { return s.id == staffID;});
        if(staff) return staff;
    }


    // Deleting the staff with the specified staffID.
    // Returns the deleted staff if found,
    // otherwise, returns "undefined".
    deleteStaff(staffID){
        const staff = this.directory.indexOf(
            this.directory.find( s => { return s.id == staffID;}));
        if(staff !== -1) return this.directory.splice(staff, 1)[0];
    }

}