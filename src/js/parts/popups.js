import {eDefault} from  '../parts/eventDefault';
import {width} from  '../parts/calc';
import {height} from  '../parts/calc';

const popups = ()=>{
    //Modals
    let d = document,
        popupEngineer = d.querySelector('.popup_engineer'),
        popup = d.querySelector('.popup'),
        closePopup = d.querySelectorAll('strong'),
        popupClickCheck = false,
        calcPopup = document.querySelector('.popup_calc'),
        calcPopupSecond = document.querySelector('.popup_calc_profile'),
        calcPopupFinal = document.querySelector('.popup_calc_end');
    
    const showOrClose = (popupEngineerStatus, popupStatus, calcPopupStatus, calcPopupSecondStatus,  calcPopupFinalStatus,overflowStatus) => {
        popupEngineer.style.display = popupEngineerStatus;
        popup.style.display = popupStatus;
        calcPopup.style.display = calcPopupStatus;
        calcPopupSecond.style.display = calcPopupSecondStatus;
        calcPopupFinal.style.display = calcPopupFinalStatus;
        document.body.style.overflow = overflowStatus;
    };

    document.body.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('header_btn')) {
            eDefault(true);
            showOrClose('block', 'none', 'none', 'none', 'none','hidden');
            popupClickCheck = true;
        }
        if (target && target.classList.contains('phone_link')) {
            eDefault(true);
            showOrClose('none', 'block', 'none', 'none','none', 'hidden');
            popupClickCheck = true;
        }
        if (target && target.classList.contains('popup_calc_btn')) {
            eDefault(true);
            showOrClose('none', 'none', 'block', 'none','none', 'hidden');
            popupClickCheck = true;
        }
        if (target && target.classList.contains('popup_calc_button')) {
            eDefault(true);
            if(width.value !== '' && height.value !== ''){
                showOrClose('none', 'none', 'none', 'block', 'none','hidden');
            } else {
                alert('Введите высоту и ширину окна');
            }
            
            popupClickCheck = true;
        }
        if (target && target.classList.contains('popup_calc_profile_button')) {
            eDefault(true);
            showOrClose('none', 'none', 'none', 'none', 'block','hidden');
            popupClickCheck = true;
        }

        if (target && target.classList.contains('popup_engineer') || target.classList.contains('popup') || target.classList.contains('popup_calc')
        || target.classList.contains('popup_calc_profile') || target.classList.contains('popup_calc_end')) {
            eDefault(false);
            showOrClose('none', 'none', 'none', 'none', 'none', '');
        }


    });

    closePopup.forEach((item) => {
        item.addEventListener('click', () => {
            showOrClose('none', 'none', 'none', 'none', 'none', '');
        });
    });
    // in this case I have closePopup because classList contains('.popup-close) does not work also I didnt want to change 
    // HTML file. In practise target click on strong tag and sometimes .popup-close;
    //for correct work I did this colution  

    // popup 60 seconds
    setTimeout(() => {
        if (popupClickCheck == false) {
            showOrClose('none', 'block', 'hidden');
        }
    }, 60000);
    
}

export {popups};