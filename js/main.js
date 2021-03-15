window.onload = function () {
  var btnBurger = document.getElementById('burgerActive');
  var btnClose = document.getElementById('burgerClose');

  var menu = document.getElementById('menu');
  var menuName = document.getElementById('menuName');

  btnBurger.onclick = function () {
    btnBurger.classList.add('menu__burger_active');
    btnClose.classList.remove('menu__burger_close');

    menu.classList.add('menu_active');
    menuName.classList.remove('menu__name_active');

    [...document.getElementsByClassName('menu__text')].forEach((i) =>
      i.classList.remove('menu__text_active')
    );
  };

  btnClose.onclick = function () {
    btnClose.classList.add('menu__burger_close');
    btnBurger.classList.remove('menu__burger_active');

    menu.classList.remove('menu_active');
    menuName.classList.add('menu__name_active');

    [...document.getElementsByClassName('menu__text')].forEach((i) =>
      i.classList.add('menu__text_active')
    );
  };
};

(function () {
  var a = document.querySelector('#search'),
    b = null;
  window.addEventListener('scroll', Ascroll, false);
  document.body.addEventListener('scroll', Ascroll, false);
  function Ascroll() {
    if (b == null) {
      var Sa = getComputedStyle(a, ''),
        s = '';
      for (var i = 0; i < Sa.length; i++) {
        if (
          Sa[i].indexOf('overflow') == 0 ||
          Sa[i].indexOf('padding') == 0 ||
          Sa[i].indexOf('border') == 0 ||
          Sa[i].indexOf('outline') == 0 ||
          Sa[i].indexOf('box-shadow') == 0 ||
          Sa[i].indexOf('background') == 0
        ) {
          s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; ';
        }
      }
      b = document.createElement('div');
      b.style.cssText =
        s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
      a.insertBefore(b, a.firstChild);
      var l = a.childNodes.length;
      for (var i = 1; i < l; i++) {
        b.appendChild(a.childNodes[1]);
      }
      a.style.height = b.getBoundingClientRect().height + 'px';
      a.style.padding = '0';
      a.style.border = '0';
    }
    if (a.getBoundingClientRect().top <= 0) {
      b.className = 'search_scroll';
    } else {
      b.className = '';
    }
    window.addEventListener(
      'resize',
      function () {
        a.children[0].style.width = getComputedStyle(a, '').width;
      },
      false
    );
  }
})();
