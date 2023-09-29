

$(document).ready(function () {
  $('.prev-arrow').html('<i class="bi bi-chevron-double-left"></i>');
  $('.next-arrow').html('<i class="bi bi-chevron-double-right"></i>');
  $('.grid-container').slick({
    slidesToShow: 4, // Hiển thị 4 sản phẩm cùng một lúc
    slidesToScroll: 1, // Di chuyển 1 sản phẩm mỗi lần chuyển đổi
    prevArrow: $('.prev-arrow'), // Icon mũi tên trái
    nextArrow: $('.next-arrow'), // Icon mũi tên phải
    responsive: [
      {
        breakpoint: 991, // Thêm breakpoint mới
        settings: {
          slidesToShow: 3 // Hiển thị 3 sản phẩm trên các thiết bị có độ rộng nhỏ hơn hoặc bằng 991px
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2 // Hiển thị 2 sản phẩm trên các thiết bị có độ rộng nhỏ hơn 768px
        }
      }
    ]
  });
});

window.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.show-fixed-header');
  var scrollToTopBtn = document.getElementById('backtotop');

  // Ẩn show-fixed-header khi trang web được tải lên
  header.classList.remove('show');

  // Hiển thị show-fixed-header khi cuộn xuống đến 200px
  window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition >= 200) {
      header.classList.add('show');
      scrollToTopBtn.classList.add('show-button-back-to-top');
    } else {
      header.classList.remove('show');
      scrollToTopBtn.classList.remove('show-button-back-to-top');
    }
  });
});

// window.addEventListener('scroll', function() {
//   var scrollToTopBtn = document.getElementById('backtotop');
//   if (window.scrollY > 300) {
//     scrollToTopBtn.classList.add('show');
//   } else {
//     scrollToTopBtn.classList.remove('show');
//   }
// });

// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// }

//Define the placeholder where the text will be write in thanks to his id.
let placeholder = document.getElementById("typed-text");
//Stock all of the sentences pieces in an array.
let another_words = ["FIREGUARD", "this is an infinite typing animation,", "where you can put", "as many words as you wish.", "Enjoy ! :)"];
let words = ["FIREGUARD"];
//Initialize the index at the first element of the previously created array.
let index = 0;
function type(word) {
  let i = 0;
  //Set the interval that makes the writing animation.
  let writing = setInterval(() => {
    //Add the letter at the i index of the current word in the placeholder.
    placeholder.innerHTML += word.charAt(i);
    i++;
    //If the i index reaches the end of the current word, the writing animation interval stops and the deleting animation beggins after a defined time.
    if (i >= word.length) {
      clearInterval(writing);
      setTimeout(erase, 1000);
    }
  }, 400)

}

function erase() {
  //Set the interval that makes the deleting animation.
  let deleting = setInterval(() => {
    //Pop off the last character of the previously written sentence.
    placeholder.innerHTML = placeholder.innerHTML.slice(0, -1);
    //If no one single letter remains, the deleting animation interval stops.
    if (placeholder.innerHTML.length <= 0) {
      clearInterval(deleting);
      //The index var increases by 1, the writing animation is about to start with the next sentence.
      index++;
      //If the index var reaches the end of the sentences array, set his value at 0 to looping from the first sentence of the array.
      if (index >= words.length) {
        index = 0;
      }
      type(words[index])
    }


  }, 25);

}

//Start the whole animation.
type(words[index]);





