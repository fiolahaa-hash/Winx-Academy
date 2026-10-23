function chooseFairy(name) {
    const result = document.getElementById("fairy-result");

    const fairies = {
        Bloom: "🔥 Bloom – Kraft: Dragon Flame",
        Stella: "☀️ Stella – Kraft: Sonne und Mond",
        Flora: "🌿 Flora – Kraft: Natur",
        Musa: "🎵 Musa – Kraft: Musik",
        Aisha: "🌊 Aisha – Kraft: Wasser",
        Tecna: "💻 Tecna – Kraft: Technologie"
    };

    result.textContent = fairies[name];
}
