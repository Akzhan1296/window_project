import {eDefault} from  '../parts/eventDefault';
import {a} from  '../parts/calc';

const forms = ()=>{
    //ajax
    let inputs = document.querySelectorAll('input');

    document.querySelectorAll('form').forEach((item)=>{
        item.addEventListener('submit',function(){
            if(item.classList.contains('calc-form')){
                sent(a);
            } else{
                possted(this);
            }
        });
    });

    const possted= (a)=>{
        let formData = new FormData(a),
            json = {};
        // we take information from users and create object for backend part
        formData.forEach((value, key) => {
            json[key] = value;
        });
        sent(json);
    };


    const sent = (json) => {
        eDefault(true); //event default
        let url = 'server.php';
        fetch(url, {
                method: 'POST',
                body: JSON.stringify(json),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(
                function (res) {
                    if (!res.ok) {
                        alert(`Looks like there was a problem. Status Code: 
                  ${res.status}`);
                    } else {
                        alert('Data was created and successfully sent');
                    }
                    inputs.forEach(item => item.value = '');
                }
            )
            .catch(function (err) {
                alert('Fetch Error :-S', err);
            });
    }
};

export {forms};