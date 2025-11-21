import { db } from "./firebase.js";
import { ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

window.showPage = function(id){
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
};

// 🔥 Mise à jour en temps réel
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

// 🔥 Réserver
window.reserve = function(id){
    set(ref(db, "reservations/" + id), true);
};
