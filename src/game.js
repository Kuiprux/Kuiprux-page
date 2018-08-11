window.onload = () => {
  var gameInput = document.getElementById('gameImg');
  gameInput.addEventListener('click', (e) => {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('input', () => {
      var file = input.files[0];
      if (!file) return;
      gameInput.src = URL.createObjectURL(file);
    });
    input.click();
  });
};
