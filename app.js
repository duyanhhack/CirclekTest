// show products-list
const productListUpper = document.querySelector('.products-list .upper-list');
const productListLower = document.querySelector('.products-list .lower-list');
const productListUpperPhone = document.querySelector('.products-list-phone .upper-list-phone');
const productListLowerPhone = document.querySelector('.products-list-phone .lower-list-phone');

Products.forEach(product => {
    if(product.tag == '#food'){
        productListUpper.innerHTML += 
        `
        <a href="./detail.html" class="product">
            <span class="advertise">Ads</span>
            <img src="${product.pimage}" alt="">
            <span class="product-name">${product.pname}</span>
            <span class="product-price">${product.pprice}</span>
        </a>
        `
    }else if(product.tag == '#drink') {
        productListLower.innerHTML += 
        `
        <a href="./detail.html" class="product">
            <span class="advertise">Ads</span>
            <img src="${product.pimage}" alt="">
            <span class="product-name">${product.pname}</span>
            <span class="product-price">${product.pprice}</span>
        </a>
        `
    }
});

Products.forEach(product => {
    if(product.tag == '#food'){
        productListUpperPhone.innerHTML += 
        `
        <a href="./detail.html" class="product">
            <img src="${product.pimage}" alt="">
            <span class="product-name">${product.pname}</span>
            <span class="product-price">${product.pprice}</span>
        </a>
        `
    }
    else if(product.tag == '#drink') {
        productListLowerPhone.innerHTML += 
        `
        <a href="./detail.html" class="product">
            <img src="${product.pimage}" alt="">
            <span class="product-name">${product.pname}</span>
            <span class="product-price">${product.pprice}</span>
        </a>
        `
    }
});

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
    
    // slider
    $('#slider1').owlCarousel({
        loop: true,
        items:1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
    });

    $('#slider2').owlCarousel({
        loop: true,
        items:1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1500,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
    });

    $(window).resize(function(){
        let items = document.querySelectorAll('.products-container .products-list .upper-list .product')
        let itemsTwo = document.querySelectorAll('.products-container .products-list .lower-list .product')
        let price = document.querySelectorAll('.upper-list .product .product-price');
        let productName = document.querySelectorAll('.upper-list .product .product-name');
        let productNameTwo = document.querySelectorAll('.lower-list .product .product-name');
        let advertise = document.querySelectorAll('.upper-list .product .advertise')
        let advertiseTwo = document.querySelectorAll('.lower-list .product .advertise')

        let width = $(window).width();
        if (width <= 880){
            for(i = 0; i<items.length; i++) {
                if(productName[i].innerText == 'Mỳ trộn xúc xích trứng chiên') {
                    price[i].innerHTML = '23.000 đ'
                }
            }
        }
        else{
            for(i = 0; i<items.length; i++) {
                if(productName[i].innerText == 'Mỳ trộn xúc xích trứng chiên') {
                    price[i].innerHTML = 'pre-order'
                }
            }
        }

        if(width <= 570) {
            for(i = 0; i<items.length; i++) {
                if(productName[i].innerText == 'Sandwich') {
                    advertise[i].innerHTML = 'PRE-ORDER'
                    advertise[i].style.background = '#F99B2A'
                    advertise[i].style.border = '1px solid #F99B2A'
                    advertise[i].style.fontSize = '10px'
                    advertise[i].style.height = '30px'
                    advertise[i].style.lineHeight = '30px'
                    advertise[i].classList.add('show')
                }
                else if(productName[i].innerText == 'Mỳ trộn xúc xích trứng chiên') {
                    advertise[i].innerHTML = 'MỚI'
                    advertise[i].style.padding = '0'
                    advertise[i].style.width = '30px'
                    advertise[i].style.height = '30px'
                    advertise[i].style.fontSize = '10px'
                    advertise[i].style.textAlign = 'center'
                    advertise[i].style.lineHeight = '30px'
                    advertise[i].classList.add('show')
                }
            }

            for(i = 0; i<itemsTwo.length; i++) {
                if(productNameTwo[i].innerText == 'Trà sữa Thái (xanh)') {
                    itemsTwo[i].innerHTML = `
                        <a href="./detail.html" class="product">
                            <span class="advertise">Ads</span>
                            <img src="./images/products/beer.png" alt="">
                            <span class="product-name">Bia Heniken Silver</span>
                            <span class="product-price">23.000 đ</span>
                        </a>
                    `
                }
                if(productNameTwo[i].innerText == 'Bia Heniken Silver') {
                    advertiseTwo[i].innerHTML = '18+'
                    advertiseTwo[i].style.padding = '0'
                    advertiseTwo[i].style.width = '30px'
                    advertiseTwo[i].style.height = '30px'
                    advertiseTwo[i].style.fontSize = '10px'
                    advertiseTwo[i].style.textAlign = 'center'
                    advertiseTwo[i].style.lineHeight = '30px'
                    advertiseTwo[i].style.background = 'white'
                    advertiseTwo[i].style.border = '1px solid #EE2E24'
                    advertiseTwo[i].style.color = '#EE2E24'
                    advertiseTwo[i].classList.add('show')
                }
            }
        }else {
            for(i = 0; i<items.length; i++) {
                if(productName[i].innerText == 'Sandwich') {
                    advertise[i].classList.remove('show')
                }
                else if(productName[i].innerText == 'Mỳ trộn xúc xích trứng chiên') {
                    advertise[i].classList.remove('show')
                }
            }

            for(i = 0; i<itemsTwo.length; i++) {
                if(productNameTwo[i].innerText == 'Trà sữa Thái (xanh)') {
                    advertiseTwo[i].classList.remove('show')
                }
                else if(productNameTwo[i].innerText == 'Bia Heniken Silver') {
                    itemsTwo[i].innerHTML = `
                        <a href="./detail.html" class="product">
                            <span class="advertise">Ads</span>
                            <img src="./images/products/trasua.png" alt="">
                            <span class="product-name">Trà sữa Thái (xanh)</span>
                            <span class="product-price">23.000 đ</span>
                        </a>
                    `
                }
            }
        }
    });
});