/***************  ❄ NEIGE  ***************/
const snowContainer = document.querySelector('.snow');

setInterval(() => {
    const flake = document.createElement('div');
    flake.className = 'flake';
    flake.textContent = '❄';

    flake.style.left = Math.random() * 100 + 'vw';
    flake.style.fontSize = (10 + Math.random() * 20) + 'px';
    flake.style.animationDuration = (5 + Math.random() * 6) + 's';

    snowContainer.appendChild(flake);
    setTimeout(() => flake.remove(), 7000);
}, 250);

/*************** 🔥 FIREBASE ***************/
import { db } from "./firebase.js";
import { ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

window.showPage = function(id){
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
};

onValue(ref(db, "reservations"), snapshot => {
    const data = snapshot.val() || {};

    document.querySelectorAll(".gift-item").forEach(item => {
        const id = item.id;
        const btn = item.querySelector("button");

        if (data[id] === true) {
            item.classList.add("disabled-item");
            btn.textContent = "Indisponible";
            btn.disabled = true;
        } else {
            item.classList.remove("disabled-item");
            btn.textContent = "Je prends";
            btn.disabled = false;
        }
    });
});

window.reserve = function(id){
    set(ref(db, "reservations/" + id), true);
};
