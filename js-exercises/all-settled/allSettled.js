/**
 * Returns new Promise that resolves after all the input Promises have settled
 * @param  {Array}  array of promises
 * @return {Array}  array of objects with outcome of each promise
 */
function allSettled(promises){    
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        promises.forEach((promise,index) => {
            Promise.resolve(promise).then(result => {
                results[index] = { status: "fulfilled", value:result };
                completed += 1;
                if (completed == promises.length) {
                    resolve(results);
                }
            }).catch(err => {
                completed += 1;
                results[index] = { status: "rejected", reason:err };
                if (completed == promises.length) {
                    resolve(results);
                } 
            });
        });
    });    
};

export { allSettled };