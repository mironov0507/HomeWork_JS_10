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

// lampRegion.get();


//////////  Функция-конструктор по работе с DOM ///////////////////////////////////////////////////////////////////////

let DOM = function(){

    this.create = function(tagName){
        return document.createElement(tagName);
        
    }

    this.attr = function(element, name, value){
        if(!element || !name) return false;
        if(!value) return element.getAttribute(name);
        else element.setAttribute(name, value);
    }

    this.html = function(element, value){
        return element.innerHTML = value;
    }

    this.search = function(element, selektor){
        if(!element) return document.querySelectorAll(selektor);
        else element.querySelectorAll(selektor); 
    }

    this.addClass = function(element, className){
        return element.classList.add(className);
    }

    this.removeClass = function(element, className){
        return element.classList.remove(className);
    }

    this.toggleClass = function(element, className){
        return element.classList.toggle(className);
    }

    this.hasClass = function(element, className){
        return element.classList.contains(className);
    }

    this.append = function(element, newElement, beforeElement){
        if(!element || !newElement) return false;
        if(!beforeElement) return element.appendChild(newElement);
        else element.insertBefore(newElement, beforeElement);
    }

    this.on = function(element, eventName, funcName){
        element.addEventListener(eventName, funcName);
        
    }

}

let dom = new DOM();


