const getone = document.querySelector('#one');
const gettwo = document.getElementById('two');
const getthree = document.getElementById('three');
const getfour = document.getElementById('four');
const getfive = document.getElementById('five');
const getsix = document.getElementById('six');
const getseven = document.getElementById('seven');
const geteight = document.getElementById('eight');
const getnine = document.getElementById('nine');
const getzero = document.getElementById('zero');
const getdbzero = document.getElementById('dbzero');
const getdot = document.getElementById('dot');

const getplus = document.getElementById('plus');
const getminus = document.getElementById('minus');
const getmultiply = document.getElementById('multiply');
const getdivided = document.getElementById('divided'); 

const getequal = document.getElementById('equal');
const getdisplay = document.querySelector('#number');

const clear = document.getElementById('ac');
const getdelete = document.getElementById('delete');

// const getonevalue = ()=>{
//     console.log('hello')
// }
// getone.addEventListener('click',getonevalue);


getone.addEventListener('click',function(){
    const getdatas = getone.value;
    // const num1 = parseInt(getdatas,10)
    getdisplay.value += getdatas;
})

gettwo.addEventListener('click',function(){
    const getdatas = gettwo.value;
    getdisplay.value += getdatas;
})

getthree.addEventListener('click',function(){
    const getdatas = getthree.value;
    getdisplay.value += getdatas;
})

getfour.addEventListener('click',function(){
    const getdatas = getfour.value;
    getdisplay.value += getdatas;
})

getfive.addEventListener('click',function(){
    const getdatas = getfive.value;
    getdisplay.value += getdatas;
})

getsix.addEventListener('click',function(){
    const getdatas = getsix.value;
    getdisplay.value += getdatas;
})

getseven.addEventListener('click',function(){
    const getdatas = getseven.value;
    getdisplay.value += getdatas;
})

geteight.addEventListener('click',function(){
    const getdatas = geteight.value;
    getdisplay.value += getdatas;
})

getnine.addEventListener('click',function(){
    const getdatas = getnine.value;
    getdisplay.value += getdatas;
})

getzero.addEventListener('click',function(){
    const getdatas = getzero.value;
    getdisplay.value += getdatas;
})

getdbzero.addEventListener('click',function(){
    const getdatas = getdbzero.value;
    getdisplay.value += getdatas;
})

getplus.addEventListener('click',function(){
    const getdatas = getplus.value;
    getdisplay.value += getdatas;
})

getminus.addEventListener('click',function(){
    const getdatas = getminus.value;
    getdisplay.value += getdatas;
})

getmultiply.addEventListener('click',function(){
    const getdatas = getmultiply.value;
    getdisplay.value += getdatas;
})

getdivided.addEventListener('click',function(){
    const getdatas = getdivided.value;
    getdisplay.value += getdatas;
})

getdot.addEventListener('click',function(){
    const getdatas = getdot.value;
    getdisplay.value += getdatas;
})

getequal.addEventListener('click',function(){ 
    let equal = eval(getdisplay.value);
    getdisplay.value = equal;
})

clear.addEventListener('click', function(){
    getdisplay.value = '';
})

getdelete.addEventListener('click',function(){
    getdisplay.value = getdisplay.value.slice(0,-1);
})

// let a = parseInt(getdisplay.value,10);
// let b = parseInt(getdisplay.value,10);
// function plus(a,b){
//     let result = a + b;
//     getdisplay.value = result;


//     console.log(a),
//     console.log(typeof(b.value));

// }
