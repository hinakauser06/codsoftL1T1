function readMore() {
    const text = document.querySelector('.imgr3p');
    const button = document.querySelector('.imgr3readmore');
    const req = document.getElementsByClassName(".imgrreq");
    const heading1 = document.querySelector('.imgr3h');
    text.classList.toggle('expanded');
    if (text.classList.contains('expanded')) {
        button.textContent = 'Read Less';
        heading1.style.top = '25%';
        text.style.top = "38%";
    } else {
        button.textContent = 'Read More';
        heading1.style.top = '40%';
        text.style.top = '45%';


    }
}