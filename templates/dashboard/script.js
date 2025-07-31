document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.change-theme-button')
      .addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
    });
});