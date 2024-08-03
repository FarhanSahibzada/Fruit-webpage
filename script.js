
// // navigation 
let menuToggle = document.getElementById('tog');
let navigation = document.getElementById('nag');
let inputCheckbox = document.querySelector('.hamburger input');

menuToggle.addEventListener('click', () => {
    // Toggle the active class on navigation
    // Toggle the checked state of the checkbox input
    inputCheckbox.checked = !inputCheckbox.checked;

    if (inputCheckbox.checked) {
        navigation.classList.add('active');
    } else {
        navigation.classList.remove('active');
    }
});


let obj = {
    apple: {
        inner: "Apples are a timeless favorite, loved for their crisp texture and sweet-tart flavor. Whether you enjoy them fresh, baked into a pie, or added to salads, apples are as versatile as they are delicious. Packed with vitamins and fiber, they’re a great choice for a healthy snack. With so many varieties to choose from, there’s an apple to suit every taste."
    },
    mango: {
        inner: "Mangoes are a tropical delight, cherished for their juicy sweetness and vibrant flavor. Whether you savor them fresh, blend them into smoothies, or incorporate them into salsas and desserts, mangoes add a burst of sunshine to any dish. Rich in vitamins A and C, as well as antioxidants, mangoes are not just delicious but also a nutritious choice. With their smooth texture and aromatic taste, there’s a mango variety to tantalize every palate."
    },
    watermelon: {
        inner: "Watermelons are a refreshing treat, loved for their juicy sweetness and hydrating qualities. Whether you enjoy them sliced on a hot day, blended into cool beverages, or added to fruit salads, watermelons are a summer favorite. Packed with vitamins A and C, as well as hydration, they’re a great way to stay refreshed and nourished. With their vibrant color and crisp texture, there’s a watermelon variety to satisfy every craving."
    },
    dragonFruit: {
        inner: "Dragon fruit is a stunning tropical gem, celebrated for its striking appearance and unique flavor. Whether you enjoy it fresh, blended into smoothies, or added to fruit salads, dragon fruit offers a refreshing and mildly sweet taste. Rich in antioxidants, vitamin C, and fiber, it's not only delicious but also packed with health benefits. With its vibrant colors and intriguing texture, dragon fruit adds a touch of exotic flair to any dish."
    },
    pineapple: {
        inner: "Pineapple is a tropical treasure, cherished for its sweet and tangy flavor that adds a burst of sunshine to any dish. Whether you enjoy it fresh, grilled, or blended into smoothies and desserts, pineapple brings a refreshing zest to your palate. Packed with vitamins C and B6, as well as bromelain, an enzyme with digestive benefits, pineapple is both delicious and nutritious. With its vibrant color and juicy texture, pineapple is a versatile fruit that complements a variety of dishes."
    }


}
// active class in thumb 
let el = document.querySelectorAll('.thumb li');
for (let i = 0; i < el.length; i++) {
    el[i].onclick = function () {
        let imagebox = document.querySelector(".imageBox");
        imagebox.classList.remove("animate__slideInRight");
        void imagebox.offsetWidth;
        imagebox.classList.add("animate__slideInRight");
        let text = el[i].getAttribute("data-text");
        let description = document.getElementById("description");
        switch (text) {
            case "Apple":
                description.innerHTML = obj.apple.inner;
                break;
            case "Mango":
                description.innerHTML = obj.mango.inner
                break;
                case "water melon":
                    description.innerHTML = obj.watermelon.inner;
                    break;
            case "dragon Fruits":
                description.innerHTML = obj.dragonFruit.inner;
                break;
            case "Pine Apple":
                description.innerHTML = obj.pineapple.inner;
                break;
                default:
                    break;
                }
                var c = 0;
                while (c < el.length) {
                    el[c++].className = 'check';
                }
        el[i].className = 'check active';
    }
}
// image change 
function imgSlider(anything) {
    document.querySelector('.fruits').src = anything;
}
// change background color 
function changeBgcolor(color) {
    const bg = document.querySelector('.bg');
    bg.style.background = color;
}

