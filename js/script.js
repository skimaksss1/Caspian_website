document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn_header').addEventListener('click', function() {
        document.querySelector('.news_modal_window').style.display = 'flex';
    });

    document.querySelector('.close_btn').addEventListener('click', function() {
        document.querySelector('.news_modal_window').style.display = 'none';
    });

    document.querySelector('.subscription_btn').addEventListener('click', function() {
        document.querySelector('.news_modal_window').style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const langActive = document.querySelector('.lang_active');
    const dropdownLang = document.querySelector('.dropdown_lang');

    function toggleDropdown() {
        dropdownLang.classList.toggle('active');
    }

    function hideDropdown(event) {
        if (!dropdownLang.contains(event.target) && !langActive.contains(event.target)) {
            dropdownLang.classList.remove('active');
        }
    }

    langActive.addEventListener('click', toggleDropdown);
    document.addEventListener('click', hideDropdown);
});


let lastClickedBlock = null;

document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('click', (event) => {
        if (lastClickedBlock === block) {
            // Если блок был кликнут дважды, позволяем переход по ссылке
            return;
        }

        // Сбрасываем класс expanded у всех блоков
        document.querySelectorAll('.block').forEach(b => b.classList.remove('expanded'));

        // Добавляем класс expanded к текущему блоку
        block.classList.add('expanded');

        // Обновляем последний кликнутый блок
        lastClickedBlock = block;

        // Предотвращаем переход по ссылке при первом клике
        event.preventDefault();
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const projectMenu = document.querySelector('li:has(> ul) > ul');
    const devElement = projectMenu.querySelector('li:has(> .submenu)');
    const submenu = devElement.querySelector('.submenu');
    
    devElement.addEventListener('mouseover', function() {
        const parentHeight = projectMenu.offsetHeight;
        submenu.style.height = parentHeight + 'px';
        // submenu.style.top = devElement.offsetTop + 'px'; // Устанавливаем позицию сверху
    });
    
    document.querySelector('.cards').addEventListener('click', function(event) {
        const link = event.target.closest('a');
        if (link && !link.classList.contains('expanded')) {
            event.preventDefault();
        }
    });
    
});