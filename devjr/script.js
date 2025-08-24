// ========== CALCULAR IDADE ==========
function calcularIdade() {
    const nascimento = new Date("2003-04-03"); // sua data de nascimento
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    document.getElementById("idade").textContent = idade;
}
window.onload = calcularIdade;


// ========== ALTERNAR TEMA ==========
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("btn-tema");
    btn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Tema Claro" : "🌙 Tema Escuro";
}


// ========== MOSTRAR/OCULTAR SEÇÕES ==========
function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === "none" ? "block" : "none";
}


