# REST API demo

Simple API implementation with NodeJs, Express and MongoDb


API endpoints:
* GET `/api/contacts`
* POST `/api/contacts`
* GET `/api/contacts/:id`
* PUT `/api/contacts/:id`
* PATCH `/api/contacts/:id`
* DELETE `/api/contacts/:id`




> use restdemo
switched to db restdemo
> show collections
contacts
> db.contacts.find()
{ "_id" : ObjectId("625d3e6cf38461770eac0228"), "name" : "Student Demo", "email" : "nucbm@utcn.ro" }
{ "_id" : ObjectId("625d3eb4f38461770eac0229"), "name" : "Stud Cal", "email" : "cal@cunbm.ro" }
{ "_id" : ObjectId("625d3fc95c7c3de75b3f6d7e"), "create_date" : ISODate("2022-04-18T10:39:05.569Z"), "name" : "'Theo Ne'", "email" : "'no@thi.ng'", "__v" : 0 }
> 







Tutorial:
[How To Build Simple RESTful API With NodeJs, ExpressJs And MongoDb](https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d)

