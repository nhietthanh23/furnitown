$(window).on('load',function(){
    $('.preloader').fadeOut(800);
})
//

    let $carousel__group = $('.work__room-card');
        $carousel__group.flickity({
        cellSelector:'.work__room-item',
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
        draggable: true,
        friction: 1,
        selectedAttraction: 0.05,
     });

   var width = $(window).width();
    console.log(width);
    if (width <= 768 && width >= 480){
        let $carousel__group = $('.work__room-card');
        $carousel__group.flickity({
        cellSelector:'.work__room-item',
        pageDots: false,
        groupCells: 2,
        prevNextButtons: false,
        wrapAround: true,
        draggable: true,
        friction: 1,
        selectedAttraction: 0.05,
     });
    }
   var width = $(window).width();
    console.log(width);
    if (width <= 480){
        let $carousel__group = $('.work__room-card');
        $carousel__group.flickity({
        cellSelector:'.work__room-item',
        pageDots: false,
        groupCells: 1,
        prevNextButtons: false,
        wrapAround: true,
        draggable: true,
        friction: 1,
        selectedAttraction: 0.05,
     });
    }
    
    
    

    $('.next-group').on( 'click', function() {
    $carousel__group.flickity('next',true);
    });
    $('.prev-group').on( 'click', function() {
    $carousel__group.flickity('previous');
    });




//


//
$('.slider__menu').click(function(e){ 
    $('.homepage').addClass('active')
    $('.slider__wrap').addClass('active')
    $('.slider__bottom').addClass('active-bottom')
    e.stopPropagation();
    $('.menu__tab').toggleClass('active')
})
$('.cancel').click(function(){
    $('.menu__tab').removeClass('active')
    $('.slider__wrap').removeClass('active')
        $('.homepage').removeClass('active')
        $('.slider__bottom').removeClass('active-bottom')
})

$('body').click(function(e){
    $('.menu__tab').removeClass('active');
    $('.slider__wrap').removeClass('active')
        $('.homepage').removeClass('active')
        $('.slider__bottom').removeClass('active-bottom')
})
$('.menu').click(function(e){
    console.log(123)
    $('.homepage').addClass('active')
    $('.slider__bottom').addClass('active-bottom')
    e.stopPropagation();
    $('.menu__tab').toggleClass('active')
})


//slider
let $carousel= $('.slider__wrap')
 $carousel.flickity({
    //  option
    cellAlign:'left',
    prevNextButtons: false,
    contain:true,
    wrapAround:true,
    autoPlay: 2000,
    pageDots: false,
    contain:true,
    friction: 1,
    selectedAttraction: 0.05,
    
 })
 //next
 $('.slider .next').on( 'click', function() {
  $carousel.flickity('previous');
});
// previous wrapped
$('.slider .prev').on( 'click', function() {
  $carousel.flickity( 'next', true );
});
  

//crousel-group
// let $carousel__group = $('.group-card')
//    $carousel__group.flickity({
//     groupCells: 2,
//     pageDots: false,
//     prevNextButtons: false,
//     draggable: true,
//  });


//Carousel Details
let $carousel__details = $('.carousel-details')
$carousel__details.flickity({
    // cellSelector: ".work__room-item",
    pageDots: false,
    cellAlign:'left',
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    draggable: true,
    friction: 1,
    selectedAttraction: 0.05,
})
  $('.next-details').on( 'click', function() {
  $carousel__details.flickity('next',true);
});
  $('.prev-details').on( 'click', function() {
  $carousel__details.flickity('previous');
});

// MENU SCROLL
let $slider= document.querySelector(".homepage .slider")
let $header= document.querySelector(".home .container-fluid")
let $about = document.querySelector('.abouts .section1')
let $product= document.querySelector('.product .slider')
let $service= document.querySelector('.services .service')
let $project= document.querySelector('.project .all-project')
let $news= document.querySelector('.news .all-news')
let $news__details= document.querySelector('.newsdetails .slider')
let $contact= document.querySelector('.contact .contacts')
let $details= document.querySelector('.detail .details')
if ($("body").data("title") === "index") {
   window.addEventListener("scroll",function(){
    
    let scrollTop = document.querySelector('html').scrollTop;

     if(scrollTop > $slider.offsetHeight-50){
        $('.home .list-item').slideDown().css({'display':'inline-flex',});
    }else{
        $('.home .list-item').slideUp();
    }
})
}
if ($("body").data("title") === "about") {
   window.addEventListener("scroll",function(){
    
    let scrollTop = document.querySelector('html').scrollTop;

     if(scrollTop > $about.offsetHeight-800){
        $('.home .list-item').slideDown().css({'display':'inline-flex',});
    }else{
        $('.home .list-item').slideUp();
    }
})

}
if ($("body").data("title") === "product") {
    window.addEventListener("scroll",function(){
    
    let scrollTop = document.querySelector('html').scrollTop;

     if(scrollTop > $product.offsetHeight-50){
        $('.home .list-item').slideDown().css({'display':'inline-flex',});
    }else{
        $('.home .list-item').slideUp();
    }
})
}
if ($("body").data("title") === "project") {
  window.addEventListener("scroll",function(){
    
    let scrollTop = document.querySelector('html').scrollTop;

     if(scrollTop > $project.offsetHeight-200){
        $('.home .list-item').slideDown().css({'display':'inline-flex',});
    }else{
        $('.home .list-item').slideUp();
    }
})
}
if ($("body").data("title") === "service") {
   window.addEventListener("scroll",function(){
    
    let scrollTop = document.querySelector('html').scrollTop;

     if(scrollTop > $service.offsetHeight-750){
        $('.home .list-item').slideDown().css({'display':'inline-flex',});
    }else{
        $('.home .list-item').slideUp();
    }
})
}
if ($("body").data("title") === "news") {
   window.addEventListener("scroll",function(){
    
    let scrollTop = document.querySelector('html').scrollTop;

     if(scrollTop > $news.offsetHeight-100){
        $('.home .list-item').slideDown().css({'display':'inline-flex',});
    }else{
        $('.home .list-item').slideUp();
    }
})
}
if ($("body").data("title") === "news__details") {
    window.addEventListener("scroll",function(){
    
    let scrollTop = document.querySelector('html').scrollTop;

     if(scrollTop > $news__details.offsetHeight-300){
        $('.home .list-item').slideDown().css({'display':'inline-flex',});
        console.log(123)
    }else{
        $('.home .list-item').slideUp();
    }
})
}
if ($("body").data("title") === "contact") {
   
window.addEventListener("scroll",function(){
    
    let scrollTop = document.querySelector('html').scrollTop;

     if(scrollTop > $contact.offsetHeight-550){
        $('.home .list-item').slideDown().css({'display':'inline-flex',});
    }else{
        $('.home .list-item').slideUp();
    }
})
}
if ($("body").data("title") === "details") {
    window.addEventListener("scroll",function(){
    
    let scrollTop = document.querySelector('html').scrollTop;
    console.log($details)
     if(scrollTop > $details.offsetHeight-750){
        $('.header__detail .list-item').slideDown().css({'display':'inline-flex',});
    }else{
        $('.header__detail .list-item').slideUp();
    }
})

}

// MENU SCROLL-Mobile
let prevScroll = $('html').scrollTop();

$(document).scroll(function(){
   if(prevScroll < window.pageYOffset){
        $('.header-mobile').css({top: - $('.header-mobile').height(),
        transition: 'all 0.4s'
    });
   }else{
        $('.header-mobile').css({top: 0,
            transition: 'all 0.4s'
        })
   }
   prevScroll=window.pageYOffset;
});


//selection
$('.menu-project').click(function(e){
    e.stopPropagation();
    $('.list-project').not($(this).next()).slideUp();
    $(this).next().slideToggle();
    $('.menu-project').toggleClass('triange')
})
$('.list-project a').click(function(){
    let name= $(this).text();
    $('.menu-project h4').text(name);
    $('.menu-project').removeClass('triange')
})
$('body').click(function(e){
    $('.list-project').slideUp();
    $('.menu-project').removeClass('triange')
})

//backToTop

$('.backtotop').click(function(){
    window.scroll({
        top:-document.body.offsetHeight,
        behavior:'smooth',
    })
})

//PopUp
$('.btn-about').click(function(e){
    e.stopPropagation()
    $('.popup').not($(this).next()).slideDown();
})
$('.close').click(function(){
    $('.popup').slideUp();
})
$('body').click(function(){
    $('.popup').slideUp();
})

//photo
var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if(figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if(figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML; 
            }
            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if(!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }
            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if(index >= 0) {
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};
        if(hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }
        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            showAnimationDuration : 0,
            hideAnimationDuration : 0
        };
        if(fromURL) {
            if(options.galleryPIDs) {
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if( isNaN(options.index) ) {
            return;
        }
        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll( gallerySelector );
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

$(window).load(function () {
    initPhotoSwipeFromDOM('.carousel-details');
    initPhotoSwipeFromDOM('.work__apartment-item');
});

$('.contacts .btn').on('click',function(){
    alert('Cảm ơn bạn đã gửi phản hồi, chúng tôi sẽ phản hồi lại sớm nhất')
})