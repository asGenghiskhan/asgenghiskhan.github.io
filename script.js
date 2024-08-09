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
    const fuzzySearchEnabled = document.getElementById('fuzzy-search').checked;
    const versionCards = document.querySelectorAll('.version-card');

    versionCards.forEach(card => {
        const versionName = card.querySelector('h4').textContent.toLowerCase();
        const isMatch = fuzzySearchEnabled
            ? fuzzyMatch(versionName, searchInput)
            : versionName.includes(searchInput);
        card.style.display = isMatch ? 'block' : 'none';
    });

    // 调用应用协议的函数
    handleAppRedirect(searchInput);
}

// 新的模糊匹配函数
function fuzzyMatch(versionName, searchInput) {
    const searchTerms = searchInput.split(' ');

    // 检查每一个搜索词
    return searchTerms.every(term => {
        // 处理常见的版本格式
        const regex = new RegExp(term.replace(/build/i, 'build').replace(/b(\d+)/, 'build \$1'), 'i');
        return regex.test(versionName);
    });
}

function handleAppRedirect(input) {
    const appRedirects = {
        'minecraft': 'minecraft:',
        'genshin impact': 'genshin:'
    };

    const appUrl = appRedirects[input];
    if (appUrl) {
        window.location.href = appUrl;
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
        '0.9847': {
            'classroom': 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBakM4d2xFaDZFZjRkY2NiQUxaUHA1b0g4Unc.jar',
        },
        '0.9843': {
            'classroom': 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBakM4d2xFaDZFZjRkcG90Z2FtR0VQcUR1RVE.jar',
        },
        '0.984': {
            'classroom': 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBakM4d2xFaDZFZjRkLURYcEFMYzN0MmM0MFk.jar',
        },
        '0.982': {
            'classroom': 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBakM4d2xFaDZFZjRlZlpraVluZ2hOZW5SVlU.jar',
            'premium': 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBakM4d2xFaDZFZjRlSDFSbWFjWm0zYU4tZFE.jar',
        },
        '1.5.2 Build 1': {
            'classroom': 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBakM4d2xFaDZFZjRla1lkZVoxcW1jV3NVTlE.jar',
            'premium': 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBakM4d2xFaDZFZjRlLUEyVTJadTFhaU9IN2s.jar',
        },
        '1.8.9 Build 3': {
            'classroom': 'https://pan.huang1111.cn/s/P66bZhm',
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
    const menuSection = document.getElementById('menu');
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const settingsSection = document.getElementById('settings');
    const versionCards = document.querySelectorAll('.version-card');

    if (section === 'about') {
        homeSection.style.display = 'none';
        settingsSection.style.display = 'none';
        aboutSection.style.display = 'block';
        menuSection.style.display = 'none';
    } else if (section === 'all') {
        homeSection.style.display = 'block';
        aboutSection.style.display = 'none';
        settingsSection.style.display = 'none';
        menuSection.style.display = 'none';
        versionCards.forEach(card => {
            card.style.display = 'block';
        });
    } else if (section === 'settings') {
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        settingsSection.style.display = 'block';
        menuSection.style.display = 'none';
    } else if (section === 'plan') {
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        settingsSection.style.display = 'none';
        menuSection.style.display = 'none';
    } else {
        homeSection.style.display = 'none';
        settingsSection.style.display = 'none';
        aboutSection.style.display = 'none';
        menuSection.style.display = 'block';
    }
}

function showDetails(version) {
    const versionDetails = {
        '1.14.50': '这是版本 1.14.50 的详细信息，包含了所有更新和修复的内容。',
        '1.5.9': '这是教育版 1.0.0 的详细信息，包含了所有更新和修复的内容。',
        'MinecraftEdu': '这是MinecraftEdu版的详细信息，包含了所有更新和修复的内容。',
        '京东教育版': '这是京东教育版的详细信息，包含了所有更新和修复的内容。',
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
