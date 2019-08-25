'use strict'

// importing all dependencies
const express = require('express');
const Directory = require('./directory');
const bodyParser = require('body-parser'); //middle-ware for parsing requests' body


const app = express();

//setting the port to listen on.
const port = process.env.PORT || 5000;

//creating a new instance of Directory 
const devC = new Directory();

//add some staff to the created directory
// for testing purpose.
devC.addStaff({id: 1,
    name: 'Tunde Ajagbe',
    email: 'tundeajagbea@gmail.com',
    phone: 8106887783});
devC.addStaff({
    id: 2,
    name: 'John Akigbe',
    email: 'johna@john.com',
    phone: 8106887788});
devC.addStaff({
    id: 3,
    name: 'Ayomikun Emmanuel',
    email: 'Ayomikun@okun.com',
    phone: 8106887783});

//setting app to use body-parser for
//proccessing the "body" of a request
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//handle request to get the all the staff
//in "this" directory.
//Returns an array in JSON form
app.get('/api/directory', function(req, res){
    res.status(200);
    res.json(devC.getDirectory());

});


//handle the request to get a single staff
//(with the specified :staffID) from "this" directory
//Returns an object - JSON - if found
//Otherwise, returns JSON with the key "error"
app.get('/api/directory/:staffID', (req, res) => {
    const staff = devC.getStaff(req.params.staffID);
    if(staff){
        res.status(200);
        res.json(staff);
    } else {
        res.status(404)
        res.json({
            error: "No such staff in our directory"
        })
    }
    
})

//handle request to delete a staff
//with the specified :staffID.
//Return a JSON representation of the
// deleted staff if found.
//Otherwise, returns JSON with the key "error"
app.delete('/api/directory/:staffID', (req, res) => {
    const staffDeleted = devC.deleteStaff(req.params.staffID);
    if(staffDeleted){
        res.status(200);
        res.json(staffDeleted);
    } else{
        res.status(404);
        res.json(
            {
                error: "No such staff in our directory"
            }
        );
    }
});


//handle post request to add a new staff
//Returns a JSON representation of the
//added staff
app.post('/api/directory', (req, res) => {
    const staffToAdd = req.body;
    devC.addStaff(staffToAdd);
    res.status(200);
    res.json(devC.getStaff(staffToAdd.id));
});

app.listen(port, function(){
    console.log(`listening on port: ${port}`);
});