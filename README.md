
Installation:

1) Install Node JS.
2) Go to https://github.com/jefftarheel/newbeginnings
3) Run 'git clone https://github.com/jefftarheel/newbeginnings.git'
4) cd into 'newbeginnings'.
5) Run 'npm install'
6) To start, run 'npm run start'

Endpoints:
1) http://localhost:3000 POST (creates a new participant record)
    {
        "name": "Ben Jones",
        "dateOfBirth": "05/13/1976",
        "phoneNumber": "919-749-8523",
        "address": "221 Seymour Place"
    }
Return the unique reference id.
2) http://localhost:3000/<referenceId> GET
   Returns full record of the participant.
3) http://localhost:3000/<referenceId> PUT
    {
        "name": "Ben Jones",
        "dateOfBirth": "05/13/1945",
        "phoneNumber": "919-749-8333",
        "address": "221 Seymour Place"
    }
   Updates the information in the participant account.
4) http://localhost:3000/<referenceId> DELETE
   Removes the record from the data store.

Design/assumptions:

1) I create a simple referenced id generator with the following algorithm.
   The first and last name initials.
   The day of the month of the birthdate.
   A dash "-"
   A random 4-digit number between 0 and 9999.

   This reference id is short enough and guaranteed to be unique.  The first 4 characters should be easy to remember as it utilizes known patient info.  Only the last 4 digits will require unique knowledge not known to others.

2) In a real application, I would use a datastore with the reference id as the unique key to the datastore.  This would be a fast lookup operation.  Without having a datastore, I created an object array instead to lookup by ID.  This is done for mock purposes and is only for simulating what a true database would do.  
 
