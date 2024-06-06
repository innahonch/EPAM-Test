document.addEventListener('DOMContentLoaded', function () {
    const userNames = document.querySelectorAll('.userName');

    userNames.forEach(function (userName) {
        userName.addEventListener('click', function () {
            const name = this.textContent;
            alert('Hello, ' + name);
        });
    });
});
