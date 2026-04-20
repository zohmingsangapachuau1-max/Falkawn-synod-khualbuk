// Falkawn Khualbuk Data
const falkawnData = {
    hming: "Falkawn Synod Khualbuk",
    hmun: "Falkawn Hmarveng (Near ZMC)",
    man: "₹50 - ₹200 (Zan khat)",
    status: "Available", // "Full" tiin i thlak thei ang
    phone: "8413850876", // Enkawltu phone number dik tak
    waMessage: "Chibai, Falkawn Synod Khualbuk-ah hian pindan ruak a la awm em?"
};

function renderFalkawnApp() {
    const display = document.getElementById('khualbukDisplay');
    if(!display) return;

    const statusClass = falkawnData.status === "Available" ? "available" : "full";
    const statusText = falkawnData.status === "Available" ? "● A ruak a awm" : "● A khat tawh";
    
    const waLink = `https://wa.me/${falkawnData.phone}?text=${encodeURIComponent(falkawnData.waMessage)}`;

    display.innerHTML = `
        <div class="card">
            <span class="status-badge ${statusClass}">${statusText}</span>
            <h2 style="margin: 0 0 10px 0; color: #005aab;">${falkawnData.hming}</h2>
            <p><strong>📍 Hmun:</strong> ${falkawnData.hmun}</p>
            <p><strong>💰 Man:</strong> ${falkawnData.man}</p>
            
            <div class="btn-group">
                <a href="tel:${falkawnData.phone}" class="btn" style="background-color: #007bff;">Call</a>
                <a href="${waLink}" target="_blank" class="btn" style="background-color: #25D366;">WhatsApp</a>
            </div>
        </div>
    `;
}

// Render app
renderFalkawnApp();
