// ==============================
// OYUN 1: Kelime-Resim Eşleştirme
// ==============================

const game1Data = [
    { word: 'CAT', emoji: '🐱', id: 1 },
    { word: 'DOG', emoji: '🐶', id: 2 },
    { word: 'APPLE', emoji: '🍎', id: 3 },
    { word: 'SUN', emoji: '☀️', id: 4 }
];

let selectedWord = null;
let selectedImage = null;
let matchedPairs = 0;

function initGame1() {
    const container = document.getElementById('matchingGame');
    container.innerHTML = '';
    
    // Kelimeleri karıştır
    const shuffledWords = [...game1Data].sort(() => Math.random() - 0.5);
    const shuffledImages = [...game1Data].sort(() => Math.random() - 0.5);
    
    // Kelime kartlarını oluştur
    const wordsDiv = document.createElement('div');
    wordsDiv.style.display = 'flex';
    wordsDiv.style.flexWrap = 'wrap';
    wordsDiv.style.gap = '20px';
    wordsDiv.style.justifyContent = 'center';
    
    shuffledWords.forEach(item => {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.textContent = item.word;
        card.dataset.id = item.id;
        card.onclick = () => selectWord(card);
        wordsDiv.appendChild(card);
    });
    
    // Resim kartlarını oluştur
    const imagesDiv = document.createElement('div');
    imagesDiv.style.display = 'flex';
    imagesDiv.style.flexWrap = 'wrap';
    imagesDiv.style.gap = '20px';
    imagesDiv.style.justifyContent = 'center';
    
    shuffledImages.forEach(item => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.textContent = item.emoji;
        card.dataset.id = item.id;
        card.onclick = () => selectImage(card);
        imagesDiv.appendChild(card);
    });
    
    container.appendChild(wordsDiv);
    container.appendChild(imagesDiv);
}

function selectWord(card) {
    if (card.classList.contains('correct')) return;
    
    // Önceki seçimi temizle
    document.querySelectorAll('.word-card').forEach(c => c.classList.remove('selected'));
    
    selectedWord = card;
    card.classList.add('selected');
    
    // Eğer resim de seçiliyse kontrol et
    if (selectedImage) {
        checkMatch();
    }
}

function selectImage(card) {
    if (card.classList.contains('correct')) return;
    
    // Önceki seçimi temizle
    document.querySelectorAll('.image-card').forEach(c => c.classList.remove('selected'));
    
    selectedImage = card;
    card.classList.add('selected');
    
    // Eğer kelime de seçiliyse kontrol et
    if (selectedWord) {
        checkMatch();
    }
}

function checkMatch() {
    const feedback = document.getElementById('feedback1');
    
    if (selectedWord.dataset.id === selectedImage.dataset.id) {
        // Doğru eşleşme
        selectedWord.classList.add('correct');
        selectedImage.classList.add('correct');
        selectedWord.classList.remove('selected');
        selectedImage.classList.remove('selected');
        
        matchedPairs++;
        
        feedback.className = 'feedback success';
        feedback.style.display = "block";
        feedback.textContent = '🎉 Harika! Doğru eşleştirdin!';
        
        if (matchedPairs === game1Data.length) {
            setTimeout(() => {
                feedback.style.display = "block"; 
                feedback.textContent = '🏆 Tebrikler! Tüm eşleşmeleri buldun!';
            }, 1000);
        }
        
    } else {
        // Yanlış eşleşme
        selectedWord.classList.add('wrong');
        selectedImage.classList.add('wrong');
        
        feedback.className = 'feedback error';
        feedback.style.display = "block"; 
        feedback.textContent = '❌ Yanlış! Tekrar dene!';
        
        setTimeout(() => {
            selectedWord.classList.remove('wrong', 'selected');
            selectedImage.classList.remove('wrong', 'selected');
            feedback.style.display = 'none';
        }, 1500);
    }
    
    selectedWord = null;
    selectedImage = null;
    
    setTimeout(() => {
        if (matchedPairs < game1Data.length) {
            feedback.style.display = 'none';
        }
    }, 2000);
}

function resetGame1() {
    selectedWord = null;
    selectedImage = null;
    matchedPairs = 0;
    document.getElementById('feedback1').style.display = 'none';
    initGame1();
}

// ==============================
// OYUN 2: Dinleme Oyunu
// ==============================

const game2Data = [
    { name: 'cat', emoji: '🐱', text: 'Cat' },
    { name: 'dog', emoji: '🐶', text: 'Dog' },
    { name: 'bird', emoji: '🐦', text: 'Bird' },
    { name: 'fish', emoji: '🐠', text: 'Fish' }
];

let currentSound = null;
let game2Completed = false;

function initGame2() {
    currentSound = game2Data[Math.floor(Math.random() * game2Data.length)];
    game2Completed = false;
    
    const container = document.getElementById('listeningOptions');
    container.innerHTML = '';
    
    // Seçenekleri karıştır
    const shuffled = [...game2Data].sort(() => Math.random() - 0.5);
    
    shuffled.forEach(item => {
        const card = document.createElement('div');
        card.className = 'listening-card';
        card.textContent = item.emoji;
        card.dataset.name = item.name;
        card.onclick = () => checkListening(card);
        container.appendChild(card);
    });
    
    document.getElementById('audioInstruction').textContent = 'Sesi dinle ve doğru objeye tıkla! 🔊';
}

function playCurrentSound() {
    if (game2Completed) return;
    
    // Web Speech API kullanarak ses çıkar
    const utterance = new SpeechSynthesisUtterance(currentSound.text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
    
    document.getElementById('audioInstruction').textContent = `Dinlediğin kelime: "${currentSound.text}"`;
}

function checkListening(card) {
    if (game2Completed) return;
    
    const feedback = document.getElementById('feedback2');
    
    if (card.dataset.name === currentSound.name) {
        card.classList.add('correct');
        game2Completed = true;
        
        feedback.className = 'feedback success';
        feedback.style.display = "block";
        feedback.textContent = '🎉 Mükemmel! Doğru objeyi buldun!';
        
        // Tüm kartları devre dışı bırak
        document.querySelectorAll('.listening-card').forEach(c => {
            if (!c.classList.contains('correct')) {
                c.style.opacity = '0.5';
                c.style.cursor = 'not-allowed';
            }
        });
        
    } else {
        card.classList.add('wrong');
        
        feedback.className = 'feedback error';
        feedback.style.display = "block";
        feedback.textContent = '❌ Yanlış! Tekrar dinle ve dene!';
        
        setTimeout(() => {
            card.classList.remove('wrong');
            feedback.style.display = 'none';
        }, 1500);
    }
}

function resetGame2() {
    document.getElementById('feedback2').style.display = 'none';
    initGame2();
}

// ==============================
// OYUN 3: Renk Eşleştirme
// ==============================

const game3Data = [
    { color: 'red', name: 'RED', options: ['RED', 'BLUE', 'GREEN'] },
    { color: 'blue', name: 'BLUE', options: ['YELLOW', 'BLUE', 'RED'] },
    { color: 'green', name: 'GREEN', options: ['GREEN', 'PURPLE', 'ORANGE'] },
    { color: 'yellow', name: 'YELLOW', options: ['PINK', 'YELLOW', 'BLACK'] }
];

let colorSelections = {};

function initGame3() {
    const container = document.getElementById('colorGame');
    container.innerHTML = '';
    colorSelections = {};
    
    const pairsDiv = document.createElement('div');
    pairsDiv.className = 'color-pairs';
    
    game3Data.forEach((item, index) => {
        const pairDiv = document.createElement('div');
        pairDiv.className = 'color-pair';
        
        // Renk kutusu
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = item.color;
        
        // Kelime seçenekleri
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'color-word-options';
        
        item.options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'color-word-btn';
            btn.textContent = option;
            btn.dataset.colorIndex = index;
            btn.dataset.word = option;
            btn.onclick = () => selectColor(index, option, btn);
            optionsDiv.appendChild(btn);
        });
        
        pairDiv.appendChild(colorBox);
        pairDiv.appendChild(optionsDiv);
        pairsDiv.appendChild(pairDiv);
    });
    
    container.appendChild(pairsDiv);
}

function selectColor(index, word, btn) {
    // Aynı renk grubundaki diğer butonların seçimini kaldır
    document.querySelectorAll(`[data-color-index="${index}"]`).forEach(b => {
        b.classList.remove('selected');
    });
    
    btn.classList.add('selected');
    colorSelections[index] = word;
}

function checkColors() {
    const feedback = document.getElementById('feedback3');
    let allCorrect = true;
    let allSelected = true;
    
    // Tüm renklerin seçilip seçilmediğini kontrol et
    if (Object.keys(colorSelections).length !== game3Data.length) {
        allSelected = false;
    }
    
    if (!allSelected) {
        feedback.className = 'feedback error';
        feedback.style.display = "block";
        feedback.textContent = '⚠️ Lütfen tüm renkler için kelime seç!';
        return;
    }
    
    // Her seçimi kontrol et
    game3Data.forEach((item, index) => {
        const buttons = document.querySelectorAll(`[data-color-index="${index}"]`);
        
        buttons.forEach(btn => {
            btn.classList.remove('correct', 'wrong');
            
            if (btn.dataset.word === colorSelections[index]) {
                if (colorSelections[index] === item.name) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                    allCorrect = false;
                }
            }
        });
    });
    
    if (allCorrect) {
        feedback.className = 'feedback success';
        feedback.style.display = "block";
        feedback.textContent = '🏆 Harika! Tüm renkleri doğru eşleştirdin!';
    } else {
        feedback.className = 'feedback error';
        feedback.style.display = "block";
        feedback.textContent = '❌ Bazı eşleşmeler yanlış. Tekrar dene!';
        
        setTimeout(() => {
            document.querySelectorAll('.color-word-btn').forEach(btn => {
                btn.classList.remove('wrong');
            });
            feedback.style.display = 'none';
        }, 2000);
    }
}

function resetGame3() {
    document.getElementById('feedback3').style.display = 'none';
    initGame3();
}

// ==============================
// OYUN 4: Cümle Kurma
// ==============================

const game4Sentences = [
    { words: ['I', 'see', 'a', 'cat'], sentence: 'I see a cat' },
    { words: ['The', 'dog', 'is', 'big'], sentence: 'The dog is big' },
    { words: ['I', 'like', 'apples'], sentence: 'I like apples' },
    { words: ['She', 'has', 'a', 'book'], sentence: 'She has a book' }
];

let currentSentence = null;
let draggedElement = null;

function initGame4() {
    currentSentence = game4Sentences[Math.floor(Math.random() * game4Sentences.length)];
    
    // Talimatı güncelle
    document.getElementById('sentenceInstruction').textContent = 
        `Cümleyi oluştur: "${currentSentence.sentence}"`;
    
    // Kelime bankasını doldur
    const wordBank = document.getElementById('wordBank');
    wordBank.innerHTML = '';
    
    // Kelimeleri karıştır
    const shuffled = [...currentSentence.words].sort(() => Math.random() - 0.5);
    
    shuffled.forEach(word => {
        const wordEl = createDraggableWord(word);
        wordBank.appendChild(wordEl);
    });
    
    // Cümle alanını temizle
    const sentenceArea = document.getElementById('sentenceArea');
    sentenceArea.innerHTML = 'Kelimeleri buraya sürükle...';
    sentenceArea.classList.remove('correct', 'wrong');
}

function createDraggableWord(word) {
    const wordEl = document.createElement('div');
    wordEl.className = 'draggable-word';
    wordEl.textContent = word;
    wordEl.draggable = true;
    
    wordEl.addEventListener('dragstart', handleDragStart);
    wordEl.addEventListener('dragend', handleDragEnd);
    
    return wordEl;
}

function handleDragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

// Cümle alanı ve kelime bankası için drag&drop olayları
document.addEventListener('DOMContentLoaded', function() {
    const sentenceArea = document.getElementById('sentenceArea');
    const wordBank = document.getElementById('wordBank');
    
    [sentenceArea, wordBank].forEach(area => {
        area.addEventListener('dragover', handleDragOver);
        area.addEventListener('drop', handleDrop);
        area.addEventListener('dragleave', handleDragLeave);
    });
});

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    if (e.currentTarget === e.target) {
        e.currentTarget.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    if (draggedElement && e.currentTarget.id !== draggedElement.parentElement.id) {
        // İlk düşüşte placeholder'ı kaldır
        const sentenceArea = document.getElementById('sentenceArea');
        if (sentenceArea.textContent.includes('Kelimeleri buraya sürükle...')) {
            sentenceArea.innerHTML = '';
        }
        
        e.currentTarget.appendChild(draggedElement);
    }
}

function checkSentence() {
    const sentenceArea = document.getElementById('sentenceArea');
    const feedback = document.getElementById('feedback4');
    const words = Array.from(sentenceArea.querySelectorAll('.draggable-word'));
    
    if (words.length === 0) {
        feedback.className = 'feedback error';
        feedback.style.display = "block";
        feedback.textContent = '⚠️ Lütfen kelimeleri cümle alanına sürükle!';
        return;
    }
    
    const userSentence = words.map(w => w.textContent).join(' ');
    
    if (userSentence === currentSentence.sentence) {
        sentenceArea.classList.add('correct');
        feedback.className = 'feedback success';
        feedback.style.display = "block";
        feedback.textContent = '🎉 Mükemmel! Cümleyi doğru kurdun!';
        
        // Kelimeleri sürüklenemez yap
        words.forEach(w => w.draggable = false);
        
    } else {
        sentenceArea.classList.add('wrong');
        feedback.className = 'feedback error';
        feedback.style.display = "block";
        feedback.textContent = '❌ Yanlış sıralama. Tekrar dene!';
        
        setTimeout(() => {
            sentenceArea.classList.remove('wrong');
            feedback.style.display = 'none';
        }, 2000);
    }
}

function resetGame4() {
    document.getElementById('feedback4').style.display = 'none';
    initGame4();
}

// ==============================
// Sayfa yüklendiğinde tüm oyunları başlat
// ==============================

window.addEventListener('load', function() {
    initGame1();
    initGame2();
    initGame3();
    initGame4();
});