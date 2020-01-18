const {createStore, createEvent} = effector;

let curr = 1;
const n = 200;
const s = document.querySelector('#s');
const f = document.querySelector('#f');

let $counter = createStore(1); //хранилище

let change =  createEvent('change');

//действия
let increment =  createEvent('increment');//следующий
let decrement =  createEvent('decrement'); //предыдущий


//редьюсеры
$counter.on(change, (state, value) =>
    (Number(value) < 10) ? i = '0' + String(value) : value);
$counter.on(increment, (state, value) => state + 1);
$counter.on(decrement, (state, value) => state - 1);


//наблюдатель
$counter.watch(i => {
    i = Number(i);

    if (i > 1 && i < 141) {
        const url = `/gossbook_slides/gossbook-${i}.png`; // `
        f.src = url;
        curr = i;
        s.value = i;
    }
});

for(let i = 1; i <= n; ++i) {

    s
        .appendChild(document.createElement('option'))
        .appendChild(document.createTextNode(i));

}


s.addEventListener('input', e => {
    change(e.target.value);
});
