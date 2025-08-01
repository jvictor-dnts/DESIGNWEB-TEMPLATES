document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.change-theme-button')
      .addEventListener('click', function () {
        document.body.classList.add('theme-transition');
        document.body.classList.toggle('dark-theme');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 400);
    });
});