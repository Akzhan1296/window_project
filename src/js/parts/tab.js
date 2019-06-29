import {tab} from  '../parts/tabfunction';

const tabProject = ()=>{
    //tabs 
    let d=document,
        firstTabHeader = d.querySelectorAll('.glazing_block a'),
        firstTabBlock = d.querySelectorAll('.tabBlock'),
        secondTabsHeader = d.querySelectorAll('.decoration_item div'),
        secondTabBlock = d.querySelectorAll('.secondBlock');

    tab(firstTabHeader, firstTabBlock, "active","block");
    tab(secondTabsHeader, secondTabBlock, "after_click","block");
};

export {tabProject};