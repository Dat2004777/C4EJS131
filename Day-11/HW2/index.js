let btn = document.getElementById('btn');
            btn.addEventListener('click', (e) => {
                let value = parseInt(btn.innerText);
                console.log(value);
                btn.innerText = ++value;
            });