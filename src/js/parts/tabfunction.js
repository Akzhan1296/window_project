import {
    eDefault
} from '../parts/eventDefault';

//tabs 
const tab = (header, block, activeClass, displayStyle, attribute, obj) => {
    if (attribute !== undefined && attribute == true && obj !== undefined) {
        obj.type = block[0].getAttribute('id'); // if not selected
    }

    let tabsArr = Array.prototype.slice.call(header);
    //in NodeList we can't use indexOf and for solution we convert NodeList to array

    tabsArr.forEach(item => {
        item.classList.remove(activeClass);
    });
    block.forEach(option => {
        option.style.display = "none";
    });
    tabsArr[0].classList.add(activeClass);
    block[0].style.display = displayStyle;


    tabsArr.forEach(item => {
        item.addEventListener('click', function () { // regular function because we got keyword "this"
            eDefault(true); // optional!!!
            tabsArr.forEach(option => {
                option.classList.remove(activeClass);
            });

            block.forEach(option => {
                option.style.display = "none";
            });

            this.classList.add(activeClass);
            if (this.classList.contains(activeClass)) {
                block[tabsArr.indexOf(item)].style.display = displayStyle;

                if (obj !== undefined) {
                    obj.type = block[tabsArr.indexOf(item)].getAttribute('id');
                }
            }
        });
    });
};

export {tab};