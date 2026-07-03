let count = 0;

const countValue = document.getElementById("count");

const increase = document.getElementById("increase");

const decrease = document.getElementById("decrease");

const reset = document.getElementById("reset");

increase.addEventListener("click", () => {

    count++;

    countValue.innerHTML = count;

});

decrease.addEventListener("click", () => {

    if(count > 0){

        count--;

    }

    countValue.innerHTML = count;

});

reset.addEventListener("click", () => {

    count = 0;

    countValue.innerHTML = count;

});