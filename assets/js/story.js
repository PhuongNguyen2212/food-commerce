/* =============================================================
   story.js — Câu chuyện khởi nghiệp (timeline tương tác) và
   phần doanh nghiệp (số liệu đếm động + tab Sứ mệnh/Tầm nhìn/Giá trị).
   ============================================================= */

// Dựng timeline, thẻ số liệu và các tab doanh nghiệp.
function renderStory() {
  document.getElementById('tlYears').innerHTML = TIMELINE.map((t, i) =>
    `<button class="tl-year ${i === 0 ? 'active' : ''}" onclick="selectTimeline(${i})">${t.year}</button>`).join('');
  showTimeline(0);

  document.getElementById('statsGrid').innerHTML = STATS.map(s => `
    <div class="stat-card reveal">
      <i class="ph-fill ${s.icon}"></i>
      <div class="stat-num" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');

  document.getElementById('bizTabs').innerHTML = BIZ.map((b, i) =>
    `<button class="biz-tab ${i === 0 ? 'active' : ''}" onclick="selectBiz(${i})"><i class="ph-fill ${b.icon}"></i> ${b.tab}</button>`).join('');
  showBiz(0);
}

// --- Timeline ---
function selectTimeline(i) {
  document.querySelectorAll('.tl-year').forEach((b, idx) => b.classList.toggle('active', idx === i));
  showTimeline(i);
}
function showTimeline(i) {
  const t = TIMELINE[i];
  document.getElementById('tlPanel').innerHTML = `
    <div class="tl-icon"><i class="ph-fill ${t.icon}"></i></div>
    <div><h3>${t.year} — ${t.title}</h3><p>${t.text}</p></div>`;
}

// --- Tab doanh nghiệp ---
function selectBiz(i) {
  document.querySelectorAll('.biz-tab').forEach((b, idx) => b.classList.toggle('active', idx === i));
  showBiz(i);
}
function showBiz(i) {
  const b = BIZ[i];
  const values = b.values ? `<div class="biz-values">${b.values.map(v => `<span>${v}</span>`).join('')}</div>` : '';
  document.getElementById('bizPanel').innerHTML =
    `<i class="ph-fill ${b.icon}"></i><h3>${b.title}</h3><p>${b.body}</p>${values}`;
}

// --- Đếm số động (chạy 1 lần khi cuộn tới phần số liệu) ---
let statsAnimated = false;
function animateStats() {
  if (statsAnimated) return;
  statsAnimated = true;
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target, suffix = el.dataset.suffix || '', dur = 1400, start = performance.now();
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.floor(p * target).toLocaleString('vi-VN') + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString('vi-VN') + suffix;
    })(start);
  });
}
