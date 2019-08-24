'use strict'

 module.exports = (function(){
    const contact = [];

    return {
        contacts: contact,
        addStaff: function(staff){
            contact.push(staff);
        },

        getStaff: function(staffID){
            /* const staff = this.contacts.find(function(staf){
                staf.id === staffID;
            });

            if(staff){ return staff;}
            else {return "No such staff in our directory";} */ 

            return this.contacts[staffID - 1];
        }
    };
})();