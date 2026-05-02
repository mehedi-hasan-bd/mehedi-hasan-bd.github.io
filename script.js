const btn = document.getElementById('colorBtn');
const colors = ['#f4f4f4', '#e0f7fa', '#fff9c4', '#f8bbd0'];
let index = 0;

btn.addEventListener('click', () => {
    index = (index + 1) % colors.length;
    document.body.style.backgroundColor = colors[index];
});

