'use strict';
//TEXT WRITER START

class TypeWriter {
  constructor(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
//TEXT WRITER END

// section 2 button START
const sec2Button = document.querySelectorAll('.btn--sec2 .btn');
const sec2Info = document.querySelectorAll('.btn--sec2 .info');
const info = document.querySelectorAll('.sec2--info .info');

for (let i = 0; i < sec2Button.length; i++) {
  sec2Button[i].addEventListener('click', function () {
    sec2Button.forEach(t => t.classList.remove('sec-2-btn-active'));
    sec2Button[i].classList.add('sec-2-btn-active');
    const tab = sec2Button[i].getAttribute('data-tab');

    info.forEach(t => t.classList.remove('info--active'));
    const infoTab = document.querySelector(`.sec2--info .info--${tab}`);
    infoTab.classList.add('info--active');
  });
}

//border

//section 2 button END

//section 4 video START
const videoList = document.querySelectorAll('.video-nav ul li');
const videoPic = document.querySelectorAll('.video');
const videoIcon = document.querySelectorAll('.video-nav ul li i');

for (let i = 0; i < sec2Button.length; i++) {
  videoList[i].addEventListener('click', function () {
    videoList.forEach(t => t.classList.remove('video-li-active'));
    videoList[i].classList.add('video-li-active');
    videoPic.forEach(t => t.classList.remove('video-active'));
    videoPic[i].classList.add('video-active');
    videoIcon.forEach(t => t.classList.remove('video-active'));
    videoIcon[i].classList.add('video-active');
  });
}

const videoBox = document.querySelectorAll('.video-picture img');
const vidOverlay = document.querySelectorAll('.real-video ');
const videoPartOverlay = document.querySelector('.overlay ');
const closeOverlay = document.querySelectorAll('.real-vid-box i ');
const playButton = document.querySelectorAll('.video-picture i');

for (let i = 0; i < videoPic.length; i++) {
  playButton[i].addEventListener('click', function () {
    vidOverlay[i].classList.add('real-video-active');
    videoPartOverlay.classList.add('real-video-active');
  });
  videoBox[i].addEventListener('click', function () {
    vidOverlay[i].classList.add('real-video-active');
    videoPartOverlay.classList.add('real-video-active');
  });
}

for (let i = 0; i < closeOverlay.length; i++) {
  closeOverlay[i].addEventListener('click', function () {
    vidOverlay.forEach(t => t.classList.remove('real-video-active'));
    videoPartOverlay.classList.remove('real-video-active');
  });
}

//section 4 video START

//scroll to section
function moveToScroll(a, b) {
  const Nav = document.querySelector(`.${a}`);
  const section = document.querySelector(`.${b}`);
  Nav.addEventListener('click', function (e) {
    section.scrollIntoView({ behavior: 'smooth' });
  });
}

moveToScroll('home-logo', 'section--1');
moveToScroll('home-nav', 'section--1');
moveToScroll('about-nav', 'section--2');
moveToScroll('skill-nav', 'section--3');
moveToScroll('project-nav', 'section--4');
moveToScroll('cv-nav', 'section--5');
moveToScroll('contact-nav', 'section--6');
moveToScroll('header-contact', 'section--6');
moveToScroll('header-arrow', 'section--2');
moveToScroll('get-to-know-btn', 'section--2');
