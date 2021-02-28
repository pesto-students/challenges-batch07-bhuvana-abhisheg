/**
 * Delays invoking a function after delay milliseconds since the last time
 * @param  {Function}  function to be delayed
 * @param  {number}  delay time in  milliseconds
 * @return {Function}  debounced function
 */
function debounce(fn, delay) {
    let debounceTimer;
    return function(...arguments){
        const context = this;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            fn.apply(context,arguments);
        }, delay);
    }
}

export { debounce };