// 答案列表
const answers = [
    "是的",
    "不是",
    "可能",
    "也许",
    "试试看",
    "稍后再问",
    "毫无疑问",
    "别想了",
    "当然",
    "不可能",
    "绝对",
    "不确定",
    "相信你的直觉",
    "别指望了",
    "毫无疑问",
    "是的，但要小心",
    "不是现在",
    "未来会告诉你",
    "保持耐心",
    "机会渺茫"
];

// 获取元素
const answerElement = document.getElementById('answer');
const refreshButton = document.getElementById('refreshButton');

// 随机选择一个答案
function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

// 更新答案显示
function updateAnswer() {
    answerElement.textContent = getRandomAnswer();
}

// 初始化页面时显示一个答案
updateAnswer();

// 绑定按钮点击事件
refreshButton.addEventListener('click', updateAnswer);