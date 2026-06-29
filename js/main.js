/* ============================================================
   메인 포트폴리오 페이지 동작
   ============================================================ */

(function () {
  'use strict';

  /* ---- 모바일 메뉴 토글 ---- */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기');
    });

    // 메뉴 안의 링크 클릭 시 메뉴 닫기
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', '메뉴 열기');
      });
    });

    // 데스크톱 크기로 넘어가면 모바일 메뉴 자동 닫기
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- 스크롤 시 헤더 그림자 ---- */
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
