class Person{
    constructor(name, status, totalCoins, hasStar){
        this.name = name
        this.status = status
        this.totalCoins = totalCoins
        this.hasStar = hasStar

    }
        setName(namePicked){
            if(namePicked === "Mario"){
                this.name = 'Mario'
            } else if(namePicked === "Luigi"){
                this.name = 'Luigi'
            }
        }

        gotHit(){
            if(this.status === "Powered up"){
                this.status = 'Big'
            } else if(this.status === 'Big'){
                this.status = 'Small'
            } else if(this.status === 'Small'){
                this.status = 'Dead'
            }

        }

        gotPowerup(){
            if(this.status === "Powered up"){
                this.status = 'Big'
            } else if(this.status === 'Big'){
                this.hasStar = 'Star'
            }else if(this.status){
                this.hasStar = true
            }

            }
//opposite of above function but change boolean to true when powered up
        addCoin(){
            this.totalCoins ++
            console.log("one coin added")
        }   

};

        



            
        
        {
            if(this.totalCoins === "Total coins"){
                this.totalCoins = true
            
            }

        }; 
//increment this.totalCoins

        

        print()
            console.log(Person)
        
            //write a console.log that will return the information from the lesson
        

