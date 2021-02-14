/////// ЛАМПОЧКА /////////////////////

let Lamp = function(){
    this.get = function() {
        this.power = +prompt('Мощность лампочки, Вт')/1000;
        this.cost = 0.19;
        this.status = confirm('Лампочка включена?');
        if(this.status == true) {
            this.time = +prompt('Время работы лампочки, ч');
            this.calc();
        }else this.get();
    }

    this.calc = function(){
        this.result = this.power * this.cost * this.time;
        this.showResult();
    }

    this.showResult = function(){
        document.write(`Затраты на энергию лампы: ${this.result}`)
    }
}

let lamp = new Lamp();



let LampRegion = function(){
    
    Lamp.apply(this)

    let parentGet = this.get;

    this.get = function(){
        parentGet.call(this);
        
        this.cost = 0.38;

    }

    this.showResult = function(){
        document.write(`Затраты на энергию лампы для региона №2: ${this.result}`)
    }
}

let lampRegion = new LampRegion();

lampRegion.get();
