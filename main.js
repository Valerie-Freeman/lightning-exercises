function newExercise(exerciseNum) {
    console.log (" ");
    console.log(`Exercise ${exerciseNum}`);
}

/*************************** Exercise 1 ***********************************/

    // Loop through this array of objects and console.log "<name>’s job title is <title>”
    // [
    //      {name: "Bob”, department: “sales”, title: “sales manager”},
    //      {name: “Tina”, department: “finance”, title: “director of finance”},
    //      {name: “Randy”, department: “IT”, title: “hardware guy”},
    //      {name: “Glenda”: department: “C-suite”, title: “CEO”}
    //  ]
    newExercise(1);

    let employees = [
            {name: "Bob", department: "sales", title: "sales manager"},
            {name: "Tina", department: "finance", title: "director of finance"},
            {name: "Randy", department: "IT", title: "hardware guy"},
            {name: "Glenda", department: "C-suite", title: "CEO"},
        ]


    for (let i = 0; i < employees.length; i++) {
        console.log(`${employees[i].name}'s job title is ${employees[i].title}`);
    }



    /************************ Exercise 2 ********************************/

    // Loop over every item in this array [45, “I”, true, null, “am”, 3.56, “a”, undefined, { catchphrase: “Oh hai, Mark”}, “JS”, “rockstar”]  and return a new array that contains only strings. and log out the result.
    newExercise(2);

    let myArr = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]
    
    let stringArr = myArr.filter(function(string) {
        return typeof(string) === 'string';
    });

    console.log(stringArr);

        // Joe's Way
    let strArr = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"].filter( (item) => {
        return typeof(item) === "string";
    });
    console.log('string array', strArr)

    /******************************* Exercise 3 *********************************/
    
    newExercise(3);

    let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
    let fave_demo = [];

    console.log("for loop")
    for(i = 0; i < ages.length; i++) {
        if( i < 50 && i > 17 ) fave_demo.push(ages[i])
        console.log(ages[i])
    }
    console.log(fave_demo);

    console.log("for each")
    fave_demo = [];
    ages.forEach( (element) => {
        if( element < 50 && element > 17 ) fave_demo.push(element)
        console.log(element);
    });
    console.log(fave_demo);

    console.log("filter");
    fave_demo = [];
    fave_demo = ages.filter( (age) => age > 17 && age < 49);
    console.log("fave_demo", fave_demo);

    /*********************** Exercise 4 **********************/
    newExercise(4);

    let hitchhikers_guide = {
        characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
        catchphrase: "Don't Panic",
        random_facts: {
          copies_sold: 14000000,
          formats: ["radio", "TV", "film", "graphic novel"],
          ultimate_answer: {
            meaning_of_life: 42
          }
        }
      };
      
      let meaning = "meaning_of_life";

      console.log("meaning of life: ", hitchhikers_guide.random_facts.ultimate_answer[meaning]);

      /************************ Exercise 5 *********************/
      newExercise(5);

      let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];
      yoda_quote = yoda_quote.map( (word) => {
          if(word === "the")
            word = word.slice(0,1).toLocaleUpperCase() + word.slice(1)
          if(word === "teacher")
            word = word + ","
          return word;
      }).join(" ")


      console.log("Yoda says,", yoda_quote);
