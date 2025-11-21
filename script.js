function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Marquer un cadeau réservé
function reserve(id) {
    db.ref("gifts/" + id).set("taken");
}

function updateGiftState(id, state) {
    const item = document.getElementById(id);
    if (!item) return;

    const btn = item.querySelector("button");

    if (state === "taken") {
        item.classList.add("disabled-item");
        btn.textContent = "Indisponible";
        btn.disabled = true;
    } else {
        item.classList.remove("disabled-item");
        btn.textContent = "Je prends";
        btn.disabled = false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.gift-item');

    items.forEach(item => {
        const id = item.id;

        db.ref("gifts/" + id).on("value", snapshot => {
            const value = snapshot.val();
            if (value) updateGiftState(id, value);
        });
    });
});
