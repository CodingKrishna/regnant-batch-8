
// var calcObj = require('./calc');
// var result = calcObj.sum(5,6);
// console.log(result);

// var result1 = calcObj.mul(5,6);
// console.log(result1);

// // Load the full build.
// var _ = require('lodash');
// var r1 = _.partition([1, 2, 3, 4], n => n % 2);
// console.log(r1);

// JSON
// var user = {"id":12, "userName":"ravi", "email": "ravi@gmail.com", "mobile": ["12345", "789345"],
// "address": {
//     "location": "ohio",
//     "state": "ohio"
// }}
// console.log(user.address.state);

// var msg = { "from":"890", "sender": "12345", "time": "", "sub":"hii", "body":"hii welcome"};
// console.log(msg);


var users =[ {
    "id": 123,
    "name": "Ravi",
    "email": "ravi@gmail.com",
    "mobile": [1234, 8907],
    "address" : {
        "street": "20th main",
        "city": "Blr"
    }
},
{
    "id": 345,
    "name": "Shiva",
    "email": "siva@gmail.com",
    "mobile": [1234, 8907],
    "address" : {
        "street": "20th main",
        "city": "Blr"
    }
}
]

console.log(users);