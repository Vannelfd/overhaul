// @ts-nocheck
/* Écrans de l'application SerieAddict (version de lancement).
   Chaque écran est une chaîne HTML générée par les fonctions ci-dessous ;
   le canevas React les affiche dans des frames de 390 × 844. */

/* ---------- Icônes ---------- */
const PATHS = {
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  tv: '<rect x="2.5" y="6.5" width="19" height="13" rx="2.5"/><path d="m8 2.5 4 4 4-4"/>',
  compass: '<circle cx="12" cy="12" r="9.5"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
  game: '<rect x="2.5" y="7" width="19" height="11" rx="5.5"/><path d="M7.5 10.5v4M5.5 12.5h4M15.5 11.5h.01M18 13.5h.01"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  search: '<circle cx="11" cy="11" r="7.5"/><path d="m20.5 20.5-4.2-4.2"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a2 2 0 0 0 3.4 0"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  star: '<path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/>',
  play: '<path d="M7 4.5v15l12.5-7.5z" fill="currentColor"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1 0-5.5 3-7.5.5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  share: '<path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M16 6l-4-4-4 4M12 2v13"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  clock: '<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3 2"/>',
  cal: '<rect x="3" y="4.5" width="18" height="17" rx="2.5"/><path d="M16 2.5v4M8 2.5v4M3 10h18"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
  lock: '<rect x="4" y="10.5" width="16" height="11" rx="2.5"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  spark: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15v4M17 17h4"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  eyeoff: '<path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.6C3.9 8.3 2 12 2 12s3.5 7 10 7a9.6 9.6 0 0 0 4.4-1"/>',
  bookmark: '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
  shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 7 9 6 9-6"/>',
  rewind: '<path d="M11 19 2 12l9-7zM22 19l-9-7 9-7z"/>',
  bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  chat: '<path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.4-5.6A8.5 8.5 0 1 1 21 12z"/>',
  globe: '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5a14.5 14.5 0 0 1 0 19M12 2.5a14.5 14.5 0 0 0 0 19"/>',
  dna: '<path d="M7 3c0 6 10 6 10 12s-10 6-10 6M17 3c0 6-10 6-10 12s10 6 10 6M8 7h8M8 17h8"/>',
};
const ic = (n, c = '') => `<svg class="i ${c}" viewBox="0 0 24 24" aria-hidden="true">${PATHS[n]}</svg>`;

/* ---------- Affiches ---------- */
const PAL = [
  ['#3a4b63', '#011921'], ['#841d4f', '#160910'], ['#1e6c86', '#08140f'], ['#6a5326', '#151006'], ['#3c0a22', '#0d0a1c'],
  ['#1e6c86', '#011921'], ['#6e3424', '#170a05'], ['#2d3f2b', '#0a1009'], ['#5b2a62', '#12081a'], ['#5f6672', '#121417'],
  ['#1f5f73', '#011921'], ['#73284b', '#3c0a22'],
];
const pal = (s) => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return PAL[h % PAL.length]; };
// Photo d'illustration publiée avec la page (img/<titre>.jpg), en attendant les vraies affiches.
const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const img = (t) => `url(/img/${slug(t)}.jpg)`;
function P(t, o = {}) {
  const [a, b] = pal(t);
  const w = o.w ?? 108, hgt = o.h ?? 156;
  const cls = ['poster', o.sel ? 'sel' : '', o.seen ? 'seen' : ''].join(' ');
  return `<div class="${cls}" style="--a:${a};--b:${b};background:${img(t)} center/cover, linear-gradient(160deg, ${a}, ${b});width:${typeof w === 'number' ? w + 'px' : w};height:${hgt}px">
    ${o.tl ? `<span class="tl">${o.tl}</span>` : ''}${o.tr ? `<span class="tr">${o.tr}</span>` : ''}
    ${o.chk ? `<span class="chk">${ic('check', 's')}</span>` : ''}
    ${o.ring !== undefined ? `<span class="br"><span class="ring" style="--p:${o.ring};width:34px;height:34px"><span style="font-size:9px">${o.ring}%</span></span></span>` : ''}
    ${o.notitle ? '' : `<span class="pt" style="font-size:${o.fs ?? 13}px">${t}</span>`}
    ${o.extra ?? ''}
  </div>`;
}
const backdrop = (t, h) => { const [a, b] = pal(t); return `background:radial-gradient(90% 70% at 80% 0%, ${a}66, transparent 70%), linear-gradient(180deg, rgba(0,0,0,.05) 25%, rgba(0,0,0,.55) 70%, #000), ${img(t)} center/cover, ${b}; height:${h}px`; };

/* ---------- Briques ---------- */
const TABS = [['home', 'Accueil'], ['tv', 'Mes séries'], ['compass', 'Découvrir'], ['game', 'Jouer'], ['user', 'Profil']];
const tabbar = (on) => `<nav class="tabbar">${TABS.map(([i, l]) => `<span class="${l === on ? 'on' : ''}">${ic(i)}${l}</span>`).join('')}</nav>`;
const sec = (t, a) => `<div class="sec"><h3>${t}</h3>${a ? `<a>${a} ›</a>` : ''}</div>`;
const chip = (t, on, x = '') => `<span class="chip ${on ? 'on' : ''} ${x}">${t}</span>`;
const back = (title, over, right = '') => `<div class="topbar"><span class="ib">${ic('left')}</span><div class="col" style="flex:1;margin-left:12px;min-width:0">${over ? `<span class="over">${over}</span>` : ''}<span class="h-s up" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${title}</span></div>${right}</div>`;
const ring = (p, label, c = 'var(--teal)', size = 44, extra = '') => `<span class="ring ${extra}" style="--p:${p};--c:${c};width:${size}px;height:${size}px"><span>${label}</span></span>`;
const stars = (n, size = 14) => `<span class="stars" style="font-size:${size}px">${'★'.repeat(n)}<span class="off">${'★'.repeat(5 - n)}</span></span>`;
const prog = (p, x = '') => `<div class="prog ${x}"><i style="width:${p}%"></i></div>`;

/* =========================================================
   V3 : écrans
   ========================================================= */
const hot = (n, html, extra = '') => `<span class="hot" data-n="${n}" style="display:block;${extra}">${html}</span>`;
const xp = `<span class="pill gold">${ic('flame', 'xs')} 12 j</span>`;
const topHome = `<div class="topbar"><span class="logo">SERIE<span>ADDICT</span></span><div class="row g8">${xp}<span class="ib" style="width:38px;height:38px">${ic('search', 's')}</span><span class="ib" style="width:38px;height:38px">${ic('bell', 's')}<span class="dot" style="top:7px;right:8px"></span></span></div></div>`;
const platformBtn = (name, color, txt = '#fff') => `<span class="btn" style="background:${color};color:${txt};flex:1">${ic('play', 's')} Regarder sur ${name}</span>`;

/* ---------- Premiers pas ---------- */
const O1 = `<div class="scr" style="padding:0;background:radial-gradient(120% 60% at 50% 0%, #3c0a22 0%, transparent 60%), radial-gradient(90% 50% at 100% 60%, #0d3a4c 0%, transparent 70%), #000">
  <div style="position:relative;height:380px;margin-top:24px">
    <div style="position:absolute;left:24px;top:56px;transform:rotate(-9deg)">${P('Severance', { w: 112, h: 162 })}</div>
    <div style="position:absolute;left:138px;top:14px;transform:rotate(2deg);z-index:2;box-shadow:0 20px 50px rgba(0,0,0,.6);border-radius:14px">${P('Dark', { w: 124, h: 180 })}</div>
    <div style="position:absolute;right:22px;top:66px;transform:rotate(10deg)">${P('The Bear', { w: 112, h: 162 })}</div>
    <div style="position:absolute;left:74px;top:226px;transform:rotate(5deg)">${P('Silo', { w: 100, h: 144 })}</div>
    <div style="position:absolute;right:70px;top:230px;transform:rotate(-6deg)">${P('Arcane', { w: 100, h: 144 })}</div>
  </div>
  <div class="pad col g12" style="text-align:center;align-items:center">
    <span class="logo" style="font-size:17px">SERIE<span>ADDICT</span></span>
    <h1 class="h-xl">Toutes tes séries,<br><span class="gtext">au même endroit</span></h1>
    <p class="muted" style="max-width:32ch">Suis tes épisodes, sache où les regarder, trouve quoi voir ce soir.</p>
  </div>
  <div class="pad col g10 mt26">
    ${hot(1, `<span class="btn w full">C'est parti</span>`, 'border-radius:999px')}
    <span class="btn gh full">J'ai déjà un compte</span>
    <p class="xs dim" style="text-align:center">Sans inscription. 1 minute pour commencer.</p>
  </div>
</div>`;

/* A2 : choisir 5 séries, rangées par catégorie */
const O2CATS = [
  ['🔥 Les plus populaires', ['Stranger Things', 'Breaking Bad', 'Game of Thrones', 'Friends', 'The Office']],
  ['🧩 Thriller et mystère', ['Dark', 'Severance', 'Mindhunter', 'True Detective', 'Twin Peaks']],
  ['🚀 Science-fiction', ['Silo', 'Devs', 'Westworld', 'Black Mirror', 'Arcane']],
  ['😂 Comédie', ['Fleabag', 'Abbott Elementary', 'The Bear', 'BoJack Horseman', 'Wednesday']],
  ['🎭 Drame', ['Succession', 'The Wire', 'Six Feet Under', 'Mad Men', 'Pachinko']],
];
const O2SEL = ['Dark', 'Severance', 'Succession'];
const O2 = `<div class="scr" style="padding-bottom:0">
  <div class="pad col g10" style="padding-top:8px">
    <div class="steps"><i class="on"></i><i></i><i></i></div>
    <div class="row between"><span class="h-m" style="font-size:21px">Choisis 5 séries<br>que tu as aimées</span><span class="pill mag" style="font-size:12px;padding:6px 11px">3 sur 5</span></div>
    <div class="field" style="height:44px">${ic('search', 's')} Chercher une série</div>
  </div>
  <div class="rail mt10" style="gap:8px">${['Tout', 'Thriller', 'Science-fiction', 'Comédie', 'Drame', 'Crime', 'Fantasy'].map((c, i) => chip(c, i === 0, 'sm')).join('')}</div>
  ${O2CATS.map(([cat, list]) => `
  <div class="sec" style="margin-top:20px"><h3>${cat}</h3></div>
  <div class="rail" style="gap:10px">${list.map((t) => {
    const on = O2SEL.includes(t);
    const p = P(t, { w: 104, h: 150, fs: 12, sel: on, chk: on });
    return t === 'Arcane' ? hot(1, p, 'border-radius:14px;flex-shrink:0') : p;
  }).join('')}</div>`).join('')}
  <p class="xs c-teal" style="text-align:center;margin-top:18px">Tu viens de TV Time ? Importer mon historique</p>
  <div style="position:sticky;bottom:0;margin-top:14px;padding:12px 18px 18px;background:linear-gradient(180deg,rgba(0,0,0,.6),#000 30%);border-top:1px solid var(--line)" class="col g10">
    <div class="row g8" style="justify-content:center">${[0, 1, 2, 3, 4].map((i) => O2SEL[i]
      ? `<span style="border-radius:10px;outline:2px solid var(--magenta)">${P(O2SEL[i], { w: 44, h: 62, notitle: true })}</span>`
      : `<span style="width:44px;height:62px;border-radius:10px;border:1.5px dashed #3a5260;display:grid;place-items:center;color:#3a5260">${ic('plus', 's')}</span>`).join('')}</div>
    <span class="btn off full">Encore 2 séries à choisir</span>
  </div>
</div>`;

const PL = [['Netflix', '#e50914', true], ['Prime Video', '#1fa5e8', true], ['Disney+', '#2b5fd9', false], ['Apple TV', '#d9d9d9', true], ['HBO Max', '#7b3fe4', false], ['Canal+', '#e8e8e8', false]];
const O3 = `<div class="scr">
  <div class="pad col g10" style="padding-top:8px">
    <div class="steps"><i class="on"></i><i class="on"></i><i></i></div>
    <span class="h-m">Tes abonnements</span>
    <p class="small muted">On te montrera d'abord ce que tu peux regarder tout de suite.</p>
  </div>
  <div class="pad mt20" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
    ${PL.map(([n, c, on]) => `<div class="col" style="align-items:center;gap:8px;padding:16px 6px;border-radius:20px;${on ? 'background:color-mix(in srgb,var(--teal) 12%,var(--s1));border:2px solid var(--teal)' : 'background:var(--s1);border:1px solid var(--line)'}"><span style="width:52px;height:52px;border-radius:16px;background:${c};display:grid;place-items:center;font:900 20px var(--display);color:${c === '#d9d9d9' || c === '#e8e8e8' ? '#000' : '#fff'}">${n[0]}</span><span class="xs b">${n}</span></div>`).join('')}
  </div>
  <div class="abar">${hot(1, `<span class="btn w full">Voir ce qui m'attend ${ic('right', 's')}</span>`, 'border-radius:999px')}</div>
</div>`;

/* ---------- Accueil « Ce soir » ---------- */
const nextUp = (marker) => `<div style="position:relative;border-radius:26px;overflow:hidden;${backdrop('Severance', 330)}">
  <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.1) 20%,rgba(0,0,0,.92))"></div>
  <span class="pill mag" style="position:absolute;top:14px;left:14px">Nouvel épisode · sorti hier</span>
  <div style="position:absolute;left:16px;right:16px;bottom:16px" class="col g10">
    <div class="col g4"><span class="over" style="color:#cfd8dc">Ton prochain épisode</span><span class="h-l" style="font-size:28px">Severance</span><span class="small" style="color:#cfd8dc">S2 · E6 · Attila · 50 min</span></div>
    <div class="row g8">${platformBtn('Apple TV', 'var(--wine)', '#fff')}${marker ? hot(1, `<span class="round" style="width:50px;height:50px;background:var(--teal);border:0">${ic('check')}</span>`, 'border-radius:50%') : `<span class="round" style="width:50px;height:50px;background:var(--teal);border:0">${ic('check')}</span>`}</div>
  </div>
</div>`;
const queue = [['The Last of Us', 'S2 · E3', 'HBO Max', 43], ['Silo', 'S1 · E7', 'Apple TV', 70], ['The Bear', 'S3 · E2', 'Disney+', 20]];
/* Accueil : le rendez-vous quotidien, dans l'ordre demandé par la cliente.
   1 En ce moment pour toi · 2 Continuer à regarder · 3 Que regarder ce soir ? · 4 Du nouveau sur tes séries
   (à la place de « À la une » : pas d'articles dans l'app) · 5 Défi du jour · 6 Tendances. Modules personnalisables. */
const homeNum = (n) => `<span style="display:inline-grid;place-items:center;width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,.1);font:800 10.5px/1 var(--display);margin-right:8px">${n}</span>`;
const hsec = (n, t, a) => sec(`${homeNum(n)}${t}`, a);
const H1 = `<div class="scr">
  ${topHome}
  <div class="pad"><span class="h-l">Bonsoir Charlotte</span><p class="small muted mt6">3 épisodes t'attendent ce soir.</p></div>

  ${hsec(1, 'En ce moment pour toi', 'Calendrier')}
  <div class="pad">${nextUp(true)}</div>
  <div class="pad col g8 mt10">
    ${[['Dark Matter', 'Nouvelle saison · saison 2', 'Dimanche', 'mag'], ['The Last of Us', 'S2 · E4 · HBO Max', 'Vendredi', 'teal']].map(([t, e, d, c]) => `<div class="card row g12" style="padding:10px 12px">${P(t, { w: 40, h: 56, notitle: true })}<div class="col g4" style="flex:1;min-width:0"><span class="b small">${t}</span><span class="xs muted">${e}</span></div><span class="pill ${c}">${d}</span></div>`).join('')}
    <div class="card row g12" style="padding:10px 12px">${P('Dark', { w: 40, h: 56, notitle: true })}<div class="col g4" style="flex:1"><span class="b small">À noter · Dark S1 · E8</span><span class="xs muted">Vu hier</span></div><span class="stars" style="font-size:18px;letter-spacing:3px"><span class="off">★★★★★</span></span></div>
  </div>

  ${hsec(2, 'Continuer à regarder', 'Mes séries')}
  <div class="rail" style="gap:12px">${queue.map(([t, e, p, pr]) => `<div class="col g6" style="width:132px;flex-shrink:0">${P(t, { w: 132, h: 188, notitle: true, ring: pr })}<span class="b small">${t}</span><div class="row between"><span class="xs c-teal b">${e}</span><span class="round" style="width:34px;height:34px">${ic('check', 'xs')}</span></div></div>`).join('')}</div>

  ${hsec(3, 'Que regarder ce soir ?')}
  <div class="pad"><div style="border-radius:22px;padding:16px;background:var(--grad)" class="col g10">
    <span class="small b" style="opacity:.95">Tu as envie de quoi ?</span>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">${['🧩 Un mystère', '😂 Rire', '💔 Être ému', '⚡ Du suspense'].map((m) => `<span class="chip" style="justify-content:center;background:rgba(0,0,0,.28);border-color:rgba(255,255,255,.25);color:#fff">${m}</span>`).join('')}</div>
  </div></div>

  ${hsec(4, 'Du nouveau sur tes séries', 'Sur le site')}
  <div class="pad col g8">${[['Severance', 'La saison 3 est confirmée', 'Annonce'], ['The Bear', 'Renouvelée pour une saison 5', 'Annonce']].map(([t, h, k]) => `<div class="card row g12" style="padding:10px 12px">${P(t, { w: 56, h: 56, notitle: true })}<div class="col g4" style="flex:1;min-width:0"><span class="pill gold">${k}</span><span class="b small">${t} : ${h}</span></div>${ic('right', 's')}</div>`).join('')}</div>

  ${hsec(5, 'Le défi du jour', 'Jouer')}
  <div class="pad"><div class="card row g12" style="padding:12px 14px;border-color:color-mix(in srgb,var(--gold) 45%,var(--line));background:linear-gradient(135deg,#011921,var(--s1))"><span class="c-gold">${ic('bolt')}</span><div class="col" style="flex:1"><span class="b small">Quiz Breaking Bad</span><span class="xs muted">5 questions · + 50 points</span></div><span class="btn w sm">Jouer</span></div></div>

  ${hsec(6, 'Les tendances', 'Top 10')}
  <div class="rail" style="gap:8px;margin-bottom:12px">${['Les plus suivies', 'Les plus aimées', 'Les plus discutées'].map((c, i) => chip(c, i === 0, 'sm')).join('')}</div>
  <div class="rail" style="gap:20px;padding-left:28px">${['Wednesday', 'Severance', 'The Bear', 'Silo'].map((t, i) => `<div style="position:relative;padding-left:20px">${P(t, { w: 100, h: 144 })}<span class="rank">${i + 1}</span></div>`).join('')}</div>

  <div class="pad mt26"><span class="btn o full">${ic('list', 's')} Personnaliser mon accueil</span></div>
</div>${tabbar('Accueil')}`;

/* Récompense immédiate, dans la foulée du geste */
const REWARD = `<div class="scr" style="padding-top:0;pointer-events:none"><div style="position:relative;${backdrop('Severance', 360)}"><div style="position:absolute;left:18px;bottom:20px" class="col g6"><span class="pill teal">En cours</span><span class="h-xl" style="font-size:36px">Severance</span></div></div></div>
<div class="veil"></div>
<div class="sheet" style="align-items:center;text-align:center;gap:12px">
  <div class="grab"></div>
  <div class="row g10" style="justify-content:center">${ring(60, '6/10', 'var(--teal)', 64, 'on-s1')}<div class="col" style="align-items:flex-start"><span class="h-m">Épisode 6 vu</span><span class="row g6 mt6"><span class="pill gold">+ 10 pts</span><span class="pill gold">${ic('flame', 'xs')} 13 jours</span></span></div></div>
  <span class="over mt6">Comment c'était ?</span>
  <div class="row g8" style="justify-content:center">${['😴', '🙂', '😍', '🤯', '😭'].map((e, i) => i === 3 ? hot(1, `<span class="round" style="width:52px;height:52px;font-size:24px;border-color:transparent;background:var(--s1)">${e}</span>`, 'border-radius:50%') : `<span class="round" style="width:52px;height:52px;font-size:24px">${e}</span>`).join('')}</div>
  <p class="xs muted">68 % de la communauté a eu la même réaction que toi</p>
  ${hot(2, `<span class="btn w full">${ic('play', 's')} Épisode 7 · vendredi 21 février</span>`, 'border-radius:999px;width:100%')}
  <span class="xs muted">Je te préviens à sa sortie</span>
</div>`;

/* ---------- Mes séries ---------- */
const M1 = `<div class="scr">
  <div class="topbar"><span class="h-l" style="font-size:22px">Mes séries</span><span class="ib">${ic('plus')}</span></div>
  <div class="pad"><div class="seg"><span class="on">Séries</span><span>Épisodes</span><span>Calendrier</span></div></div>
  <div class="rail mt14" style="gap:8px">${chip('À voir maintenant · 4', true)}${chip('En attente · 3')}${chip('Pas commencées · 23')}${chip('Terminées · 41')}</div>
  ${sec('À voir maintenant')}
  <div class="pad col g10">
    ${hot(1, `<div class="card row g12" style="padding:12px">${P('Severance', { w: 64, h: 92, notitle: true })}<div class="col g6" style="flex:1"><span class="b">Severance</span><span class="xs c-mag b">2 épisodes à voir</span>${prog(50)}<span class="xs muted">S2 · E6 · Apple TV</span></div><span class="round" style="width:44px;height:44px;background:var(--teal);border:0">${ic('check', 's')}</span></div>`, 'border-radius:20px')}
    ${queue.map(([t, e, p, pr]) => `<div class="card row g12" style="padding:12px">${P(t, { w: 64, h: 92, notitle: true })}<div class="col g6" style="flex:1"><span class="b">${t}</span><span class="xs c-mag b">1 épisode à voir</span>${prog(pr)}<span class="xs muted">${e} · ${p}</span></div><span class="round" style="width:44px;height:44px">${ic('check', 's')}</span></div>`).join('')}
  </div>
  ${sec('En attente du prochain épisode')}
  <div class="pad col g8">${[['Wednesday', 'Saison 2 · partie 2', 'Dimanche'], ['Dark Matter', 'Saison 2', 'Dans 6 jours']].map(([t, e, d]) => `<div class="row g12" style="padding:6px 0">${P(t, { w: 40, h: 56, notitle: true })}<div class="col" style="flex:1"><span class="b small">${t}</span><span class="xs muted">${e}</span></div><span class="pill teal">${d}</span></div>`).join('')}</div>
</div>${tabbar('Mes séries')}`;

/* ---------- Fiche série : barre d'action fixe ---------- */
const F1 = (marker) => `<div class="scr" style="padding-top:0;padding-bottom:0">
  <div style="position:relative;${backdrop('Severance', 330)}">
    <div class="topbar" style="position:absolute;inset:0 0 auto"><span class="ib ghost">${ic('left')}</span><div class="row g8"><span class="ib ghost">${ic('share')}</span><span class="ib ghost">${ic('heart')}</span></div></div>
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,#000)"></div>
    <div style="position:absolute;left:18px;right:18px;bottom:8px" class="col g8"><div class="row g6"><span class="pill teal">En cours</span><span class="pill gold">Saison 3 confirmée</span></div><span class="h-xl" style="font-size:36px">Severance</span><span class="small muted">Thriller · Science-fiction · ★ 4,7</span></div>
  </div>
  <div class="pad mt14"><div class="card row g12" style="padding:14px">${ring(68, '68%', 'var(--teal)', 54, 'on-s1')}<div class="col g4" style="flex:1"><span class="b">13 épisodes sur 19</span><span class="xs muted">Prochain : S2 · E6 · Attila</span></div></div></div>
  <div class="pad mt10"><div class="card row g12" style="padding:12px 14px;border-color:color-mix(in srgb,var(--green) 40%,var(--line))"><span style="width:38px;height:38px;border-radius:11px;background:#d9d9d9;color:#000;display:grid;place-items:center;font:900 15px var(--display)">A</span><div class="col" style="flex:1"><span class="b small">Sur Apple TV</span><span class="xs c-green">Inclus dans ton abonnement · 4K</span></div><span class="btn w sm">Ouvrir</span></div></div>
  <div class="pad mt10">${marker === 'cal' ? hot(1, `<div class="card row g12" style="padding:12px 14px;border-color:color-mix(in srgb,var(--gold) 45%,var(--line))"><span class="c-gold">${ic('cal')}</span><div class="col" style="flex:1"><span class="b small">Saison 3 confirmée</span><span class="xs muted">Sortie prévue début 2027</span></div><span class="btn w sm">${ic('bell', 's')} M'avertir</span></div>`, 'border-radius:20px') : `<div class="card row g12" style="padding:12px 14px;border-color:color-mix(in srgb,var(--gold) 45%,var(--line))"><span class="c-gold">${ic('cal')}</span><div class="col" style="flex:1"><span class="b small">Saison 3 confirmée</span><span class="xs muted">Sortie prévue début 2027</span></div><span class="btn w sm">${ic('bell', 's')} M'avertir</span></div>`}</div>
  <div class="rail mt20" style="gap:22px;border-bottom:1px solid var(--line)">${['Épisodes', 'Infos', 'Avis 4,7 ★', 'Similaires'].map((t, i) => `<span class="small b" style="padding-bottom:12px;${i ? 'color:var(--muted)' : 'border-bottom:2px solid var(--magenta)'}">${t}</span>`).join('')}</div>
  <div class="pad mt14 list">
    ${[['Saison 1', 9, 9], ['Saison 2', 10, 5]].map(([s, n, v]) => `<div class="row g12" style="padding:12px 0"><div class="col g6" style="flex:1"><div class="row between"><span class="b small">${s}</span><span class="xs b ${v === n ? 'c-green' : 'c-teal'}">${v}/${n}</span></div>${prog((v / n) * 100)}</div>${ic('right', 's')}</div>`).join('')}
  </div>
  <div class="abar">${marker ? hot(1, `<span class="btn w full">${ic('check', 's')} J'ai vu S2 · E6</span>`, 'border-radius:999px') : `<span class="btn w full">${ic('check', 's')} J'ai vu S2 · E6</span>`}</div>
</div>${tabbar('Mes séries')}`;

/* ---------- Découvrir : 2 touches ---------- */
const moodCard = (e, t, on) => `<div class="col" style="position:relative;gap:6px;padding:16px 12px;border-radius:20px;background:var(--s1)"><span style="font-size:28px">${e}</span><span class="b small">${t}</span>${on ? `<span class="selchk">${ic('check', 'xs')}</span>` : ''}</div>`;
const D1 = `<div class="scr">
  <div class="topbar" style="justify-content:center;gap:22px;position:relative"><span class="small b" style="border-bottom:2px solid #fff;padding-bottom:4px">Ce soir</span><span class="small b" style="opacity:.6">Pour toi</span><span class="ib" style="position:absolute;right:18px;width:38px;height:38px">${ic('search', 's')}</span></div>
  <div class="pad"><span class="h-m" style="font-size:22px">Ce soir, tu as envie de…</span></div>
  <div class="pad mt14" style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
    ${hot(1, moodCard('🧩', 'Un mystère qui retourne le cerveau', true), 'border-radius:20px')}${moodCard('😂', 'Rire, quelque chose de léger')}${moodCard('💔', 'Être bouleversé')}${moodCard('⚡', 'Du suspense et de l\'action')}
  </div>
  <div class="pad mt20 col g10"><span class="b small">J'ai devant moi</span><div class="seg"><span>30 min</span><span class="on">≈ 45 min</span><span>1 h et +</span></div></div>
  <p class="pad xs dim mt10">Sur Netflix, Prime Video et Apple TV · mini-série ou plusieurs saisons</p>
  <div class="abar">${hot(2, `<span class="btn p full">${ic('shuffle', 's')} Trouver ma série</span>`, 'border-radius:999px')}</div>
  ${sec('Tes listes et collections', 'Toutes')}
  <div class="rail">${[['Les 100 séries à voir', '23/100'], ['Les meilleures fins', 'Liste de Nadia'], ['Mini-séries cultes', '4/20']].map(([t, s]) => `<div class="col g6" style="width:150px;flex-shrink:0">${P(t, { w: 150, h: 96, notitle: true })}<span class="b small">${t}</span><span class="xs muted">${s}</span></div>`).join('')}</div>
</div>${tabbar('Découvrir')}`;

const D2 = `<div class="scr" style="background:radial-gradient(100% 50% at 50% 10%, #3c0a22, transparent 70%), #000">
  ${back('Notre choix pour toi', 'Ce soir')}
  <div class="deck">
    <div class="back2">${P('Devs', { w: 250, h: 360, notitle: true })}</div>
    <div class="back1">${P('The OA', { w: 250, h: 360, notitle: true })}</div>
    <div style="position:absolute;left:50%;top:0;transform:translateX(-50%);box-shadow:0 30px 70px rgba(209,60,132,.3);border-radius:14px">${P('Dark', { w: 268, h: 386, fs: 28, tl: '<span class="pill mag">97 % pour toi</span>' })}</div>
  </div>
  <div class="pad col g4" style="align-items:center;text-align:center"><span class="small muted">Science-fiction · 3 saisons · ≈ 50 min</span><p class="small mt6" style="max-width:32ch">Parce que tu aimes les énigmes qui prennent tout leur sens au fil des épisodes.</p></div>
  <div class="row mt14" style="justify-content:center;gap:16px;align-items:center">
    <div class="col" style="align-items:center;gap:6px"><span class="round">${ic('x')}</span><span class="xs muted">Autre idée</span></div>
    <div class="col" style="align-items:center;gap:6px">${hot(1, `<span class="round big" style="background:var(--grad);border:0">${ic('plus', 'l')}</span>`, 'border-radius:50%')}<span class="xs b">À voir</span></div>
    <div class="col" style="align-items:center;gap:6px"><span class="round" style="background:#e50914;border:0">${ic('play')}</span><span class="xs muted">Sur Netflix</span></div>
  </div>
  <p class="xs dim mt14" style="text-align:center">Glisse vers la gauche pour une autre idée.</p>
</div>${tabbar('Découvrir')}`;

/* ---------- Nouvelle saison annoncée ---------- */
const N1 = `<div class="scr lock" style="padding:0">
  <div class="col" style="align-items:center;padding-top:70px;gap:4px"><span class="small" style="opacity:.8">jeudi 23 octobre</span><span style="font:300 84px/1 var(--body)">20:41</span></div>
  <div class="pad" style="margin-top:60px">
    ${hot(1, `<div class="notif"><span style="width:38px;height:38px;border-radius:10px;background:var(--grad);display:grid;place-items:center;font:900 13px var(--display);flex-shrink:0">SA</span><div class="col g4" style="flex:1"><div class="row between xs" style="opacity:.8"><span class="b">SERIEADDICT</span><span>maintenant</span></div><span class="b small">Severance : la saison 3 est confirmée</span><span class="xs" style="opacity:.85">Ajoute-la à ton calendrier en un geste.</span></div></div>`, 'border-radius:22px')}
    <div class="notif mt10" style="opacity:.75"><span style="width:38px;height:38px;border-radius:10px;background:var(--grad);display:grid;place-items:center;font:900 13px var(--display);flex-shrink:0">SA</span><div class="col g4" style="flex:1"><span class="b small">The Bear S3 · E3 est disponible</span><span class="xs" style="opacity:.85">Sur Disney+ · ce matin</span></div></div>
  </div>
  <p class="xs" style="text-align:center;opacity:.6;margin-top:220px">Tu choisis les notifications que tu reçois dans tes réglages.</p>
</div>`;

const N2 = `<div class="scr" style="padding-top:0;pointer-events:none"><div style="position:relative;${backdrop('Severance', 360)}"><div style="position:absolute;left:18px;bottom:20px" class="col g6"><span class="pill teal">En cours</span><span class="h-xl" style="font-size:36px">Severance</span></div></div></div>
<div class="veil"></div>
<div class="sheet">
  <div class="grab"></div>
  <span class="pill gold">${ic('spark', 'xs')} Annonce</span>
  <span class="h-m" style="font-size:20px">Severance revient pour une saison 3</span>
  <p class="small muted">Apple TV confirme une troisième saison, prévue début 2027.</p>
  <div class="spoil">${ic('eyeoff', 'xs')} Sans spoiler : rien au-delà de l'épisode 5, là où tu en es.</div>
  ${hot(1, `<span class="btn w full">Voir la fiche de la série ${ic('right', 's')}</span>`, 'border-radius:999px')}
  <span class="btn o full">${ic('bell', 's')} M'avertir de la sortie</span>
  <span class="xs c-teal" style="text-align:center">L'article complet sur seriesaddict.fr ↗</span>
</div>`;

const N3 = `<div class="scr">
  <div class="topbar"><span class="h-l" style="font-size:22px">Mes séries</span><span class="ib">${ic('plus')}</span></div>
  <div class="pad"><div class="seg"><span>Séries</span><span>Épisodes</span><span class="on">Calendrier</span></div></div>
  <div class="pad mt14"><div class="card row g12" style="padding:12px 14px;border-color:var(--green);background:color-mix(in srgb,var(--green) 10%,var(--s1))"><span class="c-green">${ic('check')}</span><span class="small b" style="flex:1">Severance saison 3 ajoutée. On te prévient dès qu'une date tombe.</span></div></div>
  ${sec('Cette semaine')}
  <div class="pad col g8">${[['Lun 16', 'Severance', 'S2 · E6', 'Apple TV', 'Dispo'], ['Mer 18', 'The Bear', 'S3 · E3', 'Disney+', '9:00'], ['Ven 20', 'The Last of Us', 'S2 · E4', 'HBO Max', '3:00'], ['Dim 22', 'Dark Matter', 'Saison 2', 'Apple TV', 'Nouvelle saison']].map(([d, t, e, p, h]) => `<div class="row g12" style="padding:6px 0"><span class="col" style="width:44px;align-items:center"><span class="xs muted">${d.split(' ')[0]}</span><span class="h-s">${d.split(' ')[1]}</span></span>${P(t, { w: 42, h: 58, notitle: true })}<div class="col" style="flex:1"><span class="b small">${t}</span><span class="xs muted">${e} · ${p}</span></div><span class="pill ${h === 'Nouvelle saison' ? 'mag' : 'teal'}">${h}</span></div>`).join('')}</div>
  ${sec('Bientôt')}
  <div class="pad"><div class="card row g12" style="padding:12px">${P('Severance', { w: 42, h: 58, notitle: true })}<div class="col" style="flex:1"><span class="b small">Severance · Saison 3</span><span class="xs muted">Début 2027 · date à venir</span></div><span class="pill gold">${ic('bell', 'xs')} Alerte</span></div></div>
</div>${tabbar('Mes séries')}`;

/* ---------- À deux ---------- */
const jImg = (f, pos = 'center') => `<div style="position:absolute;inset:0;background:url(img/${f}) ${pos}/cover"></div>`;
const jTile = (t, sub, i, layer) => `<div style="position:relative;overflow:hidden;border-radius:20px;padding:14px;min-height:170px;background:#011921;display:flex;flex-direction:column;justify-content:space-between">${layer}<div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(1,25,33,.1) 0%,rgba(1,25,33,.5) 45%,rgba(1,25,33,.96) 100%)"></div><span class="ib ghost" style="position:relative;width:38px;height:38px">${ic(i, 's')}</span><div class="col g4" style="position:relative"><span class="h-s">${t}</span><span class="xs" style="opacity:.85">${sub}</span></div></div>`;
const duel = `<div style="position:absolute;inset:0;display:flex"><div style="flex:1;background:url(img/breaking-bad.jpg) center/cover"></div><div style="flex:1;background:url(img/the-sopranos.jpg) center/cover;border-left:2px solid #011921"></div></div><span style="position:absolute;top:50px;left:50%;transform:translateX(-50%);z-index:2;font:800 11px/1 var(--body);background:var(--wine);padding:6px 8px;border-radius:999px">VS</span>`;
const blurImg = `<div style="position:absolute;inset:-12px;background:url(img/stranger-things.jpg) center/cover;filter:blur(7px)"></div>`;
const J1 = `<div class="scr" style="background:radial-gradient(90% 35% at 0% 0%, #3c0a22, transparent 70%), radial-gradient(90% 35% at 100% 15%, #072631, transparent 70%), #000">
  <div class="topbar"><span class="h-l" style="font-size:22px">Jouer</span>${xp}</div>
  <div class="pad"><div class="card col g10" style="padding:16px;background:linear-gradient(135deg,#011921,#011921);border-color:color-mix(in srgb,var(--gold) 35%,var(--line))"><div class="row between"><span class="h-s">Niveau 12 · Exploratrice</span><span class="b c-gold">2 640 pts</span></div>${prog(64, 'gold')}</div></div>
  <div class="pad mt14" style="display:grid;grid-template-columns:repeat(7,1fr);gap:5px">${[1, 1, 1, 1, 2, 0, 3].map((st, i) => `<div class="col" style="align-items:center;gap:3px;padding:8px 0;border-radius:12px;${st === 1 ? 'background:color-mix(in srgb,var(--gold) 16%,var(--s1))' : st === 2 ? 'background:var(--gold);color:#000' : 'background:var(--s1)'}"><span class="xs b">J${i + 1}</span><span>${st === 1 ? '✓' : st === 3 ? '🎁' : '⭐'}</span></div>`).join('')}</div>
  <div class="pad mt20" style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
    ${hot(1, jTile('Series Match', 'Quoi regarder à deux', 'heart', jImg('mindhunter.jpg')), 'border-radius:20px')}
    ${jTile('Quiz du jour', '5 questions · + 50', 'bolt', jImg('breaking-bad.jpg'))}${jTile('Duel du jour', 'Breaking Bad ou Soprano ?', 'game', duel)}${jTile('Devine la série', 'Image floutée', 'search', blurImg)}
  </div>
</div>${tabbar('Jouer')}`;

const J2 = `<div class="scr" style="background:radial-gradient(100% 45% at 50% 0%, #072631, transparent 70%), #000">
  ${back('Series Match', 'Avec Nadia')}
  <div class="pad col" style="align-items:center;gap:10px;text-align:center">
    <div class="row" style="justify-content:center"><span class="av" style="width:68px;height:68px;font-size:22px;border:3px solid #000">C</span><span style="margin-inline:-12px;z-index:2">${ring(87, '87 %', 'var(--magenta)', 80)}</span><span class="av" style="width:68px;height:68px;font-size:22px;border:3px solid #000;background:linear-gradient(135deg,#1e6c86,#3c0a22)">N</span></div>
    <span class="h-m">Le match parfait pour ce soir</span>
    <span class="xs muted">Netflix en commun · aucune des deux ne l'a vue</span>
  </div>
  <div class="pad mt14">${hot(1, `<div class="card row g12" style="padding:12px;border-color:transparent">${P('Mindhunter', { w: 76, h: 108, notitle: true })}<div class="col g6" style="flex:1"><span class="pill mag">94 % pour vous deux</span><span class="h-s">Mindhunter</span><span class="xs muted">Crime · 2 saisons · Netflix</span></div></div>`, 'border-radius:20px')}</div>
  <div class="pad col g8 mt10">${[['Slow Horses', 91], ['Devs', 89], ['The Night Of', 88]].map(([t, m]) => `<div class="row g12" style="padding:4px 0">${P(t, { w: 40, h: 56, notitle: true })}<span class="b small" style="flex:1">${t}</span><span class="pill teal">${m} %</span></div>`).join('')}</div>
  <div class="abar">${hot(2, `<span class="btn p full">${ic('play', 's')} On regarde Mindhunter ce soir</span>`, 'border-radius:999px')}</div>
</div>${tabbar('Jouer')}`;

/* ---------- Partager ses goûts ---------- */
const PR1 = `<div class="scr" style="padding-top:0">
  <div style="height:120px;background:radial-gradient(80% 120% at 0% 0%, #841d4f, transparent 60%), radial-gradient(80% 120% at 100% 0%, #1e6c86, transparent 60%), #3c0a22"><div class="topbar" style="justify-content:flex-end"><span class="ib ghost">${ic('gear')}</span></div></div>
  <div class="pad" style="margin-top:-44px;position:relative;z-index:2">
    <div class="row g12" style="align-items:flex-end"><span class="av" style="width:88px;height:88px;font-size:30px;border:4px solid #000">C</span><span class="pill gold" style="margin-bottom:8px">Niveau 12</span></div>
    <span class="h-l mt10" style="display:block">Charlotte</span><span class="small muted">Exploratrice de séries · Thrillers · Science-fiction</span>
  </div>
  <div class="pad mt14" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">${[['142', 'Séries'], ['3 280', 'Épisodes'], ['96 j', 'De visionnage*']].map(([v, l]) => `<div class="card" style="padding:12px;text-align:center"><span class="h-m" style="font-size:22px">${v}</span><span class="xs muted" style="display:block">${l}</span></div>`).join('')}</div>
  <div class="pad mt14">${hot(1, `<div style="border-radius:22px;padding:16px;background:linear-gradient(135deg,#3c0a22,#072631)" class="row g12">${ic('dna', 'l')}<div class="col g4" style="flex:1"><span class="over" style="color:#cfd8dc">Mon ADN séries</span><span class="h-s">La détective des intrigues</span></div><span class="btn w sm">Partager</span></div>`, 'border-radius:22px')}</div>
  ${sec('Mon top 4 de tous les temps')}
  <div class="pad" style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">${['Six Feet Under', 'The Wire', 'Lost', 'BoJack Horseman'].map((t, i) => P(t, { w: '100%', h: 118, fs: 10, tl: `<span class="pill dark">${i + 1}</span>` })).join('')}</div>
  ${sec('Badges', '9')}
  <div class="rail" style="gap:10px">${['🏃', '🔥', '🧠', '🎯', '📺', '🌙'].map((e) => `<span style="width:52px;height:52px;flex-shrink:0;border-radius:16px;display:grid;place-items:center;font-size:23px;background:linear-gradient(135deg,#1e6c8633,#841d4f33);border:1px solid color-mix(in srgb,var(--gold) 40%,var(--line))">${e}</span>`).join('')}</div>
</div>${tabbar('Profil')}`;

const PR2 = `<div class="scr" style="background:#000">
  ${back('Mon ADN séries', 'Profil')}
  <div class="pad">
    <div style="border-radius:28px;padding:22px 20px;background:radial-gradient(100% 60% at 100% 0%, #1e6c86, transparent 60%), radial-gradient(100% 70% at 0% 100%, #841d4f, transparent 60%), #3c0a22" class="col g12">
      <div class="row between"><span class="logo" style="font-size:12px">SERIE<span style="color:#fff;-webkit-text-fill-color:#fff">ADDICT</span></span><span class="xs" style="opacity:.8">@charlotte</span></div>
      <span class="h-xl" style="font-size:30px">La détective<br>des intrigues</span>
      <div class="col g8">${[['Mystère', 92], ['Personnages complexes', 84], ['Tension', 77]].map(([t, p]) => `<div class="col g4"><div class="row between xs b"><span>${t}</span><span>${p} %</span></div><div style="height:6px;border-radius:6px;background:rgba(255,255,255,.2)"><i style="display:block;height:100%;width:${p}%;border-radius:6px;background:#fff"></i></div></div>`).join('')}</div>
      <div class="row g6 mt6">${['Dark', 'Severance', 'True Detective', 'Mindhunter'].map((t) => P(t, { w: 66, h: 94, notitle: true })).join('')}</div>
    </div>
  </div>
  <div class="pad mt14 col g10">${hot(1, `<span class="btn w full">${ic('share', 's')} Partager en story</span>`, 'border-radius:999px')}<span class="btn o full">Comparer avec un ami</span></div>
</div>${tabbar('Profil')}`;

/* ---------- Reprendre une ancienne série ---------- */
const R1 = `<div class="scr">
  <div class="topbar"><div class="field focus" style="flex:1;height:46px">${ic('search')} westw<span style="width:1.5px;height:18px;background:var(--teal)"></span></div></div>
  <div class="pad">${hot(1, `<div class="card col g12" style="padding:14px;border-color:transparent"><div class="row g12">${P('Westworld', { w: 70, h: 100, notitle: true })}<div class="col g6" style="flex:1"><span class="h-s">Westworld</span><span class="xs muted">Dernier épisode vu : S2 · E4, il y a 11 mois</span>${prog(45)}</div></div><span class="btn w sm" style="width:100%">Voir la fiche ${ic('right', 's')}</span></div>`, 'border-radius:20px')}</div>
  ${sec('Autres résultats')}
  <div class="pad list">${[['The West Wing', '1999 · Max · 7 saisons'], ['Godless', '2017 · Netflix · mini-série']].map(([t, m]) => `<div class="row g12" style="padding:10px 0">${P(t, { w: 40, h: 56, notitle: true })}<div class="col" style="flex:1"><span class="b small">${t}</span><span class="xs muted">${m}</span></div><span class="ib" style="width:38px;height:38px">${ic('plus', 's')}</span></div>`).join('')}</div>
  <p class="pad xs dim mt10">Recherche accessible sans compte.</p>
</div>${tabbar('Découvrir')}`;

const R2 = `<div class="scr">
  ${back('Rattrape-moi', 'Westworld')}
  <div class="pad"><div style="border-radius:22px;padding:18px;background:linear-gradient(135deg,#3c0a22,#072631)" class="col g6"><span class="pill gold">${ic('eyeoff', 'xs')} Zéro spoiler</span><span class="h-m" style="font-size:20px">Tout ce qu'il faut savoir jusqu'à S2 · E4</span><span class="xs" style="color:#cfd8dc">2 minutes de lecture · rédigé par la rédaction SerieAddict</span></div></div>
  <div class="pad col g10 mt14">
    ${[['Saison 1', 'Dans un parc futuriste, des androïdes rejouent chaque jour les mêmes histoires. Dolores et Maeve commencent à se souvenir.'], ['Saison 2 · E1 à E4', 'Les hôtes se sont révoltés. Dolores mène une armée vers la Vallée au-delà ; Bernard reconstitue ses souvenirs.']].map(([t, d]) => `<div class="card col g6" style="padding:14px"><span class="b small">${t}</span><p class="small" style="color:#cfd8dc">${d}</p></div>`).join('')}
  </div>
  ${sec('Les personnages à retenir')}
  <div class="rail">${['Dolores', 'Maeve', 'Bernard', 'William'].map((n) => `<div class="col g6" style="width:80px;flex-shrink:0;align-items:center"><span style="width:68px;height:68px;border-radius:50%;overflow:hidden;display:block">${P(n, { w: 68, h: 68, notitle: true })}</span><span class="xs b">${n}</span></div>`).join('')}</div>
  <div class="abar">${hot(1, `<span class="btn w full">${ic('play', 's')} Reprendre S2 · E5 sur HBO Max</span>`, 'border-radius:999px')}</div>
</div>${tabbar('Mes séries')}`;

/* =========================================================
   Les 7 parcours de la cliente
   ========================================================= */
/* =========================================================
   Fil « Pour toi » : une série par écran, glisser vers la gauche = suivante
   ========================================================= */
const railBtn = (icn, label, opts = {}) => {
  const b = `<span class="round" style="width:52px;height:52px;background:rgba(0,0,0,.45);border-color:rgba(255,255,255,.18);backdrop-filter:blur(6px);${opts.on ? 'background:var(--magenta);border-color:transparent' : ''}">${icn}</span>`;
  return `<div class="col" style="align-items:center;gap:4px">${opts.n ? hot(opts.n, b, 'border-radius:50%') : b}<span class="xs b" style="text-shadow:0 1px 6px rgba(0,0,0,.7)">${label}</span></div>`;
};
const feed = (t, o) => `<div class="scr" style="padding:0;position:relative;height:100%;overflow:hidden">
  <div style="position:absolute;inset:0;background:${img(t)} center/cover"></div>
  <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.55) 0%,transparent 22%,transparent 45%,rgba(0,0,0,.92) 82%)"></div>
  <div style="position:relative;z-index:2;display:flex;flex-direction:column;height:100%">
    <div class="topbar" style="justify-content:center;gap:22px;margin-top:26px"><span class="small b" style="opacity:.6">Ce soir</span><span class="small b" style="border-bottom:2px solid #fff;padding-bottom:4px">Pour toi</span></div>
    <div style="flex:1"></div>
    <div class="row" style="align-items:flex-end;padding:0 14px 18px 18px;gap:12px">
      <div class="col g8" style="flex:1;min-width:0">
        <span class="pill mag">${o.match} % pour toi</span>
        <span class="h-xl" style="font-size:34px;text-shadow:0 2px 14px rgba(0,0,0,.5)">${t}</span>
        <span class="small" style="color:#d6dee2">${o.meta}</span>
        <p class="small" style="max-width:26ch">${o.why}</p>
        ${o.platformHot ? hot(o.platformHot, `<span class="btn sm" style="background:var(--wine);color:#fff;width:fit-content">${ic('play', 's')} ${o.platform}</span>`, 'border-radius:999px;width:fit-content') : `<span class="btn sm" style="background:var(--wine);color:#fff;width:fit-content">${ic('play', 's')} ${o.platform}</span>`}
      </div>
      <div class="col g14" style="gap:14px">
        ${railBtn(ic('heart'), 'À voir', { n: o.heartHot, on: o.liked })}
        ${railBtn(ic('check'), 'Déjà vue')}
        ${railBtn(ic('star'), 'Noter')}
        ${railBtn(ic('share'), 'Envoyer')}
      </div>
    </div>
    ${o.hint ? `<p class="xs" style="text-align:center;opacity:.75;padding-bottom:8px">${o.hint}</p>` : ''}
    ${o.peek ? `<div class="row g8" style="margin:0 14px 12px;padding:6px 12px 6px 6px;border-radius:14px;background:rgba(0,0,0,.55);backdrop-filter:blur(6px)"><span style="width:28px;height:38px;border-radius:6px;background:${img(o.peek)} center/cover"></span><span class="xs" style="flex:1"><b>Ensuite :</b> ${o.peek}</span><span class="b">↑</span></div>` : ''}
  </div>
  ${o.coach ? `<div style="position:absolute;left:50%;top:40%;transform:translateX(-50%);z-index:3" class="col g8"><span class="coach">${ic('right', 'l')}</span><span class="pill dark" style="font-size:11px;padding:7px 12px">Glisse vers le haut</span></div>` : ''}
  ${o.toast ? `<div style="position:absolute;left:50%;top:46%;transform:translate(-50%,-50%);z-index:3" class="col g8"><span style="font-size:90px;line-height:1;text-align:center;filter:drop-shadow(0 6px 24px rgba(209,60,132,.6))">💗</span></div>
  <div style="position:absolute;left:18px;right:18px;top:96px;z-index:3"><div class="card row g10" style="padding:12px 14px;background:rgba(10,22,29,.92)"><span class="c-mag">${ic('heart', 's')}</span><span class="small b" style="flex:1">Ajoutée à ta liste « À voir »</span><span class="pill gold">+ 5 pts</span></div></div>` : ''}
</div>${tabbar('Découvrir')}`;

const FEED1 = feed('Mindhunter', { i: 0, match: 96, meta: 'Crime · Thriller · 2 saisons', why: 'Parce que tu as adoré Dark et Severance.', platform: 'Sur Netflix · inclus', heartHot: 1, peek: 'Slow Horses', hint: '↑ Glisse vers le haut pour la suivante · double touche pour l\'ajouter', coach: true });
const FEED2 = feed('Mindhunter', { i: 0, match: 96, meta: 'Crime · Thriller · 2 saisons', why: 'Parce que tu as adoré Dark et Severance.', platform: 'Sur Netflix · inclus', liked: true, toast: true, peek: 'Slow Horses', hint: '' }).replace('<span class="round" style="width:52px;height:52px;background:rgba(0,0,0,.45);border-color:rgba(255,255,255,.18);backdrop-filter:blur(6px);background:var(--magenta)', '<span class="round" style="width:52px;height:52px;background:rgba(0,0,0,.45);border-color:rgba(255,255,255,.18);backdrop-filter:blur(6px);background:var(--magenta)');
const FEED3 = feed('Slow Horses', { i: 1, match: 93, meta: 'Espionnage · Humour noir · 4 saisons', why: 'Comme Mindhunter, que tu viens d\'ajouter : des enquêtes lentes et tendues.', platform: 'Sur Apple TV · inclus', platformHot: 1, peek: 'Devs', hint: '↓ Glisse vers le bas pour revenir' });

/* Rattrape-moi en stories : une carte par saison, glisser vers la gauche = suivante */
const R2S = `<div class="scr" style="padding:0;position:relative;height:100%;overflow:hidden;background:radial-gradient(100% 60% at 100% 0%, #1e6c86, transparent 60%), radial-gradient(100% 70% at 0% 100%, #841d4f, transparent 60%), #3c0a22">
  <div style="position:relative;z-index:2;display:flex;flex-direction:column;height:100%">
    <div class="row g6" style="padding:44px 16px 0">${[1, 1, 0, 0].map((on, i) => `<i style="flex:1;height:3px;border-radius:3px;background:rgba(255,255,255,${on ? (i === 1 ? .95 : .95) : .3})"></i>`).join('')}</div>
    <div class="topbar"><span class="row g8"><span class="av" style="width:30px;height:30px;font-size:10px">SA</span><span class="small b">Rattrape-moi · Westworld</span></span><span class="ib ghost" style="width:36px;height:36px">${ic('x', 's')}</span></div>
    <div class="pad mt14"><span class="pill gold">${ic('eyeoff', 'xs')} Zéro spoiler · jusqu'à S2 · E4</span></div>
    <div class="pad mt20"><div style="border-radius:24px;overflow:hidden;height:270px;background:${img('Dolores')} center/cover;position:relative"><div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(0,0,0,.85))"></div><span class="h-l" style="position:absolute;left:16px;bottom:14px">Saison 2 · E1 à E4</span></div></div>
    <div class="pad col g10 mt14"><p style="font-size:17px;line-height:1.5;font-weight:600">Les hôtes se sont révoltés. Dolores mène une armée vers la Vallée au-delà. Bernard tente de reconstituer ses souvenirs.</p><span class="small" style="opacity:.8">À retenir : deux époques se mélangent dans le récit.</span></div>
    <div style="flex:1"></div>
    <div class="pad row between" style="padding-bottom:22px"><span class="xs" style="opacity:.75">Carte 2 sur 4</span>${hot(1, `<span class="btn w sm">Suivante ${ic('right', 's')}</span>`, 'border-radius:999px')}</div>
  </div>
</div>`;

/* Quiz du jour : une question par carte */
const QZ = `<div class="scr" style="padding:0;background:radial-gradient(90% 40% at 50% 0%, #3c0a22, transparent 70%), #000">
  <div class="row g6" style="padding:44px 16px 0">${[1, 1, 1, 0, 0].map((on) => `<i style="flex:1;height:3px;border-radius:3px;background:${on ? 'var(--gold)' : 'rgba(255,255,255,.25)'}"></i>`).join('')}</div>
  <div class="topbar"><span class="small b">Quiz du jour · Breaking Bad</span><span class="pill gold">${ic('bolt', 'xs')} 120 pts</span></div>
  <div class="pad"><div style="border-radius:26px;overflow:hidden;position:relative;height:250px;background:${img('Breaking Bad')} center/cover"><div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,rgba(0,0,0,.9))"></div><span class="over" style="position:absolute;left:16px;bottom:44px;color:#d6dee2">Question 3 sur 5</span><span class="h-m" style="position:absolute;left:16px;right:16px;bottom:14px;font-size:19px">Le nom du restaurant de Gus Fring ?</span></div></div>
  <div class="pad col g10 mt14">
    ${hot(1, `<div class="card row g12" style="padding:16px;border-color:var(--green);background:color-mix(in srgb,var(--green) 16%,var(--s1))"><span class="b" style="flex:1">Los Pollos Hermanos</span><span class="c-green">${ic('check', 's')}</span></div>`, 'border-radius:20px')}
    ${['El Camino', 'Saul\'s Diner'].map((t) => `<div class="card row g12" style="padding:16px"><span class="b">${t}</span></div>`).join('')}
  </div>
  <div class="pad mt14 row between"><span class="pill green">+ 20 pts · en 6 s</span><span class="small muted">← Glisse pour la suivante</span></div>
  <p class="pad xs dim mt14">Jouable sans compte.</p>
</div>`;

const V2 = (() => {
/* =========================================================
   A. Premiers pas
   ========================================================= */
const A1 = `<div class="scr" style="padding:0;background:radial-gradient(120% 60% at 50% 0%, #3c0a22 0%, transparent 60%), radial-gradient(90% 50% at 100% 60%, #0d3a4c 0%, transparent 70%), #000">
  <div style="position:relative;height:430px;margin-top:20px">
    <div style="position:absolute;left:22px;top:60px;transform:rotate(-9deg)">${P('Severance', { w: 118, h: 170 })}</div>
    <div style="position:absolute;left:136px;top:18px;transform:rotate(2deg);z-index:2;box-shadow:0 20px 50px rgba(0,0,0,.6);border-radius:14px">${P('Dark', { w: 128, h: 186 })}</div>
    <div style="position:absolute;right:20px;top:72px;transform:rotate(10deg)">${P('The Bear', { w: 118, h: 170 })}</div>
    <div style="position:absolute;left:70px;top:236px;transform:rotate(5deg)">${P('Silo', { w: 104, h: 150 })}</div>
    <div style="position:absolute;right:66px;top:240px;transform:rotate(-6deg)">${P('Arcane', { w: 104, h: 150 })}</div>
    <span class="pill gold" style="position:absolute;left:150px;top:396px;z-index:3">${ic('flame', 'xs')} 12 jours</span>
  </div>
  <div class="pad col g12" style="text-align:center;align-items:center">
    <span class="logo" style="font-size:17px">SERIE<span>ADDICT</span></span>
    <h1 class="h-xl">Ne perds plus<br><span class="gtext">le fil de tes séries</span></h1>
    <div class="col g8" style="align-items:flex-start;text-align:left;width:100%;max-width:300px;margin-top:4px">
      ${[['tv', 'Ne perds plus le fil de tes séries', 'Suivi, calendrier, épisodes, alertes'], ['shuffle', 'Trouve enfin quoi regarder', 'Recommandations, collections, compatibilité'], ['game', 'Vis ta passion des séries', 'Quiz, défis, statistiques, partage']].map(([i, t, d]) => `<div class="row g10"><span class="ib ghost" style="width:34px;height:34px">${ic(i, 's')}</span><div class="col"><span class="b small">${t}</span><span class="xs muted">${d}</span></div></div>`).join('')}
    </div>
  </div>
  <div class="pad col g10 mt26">
    <span class="btn p full">Commencer ${ic('right', 's')}</span>
    <span class="btn gh full">J'ai déjà un compte</span>
    <p class="xs dim" style="text-align:center">Aucun compte demandé pour découvrir l'app.</p>
  </div>
</div>`;

const A2series = ['Breaking Bad', 'Dark', 'The Office', 'Stranger Things', 'Severance', 'Friends', 'The Last of Us', 'Succession', 'Game of Thrones', 'Fleabag', 'Lost', 'The Bear'];
const A2sel = ['Dark', 'Severance', 'The Last of Us'];
const A2 = `<div class="scr">
  <div class="pad col g12" style="padding-top:18px">
    <div class="steps"><i class="on"></i><i></i><i></i></div>
    <span class="over">Étape 1 sur 3</span>
    <h1 class="h-l">Choisis 5 séries<br>que tu aimes</h1>
    <p class="muted">On s'en sert pour te proposer des séries qui te ressemblent.</p>
    <div class="field">${ic('search')} Rechercher une série</div>
  </div>
  <div class="pad mt14" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
    ${A2series.map((t) => P(t, { w: '100%', h: 150, sel: A2sel.includes(t), chk: A2sel.includes(t), fs: 12 })).join('')}
  </div>
  <div class="pad mt14"><div class="card row g12" style="padding:12px 14px">${ic('rewind')}<div class="col" style="flex:1"><span class="b small">Tu viens de TV Time ?</span><span class="xs muted">Importe tout ton historique en 1 minute</span></div><span class="xs c-teal b">Importer ›</span></div></div>
  <div style="position:sticky;bottom:-28px;padding:16px 18px 30px;background:linear-gradient(180deg,transparent,#000 35%)">
    <span class="btn w full">Continuer · 3 sur 5</span>
  </div>
</div>`;

const PLAT = [['Netflix', '#e50914', true], ['Prime Video', '#1fa5e8', true], ['Disney+', '#2b5fd9', false], ['Apple TV', '#d9d9d9', false], ['HBO Max', '#7b3fe4', false], ['Canal+', '#e8e8e8', false], ['Paramount+', '#1f6bf1', false], ['OCS', '#f39200', false]];
const A3 = `<div class="scr">
  <div class="pad col g12" style="padding-top:18px">
    <div class="steps"><i class="on"></i><i class="on"></i><i></i></div>
    <span class="over">Étape 2 sur 3</span>
    <h1 class="h-l">Où regardes-tu<br>tes séries ?</h1>
    <p class="muted">On te montrera d'abord ce qui est disponible chez toi.</p>
  </div>
  <div class="pad mt20" style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
    ${PLAT.map(([n, c, on]) => `<div class="card" style="padding:16px;display:flex;flex-direction:column;gap:14px;${on ? 'border-color:var(--teal);background:color-mix(in srgb,var(--teal) 10%,var(--s1))' : ''}">
      <div class="row between"><span style="width:38px;height:38px;border-radius:11px;background:${c};display:grid;place-items:center;font:900 15px var(--display);color:${c === '#d9d9d9' || c === '#e8e8e8' ? '#000' : '#fff'}">${n[0]}</span>
      <span class="chk-c ${on ? 'on' : ''}" style="width:24px;height:24px">${on ? ic('check', 'xs') : ''}</span></div>
      <span class="b">${n}</span></div>`).join('')}
  </div>
  <div class="pad mt26"><span class="btn w full">Continuer</span><p class="xs dim mt10" style="text-align:center">Tu pourras changer ça à tout moment.</p></div>
</div>`;

const A4 = `<div class="scr" style="background:radial-gradient(90% 40% at 50% 0%, #3c0a22, transparent 70%), #000">
  <div class="pad col g10" style="padding-top:8px">
    <div class="steps"><i class="on"></i><i class="on"></i><i class="on"></i></div>
    <span class="over">Étape 3 sur 3</span>
    <h1 class="h-l">Voici tes 3 premières <span class="gtext">pépites</span></h1>
    <p class="muted">D'après Dark, Severance, Succession et tes 2 autres choix, sur Netflix, Prime Video et Apple TV.</p>
  </div>
  <div class="pad mt20">
    <div class="card" style="overflow:hidden">
      <div style="${backdrop('Mindhunter', 190)};position:relative;display:flex;align-items:flex-end;padding:16px">
        <div class="col g6"><span class="pill mag">96 % pour toi</span><span class="h-l">Mindhunter</span><span class="small muted">Crime · Thriller · 2 saisons · Netflix</span></div>
      </div>
      <div style="padding:14px 16px" class="col g10">
        <p class="small">Parce que tu aimes les esprits tordus et les enquêtes qui prennent leur temps.</p>
        <div class="row"><span class="btn p sm" style="flex:1">${ic('plus', 's')} À voir</span><span class="ib">${ic('heart', 's')}</span></div>
      </div>
    </div>
  </div>
  <div class="pad mt14" style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
    ${[['Devs', '91 %'], ['Silo', '89 %']].map(([t, m]) => `<div class="col g6">${P(t, { w: '100%', h: 190, tl: `<span class="pill mag">${m}</span>` })}<span class="small muted">Ajouter à voir +</span></div>`).join('')}
  </div>
  <div class="pad mt26"><span class="btn w full">Voir mon accueil ${ic('right', 's')}</span></div>
</div>`;

/* Accueil grisé réutilisé sous les panneaux */
const dimHome = `<div class="scr" style="pointer-events:none">
  <div class="topbar"><span class="logo">SERIE<span>ADDICT</span></span><span class="ib">${ic('bell')}</span></div>
  <div class="pad"><span class="h-l">Bonsoir,<br>on regarde quoi ?</span></div>
  <div class="rail mt20">${['Mindhunter', 'Devs', 'Silo', 'Dark'].map((t) => P(t, { w: 130, h: 190 })).join('')}</div>
  <div class="rail mt20">${['Severance', 'The Bear', 'Lost'].map((t) => P(t, { w: 130, h: 190 })).join('')}</div>
</div>`;

const A5 = `${dimHome}<div class="veil"></div>
<div class="sheet">
  <div class="grab"></div>
  <div class="row" style="justify-content:center;margin-top:4px"><span class="burst" style="width:84px;height:84px">${ic('bookmark', 'l')}</span></div>
  <h2 class="h-m" style="text-align:center">Sauvegarde ta bibliothèque</h2>
  <p class="muted small" style="text-align:center">Mindhunter a été ajoutée. Crée ton compte gratuit pour la retrouver sur tous tes appareils.</p>
  <div class="col g8 small">
    ${['Tes séries et ta progression sauvegardées', 'Ton calendrier et tes alertes de sortie', 'Tes amis et tes recommandations'].map((t) => `<span class="row g8">${'<span style="color:var(--teal)">' + ic('check', 's') + '</span>'}${t}</span>`).join('')}
  </div>
  <span class="btn w full"> Continuer avec Apple</span>
  <span class="btn o full">Continuer avec Google</span>
  <span class="btn o full">${ic('mail', 's')} Continuer avec un email</span>
  <span class="small muted" style="text-align:center">Plus tard</span>
</div>`;

const A6 = `<div class="scr" style="background:radial-gradient(100% 40% at 0% 0%, #3c0a22, transparent 70%), radial-gradient(80% 40% at 100% 30%, #072631, transparent 70%), #000">
  ${back('', '')}
  <div class="pad col g10 mt20">
    <span class="logo" style="font-size:16px">SERIE<span>ADDICT</span></span>
    <h1 class="h-xl">Content de<br><span class="gtext">te revoir</span></h1>
    <p class="muted">Retrouve tes séries là où tu les as laissées.</p>
  </div>
  <div class="pad col g12 mt26">
    <div class="field focus">${ic('mail')} charlotte@email.fr</div>
    <div class="field">${ic('lock')} Mot de passe</div>
    <span class="small c-teal" style="align-self:flex-end">Mot de passe oublié ?</span>
    <span class="btn p full mt6">Me connecter</span>
    <div class="row g10 xs dim mt6"><span style="flex:1;height:1px;background:var(--line)"></span>OU<span style="flex:1;height:1px;background:var(--line)"></span></div>
    <span class="btn w full"> Continuer avec Apple</span>
    <span class="btn o full">Continuer avec Google</span>
    <p class="small muted mt10" style="text-align:center">Pas encore de compte ? <span class="c-teal b">Créer un compte</span></p>
  </div>
</div>`;

/* =========================================================
   B. Accueil
   ========================================================= */
/* Encart publicitaire de la version gratuite (discret, un seul par écran) */
const ad = `<div class="pad mt26"><div class="card row g12" style="padding:12px 14px;border-style:dashed"><span class="pill dark">Pub</span><span class="xs muted" style="flex:1">Emplacement publicitaire, version gratuite</span><span class="xs c-gold b">Retirer avec Premium ›</span></div></div>`;
const premiumLock = (title, text) => `<div class="card col g8" style="padding:16px;align-items:center;text-align:center;border-color:color-mix(in srgb,var(--gold) 45%,var(--line));background:linear-gradient(180deg,#011921,var(--s1))"><span class="c-gold">${ic('lock')}</span><span class="b small">${title}</span><span class="xs muted">${text}</span><span class="btn sm" style="background:var(--gold);color:#000">Essayer Premium</span></div>`;

const B1 = `<div class="scr">
  <div class="topbar"><span class="logo">SERIE<span>ADDICT</span></span><div class="row g8"><span class="ib">${ic('search')}</span><span class="ib">${ic('bell')}<span class="dot"></span></span></div></div>
  <div class="pad col g8">
    <span class="h-l">Bonsoir Charlotte,<br><span class="gtext">qu'est-ce qu'on regarde ?</span></span>
    <span class="pill gold">${ic('flame', 'xs')} 12 jours de suite</span>
  </div>

  <div class="pad mt20">
    <div style="border-radius:24px;padding:18px;background:var(--grad);position:relative;overflow:hidden" class="col g10">
      <span class="row g8 h-s" style="font-size:16px">${ic('spark', 's')} Trouve ta prochaine série</span>
      <span class="small" style="opacity:.92;max-width:24ch">Une recommandation selon tes envies du moment.</span>
      <div class="row g6" style="flex-wrap:wrap">${['🧩 Mystère', '😂 Léger', '⚡ Suspense'].map((m) => `<span class="chip sm" style="background:rgba(0,0,0,.25);border-color:rgba(255,255,255,.25);color:#fff">${m}</span>`).join('')}</div>
      <span class="ib" style="position:absolute;right:16px;top:16px;width:38px;height:38px;background:var(--wine);color:#fff;border:0">${ic('right', 's')}</span>
    </div>
  </div>

  ${sec('Reprends tes séries', 'Tout voir')}
  <div class="rail" style="gap:14px">
    ${[['Severance', 50, 'S2 · E5', 'Nouvel épisode'], ['The Last of Us', 43, 'S2 · E3', ''], ['Silo', 70, 'S1 · E7', '']].map(([t, p, e, n]) => `<div class="col g8" style="width:176px;flex-shrink:0">
      ${P(t, { w: 176, h: 252, notitle: true, tl: n ? `<span class="pill mag">${n}</span>` : '', ring: p })}
      <div class="row between"><div class="col"><span class="b small">${t}</span><span class="xs c-teal b">${e}</span></div><span class="ib" style="width:40px;height:40px;background:color-mix(in srgb,var(--teal) 16%,var(--s1));border-color:color-mix(in srgb,var(--teal) 40%,var(--line));color:var(--teal)" title="Marquer comme vu">${ic('check', 's')}</span></div>
    </div>`).join('')}
  </div>

  ${sec('Cette semaine pour toi', 'Calendrier')}
  <div class="pad col g8">
    ${[['The Bear', 'S3 · E3', 'Mercredi', 'Nouvel épisode', 'teal'], ['Dark Matter', 'Saison 2', 'Dimanche', 'Nouvelle saison', 'mag']].map(([t, e, d, k, c]) => `<div class="card row g12" style="padding:10px 12px">${P(t, { w: 42, h: 58, notitle: true })}<div class="col g4" style="flex:1"><span class="b small">${t} · ${e}</span><span class="pill ${c}">${k}</span></div><span class="small b">${d}</span></div>`).join('')}
  </div>

  ${sec('À noter')}
  <div class="pad"><div class="card row g12" style="padding:10px 12px">${P('Dark', { w: 42, h: 58, notitle: true })}<div class="col g4" style="flex:1"><span class="b small">Dark · S1 · E8</span><span class="xs muted">Vu hier</span></div>${stars(0, 18)}</div></div>

  <div class="pad mt20"><div class="card row g12" style="padding:14px;border-color:color-mix(in srgb,var(--gold) 45%,var(--line));background:linear-gradient(135deg,#011921,var(--s1))"><span class="c-gold">${ic('bolt')}</span><div class="col" style="flex:1"><span class="b small">Défi du jour · Quiz Breaking Bad</span><span class="xs muted">5 questions · + 50 points</span></div><span class="btn w sm">Jouer</span></div></div>

  <div class="pad mt20"><span class="small c-teal b" style="display:flex;justify-content:center;gap:6px">${ic('list', 's')} Personnaliser mon accueil</span></div>
</div>${tabbar('Accueil')}`;

/* Annonce d'une série (depuis une notification) : courte, factuelle, l'article complet reste sur le site */
const BA = `${dimHome}<div class="veil"></div>
<div class="sheet">
  <div class="grab"></div>
  <div class="row g12">${P('Severance', { w: 64, h: 92, notitle: true })}<div class="col g6"><span class="pill gold">${ic('spark', 'xs')} Annonce</span><span class="h-m">La saison 3 de Severance est confirmée</span></div></div>
  <p class="small muted">Apple TV confirme une troisième saison. Le tournage a commencé, la sortie est prévue début 2027.</p>
  <div class="spoil">${ic('eyeoff', 'xs')} Sans spoiler : rien sur l'intrigue au-delà de l'épisode que tu as vu.</div>
  <span class="btn w full">${ic('cal', 's')} Ajouter la saison 3 à mon calendrier</span>
  <span class="btn o full">Voir la fiche de la série</span>
  <span class="xs c-teal" style="text-align:center">Lire l'article complet sur seriesaddict.fr ↗</span>
</div>`;

/* B4 : modules de l'accueil réorganisables */
const B4 = `<div class="scr">
  ${back('Personnaliser mon accueil', 'Accueil')}
  <div class="pad"><p class="small muted">Fais glisser les blocs pour remonter ce qui t'intéresse. Désactive ce que tu ne veux pas voir.</p></div>
  <div class="pad col g8 mt14">
    ${[['play', 'En ce moment pour toi', 'Nouveaux épisodes, nouvelles saisons, sorties', true], ['clock', 'Continuer à regarder', 'Séries en cours et épisode suivant', true], ['shuffle', 'Que regarder ce soir ?', 'Une recommandation selon ton humeur', true], ['spark', 'Du nouveau sur tes séries', 'Les annonces de tes séries suivies', true], ['bolt', 'Le défi du jour', 'Un quiz ou une question rapide', true], ['flame', 'Les tendances', 'Les plus suivies, aimées et discutées', true]].map(([i, t, s, on]) => `<div class="card row g12" style="padding:12px 14px"><span class="dim">${ic('list', 's')}</span><span class="ib" style="width:38px;height:38px">${ic(i, 's')}</span><div class="col g4" style="flex:1;min-width:0"><span class="b small">${t}</span><span class="xs muted">${s}</span></div><span class="tog ${on ? 'on' : ''}"></span></div>`).join('')}
  </div>
  <div class="pad mt20 col g10"><span class="btn w full">Enregistrer</span><span class="small muted" style="text-align:center">Revenir à l'ordre par défaut</span></div>
</div>${tabbar('Accueil')}`;

/* B2 : panneau de récompense au-dessus de la saison */
const B2 = `<div class="scr" style="pointer-events:none">${back('Saison 2', 'Severance')}<div class="pad col g8 mt10">${[1, 2, 3, 4, 5, 6].map((n) => `<div class="card row g12" style="padding:12px"><span class="chk-c ${n <= 5 ? 'on' : ''}">${n <= 5 ? ic('check', 'xs') : ''}</span><span class="small b">Épisode ${n}</span></div>`).join('')}</div></div>
<div class="veil"></div>
<div class="sheet" style="align-items:center;text-align:center">
  <div class="grab"></div>
  <span class="burst">${ic('trophy', 'l')}</span>
  <span class="pill gold">+ 10 points · niveau 12</span>
  <h2 class="h-m">Épisode 5 vu !</h2>
  <p class="small muted">Severance · Trojan's Horse. Plus que 5 épisodes pour finir la saison.</p>
  <div style="width:100%" class="col g6">${prog(50, 'g')}<span class="xs muted">Saison 2 · 5 sur 10</span></div>
  <div class="col g6" style="width:100%"><span class="over">Ta note</span><span style="font-size:34px;letter-spacing:6px">${stars(4, 34)}</span></div>
  <div class="row g8" style="justify-content:center">${['🔥', '😱', '🤯', '😂', '😢', '❤️'].map((e, i) => `<span class="ib" style="width:44px;height:44px;font-size:19px;${i === 2 ? 'border-color:transparent;background:var(--s1)' : ''}">${e}</span>`).join('')}</div>
  <span class="btn w full">${ic('play', 's')} Épisode 6 · Attila</span>
  <span class="small muted">Fermer</span>
</div>`;

const notif = (icn, col, title, text, when, unread, extra = '') => `<div class="row g12" style="padding:14px 18px;align-items:flex-start;${unread ? 'background:transparent' : ''}">
  <span class="ib" style="width:40px;height:40px;color:${col}">${icn}</span>
  <div class="col g4" style="flex:1"><span class="small"><b>${title}</b> ${text}</span><span class="xs dim">${when}</span>${extra}</div>
  ${unread ? '<span style="width:8px;height:8px;border-radius:50%;background:var(--magenta);margin-top:6px"></span>' : ''}</div>`;
const B3 = `<div class="scr">
  ${back('Notifications', '', `<span class="ib">${ic('gear')}</span>`)}
  <div class="rail" style="gap:8px">${chip('Tout', true)}${chip('Sorties')}${chip('Annonces')}${chip('Jeux')}${chip('Amis')}</div>
  <div class="over pad mt20">Aujourd'hui</div>
  <div class="list mt10">
    ${notif(ic('play', 's'), 'var(--magenta)', 'Severance', 'S2 · E5 est disponible sur Apple TV.', 'Il y a 2 h', true, `<span class="btn w sm mt6" style="width:fit-content">${ic('check', 's')} Marquer comme vu</span>`)}
    ${notif(ic('spark', 's'), 'var(--teal)', 'The Bear', 'est renouvelée pour une saison 5.', 'Il y a 5 h', true, `<span class="xs c-teal">Ajouter à mon calendrier ›</span>`)}
    ${notif(ic('bolt', 's'), 'var(--gold)', 'Défi du jour', 'Ton quiz Breaking Bad t\'attend. + 50 points.', 'Il y a 6 h', false)}
  </div>
  <div class="over pad mt20">Hier</div>
  <div class="list mt10">
    ${notif('<span class="av" style="width:40px;height:40px">N</span>', '', 'Nadia', 'te recommande Mindhunter. « Tu vas adorer. »', 'Hier', false)}
    ${notif(ic('cal', 's'), 'var(--teal)', 'Cette semaine', '4 épisodes de tes séries sortent.', 'Hier', false)}
    ${notif(ic('trophy', 's'), 'var(--gold)', 'Badge débloqué', 'Marathonien : 10 épisodes en un week-end.', 'Hier', false)}
  </div>
</div>${tabbar('Accueil')}`;

/* =========================================================
   C. Mes séries
   ========================================================= */
const libRow = (t, e, p, next, platform) => `<div class="row g12" style="padding:12px 0">
  ${P(t, { w: 58, h: 84, notitle: true })}
  <div class="col g4" style="flex:1;min-width:0"><span class="b">${t}</span><span class="xs muted">${next} · ${platform}</span><div class="row g8 mt6" style="gap:8px">${prog(p)}<span class="xs c-teal b" style="flex-shrink:0">${e}</span></div></div>
  <span class="ib" style="width:40px;height:40px;background:color-mix(in srgb,var(--teal) 16%,var(--s1));border-color:color-mix(in srgb,var(--teal) 40%,var(--line));color:var(--teal)">${ic('check', 's')}</span>
</div>`;
const myTop = (active) => `<div class="topbar"><span class="h-l" style="font-size:22px">Mes séries</span><div class="row g8"><span class="ib">${ic('search')}</span><span class="ib">${ic('plus')}</span></div></div>
<div class="pad"><div class="seg">${['Séries', 'Épisodes', 'Calendrier'].map((t) => `<span class="${t === active ? 'on' : ''}">${t}</span>`).join('')}</div></div>`;
const C1 = `<div class="scr">
  ${myTop('Séries')}
  <div class="pad mt14" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
    ${[['8', 'En cours', 'var(--teal)'], ['23', 'À voir', 'var(--magenta)'], ['41', 'Terminées', 'var(--gold)']].map(([v, l, c]) => `<div class="card" style="padding:12px"><span class="h-l" style="color:${c}">${v}</span><span class="xs muted" style="display:block">${l}</span></div>`).join('')}
  </div>
  <div class="rail mt14" style="gap:8px">${chip('En cours · 8', true)}${chip('À voir · 23')}${chip('Terminées · 41')}${chip('Abandonnées · 3')}</div>
  ${sec('Nouveaux épisodes', '2')}
  <div class="pad list">
    ${libRow('Severance', '5/10', 50, 'S2 · E6 dispo', 'Apple TV')}
    ${libRow('The Bear', '2/10', 20, 'S3 · E3 dispo', 'Disney+')}
  </div>
  ${sec('En cours')}
  <div class="pad list">
    ${libRow('The Last of Us', '3/7', 43, 'S2 · E4 dimanche', 'HBO Max')}
    ${libRow('Silo', '7/10', 70, 'S1 · E8', 'Apple TV')}
    ${libRow('Dark', '8/26', 30, 'S2 · E1', 'Netflix')}
    ${libRow('Mindhunter', '2/19', 10, 'S1 · E3', 'Netflix')}
  </div>
  ${sec('Je revois')}
  <div class="pad">
    <div class="card row g12" style="padding:12px">
      ${P('Breaking Bad', { w: 52, h: 74, notitle: true })}
      <div class="col g4" style="flex:1"><div class="row g6"><span class="b">Breaking Bad</span><span class="pill gold">2e visionnage</span></div><span class="xs muted">S3 · E2 · ton 1er visionnage reste dans ton historique</span>${prog(42)}</div>
    </div>
  </div>
  ${sec('En pause depuis longtemps')}
  <div class="pad">
    <div class="card row g12" style="padding:12px;border-color:transparent">
      ${P('Westworld', { w: 52, h: 74, notitle: true })}
      <div class="col g4" style="flex:1"><span class="b">Westworld</span><span class="xs muted">Arrêtée à S2 · E4 il y a 11 mois</span><span class="xs c-mag b">${ic('rewind', 'xs')} Rattrape-moi avant de reprendre</span></div>
    </div>
  </div>
</div>${tabbar('Mes séries')}`;

const calItem = (t, e, time, kind, fr, kc) => `<div class="card row g12" style="padding:10px 12px">
  ${P(t, { w: 48, h: 68, notitle: true })}
  <div class="col g4" style="flex:1;min-width:0"><span class="b">${t}</span><span class="xs muted">${e}</span></div>
  <div class="col g4" style="align-items:flex-end"><span class="b small">${time}</span><span class="xs dim">${fr}</span></div>
</div>`;
const C2 = `<div class="scr">
  ${myTop('Calendrier')}
  <div class="pad mt14 row between"><span class="h-s">Février 2026</span><span class="row g8"><span class="ib" style="width:34px;height:34px">${ic('left', 's')}</span><span class="ib" style="width:34px;height:34px">${ic('right', 's')}</span></span></div>
  <div class="pad mt10" style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px">
    ${[['L', 16, 1], ['M', 17, 0], ['M', 18, 2], ['J', 19, 0], ['V', 20, 1], ['S', 21, 0], ['D', 22, 3]].map(([d, n, c], i) => `<div class="col" style="align-items:center;gap:4px;padding:8px 0;border-radius:14px;${i === 0 ? 'background:var(--grad)' : 'background:var(--s1)'}"><span class="xs ${i ? 'muted' : ''}">${d}</span><span class="b">${n}</span><span style="display:flex;gap:2px;height:5px">${('<i style="width:5px;height:5px;border-radius:50%;background:' + (i ? 'var(--magenta)' : '#fff') + '"></i>').repeat(c)}</span></div>`).join('')}
  </div>
  <div class="pad mt14 row g8"><span class="row g6 xs muted">${ic('globe', 'xs')} Heures et dates françaises</span><span class="tog on" style="transform:scale(.8);margin-left:auto"></span></div>
  ${sec("Aujourd'hui · lundi 16")}
  <div class="pad col g8">${calItem('Severance', 'S2 · E6 · Attila', '9:00', 'Nouvel épisode', 'US : dim. 15', 'teal')}</div>
  ${sec('Mercredi 18')}
  <div class="pad col g8">${calItem('The Bear', 'S3 · E3', '9:00', 'Nouvel épisode', 'US : mar. 17', 'teal')}${calItem('Silo', 'S1 · E8', '9:00', 'Nouvel épisode', 'Simultané', 'teal')}</div>
  ${sec('Vendredi 20')}
  <div class="pad col g8">${calItem('The Last of Us', 'S2 · E4', '3:00', 'Nouvel épisode', 'US : jeu. 19', 'teal')}</div>
  ${sec('Dimanche 22')}
  <div class="pad col g8">${calItem('Dark Matter', 'Saison 2 complète', '9:00', 'Nouvelle saison', 'Simultané', 'mag')}${calItem('Wednesday', 'Saison 2 · partie 2', '9:00', 'Nouvelle saison', 'Simultané', 'mag')}</div>
  <div class="pad mt20"><div class="card row g12" style="padding:14px">${ic('bell')}<div class="col" style="flex:1"><span class="b small">Alertes de sortie actives</span><span class="xs muted">Une notification le jour J, à 9:00</span></div><span class="tog on"></span></div></div>
</div>${tabbar('Mes séries')}`;


/* Épisodes à voir : tous les épisodes disponibles de mes séries */
const CE = `<div class="scr">
  ${myTop('Épisodes')}
  <div class="pad mt14 row between"><span class="small muted"><b class="c-mag">6 épisodes</b> disponibles · 5 h 12 de visionnage</span></div>
  ${sec('Disponibles maintenant')}
  <div class="pad col g10">
    ${[['Severance', [['S2 · E5', "Trojan's Horse", '52 min'], ['S2 · E6', 'Attila', '50 min']]], ['The Bear', [['S3 · E2', 'Next', '34 min']]], ['Silo', [['S1 · E7', 'The Flamekeepers', '49 min'], ['S1 · E8', 'Hope', '55 min']]]].map(([t, eps]) => `<div class="card" style="padding:12px">
      <div class="row g12">${P(t, { w: 42, h: 58, notitle: true })}<div class="col" style="flex:1"><span class="b">${t}</span><span class="xs muted">${eps.length} épisode${eps.length > 1 ? 's' : ''} à voir</span></div><span class="xs c-teal b">Tout marquer</span></div>
      <div class="list mt10">${eps.map(([c, n, d]) => `<div class="row g12" style="padding:10px 0"><span class="xs b c-mag" style="width:52px">${c}</span><span class="small" style="flex:1">${n}</span><span class="xs dim">${d}</span><span class="chk-c" style="width:30px;height:30px"></span></div>`).join('')}</div>
    </div>`).join('')}
  </div>
  ${sec('Bientôt')}
  <div class="pad col g8">${[['The Last of Us', 'S2 · E4', 'Vendredi'], ['Dark Matter', 'Saison 2', 'Dimanche']].map(([t, e, d]) => `<div class="card row g12" style="padding:10px 12px">${P(t, { w: 36, h: 50, notitle: true })}<span class="small b" style="flex:1">${t} · ${e}</span><span class="pill teal">${d}</span></div>`).join('')}</div>
</div>${tabbar('Mes séries')}`;

const C3 = `<div class="scr">
  ${back('Listes', 'Découvrir', `<span class="ib">${ic('plus')}</span>`)}
  ${sec('Ma wishlist', '23 séries')}
  <div class="rail">${['Mindhunter', 'Devs', 'Pachinko', 'Slow Horses', 'Fleabag'].map((t) => P(t, { w: 104, h: 150 })).join('')}</div>
  ${sec('Mes listes', 'Créer')}
  <div class="pad col g10">
    ${[['Thrillers qui retournent le cerveau', 12, 86, true], ['Mini-séries pour un week-end', 8, 21, false], ['Ma jeunesse en séries', 15, 52, true]].map(([t, n, l, pub]) => `<div class="card row g12" style="padding:12px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;width:70px;height:96px;flex-shrink:0;border-radius:12px;overflow:hidden">${['a', 'b', 'c', 'd'].map((k) => P(t + k, { w: '100%', h: 46.5, notitle: true })).join('')}</div>
      <div class="col g6" style="flex:1;min-width:0"><span class="b">${t}</span><span class="xs muted">${n} séries · ${pub ? 'Publique' : 'Privée'}</span><span class="xs" style="color:var(--magenta)">${ic('heart', 'xs')} ${l}</span></div>
      ${ic('right', 's')}</div>`).join('')}
    <div style="height:72px;border-radius:20px;border:1.5px dashed #2c4552;display:flex;align-items:center;justify-content:center;gap:8px" class="b small">${ic('plus', 's')} Nouvelle liste</div>
  </div>
  ${sec('Listes de mes amis')}
  <div class="rail">${[['Nadia', 'Les meilleures fins'], ['Kévin', 'Comédies réconfort']].map(([w, t]) => `<div class="card col g8" style="padding:12px;width:200px;flex-shrink:0"><div class="row g6">${['1', '2', '3'].map((k) => P(t + k, { w: 54, h: 76, notitle: true })).join('')}</div><span class="b small">${t}</span><span class="xs muted">par ${w}</span></div>`).join('')}</div>
</div>${tabbar('Découvrir')}`;

const C4 = `<div class="scr">
  ${back('Nouvelle liste', 'Mes listes')}
  <div class="pad col g14 mt10" style="gap:14px">
    <div class="col g6"><span class="over">Nom de la liste</span><div class="field focus" style="font-weight:600">Thrillers qui retournent le cerveau</div></div>
    <div class="col g6"><span class="over">Description</span><div class="field" style="height:84px;align-items:flex-start;padding-top:14px">Celles qu'on regarde deux fois pour tout comprendre.</div></div>
    <div class="col g6"><span class="over">Visibilité</span><div class="seg"><span class="on">${ic('globe', 'xs')}&nbsp; Publique</span><span>${ic('lock', 'xs')}&nbsp; Privée</span></div></div>
    <div class="card row g12" style="padding:12px 14px">${ic('users')}<div class="col" style="flex:1"><span class="b small">Liste collaborative</span><span class="xs muted">Nadia et Kévin peuvent ajouter des séries</span></div><span class="tog on"></span></div>
  </div>
  ${sec('Séries ajoutées', '4')}
  <div class="rail">${['Dark', 'Severance', 'Devs', 'Mindhunter'].map((t) => P(t, { w: 86, h: 124, fs: 11 })).join('')}</div>
  ${sec('Ajouter des séries')}
  <div class="pad col g8">
    <div class="field">${ic('search')} Rechercher</div>
    ${[['Dark', true], ['Severance', true], ['True Detective', false], ['The OA', false]].map(([t, on]) => `<div class="row g12" style="padding:6px 0">${P(t, { w: 40, h: 56, notitle: true })}<span class="b small" style="flex:1">${t}</span><span class="chk-c ${on ? 'on' : ''}">${on ? ic('check', 'xs') : ic('plus', 'xs')}</span></div>`).join('')}
  </div>
  <div class="pad mt20"><span class="btn p full">Créer la liste</span></div>
</div>`;

/* =========================================================
   D. Fiche série
   ========================================================= */
const D1 = `<div class="scr" style="padding-top:0">
  <div style="position:relative;${backdrop('Severance', 360)}">
    <div class="topbar" style="position:absolute;inset:0 0 auto"><span class="ib ghost">${ic('left')}</span><div class="row g8"><span class="ib ghost">${ic('share')}</span><span class="ib ghost">${ic('heart')}</span></div></div>
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,#000)"></div>
    <div style="position:absolute;left:18px;right:18px;bottom:6px" class="col g8">
      <div class="row g6"><span class="pill teal">En cours</span><span class="pill gold">Renouvelée · saison 3</span></div>
      <span class="h-xl" style="font-size:36px">Severance</span>
      <span class="small muted">Thriller · Science-fiction · 2022 · Apple TV</span>
    </div>
  </div>
  <div class="pad mt14">
    <div class="card row g14" style="padding:14px;gap:14px">
      ${ring(68, '68 %', 'var(--teal)', 58, 'on-s1')}
      <div class="col g4" style="flex:1"><span class="b">13 épisodes sur 19</span><span class="xs muted">Prochain : S2 · E6 · Attila</span></div>
    </div>
    <span class="btn w full mt10">${ic('check', 's')} Marquer S2 · E6 comme vu</span>
    <div class="mt10" style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
      ${[['star', 'Noter', '4,5'], ['rewind', 'Rattrape-moi', ''], ['cal', 'Alertes', ''], ['list', 'Liste', '']].map(([i, l, v]) => `<div class="card col" style="align-items:center;gap:6px;padding:12px 4px">${v ? `<span class="b c-gold">${v}</span>` : ic(i)}<span class="xs muted">${l}</span></div>`).join('')}
    </div>
  </div>
  ${sec('Prochain épisode')}
  <div class="pad"><div class="card row g12" style="padding:14px">${ic('cal')}<div class="col g4" style="flex:1"><span class="b small">S2 · E7 · Chikhai Bardo</span><span class="xs muted">France : vendredi 21 février · US : jeudi 20</span></div><span class="pill mag">Dans 5 j</span></div></div>
  ${sec('Où regarder')}
  <div class="pad"><div class="card row g12" style="padding:12px 14px"><span style="width:36px;height:36px;border-radius:10px;background:#d9d9d9;color:#000;display:grid;place-items:center;font:900 14px var(--display)">A</span><div class="col" style="flex:1"><span class="b small">Apple TV</span><span class="xs c-green">Inclus dans ton abonnement</span></div>${ic('right', 's')}</div></div>
  ${sec('Saisons')}
  <div class="pad col g8">
    ${[['Saison 1', 9, 9, 100], ['Saison 2', 10, 5, 50]].map(([s, n, v, p]) => `<div class="card row g12" style="padding:12px 14px"><div class="col g6" style="flex:1"><div class="row between"><span class="b small">${s}</span><span class="xs ${p === 100 ? 'c-green' : 'c-teal'} b">${v}/${n}</span></div>${prog(p)}</div>${ic('right', 's')}</div>`).join('')}
  </div>
  <div class="pad mt10 col g8">
    <div class="card row g12" style="padding:12px 14px">${ic('spark')}<div class="col" style="flex:1"><span class="b small">Épisodes spéciaux</span><span class="xs muted">1 making-of · non compté dans ta progression</span></div>${ic('right', 's')}</div>
    <span class="btn o full">${ic('rewind', 's')} Revoir la série depuis le début</span>
  </div>
  <div class="pad mt10"><div class="card row g12" style="padding:12px 14px">${ic('chat')}<div class="col" style="flex:1"><span class="b small">Avis et communauté</span><span class="xs muted">4,7 ★ · 5 812 avis · 186 messages sur ton épisode</span></div>${ic('right', 's')}</div></div>
  ${sec('Annonce')}
  <div class="pad"><div class="card row g12" style="padding:12px 14px;border-color:color-mix(in srgb,var(--gold) 40%,var(--line))">${ic('cal')}<div class="col g4" style="flex:1"><span class="pill gold">Saison 3 confirmée</span><span class="b small">Sortie prévue en 2027</span></div><span class="btn w sm">Ajouter au calendrier</span></div></div>
  ${sec('Si tu aimes Severance')}
  <div class="rail">${['Devs', 'Black Mirror', 'Mr. Robot', 'Dark', 'The OA'].map((t) => P(t, { w: 104, h: 150 })).join('')}</div>
</div>${tabbar('Mes séries')}`;

const D2eps = [
  ['Hello, Ms. Cobel', 54, true], ['Goodbye, Mrs. Selvig', 51, true], ['Who Is Alive?', 49, true], ['Woe\'s Hollow', 58, true],
  ['Trojan\'s Horse', 52, true], ['Attila', 50, false], ['Chikhai Bardo', 56, false], ['Sweet Vitriol', 49, false],
];
const D2 = `<div class="scr">
  ${back('Saison 2', 'Severance', `<span class="ib">${ic('down')}</span>`)}
  <div class="pad">
    <div class="card col g10" style="padding:16px">
      <div class="row between"><span class="h-s">5 épisodes sur 10</span><span class="b c-teal">50 %</span></div>${prog(50, 'g')}
      <div class="row g8"><span class="btn o sm" style="flex:1">${ic('check', 's')} Tout marquer comme vu</span><span class="btn o sm">${ic('eyeoff', 's')}</span></div>
    </div>
  </div>
  <div class="pad mt14 list">
    ${D2eps.map(([t, m, seen], i) => `<div class="row g12" style="padding:12px 0;align-items:flex-start">
      <div style="position:relative">${P('S2E' + i + t, { w: 66, h: 96, notitle: true, seen })}<span class="pill dark" style="position:absolute;left:5px;bottom:5px">${m} min</span></div>
      <div class="col g4" style="flex:1;min-width:0"><span class="xs ${seen ? 'muted' : 'c-mag'} b">ÉPISODE ${i + 1}${i === 5 ? ' · PROCHAIN' : ''}</span><span class="b small">${t}</span>
      ${seen ? `<span class="xs" style="color:var(--gold)">${'★'.repeat(4)}</span>` : `<span class="spoil" style="padding:4px 8px;font-size:10.5px">${ic('eyeoff', 'xs')} Résumé masqué</span>`}</div>
      <span class="chk-c ${seen ? 'on' : ''}">${seen ? ic('check', 'xs') : ''}</span></div>`).join('')}
    <div class="row g12" style="padding:12px 0;align-items:flex-start">
      <div style="position:relative">${P('Severance special', { w: 66, h: 96, notitle: true })}<span class="pill gold" style="position:absolute;left:5px;bottom:5px">Spécial</span></div>
      <div class="col g4" style="flex:1"><span class="xs c-gold b">ÉPISODE SPÉCIAL</span><span class="b small">Dans les coulisses de Lumon</span><span class="xs muted">Facultatif, hors progression</span></div>
      <span class="chk-c"></span></div>
  </div>
</div>${tabbar('Mes séries')}`;

const D3 = `<div class="scr" style="padding-top:0">
  <div style="position:relative;${backdrop('Trojan Horse', 230)}">
    <div class="topbar" style="position:absolute;inset:0 0 auto"><span class="ib ghost">${ic('left')}</span><span class="ib ghost">${ic('share')}</span></div>
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,#000)"></div>
    <div style="position:absolute;left:18px;right:18px;bottom:8px" class="col g6"><span class="over" style="color:#cfd8dc">Severance · S2 · E5</span><span class="h-l">Trojan's Horse</span></div>
  </div>
  <div class="pad col g10 mt10">
    <div class="row g10 small muted"><span>${ic('clock', 'xs')} 52 min</span><span>·</span><span>Vu hier à 22:40</span></div>
    <div class="card row g12" style="padding:14px"><div class="col g4" style="flex:1"><span class="over">Ma note</span>${stars(4, 22)}</div><div class="col" style="align-items:flex-end"><span class="h-l c-gold">4,6</span><span class="xs muted">3 412 notes</span></div></div>
  </div>
  ${sec('Réactions de la communauté')}
  <div class="pad" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
    ${[['🤯', 'Retourné', 48, true], ['😱', 'Choqué', 31], ['🔥', 'Génial', 22], ['😢', 'Ému', 9], ['😂', 'Drôle', 4], ['😴', 'Bof', 2]].map(([e, l, p, on]) => `<div class="card col" style="align-items:center;gap:4px;padding:12px 4px;${on ? 'border-color:transparent;background:var(--s1)' : ''}"><span style="font-size:22px">${e}</span><span class="xs b">${l}</span><span class="xs muted">${p} %</span></div>`).join('')}
  </div>
  ${sec('Sondage de l\'épisode')}
  <div class="pad"><div class="card col g10" style="padding:14px"><span class="b small">Mark a-t-il eu raison de rester ?</span>
    ${[['Oui, clairement', 62, true], ['Non, il devait partir', 38, false]].map(([t, p, on]) => `<div style="position:relative;border-radius:12px;overflow:hidden;border:1px solid ${on ? 'var(--teal)' : 'var(--line)'}"><div style="position:absolute;inset:0;width:${p}%;background:color-mix(in srgb,var(--teal) ${on ? 30 : 12}%,transparent)"></div><div class="row between small" style="position:relative;padding:10px 12px"><span class="${on ? 'b' : ''}">${t}</span><span class="b">${p} %</span></div></div>`).join('')}
    <span class="xs muted">2 340 votes · ton vote : Oui</span></div></div>
  ${sec('Théorie de la communauté', '24')}
  <div class="pad"><div class="card col g8" style="padding:14px;border-color:transparent"><span class="pill mag">${ic('spark', 'xs')} Théorie populaire</span><p class="small">« La salle des chèvres sert à tester la loyauté des innies, pas à l'élevage. »</p><span class="xs muted">par Hawkins86 · ${ic('heart', 'xs')} 312 · basée sur les épisodes 1 à 5</span></div></div>
  ${sec('Discussion', '186')}
  <div class="pad col g10">
    <div class="row g8 xs c-teal">${ic('eyeoff', 'xs')} Mode sans spoilers : les messages sur les épisodes suivants sont masqués.</div>
    ${[['Lucas', 'Cette scène finale dans la forêt, je n\'ai pas respiré pendant 5 minutes.', 42], ['Inès', 'Le jeu de Britt Lower est incroyable sur cet épisode.', 28]].map(([w, t, l]) => `<div class="card col g8" style="padding:12px"><div class="row g8"><span class="av" style="width:28px;height:28px">${w[0]}</span><span class="b small">${w}</span><span class="xs dim">il y a 3 h</span></div><p class="small">${t}</p><span class="xs muted">${ic('heart', 'xs')} ${l} · Répondre</span></div>`).join('')}
    <div class="spoil">${ic('eyeoff', 'xs')} Message masqué : il parle de l'épisode 7.</div>
    <div class="field">${ic('chat')} Écrire un message…</div>
  </div>
</div>${tabbar('Mes séries')}`;

const D4 = `<div class="scr">
  ${back('Rattrape-moi', 'Westworld')}
  <div class="pad col g10">
    <div style="border-radius:22px;padding:18px;background:linear-gradient(135deg,#3c0a22,#072631)" class="col g8">
      <span class="pill gold">${ic('rewind', 'xs')} Résumé sans spoilers</span>
      <span class="h-m" style="font-size:20px">Tu reprends après 11 mois</span>
      <p class="small" style="color:#cfd8dc">On te remet en tête l'essentiel jusqu'à <b>S2 · E4</b>. Rien au-delà.</p>
    </div>
    <div class="row g8 small">Résumer jusqu'à <span class="chip sm on">S2 · E4</span><span class="xs muted">modifier</span></div>
  </div>
  ${sec('Saison 1 · en 1 minute')}
  <div class="pad"><div class="card col g8" style="padding:16px"><p class="small">Dans un parc d'attractions futuriste, des androïdes appelés hôtes rejouent chaque jour les mêmes histoires pour des visiteurs. Dolores et Maeve commencent à se souvenir de leurs vies passées et à douter de la réalité qu'on leur impose.</p><span class="xs muted">${ic('clock', 'xs')} Lecture 1 min · rédigé par la rédaction</span></div></div>
  ${sec('Saison 2 · jusqu\'à l\'épisode 4')}
  <div class="pad"><div class="card col g8" style="padding:16px"><p class="small">Les hôtes se sont révoltés. Dolores mène une armée vers un mystérieux lieu, la Vallée au-delà, pendant que Bernard tente de reconstituer ce qui s'est passé à partir de souvenirs morcelés.</p></div></div>
  ${sec('Les personnages à retenir')}
  <div class="rail">${[['Dolores', 'Hôtesse en révolte'], ['Maeve', 'Cherche sa fille'], ['Bernard', 'Mémoire brouillée'], ['William', 'L\'homme en noir']].map(([n, r]) => `<div class="col g6" style="width:96px;flex-shrink:0;align-items:center;text-align:center">${P(n, { w: 76, h: 76, notitle: true })}<span class="b small">${n}</span><span class="xs muted">${r}</span></div>`).join('')}</div>
  ${sec('À avoir en tête')}
  <div class="pad col g8">${['Deux époques se mélangent dans le récit.', 'La « Vallée au-delà » est l\'objectif de tous.', 'Bernard cache un secret sur sa propre nature.'].map((t) => `<div class="row g10 small"><span class="c-gold">${ic('spark', 's')}</span>${t}</div>`).join('')}</div>
  <div class="pad mt20"><span class="btn p full">${ic('play', 's')} Reprendre S2 · E5</span></div>
</div>${tabbar('Mes séries')}`;

/* =========================================================
   E. Découvrir
   ========================================================= */
const E1 = `<div class="scr">
  <div class="topbar"><span class="h-l" style="font-size:22px">Découvrir</span><span class="ib">${ic('search')}</span></div>
  <div class="pad"><div class="field">${ic('search')} Une série, un acteur, une ambiance…</div></div>
  <div class="pad mt14">
    <div style="border-radius:26px;overflow:hidden;position:relative;background:radial-gradient(90% 80% at 100% 0%, #1e6c86 0%, transparent 60%), linear-gradient(135deg,#841d4f,#5a2a8a);padding:22px 20px 20px" class="col g10">
      <span class="over" style="color:rgba(255,255,255,.85)">${ic('shuffle', 'xs')} En 30 secondes</span>
      <span class="h-xl" style="font-size:28px">Que regarder<br>ce soir ?</span>
      <p class="small" style="max-width:24ch">Ton humeur, ton temps, tes plateformes. On choisit pour toi.</p>
      <span class="btn w sm" style="width:fit-content;margin-top:4px">Trouver ma série ${ic('right', 's')}</span>
      <div style="position:absolute;right:-14px;top:30px;transform:rotate(9deg);box-shadow:0 18px 40px rgba(0,0,0,.4);border-radius:14px">${P('Dark', { w: 96, h: 138 })}</div>
    </div>
  </div>
  <div class="rail mt14" style="gap:8px">${['🤯 Me retourner le cerveau', '😂 Rire', '😢 Être ému', '⚡ Du suspense'].map((t) => chip(t)).join('')}</div>
  ${sec('Parce que tu aimes Dark')}
  <div class="rail">${[['Devs', 91], ['The OA', 88], ['1899', 86], ['Counterpart', 84]].map(([t, m]) => `<div class="col g6">${P(t, { w: 112, h: 162, tl: `<span class="pill mag">${m} %</span>` })}<span class="small b">${t}</span></div>`).join('')}</div>
  ${sec('Listes et collections', 'Toutes')}
  <div class="pad col g10">
    <div class="card row g12" style="padding:12px"><div class="row" style="width:92px;flex-shrink:0">${['Fleabag', 'Lost', 'The Wire'].map((k, i) => `<span style="margin-left:${i ? -22 : 0}px">${P(k, { w: 48, h: 68, notitle: true })}</span>`).join('')}</div><div class="col g4" style="flex:1"><span class="b small">Les meilleures fins</span><span class="xs muted">Liste de Nadia · 18 séries · ♥ 214</span></div></div>
    ${[['Les 100 séries à voir dans sa vie', 23, 100], ['Les mini-séries cultes', 4, 20], ['Tour du monde en 12 séries', 3, 12]].map(([t, v, n]) => `<div class="card row g12" style="padding:12px">
      <div class="row" style="width:92px;flex-shrink:0">${['1', '2', '3'].map((k, i) => `<span style="margin-left:${i ? -22 : 0}px">${P(t + k, { w: 48, h: 68, notitle: true })}</span>`).join('')}</div>
      <div class="col g6" style="flex:1;min-width:0"><span class="b small">${t}</span>${prog((v / n) * 100, 'gold')}<span class="xs muted">${v} sur ${n} vues</span></div></div>`).join('')}
  </div>
  ${sec('Explorer par genre')}
  <div class="pad" style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
    ${[['Thriller', '#841d4f'], ['Science-fiction', '#1e6c86'], ['Comédie', '#6a5326'], ['Drame', '#3c0a22'], ['Crime', '#5f6672'], ['Animation', '#1e6c86']].map(([g, c]) => `<div style="height:66px;border-radius:16px;padding:12px;background:linear-gradient(135deg,${c},#0a0f12);display:flex;align-items:flex-end" class="h-s">${g}</div>`).join('')}
  </div>
  ${ad}
</div>${tabbar('Découvrir')}`;

const opt = (e, t, on) => `<div class="card row g12" style="padding:14px;${on ? 'border-color:transparent;background:var(--s1)' : ''}"><span style="font-size:22px">${e}</span><span class="b small" style="flex:1">${t}</span>${on ? `<span class="chk-c on" style="width:24px;height:24px;background:var(--magenta);border-color:transparent">${ic('check', 'xs')}</span>` : ''}</div>`;
const E2 = `<div class="scr">
  ${back('Que regarder ce soir ?', 'Découvrir', `<span class="small muted" style="margin-left:auto">2 / 4</span>`)}
  <div class="pad"><div class="steps"><i class="on"></i><i class="on"></i><i></i><i></i></div></div>
  <div class="pad col g10 mt20"><span class="h-l">Quelle est<br>ton humeur ?</span>
    ${opt('🧩', 'Un mystère qui me retourne le cerveau', true)}${opt('😂', 'Quelque chose de drôle et léger')}${opt('💔', 'Une série qui me bouleverse')}${opt('⚡', 'Du suspense et de l\'action')}
  </div>
  <div class="pad col g10 mt26"><span class="h-s">Combien de temps as-tu ?</span>
    <div class="seg"><span>- 30 min</span><span class="on">≈ 45 min</span><span>1 h et +</span></div>
  </div>
  <div class="pad col g10 mt20"><span class="h-s">Tes plateformes</span>
    <div class="row" style="flex-wrap:wrap;gap:8px">${chip('Netflix', true)}${chip('Prime Video', true)}${chip('Disney+')}${chip('Apple TV')}${chip('HBO Max')}${chip('Canal+')}</div>
  </div>
  <div class="pad col g10 mt20"><span class="h-s">Une préférence ?</span>
    <div class="seg"><span class="on">Peu importe</span><span>Mini-série</span><span>Plusieurs saisons</span></div>
  </div>
  <div class="pad mt20"><div class="card col g10" style="padding:14px;border-color:color-mix(in srgb,var(--gold) 45%,var(--line));background:linear-gradient(180deg,#011921,var(--s1))">
    <div class="row between"><span class="h-s">Options avancées</span><span class="pill gold">${ic('lock', 'xs')} Premium</span></div>
    ${['Exclure les séries que j\'ai déjà vues', 'Tenir compte de mes genres et personnages préférés', 'S\'inspirer des goûts de mes amis'].map((t) => `<div class="row g10 small" style="opacity:.75"><span class="tog"></span>${t}</div>`).join('')}
  </div></div>
  <div class="pad mt26"><span class="btn p full">${ic('shuffle', 's')} Trouver ma série</span></div>
</div>`;

const E3 = `<div class="scr" style="background:radial-gradient(100% 50% at 50% 10%, #3c0a22, transparent 70%), #000">
  ${back('Notre sélection pour toi', 'Que regarder ce soir ?')}
  <div class="pad col" style="align-items:center;gap:14px;margin-top:6px">
    <div style="position:relative;box-shadow:0 30px 70px rgba(209,60,132,.25);border-radius:18px">${P('Dark', { w: 220, h: 316, fs: 26 })}<span class="pill mag" style="position:absolute;top:12px;left:12px">97 % pour toi</span></div>
    <div class="col g6" style="align-items:center;text-align:center"><span class="h-l">Dark</span><span class="small muted">Science-fiction · Mystère · 3 saisons · Netflix</span></div>
  </div>
  <div class="pad mt20"><div class="card col g10" style="padding:16px"><span class="over">Pourquoi cette série</span><p class="small">Parce que tu aimes les histoires complexes et les énigmes qui prennent tout leur sens au fil des épisodes.</p>
    <div class="row" style="flex-wrap:wrap;gap:6px">${chip('🧩 Mystère', false, 'sm')}${chip('≈ 50 min', false, 'sm')}${chip('Netflix', false, 'sm')}${chip('Comme Severance', false, 'sm')}</div></div></div>
  <div class="pad mt14 row g10"><span class="btn p" style="flex:1">${ic('plus', 's')} À voir</span><span class="btn o" style="flex:1">${ic('shuffle', 's')} Autre idée</span><span class="ib" style="width:50px;height:50px" title="Sauvegarder">${ic('bookmark')}</span></div>
  <div class="pad mt10"><span class="btn w full">${ic('play', 's')} Commencer l'épisode 1</span></div>
  <p class="xs dim mt14" style="text-align:center">Recommandation basique · relance encore 2 fois ce soir</p>
  <div class="pad mt14"><div class="card row g12" style="padding:12px 14px;border-color:color-mix(in srgb,var(--gold) 45%,var(--line))"><span class="c-gold">${ic('spark')}</span><div class="col" style="flex:1"><span class="b small">Des choix encore plus justes</span><span class="xs muted">Recommandations avancées et relances illimitées avec Premium</span></div>${ic('right', 's')}</div></div>
</div>${tabbar('Découvrir')}`;

const E4 = `<div class="scr">
  <div class="topbar"><div class="field focus" style="flex:1;height:44px">${ic('search')} west<span style="width:1.5px;height:18px;background:var(--teal)"></span></div><span class="small muted" style="margin-left:12px">Annuler</span></div>
  <div class="rail" style="gap:8px">${chip('Tout', true)}${chip('Séries')}${chip('Acteurs')}${chip('Collections')}</div>
  ${sec('Séries')}
  <div class="pad list">
    ${[['Westworld', '2016 · HBO Max · 4 saisons', 'En pause · S2 · E4', 'mag'], ['The West Wing', '1999 · Max · 7 saisons', '', ''], ['Godless', '2017 · Netflix · mini-série', '', ''], ['Wednesday', '2022 · Netflix · 2 saisons', 'Dans ma wishlist', 'teal']].map(([t, m, s, c]) => `<div class="row g12" style="padding:10px 0">${P(t, { w: 48, h: 68, notitle: true })}<div class="col g4" style="flex:1"><span class="b">${t}</span><span class="xs muted">${m}</span>${s ? `<span class="pill ${c}">${s}</span>` : ''}</div><span class="ib" style="width:38px;height:38px">${ic(s ? 'check' : 'plus', 's')}</span></div>`).join('')}
  </div>
  ${sec('Acteurs')}
  <div class="pad list">${[['Ed Harris', 'Westworld, The Truman Show'], ['Evan Rachel Wood', 'Westworld']].map(([n, r]) => `<div class="row g12" style="padding:10px 0"><span class="av" style="width:46px;height:46px">${n[0]}</span><div class="col"><span class="b small">${n}</span><span class="xs muted">${r}</span></div></div>`).join('')}</div>
  <div class="pad mt10"><div class="card row g12" style="padding:12px 14px;border-color:transparent">${ic('rewind')}<span class="xs" style="flex:1">Tu as arrêté Westworld il y a 11 mois. <b class="c-mag">Rattrape-moi</b> avant de reprendre ?</span></div></div>
  <p class="pad xs dim mt10">Recherche accessible sans compte.</p>
  ${sec('Recherches récentes')}
  <div class="pad row" style="flex-wrap:wrap;gap:8px">${['Severance', 'Mini-séries', 'Pedro Pascal'].map((t) => chip(ic('clock', 'xs') + ' ' + t, false, 'sm')).join('')}</div>
</div>${tabbar('Découvrir')}`;

const E5list = ['The Wire', 'Breaking Bad', 'The Sopranos', 'Six Feet Under', 'Lost', 'Friends', 'Twin Peaks', 'Mad Men', 'The Office', 'Fleabag', 'Chernobyl', 'Dark'];
const E5seen = ['Breaking Bad', 'Lost', 'Friends', 'The Office', 'Fleabag', 'Dark'];
const E5 = `<div class="scr" style="padding-top:0">
  <div style="position:relative;background:radial-gradient(90% 80% at 80% 0%, #6a5326, transparent 70%), linear-gradient(180deg,#1a1408,#000);padding-bottom:18px">
    ${back('Collection', 'Défi SerieAddict', `<span class="ib">${ic('share')}</span>`)}
    <div class="pad col g10 mt6">
      <span class="pill gold">${ic('trophy', 'xs')} Collection défi</span>
      <span class="h-xl" style="font-size:26px">Les 100 séries à voir dans sa vie</span>
      <div class="row g14" style="gap:14px">${ring(23, '23', 'var(--gold)', 64)}<div class="col g4"><span class="b">23 sur 100 vues</span><span class="xs muted">Encore 2 pour débloquer le badge <b class="c-gold">Cinéphile du canapé</b></span></div></div>
    </div>
  </div>
  <div class="rail mt10" style="gap:8px">${chip('Toutes', true)}${chip('Vues · 23')}${chip('À voir · 77')}${chip('Sur mes plateformes')}</div>
  <div class="pad mt14" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
    ${E5list.map((t, i) => `<div class="col g4">${P(t, { w: '100%', h: 140, chk: E5seen.includes(t), seen: E5seen.includes(t), tl: `<span class="pill dark">${i + 1}</span>`, fs: 11 })}</div>`).join('')}
  </div>
  <div class="pad mt14"><span class="btn o full">Voir les 88 suivantes</span></div>
</div>${tabbar('Découvrir')}`;

/* =========================================================
   F. Jouer
   ========================================================= */
const game = (t, s, ico, bg, tag) => `<div style="border-radius:20px;padding:14px;min-height:150px;background:${bg};display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden">
  <span class="ib ghost" style="width:38px;height:38px">${ic(ico, 's')}</span>${tag ? `<span class="pill dark" style="position:absolute;top:14px;right:14px">${tag}</span>` : ''}
  <div class="col g4"><span class="h-s">${t}</span><span class="xs" style="color:rgba(255,255,255,.75)">${s}</span></div></div>`;
const F1 = `<div class="scr" style="background:radial-gradient(90% 35% at 0% 0%, #3c0a22, transparent 70%), radial-gradient(90% 35% at 100% 15%, #072631, transparent 70%), #000">
  <div class="topbar"><span class="h-l" style="font-size:22px">Jouer</span><span class="pill gold">${ic('flame', 'xs')} 12 jours</span></div>
  <div class="pad">
    <div class="card col g12" style="padding:16px;background:linear-gradient(135deg,#011921,#011921);border-color:color-mix(in srgb,var(--gold) 35%,var(--line))">
      <div class="row g12"><span class="av" style="width:52px;height:52px;font-size:18px;background:linear-gradient(135deg,#1e6c86,#841d4f)">12</span><div class="col g4" style="flex:1"><span class="over c-gold">Niveau 12</span><span class="h-s">Exploratrice de séries</span></div><span class="h-m c-gold">2 640<span class="xs muted"> pts</span></span></div>
      ${prog(64, 'gold')}<span class="xs muted">360 points avant le niveau 13 · Sériephile confirmée</span>
    </div>
  </div>
  ${sec('Récompenses quotidiennes', 'Jour 5')}
  <div class="pad" style="display:grid;grid-template-columns:repeat(7,1fr);gap:6px">${[10, 10, 15, 15, 20, 25, 50].map((p, i) => `<div class="col" style="align-items:center;gap:4px;padding:9px 0;border-radius:14px;${i < 4 ? 'background:color-mix(in srgb,var(--gold) 16%,var(--s1));border:1px solid color-mix(in srgb,var(--gold) 35%,var(--line))' : i === 4 ? 'background:var(--gold);color:#000;box-shadow:0 0 22px rgba(30,108,134,.45)' : 'background:var(--s1);border:1px solid var(--line)'}"><span class="xs b">J${i + 1}</span><span style="font-size:16px">${i < 4 ? '✓' : i === 6 ? '🎁' : '⭐'}</span><span class="xs b">+${p}</span></div>`).join('')}</div>
  ${sec('Défi du jour')}
  <div class="pad"><div style="border-radius:22px;padding:18px;background:var(--grad)" class="col g8"><div class="row between"><span class="pill dark">Quiz Breaking Bad</span><span class="small b">+ 50 pts</span></div><span class="h-m">5 questions, 60 secondes</span><span class="small" style="opacity:.9">1 248 joueurs aujourd'hui · ton meilleur score 4/5</span><span class="btn w sm mt6" style="width:fit-content">Jouer ${ic('right', 's')}</span></div></div>
  ${sec('Les jeux')}
  <div class="pad" style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
    ${game('Duel du jour', 'Breaking Bad ou Les Soprano ?', 'bolt', 'linear-gradient(160deg,#841d4f,#1a0a12)', 'Nouveau')}
    ${game('Series Match', 'Quoi regarder à deux', 'heart', 'linear-gradient(160deg,#1e6c86,#011921)', '')}
    ${game('Devine la série', 'Indices, images floutées', 'search', 'linear-gradient(160deg,#3c0a22,#0d0a1c)', '')}
    ${game('Quel perso es-tu ?', 'Test de personnalité', 'user', 'linear-gradient(160deg,#1e6c86,#08140f)', '')}
  </div>
  ${sec('Classement entre amis', 'Cette semaine')}
  <div class="pad list">
    ${[['Nadia', 3120, 1], ['Charlotte (toi)', 2640, 2], ['Kévin', 2390, 3], ['Lucas', 1980, 4]].map(([n, p, r]) => `<div class="row g12" style="padding:10px 0"><span class="b" style="width:18px;color:${r === 1 ? 'var(--gold)' : 'var(--muted)'}">${r}</span><span class="av" style="width:34px;height:34px">${n[0]}</span><span class="small ${n.includes('toi') ? 'b' : ''}" style="flex:1">${n}</span><span class="b small">${p.toLocaleString('fr-FR')}</span></div>`).join('')}
  </div>
</div>${tabbar('Jouer')}`;

const F2 = `<div class="scr" style="background:radial-gradient(90% 40% at 50% 0%, #3c0a22, transparent 70%), #000">
  <div class="topbar"><span class="ib">${ic('x')}</span><span class="h-s">Question 3 / 5</span><span class="pill gold">${ic('bolt', 'xs')} 120</span></div>
  <div class="pad"><div class="steps"><i class="on"></i><i class="on"></i><i class="on"></i><i></i><i></i></div><p class="xs dim mt6">Jouable sans compte · crée-en un pour garder ton score</p></div>
  <div class="pad mt14"><div class="row between xs muted"><span>Temps restant</span><span class="b" style="color:var(--fg)">0:14</span></div><div class="prog mt6" style="height:6px"><i style="width:46%;background:var(--magenta)"></i></div></div>
  <div class="pad mt20"><div style="${backdrop('Pollos Hermanos', 180)};border-radius:20px;display:grid;place-items:center"><span class="h-l" style="opacity:.9">🐔</span></div></div>
  <div class="pad mt20"><span class="over">Breaking Bad</span><h2 class="h-m mt6" style="font-size:20px">Quel est le nom du restaurant de Gus Fring ?</h2></div>
  <div class="pad col g10 mt20">
    ${[['Los Pollos Hermanos', 'ok'], ['El Camino', 'ko'], ['Saul\'s Diner', ''], ['Albuquerque Grill', '']].map(([t, s]) => `<div class="card row g12" style="padding:16px;${s === 'ok' ? 'border-color:var(--green);background:color-mix(in srgb,var(--green) 16%,var(--s1))' : s === 'ko' ? 'border-color:var(--red);background:color-mix(in srgb,var(--red) 14%,var(--s1))' : ''}"><span class="b" style="flex:1">${t}</span>${s === 'ok' ? `<span class="c-green">${ic('check', 's')}</span>` : s === 'ko' ? `<span style="color:var(--red)">${ic('x', 's')}</span>` : ''}</div>`).join('')}
  </div>
  <div class="pad mt20 row g10"><span class="pill green">+ 20 pts · bonne réponse en 6 s</span></div>
  <div class="pad mt14"><span class="btn w full">Question suivante ${ic('right', 's')}</span></div>
</div>`;

const F3 = `<div class="scr">
  ${back('Duel du jour', 'Jouer', `<span class="ib">${ic('share')}</span>`)}
  <div class="pad col g6" style="text-align:center;align-items:center"><span class="pill mag">${ic('bolt', 'xs')} Duel n° 214</span><span class="h-l mt6">Quelle série<br>préfères-tu ?</span></div>
  <div class="pad mt20" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;position:relative">
    <div class="col g8">${P('Breaking Bad', { w: '100%', h: 230, sel: true, chk: true, fs: 16 })}<div class="col g4"><div class="row between"><span class="b small">Breaking Bad</span><span class="h-s c-mag">68 %</span></div><div class="prog" style="height:8px"><i style="width:68%;background:var(--magenta)"></i></div></div></div>
    <div class="col g8">${P('The Sopranos', { w: '100%', h: 230, fs: 16 })}<div class="col g4"><div class="row between"><span class="b small">Les Soprano</span><span class="h-s muted">32 %</span></div><div class="prog" style="height:8px"><i style="width:32%;background:#4a5d66"></i></div></div></div>
    <span style="position:absolute;left:50%;top:100px;transform:translateX(-50%);width:48px;height:48px;border-radius:50%;background:#000;border:2px solid var(--line);display:grid;place-items:center" class="h-s">VS</span>
  </div>
  <div class="pad mt20"><div class="card col g8" style="padding:16px"><span class="b small">Tu votes avec la majorité !</span><span class="xs muted">12 480 votes · + 15 points</span><div class="row g8 xs">${ic('users', 'xs')}<span>Nadia et Kévin ont aussi choisi Breaking Bad</span></div></div></div>
  <div class="pad mt14 card row g12" style="margin-inline:18px;padding:14px">${ic('clock')}<div class="col"><span class="b small">Prochain duel demain à 9:00</span><span class="xs muted">The Office ou Parks and Recreation ?</span></div></div>
  <div class="pad mt20"><span class="btn o full">${ic('share', 's')} Partager mon vote</span></div>
</div>${tabbar('Jouer')}`;

const F4 = `<div class="scr" style="background:radial-gradient(100% 45% at 50% 0%, #072631, transparent 70%), #000">
  ${back('Series Match', 'Jouer')}
  <div class="pad col" style="align-items:center;gap:12px;text-align:center">
    <div class="row" style="justify-content:center;gap:0">
      <span class="av" style="width:72px;height:72px;font-size:24px;border:3px solid #000">C</span>
      <span style="margin-inline:-14px;z-index:2">${ring(87, '87 %', 'var(--magenta)', 84)}</span>
      <span class="av" style="width:72px;height:72px;font-size:24px;border:3px solid #000;background:linear-gradient(135deg,#1e6c86,#3c0a22)">N</span>
    </div>
    <span class="h-l">Charlotte & Nadia</span>
    <span class="small muted">87 % de compatibilité séries. Vous aimez toutes les deux les thrillers et les fins qui divisent.</span>
    <div class="row" style="gap:6px">${chip('Netflix en commun', false, 'sm')}${chip('42 séries vues toutes les deux', false, 'sm')}</div>
  </div>
  ${sec('5 séries à regarder ensemble')}
  <div class="pad list">
    ${[['Mindhunter', 94, 'Netflix'], ['Slow Horses', 91, 'Apple TV'], ['Devs', 89, 'Disney+'], ['The Night Of', 88, 'HBO Max'], ['Mare of Easttown', 86, 'HBO Max']].map(([t, m, pf], i) => `<div class="row g12" style="padding:10px 0"><span class="b muted" style="width:14px">${i + 1}</span>${P(t, { w: 44, h: 62, notitle: true })}<div class="col g4" style="flex:1"><span class="b small">${t}</span><span class="xs muted">${pf} · aucune de vous deux ne l'a vue</span></div><span class="pill mag">${m} %</span></div>`).join('')}
  </div>
  <div class="pad mt20 col g10"><span class="btn p full">${ic('play', 's')} On regarde Mindhunter ce soir</span><span class="btn w full">${ic('plus', 's')} Ajouter à notre liste commune</span><span class="btn o full">${ic('users', 's')} Faire un match avec un autre ami</span></div>
</div>${tabbar('Jouer')}`;

const badge = (e, t, on, sub) => `<div class="col" style="align-items:center;gap:6px;text-align:center"><span style="width:64px;height:64px;border-radius:20px;display:grid;place-items:center;font-size:28px;${on ? 'background:linear-gradient(135deg,#1e6c8633,#841d4f33);border:1px solid color-mix(in srgb,var(--gold) 50%,var(--line))' : 'background:var(--s1);border:1px solid var(--line);filter:grayscale(1);opacity:.45'}">${e}</span><span class="xs b">${t}</span><span class="xs dim" style="font-size:10px">${sub}</span></div>`;
const F5 = `<div class="scr">
  ${back('Défis et badges', 'Jouer')}
  ${sec('Défis d\'octobre', 'Il reste 9 jours')}
  <div class="pad col g10">
    ${[['🌍', 'Tour du monde', 'Découvrir 3 séries de 3 pays différents', 2, 3, 150], ['📼', 'Retour vers le passé', 'Terminer une série abandonnée', 0, 1, 100], ['⚡', 'Mini marathon', 'Finir une mini-série en moins de 7 jours', 1, 1, 80]].map(([e, t, s, v, n, pts]) => `<div class="card row g12" style="padding:14px;${v === n ? 'border-color:color-mix(in srgb,var(--green) 45%,var(--line))' : ''}"><span style="font-size:26px">${e}</span><div class="col g6" style="flex:1;min-width:0"><div class="row between"><span class="b small">${t}</span><span class="xs ${v === n ? 'c-green' : 'c-gold'} b">${v === n ? 'Réussi' : '+ ' + pts}</span></div><span class="xs muted">${s}</span>${prog((v / n) * 100, v === n ? '' : 'gold')}<span class="xs dim">${v} / ${n}</span></div></div>`).join('')}
  </div>
  ${sec('Mes badges', '9 sur 32')}
  <div class="pad" style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px 8px">
    ${badge('🏃', 'Marathonien', true, '10 ép. en 1 week-end')}${badge('🔥', '7 jours', true, 'Série de jours')}${badge('🧠', 'Quiz master', true, '10 quiz parfaits')}${badge('🎯', 'Pronostic', true, 'Duel gagné x20')}
    ${badge('🌍', 'Globe-trotteur', false, '10 pays')}${badge('🏆', 'Cinéphile', false, '25 des 100')}${badge('📅', '30 jours', false, 'Série de jours')}${badge('🤝', 'Âme sœur', false, 'Match à 95 %')}
  </div>
  ${sec('Classement du mois', 'Entre amis')}
  <div class="pad row" style="align-items:flex-end;gap:8px">${[['Charlotte', 2640, 2, 96, '#9fb0b8'], ['Nadia', 3120, 1, 128, 'var(--gold)'], ['Kévin', 2390, 3, 76, '#c98a5a']].map(([n, p, r, h, c]) => `<div class="col" style="flex:1;align-items:center;gap:6px"><span class="av" style="width:${r === 1 ? 56 : 46}px;height:${r === 1 ? 56 : 46}px;border:3px solid ${c}">${n[0]}</span><span class="xs b">${n}</span><span class="xs muted">${p.toLocaleString('fr-FR')} pts</span><div style="width:100%;height:${h}px;border-radius:14px 14px 4px 4px;background:linear-gradient(180deg,${c},transparent);display:grid;place-items:start center;padding-top:8px" class="h-m">${r}</div></div>`).join('')}</div>
  <div class="pad mt20"><span class="btn o full">${ic('share', 's')} Partager mes badges</span></div>
</div>${tabbar('Jouer')}`;

/* =========================================================
   G. Profil
   ========================================================= */
const G1 = `<div class="scr" style="padding-top:0">
  <div style="position:relative;height:150px;background:radial-gradient(80% 120% at 0% 0%, #841d4f, transparent 60%), radial-gradient(80% 120% at 100% 0%, #1e6c86, transparent 60%), #3c0a22">
    <div class="topbar" style="position:absolute;inset:0 0 auto;justify-content:flex-end;gap:8px"><span class="ib ghost">${ic('share')}</span><span class="ib ghost">${ic('gear')}</span></div>
  </div>
  <div class="pad" style="margin-top:-46px;position:relative;z-index:2">
    <div class="row g12" style="align-items:flex-end"><span class="av" style="width:92px;height:92px;font-size:32px;border:4px solid #000">C</span><span class="pill gold" style="margin-bottom:8px">Niveau 12</span></div>
    <span class="h-l mt10" style="display:block">Charlotte</span>
    <span class="small muted">@charlotte · Exploratrice de séries</span>
    <div class="row mt10" style="gap:6px">${chip(ic('dna', 'xs') + ' Détective des intrigues', false, 'sm')}${chip('Thrillers', false, 'sm')}</div>
  </div>
  <div class="pad mt20" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
    ${[['142', 'Séries vues'], ['3 280', 'Épisodes'], ['96 j', 'Devant l\'écran*']].map(([v, l]) => `<div class="card" style="padding:12px;text-align:center"><span class="h-m" style="font-size:22px">${v}</span><span class="xs muted" style="display:block">${l}</span></div>`).join('')}
  </div>
  <p class="xs dim pad mt6">* Temps estimé à partir des épisodes cochés.</p>
  ${sec('Mon top 4 de tous les temps', 'Modifier')}
  <div class="pad" style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">${['Six Feet Under', 'The Wire', 'Lost', 'BoJack Horseman'].map((t, i) => P(t, { w: '100%', h: 118, fs: 10, tl: `<span class="pill dark">${i + 1}</span>` })).join('')}</div>
  ${sec('Mes personnages favoris', 'Modifier')}
  <div class="rail">${[['Dolores', 'Westworld'], ['Maeve', 'Westworld'], ['Bernard', 'Westworld'], ['William', 'Westworld']].map(([n, s]) => `<div class="col g6" style="width:78px;flex-shrink:0;align-items:center;text-align:center"><span style="width:68px;height:68px;border-radius:50%;overflow:hidden;display:block">${P(n, { w: 68, h: 68, notitle: true })}</span><span class="xs b">${n}</span><span class="xs dim" style="font-size:10px">${s}</span></div>`).join('')}</div>
  <div class="pad mt20"><div class="card row g12" style="padding:14px;background:linear-gradient(135deg,#011921,#072631);border-color:color-mix(in srgb,var(--gold) 45%,var(--line))"><span class="c-gold">${ic('trophy')}</span><div class="col" style="flex:1"><span class="b small">Ton Wrapped 2026 est prêt</span><span class="xs muted">3 cartes gratuites · bilan complet avec Premium</span></div>${ic('right', 's')}</div></div>
  ${sec('Mon ADN séries', 'Voir')}
  <div class="pad"><div style="border-radius:20px;padding:16px;background:linear-gradient(135deg,#3c0a22,#072631)" class="row g12">${ic('dna', 'l')}<div class="col g4" style="flex:1"><span class="h-s">La détective des intrigues</span><span class="xs" style="color:#cfd8dc">Thrillers psychologiques, personnages complexes</span></div>${ic('right', 's')}</div></div>
  ${sec('Badges', '9')}
  <div class="rail" style="gap:10px">${['🏃', '🔥', '🧠', '🎯', '📺', '🌙'].map((e) => `<span style="width:54px;height:54px;flex-shrink:0;border-radius:18px;display:grid;place-items:center;font-size:24px;background:linear-gradient(135deg,#1e6c8633,#841d4f33);border:1px solid color-mix(in srgb,var(--gold) 40%,var(--line))">${e}</span>`).join('')}</div>
  ${sec('Activité récente')}
  <div class="pad list">
    ${[['check', 'A terminé', 'Silo · saison 1', 'Hier'], ['star', 'A noté 5 étoiles', 'Dark', 'Lundi'], ['trophy', 'A gagné le badge', 'Quiz master', 'Lundi']].map(([i, a, t, w]) => `<div class="row g12" style="padding:10px 0"><span class="ib" style="width:36px;height:36px;color:var(--teal)">${ic(i, 's')}</span><span class="small" style="flex:1">${a} <b>${t}</b></span><span class="xs dim">${w}</span></div>`).join('')}
  </div>
</div>${tabbar('Profil')}`;

const G2 = `<div class="scr">
  ${back('Mes statistiques', 'Profil', `<span class="ib">${ic('share')}</span>`)}
  <div class="rail" style="gap:8px">${chip('2026', true)}${chip('2025')}${chip('Depuis toujours')}</div>
  <div class="pad mt14"><div class="card col g10" style="padding:16px">
    <span class="over">Cette année</span>
    <div class="row g16" style="gap:20px"><div class="col"><span class="h-l">412</span><span class="xs muted">épisodes vus</span></div><div class="col"><span class="h-l">318 h</span><span class="xs muted">estimées*</span></div><div class="col"><span class="h-l">27</span><span class="xs muted">séries</span></div></div>
    <div class="bar-v mt6">${[30, 42, 55, 38, 60, 72, 48, 85, 66, 52].map((v, i) => `<span class="${i === 7 ? 'hi' : ''}" style="height:${v}%"></span>`).join('')}<span style="height:8%;background:#1f2e35"></span><span style="height:8%;background:#1f2e35"></span></div>
    <div class="row between xs dim"><span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span></div>
    <span class="xs muted">Ton meilleur mois : août, 85 épisodes.</span>
  </div></div>
  ${sec('Genres préférés')}
  <div class="pad col g10">${[['Thriller', 38], ['Science-fiction', 26], ['Drame', 18], ['Comédie', 12], ['Animation', 6]].map(([g, p]) => `<div class="col g4"><div class="row between small"><span>${g}</span><span class="b">${p} %</span></div>${prog(p * 2.2, 'g')}</div>`).join('')}</div>
  ${sec('Plateformes')}
  <div class="pad" style="display:grid;grid-template-columns:1fr 1fr;gap:8px">${[['Netflix', '46 %', '#e50914'], ['Apple TV', '22 %', '#d9d9d9'], ['HBO Max', '18 %', '#7b3fe4'], ['Prime Video', '14 %', '#1fa5e8']].map(([n, p, c]) => `<div class="card row g10" style="padding:12px"><span style="width:10px;height:34px;border-radius:5px;background:${c}"></span><div class="col"><span class="b small">${n}</span><span class="xs muted">${p}</span></div></div>`).join('')}</div>
  ${sec('Pays, acteurs, heures de visionnage')}
  <div class="pad">${premiumLock('Statistiques détaillées', 'Pays des séries, acteurs les plus vus, jours et heures de visionnage, comparaison avec tes amis.')}</div>
  <p class="xs dim pad mt14">* Temps estimé à partir des épisodes cochés, pas du temps réellement mesuré.</p>
</div>${tabbar('Profil')}`;

const G3 = `<div class="scr" style="background:#000">
  ${back('Mon ADN séries', 'Profil')}
  <div class="pad">
    <div style="border-radius:28px;padding:22px 20px;background:radial-gradient(100% 60% at 100% 0%, #1e6c86, transparent 60%), radial-gradient(100% 70% at 0% 100%, #841d4f, transparent 60%), #3c0a22;position:relative;overflow:hidden" class="col g12">
      <div class="row between"><span class="logo" style="font-size:12px">SERIE<span style="color:#fff;-webkit-text-fill-color:#fff">ADDICT</span></span><span class="xs" style="opacity:.8">@charlotte</span></div>
      <span class="over" style="color:rgba(255,255,255,.85)">Mon ADN séries</span>
      <span class="h-xl" style="font-size:30px">La détective<br>des intrigues</span>
      <p class="small" style="opacity:.92">Tu aimes les histoires qui se méritent, les twists qui changent tout et les personnages qu'on ne cerne jamais vraiment.</p>
      <div class="col g8 mt6">${[['Mystère', 92], ['Personnages complexes', 84], ['Tension', 77], ['Humour noir', 41]].map(([t, p]) => `<div class="col g4"><div class="row between xs b"><span>${t}</span><span>${p} %</span></div><div style="height:6px;border-radius:6px;background:rgba(255,255,255,.2)"><i style="display:block;height:100%;width:${p}%;border-radius:6px;background:#fff"></i></div></div>`).join('')}</div>
      <div class="row g6 mt6">${['Dark', 'Severance', 'True Detective', 'Mindhunter'].map((t) => P(t, { w: 64, h: 92, notitle: true })).join('')}</div>
      <span class="xs" style="opacity:.8">Mes séries emblématiques</span>
    </div>
  </div>
  <div class="pad mt14 col g10">
    <span class="btn w full">${ic('share', 's')} Partager en story</span>
    <span class="btn o full">Comparer avec un ami</span>
  </div>
  ${sec('Séries faites pour ton ADN')}
  <div class="rail">${['The OA', 'Devs', '1899', 'Counterpart'].map((t) => P(t, { w: 104, h: 150 })).join('')}</div>
</div>${tabbar('Profil')}`;

const G4 = `<div class="scr">
  ${back('Amis', 'Profil', `<span class="ib">${ic('plus')}</span>`)}
  <div class="pad"><div class="field">${ic('search')} Rechercher un ami</div></div>
  <div class="pad mt14"><div class="card row g12" style="padding:14px;border-color:transparent"><span class="av" style="width:44px;height:44px">S</span><div class="col g4" style="flex:1"><span class="b small">Sarah veut être ton amie</span><span class="xs muted">12 séries en commun · 81 % de compatibilité</span></div><span class="btn w sm">Accepter</span></div></div>
  ${sec('Mes amis', '14')}
  <div class="pad list">
    ${[['Nadia', 87, 'Regarde Mindhunter', 'mag'], ['Kévin', 74, 'A terminé The Bear', 'teal'], ['Lucas', 69, 'Joue au quiz du jour', 'gold'], ['Inès', 58, 'A noté Severance 5/5', 'teal']].map(([n, c, a, k]) => `<div class="row g12" style="padding:12px 0"><span class="av" style="width:46px;height:46px">${n[0]}</span><div class="col g4" style="flex:1"><span class="b">${n}</span><span class="xs muted">${a}</span></div>${ring(c, c + '%', c > 80 ? 'var(--magenta)' : 'var(--teal)', 46)}</div>`).join('')}
  </div>
  ${sec('Ils te recommandent')}
  <div class="pad col g10">
    ${[['Nadia', 'Mindhunter', 'Tu vas adorer les interrogatoires, c\'est du Severance version FBI.'], ['Kévin', 'Abbott Elementary', 'Pour souffler entre deux thrillers.']].map(([w, t, q]) => `<div class="card row g12" style="padding:12px">${P(t, { w: 56, h: 80, notitle: true })}<div class="col g6" style="flex:1"><span class="xs muted">${w} te recommande</span><span class="b small">${t}</span><span class="xs" style="color:#cfd8dc">« ${q} »</span></div><span class="ib" style="width:38px;height:38px">${ic('plus', 's')}</span></div>`).join('')}
  </div>
  <div class="pad mt20"><span class="btn o full">${ic('share', 's')} Inviter des amis</span></div>
</div>${tabbar('Profil')}`;

const set = (t, s, on) => `<div class="row g12" style="padding:14px 0"><div class="col g4" style="flex:1"><span class="b small">${t}</span>${s ? `<span class="xs muted">${s}</span>` : ''}</div>${on === undefined ? ic('right', 's') : `<span class="tog ${on ? 'on' : ''}"></span>`}</div>`;
const G5 = `<div class="scr">
  ${back('Réglages', 'Profil')}
  ${sec('Notifications')}
  <div class="pad"><div class="card list" style="padding:0 16px">
    ${set('Sorties de mes séries', 'Nouveaux épisodes et saisons, le jour J', true)}
    ${set('Annonces importantes', 'Renouvellements, dates, castings de mes séries', true)}
    ${set('Jeux et défis', 'Défi du jour, duels, rappels de série de jours', false)}
  </div></div>
  ${sec('Sans spoilers')}
  <div class="pad"><div class="card list" style="padding:0 16px">
    ${set('Mode sans spoilers', 'Masque les actus et messages sur les épisodes que tu n\'as pas vus', true)}
    ${set('Dates françaises', 'Afficher les sorties à l\'heure française', true)}
  </div></div>
  ${sec('Mes plateformes')}
  <div class="pad row" style="flex-wrap:wrap;gap:8px">${chip('Netflix', true)}${chip('Prime Video', true)}${chip('Apple TV', true)}${chip('+ Ajouter')}</div>
  ${sec('Thème de l\'app')}
  <div class="pad row g10">
    ${[['SerieAddict', 'linear-gradient(135deg,#841d4f,#1e6c86)', true, false], ['Upside Down', 'linear-gradient(135deg,#8a1c1c,#140606)', false, true], ['Lumon', 'linear-gradient(135deg,#1f6f5c,#e8f1ee)', false, true], ['Néon', 'linear-gradient(135deg,#7c3cff,#ff3cc8)', false, true]].map(([n, g, on, lock]) => `<div class="col g6" style="flex:1;align-items:center"><span style="width:100%;aspect-ratio:1;border-radius:16px;background:${g};display:grid;place-items:center;${on ? 'outline:2px solid #fff;outline-offset:2px' : ''}">${lock ? `<span class="ib ghost" style="width:30px;height:30px;color:var(--gold)">${ic('lock', 'xs')}</span>` : ''}</span><span class="xs ${on ? 'b' : 'muted'}">${n}</span></div>`).join('')}
  </div>
  <p class="pad xs muted mt6">Les thèmes supplémentaires font partie de Premium.</p>
  ${sec('Compte')}
  <div class="pad"><div class="card list" style="padding:0 16px">
    ${set('Mon abonnement', 'Gratuit · Passer à Premium')}
    ${set('Boutique SerieAddict', 'Ebooks, posters, produits dérivés')}
    ${set('Importer mon historique', 'Depuis TV Time ou un fichier')}
    ${set('Exporter mes données')}
    ${set('Email et mot de passe')}
  </div></div>
  ${sec('À propos')}
  <div class="pad"><div class="card list" style="padding:0 16px">${set('Aide et contact')}${set('Conditions d\'utilisation')}${set('Confidentialité et cookies')}
    <div class="row g12" style="padding:14px 0"><span style="padding:6px 9px;border-radius:8px;background:linear-gradient(90deg,#90cea1,#01b4e4);color:#0d253f;font:900 12px/1 var(--display)">TMDB</span><span class="xs muted" style="flex:1">Données des séries fournies par TMDB. Ce produit utilise l'API TMDB sans être approuvé ni certifié par TMDB.</span></div>
  </div></div>
  <div class="pad mt20"><span class="btn o full" style="color:var(--red)">Se déconnecter</span></div>
</div>${tabbar('Profil')}`;

/* ---------- Jeux supplémentaires ---------- */
const F6 = `<div class="scr" style="background:radial-gradient(90% 40% at 50% 0%, #1f2a4a, transparent 70%), #000">
  <div class="topbar"><span class="ib">${ic('x')}</span><span class="h-s">Devine la série</span><span class="pill gold">${ic('bolt', 'xs')} 80 pts</span></div>
  <div class="pad"><span class="over">Indice 2 sur 4 · moins d'indices = plus de points</span></div>
  <div class="pad mt14"><div style="position:relative;border-radius:22px;overflow:hidden;height:230px;background:${img('Twin Peaks')} center/cover"><div style="position:absolute;inset:0;backdrop-filter:blur(14px);background:rgba(0,0,0,.2)"></div><span class="pill dark" style="position:absolute;left:12px;top:12px">${ic('eyeoff', 'xs')} Image floutée</span></div></div>
  <div class="pad col g8 mt14">
    <div class="card row g10" style="padding:12px">${ic('chat', 's')}<span class="small"><b>Citation :</b> « Le café est délicieux et bien noir. »</span></div>
    <div class="card row g10" style="padding:12px">${ic('cal', 's')}<span class="small"><b>Année :</b> 1990</span></div>
    <div class="card row g10 dim" style="padding:12px">${ic('lock', 's')}<span class="small">Indice 3 : un personnage (- 20 pts)</span></div>
  </div>
  <div class="pad mt14"><div class="field focus">${ic('search')} Twin P<span style="width:1.5px;height:18px;background:var(--teal)"></span></div>
    <div class="card mt6" style="padding:4px 14px"><div class="row g10" style="padding:10px 0">${P('Twin Peaks', { w: 32, h: 44, notitle: true })}<span class="b small">Twin Peaks</span></div></div></div>
  <div class="pad mt14"><span class="btn w full">Valider ma réponse</span></div>
</div>`;

const F7 = `<div class="scr" style="background:radial-gradient(100% 50% at 50% 0%, #3c0a22, transparent 70%), #000">
  ${back('Quel personnage es-tu ?', 'Jouer', `<span class="ib">${ic('share')}</span>`)}
  <div class="pad"><span class="over">Ton résultat · test Westworld · 8 questions</span></div>
  <div class="pad mt14">
    <div style="border-radius:26px;overflow:hidden;position:relative;height:330px;background:${img('Maeve')} center/cover">
      <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,rgba(0,0,0,.92))"></div>
      <div style="position:absolute;left:18px;right:18px;bottom:18px" class="col g6"><span class="pill mag">Tu es à 84 %</span><span class="h-xl">Maeve Millay</span><span class="small" style="color:#d6dee2">Lucide, stratège et prête à tout pour les siens.</span></div>
    </div>
  </div>
  <div class="pad mt14 col g8">${[['Stratégie', 90], ['Loyauté', 82], ['Humour', 64]].map(([t, p]) => `<div class="col g4"><div class="row between xs b"><span>${t}</span><span>${p} %</span></div>${prog(p, 'g')}</div>`).join('')}</div>
  <div class="pad mt14"><div class="card row g10" style="padding:12px">${ic('users', 's')}<span class="small" style="flex:1">Nadia est <b>Dolores</b>. Kévin est <b>Bernard</b>.</span></div></div>
  <div class="pad mt20 col g10"><span class="btn w full">${ic('share', 's')} Partager mon résultat en story</span><span class="btn o full">Faire un autre test</span></div>
</div>${tabbar('Jouer')}`;

/* ---------- Wrapped ---------- */
const G6 = `<div class="scr" style="padding:0;background:radial-gradient(110% 60% at 0% 0%, #841d4f, transparent 60%), radial-gradient(110% 60% at 100% 100%, #1e6c86, transparent 60%), #3c0a22">
  <div class="topbar"><span class="ib ghost">${ic('x')}</span><div class="row g6" style="flex:1;margin-inline:14px">${[1, 1, 1, 0, 0, 0].map((on) => `<i style="flex:1;height:3px;border-radius:3px;background:rgba(255,255,255,${on ? 1 : .3})"></i>`).join('')}</div><span class="ib ghost">${ic('share')}</span></div>
  <div class="pad col g10 mt20">
    <span class="logo" style="font-size:13px">SERIE<span style="color:#fff;-webkit-text-fill-color:#fff">ADDICT</span> WRAPPED</span>
    <span class="h-xl" style="font-size:34px">Ton année<br>2026 en séries</span>
  </div>
  <div class="pad mt26 col g14" style="gap:14px">
    <div style="border-radius:22px;padding:18px;background:rgba(0,0,0,.35)" class="col g6"><span class="over" style="color:rgba(255,255,255,.8)">Tu as regardé</span><span style="font:900 56px/1 var(--display)">412</span><span class="b">épisodes, soit environ 13 jours devant l'écran*</span></div>
    <div style="border-radius:22px;padding:18px;background:rgba(0,0,0,.35)" class="row g14"><span style="flex-shrink:0">${P('Severance', { w: 90, h: 130 })}</span><div class="col g6"><span class="over" style="color:rgba(255,255,255,.8)">Ta série de l'année</span><span class="h-m" style="font-size:22px">Severance</span><span class="small" style="opacity:.9">19 épisodes, noté 5/5</span></div></div>
    <div class="row g10">
      <div style="flex:1;border-radius:20px;padding:14px;background:rgba(0,0,0,.35)" class="col g4"><span class="over" style="color:rgba(255,255,255,.8)">Genre n° 1</span><span class="h-s">Thriller</span></div>
      <div style="flex:1;border-radius:20px;padding:14px;background:rgba(0,0,0,.35)" class="col g4"><span class="over" style="color:rgba(255,255,255,.8)">Plus longue série</span><span class="h-s">34 jours 🔥</span></div>
    </div>
    <div style="border-radius:22px;padding:16px;background:rgba(0,0,0,.45);border:1px solid rgba(30,108,134,.5)" class="col g8">
      <div class="row between"><span class="b small">Encore 5 cartes dans ton bilan</span><span class="pill gold">${ic('lock', 'xs')} Premium</span></div>
      <span class="xs" style="opacity:.85">Tes personnages de l'année, ton mois record, tes pays, ton classement parmi tes amis, ton ADN 2026.</span>
    </div>
    <p class="xs" style="opacity:.75">* Estimation à partir des épisodes cochés.</p>
  </div>
  <div class="pad mt14 col g10" style="padding-bottom:28px"><span class="btn w full">${ic('share', 's')} Partager en story</span><span class="small" style="text-align:center;opacity:.85">Touche pour la suite ›</span></div>
</div>`;

/* ---------- H. Premium et boutique ---------- */
const cmpRow = (t, free, prem) => `<div class="row g8" style="padding:11px 0"><span class="small" style="flex:1">${t}</span><span class="xs" style="width:70px;text-align:center;color:${free === 'no' ? 'var(--dim)' : 'var(--fg)'}">${free === '✓' ? '<span class="c-teal">' + ic('check', 's') + '</span>' : free === 'no' ? 'Non' : free}</span><span class="xs b" style="width:70px;text-align:center;color:var(--gold)">${prem === '✓' ? ic('check', 's') : prem}</span></div>`;
const H1 = `<div class="scr" style="background:radial-gradient(100% 40% at 50% 0%, #072631, transparent 70%), #000">
  <div class="topbar"><span class="ib">${ic('x')}</span><span class="small muted">Restaurer un achat</span></div>
  <div class="pad col g10" style="align-items:center;text-align:center">
    <span class="burst">${ic('trophy', 'l')}</span>
    <span class="over c-gold">SerieAddict Premium</span>
    <span class="h-xl" style="font-size:28px">Va plus loin<br>dans ta passion</span>
    <p class="small muted" style="max-width:30ch">Le suivi de tes séries reste gratuit pour toujours. Premium débloque le reste.</p>
  </div>
  <div class="pad mt20"><div class="card" style="padding:4px 14px">
    <div class="row g8" style="padding:10px 0;border-bottom:1px solid var(--line)"><span class="xs muted" style="flex:1">Fonctionnalité</span><span class="xs muted" style="width:70px;text-align:center">Gratuit</span><span class="xs b c-gold" style="width:70px;text-align:center">Premium</span></div>
    <div class="list">
      ${cmpRow('Suivi des séries et épisodes', '✓', '✓')}
      ${cmpRow('Calendrier et alertes', '✓', '✓')}
      ${cmpRow('Quiz et défis', '✓', '✓')}
      ${cmpRow('Recommandations', 'Basiques', 'Avancées')}
      ${cmpRow('Profil et bilans', 'Limité', 'Complet')}
      ${cmpRow('Statistiques détaillées', 'no', '✓')}
      ${cmpRow('Thèmes et personnalisation', 'no', '✓')}
      ${cmpRow('Publicités', 'Oui', 'Aucune')}
    </div>
  </div></div>
  <div class="pad mt14 col g10">
    <div class="card row g12" style="padding:14px;border:2px solid var(--gold);background:color-mix(in srgb,var(--gold) 8%,var(--s1))"><span class="chk-c on" style="background:var(--gold);border-color:var(--gold);color:#000">${ic('check', 'xs')}</span><div class="col" style="flex:1"><span class="b">Annuel</span><span class="xs muted">19,99 € par an, soit 1,67 € par mois</span></div><span class="pill gold">- 44 %</span></div>
    <div class="card row g12" style="padding:14px"><span class="chk-c"></span><div class="col" style="flex:1"><span class="b">Mensuel</span><span class="xs muted">2,99 € par mois</span></div></div>
  </div>
  <div class="pad mt14"><span class="btn full" style="background:var(--gold);color:#000">Passer à Premium · 19,99 € / an</span>
  <p class="xs dim mt10" style="text-align:center">Paiement via l'App Store ou Google Play. Résiliable à tout moment depuis ton compte.</p></div>
</div>`;

const H2 = `<div class="scr" style="background:radial-gradient(100% 55% at 50% 20%, #072631, transparent 70%), #000">
  <div class="pad col" style="align-items:center;text-align:center;gap:14px;padding-top:90px">
    <span class="burst" style="width:130px;height:130px">${ic('trophy', 'l')}</span>
    <span class="pill gold">Paiement confirmé</span>
    <span class="h-xl">Bienvenue<br>en <span style="color:var(--gold)">Premium</span></span>
    <p class="small muted" style="max-width:28ch">Merci Charlotte. Voici ce qui vient de se débloquer pour toi.</p>
  </div>
  <div class="pad col g8 mt20">
    ${[['spark', 'Recommandations avancées', 'Selon ton humeur, ton temps et tes abonnements'], ['list', 'Statistiques détaillées', 'Pays, acteurs, heures de visionnage'], ['trophy', 'Bilans complets', 'Ton Wrapped en version intégrale'], ['star', '3 thèmes exclusifs', 'Upside Down, Lumon, Néon'], ['x', 'Plus aucune publicité', '']].map(([i, t, s]) => `<div class="card row g12" style="padding:12px 14px"><span class="ib" style="width:38px;height:38px;color:var(--gold)">${ic(i, 's')}</span><div class="col" style="flex:1"><span class="b small">${t}</span>${s ? `<span class="xs muted">${s}</span>` : ''}</div></div>`).join('')}
  </div>
  <div class="pad mt20 col g10"><span class="btn w full">Choisir mon thème</span><span class="small muted" style="text-align:center">Retour à l'accueil</span></div>
</div>`;

const H3 = `<div class="scr">
  ${back('Mon abonnement', 'Réglages')}
  <div class="pad"><div style="border-radius:22px;padding:18px;background:linear-gradient(135deg,#072631,#072631);border:1px solid color-mix(in srgb,var(--gold) 45%,var(--line))" class="col g8">
    <div class="row between"><span class="pill gold">${ic('trophy', 'xs')} Premium annuel</span><span class="xs c-green b">Actif</span></div>
    <span class="h-l">19,99 € / an</span>
    <span class="small muted">Prochain renouvellement le 23 octobre 2027</span>
  </div></div>
  ${sec('Gérer')}
  <div class="pad"><div class="card list" style="padding:0 16px">
    ${set('Changer de formule', 'Passer au mensuel à 2,99 €')}
    ${set('Moyen de paiement', 'Géré par l\'App Store')}
    ${set('Historique des paiements')}
    ${set('Restaurer un achat')}
  </div></div>
  ${sec('Ce que tu utilises le plus')}
  <div class="pad" style="display:grid;grid-template-columns:1fr 1fr;gap:8px">${[['38', 'recommandations avancées'], ['12', 'consultations des stats']].map(([v, l]) => `<div class="card" style="padding:14px"><span class="h-l c-gold">${v}</span><span class="xs muted" style="display:block">${l}</span></div>`).join('')}</div>
  <div class="pad mt26 col g8"><span class="btn o full" style="color:var(--red)">Résilier l'abonnement</span><p class="xs dim" style="text-align:center">Tu gardes Premium jusqu'au 23 octobre 2027. Ton suivi de séries reste gratuit.</p></div>
</div>${tabbar('Profil')}`;

const H4 = `<div class="scr">
  ${back('Boutique', 'SerieAddict', `<span class="ib">${ic('bookmark')}</span>`)}
  <div class="pad"><div style="border-radius:24px;overflow:hidden;position:relative;height:200px;background:${img('Ebook 100 series')} center/cover">
    <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.9),rgba(0,0,0,.2))"></div>
    <div style="position:absolute;left:18px;top:18px;right:120px" class="col g8"><span class="pill mag">Nouveau</span><span class="h-m" style="font-size:20px">L'ebook des 100 séries à voir</span><span class="small c-gold b">9,99 €</span><span class="btn w sm" style="width:fit-content">Découvrir</span></div>
  </div></div>
  <div class="rail mt14" style="gap:8px">${chip('Tout', true)}${chip('Ebooks')}${chip('Posters')}${chip('Objets')}${chip('Mes séries')}</div>
  ${sec('Pour tes séries')}
  <div class="pad" style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
    ${[['Poster Lumon', 'Severance', '24,90 €'], ['Mug Macrodata', 'Severance', '16,90 €'], ['Poster Upside Down', 'Stranger Things', '29,90 €'], ['Carnet Innie', 'Severance', '12,90 €']].map(([t, s, p]) => `<div class="col g6">${P(t, { w: '100%', h: 170, notitle: true, tr: `<span class="ib ghost" style="width:32px;height:32px">${ic('heart', 'xs')}</span>` })}<span class="xs muted">${s}</span><span class="b small">${t}</span><div class="row between"><span class="b c-gold">${p}</span><span class="ib" style="width:34px;height:34px">${ic('plus', 's')}</span></div></div>`).join('')}
  </div>
  ${sec('Ebooks SerieAddict')}
  <div class="pad col g8">${[['Rattrape-moi : les grandes séries', '7,99 €'], ['Le guide des mini-séries', '5,99 €']].map(([t, p]) => `<div class="card row g12" style="padding:12px">${P(t, { w: 50, h: 70, notitle: true })}<div class="col g4" style="flex:1"><span class="b small">${t}</span><span class="xs muted">Ebook · PDF et EPUB</span></div><span class="b c-gold">${p}</span></div>`).join('')}</div>
  <p class="pad xs dim mt14">Produits physiques expédiés par SerieAddict. Achats numériques via l'App Store ou Google Play.</p>
</div>${tabbar('Profil')}`;

/* ---------- D5 : avis et communauté de la série ---------- */
const D5 = `<div class="scr">
  ${back('Avis et communauté', 'Severance', `<span class="ib">${ic('chat')}</span>`)}
  <div class="pad"><div class="card row g16" style="padding:16px;gap:16px">
    <div class="col" style="align-items:center;width:84px"><span class="h-xl c-gold">4,7</span>${stars(5, 12)}<span class="xs muted mt6">5 812 avis</span></div>
    <div class="col g4" style="flex:1">${[[5, 64], [4, 24], [3, 8], [2, 3], [1, 1]].map(([n, p]) => `<div class="row g8 xs"><span class="muted" style="width:8px">${n}</span><div class="prog" style="flex:1"><i style="width:${p}%;background:var(--gold)"></i></div><span class="dim" style="width:26px;text-align:right">${p}%</span></div>`).join('')}</div>
  </div></div>
  <div class="pad mt10 row g8 xs c-teal">${ic('eyeoff', 'xs')} Tu vois les contenus jusqu'à S2 · E5, là où tu en es.</div>
  ${sec('Avis des membres', 'Tous')}
  <div class="pad col g10">
    ${[['Inès', 5, 'La série la plus maîtrisée de ces dernières années. Chaque plan a un sens.', 128], ['Kévin', 4, 'Un début lent mais tout se met en place. La musique est géniale.', 54]].map(([w, n, t, l]) => `<div class="card col g8" style="padding:14px"><div class="row g8"><span class="av" style="width:30px;height:30px">${w[0]}</span><span class="b small" style="flex:1">${w}</span>${stars(n, 12)}</div><p class="small">${t}</p><span class="xs muted">${ic('heart', 'xs')} ${l} · Répondre</span></div>`).join('')}
    <span class="btn o full">${ic('star', 's')} Écrire mon avis</span>
  </div>
  ${sec('Classement des épisodes', 'Par la communauté')}
  <div class="pad list">${[['S1 · E9', 'The We We Are', '4,9'], ['S2 · E3', 'Who Is Alive?', '4,8'], ['S1 · E7', 'Defiant Jazz', '4,8']].map(([c, t, n], i) => `<div class="row g12" style="padding:10px 0"><span class="h-s ${i ? 'muted' : 'c-gold'}" style="width:18px">${i + 1}</span><div class="col" style="flex:1"><span class="b small">${t}</span><span class="xs muted">${c}</span></div><span class="b c-gold small">★ ${n}</span></div>`).join('')}</div>
  ${sec('Théories', '24')}
  <div class="pad col g8">${[['La salle des chèvres teste la loyauté des innies.', 312], ['Mme Cobel est elle-même une innie.', 198]].map(([t, l]) => `<div class="card row g10" style="padding:12px"><span class="c-mag">${ic('spark', 's')}</span><span class="small" style="flex:1">${t}</span><span class="xs muted">${ic('heart', 'xs')} ${l}</span></div>`).join('')}</div>
  ${sec('Discussions par épisode')}
  <div class="pad col g8">
    ${[['S2 · E5', 186, true], ['S2 · E4', 241, true]].map(([e, n]) => `<div class="card row g12" style="padding:12px 14px"><span class="b small" style="flex:1">${e}</span><span class="xs muted">${n} messages</span>${ic('right', 's')}</div>`).join('')}
    <div class="spoil">${ic('lock', 'xs')} S2 · E6 à E10 : discussions verrouillées tant que tu n'as pas vu ces épisodes.</div>
  </div>
</div>${tabbar('Mes séries')}`;

/* ---------- E6 : recommandations avancées (Premium) ---------- */
const E6 = `<div class="scr" style="background:radial-gradient(100% 35% at 50% 0%, #072631, transparent 70%), #000">
  ${back('Recommandations avancées', 'Premium', `<span class="pill gold" style="margin-left:8px">${ic('trophy', 'xs')} Premium</span>`)}
  <div class="pad col g6"><span class="h-l">Choisies pour toi,<br><span class="gtext">rien que pour toi</span></span><span class="small muted">D'après tes 142 séries vues, tes notes, tes personnages préférés et ce que regardent tes amis.</span></div>
  <div class="rail mt14" style="gap:8px">${chip('Sur mes plateformes', true)}${chip('Pas encore vues', true)}${chip('Moins de 3 saisons')}${chip('Anglais VOST')}</div>
  <div class="pad col g12 mt14">
    ${[['Slow Horses', 96, 'Apple TV', 'Tu as noté 5/5 tous les thrillers d\'espionnage à l\'humour noir.'], ['Devs', 93, 'Disney+', 'Le même vertige que Dark, en version Silicon Valley.'], ['The OA', 90, 'Netflix', 'Nadia et Inès l\'ont adorée, et vous avez 87 % de goûts en commun.']].map(([t, m, pf, why]) => `<div class="card row g12" style="padding:12px">${P(t, { w: 88, h: 128 })}<div class="col g6" style="flex:1;min-width:0"><div class="row g6"><span class="pill mag">${m} %</span><span class="xs muted">${pf}</span></div><span class="b">${t}</span><span class="xs" style="color:#cfd8dc">${why}</span><div class="row g6 mt6"><span class="btn p sm" style="flex:1">${ic('plus', 's')} À voir</span><span class="ib" style="width:38px;height:38px">${ic('x', 's')}</span></div></div></div>`).join('')}
  </div>
  <div class="pad mt14"><div class="card row g12" style="padding:12px 14px">${ic('spark')}<span class="xs muted" style="flex:1">Les recommandations s'affinent à chaque note et à chaque « pas pour moi ».</span></div></div>
</div>${tabbar('Découvrir')}`;

/* ---------- G7 : le test ADN séries ---------- */
const G7 = `<div class="scr" style="background:radial-gradient(100% 45% at 50% 0%, #3c0a22, transparent 70%), #000">
  <div class="topbar"><span class="ib">${ic('x')}</span><span class="h-s">Test ADN séries</span><span class="small muted">4 / 10</span></div>
  <div class="pad"><div class="steps">${[1, 1, 1, 1, 0, 0, 0, 0, 0, 0].map((on) => `<i class="${on ? 'on' : ''}"></i>`).join('')}</div></div>
  <div class="pad col g10 mt26"><span class="over">Question 4</span><span class="h-l">Ce qui te garde<br>devant une série ?</span></div>
  <div class="pad col g10 mt20">
    ${opt('🧩', 'Comprendre le mystère avant tout le monde', true)}${opt('💬', 'Des dialogues brillants')}${opt('🫂', 'M\'attacher à une bande de personnages')}${opt('🌍', 'Découvrir un univers que je ne connais pas')}
  </div>
  <div class="pad mt20 row g10"><span class="btn o" style="flex:1">${ic('left', 's')} Précédente</span><span class="btn w" style="flex:2">Suivante ${ic('right', 's')}</span></div>
  <div class="pad mt20"><div class="card row g12" style="padding:12px 14px">${ic('dna')}<span class="xs muted" style="flex:1">À la fin, ton profil de sériephile en carte à partager, et des séries faites pour ton ADN.</span></div></div>
</div>`;

/* ---------- G8 : profil d'un ami ---------- */
const G8 = `<div class="scr" style="padding-top:0">
  <div style="position:relative;height:130px;background:radial-gradient(80% 120% at 100% 0%, #1e6c86, transparent 60%), radial-gradient(80% 120% at 0% 0%, #3c0a22, transparent 60%), #0e1424">
    <div class="topbar" style="position:absolute;inset:0 0 auto"><span class="ib ghost">${ic('left')}</span><span class="ib ghost">${ic('chat')}</span></div>
  </div>
  <div class="pad" style="margin-top:-42px;position:relative;z-index:2">
    <div class="row g12" style="align-items:flex-end"><span class="av" style="width:84px;height:84px;font-size:28px;border:4px solid #000;background:linear-gradient(135deg,#1e6c86,#3c0a22)">N</span><span class="pill gold" style="margin-bottom:8px">Niveau 15</span></div>
    <span class="h-l mt10" style="display:block">Nadia</span>
    <span class="small muted">@nadia · L'âme des grands drames</span>
  </div>
  <div class="pad mt14"><div class="card row g12" style="padding:14px;border-color:transparent">${ring(87, '87%', 'var(--magenta)', 54, 'on-s1')}<div class="col g4" style="flex:1"><span class="b small">87 % de compatibilité</span><span class="xs muted">42 séries vues toutes les deux</span></div><span class="btn p sm">Series Match</span></div></div>
  ${sec('Son top 4')}
  <div class="pad" style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">${['Fleabag', 'The Wire', 'Dark', 'Succession'].map((t, i) => P(t, { w: '100%', h: 118, fs: 10, tl: `<span class="pill dark">${i + 1}</span>` })).join('')}</div>
  ${sec('Elle regarde en ce moment')}
  <div class="pad"><div class="card row g12" style="padding:12px">${P('Mindhunter', { w: 48, h: 68, notitle: true })}<div class="col g4" style="flex:1"><span class="b small">Mindhunter</span><span class="xs muted">S1 · E6 · dans ta wishlist</span></div><span class="btn o sm">Regarder ensemble</span></div></div>
  ${sec('Ses avis récents')}
  <div class="pad col g8">${[['Severance', 5, 'Je n\'ai pas respiré pendant le final.'], ['The Bear', 4, 'Trop de cris, mais quelle tension.']].map(([t, n, q]) => `<div class="card col g6" style="padding:12px"><div class="row between"><span class="b small">${t}</span>${stars(n, 12)}</div><span class="xs" style="color:#cfd8dc">« ${q} »</span></div>`).join('')}</div>
  <div class="pad mt20 row g10"><span class="btn w" style="flex:1">${ic('spark', 's')} Lui recommander</span><span class="btn o" style="flex:1">${ic('list', 's')} Ses listes</span></div>
</div>${tabbar('Profil')}`;


return { A4, A5, A6, B3, B4, CE, C2, C3, C4, D2, D3, D5, E5, E6, F3, F5, F6, F7, G2, G4, G5, G6, G7, G8, H1, H2, H3, H4 };
})();
/* =========================================================
   V4 : écrans du modèle économique
   ========================================================= */
/* Série sponsorisée dans le fil : clairement signalée, une toutes les 8 séries, retirée avec Premium */
const FEEDAD = feed('Pachinko', { i: 3, match: 88, meta: 'Drame · Historique · 2 saisons', why: 'Une saga familiale sur quatre générations, saluée par la critique.', platform: 'Sur Apple TV', peek: 'Devs', hint: 'Sans série sponsorisée avec Premium' })
  .replace('<span class="pill mag">88 % pour toi</span>', '<span class="row g6"><span class="pill dark" style="border:1px solid rgba(255,255,255,.3)">Sponsorisé</span><span class="pill mag">88 % pour toi</span></span>');

/* Fiche d'une série en pause : la fiche propose d'elle-même le résumé des saisons vues */
const FW = `<div class="scr" style="padding-top:0;padding-bottom:0">
  <div style="position:relative;${backdrop('Westworld', 320)}">
    <div class="topbar" style="position:absolute;inset:0 0 auto"><span class="ib ghost">${ic('left')}</span><div class="row g8"><span class="ib ghost">${ic('share')}</span><span class="ib ghost">${ic('heart')}</span></div></div>
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,#000)"></div>
    <div style="position:absolute;left:18px;right:18px;bottom:8px" class="col g8"><div class="row g6"><span class="pill mag">En pause depuis 11 mois</span><span class="pill teal">Terminée</span></div><span class="h-xl" style="font-size:36px">Westworld</span><span class="small muted">Science-fiction · Western · ★ 4,4</span></div>
  </div>
  <div class="pad mt14"><div class="card row g12" style="padding:14px">${ring(47, '47%', 'var(--teal)', 54, 'on-s1')}<div class="col g4" style="flex:1"><span class="b">17 épisodes sur 36</span><span class="xs muted">Arrêtée à S2 · E4 · The Riddle of the Sphinx</span></div></div></div>
  <div class="pad mt10">${hot(1, `<div style="border-radius:20px;padding:16px;background:linear-gradient(135deg,#3c0a22,#072631)" class="row g12"><span class="c-gold">${ic('rewind', 'l')}</span><div class="col g4" style="flex:1"><span class="h-s">Rattrape-moi</span><span class="xs" style="color:#cfd8dc">Tout ce que tu as vu, sans spoiler, en 2 minutes</span></div><span class="btn w sm">Lire</span></div>`, 'border-radius:20px')}</div>
  <div class="pad mt10"><div class="card row g12" style="padding:12px 14px"><span style="width:38px;height:38px;border-radius:11px;background:#7b3fe4;display:grid;place-items:center;font:900 15px var(--display)">H</span><div class="col" style="flex:1"><span class="b small">Sur HBO Max</span><span class="xs muted">Pas dans tes abonnements</span></div><span class="btn o sm">Voir</span></div></div>
  <div class="rail mt20" style="gap:22px;border-bottom:1px solid var(--line)">${['Épisodes', 'Infos', 'Avis 4,4 ★', 'Similaires'].map((t, i) => `<span class="small b" style="padding-bottom:12px;${i ? 'color:var(--muted)' : 'border-bottom:2px solid var(--magenta)'}">${t}</span>`).join('')}</div>
  <div class="pad mt14 list">${[['Saison 1', 10, 10], ['Saison 2', 10, 4], ['Saison 3', 8, 0], ['Saison 4', 8, 0]].map(([s, n, v]) => `<div class="row g12" style="padding:12px 0"><div class="col g6" style="flex:1"><div class="row between"><span class="b small">${s}</span><span class="xs b ${v === n ? 'c-green' : v ? 'c-teal' : 'dim'}">${v}/${n}</span></div>${prog((v / n) * 100)}</div>${ic('right', 's')}</div>`).join('')}</div>
  <div class="abar"><span class="btn w full">${ic('play', 's')} Reprendre S2 · E5</span></div>
</div>${tabbar('Mes séries')}`;

/* Limite de la version gratuite, au moment où l'on en a envie */
const PAYWALL = `<div class="scr" style="padding-top:0;pointer-events:none"><div style="position:relative;${backdrop('Dark', 420)}"></div></div>
<div class="veil"></div>
<div class="sheet" style="gap:12px">
  <div class="grab"></div>
  <div class="row g10"><span class="c-gold">${ic('trophy', 'l')}</span><div class="col"><span class="over c-gold">Premium</span><span class="h-m">Tu as utilisé tes 3 idées du soir</span></div></div>
  <p class="small muted">La version gratuite propose 3 recommandations par soir. Premium va plus loin :</p>
  <div class="col g8 small">${['Idées illimitées, chaque soir', 'Recommandations avancées : tes séries vues, tes amis, tes personnages préférés', 'Statistiques détaillées et bilan annuel complet', 'Aucune publicité, aucune série sponsorisée'].map((t) => `<span class="row g8"><span class="c-gold">${ic('check', 's')}</span>${t}</span>`).join('')}</div>
  <div class="row g8">
    <div class="card col g4" style="flex:1;padding:12px;border:2px solid var(--gold);background:color-mix(in srgb,var(--gold) 8%,var(--s1))"><span class="b">19,99 € / an</span><span class="xs muted">soit 1,67 € / mois</span><span class="pill gold mt6">- 44 %</span></div>
    <div class="card col g4" style="flex:1;padding:12px"><span class="b">2,99 € / mois</span><span class="xs muted">sans engagement</span></div>
  </div>
  ${hot(1, `<span class="btn full" style="background:var(--gold);color:#000">Passer à Premium</span>`, 'border-radius:999px')}
  <span class="small muted" style="text-align:center">Revenir demain · 3 nouvelles idées à minuit</span>
</div>`;

/* =========================================================
   Planche, dans l'ordre de la barre d'onglets : Accueil → Mes séries → Découvrir → Jouer → Profil
   ========================================================= */
/* =========================================================
   Écrans revus après la revue de Divin (charte Wine, moins de blanc et de contours, plus d'air)
   ========================================================= */
const dots = (n, on) => `<div class="row" style="justify-content:center;gap:6px">${Array.from({ length: n }, (_, i) => `<i style="height:6px;border-radius:6px;width:${i === on ? 20 : 6}px;background:${i === on ? 'var(--fg)' : 'rgba(255,255,255,.2)'}"></i>`).join('')}</div>`;
const steps3 = (k) => `<div class="steps">${[0, 1, 2].map((i) => `<i class="${i < k ? 'on' : ''}"></i>`).join('')}</div>`;
const check = (size = 36) => `<span class="round" style="width:${size}px;height:${size}px">${ic('check', 'xs')}</span>`;

/* A1 : carrousel avec perspective, l'affiche principale plus grande */
const A1d = `<div class="scr" style="padding:0;display:flex;flex-direction:column;background:radial-gradient(110% 55% at 50% 0%, #3c0a22 0%, transparent 65%), var(--ink)">
  <div style="position:relative;height:380px;margin-top:48px;perspective:900px">
    <div style="position:absolute;left:50%;top:46px;transform:translateX(-50%) translateX(-138px) rotateY(34deg) scale(.8);opacity:.4">${P('Severance', { w: 170, h: 246, notitle: true })}</div>
    <div style="position:absolute;left:50%;top:46px;transform:translateX(-50%) translateX(138px) rotateY(-34deg) scale(.8);opacity:.4">${P('The Bear', { w: 170, h: 246, notitle: true })}</div>
    <div style="position:absolute;left:50%;top:0;transform:translateX(-50%);z-index:2;border-radius:18px;box-shadow:0 30px 70px rgba(0,0,0,.65)">${P('Dark', { w: 228, h: 330, fs: 24 })}</div>
  </div>
  ${dots(5, 2)}
  <div class="pad col g12" style="text-align:center;align-items:center;margin-top:30px">
    <h1 class="h-xl" style="font-size:28px">Toutes tes séries,<br><span class="gtext">au même endroit</span></h1>
    <p class="muted" style="max-width:30ch;line-height:1.6">Suis tes épisodes, sache où les regarder, trouve quoi voir ce soir.</p>
  </div>
  <div class="pad col g12" style="margin-top:auto;padding-bottom:34px;padding-top:28px">
    <span class="btn p full">C'est parti</span>
    <span class="btn gh full">J'ai déjà un compte</span>
    <p class="xs dim" style="text-align:center">Sans inscription. 1 minute pour commencer.</p>
  </div>
</div>`;

/* A2 : plus d'air, des cartes plus grandes, le titre sous l'affiche, la sélection signalée par la seule coche */
const A2d = `<div class="scr" style="padding-bottom:0">
  <div class="pad col" style="padding-top:8px;gap:16px">
    ${steps3(1)}
    <div class="row between" style="align-items:flex-start"><span class="h-m" style="font-size:22px;line-height:1.3">Choisis 5 séries<br>que tu as aimées</span><span class="pill mag">3 sur 5</span></div>
    <div class="field" style="height:48px">${ic('search', 's')} Chercher une série</div>
  </div>
  ${O2CATS.slice(0, 4).map(([cat, list]) => `${sec(cat)}
  <div class="rail">${list.map((t) => {
    const on = O2SEL.includes(t);
    return `<div class="col g8" style="width:128px;flex-shrink:0">${P(t, { w: 128, h: 184, notitle: true, chk: on })}<span class="small" style="font-weight:600;line-height:1.35;color:${on ? 'var(--fg)' : 'var(--muted)'}">${t}</span></div>`;
  }).join('')}</div>`).join('')}
  <div style="position:sticky;bottom:0;margin-top:30px;padding:16px 22px 24px;background:linear-gradient(180deg,rgba(13,9,11,.4),var(--ink) 35%)" class="col g12">
    <div class="row g10" style="justify-content:center">${[0, 1, 2, 3, 4].map((i) => O2SEL[i]
      ? P(O2SEL[i], { w: 44, h: 62, notitle: true })
      : `<span style="width:44px;height:62px;border-radius:12px;background:var(--s2);display:grid;place-items:center;color:var(--dim)">${ic('plus', 's')}</span>`).join('')}</div>
    <span class="btn off full">Encore 2 séries à choisir</span>
  </div>
</div>`;

/* A3 : sélection aux couleurs de la charte, « Voir ce qui m'attend » en bas */
const A3d = `<div class="scr" style="display:flex;flex-direction:column">
  <div class="pad col" style="padding-top:8px;gap:16px">
    ${steps3(2)}
    <span class="h-m" style="font-size:22px">Tes abonnements</span>
    <p class="small muted" style="line-height:1.6">On te montrera d'abord ce que tu peux regarder tout de suite.</p>
  </div>
  <div class="pad" style="margin-top:28px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
    ${PL.map(([n, c, on]) => `<div class="col" style="position:relative;align-items:center;gap:10px;padding:20px 6px;border-radius:20px;background:var(--s1)">
      <span style="width:50px;height:50px;border-radius:16px;background:${c};display:grid;place-items:center;font:800 19px var(--display);color:${c === '#d9d9d9' || c === '#e8e8e8' ? '#000' : '#fff'}">${n[0]}</span>
      <span class="xs" style="font-weight:600">${n}</span>
      ${on ? `<span class="selchk">${ic('check', 'xs')}</span>` : ''}
    </div>`).join('')}
  </div>
  <p class="pad xs muted" style="margin-top:18px">3 abonnements choisis. Tu pourras les changer plus tard.</p>
  <div class="pad" style="margin-top:auto;padding-top:28px;padding-bottom:34px"><span class="btn p full">Voir ce qui m'attend ${ic('right', 's')}</span></div>
</div>`;

/* B1 à B3 : l'accueil découpé en onglets (Pour toi · Quoi regarder · Défi · Tendances) pour moins défiler */
const homeTop = `<div class="topbar"><span class="logo">SERIE<span>ADDICT</span></span><div class="row g8"><span class="ib" style="width:38px;height:38px">${ic('search', 's')}</span><span class="ib" style="width:38px;height:38px">${ic('bell', 's')}<span class="dot" style="top:7px;right:8px"></span></span><span class="av" style="width:38px;height:38px;font-size:14px">C</span></div></div>`;
const homeTabs = (on) => `<div class="rail" style="gap:24px;margin-top:18px;border-bottom:1px solid rgba(255,255,255,.06)">${['Pour toi', 'Quoi regarder', 'Défi', 'Tendances'].map((t) => `<span class="small" style="flex-shrink:0;padding-bottom:10px;border-bottom:2px solid ${t === on ? 'var(--fg)' : 'transparent'};font-weight:${t === on ? 700 : 500};color:${t === on ? 'var(--fg)' : 'var(--muted)'}">${t}</span>`).join('')}</div>`;
const greet = `<div class="pad"><span class="h-m" style="font-size:19px">Bonsoir Charlotte</span><p class="small muted mt6">3 épisodes t'attendent ce soir.</p></div>`;

const B1d = `<div class="scr">
  ${homeTop}${greet}${homeTabs('Pour toi')}
  <div class="pad" style="margin-top:22px">${nextUp(false)}</div>
  <div class="pad mt14"><div class="card row g12" style="padding:12px 14px">${ic('cal', 's')}<span class="xs" style="flex:1;line-height:1.5">Cette semaine : <b>Dark Matter</b> saison 2 dimanche, <b>The Last of Us</b> S2 · E4 vendredi</span>${ic('right', 's')}</div></div>
  ${sec('Continuer à regarder', 'Tout')}
  <div class="rail">${queue.map(([t, e, , pr]) => `<div class="col g8" style="width:132px;flex-shrink:0">${P(t, { w: 132, h: 188, notitle: true, ring: pr })}<span class="small" style="font-weight:700">${t}</span><span class="xs" style="color:var(--teal)">${e}</span></div>`).join('')}</div>
  ${sec('À noter')}
  <div class="pad"><div class="card row g12" style="padding:12px 14px">${P('Dark', { w: 42, h: 58, notitle: true })}<div class="col g4" style="flex:1"><span class="small" style="font-weight:700">Dark · S1 · E8</span><span class="xs muted">Vu hier</span></div>${stars(0, 18)}</div></div>
  ${sec('Du nouveau sur tes séries')}
  <div class="pad col g10">${[['Severance', 'La saison 3 est confirmée'], ['The Bear', 'Renouvelée pour une saison 5']].map(([t, h]) => `<div class="card row g12" style="padding:12px 14px">${P(t, { w: 48, h: 48, notitle: true })}<div class="col g4" style="flex:1;min-width:0"><span class="xs muted">${t}</span><span class="small" style="font-weight:600">${h}</span></div>${ic('right', 's')}</div>`).join('')}</div>
  <p class="xs" style="text-align:center;color:var(--muted);margin-top:30px">Personnaliser mon accueil</p>
</div>${tabbar('Accueil')}`;

const B2d = `<div class="scr">
  ${homeTop}${greet}${homeTabs('Quoi regarder')}
  <div class="pad col" style="margin-top:24px;gap:14px">
    <span class="h-m">Tu as envie de quoi ce soir ?</span>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">${[['🧩', 'Un mystère', true], ['😂', 'Rire'], ['💔', 'Être ému'], ['⚡', 'Du suspense']].map(([e, t, on]) => `<div class="col g8" style="position:relative;padding:18px 14px;border-radius:20px;background:var(--s1)"><span style="font-size:24px">${e}</span><span class="small" style="font-weight:600">${t}</span>${on ? `<span class="selchk">${ic('check', 'xs')}</span>` : ''}</div>`).join('')}</div>
    <div class="seg"><span>30 min</span><span class="on">45 min</span><span>1 h et +</span></div>
  </div>
  ${sec('Notre idée pour ce soir')}
  <div class="pad"><div class="card row g14" style="padding:14px;gap:14px">${P('Mindhunter', { w: 92, h: 132, notitle: true })}<div class="col g6" style="flex:1"><span class="pill mag">96 % pour toi</span><span class="h-s" style="font-size:16px">Mindhunter</span><span class="xs muted" style="line-height:1.5">Crime · 2 saisons · Netflix</span><span class="btn p sm mt6">${ic('plus', 'xs')} À voir</span></div></div></div>
  <p class="xs" style="text-align:center;color:var(--muted);margin-top:22px">Plus d'idées dans Découvrir</p>
</div>${tabbar('Accueil')}`;

/* Onglet Défi : le quiz du jour, la série en cours et les défis de la semaine (tous liés aux épisodes cochés) */
const bar = (v, max) => `<div style="height:6px;border-radius:6px;background:rgba(255,255,255,.08);overflow:hidden"><i style="display:block;height:100%;width:${Math.round((v / max) * 100)}%;background:var(--teal);border-radius:6px"></i></div>`;
const BDEF = `<div class="scr">
  ${homeTop}${greet}${homeTabs('Défi')}
  <div class="pad" style="margin-top:22px"><div class="card col" style="padding:18px;gap:14px;border-radius:22px">
    <div class="row between"><span class="xs muted">Quiz du jour</span><span class="pill gold">${ic('bolt', 'xs')} + 50 pts</span></div>
    <div class="row g14" style="gap:14px">${P('Breaking Bad', { w: 64, h: 92, notitle: true })}<div class="col g6" style="flex:1"><span class="h-s" style="font-size:17px">Breaking Bad</span><span class="xs muted" style="line-height:1.5">5 questions · 2 minutes<br>Sans spoiler au-delà de ce que tu as vu</span></div></div>
    <span class="btn p full">${ic('play', 's')} Jouer</span>
  </div></div>
  <div class="pad mt14"><div class="card row g12" style="padding:14px 16px;gap:14px"><span class="round" style="width:44px;height:44px;color:var(--teal)">${ic('flame')}</span><div class="col g4" style="flex:1"><span class="small" style="font-weight:700">13 jours d'affilée</span><span class="xs muted">Coche un épisode ou joue au quiz pour continuer</span></div></div></div>
  ${sec('Défis de la semaine', 'Tout')}
  <div class="pad col g10">${[['check', 'Coche 5 épisodes', 3, 5, '+ 100 pts'], ['star', 'Note 3 épisodes', 1, 3, '+ 40 pts'], ['spark', 'Commence une nouvelle série', 0, 1, '+ 60 pts']].map(([i, t, v, m, r]) => `<div class="card col" style="padding:14px 16px;gap:10px"><div class="row g12">${`<span style="color:var(--teal)">${ic(i, 's')}</span>`}<span class="small" style="flex:1;font-weight:600">${t}</span><span class="xs muted">${v}/${m}</span></div>${bar(v, m)}<span class="xs" style="color:var(--teal)">${r}</span></div>`).join('')}</div>
  ${sec('Entre amis', 'Classement')}
  <div class="pad col" style="gap:12px">${[['N', 'Nadia', '2 980'], ['C', 'Toi', '2 640'], ['M', 'Malik', '2 110']].map(([a, n, pts], i) => `<div class="row g12"><span class="xs muted" style="width:14px">${i + 1}</span><span class="av" style="width:36px;height:36px;font-size:13px">${a}</span><span class="small" style="flex:1;font-weight:${n === 'Toi' ? 700 : 500}">${n}</span><span class="small" style="font-weight:700">${pts}</span></div>`).join('')}</div>
</div>${tabbar('Accueil')}`;

const B3d = `<div class="scr">
  ${homeTop}${greet}${homeTabs('Tendances')}
  <div class="rail" style="gap:8px;margin-top:22px">${['Les plus suivies', 'Les plus aimées', 'Les plus discutées'].map((c, i) => chip(c, i === 0, 'sm')).join('')}</div>
  <div class="pad col" style="margin-top:20px;gap:16px">${[['Wednesday', 'Comédie · Netflix', '+12 %'], ['Severance', 'Thriller · Apple TV', '+9 %'], ['The Bear', 'Drame · Disney+', '+7 %'], ['Silo', 'Science-fiction · Apple TV', '+5 %'], ['Pachinko', 'Drame · Apple TV', '+4 %']].map(([t, m, v], i) => `<div class="row g14" style="gap:14px"><span class="h-l" style="width:26px;color:var(--teal);font-size:22px">${i + 1}</span>${P(t, { w: 52, h: 74, notitle: true })}<div class="col g4" style="flex:1"><span class="small" style="font-weight:700">${t}</span><span class="xs muted">${m}</span></div><span class="xs" style="color:var(--teal)">${v}</span></div>`).join('')}</div>
</div>${tabbar('Accueil')}`;

/* C1 : « À voir maintenant » en carrousel horizontal */
const C1d = `<div class="scr">
  <div class="topbar"><span class="h-l" style="font-size:24px">Mes séries</span><span class="ib">${ic('plus')}</span></div>
  <div class="pad"><div class="seg"><span class="on">Séries</span><span>Épisodes</span><span>Calendrier</span></div></div>
  ${sec('À voir maintenant', '4')}
  <div class="rail">${[['Severance', 'S2 · E6', '2 à voir', 50], ['The Last of Us', 'S2 · E3', '1 à voir', 43], ['Silo', 'S1 · E7', '1 à voir', 70], ['The Bear', 'S3 · E2', '1 à voir', 20]].map(([t, e, n, p]) => `<div class="col g8" style="width:150px;flex-shrink:0">${P(t, { w: 150, h: 214, notitle: true, ring: p })}<div class="row between" style="align-items:flex-start;gap:8px"><div class="col g4" style="min-width:0"><span class="small" style="font-weight:700">${t}</span><span class="xs" style="color:var(--teal)">${e} · ${n}</span></div>${check()}</div></div>`).join('')}</div>
  ${sec('En attente du prochain épisode')}
  <div class="pad col" style="gap:14px">${[['Wednesday', 'Saison 2 · partie 2', 'Dimanche'], ['Dark Matter', 'Saison 2', 'Dans 6 jours']].map(([t, e, d]) => `<div class="row g14" style="gap:14px">${P(t, { w: 44, h: 62, notitle: true })}<div class="col g4" style="flex:1"><span class="small" style="font-weight:700">${t}</span><span class="xs muted">${e}</span></div><span class="xs" style="color:var(--teal)">${d}</span></div>`).join('')}</div>
  ${sec('Pas encore commencées', '23')}
  <div class="rail">${['Mindhunter', 'Devs', 'Pachinko', 'Slow Horses'].map((t) => `<div class="col g8" style="width:104px;flex-shrink:0">${P(t, { w: 104, h: 150, notitle: true })}<span class="xs" style="font-weight:600">${t}</span></div>`).join('')}</div>
</div>${tabbar('Mes séries')}`;

/* C2 : nouvelle proposition, une file d'attente d'épisodes en vignettes larges */
const epTile = (t, code, name, min, when) => `<div class="row" style="gap:14px;padding:12px 0">
  <div style="position:relative;width:66px;height:96px;border-radius:12px;overflow:hidden;flex-shrink:0;background:${img(t)} center/cover"><span class="pill dark" style="position:absolute;left:6px;bottom:6px">${min} min</span></div>
  <div class="col g4" style="flex:1;min-width:0"><span class="xs muted">${t}</span><span class="small" style="font-weight:700;line-height:1.35">${code} · ${name}</span><span class="xs" style="color:var(--teal)">${when}</span></div>
  ${check(38)}</div>`;
const C2d = `<div class="scr">
  <div class="topbar"><span class="h-l" style="font-size:24px">Mes séries</span><span class="ib">${ic('plus')}</span></div>
  <div class="pad"><div class="seg"><span>Séries</span><span class="on">Épisodes</span><span>Calendrier</span></div></div>
  <div class="pad" style="margin-top:22px"><div class="card col g12" style="padding:20px;background:linear-gradient(135deg, #072631, var(--s1))">
    <span class="over">Ta file d'attente</span>
    <div class="row between" style="align-items:flex-end"><div class="col g4"><span class="h-l" style="font-size:30px">6 épisodes</span><span class="small muted">environ 5 h 12 de visionnage</span></div><span class="btn p sm">${ic('play', 'xs')} Lancer</span></div>
  </div></div>
  <div class="rail" style="gap:8px;margin-top:22px">${chip('Plus récents', true)}${chip('Plus courts')}${chip('Par série')}</div>
  ${sec('Sortis cette semaine')}
  <div class="pad list">${epTile('Severance', 'S2 · E5', "Trojan's Horse", 52, 'Sorti hier · Apple TV')}${epTile('Severance', 'S2 · E6', 'Attila', 50, 'Sorti aujourd\'hui · Apple TV')}${epTile('The Bear', 'S3 · E2', 'Next', 34, 'Mardi · Disney+')}</div>
  ${sec('En retard')}
  <div class="pad list">${epTile('The Last of Us', 'S2 · E3', 'The Path', 54, 'Il y a 2 semaines · HBO Max')}${epTile('Silo', 'S1 · E7', 'The Flamekeepers', 49, 'Il y a 1 mois · Apple TV')}</div>
</div>${tabbar('Mes séries')}`;

/* D8 : les listes, avec une section « listes de tes amis » expliquée */
const mosaic = (seeds, w, h) => `<div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;width:${w}px;height:${h}px;border-radius:14px;overflow:hidden;flex-shrink:0">${seeds.map((t) => `<span style="background:${img(t)} center/cover"></span>`).join('')}</div>`;
const D8d = `<div class="scr">
  ${back('Listes', 'Découvrir', `<span class="ib">${ic('plus')}</span>`)}
  ${sec('Ma liste À voir', '23 séries')}
  <div class="rail">${['Mindhunter', 'Devs', 'Pachinko', 'Slow Horses', 'Fleabag'].map((t) => `<div class="col g8" style="width:104px;flex-shrink:0">${P(t, { w: 104, h: 150, notitle: true })}<span class="xs" style="font-weight:600">${t}</span></div>`).join('')}</div>
  ${sec('Mes listes', 'Créer')}
  <div class="pad col" style="gap:12px">${[['Thrillers qui retournent le cerveau', 12, 'Publique', ['Dark', 'Severance', 'Devs', 'Mindhunter']], ['Mini-séries pour un week-end', 8, 'Privée', ['Chernobyl', 'Fleabag', 'Godless', 'The Night Of']]].map(([t, n, v, s]) => `<div class="card row" style="padding:12px;gap:14px">${mosaic(s, 76, 76)}<div class="col g4" style="flex:1;min-width:0"><span class="small" style="font-weight:700;line-height:1.35">${t}</span><span class="xs muted">${n} séries · ${v}</span></div>${ic('right', 's')}</div>`).join('')}</div>
  ${sec('Les listes de tes amis')}
  <p class="pad xs muted" style="margin-top:-6px;margin-bottom:14px;line-height:1.5">Des sélections créées par tes amis. Abonne-toi pour suivre leurs ajouts.</p>
  <div class="pad col" style="gap:12px">${[['Nadia', 'Les meilleures fins de séries', 18, 4, ['Six Feet Under', 'The Wire', 'Lost', 'Dark']], ['Kévin', 'Comédies pour se réconforter', 11, 2, ['Abbott Elementary', 'The Office', 'Friends', 'Fleabag']]].map(([w, t, n, seen, s]) => `<div class="card col" style="padding:14px;gap:12px">
    <div class="row g10"><span class="av" style="width:30px;height:30px">${w[0]}</span><span class="xs muted" style="flex:1">Liste de <b style="color:var(--fg)">${w}</b></span><span class="btn o sm" style="height:32px">Suivre</span></div>
    <span class="small" style="font-weight:700">${t}</span>
    <div class="row g8">${s.map((x) => P(x, { w: 70, h: 100, notitle: true })).join('')}</div>
    <span class="xs muted">${n} séries · tu en as vu ${seen}</span>
  </div>`).join('')}</div>
</div>${tabbar('Découvrir')}`;

/* D9 : créer une liste, plus simple : un titre, un aperçu, des séries à cocher */
const D9sel = ['Dark', 'Severance', 'Devs'];
const D9d = `<div class="scr" style="padding-bottom:0">
  ${back('Nouvelle liste', 'Listes')}
  <div class="pad col" style="gap:16px;margin-top:10px">
    <div class="row" style="gap:16px">${mosaic(['Dark', 'Severance', 'Devs', 'Mindhunter'], 96, 96)}<div class="col g6" style="flex:1"><span class="over">Titre de la liste</span><span class="h-m" style="font-size:19px;line-height:1.3">Thrillers qui retournent le cerveau</span></div></div>
    <div class="field" style="height:48px">Ajouter une description (facultatif)</div>
    <div class="card col" style="padding:4px 16px">
      <div class="row g12" style="padding:12px 0"><span class="small" style="flex:1;font-weight:600">Liste publique</span><span class="tog on"></span></div>
      <div class="row g12" style="padding:12px 0;border-top:1px solid rgba(255,255,255,.05)"><span class="small" style="flex:1;font-weight:600">Mes amis peuvent ajouter des séries</span><span class="tog"></span></div>
    </div>
  </div>
  ${sec('Ajouter des séries', `${D9sel.length} choisies`)}
  <div class="pad"><div class="field" style="height:46px">${ic('search', 's')} Chercher une série</div></div>
  <div class="pad" style="margin-top:16px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px 12px">${['Dark', 'Severance', 'Devs', 'Mindhunter', 'True Detective', 'The OA'].map((t) => `<div class="col g8">${P(t, { w: '100%', h: 150, notitle: true, chk: D9sel.includes(t) })}<span class="xs" style="font-weight:600">${t}</span></div>`).join('')}</div>
  <div style="position:sticky;bottom:0;margin-top:26px;padding:16px 22px 24px;background:linear-gradient(180deg,rgba(13,9,11,.4),var(--ink) 35%)"><span class="btn p full">Créer la liste · 3 séries</span></div>
</div>`;

const MODULES = [
  ['A', 'Premiers pas', 'Sans compte : choisir ses séries, ses plateformes, et recevoir ses premières recommandations.', [
    ['A1', 'Bienvenue', A1d, 'P1'], ['A2', 'Choisis 5 séries', A2d, 'P1'], ['A3', 'Tes abonnements', A3d, 'P1'], ['A4', 'Tes premières recommandations', V2.A4, 'P1'], ['A5', 'Créer un compte', V2.A5, 'P1'], ['A6', 'Connexion', V2.A6, 'P1']]],
  ['B', 'Accueil', 'Le rendez-vous quotidien, en onglets pour moins défiler : Pour toi (en ce moment, continuer, du nouveau), Quoi regarder, Défi, Tendances.', [
    ['B1', 'Accueil · Pour toi', B1d, 'P1'], ['B2', 'Accueil · Quoi regarder', B2d, 'P1'], ['B3', 'Accueil · Défi', BDEF, 'P1'], ['B4', 'Accueil · Tendances', B3d, 'P1'],
    ['B5', 'Épisode vu, la récompense', REWARD, 'P1'], ['B6', 'Notification', N1, 'P1'], ['B7', 'Annonce d\'une série', N2, 'P1'], ['B8', 'Notifications', V2.B3, 'P1'], ['B9', 'Personnaliser mon accueil', V2.B4, 'P1']]],
  ['C', 'Mes séries', 'Bibliothèque, épisodes, calendrier, et la fiche de chaque série.', [
    ['C1', 'Ma bibliothèque', C1d, 'P1'], ['C2', 'Épisodes à voir', C2d, 'P1'], ['C3', 'Mon calendrier', V2.C2, 'P1'], ['C4', 'Fiche série', F1(false), 'P1'],
    ['C5', 'Fiche d\'une série en pause', FW, 'P1'], ['C6', 'Saison', V2.D2, 'P1'], ['C7', 'Épisode', V2.D3, 'P1'], ['C8', 'Rattrape-moi en stories', R2S, 'P1'], ['C9', 'Prêt à reprendre', R2, 'P1']]],
  ['D', 'Découvrir', 'Trouver quoi regarder : le fil Pour toi, Ce soir, la recherche, les listes.', [
    ['D1', 'Pour toi, le fil', FEED1, 'P1'], ['D2', 'Pour toi, ajoutée à voir', FEED2, 'P1'], ['D3', 'Pour toi, série sponsorisée', FEEDAD, 'Éco'], ['D4', 'Ce soir, tu as envie de…', D1, 'P1'],
    ['D5', 'Notre choix pour toi', D2, 'P1'], ['D6', 'Limite gratuite atteinte', PAYWALL, 'Éco'], ['D7', 'Recherche', R1, 'P1'], ['D8', 'Listes', D8d, 'P1'], ['D9', 'Créer une liste', D9d, 'P1']]],
  ['E', 'Jouer', 'Le quiz du jour, jouable sans compte, et Series Match pour regarder à deux.', [
    ['E1', 'Jouer', J1, 'P1'], ['E2', 'Quiz du jour', QZ, 'P1'], ['E7', 'Series Match', J2, 'P1']]],
  ['F', 'Profil', 'Sa carte de sériephile, son ADN séries à partager, ses amis.', [
    ['F1', 'Mon profil', PR1, 'P1'], ['F2', 'Mon ADN séries', PR2, 'P1'], ['F5', 'Amis', V2.G4, 'P1'], ['F7', 'Réglages', V2.G5, 'P1']]],
  ['G', 'Premium et boutique', 'Ce qui fait vivre l\'app dès le lancement.', [
    ['G1', 'Offre Premium', V2.H1, 'Éco'], ['G2', 'Paiement confirmé', V2.H2, 'Éco'], ['G3', 'Mon abonnement', V2.H3, 'Éco'], ['G4', 'Boutique', V2.H4, 'Éco']]],
];
const PRIO = { P1: 'Lancement', 'Éco': 'Modèle économique' };
const NAMES = Object.fromEntries(MODULES.flatMap(([, , , sc]) => sc.map(([c, l]) => [c, l])));

/* Ses parcours (section 9 de son document), avec les codes de la planche */
const JOURNEYS = [
  ['Je viens d\'installer l\'application', ['A2', 'A3', 'A4', 'B1'], 'Choix de 5 séries aimées → plateformes → recommandations → accueil'],
  ['Je viens de finir un épisode', ['C1', 'C4', 'B5'], 'Mes séries → série → épisode suivant à cocher · raccourci : 1 touche depuis l\'accueil (B1)'],
  ['Je ne sais pas quoi regarder', ['D4', 'D5'], 'Découvrir et questionnaire → recommandation → ajouter à voir'],
  ['Une nouvelle saison est annoncée', ['B6', 'B7', 'C4', 'C3'], 'Notification → actualité → fiche série → calendrier'],
  ['Je veux regarder avec quelqu\'un', ['E1', 'E7'], 'Jouer → Series Match → comparer → choisir'],
  ['Je veux partager mes goûts', ['F1', 'F2'], 'Profil → Mon ADN séries → exporter une carte'],
  ['Je veux retrouver une ancienne série', ['D7', 'C5', 'C8', 'C9'], 'Recherche → fiche → résumé des saisons vues'],
];

/* Ce qui viendra après le lancement : listé, pas maquetté ici */
const LATER = [
    ['Mes séries', ['Avis et communauté d\'une série']],
  ['Découvrir', ['Collections à cocher (« 100 séries à voir »)', 'Recommandations avancées']],
  ['Jouer', ['Devine la série', 'Duel du jour', 'Quel personnage es-tu ?', 'Défis, badges et classement', 'Test ADN séries']],
  ['Profil', ['Statistiques détaillées', 'Wrapped, le bilan de l\'année', 'Profil d\'un ami']],
];


export { MODULES, JOURNEYS, NAMES };
