const title = document.querySelector('.title');
const text = title.querySelector('span');
const walk = 1000; // 100px

function shadow(e) {
    const {
        offsetWidth: width,
        offsetHeight: height
    } = title;
    let {
        offsetX: x,
        offsetY: y
    } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow =
        `
        ${xWalk}px ${yWalk}px 0 rgba(244, 67, 54, 0.8),

        ${xWalk * -1}px ${yWalk}px 0 rgba(233, 30, 99, 0.8),
        ${xWalk * -2}px ${yWalk * 2}px 0 rgba(33, 150, 244, 0.8),

        ${yWalk * -1}px ${xWalk}px 0 rgba(63, 81, 181, 0.8),
        ${yWalk * -2}px ${xWalk * 2}px 0 rgba(0, 150, 136, 0.8),

        ${yWalk * 2}px ${xWalk * -2}px 0 rgba(0, 188, 212, 0.8),
        ${xWalk * 2}px ${yWalk * -2}px 0 rgba(76, 175, 80, 0.8)
        `;
}
title.addEventListener('mousemove', shadow);