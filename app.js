document.getElementById("headshot").src = window.RH_PHOTO;

const lines = [
  "> building systems that operations can actually run",
  "> C# · ASP.NET · SQL · n8n · Zapier · Power Automate",
  "> status: available · part-time now · full-time ready"
];
let li = 0, ci = 0, dir = 1;
const el = document.getElementById("typed");
function tick() {
  const line = lines[li];
  ci += dir;
  el.textContent = line.slice(0, ci);
  if (ci >= line.length) { dir = 0; setTimeout(() => { dir = -1; tick(); }, 1600); return; }
  if (ci <= 0 && dir < 0) { dir = 1; li = (li + 1) % lines.length; }
  setTimeout(tick, dir < 0 ? 16 : 28);
}
tick();

function phClock() {
  const t = new Date().toLocaleString("en-GB", { timeZone: "Asia/Manila", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  document.getElementById("clock").textContent = "PHT " + t;
}
phClock(); setInterval(phClock, 1000);

const spot = document.getElementById("spot");
window.addEventListener("pointermove", (e) => {
  spot.style.left = e.clientX + "px";
  spot.style.top = e.clientY + "px";
});

document.querySelectorAll(".mod").forEach((m) => {
  m.addEventListener("click", () => {
    document.querySelectorAll(".mod").forEach((x) => x.classList.remove("active"));
    m.classList.add("active");
  });
});

document.querySelectorAll(".case header").forEach((h) => {
  h.addEventListener("click", () => h.parentElement.classList.toggle("open"));
});

const cards = document.querySelectorAll(".work .case");
document.querySelectorAll(".flt").forEach((b) => {
  b.addEventListener("click", () => {
    document.querySelectorAll(".flt").forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
    const f = b.dataset.f;
    cards.forEach((c) => { c.style.display = (f === "all" || c.dataset.cat.includes(f)) ? "" : "none"; });
  });
});

document.getElementById("copyMail").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText("russel.uhernandez@gmail.com"); } catch (e) {}
  const t = document.getElementById("toast");
  t.style.display = "block";
  setTimeout(() => { t.style.display = "none"; }, 1400);
});
