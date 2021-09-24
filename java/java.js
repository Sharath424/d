var click_count = 0;
function clickevent() {

    click_count++;
    document.getElementById('Count_Button_Click').innerHTML = click_count;
    ran = Math.floor(Math.random() * 2) + 1;
    change_image = document.getElementById("Coin_image");
    coin_side = document.getElementById("show_the_side_name");
    coin_side.innerHTML = ran;
    if (ran == 1) {
        change_image.src = "image/as.png";
        coin_side.innerHTML = "Head";
    }
    if (ran == 2) {
        change_image.src = "image/sf.jpg";
        coin_side.innerHTML = "Tail";
    }

}
const bar = document.querySelector(".fa-bars")
const menu =document.querySelector(".menu")

bar.addEventListener("click",()=>{
    menu.classList.toggle("show-menu");
})