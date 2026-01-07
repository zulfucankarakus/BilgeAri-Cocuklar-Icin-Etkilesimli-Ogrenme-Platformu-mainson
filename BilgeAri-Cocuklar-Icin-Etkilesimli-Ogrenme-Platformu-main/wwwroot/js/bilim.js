// Öğrenme İçerikleri 
const learningContent = {
    uzay: [
        {
            icon: "🌞",
            title: "Güneş - Bizim Dev Yıldızımız",
            content: "Güneş, kocaman, alev alev yanan bir yıldızdır! İçine tam 1 milyon tane Dünya sığabilir. Bize hem ışık hem de sıcacık ısı verir. Güneş'ten gelen ışık, 8 dakikada bize ulaşır. Onsuz dünyada yaşam olmazdı!",
            experiment: "🔬 Deney: Güneşli bir yerde bir kap suya dokun. Su ısındı mı? İşte Güneş'in enerjisi böyle çalışır!"
        },
        {
            icon: "🌍",
            title: "Dünya - Mavi Yuvarğımız",
            content: "Dünya bizim çok özel evimizdir! Uzaydan bakınca yüzeyinin çoğu su olduğu için mavi görünür. Güneş'in etrafında 365 günde döner (bir yıl). Her gün kendi etrafında dönerek de gece ve gündüzü yapar!",
            experiment: "🔬 Deney: Bir topu döndür. İşte Dünya da böyle dönüyor! Bir tarafı ışık alırken (gündüz) diğer tarafı karanlıkta kalır (gece)!"
        },
        {
            icon: "🌙",
            title: "Ay - Gece Lambamız",
            content: "Ay, Dünya'nın tek doğal uydusudur ve gece gökyüzünde parlayan en parlak şeydir. Ama dikkat et, Ay'ın kendi ışığı yoktur, o sadece Güneş'in ışığını bize yansıtır! Ay'daki yerçekimi çok zayıf, astronotlar orada zıplayarak yürür!",
            experiment: "🔬 Deney: Karanlık bir odada el fenerini bir topa tut. Top Ay, fener Güneş! Topun sadece bir kısmının parladığını gör."
        },
        {
            icon: "🪐",
            title: "Satürn - Halkalı Dev",
            content: "Satürn, etrafındaki muhteşem, parlak halkalarıyla ünlüdür! Bu halkalar, küçük buz ve kaya parçacıklarından oluşur. Satürn inanılmaz derecede hafiftir; eğer dev bir küvet bulabilseydik, suyun üzerinde yüzerdi!",
            experiment: "🔬 Deney: Bir kağıdı ince ince kes. Bu parçaları halka gibi Satürn'ün etrafında uçurmayı dene! Tıpkı gerçek halkalar gibi!"
        },
        {
            icon: "🔴",
            title: "Mars - Kızıl Dünya",
            content: "Mars, yüzeyindeki paslı demir tozu nedeniyle kırmızı renkte görünen gezegendir. Bu yüzden ona 'Kızıl Gezegen' denir. Mars'ta, Güneş Sistemi'nin en büyük dağı olan dev bir volkan bile var!",
            experiment: "🔬 Deney: Bir miktar kırmızı toprağı veya kumu alıp incele. Mars'ın yüzeyi de bu tozlu ve kızıl renktedir."
        },
        {
            icon: "⭐",
            title: "Yıldızlar - Uzayın Fenerleri",
            content: "Yıldızlar, tıpkı Güneş gibi, parlayan dev gaz toplarıdır! Gökyüzüne baktığında gördüğün her yıldız, aslında çok uzaktaki bir güneştir. Bazıları bize çok yakın, bazıları ise hayal edemeyeceğin kadar uzakta!",
            experiment: "🔬 Deney: Gece gökyüzüne bakıp en parlak yıldızları bul. Sanki uzayda sana göz kırpıyorlar!"
        },
        {
            icon: "🌌",
            title: "Samanyolu - Bizim Galaksimiz",
            content: "Samanyolu, bizim içinde bulunduğumuz devasa yıldız grubunun adıdır (Galaksi). İçinde 200 milyardan fazla yıldız var! Bizim Güneşimiz de bu galaksinin küçük bir köşesinde yer alıyor.",
            experiment: "🔬 Deney: Siyah bir kağıt üzerine beyaz boya ile binlerce küçük nokta sıçrat. İşte Samanyolu böyle yıldızlarla dolu!"
        }
    ],
    su: [
        {
            icon: "💧",
            title: "Su - Yaşamın Gizemi",
            content: "Su, dünyadaki en sihirli şey! Vücudumuzun %70'i sudan oluşur ve susuz asla yaşayamayız. Su üç şekilde bulunur: katı (buz), sıvı (içtiğimiz su) ve gaz (buhar). Su sürekli şekil değiştirir!",
            experiment: "🔬 Deney: Bir bardak suyu dondurucuya koy ve buza dönüşmesini izle. Sonra buzu bir tabağa koy ve tekrar sıvıya dönüşmesini gör."
        },
        {
            icon: "☀️",
            title: "Buharlaşma - Su Uçuyor!",
            content: "Güneş suyu ısıttığında, su görünmez bir gaz haline gelir ve havaya karışır. Buna **buharlaşma** denir. Denizler, göller ve hatta ıslak çamaşırlar bile buharlaşır ve su yukarı doğru uçar!",
            experiment: "🔬 Deney: Islak bir süngeri güneşte bırak. Birkaç saat sonra kurumuş olacak. Su buharlaşıp gitti!"
        },
        {
            icon: "☁️",
            title: "Bulutlar - Gökyüzü Pamukları",
            content: "Yukarı çıkan su buharı, soğuk havada minik minik su damlalarına dönüşür. Milyonlarca damla birleşince **bulutlar** oluşur! Bulutlar aslında havada asılı duran su damlacıkları ve buz kristalleridir.",
            experiment: "🔬 Deney: Bir tencerede su kaynat (bir yetişkin yardımıyla). Tencereden çıkan buharı gör. Soğuyunca buhar yoğunlaşır ve küçük bulutlar oluşur!"
        },
        {
            icon: "🌧️",
            title: "Yağmur - Geri Dönüş Zamanı",
            content: "Bulutlardaki su damlacıkları birbirine çarparak büyür ve çok ağırlaşır. Artık havada kalamayınca da **yağmur** olarak yere düşerler! Çok soğuksa, kar veya dolu olarak da geri dönebilirler. Yağmur, bitkilerin susuzluğunu giderir.",
            experiment: "🔬 Deney: Bir bezi yavaşça ıslat. Çok ağırlaştığında suyun aşağı doğru damladığını gör. Tıpkı yağmur gibi!"
        },
        {
            icon: "🌊",
            title: "Nehirler ve Denizler",
            content: "Yağmur suyu yere düştükten sonra toprakta toplanır, dere ve nehirleri oluşturur. Nehirler, büyük denizlere ve okyanuslara akar. Okyanus suları tuzludur ve Dünya'nın büyük bir bölümünü kaplar.",
            experiment: "🔬 Deney: Bir kapta kumdan bir tepe yap ve üstüne su dök. Su, akarak aşağıda toplanır ve küçük bir nehir oluşturur."
        },
        {
            icon: "🔄",
            title: "Su Döngüsü - Sonsuz Yolculuk",
            content: "Su, buharlaşma, bulut olma ve yağmur yağma adımlarını sonsuza dek tekrar eder. Bu kesintisiz yolculuğa **Su Döngüsü** denir. Bu döngü sayesinde Dünya'daki su asla bitmez!",
            experiment: "🔬 Deney: Bir saksı bitkisini şeffaf bir poşetle kapat. Poşetin içinde minik su damlaları göreceksin. Bu, su döngüsünün küçük bir örneği!"
        },
        {
            icon: "🧊",
            title: "Tatlı Su Nerede Saklanır?",
            content: "Dünya'daki suyun çoğu tuzlu denizlerde. İçebileceğimiz tatlı suyun büyük bir kısmı ise dev buzulların içinde ve yerin altında saklanıyor! Buzullar eridikçe nehirler tatlı suyla dolar.",
            experiment: "🔬 Deney: Bir bardak suya çok az tuz ekle. Tadına bak ve normal suyla karşılaştır. Tatlı suyun ne kadar önemli olduğunu anla!"
        }
    ],
    hayvan: [
        {
            icon: "🦁",
            title: "Memeliler - Süt İçenler",
            content: "Memeliler, bebeklerini kendi ürettikleri sütle beslerler! Köpek, kedi, fil ve hatta biz insanlar memeliyiz. Çoğu memelinin vücudu tüylerle kaplıdır ve sıcakkanlıdırlar (vücut ısıları hep aynı kalır).",
            experiment: "🔬 Deney: En sevdiğin evcil hayvanın (veya annenin/babanın) saçlarına dokun. İşte memelilerin özelliği!"
        },
        {
            icon: "🦅",
            title: "Kuşlar - Gökyüzünün Dansçıları",
            content: "Kuşların tüyleri ve uçmalarını sağlayan hafif kemikleri vardır. Yumurtlayarak çoğalırlar ve yavrularını yuvada büyütürler. Her kuş türünün kanat çırpışı ve ötüşü farklıdır!",
            experiment: "🔬 Deney: Bir tüy bul ve onu havada süzülürken izle. Uçmalarına yardım eden hafifliği keşfet!"
        },
        {
            icon: "🐠",
            title: "Balıklar - Sualtı Krallığı",
            content: "Balıklar, solungaçları sayesinde suyun altındaki havayı (oksijeni) soluyabilirler! Vücutları kaygan pullarla kaplıdır ve kuyrukları yla yüzgeçlerini kullanarak hareket ederler. Onlar da yumurtlayarak çoğalır.",
            experiment: "🔬 Deney: Eğer bir akvaryumun varsa, balıkların solungaçlarının nasıl açılıp kapandığını dikkatlice izle!"
        },
        {
            icon: "🐸",
            title: "Amfibiler - İki Evli Canlılar",
            content: "Kurbağalar ve semenderler gibi amfibiler, yaşamlarına suda (iribaş olarak) başlarlar, büyüyünce karaya çıkabilirler. **Amfibi** kelimesi zaten 'iki yaşamlı' demektir. Derileri sürekli nemli kalmalıdır.",
            experiment: "🔬 Deney: Bir kurbağa resmi çiz. Hem karada zıplayabilen bacaklarını hem de suda yüzebilen derisini göster!"
        },
        {
            icon: "🐍",
            title: "Sürüngenler - Güneşi Sevenler",
            content: "Yılanlar, kertenkeleler ve kaplumbağalar sürüngenlerdir. Onlar **soğukkanlıdır**, yani vücut ısıları dışarıdaki havaya göre değişir. Isınmak için güneşlenmeyi çok severler. Derileri pul veya sert kabuklarla kaplıdır.",
            experiment: "🔬 Deney: Güneşli bir yerde duran bir taşa dokun. Ne kadar sıcak olduğunu gör. Sürüngenler de böyle ısınıyor!"
        },
        {
            icon: "🦋",
            title: "Böcekler - Uçan Minik Dostlar",
            content: "Böceklerin altı bacağı ve vücutlarında üç ana bölümü vardır (baş, göğüs, karın). Arılar, kelebekler ve karıncalar en çok bilinenleridir. Çiçek tozlarını taşıyarak (polenleme) bitkilere çok yardım ederler!",
            experiment: "🔬 Deney: Bir çiçeği etrafındaki arıları veya kelebekleri izle. Ayaklarına yapışan çiçek tozlarını fark et!"
        },
        {
            icon: "🕷️",
            title: "Örümcekler - Ağ Kurucular",
            content: "Örümcekler, böcek sayılmazlar! Onların tam 8 bacağı ve sadece iki ana vücut bölümü vardır. Örümcekler, kendilerini korumak ve sinek gibi zararlı böcekleri yakalamak için ipekten ağlar örerler. Akrepler de örümceklerle aynı gruptadır.",
            experiment: "🔬 Deney: Bahçede veya pencerede bir örümcek ağı bul. Ne kadar ince ama güçlü olduğunu dikkatlice incele!"
        }
    ],
    vucud: [
        {
            icon: "❤️",
            title: "Kalp - Vücudun Motoru",
            content: "Kalbin sürekli çalışan süper bir motor! Bütün vücuduna kan pompalar. Bu kan, senin büyümen ve enerjik olman için gerekli olan oksijen ve yiyecekleri her yere taşır. Kalbin, yumruğun büyüklüğündedir.",
            experiment: "🔬 Deney: Koştuktan sonra elini kalbinin üstüne koy. Ne kadar hızlı ve güçlü attığını hisset!"
        },
        {
            icon: "🧠",
            title: "Beyin - Süper Bilgisayar",
            content: "Beynin, vücudunun komuta merkezidir, tıpkı bir süper bilgisayar gibi! Ne düşüneceğini, ne hissedeceğini ve ne yapacağını o kontrol eder. Yeni bir şey öğrendiğinde, beynin hemen yeni bir yol (bağlantı) yapar!",
            experiment: "🔬 Deney: Gözlerini kapa ve bir saniye içinde odandaki 5 eşyanın adını söylemeye çalış. İşte beynin bu kadar hızlı!"
        },
        {
            icon: "🦴",
            title: "Kemikler - İskelet Kahramanları",
            content: "İskeletin (kemiklerin), seni ayakta tutan ve içerideki yumuşak organlarını koruyan güçlü bir yapıdır. Bebekken daha fazla kemikle doğarız, büyüdükçe bazıları birleşir ve 206 kemiğimiz kalır. Kemiklerin düşündüğünden çok daha serttir!",
            experiment: "🔬 Deney: Ellerini ve kollarını farklı şekillerde hareket ettir. Kemiklerinin nasıl birleştiğini (eklemlerini) hisset!"
        },
        {
            icon: "💪",
            title: "Kaslar - Güçlü İpler",
            content: "Vücudunda 600'den fazla kas vardır! Kaslar kemiklerine bağlıdır ve onları çekerek hareket etmeni sağlar. Koşmak, gülmek, zıplamak... Hepsi kasların sayesinde! Egzersiz yaptıkça kasların güçlenir.",
            experiment: "🔬 Deney: Kolunu bükün pazunu sık. Kasının nasıl sertleştiğini ve hareket ettiğini gör!"
        },
        {
            icon: "💨",
            title: "Akciğerler - Nefes Balonları",
            content: "Akciğerlerin, nefes alıp vermeni sağlayan sünger gibi organlardır. Nefes aldığında havadan **oksijeni** çeker, nefes verdiğinde ise kirli havayı (karbondioksiti) dışarı atarız. Koşarken daha çok havaya ihtiyacın olur!",
            experiment: "🔬 Deney: Derin bir nefes al ve yavaşça ver. Göğsünün şişip indiğini hisset. Akciğerlerin birer balon gibi çalışıyor!"
        },
        {
            icon: "🍴",
            title: "Mide ve Bağırsaklar - Yemek Fabrikası",
            content: "Yediğin yiyecekler önce midende karışır, sonra uzun bağırsaklarda minik parçalara ayrılır. Bu işleme **sindirim** denir. Vücudun bu minik parçaları enerji ve büyüme için kullanır. Yemeği yavaş yavaş ve çok çiğnemelisin!",
            experiment: "🔬 Deney: Bir biskÃ¼viyi ağzında sayarak 20 kez çiğne. Tadının nasıl değiştiğini ve midenin işini nasıl kolaylaştırdığını anla!"
        },
        {
            icon: "🖐️",
            title: "Duyular - Dünyayı Algılamak",
            content: "5 süper duyun var: Görme (göz), Duyma (kulak), Koklama (burun), Tatma (dil) ve Dokunma (deri)! Bütün bilgileri bu duyularınla toplar ve beynine gönderirsin. Onlar senin dünyayı keşfetme araçların!",
            experiment: "🔬 Deney: Gözlerini kapat ve bir arkadaşından bir meyvenin kokusunu almanı iste. Hangi meyve olduğunu tahmin et!"
        }
    ],
    bitki: [
        {
            icon: "🌻",
            title: "Bitkilerin Mutfağı - Fotosentez",
            content: "Bitkiler kendi yemeklerini kendileri yapar! Buna **fotosentez** denir. Güneş ışığı, su ve havadan aldıkları karbondioksiti kullanırlar. Bu sihirli süreçte bizim için çok önemli olan **oksijeni** de üretirler!",
            experiment: "🔬 Deney: Bir saksı bitkisini bol güneşli bir yere koy. Ona sevgi ve su ver, nasıl büyüdüğünü gör!"
        },
        {
            icon: "💧",
            title: "Kökler - Toprak Çapası",
            content: "Bitkinin kökleri, onu toprağa sıkıca bağlar ve aynı zamanda yer altından su ve besinleri emer. Kökler, bitkinin beslenme ve ayakta kalma konusunda en önemli yardımcısıdır!",
            experiment: "🔬 Deney: Bir cam kavanozda ıslak pamuk içinde fasulye filizlendir. Köklerin suya doğru nasıl uzadığını izle!"
        },
        {
            icon: "🌳",
            title: "Gövde - Süper Taşıyıcı",
            content: "Gövde, bitkinin iskeletidir ve onu dimdik ayakta tutar. En önemli görevi ise köklerden emilen suyu ve besinleri yapraklara taşımaktır. Ağaçların gövdeleri (gövde kalınlaştıkça gövdeye odunlaşmış gövde adı verilir) çok kalın ve güçlüdür!",
            experiment: "🔬 Deney: Beyaz bir çiçeğin sapını renkli (mavi veya kırmızı) suya koy. Birkaç saat sonra çiçeğin yapraklarında rengin belirdiğini gör. Gövde, suyu yapraklara taşıdı!"
        },
        {
            icon: "🍃",
            title: "Yapraklar - Enerji Panelleri",
            content: "Yapraklar, bitkinin güneş ışığını yakaladığı ve yemeğini yaptığı 'mutfak' kısmıdır! Yeşil olmalarının sebebi, klorofil adı verilen maddedir. Klorofil güneş enerjisini hapseder.",
            experiment: "🔬 Deney: Bir yaprağı al ve bir kağıda sürt. Kağıtta kalan yeşil leke, klorofildir!"
        },
        {
            icon: "🎃",
            title: "Meyve ve Tohumlar",
            content: "Meyveler, bitkinin tohumlarını korumak ve yaymak için büyüttüğü lezzetli paketlerdir. Tohum ise, içinde uyuyan minik bir bebek bitkiyi barındırır. Meyveyi yiyen hayvanlar, tohumları başka yerlere taşır!",
            experiment: "🔬 Deney: Bir elma veya portakalı ikiye böl. İçindeki tohumları çıkar ve say. Her tohum, yeni bir ağaç olabilir!"
        },
        {
            icon: "🌺",
            title: "Çiçekler - Böcek Mıknatısı",
            content: "Çiçekler, bitkilerin üreme organlarıdır. Güzel renkleri ve tatlı kokularıyla arıları ve kelebekleri kendilerine çekerler. Bu böcekler, çiçek tozunu (polen) taşıyarak yeni tohumların oluşmasına yardım eder.",
            experiment: "🔬 Deney: Bir çiçeği dikkatlice incele. Farklı renkli kısımları ve ortasındaki küçük tozları gör!"
        },
        {
            icon: "🌱",
            title: "Çimlenme - Uyanış",
            content: "Tohumun içinden küçük bir filizin çıkmasına **çimlenme** denir! Tohumun uyanması için en çok suya ve doğru sıcaklığa ihtiyacı vardır. Filizler büyüdükçe önce köklerini, sonra minik yapraklarını çıkarır.",
            experiment: "🔬 Deney: Bir pamuğun içine ıslak fasulye koy. Karanlık bir yerde bekle. Filizin nasıl çıktığını gör!"
        }
    ],
    isik: [
        {
            icon: "💡",
            title: "Işık - Evrenin En Hızlısı",
            content: "Işık, dünyadaki her şeyden daha hızlıdır! Saniyede yaklaşık 300.000 kilometre yol alır. Işık o kadar hızlıdır ki, Güneş'ten bize 8 dakikada gelir! Işık, dümdüz çizgiler halinde (ışınlar) ilerler.",
            experiment: "🔬 Deney: El fenerini aç ve kapat. Işık anında belirir! İşte hızı bu!"
        },
        {
            icon: "🌈",
            title: "Gökkuşağı - Işığın Renkleri",
            content: "Gördüğümüz beyaz ışık, aslında birçok farklı renkten oluşur! Yağmur damlaları veya cam bir prizma, beyaz ışığı bu renklere ayırır (Kırmızı, Turuncu, Sarı, Yeşil, Mavi, Lacivert, Mor).",
            experiment: "🔬 Deney: Bir bardak suya ayna koy ve güneşli bir pencerenin önüne tut. Duvarda küçük bir gökkuşağı görmeye çalış!"
        },
        {
            icon: "🌑",
            title: "Gölgeler - Işık Kesiciler",
            content: "Işık düz bir yolda giderken, önüne bir engel çıkarsa (örneğin sen), ışık geçemez ve arkada karanlık bir alan oluşur. Buna **gölge** denir. Gölgenin şekli, nesnenin şekline benzer.",
            experiment: "🔬 Deney: Güneşli bir günde dışarı çık ve kendi gölgenle oyna! Gölgenin Güneş hareket ettikçe nasıl değiştiğini gör."
        },
        {
            icon: "🔊",
            title: "Ses - Titreşimlerle Dans",
            content: "Ses, bir şeyin titreşmesiyle oluşur! Titreşen nesne, havadaki parçacıkları da titreştirir. Bu titreşimler kulağımıza ulaştığında, beynimiz bunu ses olarak anlar. Kalın sesler yavaş, ince sesler daha hızlı titreşir.",
            experiment: "🔬 Deney: Bir lastiği ger ve parmağınla çekıp bırak. Hem titreşimi gör hem de sesi duy!"
        },
        {
            icon: "👂",
            title: "Sesin Yüksekliği ve Şiddeti",
            content: "**Ses yüksekliği** (ince veya kalın olması) titreşimin hızına bağlıdır. **Ses şiddeti** (gürültülü veya kısık olması) ise titreşimin gücüne bağlıdır. Fısıltı düşük şiddetli, bir davul gümlemesi yüksek şiddetlidir.",
            experiment: "🔬 Deney: Bir tencereye hafifçe vur. Sonra güçlüce vur. Ses şiddetindeki farkı dinle!"
        },
        {
            icon: "📢",
            title: "Yankı - Sesin Geri Dönüşü",
            content: "Ses dalgaları sert bir yüzeye (duvar veya dağ) çarpıp geri döndüğünde buna **yankı** denir. Ses, havadan daha çok katı maddelerin içinde daha hızlı yayılır.",
            experiment: "🔬 Deney: Boş bir odada bağır. Sesin sana geri geldiğini duy!"
        },
        {
            icon: "🔎",
            title: "Büyüteçler - Işık Oyunları",
            content: "Mercekler (büyüteç camları gibi) ışığı bükerek (kırarak) nesnelerin bize daha büyük veya daha küçük görünmesini sağlar. Gözümüzün içindeki mercek de aynı görevi yapar ve görüntüyü görmemizi sağlar.",
            experiment: "🔬 Deney: Bir bardağa su doldur ve arkasına bir kalem koy. Kalemin suyun içinde bükülmüş gibi göründüğünü fark et. Bu, ışığın kırılmasıdır!"
        }
    ]
};

let currentTopic = ''; // Şu anki konunun adı
let currentCardIndex = 0; // Şu anki kartın indeksi
const totalCardsPerTopic = 7; // Her konudaki toplam kart sayısı
let speechTimeout; // Konuşma balonu zaman aşımı için

// İlerleme için localStorage kullanımı
const progressKey = 'bilgeAriProgress';

// LocalStorage'dan ilerleme verilerini yükler
function loadProgress() {
    const storedProgress = localStorage.getItem(progressKey);
    return storedProgress ? JSON.parse(storedProgress) : {
        uzay: 0,
        su: 0,
        hayvan: 0,
        vucud: 0,
        bitki: 0,
        isik: 0
    };
}

// LocalStorage'a ilerleme verilerini kaydeder ve görseli günceller
function saveProgress(topic, count) {
    const progress = loadProgress();
    // Yalnızca daha yüksek bir kart sayısını kaydet
    progress[topic] = Math.max(progress[topic] || 0, count);
    localStorage.setItem(progressKey, JSON.stringify(progress));
    updateTopicCardsVisual(); // Görsel olarak tamamlanma durumunu güncelle
}

// Belirli bir konudaki ilerlemeyi döndürür
function getTopicProgress(topic) {
    const progress = loadProgress();
    return progress[topic] || 0;
}

// Konu kartlarının tamamlanma durumunu (completed sınıfı) günceller
function updateTopicCardsVisual() {
    const progress = loadProgress();
    document.querySelectorAll('.topic-card').forEach(card => {
        const topic = card.dataset.topic;
        const count = progress[topic] || 0;
        if (count >= totalCardsPerTopic) {
            card.classList.add('completed');
        } else {
            card.classList.remove('completed');
        }
    });
}

// Sayfa yüklendiğinde ilerleme görselini başlatır
document.addEventListener('DOMContentLoaded', () => {
    updateTopicCardsVisual();
});

// KONU VE KART İŞLEMLERİ

// Kart görüntüleyiciyi açar ve başlangıç kartını ayarlar
function openCardViewer(topic) {
    currentTopic = topic;
    // Kaydedilen ilerleme varsa bir önceki karttan başlar, yoksa 0'dan
    currentCardIndex = getTopicProgress(topic) > 0 ? getTopicProgress(topic) - 1 : 0;

    document.getElementById('cardViewerSection').classList.add('active');
    // Diğer bölümleri gizle
    document.getElementById('topics-section').style.display = 'none';
    document.getElementById('miniGamesSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'none';

    updateCard();
}

// Kart görüntüleyiciyi açar ve oraya kaydırır 
function openCardViewerAndScroll(topic) {
    openCardViewer(topic);
    const viewer = document.getElementById('cardViewerSection');
    viewer.scrollIntoView({ behavior: 'smooth' });
}

// Kart görüntüleyiciyi kapatır ve ana konulara geri döner
function closeCardViewer() {
    document.getElementById('cardViewerSection').classList.remove('active');
    // Gizlenen bölümleri göster
    document.getElementById('topics-section').style.display = 'block';
    document.getElementById('miniGamesSection').style.display = 'block';
    document.getElementById('quizSection').style.display = 'block';
    updateTopicCardsVisual();
    // Konular bölümüne geri kaydır
    document.getElementById('topics-section').scrollIntoView({ behavior: 'smooth' });
}

// Sonraki karta geçer
function nextCard() {
    if (currentCardIndex < totalCardsPerTopic - 1) {
        currentCardIndex++;
        updateCard();
        saveProgress(currentTopic, currentCardIndex + 1);

        if (currentCardIndex === totalCardsPerTopic - 1) {
            showSpeechBubble("Vay canına! Son karttasın! 💪", 3000);
        }

    } else if (currentCardIndex === totalCardsPerTopic - 1) {
        // Son kart tamamlandı
        saveProgress(currentTopic, totalCardsPerTopic);
        showSpeechBubble("Bu konuyu harika bir şekilde tamamladın! 🎉 Tebrikler! Şimdi yeni bir konuya geçebilirsin.", 6000);
        closeCardViewer();
    }
}

// Önceki karta geçer
function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}

// Kart içeriğini günceller
function updateCard() {
    const cardData = learningContent[currentTopic][currentCardIndex];
    const cardElement = document.getElementById('learningCard');

    // Kart içeriğini dinamik olarak oluştur
    cardElement.innerHTML = `
        <div class="learning-card-icon">${cardData.icon}</div>
        <h3 class="learning-card-title">${cardData.title}</h3>
        <p class="learning-card-content">${cardData.content}</p>
        <div class="experiment-suggestion">
            <div class="experiment-title">💡 Bilge Arı'dan Deney Önerisi!</div>
            <p class="experiment-content">${cardData.experiment}</p>
        </div>
    `;

    // Sayaç ve navigasyon butonlarını güncelle
    document.getElementById('cardCounter').textContent = `${currentCardIndex + 1} / ${totalCardsPerTopic}`;
    document.getElementById('prevBtn').disabled = currentCardIndex === 0;

    const nextBtn = document.getElementById('nextBtn');
    if (currentCardIndex === totalCardsPerTopic - 1) {
        nextBtn.textContent = 'Konuyu Bitir ✅';
        nextBtn.disabled = false;
    } else {
        nextBtn.textContent = 'Sonraki →';
        nextBtn.disabled = currentCardIndex >= totalCardsPerTopic;
    }

    // Kart içeriğinin en üstüne kaydır
    document.getElementById('cardViewerContainer').scrollTop = 0;
}
// BİLGE ARI REHBER FONKSİYONLARI

// Konuşma balonunu açıp/kapatır
function toggleSpeech() {
    const bubble = document.getElementById('speechBubble');
    bubble.classList.toggle('active');

    if (bubble.classList.contains('active')) {
        // Açıkken 5 saniye sonra otomatik kapatma zaman aşımını ayarla
        speechTimeout = setTimeout(() => {
            bubble.classList.remove('active');
        }, 5000);
    } else {
        // Kapattıysa zaman aşımını temizle
        clearTimeout(speechTimeout);
    }
}

// Belirli bir metin ve süre ile konuşma balonunu gösterir
function showSpeechBubble(text, duration = 4000) {
    const bubble = document.getElementById('speechBubble');
    const textElement = document.getElementById('speechText');

    clearTimeout(speechTimeout); // Önceki zaman aşımını temizle

    textElement.textContent = text;
    bubble.classList.add('active');

    // Otomatik kapatma
    speechTimeout = setTimeout(() => {
        bubble.classList.remove('active');
    }, duration);
}

// MİNİ OYUN: EŞLEŞTİRME
const matchingEmojis = ["🚀", "💧", "🦁", "💪", "🌱", "💡", "🌞", "🌍"];
let gameDeck = []; // Oyun kartlarını tutar
let flippedTiles = []; // Açılan kartları tutar
let matchedPairs = 0; // Eşleşen çift sayısını tutar
let moveCount = 0; // Hamle sayısını tutar
let gameLocked = false; // Hamle sırasında tıklamaları engeller
const gameGrid = document.getElementById('gameGrid');
const moveCountElement = document.getElementById('moveCount');
const matchingGameElement = document.getElementById('matchingGame');
const totalMatchingPairs = matchingEmojis.length;

// Fisher-Yates karıştırma algoritması
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Oyunun başlangıç ayarları
function initMatchingGame() {
    gameDeck = shuffle([...matchingEmojis, ...matchingEmojis]); // Emojileri çiftleyip karıştır
    flippedTiles = [];
    matchedPairs = 0;
    moveCount = 0;
    gameLocked = false;
    moveCountElement.textContent = moveCount;
    gameGrid.innerHTML = '';
    gameGrid.className = 'game-grid';
}

// Oyun fayanslarını (tile) DOM'a render eder
function renderGame() {
    gameDeck.forEach((emoji, index) => {
        const tile = document.createElement('div');
        tile.className = 'game-tile';
        tile.dataset.emoji = emoji;
        tile.dataset.index = index;
        tile.innerHTML = `<span class="game-tile-front">❓</span><span class="game-tile-back">${emoji}</span>`;
        tile.addEventListener('click', () => handleTileClick(tile, emoji));
        gameGrid.appendChild(tile);
    });
}

// Fayansa tıklama işleyicisi
function handleTileClick(tile, emoji) {
    // Oyun kilitliyse, zaten açıksa veya eşleşmişse tıklamayı yoksay
    if (gameLocked || tile.classList.contains('flipped') || tile.classList.contains('matched') || flippedTiles.length >= 2) {
        return;
    }

    tile.classList.add('flipped');
    flippedTiles.push({ tile, emoji });

    if (flippedTiles.length === 2) {
        gameLocked = true;
        moveCount++;
        moveCountElement.textContent = moveCount;
        checkForMatch();
    }
}

// Açılan iki kartın eşleşip eşleşmediğini kontrol eder
function checkForMatch() {
    const [first, second] = flippedTiles;

    if (first.emoji === second.emoji) {
        setTimeout(() => {
            // Eşleşti: matched sınıfı ekle
            first.tile.classList.add('matched');
            second.tile.classList.add('matched');
            matchedPairs++;
            flippedTiles = [];
            gameLocked = false;

            if (matchedPairs === totalMatchingPairs) {
                setTimeout(showGameResult, 500); // Oyun bitti
            }
        }, 500);
    } else {
        setTimeout(() => {
            // Eşleşmedi: kartları geri kapat
            first.tile.classList.remove('flipped');
            second.tile.classList.remove('flipped');
            flippedTiles = [];
            gameLocked = false;
        }, 1000);
    }
}

// Oyun sonucunu gösterir
function showGameResult() {
    showSpeechBubble(`Süpersin! 🎉 Oyunu sadece ${moveCount} hamlede bitirdin! İşte gerçek bir hafıza şampiyonu!`, 6000);
    resetGame(); // Oyunu yeniden başlat
}

// Eşleştirme oyununu başlatır
function startMatchingGame() {
    initMatchingGame();
    renderGame();
    matchingGameElement.classList.add('active');
    showSpeechBubble("Hadi hafızanı test edelim! Aynı resimleri bul ve eşleştir! 🧠", 4000);
}

// Eşleştirme oyununu başlatır ve oyun alanına kaydırır
function startMatchingGameAndScroll() {
    startMatchingGame();
    setTimeout(() => {
        matchingGameElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

// Oyunu yeniden başlatır
function resetGame() {
    initMatchingGame();
    renderGame();
}

// Oyunu kapatır
function closeGame() {
    matchingGameElement.classList.remove('active');
}

// QUIZ İÇERİKLERİ VE İŞLEMLERİ
const quizQuestions = [
    {
        question: "Güneş Sistemi'ndeki en büyük volkanın bulunduğu, kırmızı renkteki gezegenin adı nedir?",
        options: ["Jüpiter", "Mars", "Satürn", "Venüs"],
        answer: "Mars",
        explanation: "Mars'a 'Kızıl Gezegen' denir ve üzerindeki Olympus Mons, Güneş Sistemi'nin en büyük yanardağıdır."
    },
    {
        question: "Dünya'nın kendi etrafında dönmesiyle ne oluşur?",
        options: ["Mevsimler", "Gelgitler", "Gece ve Gündüz", "Gökkuşağı"],
        answer: "Gece ve Gündüz",
        explanation: "Dünya kendi etrafında döndükçe, Güneş'e bakan tarafı gündüz, arkası ise gece olur."
    },
    {
        question: "Suyu ısıttığımızda sıvı halden görünmez bir gaza (buhar) dönüşmesine ne ad verilir?",
        options: ["Yoğunlaşma", "Donma", "Buharlaşma", "Erime"],
        answer: "Buharlaşma",
        explanation: "Buharlaşma, suyun buhar olup gökyüzüne doğru uçmasıdır."
    },
    {
        question: "Kedi, köpek ve insan gibi yavrularını sütle besleyen hayvan grubu hangisidir?",
        options: ["Kuşlar", "Balıklar", "Memeliler", "Sürüngenler"],
        answer: "Memeliler",
        explanation: "Tüm memeliler, bebeklerini büyütmek için süt kullanır."
    },
    {
        question: "Bitkilerin Güneş, su ve hava kullanarak kendi yemeğini yapma sürecine ne ad verilir?",
        options: ["Solunum", "Sindirim", "Buharlaşma", "Fotosentez"],
        answer: "Fotosentez",
        explanation: "Fotosentez, bitkilerin oksijen üreterek yiyecek hazırladığı sihirli işlemdir."
    },
    {
        question: "Vücudumuzdaki kanı her yere pompalayan ve yumruğumuz büyüklüğündeki organımız nedir?",
        options: ["Akciğer", "Karaciğer", "Kalp", "Mide"],
        answer: "Kalp",
        explanation: "Kalp, vücudumuzun durmadan çalışan güçlü motorudur."
    },
    {
        question: "Etrafındaki dev halkalarıyla ünlü olan ve suda yüzebilecek kadar hafif olan gezegen hangisidir?",
        options: ["Jüpiter", "Uranüs", "Satürn", "Neptün"],
        answer: "Satürn",
        explanation: "Satürn'ün halkaları buz ve kayadan oluşur ve gezegenin yoğunluğu sudan düşüktür."
    },
    {
        question: "Sesin oluşması için ne gereklidir?",
        options: ["Işık", "Yerçekimi", "Titreşim", "Manyetizma"],
        answer: "Titreşim",
        explanation: "Her ses, bir şeyin çok hızlı titremesiyle başlar."
    },
    {
        question: "Kurbağa gibi, hayatının bir kısmını suda bir kısmını karada geçiren canlılara ne ad verilir?",
        options: ["Balık", "Kuş", "Sürüngen", "Amfibi"],
        answer: "Amfibi",
        explanation: "Amfibi, 'iki yaşamlı' demektir. Kurbağalar ve semenderler bu gruba girer."
    },
    {
        question: "Işık, yağmur damlası gibi bir yerden geçerken renklere ayrılırsa ne oluşur?",
        options: ["Yansıma", "Kırılma (Gökkuşağı)", "Gölge", "Absorpsiyon"],
        answer: "Kırılma (Gökkuşağı)",
        explanation: "Işığın kırılmasıyla gökkuşağı oluşur ve beyaz ışığın içindeki renkleri görürüz."
    },
    {
        question: "Vücudumuzu ayakta tutan ve iç organlarımızı koruyan sert yapı nedir?",
        options: ["Kaslar", "Damarlar", "Kemikler", "Sinirler"],
        answer: "Kemikler",
        explanation: "Kemikler, vücudumuzun güçlü iskeletini oluşturur ve organlarımızı korur."
    },
    {
        question: "Işığın düz yolunu kesen bir nesnenin arkasında oluşan karanlık bölge nedir?",
        options: ["Yankı", "Gölge", "Işın", "Spektrum"],
        answer: "Gölge",
        explanation: "Gölge, ışık bir nesne tarafından engellendiğinde oluşur."
    },
    {
        question: "Ay'ın parlak görünmesinin sebebi nedir?",
        options: ["Ay'ın sıcak olması", "Ay'ın atmosferi", "Güneş ışığını yansıtması", "Yıldız olması"],
        answer: "Güneş ışığını yansıtması",
        explanation: "Ay, Güneş'in ışığını bir ayna gibi bize yansıtır."
    },
    {
        question: "Tohumdan minik bir bitkinin çıkması için en az neye ihtiyaç vardır?",
        options: ["Toprak ve Rüzgar", "Su ve Sıcaklık", "Şeker ve Tuz", "Karbondioksit ve Kökler"],
        answer: "Su ve Sıcaklık",
        explanation: "Tohumun uyanması (çimlenme) için öncelikle su ve doğru sıcaklık gerekir."
    },
    {
        question: "Vücudumuzdaki her şeyi kontrol eden komuta merkezimiz neresidir?",
        options: ["Kalp", "Mide", "Beyin", "Akciğer"],
        answer: "Beyin",
        explanation: "Beyin, düşünmek, hareket etmek, hissetmek gibi tüm işlerimizi yöneten süper organdır."
    }
];

let currentQuizIndex = 0; // Şu anki quiz sorusunun indeksi
let score = 0; // Skor

// Quiz'i başlatır
function startQuiz() {
    currentQuizIndex = 0;
    score = 0;
    shuffle(quizQuestions); // Soruları karıştır
    document.getElementById('quizStartCard').style.display = 'none';
    document.getElementById('quizResultCard').style.display = 'none';
    document.getElementById('quizCard').classList.add('active');

    showQuizQuestion();
    document.getElementById('quizSection').scrollIntoView({ behavior: 'smooth' });
}

// Soruyu ekrana yükler
function showQuizQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        displayResult(); // Tüm sorular bitti
        return;
    }

    const questionData = quizQuestions[currentQuizIndex];
    document.getElementById('questionNumber').textContent = `Soru ${currentQuizIndex + 1} / ${quizQuestions.length}`;
    document.getElementById('quizQuestion').textContent = questionData.question;
    document.getElementById('quizExplanation').classList.remove('show');
    document.getElementById('quizNextBtn').classList.remove('show');

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    // Seçenekleri oluştur
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(option, optionElement);
        optionsContainer.appendChild(optionElement);
    });

    updateQuizProgress();
}

// Cevabı kontrol eder
function checkAnswer(selectedOption, element) {
    const questionData = quizQuestions[currentQuizIndex];
    const allOptions = document.querySelectorAll('.quiz-option');

    // Tüm seçenekleri devre dışı bırak
    allOptions.forEach(opt => opt.classList.add('disabled'));

    const explanationElement = document.getElementById('quizExplanation');
    explanationElement.textContent = `Bilge Arı Açıklaması: ${questionData.explanation}`;
    explanationElement.classList.add('show');
    document.getElementById('quizNextBtn').classList.add('show');

    if (selectedOption === questionData.answer) {
        element.classList.add('correct');
        score++;
        showSpeechBubble("Doğru bildin! Süper bir bilim insanı adayı! 🌟", 2000);
    } else {
        element.classList.add('wrong');
        // Doğru cevabı işaretle
        allOptions.forEach(opt => {
            if (opt.textContent === questionData.answer) {
                opt.classList.add('correct');
            }
        });
        showSpeechBubble("Yanlış cevap, ama üzülme! Açıklamayı oku ve doğrusunu öğren! 😉", 2500);
    }

    // Açıklama ve Sonraki Soru butonunu görmek için otomatik scroll
    setTimeout(() => {
        const nextBtn = document.getElementById('quizNextBtn');
        if (nextBtn) {
            nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 300);
}

// Sonraki soruya geçer
function nextQuestion() {
    currentQuizIndex++;
    showQuizQuestion();
}

// İlerleme çubuğunu günceller
function updateQuizProgress() {
    const progressBar = document.getElementById('quizProgressBar');
    const totalQuestions = quizQuestions.length;
    const progress = (currentQuizIndex / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${Math.round(progress)}%`;
}

// Sonuçları gösterir
function displayResult() {
    document.getElementById('quizCard').classList.remove('active');
    const resultCard = document.getElementById('quizResultCard');
    resultCard.style.display = 'block';

    const totalQuestions = quizQuestions.length;
    const percentage = (score / totalQuestions) * 100;

    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');

    let message = '';
    let icon = '';
    let title = '';

    // Sonuç değerlendirmesi
    if (percentage >= 80) {
        icon = '👑';
        title = 'Muhteşem Başarı! Arı Gibi Çalıştın!';
        message = `Gerçek bir bilim kahramanısın! Bilgilerinle bizi şaşırttın.`;
    } else if (percentage >= 50) {
        icon = '👍';
        title = 'Çok İyi İş Çıkardın!';
        message = `Çoğu soruyu bildin! Daha iyi olmak için konuları tekrar gözden geçirebilirsin.`;
    } else {
        icon = '📚';
        title = 'Tekrar Çalışma Zamanı!';
        message = `Konulara bir daha bak ve yeniden dene! Vazgeçmek yok, öğrenmeye devam!`;
    }

    resultIcon.textContent = icon;
    resultTitle.textContent = title;
    document.getElementById('resultScore').textContent = `Puanın: ${score} / ${totalQuestions}`;
    resultMessage.textContent = message;

    showSpeechBubble(`${title} ${icon} Puanın: ${score} / ${totalQuestions}`, 6000);
}

// Quiz'i yeniden başlatır
function restartQuiz() {
    document.getElementById('quizResultCard').style.display = 'none';
    document.getElementById('quizStartCard').style.display = 'block';
    updateQuizProgress(); // İlerleme çubuğunu sıfırla
}
