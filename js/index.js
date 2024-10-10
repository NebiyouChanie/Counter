var number=0;
const decrease =document.getElementById('decrease')
const reset =document.getElementById('reset')
const increase =document.getElementById('increase')
const numdiv =document.getElementById('numdiv')
decrease.addEventListener('click',function(){
    number=number-1;
    if(number<0){
        numdiv.style.color='deeppink'
    }
    numdiv.textContent=number;
});
reset.addEventListener('click',function(){
    number=0;
    numdiv.textContent=number;

});
increase.addEventListener('click',function(){
    number+=1;
    if(number>0){
        numdiv.style.color='aqua'
    }
    numdiv.textContent=number;

});