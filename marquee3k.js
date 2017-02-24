/**
 * MARQUEE 3000 MARQUEE 3000 MARQUEE 3000 MARQUEE 3000 MARQUEE 3000
 * http://github.com/ezekielaquino/marquee3000
 * Marquees for the new millenium v1.0
 * MIT License
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Marquee3k = factory();
  }
}(this, function() {
  'use strict';

<<<<<<< HEAD
  class Marquee3k {
    constructor(element, options) {
      this.element = element;
      this.selector = options.selector;
      this.speed = element.dataset.speed || 0.25;
      this.pausable = element.dataset.pausable;
      this.reverse = element.dataset.reverse;
      this.paused = false;
      this.parent = element.parentElement;
      this.parentProps = this.parent.getBoundingClientRect();
      this.content = element.children[0];
      this.innerContent = this.content.innerHTML;
      this.wrapStyles = '';
      this.offset = 0;

      this._setupWrapper();
      this._setupContent();
      this._setupEvents();

      this.wrapper.appendChild(this.content);
      this.element.appendChild(this.wrapper);
    }

    _setupWrapper() {
      this.parent.style.overflowX = 'hidden';
      this.wrapper = document.createElement('div');
      this.wrapper.classList.add('marquee3k__wrapper');
      this.wrapStyles = 'white-space: nowrap;';
      this.wrapper.setAttribute('style', this.wrapStyles);
    }
=======
  window.Marquee3k = function(options) {
    var options = options || {};
    var selector = options.selector || '.marquee3k';
    var spacing = options.spacing || '30px';
    var marquees = document.querySelectorAll(selector);
    var winWidth = window.innerWidth;


    init();
    window.addEventListener('resize', onResize);


    /**
     * INITIALIZE
     */
    function init() {
      for (var i = 0; i < marquees.length; i++) {
        var marquee = marquees[i];
        var marqueeContent = marquee.innerHTML;
        var marqueeContentWrap = document.createElement('div');
        var marqueeElem = document.createElement('span');
        var marqueeContentWrapWidth = 0;
        var marqueeElemClone, marqueeElemWidth;

        // Style the inner wrapper
        marquee.innerHTML = '';
        marquee.appendChild(marqueeContentWrap);
        marqueeContentWrap = marquee.children[0];
        marqueeContentWrap.style.whiteSpace = 'nowrap';
        marqueeContentWrap.style.position = 'absolute';

        // Set marquee properties
        marquee.position = 0;
        marquee.vertical = marquee.dataset.vertical;
<<<<<<< HEAD
        marquee.content = marqueeContent;
=======
        marquee.reverse = marquee.dataset.reverse;
        marquee.pausable = marquee.dataset.pausable;
>>>>>>> Updates with pausable marquee
        marquee.direction = marquee.dataset.reverse ? 1 : -1;
        marquee.speed = (marquee.dataset.speed ? (marquee.dataset.speed / 60) : (50/60)) * marquee.direction;
        marquee.delay = 0;

        // Random speed
        if (options.randomSpeed && !marquee.dataset.speed) {
          var random = Math.floor(Math.random() * 50) + 10;
          marquee.speed = (random / 60) * marquee.direction;
        }

        // Insert content and create a clone
        marqueeElem.innerHTML = marquee.content;
        marqueeElem.style.display = 'inline-block';
        marqueeElem.style.paddingRight = spacing;
        marqueeElemClone = marqueeElem.cloneNode(true);

        // Append first copy
        marqueeContentWrap.appendChild(marqueeElem);

        // Save initial width / height
        marquee.contentWidth = marqueeContentWrap.offsetWidth;
        marquee.contentHeight = marqueeContentWrap.offsetHeight;

        // Set marquee elem style
        marquee.style.overflow = 'hidden';
        marquee.style.visibility = 'hidden';
        marquee.style.position = 'relative';
        marquee.style.height = marquee.contentHeight + 'px';

        // We make at least two copies (e.g. for LARGE elements, only needs two)
        marqueeContentWrap.appendChild(marqueeElemClone);

        // Sset initial wrap width
        marqueeContentWrapWidth = marqueeContentWrap.offsetWidth;

        // Set conditional styling (vertical / reversed)
        if (marquee.dataset.vertical) {
          marquee.classList.add('marquee3k--vertical');
          marquee.style.width = marquee.contentHeight + 'px';
          marquee.style.height = '100%';
          marqueeContentWrap.style.transform = 'rotate(-90deg)';

          if (!marquee.dataset.reverse) {
            marqueeContentWrap.style.transformOrigin = '0% 0%';
            marqueeContentWrap.style.left = 0;
            marqueeContentWrap.style.top = '100%';
          } else {
            marqueeContentWrap.style.transformOrigin = '100% 100%';
            marqueeContentWrap.style.bottom = '100%';
            marqueeContentWrap.style.right = 0;
          }
        } else {
          marqueeContentWrap.style.top = 'calc(50% - ' + (marquee.contentHeight / 2) + 'px)';
>>>>>>> 👡 Adds demo page

    _setupContent() {
      this.content.classList.add(`${this.selector}__copy`);
      this.content.style.display = 'inline-block';
      this.contentWidth = this.content.offsetWidth;

      this.requiredReps = this.contentWidth > this.parentProps.width ? 2 : Math.ceil((this.parentProps.width - this.contentWidth) / this.contentWidth) + 1;

<<<<<<< HEAD
      for (let i = 0; i < this.requiredReps; i++) {
        this._createClone();
=======
        marquee.style.visibility = 'visible';
        marquee.classList.add('is-ready');
<<<<<<< HEAD
>>>>>>> 👡 Adds demo page
=======

        // Add event listeners if marquee is pausable on hover
        (function(i) {
          if (marquee.pausable) {
            marquees[i].addEventListener('mouseenter', function() {
              marquees[i].isPaused = true;
            });

            marquees[i].addEventListener('mouseleave', function() {
              marquees[i].isPaused = false;
            });
          }
        })(i);
>>>>>>> Updates with pausable marquee
      }

      if (this.reverse) {
        this.offset = this.contentWidth * -1;
      }

      this.element.classList.add('is-init');
    }

    _setupEvents() {
      this.element.addEventListener('mouseenter', () => {
        if (this.pausable) this.paused = true;
      });

      this.element.addEventListener('mouseleave', () => {
        if (this.pausable) this.paused = false;
      });
    }

    _createClone() {
      const clone = document.createElement('span');
      clone.classList.add(`${this.selector}__copy`)
      clone.innerHTML = this.innerContent;
      this.wrapper.appendChild(clone);
    }

    animate() {
      if (!this.paused) {
        if (!this.reverse) {
          if (this.offset > this.contentWidth * -1) this.offset -= this.speed;
          else this.offset = 0;
        } else {
<<<<<<< HEAD
          if (this.offset < 0) this.offset += this.speed;
          else this.offset = this.contentWidth * -1;
=======
          if (!marquee.vertical) {
            if (marquee.dataset.reverse) {
              if (marquee.position >= marquee.contentWidth) marquee.position = 0;
            } else {
              if (marquee.position <= marquee.contentWidth * -1) marquee.position = 0;
            }

            marquee.position += marquee.speed;
            marquee.children[0].style.transform = 'translate3d(' + marquee.position + 'px, 0, 0)';
          } else {
            if (marquee.dataset.reverse) {
              if (marquee.position <= marquee.contentWidth * -1) marquee.position = 0;
            } else {
              if (marquee.position >= marquee.contentWidth) marquee.position = 0;
            }

            marquee.position -= marquee.speed;
            marquee.children[0].style.transform = 'translate3d(0, ' + marquee.position + 'px, 0) rotate(-90deg)';
          }
>>>>>>> 👡 Adds demo page
        }

        this.wrapper.setAttribute('style', `${this.wrapStyles} transform: translate3d(${this.offset}px, 0, 0);
        `);
      }
    }

    repopulate(difference, isLarger) {
      this.contentWidth = this.content.offsetWidth;

      if (isLarger) {
        const amount = Math.ceil(difference / this.contentWidth) + 1;

        for (let i = 0; i < amount; i++) {
          this._createClone();
        }
      }
    }

    static init(options = { selector: 'marquee3k' }) {
      const INSTANCES = [];
      const marquees = document.querySelectorAll(`.${options.selector}`);
      let previousWidth = window.innerWidth;
      let timer;

      for (let i = 0; i < marquees.length; i++) {
        const marquee = marquees[i];
        const instance = new Marquee3k(marquee, options);
        INSTANCES.push(instance);
      }

      animate();

      function animate() {
        for (const instance of INSTANCES) {
          instance.animate();
        }
        window.requestAnimationFrame(animate);
      }

      window.addEventListener('resize', () => {
        clearTimeout(timer);

        timer = setTimeout(() => {
          const isLarger = previousWidth < window.innerWidth;
          const difference = window.innerWidth - previousWidth;

          for (const instance of INSTANCES) {
            instance.repopulate(difference, isLarger);
          }

          previousWidth = this.innerWidth;
        });
      }, 250);
    }
  }

  return Marquee3k;

}));