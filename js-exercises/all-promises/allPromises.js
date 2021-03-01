/**
 * Runs multiple promises concurrently and waits until all are fulfilled
 * @param  {Array}  array of promises
 * @return {Array}  array of resolved values
 */
function allPromises(promises){    
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        promises.forEach((promise,index) => {
            Promise.resolve(promise).then(result => {
                results[index] = result;
                completed += 1;
                if (completed == promises.length) {
                    resolve(results);
                }
            }).catch(err => {
                reject(err);
            });
        });
    });    
};

export { allPromises };