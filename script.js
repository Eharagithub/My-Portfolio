let menu=document.querySelector('#menu-bars');
let header=document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

windows.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

/*let cursor1=document.querySelector('.cursor-1');
let cursor2=document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}
*/
document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }
    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});
// Get references to the cursor elements
const cursor1 = document.querySelector(".cursor-1");
const cursor2 = document.querySelector(".cursor-2");

// Add a hover event listener to elements with the class "active"
const activeElements = document.querySelectorAll(".active");
activeElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        // Change the cursor appearance when hovering over an "active" element
        cursor1.classList.add("active");
        cursor2.classList.add("active");
    });

    element.addEventListener("mouseleave", () => {
        // Revert to the default cursor appearance when leaving the "active" element
        cursor1.classList.remove("active");
        cursor2.classList.remove("active");
    });
});

// Add a mousemove event listener to track the cursor's position
document.addEventListener("mousemove", (e) => {
    // Update the cursor positions to follow the mouse
    cursor1.style.top = e.pageY + "px";
    cursor1.style.left = e.pageX + "px";

    cursor2.style.top = e.pageY + "px";
    cursor2.style.left = e.pageX + "px";
});
