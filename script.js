function checkApp() {
    const input = document.getElementById("appDescription").value.toLowerCase();
    const result = document.getElementById("result");

    if (input === "") {
        result.innerHTML = "⚠ Пожалуйста, опишите приложение.";
        return;
    }

    let reasons = [];

    if (input.includes("inject") || input.includes("dll")) {
        reasons.push("🔎 Приложение может внедряться в процессы игры (DLL-инъекция).");
    }

    if (input.includes("overlay")) {
        reasons.push("🖥 Использование оверлея может быть расценено как подозрительное.");
    }

    if (input.includes("macro") || input.includes("auto")) {
        reasons.push("⌨ Макросы или автоматизация действий могут нарушать правила игры.");
    }

    if (input.includes("memory")) {
        reasons.push("📊 Работа с памятью процесса — частая причина блокировки.");
    }

    if (reasons.length === 0) {
        reasons.push("✅ Возможные причины:");
        reasons.push("• Конфликт с другим ПО.");
        reasons.push("• Подозрительная активность.");
        reasons.push("• Низкоуровневый доступ к системе.");
    }

    result.innerHTML = "<strong>Возможные причины:</strong><br><br>" + reasons.join("<br><br>");
}