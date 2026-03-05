
/* past-present image slider script. reference code: https://codepen.io/Coding-in-Public/pen/NWyjZwO */
document.querySelectorAll('.slider').forEach(slider => {
    slider.addEventListener('input', (e) => {
        e.target.closest('.img-column').style.setProperty('--position', `${e.target.value}%`);
    });
})