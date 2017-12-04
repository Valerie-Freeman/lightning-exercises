// Loop through this array of objects and console.log “<name>’s job title is <title>”
// [
//      {name: “Bob”, department: “sales”, title: “sales manager”},
//      {name: “Tina”, department: “finance”, title: “director of finance”},
//      {name: “Randy”, department: “IT”, title: “hardware guy”},
//      {name: “Glenda”: department: “C-suite”, title: “CEO”}
//  ]

let employees = [
         {name: "Bob", department: "sales", title: "sales manager"},
         {name: "Tina", department: "finance", title: "director of finance"},
         {name: "Randy", department: "IT", title: "hardware guy"},
         {name: "Glenda", department: "C-suite", title: "CEO"},
    ]


    for (let i = 0; i < employees.length; i++) {
        console.log(`${employees[i].name}'s job title is ${employees[i].title}`);
    }