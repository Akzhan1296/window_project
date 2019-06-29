const eDefault = (boolean,e)=>{
    if(e == undefined){
        e = event;
        //console.log(e);
    }
    if(boolean == true){
        e.preventDefault();
    }
}



export {eDefault};