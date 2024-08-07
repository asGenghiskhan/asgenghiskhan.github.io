const slogans = [
    "你知道吗？版本库至今还处于内测阶段",
    "你知道吗？MinecraftEdu版本目前只有1.8.9.b3的下载链接",
    "你知道吗？版本库存在几个彩蛋"
];

function displayRandomSlogan() {
    const sloganElement = document.getElementById('slogan');
    const randomIndex = Math.floor(Math.random() * slogans.length);
    sloganElement.textContent = slogans[randomIndex];
}

// 页面加载时显示一个随机标语
window.onload = displayRandomSlogan;

function toggleDetails(versionId) {
    const details = document.getElementById(versionId);
    details.style.display = details.style.display === "none" ? "block" : "none"; // 切换显示
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none'; // 隐藏所有部分
    });
    document.getElementById(sectionId).style.display = 'block'; // 显示所需部分
}

function toggleAllVersions() {
    const allVersions = document.getElementById('all-versions');
    allVersions.style.display = allVersions.style.display === "none" ? "block" : "none"; // 切换显示所有版本
}

function toggleAllFormalVersions() {
    const allFormalVersions = document.getElementById('formal-versions');
    allFormalVersions.style.display = allFormalVersions.style.display === "none" ? "block" : "none"; // 切换显示正式版本
}

function toggleTheme() {
    document.body.classList.toggle('light');
}

// 获取弹窗
var modal = document.getElementById("versionInfoModal");

// 获取按钮
var btn = document.getElementById("versionInfoBtn");

// 点击按钮时打开弹窗
btn.onclick = function() {
    modal.style.display = "block";
}

// 关闭弹窗的函数
function closeDetails(event) {
    modal.style.display = "none";
    event.stopPropagation(); // 阻止事件冒泡
}

// 点击弹窗外部时关闭弹窗
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
