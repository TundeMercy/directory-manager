'use strict'

const express = require('express');
const directory = require('./directory');

const app = express();
const port = process.env.PORT || 5000;

directory.addStaff({id: 1, name: 'Tunde Ajagbe', phone: 8106887783});
directory.addStaff({id: 2, name: 'Tunde Ajagbe', phone: 8106887783});
directory.addStaff({id: 3, name: 'Tunde Ajagbe', phone: 8106887783});

console.log(directory.contacts);
app.get('/api/directory', function(req, res){
    res.status(200);
    res.send(JSON.stringify(directory.contacts));

});

app.get('/api/directory/:staffID', (req, res) => {
    res.send(JSON.stringify(directory.getStaff(parseInt(req.params.staffID))));
})

//app.post('/api/directory/:staffID')

app.listen(port, function(){
    console.log(`listening on port: ${port}`);
});