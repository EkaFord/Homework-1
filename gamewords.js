function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  document.getElementById('wordsButton').addEventListener('click', () => {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  
    shuffleArray(words);
  
    alert(`Запомни слова: ${words}`)
  
    const firstWord = words[0];
    const lastWord = words[words.length - 1];
  
    const userFirstWord = prompt('Какое было первое слово?');
    const userLastWord = prompt('Какое было последнее слово?');
  
    if (userFirstWord === firstWord && userLastWord === lastWord) {
      alert('Поздравляем! Вы угадали оба слова!');
    } else if (userFirstWord === firstWord || userLastWord === lastWord) {
      alert('Вы были близки к победе!');
    } else {
      alert('Вы ответили неверно.');
    }
  });
  