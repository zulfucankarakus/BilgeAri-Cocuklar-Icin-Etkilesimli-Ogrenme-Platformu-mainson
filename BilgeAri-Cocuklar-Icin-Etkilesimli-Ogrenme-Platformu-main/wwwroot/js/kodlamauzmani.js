
            // Sayfa yüklendiğinde çalışacak kodlar
        document.addEventListener('DOMContentLoaded', () => {
            
            // ========== ARI KRALİÇE MASKOT KODELERİ ==========
            
            // Konuşma balonu elementi
            const kodoBubble = document.getElementById('kodo-bubble');
            // Varsayılan metin
            const defaultKodoText = kodoBubble.textContent;
            // Tüm aktivite kartları
            const allActivityCards = document.querySelectorAll('.activity-card');

            // Her kart için fare eventi ekle
            allActivityCards.forEach(card => {
                // Kartın özel mesajını al
                const kodoText = card.getAttribute('data-kodo-text');
                
                // Fare kartın üzerine geldiğinde
                card.addEventListener('mouseover', () => {
                    // Arının konuşma balonunu değiştir
                    kodoBubble.textContent = kodoText;
                    // Arka plan rengini değiştir (vurgu için)
                    kodoBubble.style.backgroundColor = '#fff8e1';
                });
                
                // Fare karttan ayrıldığında
                card.addEventListener('mouseleave', () => {
                    // Varsayılan metne geri dön
                    kodoBubble.textContent = defaultKodoText;
                    kodoBubble.style.backgroundColor = '#ffffff';

                    // Eğer dil galerisi kartından ayrılıyorsak, logoları sıfırla
                    if (card.id === 'language-gallery-card') {
                        document.querySelectorAll('.lang-logo').forEach(logo => {
                            logo.classList.remove('active', 'inactive');
                        });
                    }
                });
            });

            // ========== CANAVAR YARATICI KODELERİ ==========
            
            // SVG elemanlarını seç
            const monster = document.getElementById('monster');
            const monsterBody = document.getElementById('monster-body');
            const monsterEye1 = document.getElementById('monster-eye1');
            const monsterEye2 = document.getElementById('monster-eye2');
            const monsterMouth = document.getElementById('monster-mouth');
            const monsterHat = document.getElementById('monster-hat');
            
            // Kontrol butonlarını seç
            const btnColor = document.getElementById('btn-color');
            const btnEyes = document.getElementById('btn-eyes');
            const btnMouth = document.getElementById('btn-mouth');
            const btnHat = document.getElementById('btn-hat');
            const btnReset = document.getElementById('btn-reset');

            // Canavar animasyonu fonksiyonu (nabız efekti)
            function animateMonster() {
                monster.classList.add('monster-animate');
                // 300ms sonra animasyon sınıfını kaldır
                setTimeout(() => { 
                    monster.classList.remove('monster-animate'); 
                }, 300);
            }

            // Renk değiştirme butonu
            btnColor.addEventListener('click', () => {
                // Gövdeyi kırmızı yap
                monsterBody.style.fill = '#f44336';
                animateMonster();
            });

            // Göz büyütme butonu
            btnEyes.addEventListener('click', () => {
                // Her iki gözü de büyüt (r: radius/yarıçap)
                monsterEye1.setAttribute('r', '12');
                monsterEye2.setAttribute('r', '12');
                animateMonster();
            });

            // Mutlu yapma butonu
            btnMouth.addEventListener('click', () => {
                // Ağzı yukarı doğru eğri yap (gülümseme)
                // Q: quadratic bezier curve (eğri çizgi)
                monsterMouth.setAttribute('d', 'M 30 75 Q 50 90 70 75');
                animateMonster();
            });

            // Şapka/Anten ekleme butonu
            btnHat.addEventListener('click', () => {
                // Şapkayı görünür yap
                monsterHat.classList.add('visible');
                animateMonster();
            });

            // Sıfırlama butonu: Her şeyi başlangıç haline getir
            btnReset.addEventListener('click', () => {
                monsterBody.style.fill = '#8bc34a'; // Yeşil renk
                monsterEye1.setAttribute('r', '8'); // Normal göz boyutu
                monsterEye2.setAttribute('r', '8');
                monsterMouth.setAttribute('d', 'M 30 75 Q 50 60 70 75'); // Nötr ağız
                monsterHat.classList.remove('visible'); // Şapkayı gizle
            });

            // ========== HATA AVI (BUG HUNT) KODELERİ ==========
            
            // Tüm adım elemanları
            const allBugSteps = document.querySelectorAll('.bug-step');
            const step1 = document.getElementById('step1'); // Ayakkabı
            const step2 = document.getElementById('step2'); // Çorap
            const step3 = document.getElementById('step3'); // Çanta
            const bugFeedback = document.getElementById('bug-feedback');
            const btnFixBug = document.getElementById('btn-fix-bug');
            
            // Hata düzeltildi mi kontrolü
            let bugFixed = false;

            // Adım geri bildirimlerini temizle
            function clearStepFeedback() {
                allBugSteps.forEach(step => {
                    step.classList.remove('correct-step', 'wrong-step');
                });
            }

            // 3. Adım tıklandığında (Çanta - bu doğru bir adım)
            step3.addEventListener('click', () => {
                if (bugFixed) return; // Zaten düzeltildiyse işlem yapma
                
                clearStepFeedback();
                step3.classList.add('wrong-step'); // Kırmızı yap
                bugFeedback.textContent = 'Vızz! Çantanı alman gerekiyor, bu adım doğru. Hata bu değil!';
                bugFeedback.className = 'feedback-text wrong';
                btnFixBug.style.display = 'none'; // Düzelt butonunu gizle
            });

            // Hata bulma fonksiyonu (1. ve 2. adımlar için)
            function handleBugClick() {
                if (bugFixed) return; // Zaten düzeltildiyse işlem yapma
                
                clearStepFeedback();
                step1.classList.add('correct-step'); // Yeşil yap
                step2.classList.add('correct-step'); // Yeşil yap
                bugFeedback.textContent = 'Vızzz! Tebrikler! 🥳 Sıralama hatasını buldun!';
                bugFeedback.className = 'feedback-text correct';
                btnFixBug.style.display = 'inline-block'; // Düzelt butonunu göster
            }

            // 1. ve 2. adımlara aynı fonksiyonu bağla
            step1.addEventListener('click', handleBugClick);
            step2.addEventListener('click', handleBugClick);

            // Düzelt butonu tıklandığında
            btnFixBug.addEventListener('click', () => {
                if (bugFixed) return; // Zaten düzeltildiyse işlem yapma
                
                bugFixed = true; // Artık düzeltildi olarak işaretle
                
                // Adımları doğru sıraya koy (innerHTML ile içeriği değiştir)
                step1.innerHTML = '<span class="step-icon">🧦</span> <span class="step-text">1. Çoraplarını giy.</span>';
                step2.innerHTML = '<span class="step-icon">👟</span> <span class="step-text">2. Ayakkabılarını giy.</span>';
                
                bugFeedback.textContent = 'Vızzz! Harika! Algoritmayı düzelttin!';
                btnFixBug.style.display = 'none'; // Butonu tekrar gizle
                
                clearStepFeedback();
                step1.classList.add('correct-step');
                step2.classList.add('correct-step');
            });

            // ========== YAZILIM DİLLERİ GALERİSİ ==========
            
            // Her bir dil logosu
            const logoPython = document.getElementById('logo-python');
            const logoJS = document.getElementById('logo-js');
            const logoCSharp = document.getElementById('logo-csharp');
            const logoJava = document.getElementById('logo-java');
            const logoCpp = document.getElementById('logo-cpp');
            const allLangLogos = document.querySelectorAll('.lang-logo');

            // Logo tıklama fonksiyonu
            function handleLangClick(event) {
                // Tıklanan logonun bilgi metnini al
                const infoText = event.currentTarget.getAttribute('data-info');
                
                // Arının konuşma balonunu güncelle
                kodoBubble.textContent = infoText;
                kodoBubble.style.backgroundColor = '#fffbe6';

                // Tüm logoları soluklaştır
                allLangLogos.forEach(logo => {
                    logo.classList.remove('active');
                    logo.classList.add('inactive');
                });

                // Sadece tıklanan logoyu vurgula
                event.currentTarget.classList.add('active');
                event.currentTarget.classList.remove('inactive');
            }

            // Her logoya tıklama eventi ekle
            logoPython.addEventListener('click', handleLangClick);
            logoJS.addEventListener('click', handleLangClick);
            logoCSharp.addEventListener('click', handleLangClick);
            logoJava.addEventListener('click', handleLangClick);
            logoCpp.addEventListener('click', handleLangClick);

            // ========== TEMA DEĞİŞTİRME FONKSİYONLARI ==========
            
            const body = document.body;
            const lightBtn = document.getElementById('light-mode-btn');
            const darkBtn = document.getElementById('dark-mode-btn');

            // Tarayıcıda kayıtlı temayı yükle (localStorage'dan)
            // Eğer kayıtlı tema yoksa varsayılan olarak 'light' kullan
            const savedTheme = localStorage.getItem('theme') || 'light';
            body.dataset.theme = savedTheme;

            // Aydınlık mod butonu tıklandığında
            lightBtn.addEventListener('click', () => {
                body.dataset.theme = 'light'; // Temayı aydınlık yap
                localStorage.setItem('theme', 'light'); // Tercihi kaydet
            });

            // Karanlık mod butonu tıklandığında
            darkBtn.addEventListener('click', () => {
                body.dataset.theme = 'dark'; // Temayı karanlık yap
                localStorage.setItem('theme', 'dark'); // Tercihi kaydet
            });

        }); // DOMContentLoaded eventi sonu
    