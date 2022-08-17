const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 0,
  breakpoints: {
    832: {
      slidesPerView: 3,
      spaceBetween: 0,
    }
  },
  speed: 350,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
});

window.addEventListener('DOMContentLoaded', function() {

  /* ハンバーガーメニュー */
  if (window.matchMedia( "(max-width: 831px)" ).matches) {
    openHumburger();
  };
  function openHumburger() {
    let humburger = document.querySelector('.navigation');
    let collapseItems = document.querySelector('.humburger');
    let humburgerIcon = document.querySelector('.navigation-icon');
    let humburgerClose = document.querySelector('.navigation-closed');
    humburger.addEventListener('click', () => {
      collapseItems.classList.toggle("collapse");
      humburger.classList.toggle("shadow");
      humburgerIcon.classList.toggle("icon-animation");
      humburgerClose.classList.toggle("navigation-close");
      humburgerClose.classList.toggle("icon-animation-closeIcon");
    });
  };

  /* 固定アンカーリンク */
  if (window.matchMedia( "(min-width: 832px)" ).matches) {
    fixAnchor();
  };

  function fixAnchor() {
    window.addEventListener('scroll', function() {
      let nav = document.querySelector('.fix-nav');
      let ball = document.querySelector('.fix-ball');
      let scrollTop = document.body.scrollTop;
      let fixLine = document.querySelector('.header').getBoundingClientRect().bottom + scrollTop;
      //メインビジュアルの下までスクロールしたらアンカーリンクを表示
      if (scrollTop > fixLine) {
        nav.classList.add("fixed-nav");
        ball.classList.add("fixed-ball");
      } else {
        nav.classList.remove("fixed-nav");
        ball.classList.remove("fixed-ball");
      };
      //お問い合わせボタンを過ぎたらアンカーリンクを非表示
      let exitPint = document.querySelector('.inquiryButton').getBoundingClientRect().top + scrollTop;
      if (scrollTop > exitPint) {
        nav.classList.remove("fixed-nav");
      };
      //閲覧中のsectionに応じてマーカーを切り替え
      let section1 = document.querySelector('#sectionAbout').getBoundingClientRect().top + scrollTop;
      let section2 = document.querySelector('#sectionOwner').getBoundingClientRect().top + scrollTop;
      let section3 = document.querySelector('#sectionService').getBoundingClientRect().top + scrollTop;
      let section4 = document.querySelector('#sectionGallery').getBoundingClientRect().top + scrollTop;
      let section5 = document.querySelector('#sectionNews').getBoundingClientRect().top + scrollTop;
      let section6 = document.querySelector('#sectionInfo').getBoundingClientRect().top + scrollTop;
      let section7 = document.querySelector('#sectionInquiry').getBoundingClientRect().top + scrollTop;
      let anchor1 = document.querySelector('.anchor1');
      let anchor2 = document.querySelector('.anchor2');
      let anchor3 = document.querySelector('.anchor3');
      let anchor4 = document.querySelector('.anchor4');
      let anchor5 = document.querySelector('.anchor5');
      let anchor6 = document.querySelector('.anchor6');
      let anchor7 = document.querySelector('.anchor7');
      let bar = 100; //調整

      //マーカーをつける
      if (scrollTop > section7 - bar -1) {
        removeMark()
        anchor7.classList.add("anchor-here");
      } else if (scrollTop > section6 - bar -1) {
        removeMark()
        anchor6.classList.add("anchor-here");
      } else if (scrollTop > section5 - bar -1) {
        removeMark()
        anchor5.classList.add("anchor-here");
      } else if (scrollTop > section4 - bar -1) {
        removeMark()
        anchor4.classList.add("anchor-here");
      } else if (scrollTop > section3 - bar -1) {
        removeMark()
        anchor3.classList.add("anchor-here");
      } else if (scrollTop > section2 - bar -1) {
        removeMark()
        anchor2.classList.add("anchor-here");
      } else if (scrollTop > section1 - bar -1) {
        removeMark()
        anchor1.classList.add("anchor-here");
      };
      //マーカーを外す
      function removeMark() {
        let anchors = [anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7];
        for (i = 0; i < anchors.length; i++) {
          let target = anchors[i];
          let checkTarget = anchors[i].classList.contains('anchor-here');
          if (checkTarget === true) {
            target.classList.remove("anchor-here");
          };
        }; 
      };
    });
  };
});
