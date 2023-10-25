
const anchorTag = document.querySelector('a');

anchorTag.addEventListener('click', (event) => {
    event.preventDefault();
    window.open(event.target.href, '_blank');
});


