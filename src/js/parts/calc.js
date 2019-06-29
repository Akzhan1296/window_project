
import {tab} from  '../parts/tabfunction';

let a = {},
width = document.querySelector('#width'),
height = document.querySelector('#height');

const calc = ()=>{
    let windowHeader = document.querySelectorAll('.balcon_icons a'),
        windowBlock = document.querySelectorAll('.windowtype'),
        viweType = document.querySelector('#view_type'),
        cold = document.querySelector('#cold-profill'),
        warm = document.querySelector('#warm-profill'),
        userName = document.querySelector('#calc-name'),
        userPhone = document.querySelector('#calc-phone'),
        finishBtn = document.querySelector('.calc-btn');

    tab(windowHeader, windowBlock, "active", "inline-block", true, a);
        
    width.addEventListener('keyup', function(){
        a.width = this.value;
        });
    height.addEventListener('keyup', function(){
        a.height = this.value;
    });
        
    a.viweType = viweType.options[viweType.selectedIndex].value;
    viweType.addEventListener('change', function(){
        a.viweType = this.options[this.selectedIndex].value;
    });
  
    cold.addEventListener('change', ()=>{
        onlyOneSelect(cold, warm);
        a.profill = 'cold';
    });

    warm.addEventListener('change', ()=>{
        onlyOneSelect(warm, cold);
        a.profill = 'warm';
    });
    
    const onlyOneSelect = (first,second)=>{
        if(first.checked == true){
            second.checked = false;
        } else if(first.checked == false && second.checked == false){
            a.profill = 'not selected';
        }
    };
    onlyOneSelect(warm, cold);

    userName.addEventListener('input', function(){
        a.userName = this.value;
    });
    userPhone.addEventListener('input', function(){
        a.userPhone = this.value;
    });

    finishBtn.addEventListener('click', ()=>{
        tab(windowHeader, windowBlock, "active", "inline-block", true, a);
        width.value = '';
        height.value = '';
        viweType.selectedIndex = 0;
        warm.checked = false;
        cold.checked = false;
    });
};

export {calc};
export {a};
export {width};
export {height};