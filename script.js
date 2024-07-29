let messages = [];
let currentMessageIndex = 0;

fetch('quotes.json')
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        document.getElementById('flashing-message').textContent = randomQuote;
    })
    .catch(error => console.error('Error loading quotes:', error));

document.addEventListener('DOMContentLoaded', loadMessages);

function filterVersions() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const versionCards = document.querySelectorAll('.version-card');
    
    versionCards.forEach(card => {
        const versionName = card.querySelector('h4').textContent.toLowerCase();
        card.style.display = versionName.includes(searchInput) ? 'block' : 'none';
    });
    if (searchInput.toLowerCase() === 'minecraft') {
        // 使用应用协议打开《我的世界》
        window.location.href = 'minecraft:'; // 替换为应用的协议
    } else if (inputValue.toLowerCase() === 'genshin impact') {
        window.location.href = 'genshin:';
    }
}

function filterByGame(game) {
    const versionCards = document.querySelectorAll('.version-card');

    versionCards.forEach(card => {
        const cardGame = card.getAttribute('data-game');
        card.style.display = cardGame === game ? 'block' : 'none';
    });
}

function downloadVersion(version, type) {
    const downloadLinks = {
        '1.19.2': {
            'client': 'https://example.com/minecraft-1.19.2-client.zip',
            'server': 'https://example.com/minecraft-1.19.2-server.zip',
        },
        '1.18.1': {
            'client': 'https://example.com/minecraft-1.18.1-client.zip',
            'server': 'https://example.com/minecraft-1.18.1-server.zip',
        },
        '1.14.50': {
            'client': 'https://pan.huang1111.cn/s/oXXbjh8',
        },
        '1.5.9': {
            'win': 'https://pan.huang1111.cn/s/6eemzuN',
            'android': 'https://pan.huang1111.cn/s/DVVa9f4',
        },
        '1.5.2': {
            'android': 'https://pan.huang1111.cn/s/RYYAQTB',
        },
        '1.5.1': {
            'win': 'https://pan.huang1111.cn/s/XqqE7tl',
            'android': 'https://pan.huang1111.cn/s/aEEX6hG',
        },
        '1.4.4': {
            'android': 'https://pan.huang1111.cn/s/1QQ55Iv',
        },
    };

    const link = downloadLinks[version][type];
    if (link) {
        window.location.href = link;
    } else {
        alert('下载链接不存在！');
    }
}

function toggleTheme() {
    document.body.classList.toggle('light');
}

function showSection(section) {
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const versionCards = document.querySelectorAll('.version-card');

    if (section === 'about') {
        homeSection.style.display = 'none';
        aboutSection.style.display = 'block';
    } else if (section === 'all') {
        homeSection.style.display = 'block';
        aboutSection.style.display = 'none';
        versionCards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        homeSection.style.display = 'block';
        aboutSection.style.display = 'none';
    }
}

function showDetails(version) {
    const versionDetails = {
        '1.19.2': '这是版本 1.19.2 的详细信息，包含了所有更新和修复的内容。',
        '1.18.1': '这是版本 1.18.1 的详细信息，包含了所有更新和修复的内容。',
        '1.14.50': '这是版本 1.14.50 的详细信息，包含了所有更新和修复的内容。',
        '1.5.9': '这是教育版 1.0.0 的详细信息，包含了所有更新和修复的内容。',
        'MinecraftEdu': '这是MinecraftEdu版的详细信息，包含了所有更新和修复的内容。',
        '京东教育版': '这是京东教育版的详细信息，包含了所有更新和修复的内容。',
        '版本库介绍': '这是版本库的说明',
    };

    document.getElementById('modal-title').textContent = version;
    document.getElementById('modal-content').textContent = versionDetails[version];
    document.getElementById('detail-modal').style.display = 'block';
}

function closeDetails(event) {
    const modal = document.getElementById('detail-modal');
    if (event.target === modal || event.target.classList.contains('close-button')) {
        modal.style.display = 'none';
    }
}

function filterByType(type) {
    const versionCards = document.querySelectorAll('.version-card');

    versionCards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        card.style.display = cardType === type || type === '全部' ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    filterByType('全部');
});

// 更新游戏和类型选择功能
function filterByGameAndType(game, type) {
    const versionCards = document.querySelectorAll('.version-card');

    versionCards.forEach(card => {
        const cardGame = card.getAttribute('data-game');
        const cardType = card.getAttribute('data-type');
        card.style.display = (cardGame === game || game === '全部') && (cardType === type || type === '全部') ? 'block' : 'none';
    });
}
