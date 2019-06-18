var button = document.getElementById('btn')

button.onclick = function () {
    alert('button clicked')
}

//promised example
var promise1 = new Promise( (resolve, reject) => {
    setTimeout(() =>{
        resolve('foo')
    },10000)
});


var promise = document.getElementById('promise')
promise.onclick = () => {
    promise1.then((value) => {
        alert("From promise :"+value)
    })

    promise1.catch((err) => {
        alert('from promise error :'+err)
    })
}

//async wait
var async = document.getElementById('async')
async function f() {
    let promise = new Promise((resolve,reject) =>{
        setTimeout(()=>resolve("From async wait!"),10000)
    });

    let result = await promise; //wait till the promise resolve
    alert(result)
}
async.onclick = function(){
    f()
}