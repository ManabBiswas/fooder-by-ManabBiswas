const menuBtn = document.getElementById("menu");
const showMenu = document.getElementById("menuIcon")
const menuBtnIcon = document.getElementById("menuBtnIcon");

menuBtn.addEventListener("click",showMenuList);

function showMenuList() {
    if (showMenu.style.transform === 'translateX(0%)') {
        showMenu.style.display = 'none';
        setTimeout(() => {
            showMenu.style.transform = 'translateX(-100%)';
        }, 200); // Match the transition duration
    } else {
        showMenu.style.display = 'block';
        setTimeout(() => {
            showMenu.style.transform = 'translateX(0%)';
        }, 200); // Slight delay to ensure display change is registered
    }
}
