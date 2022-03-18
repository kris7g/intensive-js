// window.addEventListener('DOMContentLoaded', function() {

    let tabButtons = document.querySelectorAll('.design-list__item'),
        tabDescriptions = document.querySelectorAll('.design__descr'),
        tabImages = document.querySelectorAll('.design-images'),
        blockImages = document.querySelectorAll('.design-block__img'),
        tabTitle = document.querySelectorAll('.design__title'),
        tabHeader = document.querySelector('title'),
        changeContent = (array, value) => {
            array.forEach((elem) => {
                if (elem.dataset.tabsField === value) {
                    elem.classList.remove('hidden');
                } else {
                    elem.classList.add('hidden');
                }
            });
        };

    tabButtons.forEach((tabButton, index) => {
        tabButton.addEventListener('click', (event) => {
            let dataValue = tabButton.dataset.tabsHandler;

            tabTitle.forEach((title, indexTitle) => {
                if (index === indexTitle) {
                    title.classList.remove('hidden');
                } else {
                    title.classList.add('hidden');
                }   
            });



    changeContent(blockImages, dataValue);
    changeContent(tabDescriptions, dataValue);
    changeContent(tabImages, dataValue);

            // blockImages.forEach((block) => {
            //     if (block.dataset.tabsField === dataValue) {
            //         block.classList.remove('hidden');
            //     } else {
            //         block.classList.add('hidden');
            //     }
            // });

            // tabDescriptions.forEach((descr) => {
            //     if (descr.dataset.tabsField === dataValue) {
            //         descr.classList.remove('hidden');
            //     } else {
            //         descr.classList.add('hidden');
            //     }
            // });

            // tabImages.forEach((image) => {
            //     if (image.dataset.tabsField === dataValue) {
            //         image.classList.remove('hidden');
            //     } else {
            //         image.classList.add('hidden');
            //     }
            // });

            tabButtons.forEach((btn) => {
                console.log(btn);
                console.log(event.target);
                if (btn === event.target) {
                    btn.classList.add('design-list__item_active');
                } else {
                    btn.classList.remove('design-list__item_active');
                }
            });
    });
});