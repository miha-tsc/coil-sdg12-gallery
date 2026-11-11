/* ============================================================
   COIL SDG 12 Gallery — script.js
   Interaktivne vsebine (Dijak A + Dijak B skupaj):
   1. Filtriranje fotografij v galeriji (Vsi / Dijak A / Dijak B)
   2. Interaktivni kviz o SDG 12 s točkovanjem
   ============================================================ */

"use strict";

/* ---------- 1. Gallery photo filtering ---------- */
function initGalleryFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const tiles = document.querySelectorAll("#gallery-grid .tile");
  if (!buttons.length || !tiles.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // posodobi aktivni gumb
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter; // "all" | "dijakA" | "dijakB"
      tiles.forEach((tile) => {
        const show = filter === "all" || tile.dataset.author === filter;
        tile.classList.toggle("hidden-by-filter", !show);
      });
    });
  });
}

/* ---------- 2. Interactive SDG 12 quiz ---------- */
const QUIZ_QUESTIONS = [
  {
    question: "Kateri je uradni barvni znak cilja SDG 12?",
    answers: ["Rumena", "Rjava (brown)", "Modra", "Zelena"],
    correct: 1,
    explanation: "SDG 12 – odgovorna poraba in proizvodnja – ima rjavo barvo #BF8B2E.",
  },
  {
    question: "Koliko hrane, ki jo svet pridelamo, se letno izgubi ali zavrže?",
    answers: ["Približno 1/3", "Približno 1/10", "Manj kot 1 %", "Približno 3/4"],
    correct: 0,
    explanation: "Približno ena tretjina vse pridelane hrane je izgubljene ali zavržene (cilj 12.3).",
  },
  {
    question: "Kaj pomeni hierarhija ravnanja z odpadki, začenši najpomembnejše?",
    answers: [
      "Recikliraj → Zažgi → Zavzi",
      "Ovreži → Zmanjšaj → Ponovno uporabi → Recikliraj → Kompostiraj",
      "Kupi več → Porabi hitreje → Vrzi stran",
      "Zavzi → Kompostiraj → Ponovno uporabi",
    ],
    correct: 1,
    explanation: "Refuse → Reduce → Reuse → Recycle → Rot. Najprej preprečujemo nastanek odpadkov.",
  },
  {
    question: "Kaj cilj 12.c želi racionalizirati?",
    answers: ["Subsidije za fosilna goriva", "Cene hrane", "Davke za izobraževanje", "Ceno vode"],
    correct: 0,
    explanation: "Cilj 12.c odpravlja neučinkovite subsidije za fosilna goriva, ki spodbujajo rastrosno porabo.",
  },
  {
    question: "Katero načelo krožnega gospodarstva je pravilno?",
    answers: [
      "Materiali se uporabijo enkrat in vržejo",
      "Izdelki se čim dlje obnavljajo, popravljajo in reciklirajo",
      "Toliko novega, kot je mogoče",
      "Odpadki so nujni stranski produkt napredka",
    ],
    correct: 1,
    explanation: "Krožno gospodarstvo ohranja materiale v obtoku kar se da dolgo.",
  },
];

function initQuiz() {
  const box = document.getElementById("quiz-box");
  if (!box) return;

  let current = 0;
  let score = 0;

  function renderQuestion() {
    const q = QUIZ_QUESTIONS[current];
    box.innerHTML = `
      <p class="progress">Vprašanje ${current + 1} / ${QUIZ_QUESTIONS.length} · Točke: ${score}</p>
      <p class="question">${q.question}</p>
      <div class="answers">
        ${q.answers
          .map(
            (a, i) =>
              `<button class="answer" data-i="${i}">${String.fromCharCode(65 + i)}) ${a}</button>`
          )
          .join("")}
      </div>
      <p class="feedback"></p>
      <button class="btn btn-primary quiz-next">Naslednje vprašanje →</button>
    `;

    const nextBtn = box.querySelector(".quiz-next");
    const feedback = box.querySelector(".feedback");

    box.querySelectorAll(".answer").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = Number(btn.dataset.i);
        box.querySelectorAll(".answer").forEach((b) => {
          b.disabled = true;
          if (Number(b.dataset.i) === q.correct) b.classList.add("correct");
        });
        if (chosen === q.correct) {
          score++;
          feedback.textContent = "✅ Pravilno! " + q.explanation;
          feedback.className = "feedback ok";
        } else {
          btn.classList.add("wrong");
          feedback.textContent = "❌ Ni prav. " + q.explanation;
          feedback.className = "feedback no";
        }
        nextBtn.style.display = "inline-block";
      });
    });

    nextBtn.addEventListener("click", () => {
      current++;
      if (current < QUIZ_QUESTIONS.length) renderQuestion();
      else renderResult();
    });
  }

  function renderResult() {
    const pct = Math.round((score / QUIZ_QUESTIONS.length) * 100);
    let verdict = "";
    if (pct >= 80) verdict = "Odlično! Pravi poznavalec odgovorne porabe. 🌍";
    else if (pct >= 50) verdict = "Kar dobro! Še malo učenja in boš strokovnjak. 👍";
    else verdict = "Ni slabo za začetek – preberi dejstva na tej strani in poskusi znova! 💪";

    box.innerHTML = `
      <p class="quiz-result">Tvoj rezultat: ${score} / ${QUIZ_QUESTIONS.length} (${pct} %)</p>
      <p style="margin-top:.8rem;">${verdict}</p>
      <button class="btn btn-primary" id="quiz-restart" style="margin-top:1.4rem;">↻ Začni znova</button>
    `;
    box.querySelector("#quiz-restart").addEventListener("click", () => {
      current = 0;
      score = 0;
      renderQuestion();
    });
  }

  renderQuestion();
}

/* ---------- Start everything when the page is loaded ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initGalleryFilters();
  initQuiz();
});
