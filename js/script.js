/* ============================================================
   LÓGICA GLOBAL: ANIMAÇÃO DE REVEAL (Aparecer ao dar scroll)
   ============================================================ */
const reveals = document.querySelectorAll('.reveal');

if (reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    reveals.forEach(el => revealObserver.observe(el));
}

/* ============================================================
   LÓGICA DE VÍDEOS: AUTOPLAY E PAUSE AUTOMÁTICO
   ============================================================ */
const videos = document.querySelectorAll('video');

if (videos.length > 0) {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(() => {}); // O catch evita erros de autoplay bloqueado
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.2 });

    videos.forEach(vid => videoObserver.observe(vid));
}

/* ============================================================
   LÓGICA DE CONTATO: WHATSAPP (Apenas se o formulário existir)
   ============================================================ */
const form = document.getElementById('formulario');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('mensagem').value;
        const contato = '5595991618031';
        
        const texto = `Olá Italo! Meu nome é ${nome}. ${mensagem}`;
        const msgformatada = encodeURIComponent(texto);
        
        window.open(`https://api.whatsapp.com/send?phone=${contato}&text=${msgformatada}`, '_blank');
    });
}