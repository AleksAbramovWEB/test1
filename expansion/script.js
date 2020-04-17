// Написать браузерное расширение для Хрома, которое при нажатии на его иконку, выделит цветом
// слова в тексте страницы на активной вкладке, заканчивающиеся на “ing”.

document.querySelectorAll('body *').forEach(function(node) {
   if (node.tagName === 'A' || node.tagName === 'SCRIPT') return;
    let text = node.innerHTML
    let result = text.replace(new RegExp('\\wing','g'), "<span style='color:red;'>" + 'ing' + "</span>");
    node.innerHTML = result;
});