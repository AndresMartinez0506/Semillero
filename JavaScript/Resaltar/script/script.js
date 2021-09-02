const aTags = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

for (let i = 0; i < aTags.length; i++) {
    aTags[i].addEventListener("mouseenter", function (){
        this.style.transform = `scale(2)`;
        const linkCoords = this.getBoundingClientRect();
        cambiaHighlight(linkCoords);

    })
    aTags[i].addEventListener("mouseleave" , function() {
        this.style.transform = `scale(1)`;
        const linkCoords = this.getBoundingClientRect();
        cambiaHighlight(linkCoords);
    })
}

function cambiaHighlight(linkCoords){
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px,${coords.top}px )`;
}