export function toLink(e, id) {
    e.preventDefault();
    // const target = document.querySelector(id);
    // window.smoothScroll.animateScroll( target );
    const offsetTop = document.getElementById(id).offsetTop;
    console.log(offsetTop)
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
}