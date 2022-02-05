const person = {
    name: "Father",
    // child1:{
    //     name: "Son"
    //     child2:{
    //         name:"Grand son"
    //     }
    // }
  };
  console.log(person.child1.child2.name);
  console.log(person.child1?.child2.name);