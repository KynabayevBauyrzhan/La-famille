const tabs = () => {



    const menu = document.querySelectorAll('.parent_menu_btn'),
        content = document.querySelectorAll('.menu-content');


    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });
    };

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        menu.forEach(item => {
            item.classList.remove('active');
        });
        menu[i].classList.add('active');
    };

    menu.forEach(function(item, index) {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            hideTabContent();
            showTabContent(index);
        });
    });

    hideTabContent();
    showTabContent();
}





































// const menuLinks = document.querySelectorAll('.parent_menu_btn');
// const menuContents = document.querySelectorAll('.menu-content');
// const menuName = document.querySelectorAll('.parent_menu_name');

// // Добавляем обработчик события клика на каждую ссылку
// menuLinks.forEach(function (link, index) {
//     link.addEventListener('click', function (event) {
//         event.preventDefault();

//         menuLinks.forEach(function(item, index) {
//             item.addEventListener('click', function() {
//                 // Сбрасываем цвет фона для всех элементов
//                 menuLinks.forEach(function(item) {
//                     item.style.backgroundColor = '';
//                 });

//                 // Устанавливаем цвет фона для текущего элемента
//                 this.style.backgroundColor = 'black';
//                 menuName[index].style.color = '#fff';

//             });
//         });

//         // Удаляем класс 'active' у всех ссылок и блоков с содержанием
//         menuLinks.forEach(function (link) {
//             link.classList.remove('active');
//         });

//         menuContents.forEach(function (content) {
//             content.classList.remove('active');
//         });

//         // Добавляем класс 'active' только той ссылке и блоку, по которым был клик
//         link.classList.add('active');
//         menuContents[index].classList.add('active');
//     });
// });
// };

export default tabs;