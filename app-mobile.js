const productList = document.querySelector('.products-list-mobile');
const productListGrid = document.querySelector('.products-list-grid');

Products.forEach(product => {
    if(product.tag == '#food'){
        productList.innerHTML += 
        `
        <a href="./detail.html" class="product">
            <img src="${product.pimage}" alt="">
            <span class="product-name">${product.pname}</span>
            <span class="product-price">${product.pprice}</span>
        </a>
        `
    }
    else if (product.tag == '#drink'){
        productListGrid.innerHTML += 
        `
        <a href="./detail.html" class="product">
            <img src="${product.pimage}" alt="">
            <span class="product-name">${product.pname}</span>
            <span class="product-price">${product.pprice}</span>
        </a>
        `
    }
})

const showall = document.querySelector('.showall')
const showing = document.querySelector('.showed')
const infoContainer = document.querySelector('.product-infomation')
const blur = document.querySelector('.blur')

let x = 0;

showall.addEventListener('click', () => {
    if (x == 0) {
        infoContainer.style.height = 'auto'
        infoContainer.style.overflow = 'auto'
        infoContainer.removeChild(blur)
        showall.innerHTML = `<a class="showall">Thu gọn <img src="./images/arrow-up-light.png" alt=""></a>`
        x = 1
    }else if (x != 0) {
        infoContainer.style.height = '270px'
        infoContainer.style.overflowY = 'hidden'
        infoContainer.appendChild(blur)
        showall.innerHTML = `<a class="showall">Xem toàn bộ<img src="./images/arrow-down-light.png" alt=""></a>`
        x = 0
    }
    
})

$(document).ready(function() {
    $('#searchbox-mobile').focusin(function() {
        $('.logo-mobile').css('display', 'none')
        $('.logo-mobile-small').css('display', 'block')
        $('.icon-location').addClass('change')
    }).focusout(function() {
        $('.logo-mobile').css('display', 'block')
        $('.logo-mobile-small').css('display', 'none')
        $('.icon-location').removeClass('change')
    })
    
    $('.logo-left').click(function() {
        $('.phone-chat').toggleClass('show')
    })

    // slider change
    $('#product-images').owlCarousel({
        loop: false,
        items:1,
        dots: false,
        autoplay: false,
    });
});

