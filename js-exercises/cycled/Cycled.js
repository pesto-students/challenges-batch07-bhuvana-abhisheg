class Cycled {
    constructor(items){
        this.arrItems = items;
        this.currentPos = 0;
    }

    [Symbol.iterator] = function* (){
        for(let item of this.arrItems){
            yield item;
        }
    }
    
    current() {
        function* currentGenerator(obj) {
          yield obj.arr[obj.currentPos];
        }    
        return currentGenerator(this).next().value;
    }

    next() {
        if (this.currentPos === this.arrItems.length - 1) {
            this.currentPos = 0;
        } else {
            this.currentPos += 1;
        }
        function* nextGenerator(obj) {
            yield obj.arr[obj.currentPos];
        }
        return nextGenerator(this).next().value;
    }

    previous() {
        if (this.currentPos === 0) {
          this.currentPos = this.arrItems.length - 1;
        } else {
          this.currentPos -= 1;
        }    
        function* nextGenerator(obj) {
          yield obj.arr[obj.currentPos];
        }    
        return nextGenerator(this).next().value;
    }

    step(){

    }

    * reversed() {
        yield this.arrItems[this.arrItems.length - 1 - this.currentPos];
    }

    indexOf(value) {
        return this.arrItems.indexOf(value);
    }
}
export { Cycled };
