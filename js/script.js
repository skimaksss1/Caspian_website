document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const blocks = {
      fb1: document.querySelector('.fb-1'),
      fb2: document.querySelector('.fb-2'),
      fb3: document.querySelector('.fb-3'),
      fb4: document.querySelector('.fb-4')
    };
    
    const showBlock = (block) => {
      const menuHeight = menu.offsetHeight - '24';
      const menuWidth = menu.offsetWidth - '1';
      
      block.style.height = `${menuHeight}px`;
      block.style.left = `${menuWidth}px`;
      block.style.display = 'flex';
    };
    
    const hideBlock = (block) => {
      block.style.display = 'none';
    };
    
    document.querySelectorAll('.fb1, .fb2, .fb3, .fb4').forEach((item, index) => {
      const blockKeys = ['fb1', 'fb2', 'fb3', 'fb4'];
      const block = blocks[blockKeys[index]];
      
      item.addEventListener('mouseover', () => showBlock(block));
      item.addEventListener('mouseout', (event) => {
        if (!block.contains(event.relatedTarget)) {
          hideBlock(block);
        }
      });
    });
    
    Object.values(blocks).forEach((block) => {
      block.addEventListener('mouseover', () => showBlock(block));
      block.addEventListener('mouseout', (event) => {
        if (!menu.contains(event.relatedTarget) && !block.contains(event.relatedTarget)) {
          hideBlock(block);
        }
      });
    });
  });
  
  
  

  document.querySelectorAll('.li_projects, .li_trd, .li_prv, .li_dev, .li_soc').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation(); // Останавливаем всплытие события
        const ul = this.querySelector('ul');
        if (ul) {
            ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
            // Изменяем цвет текста для элементов li внутри ul
            ul.querySelectorAll('li').forEach(li => {
                // li.style.color = 'red'; // Здесь можно заменить 'red' на нужный цвет
            });
        }
    });
});

document.querySelector('.bar').addEventListener('click', function() {
    const leftHeaderMob = document.querySelector('.left_header_mob');
    leftHeaderMob.style.display = leftHeaderMob.style.display === 'flex' ? 'none' : 'flex';
});







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

    document.querySelector('.staff_grid .staff_card').addEventListener('click', function() {
        document.querySelector('.staff_only').style.display = 'flex';
    });

    document.querySelector('.staff_only .close_btn').addEventListener('click', function() {
        document.querySelector('.staff_only').style.display = 'none';
    });

    document.querySelector('.about_s5 .card').addEventListener('click', function() {
        document.querySelector('.staff_only').style.display = 'flex';
    });

    document.querySelector('.staff_only .close_btn').addEventListener('click', function() {
        document.querySelector('.staff_only').style.display = 'none';
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

document.addEventListener('DOMContentLoaded', function() {
    const langActive = document.querySelector('.lang_active2');
    const dropdownLang = document.querySelector('.dropdown_lang2');

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








document.querySelectorAll('.dot').forEach(item => {
    item.addEventListener('mouseenter', function() {
        document.querySelectorAll('.dot').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

function activateDotAndBlock(dotClass, blockClass) {
    // Удаляем класс 'active' у всех элементов .dot
    document.querySelectorAll('[class^="dot"]').forEach(dot => {
        dot.classList.remove('active');
    });
    // Добавляем класс 'active' к нужному элементу .dot
    document.querySelector(dotClass).classList.add('active');

    // Удаляем класс 'active' у всех элементов .block1
    document.querySelectorAll('[class^="d_block"]').forEach(block => {
        block.classList.remove('active');
    });
    // Добавляем класс 'active' к нужному элементу .block1
    document.querySelector(blockClass).classList.add('active');
}

document.querySelector('.card1').addEventListener('click', function() {
    activateDotAndBlock('.dot1', '.block1');
});

document.querySelector('.card2').addEventListener('click', function() {
    activateDotAndBlock('.dot2', '.block2');
});

document.querySelector('.card3').addEventListener('click', function() {
    activateDotAndBlock('.dot3', '.block3');
});

document.querySelector('.card4').addEventListener('click', function() {
    activateDotAndBlock('.dot4', '.block4');
});





document.querySelectorAll('.district_card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.district_card').forEach(c => {
            c.querySelectorAll('*').forEach(child => {
                child.style.color = ''; // Сбрасываем цвет
            });
        });
        card.querySelectorAll('*').forEach(child => {
            child.style.color = '#fff'; // Применяем цвет
        });
    });
});



const dotCardMap = {
    '.dot1': '.card1',
    '.dot2': '.card2',
    '.dot3': '.card3',
    '.dot4': '.card4'
};

Object.keys(dotCardMap).forEach(dotClass => {
    const cardClass = dotCardMap[dotClass];
    document.querySelectorAll(dotClass).forEach(dot => {
        const handleMouseEnter = () => {
            document.querySelectorAll(`${cardClass} > .district_title, ${cardClass} > .district_description`).forEach(element => {
                if (!element.dataset.clicked) {
                    element.dataset.originalStyle = element.style.cssText;
                    element.style.cssText = 'color: white;';
                }
            });
        };

        const handleMouseLeave = () => {
            document.querySelectorAll(`${cardClass} > .district_title, ${cardClass} > .district_description`).forEach(element => {
                if (!element.dataset.clicked) {
                    element.style.cssText = element.dataset.originalStyle || '';
                }
            });
        };

        const handleClick = () => {
            // Сбрасываем стили у всех карточек
            Object.values(dotCardMap).forEach(resetCardClass => {
                document.querySelectorAll(`${resetCardClass} > .district_title, ${resetCardClass} > .district_description`).forEach(element => {
                    element.style.cssText = element.dataset.originalStyle || '';
                    delete element.dataset.clicked;
                });
            });

            // Применяем стили к текущей карточке
            document.querySelectorAll(`${cardClass} > .district_title, ${cardClass} > .district_description`).forEach(element => {
                element.style.cssText = 'color: white;';
                element.dataset.clicked = true;
            });
        };

        dot.addEventListener('mouseenter', handleMouseEnter);
        dot.addEventListener('mouseleave', handleMouseLeave);
        dot.addEventListener('click', handleClick);
    });
});




let lastClickedBlock2 = null;

document.querySelectorAll('.al_card').forEach(block => {
    block.addEventListener('click', (event) => {
        if (lastClickedBlock2 === block) {
            // Если блок был кликнут дважды, позволяем переход по ссылке
            return;
        }

        // Сбрасываем класс expanded у всех блоков
        document.querySelectorAll('.al_card').forEach(b => b.classList.remove('expanded'));

        // Добавляем класс expanded к текущему блоку
        block.classList.add('expanded');

        // Обновляем последний кликнутый блок
        lastClickedBlock = block;

        // Предотвращаем переход по ссылке при первом клике
        event.preventDefault();
    });
});


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}