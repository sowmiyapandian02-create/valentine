function nextPage(num) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById('page' + num).classList.remove('hidden');
}

function openGift(num) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById('gift' + num).classList.remove('hidden');
}

function backToGifts() {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById('page3').classList.remove('hidden');
}

function moveNo() {
  const btn = document.getElementById('noBtn');
  btn.style.position = 'absolute';
  btn.style.left = Math.random() * 80 + '%';
  btn.style.top = Math.random() * 80 + '%';
}
