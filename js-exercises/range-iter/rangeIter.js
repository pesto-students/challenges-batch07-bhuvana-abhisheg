function rangeIter(lb, ub) {
    if((!lb ||lb === undefined )&& (!ub || ub == undefined)){
        throw new TypeError('Please pass lower bound and upper bound values for the range iterator')
    }
    if(!lb || lb === undefined){
        throw new TypeError('Please pass lower bound value for the range iterator')
    }
    if(!ub || ub === undefined){
        throw new TypeError('Please pass upper bound value for the range iterator')
    }
    if(typeof ub !== 'number' || typeof lb !== 'number'){
        throw new TypeError('Please pass numbers as value for lower and upper bound')
    }
    let obj = [];
    if (lb < ub) {
      let range = { from: lb, to: ub };
      range[Symbol.iterator] = function () {
        return {
          current: this.from,
          last: this.to,
          next() {
            if (this.current <= this.last) {
              return { done: false, value: this.current++ };
            } else {
              return { done: true };
            }
          }
        };
      };
      for (let num of range) {
        obj.push(num);
      }
    } else if (lb === ub) {
      obj.push(lb);
    }
    return obj;
  }

export { rangeIter };