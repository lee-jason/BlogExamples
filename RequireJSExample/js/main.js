require(["./car", "./person"], function(Car, Person){
    var civic = new Car("sedan");
    console.log("car type: " + civic.type);
    
    var person = new Person("Jason");
    console.log("person name: " + person.name);
    
    civic.go(); //"no response"
    civic.loadDriver(person);
    civic.go(); //"no response"
    civic.start(); 
    civic.go(); //"vroom"
    civic.stop();
    civic.go(); //"no response"
});