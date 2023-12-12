// Accordion

document.addEventListener('DOMContentLoaded', function () {
    var accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function (heading) {
        heading.addEventListener('click', function () {
            var accordionItem = this.parentNode;

            if (accordionItem.classList.contains('active')) {
                accordionItem.classList.remove('active');
            } else {
                var activeItem = document.querySelector('.accordion-item.active');

                if (activeItem) {
                    activeItem.classList.remove('active');
                }

                accordionItem.classList.add('active');
            }
        });
    });
});
