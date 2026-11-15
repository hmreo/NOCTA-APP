# NOCTA — 아이폰 홈 화면 앱 올리는 법

이 폴더 전체를 웹에 올리고, 아이폰 Safari로 열어 "홈 화면에 추가"하면 됩니다.
Mac·개발자 계정 필요 없음.

## 1. GitHub Pages에 올리기 (무료, 약 10분)

1. github.com 로그인 → 오른쪽 위 `+` → **New repository**
2. 이름: `nocta` (아무거나) → **Public** 선택 → **Create repository**
3. 생성된 화면에서 **uploading an existing file** 클릭
4. 이 폴더 안의 것들을 **전부** 끌어다 놓기
   - `index.html`, `manifest.webmanifest`, `sw.js`, `icons` 폴더(통째로)
   - 폴더 자체가 아니라 폴더 *안의 파일들*을 올려야 함
5. 아래 **Commit changes**
6. 저장소 **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main**, 폴더 **/(root)** → **Save**
7. 1~2분 뒤 같은 화면 위쪽에 주소가 뜸: `https://아이디.github.io/nocta/`

## 2. 아이폰에 설치

1. 아이폰 **Safari**로 위 주소 열기 (Chrome 앱 말고 Safari)
2. 아래 공유 버튼 → **홈 화면에 추가** → 추가
3. 홈 화면의 NOCTA 아이콘으로 실행 → 주소창 없이 전체 화면

## 3. 발표 전 체크

- [ ] 한 번 실행해서 끝까지 넘겨보기 → 이후엔 인터넷 없어도 열림
- [ ] 무음 스위치 끄기 (켜져 있으면 소리 안 남)
- [ ] 소리는 앱에서 화면을 한 번 탭한 뒤에 켜짐
- [ ] 화면 자동 잠금: 설정 → 디스플레이 → 자동 잠금 **안 함** (발표 중 꺼짐 방지)
- [ ] 오른쪽 아래 버튼 = DEMO 패널 (화면 이동·안기·테마)

## 수정본을 올릴 때

새 `index.html`과 `sw.js`를 같은 저장소에 다시 업로드(덮어쓰기)하면 됩니다.
아이폰에서는 앱을 한 번 완전히 닫았다 열면 새 버전이 적용됩니다.
