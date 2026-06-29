# 강현우 기술경영 — 포트폴리오

기술 사업화 · R&D 전략 · 기술가치평가 · 기술 기반 투자유치를 소개하는 반응형 포트폴리오 웹사이트입니다.

## 구성

```
.
├── index.html        포트폴리오 메인 페이지
├── css/
│   └── style.css     커스텀 스타일 (Tailwind 보완)
└── js/
    └── main.js       모바일 메뉴, 헤더 스크롤 동작
```

## 기술 스택

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript

## 실행 방법

별도 빌드 없이 `index.html`을 브라우저로 열면 됩니다.

## 특징

- 데스크톱 / 모바일 반응형 레이아웃
- 모바일에서 큰 터치 타깃, 햄버거 메뉴
- 접근성 고려 (`prefers-reduced-motion`, ARIA 속성)
