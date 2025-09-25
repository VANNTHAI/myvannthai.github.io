function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    } 
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000); 
}
showTime();





/*script of text slider*/
const slider = document.querySelector('[data-carousel]');
const slides = [...document.querySelectorAll('.Wallop-item')];
this.wallop = new Wallop(slider);

let prev = 0;

const removePrevClasses = index => {
  let prevClass;
  if (slides[index].classList.contains('Wallop-item--hidePrevious')) {
    prevClass = 'Wallop-item--hidePrevious';
  } else if (slides[index].classList.contains('Wallop-item--hideNext')) {
    prevClass = 'Wallop-item--hideNext';
  }

  if (prevClass) {
    setTimeout(() => {
      slides[index].classList.remove(prevClass);
    }, 600);
  }
};

const onChange = () => {
  removePrevClasses(prev);
  prev = this.wallop.currentItemIndex;
};

this.wallop.on('change', onChange);








class StickyNavigation {

  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    let self = this;
    $('.et-hero-tab').click(function () {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(() => {this.onScroll();});
    $(window).resize(() => {this.onResize();});
  }

  onTabClick(event, element) {
    event.preventDefault();
    let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
    $('html, body').animate({ scrollTop: scrollTop }, 600);
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkTabContainerPosition() {
    let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
    if ($(window).scrollTop() > offset) {
      $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
    } else
    {
      $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
    }
  }

  findCurrentTabSelector(element) {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    $('.et-hero-tab').each(function () {
      let id = $(this).attr('href');
      let offsetTop = $(id).offset().top - self.tabContainerHeight;
      let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
      if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css('width');
      left = this.currentTab.offset().left;
    }
    $('.et-hero-tab-slider').css('width', width);
    $('.et-hero-tab-slider').css('left', left);
  }}



new StickyNavigation();













const slideElements = ['.back__slide', '.card__slide', '.content__slide'];
let inProgress = false;

const goToSlide = (slideElements, index) => {
  if (!inProgress) {
    inProgress = true;

    $('.active').addClass('exit');
    $('.active').removeClass('active');
    slideElements.forEach(elem => {
      $(`${elem}:nth-child(${index})`).addClass('active');
    });

    const evenSlide = index % 2 === 0;
    if (evenSlide)
    $('.content__ping').addClass('content__ping--right');else

    $('.content__ping').removeClass('content__ping--right');
    $('.content__ping--noanimation').removeClass('content__ping--noanimation');

    setTimeout(() => $('.exit').removeClass('exit'), 1000);
    setTimeout(() => inProgress = false, 2000);
  }
};

$('.content__slide:nth-child(1) .button').on('click', () => goToSlide(slideElements, 2));
$('.content__slide:nth-child(2) .button').on('click', () => goToSlide(slideElements, 1));

setTimeout(() => goToSlide(slideElements, 2), 2000);
setTimeout(() => goToSlide(slideElements, 1), 6000);
let amount = 0;
