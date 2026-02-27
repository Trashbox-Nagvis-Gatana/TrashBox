const content = {
    'ka': {
        headerSubtitle: "სამშენებლო და სარემონტო ნარჩენების გატანა",
        title: "Trashbox • სამშენებლო ბუნკერები",
        btnCall: "დარეკვა",
        desc: `<p>Trashbox გთავაზობთ სამშენებლო ნარჩენების გატანას:</p>
               <ul><li>9 კუბიანი კონტეინერები</li><li>სწრაფი მიწოდება</li><li>გატანა შეთანხმებულ ვადებში</li><li>ხელსაყრელი ფასები</li></ul>`
    },
    'en': {
        headerSubtitle: "Construction and Renovation Waste Removal",
        title: "Trashbox • Construction Bunkers",
        btnCall: "Call Now",
        desc: `<p>Trashbox offers construction waste removal:</p>
               <ul><li>9 Cubic Meter Containers</li><li>Fast Delivery</li><li>Removal within agreed deadlines</li><li>Favorable Prices</li></ul>`
    },
    'ru': {
        headerSubtitle: "Вывоз строительного и ремонтного мусора",
        title: "Trashbox • Строительные бункеры",
        btnCall: "Позвонить",
        desc: `<p>Trashbox предлагает вывоз строительного мусора:</p>
               <ul><li>9-кубовые контейнеры</li><li>Быстрая доставка</li><li>Вывоз в оговоренные сроки</li><li>Выгодные цены</li></ul>`
    }
};

function changeLang(lang) {
    document.getElementById('header-subtitle').innerText = content[lang].headerSubtitle;
    document.getElementById('title').innerText = content[lang].title;
    document.getElementById('btn-call').innerText = content[lang].btnCall;
    document.getElementById('desc-box').innerHTML = content[lang].desc;
}

// Slideshow
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", showSlides);