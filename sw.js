// 오프라인 캐시 — 한 번 열면 인터넷 없이도 실행. 버전이 바뀌면 새 파일로 교체된다
const V = "nocta-182d7f1d";
const CORE = ["./", "index.html", "manifest.webmanifest", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  const url = new URL(r.url);
  if (url.origin === location.origin && (r.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith(".html"))) {
    // 앱 본체: 인터넷이 되면 최신본, 안 되면 저장본
    e.respondWith(fetch(r, { cache: "no-store" }).then(res => { const c = res.clone(); caches.open(V).then(x => x.put(r, c)); return res; }).catch(() => caches.match(r).then(m => m || caches.match("index.html"))));
    return; }
  // 아이콘·폰트: 저장본 우선, 없으면 받아서 저장
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { const c = res.clone(); caches.open(V).then(x => x.put(r, c)); return res; })));
});
