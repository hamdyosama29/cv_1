let button_click = document.getElementById('button_click');
        let list = document.getElementById('list');
        let button_close = document.getElementById('button_close');
        button_click.addEventListener('click', function() {
            if (list.style.display === 'none' || list.style.display === '') {
                list.style.display = 'block';
            } else {
                list.style.display = 'none';
            }
        });
        button_close.addEventListener('click', function() {
            if (list.style.display === 'block' || list.style.display === '') {
                list.style.display = 'none';
            } else {
                list.style.display = 'block';
            }
        });