import {eDefault} from  '../parts/eventDefault';

const bigImg = ()=>{

    //big_img
    let smallImg = document.querySelectorAll('.works a'),
        div = document.createElement('div'),
        bigImg = document.createElement('img');

    smallImg.forEach( item => {
        item.addEventListener('click', function(){
            eDefault(true);
        let href = this.getAttribute('href');
            bigImg.setAttribute('src', href);
            document.body.appendChild(div);
            div.appendChild(bigImg);
            div.classList.remove('hide');
            div.classList.add('img-overlay');
            bigImg.classList.add('big-img');
            document.body.style.overflow = 'hidden';
        });
    });

    document.body.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('img-overlay')) {
            div.classList.remove('img-overlay');
            div.classList.add('hide');
            document.body.style.overflow = 'auto';
            eDefault(false);
        }
    });
    
}

export {bigImg};