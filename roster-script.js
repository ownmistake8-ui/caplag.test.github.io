// Данные игроков
const players = {
    wh1testxr: {
        nick: "wh1testxr",
        role: "КАПИТАН",
        bio: "Ведущий рифлер команды. Известен своей агрессивной игрой на входах и стабильно высоким уроном. Играет за CapLag с основания организации.",
        rating: "1.45",
        impact: "1.62",
        adr: "102.4",
        age: "19",
        img: "images/Whitestar.png",
        config: "configs/wh1testxr_config.cfg",
        faceit: "https://www.faceit.com/ru/players/wh1testxr"
    },
    malce: {
        nick: "malce-",
        role: "СНАЙПЕР",
        bio: "Основной снайпер команды. Хладнокровный и точный, способен решить раунд одним выстрелом. Обладает отличным позиционированием.",
        rating: "1.22",
        impact: "1.15",
        adr: "78.5",
        age: "24",
        img: "images/malce.png",
        config: "configs/malce_config.cfg",
        faceit: "https://www.faceit.com/ru/players/maIce-"
    },
    oston: {
        nick: "oston",
        role: "РИФЛЕР",
        bio: "Игрок поддержки, отвечающий за флешки, смоуки и командную игру. Надежная опора для своих партнеров по команде.",
        rating: "1.05",
        impact: "0.98",
        adr: "72.1",
        age: "22",
        img: "images/Oston.png",
        config: "configs/oston_config.cfg",
        faceit: "https://www.faceit.com/ru/players/oston"
    },
    setqa: {
        nick: "setqa",
        role: "ЛЮРКЕР",
        bio: "Мастер неожиданных действий и флангов. Часто находит важные фраги благодаря своему позиционированию и терпению.",
        rating: "1.12",
        impact: "1.08",
        adr: "79.4",
        age: "20",
        img: "images/Setqa.png",
        config: "configs/setqa_config.cfg",
        faceit: "https://www.faceit.com/ru/players/setqa"
    },
    Sip1z: {
        nick: "Sip1z",
        role: "РИФЛЕР",
        bio: "Опора команды по стрельбе. Неожиданные мувы и тактики - основа Sip1z.",
        rating: "0.98",
        impact: "1.02",
        adr: "68.9",
        age: "29",
        img: "images/Sip1z.png",
        config: "configs/Sip1z_config.cfg",
        faceit: "https://www.faceit.com/ru/players/Sip1z"
    }
};

function showPlayer(id) {
    const data = players[id];
    
    // Переключение активного класса в списке
    document.querySelectorAll('.player-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Находим нужный элемент по нику
    const navItems = document.querySelectorAll('.player-nav-item');
    navItems.forEach(item => {
        if (item.querySelector('.p-nav-nick').textContent === data.nick) {
            item.classList.add('active');
        }
    });
    // Добавьте этот код в конец функции showPlayer()
    const mobileImgEl = document.getElementById('p-img-mobile');
        if (mobileImgEl && data.img) {
            mobileImgEl.src = data.img;
            mobileImgEl.alt = "Фото игрока " + data.nick;
        }

    // Обновление данных
    document.getElementById('p-nick').innerHTML = data.nick + `
                        <a href="${data.config}" class="config-download" download="${data.nick}_config.cfg">
                            <i class="fas fa-cog config-icon"></i>
                            <span class="config-tooltip">Скачать конфиг</span>
                        </a>
                        <a href="${data.faceit}" class="faceit-link" target="_blank">
                            <span class="faceit-text-icon">F</span>
                            <span class="faceit-tooltip">Faceit профиль</span>
                        </a>`;
    document.getElementById('p-role').textContent = data.role.toUpperCase();
    document.getElementById('p-bio').textContent = data.bio;
        const el_p_rating = document.getElementById('p-rating');
    if (el_p_rating) el_p_rating.textContent = data.rating;
    const el_p_impact = document.getElementById('p-impact');
    if (el_p_impact) el_p_impact.textContent = data.impact;
    const el_p_adr = document.getElementById('p-adr');
    if (el_p_adr) el_p_adr.textContent = data.adr;
    const el_p_age = document.getElementById('p-age');
    if (el_p_age) el_p_age.textContent = data.age;
const imgEl = document.getElementById('p-img');
    if (data.img && imgEl) {
        // Чтобы фото не оставалось невидимым из-за CSS `.player-photo-bg[data-src] { opacity: 0; }`
        imgEl.classList.remove('loaded');
        imgEl.removeAttribute('data-src');

        imgEl.onload = () => imgEl.classList.add('loaded');
        imgEl.onerror = () => {
            imgEl.classList.remove('loaded');
            console.error('Не удалось загрузить фото:', data.img);
        };

        imgEl.src = data.img;
    }
}

// Инициализация первого игрока при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    showPlayer('wh1testxr');
});

    