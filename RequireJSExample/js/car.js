define(['./person'], function(Person){
    function Car(type){
        //private
        var on = false;
        //private
        var driver;
        this.type = type;
        
        this.start = function(){
            on = true;
        }
        this.stop = function(){
            on = false;   
        }
        this.isOn = function(){
            return on;   
        }
        this.loadDriver = function(person){
            if(person instanceof Person){
                driver = person;
            }
            else{
                driver = null;
            }
        }
        this.hasDriver = function(){
            return !!driver;   
        }
    }
    
    Car.prototype.go = function(){
        if(this.isOn() && this.hasDriver()){
            console.log("vroom");   
        }
        else{
            console.log("no response");   
        }
    }

    return Car;
});