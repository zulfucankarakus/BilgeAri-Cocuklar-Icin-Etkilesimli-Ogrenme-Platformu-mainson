// Bilim Bahçesi Öğrenme İçerikleri 
const bahceLearningContent = {
    cicekler: [
        {
            icon: "🌸",
            title: "Çiçek Nedir?",
            content: "Çiçekler, bitkilerin en renkli ve güzel kısımlarıdır! Ama sadece güzel görünmek için değil, çok önemli bir görevi var: Yeni tohumlar oluşturmak! Çiçekler, bitkilerin üreme organıdır ve renkli yaprakları (taç yaprakları) arıları çeker.",
            experiment: "🔬 Deney: Bir çiçeği incele. Ortasındaki sarı tozları gör (polen). Bu tozlar arılar tarafından taşınarak yeni bitkiler oluşturur!"
        },
        {
            icon: "🌹",
            title: "Gül - Dikenlerin Kraliçesi",
            content: "Gül, en ünlü çiçeklerden biridir! Güller çok güzel kokar ve kırmızı, pembe, beyaz gibi birçok renkte olabilir. Gövdesindeki dikenler onu koruyan birer kalkan gibidir. Güller, sevginin sembolüdür!",
            experiment: "🔬 Deney: Bir gülü kokla. Ne kadar güzel koktuğunu fark et. Bu koku arıları ve kelebekleri çeker!"
        },
        {
            icon: "🌻",
            title: "Ayçiçeği - Güneşi Takip Eden",
            content: "Ayçiçekleri çok özeldir, çünkü gün içinde Güneş'i takip ederler! Bu harekete 'fototropizm' denir. Ayçiçeklerinin ortasında yüzlerce küçük çiçek vardır ve her biri birer tohum üretir. Ayçiçeği tohumlarından yağ elde edilir!",
            experiment: "🔬 Deney: Sabah ve öğleden sonra bir ayçiçeğinin hangi yönde durduğunu gözlemle. Güneşi takip ettiğini göreceksin!"
        },
        {
            icon: "🌷",
            title: "Lale - Baharın Müjdecisi",
            content: "Laleler, baharın ilk çiçeklerinden biridir! Yerin altındaki soğanından (özel bir tohum türü) büyür. Laleler kırmızı, sarı, pembe, mor gibi birçok renkte olabilir. Türkiye'nin en sevilen çiçeklerinden biridir!",
            experiment: "🔬 Deney: Bir lale soğanını yakından incele. İçindeki kat kat yapıları gör. Her katman yeni yaprağa dönüşecek!"
        },
        {
            icon: "🌼",
            title: "Papatya - Falcının Dostu",
            content: "Papatyalar, beyaz yapraklı ve sarı ortası olan neşeli çiçeklerdir! Sade ama çok güzel görünürler. İnsanlar papatya falı çeker çünkü yapraklarını kolayca koparabilirsiniz. Papatyalar doğada çok yaygındır.",
            experiment: "🔬 Deney: Bir papatyayı hafifçe kopar ve yapraklarını say. Kaç adet yaprak var? Papatyalar genellikle 21-34 yaprak arasında olur!"
        },
        {
            icon: "🌺",
            title: "Hibiskus - Tropik Güzellik",
            content: "Hibiskus çiçekleri çok büyük ve renklidir! Sıcak ülkelerde yetişir ve kırmızı, pembe, sarı, turuncu gibi canlı renklerde olabilir. Hibiskus çayı yapılır ve çok lezzetlidir!",
            experiment: "🔬 Deney: Kuru hibiskus çiçeğini sıcak suda beklet. Suyun renginin değiştiğini gör ve hibiskus çayını tat!"
        },
        {
            icon: "🌾",
            title: "Çiçeklerin Polenlenmesi",
            content: "Çiçeklerdeki polen (çiçek tozu) arılar, kelebekler ve rüzgar tarafından taşınır. Bu polen başka bir çiçeğe ulaştığında, o çiçek tohum oluşturabilir. Buna polenleme denir ve dünyada bitkilerin çoğalması için çok önemlidir!",
            experiment: "🔬 Deney: Bir çiçeği ziyaret eden bir arıyı veya kelebeği izle. Ayakları ve vücuduna yapışan sarı poleni görebilirsin!"
        }
    ],
    agaclar: [
        {
            icon: "🌳",
            title: "Ağaç Nedir?",
            content: "Ağaçlar, dünya üzerindeki en büyük ve en uzun yaşayan bitkilerdir! Kalın bir gövdeleri ve dalları vardır. Kökler yeraltında suyu emer, gövde suyu yukarı taşır, yapraklar ise güneşten enerji alır. Ağaçlar yüzlerce, hatta binlerce yıl yaşayabilir!",
            experiment: "🔬 Deney: Bir ağacın gövdesine dokun. Ne kadar sert ve güçlü olduğunu hisset. Bu güç, ağacı ayakta tutar!"
        },
        {
            icon: "🍁",
            title: "Yaprak Dökümü",
            content: "Bazı ağaçlar sonbaharda yapraklarını döker. Buna 'yaprak döken ağaçlar' denir. Yapraklar yeşilken klorofil üretir ama sonbaharda klorofil azalınca sarı, kırmızı ve turuncu renkler ortaya çıkar! Kışın ağaç enerji tasarrufu yapar.",
            experiment: "🔬 Deney: Sonbaharda farklı renklerde yaprak topla. Her yaprağın farklı bir renk olduğunu gör!"
        },
        {
            icon: "🌲",
            title: "İğne Yapraklı Ağaçlar",
            content: "Çam, ladin ve servi gibi ağaçların yaprakları iğne gibidir ve dökülmez! Bu ağaçlara 'iğne yapraklı' veya 'her zaman yeşil' ağaçlar denir. İğne yapraklar kar ve soğuğa dayanıklıdır, bu yüzden kışın da yeşil kalır.",
            experiment: "🔬 Deney: Bir çam iğnesini incele. Sivri ve sert olduğunu gör. Bu yapı onu soğuğa karşı korur!"
        },
        {
            icon: "🍎",
            title: "Meyve Veren Ağaçlar",
            content: "Elma, armut, kiraz gibi ağaçlar bize lezzetli meyveler verir! Bu ağaçlar ilkbaharda çiçek açar, arılar polenleme yapar ve yaz sonunda meyveler olgunlaşır. Meyvelerin içindeki tohumlar yeni ağaçlara dönüşebilir.",
            experiment: "🔬 Deney: Bir elmayı ikiye böl. İçindeki tohumları çıkar. Her tohum yeni bir elma ağacı olabilir!"
        },
        {
            icon: "🌴",
            title: "Palmiye - Tropik Ağaç",
            content: "Palmiyeler, sıcak bölgelerde yetişen uzun ağaçlardır. Gövdeleri düz ve üstte büyük yaprakları vardır. Hindistan cevizi palmiyelerde yetişir! Palmiye yaprakları çok güçlüdür ve eskiden çatı yapmak için kullanılırdı.",
            experiment: "🔬 Deney: Bir palmiye yaprağını incele. Ne kadar geniş ve güçlü olduğunu gör!"
        },
        {
            icon: "🍂",
            title: "Ağaçların Halkası",
            content: "Ağacın gövdesini kestiğinde, içinde daireler (halkalar) görürsün. Her halka bir yılı temsil eder! Halkaları sayarak ağacın kaç yaşında olduğunu öğrenebilirsin. Kalın halkalar bol yağmur yağan yılları gösterir.",
            experiment: "🔬 Deney: Bir ağaç kütüğünün kesitini bul ve halkaları say. Ağaç kaç yaşında?"
        },
        {
            icon: "🌳",
            title: "Ağaçların Önemi",
            content: "Ağaçlar bizim için çok önemlidir! Havadaki karbondioksiti alır ve bize oksijen verir. Ağaçlar gölge yapar, toprak erozyonunu engeller, hayvanlara ev olur ve bize meyve ve odun verir. Ağaçlar dünyamızın akciğerleridir!",
            experiment: "🔬 Deney: Bir ağacın altında otur ve etrafındaki hayvanları gözlemle. Kuşlar, sincaplar, böcekler... Hepsi ağaçta yaşar!"
        }
    ],
    meyveler: [
        {
            icon: "🍎",
            title: "Elma - Sağlıklı Atıştırmalık",
            content: "Elma, dünyanın en sevilen meyvelerinden biridir! Kırmızı, yeşil veya sarı olabilir. Elmalar C vitamini ile doludur ve dişlerimizi temizler. 'Günde bir elma, doktoru uzak tutar' diye bir söz vardır!",
            experiment: "🔬 Deney: İki elma al. Birini havada bırak, diğerini limon suyuna batır. Hangisi daha hızlı kararır?"
        },
        {
            icon: "🍌",
            title: "Muz - Enerji Bombası",
            content: "Muz, tatlı ve yumuşak bir meyvedir! Potasyum açısından çok zengindir ve kaslarımızı güçlendirir. Muzlar, ağaçta değil büyük otsu bir bitkide yetişir. Muzun kabuğu sarıya dönünce yemek için hazırdır!",
            experiment: "🔬 Deney: Yeşil bir muz al ve bir hafta bekle. Her gün renginin nasıl sarıya döndüğünü gözlemle!"
        },
        {
            icon: "🍊",
            title: "Portakal - C Vitamini Deposu",
            content: "Portakal, C vitamini açısından çok zengin bir meyvedir! Soğuk algınlığına karşı bizi korur. Portakalın içi dilimlerden oluşur ve her dilimde minik su kesecikleri vardır. Portakal suyu çok lezzetlidir!",
            experiment: "🔬 Deney: Bir portakalı soy ve kabuğunu kokla. Kabuktaki yağlar çok güzel kokar!"
        },
        {
            icon: "🍓",
            title: "Çilek - Kırmızı Kalpler",
            content: "Çilekler, küçük ve kırmızı tatlı meyvelerdir! Çileğin dışında küçük sarı noktalar görürsün, bunlar aslında gerçek tohumlardır! Çilekler antioksidan açısından zengindir ve çok sağlıklıdır.",
            experiment: "🔬 Deney: Bir çileğin üstündeki küçük noktaları say. Her nokta bir tohum! Yüzlerce tohum var!"
        },
        {
            icon: "🍉",
            title: "Karpuz - Yaz Serinliği",
            content: "Karpuz, içinde çok su olan dev bir meyvedir! %92'si sudur ve yaz günlerinde bizi serinletir. Karpuzun içi kırmızı veya sarıdır ve siyah tohumları vardır. Tohumsuz karpuzlar da vardır!",
            experiment: "🔬 Deney: Bir karpuzu tart. Ne kadar ağır olduğunu gör. Şimdi bir dilim kes ve içindeki suyu fark et!"
        },
        {
            icon: "🍇",
            title: "Üzüm - Salkımlar Halinde",
            content: "Üzümler, asmada salkımlar halinde yetişir! Yeşil, mor veya kırmızı olabilir. Üzümler güneşte kurutularak kuru üzüm (kuru kayısı) yapılır. Üzümlerden şarap ve sirke de üretilir.",
            experiment: "🔬 Deney: Bir üzümü güneşte birkaç gün bırak. Kurudu mu? İşte bu kuru üzüm!"
        },
        {
            icon: "🥝",
            title: "Kivi - Yeşil Şaşırtmaca",
            content: "Kivinin dışı kahverengi ve tüylüdür ama içi muhteşem yeşildir! Kivi, C vitamini açısından portakaldan bile zengindir. Kiviler Yeni Zelanda'da çok ünlüdür ve kivi kuşunun adından gelir!",
            experiment: "🔬 Deney: Bir kiviyi ortadan kes. İçindeki siyah tohumların ve yeşil etin düzenini gör!"
        }
    ],
    sebzeler: [
        {
            icon: "🥕",
            title: "Havuç - Yeraltı Deposu",
            content: "Havuçlar yeraltında büyüyen turuncu köklerdir! A vitamini açısından çok zengindir ve gözlerimiz için çok faydalıdır. Tavşanların en sevdiği sebzelerden biridir! Havuçlar çiğ veya pişmiş olarak yenir.",
            experiment: "🔬 Deney: Bir havucun üst kısmını suya koy. Birkaç gün sonra yeşil yaprakların çıktığını gör!"
        },
        {
            icon: "🥦",
            title: "Brokoli - Minik Ağaçlar",
            content: "Brokoli, mini ağaçlar gibi görünen yeşil bir sebzedir! Aslında bir çiçeğin tomurcuklarıdır. Vitamin, mineral ve lif açısından çok zengindir. Brokoliyi haşlayarak veya buharda pişirerek yiyebilirsin!",
            experiment: "🔬 Deney: Bir brokoli başını yakından incele. Her bir minik dal bir ağaç gibi görünüyor!"
        },
        {
            icon: "🍅",
            title: "Domates - Kırmızı Lezzet",
            content: "Domates, aslında bir sebze değil, meyvedir! Ama mutfakta sebze gibi kullanılır. İçinde çok su ve licopeN adlı güçlü bir antioksidan vardır. Domatesler salata, salça ve sos yapımında kullanılır!",
            experiment: "🔬 Deney: Bir domatesi ikiye böl. İçindeki tohumları say ve jel kısmını incele!"
        },
        {
            icon: "🥔",
            title: "Patates - Yer Altı Hazinesi",
            content: "Patatesler yeraltında büyüyen yumrulardır! Karbonhidrat açısından zengindir ve bize enerji verir. Patateslerden çok şey yapılabilir: kızartma, pişirme, püre, patates cipsi! Patates dünyada en çok yetişirilen sebzelerden biridir.",
            experiment: "🔬 Deney: Bir patatesi yarısına kadar suya koy ve güneşe bırak. Birkaç gün sonra yeşil filizler çıkacak!"
        },
        {
            icon: "🌽",
            title: "Mısır - Altın Taneler",
            content: "Mısır, koçan üzerinde sıra sıra dizilmiş sarı tanelerden oluşur! Her koçanda yüzlerce tane mısır tanesi vardır. Mısır haşlanarak, patlatılarak (patlamış mısır) veya un yapılarak tüketilir. Mısır çok çeşitli kullanımlara sahiptir!",
            experiment: "🔬 Deney: Bir mısır koçanındaki taneleri say. Kaç tane var? Sonra bir avuç mısır tanesini patlatmayı dene!"
        },
        {
            icon: "🥒",
            title: "Salatalık - Serinleten Sebze",
            content: "Salatalıklar %96 su içerir ve çok serinleticidir! Salatalıklar toprağın üstünde sarmaşık bitkisi olarak yetişir. Salatalık maskeleri cildi yumuşatır. Salatalıklar turşu yapımında da kullanılır!",
            experiment: "🔬 Deney: Bir salatalık dilimini gözlerinin üzerine koy. Ne kadar serin ve rahatlatıcı olduğunu hisset!"
        },
        {
            icon: "🧅",
            title: "Soğan - Gözyaşı Sıkıcı",
            content: "Soğanlar, kat kat yapraklardan oluşan yumrulardır! Soğan kestiğinde gözün yaşarır çünkü soğan havaya özel bir gaz salar. Ama soğanlar çok sağlıklıdır ve yemeklere lezzet katar. Soğanlar çiğ, kızarmış veya karamelize olarak yenir!",
            experiment: "🔬 Deney: Bir soğanı ortadan kes. İçindeki halkaları say. Her halka bir yaprak tabakasıdır!"
        }
    ],
    ormandostlari: [
        {
            icon: "🍄",
            title: "Mantarlar - Ormanın Temizleyicileri",
            content: "Mantarlar ne bitkidir ne de hayvandır, ayrı bir krallıktadırlar! Mantarlar ölü yaprakları ve ağaçları parçalayarak toprağa besin verir. Bazı mantarlar yenilebilir, bazıları zehirlidir. Yabani mantarları asla yeme!",
            experiment: "🔬 Deney: Bir mantarın şapkasını kağıda koy ve üstüne kitap bas. Birkaç saat sonra kağıtta mantar sporları belirmiş olacak!"
        },
        {
            icon: "🌿",
            title: "Yosunlar - İlk Karasal Bitkiler",
            content: "Yosunlar, çok küçük ve basit bitkilerdir! Kökleri, gövdeleri ve yaprakları yoktur. Nemli yerlerde ve ağaç kabuklarında yaşarlar. Yosunlar çok eski bitkilerdir ve milyonlarca yıldır var!",
            experiment: "🔬 Deney: Islak bir taş veya ağaç kabuğunda yeşil yosun bul. Büyüteçle incele!"
        },
        {
            icon: "🌱",
            title: "Eğrelti Otları - Dinozor Zamanından",
            content: "Eğrelti otları, dinozorların yaşadığı zamandan beri var olan bitkilerdir! Çiçek açmazlar ve tohum üretmezler, spor ile çoğalırlar. Yaprakları kıvrımlı çıkar ve sonra açılır. Orman dibinde nemli yerleri severler.",
            experiment: "🔬 Deney: Bir eğrelti otu yaprağının alt yüzeyine bak. Küçük kahverengi noktalar gör, bunlar sporlar!"
        },
        {
            icon: "🌾",
            title: "Otlar - Yeşil Halı",
            content: "Otlar, dünyanın en yaygın bitkilerinden biridir! Çayırları, parkları ve bahçeleri kaplarlar. Otlar çok hızlı büyür ve kesilince tekrar çıkar. Birçok hayvan otla beslenir. Buğday, mısır ve pirinç de bir çeşit ottur!",
            experiment: "🔬 Deney: Bir avuç ot biçip kağıda bas. Birkaç gün sonra kurumuş ot izini gör!"
        },
        {
            icon: "🍃",
            title: "Orman Tabanı Katmanları",
            content: "Ormanın zemini katmanlardan oluşur! En altta yaprak döküntüsü, onun üstünde yosunlar, daha yukarıda küçük bitkiler ve en üstte ağaçlar vardır. Her katman farklı canlıların evidir. Bu katmanlar birlikte orman ekosistemini oluşturur!",
            experiment: "🔬 Deney: Ormanda yere çömel ve katmanları incele. En alt katmandaki ölü yaprakları, yosunları ve küçük bitkileri gör!"
        },
        {
            icon: "🌳",
            title: "Ağaç Kabuğu - Koruyucu Zırh",
            content: "Ağaç kabuğu, ağacın dış kabuğudur ve onu hastalıklardan, böceklerden ve iklim koşullarından korur! Kabuk kalın ve serttir. Bazı ağaçların kabuğu pürüzlü, bazılarının ise düzdür. Mantar ve yosunlar kabuk üzerinde yaşar.",
            experiment: "🔬 Deney: Farklı ağaçların kabuklarına dokun. Hangileri pürüzlü, hangileri düz?"
        },
        {
            icon: "🐛",
            title: "Orman Döngüsü",
            content: "Ormanda her şey bir döngü içindedir! Ağaçlar yaprak döker, yapraklar yere düşer, böcekler ve mantarlar onları parçalar, toprak zenginleşir ve yeni bitkiler büyür. Bu döngü ormanı canlı tutar!",
            experiment: "🔬 Deney: Bahçeye bir yaprak gömün ve her hafta kontrol edin. Kaç hafta sonra tamamen çürüdü?"
        }
    ],
    tohumlar: [
        {
            icon: "🌱",
            title: "Tohum Nedir?",
            content: "Tohum, içinde minik bir bebek bitki (embriyo) barındıran sihirli bir pakettir! Tohum, bitkilerin gelecek nesillerini oluşturur. Her tohumun içinde besin deposu, bir mikro kök ve yaprak bulunur. Doğru koşullarda tohum filizlenir ve yeni bir bitki olur!",
            experiment: "🔬 Deney: Bir fasulyeyi iki gün suya batır, sonra ikiye böl. İçindeki minik bitkiyi görebilirsin!"
        },
        {
            icon: "🌰",
            title: "Fındık ve Fıstıklar - Sert Kabuklular",
            content: "Fındık, ceviz, fıstık ve badem birer tohumdur! Sert kabukları içindeki tohumu korur. Bu tohumlar protein ve sağlıklı yağlar açısından çok zengindir. Sincaplar ve kuşlar bu tohumları toplar ve yer.",
            experiment: "🔬 Deney: Bir fındığı kır ve içini incele. Tohum kaç parçadan oluşuyor?"
        },
        {
            icon: "🌾",
            title: "Çimlenme - Uyanış",
            content: "Tohumun filizlenmesine 'çimlenme' denir! Çimlenme için tohuma su, uygun sıcaklık ve bazen ışık gerekir. Tohum suyu emince şişer, kabuğu çatlar ve önce kök, sonra gövde çıkar. Çimlenme, yeni bir yaşamın başlangıcıdır!",
            experiment: "🔬 Deney: Pamuğa birkaç fasulye koy, ıslat ve güneşli bir yere bırak. Her gün gözlemle!"
        },
        {
            icon: "🍃",
            title: "Tohumların Yayılması - Yolculuk",
            content: "Tohumlar farklı yollarla yayılır! Bazıları rüzgarla uçar (karahindiba), bazıları su ile sürüklenir (hindistan cevizi), bazıları hayvanların tüyüne yapışır (pitrak), bazıları ise meyve yiyen hayvanlarla taşınır!",
            experiment: "🔬 Deney: Bir karahindiba tohumunu üfle. Nasıl rüzgarla uçtuğunu gör!"
        },
        {
            icon: "🌻",
            title: "Ayçiçeği Tohumu - Mini Hazine",
            content: "Ayçiçeğinin ortasında yüzlerce küçük tohum vardır! Her tohum yeni bir ayçiçeği bitkisine dönüşebilir. Ayçiçeği tohumları yağ üretimi için kullanılır ve çerez olarak da yenir. Kuşlar ayçiçeği tohumlarını çok sever!",
            experiment: "🔬 Deney: Bir ayçiçeği başından tohumları çıkar ve say. Kaç tane var?"
        },
        {
            icon: "🥜",
            title: "Yer Fıstığı - Yer Altında Büyür",
            content: "Yer fıstığı çok ilginç bir bitkidir! Çiçeği havada açar ama tozlandıktan sonra toprak altına girer ve orada meyve verir! Yer fıstığı aslında bir baklagil bitkisidir ve proteince zengindir.",
            experiment: "🔬 Deney: Bir yer fıstığını toprakta yetiştirmeye çalış. Toprağın altını kaz ve fıstıkların nasıl büyüdüğünü gör!"
        },
        {
            icon: "🌾",
            title: "Tahıllar - Uygarlığın Temeli",
            content: "Buğday, pirinç, mısır ve arpa gibi tahıllar insanlık tarihinin en önemli bitkilerindendir! Tahıllar bir çeşit otttur ve tohumları undan ekmek, makarna, pirinç pilavı yapılır. Tahıllar dünyada en çok yetiştirilen bitkilerdir!",
            experiment: "🔬 Deney: Bir buğday tanesini toprakta filizlendir. Birkaç hafta sonra otu göreceksin!"
        }
    ]
};

// Bahçe için eşleştirme oyunu emojileri
const bahceMatchingEmojis = ["🌸", "🌻", "🌹", "🌷", "🍎", "🍓", "🥕", "🍄"];

let currentTopic = ''; 
let currentCardIndex = 0;
const totalCardsPerTopic = 7;
let speechTimeout;

const progressKey = 'bilgeBahceProgress';

function loadProgress() {
    const storedProgress = localStorage.getItem(progressKey);
    return storedProgress ? JSON.parse(storedProgress) : {
        cicekler: 0,
        agaclar: 0,
        meyveler: 0,
        sebzeler: 0,
        ormandostlari: 0,
        tohumlar: 0
    };
}

function saveProgress(topic, count) {
    const progress = loadProgress();
    progress[topic] = Math.max(progress[topic] || 0, count);
    localStorage.setItem(progressKey, JSON.stringify(progress));
    updateTopicCardsVisual();
}

function getTopicProgress(topic) {
    const progress = loadProgress();
    return progress[topic] || 0;
}

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

document.addEventListener('DOMContentLoaded', () => {
    updateTopicCardsVisual();
});

function openCardViewer(topic) {
    currentTopic = topic;
    currentCardIndex = getTopicProgress(topic) > 0 ? getTopicProgress(topic) - 1 : 0;

    document.getElementById('cardViewerSection').classList.add('active');
    document.getElementById('topics-section').style.display = 'none';
    document.getElementById('miniGamesSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'none';

    updateCard();
}

function openCardViewerAndScroll(topic) {
    openCardViewer(topic);
    const viewer = document.getElementById('cardViewerSection');
    viewer.scrollIntoView({ behavior: 'smooth' });
}

function closeCardViewer() {
    document.getElementById('cardViewerSection').classList.remove('active');
    document.getElementById('topics-section').style.display = 'block';
    document.getElementById('miniGamesSection').style.display = 'block';
    document.getElementById('quizSection').style.display = 'block';
    updateTopicCardsVisual();
    document.getElementById('topics-section').scrollIntoView({ behavior: 'smooth' });
}

function nextCard() {
    if (currentCardIndex < totalCardsPerTopic - 1) {
        currentCardIndex++;
        updateCard();
        saveProgress(currentTopic, currentCardIndex + 1);

        if (currentCardIndex === totalCardsPerTopic - 1) {
            showSpeechBubble("Vay canına! Son karttasın! 💪", 3000);
        }

    } else if (currentCardIndex === totalCardsPerTopic - 1) {
        saveProgress(currentTopic, totalCardsPerTopic);
        showSpeechBubble("Bu konuyu harika bir şekilde tamamladın! 🎉 Tebrikler! Şimdi yeni bir konuya geçebilirsin.", 6000);
        closeCardViewer();
    }
}

function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}

function updateCard() {
    const cardData = bahceLearningContent[currentTopic][currentCardIndex];
    const cardElement = document.getElementById('learningCard');

    cardElement.innerHTML = `
        <div class="learning-card-icon">${cardData.icon}</div>
        <h3 class="learning-card-title">${cardData.title}</h3>
        <p class="learning-card-content">${cardData.content}</p>
        <div class="experiment-suggestion">
            <div class="experiment-title">💡 Bilge Arı'dan Deney Önerisi!</div>
            <p class="experiment-content">${cardData.experiment}</p>
        </div>
    `;

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

    document.getElementById('cardViewerContainer').scrollTop = 0;
}

function toggleSpeech() {
    const bubble = document.getElementById('speechBubble');
    bubble.classList.toggle('active');

    if (bubble.classList.contains('active')) {
        speechTimeout = setTimeout(() => {
            bubble.classList.remove('active');
        }, 5000);
    } else {
        clearTimeout(speechTimeout);
    }
}

function showSpeechBubble(text, duration = 4000) {
    const bubble = document.getElementById('speechBubble');
    const textElement = document.getElementById('speechText');

    clearTimeout(speechTimeout);

    textElement.textContent = text;
    bubble.classList.add('active');

    speechTimeout = setTimeout(() => {
        bubble.classList.remove('active');
    }, duration);
}

// OYUN FONKSİYONLARI
let gameDeck = [];
let flippedTiles = [];
let matchedPairs = 0;
let moveCount = 0;
let gameLocked = false;
const gameGrid = document.getElementById('gameGrid');
const moveCountElement = document.getElementById('moveCount');
const matchingGameElement = document.getElementById('matchingGame');
const totalMatchingPairs = bahceMatchingEmojis.length;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initMatchingGame() {
    gameDeck = shuffle([...bahceMatchingEmojis, ...bahceMatchingEmojis]);
    flippedTiles = [];
    matchedPairs = 0;
    moveCount = 0;
    gameLocked = false;
    moveCountElement.textContent = moveCount;
    gameGrid.innerHTML = '';
    gameGrid.className = 'game-grid';
}

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

function handleTileClick(tile, emoji) {
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

function checkForMatch() {
    const [first, second] = flippedTiles;

    if (first.emoji === second.emoji) {
        setTimeout(() => {
            first.tile.classList.add('matched');
            second.tile.classList.add('matched');
            matchedPairs++;
            flippedTiles = [];
            gameLocked = false;

            if (matchedPairs === totalMatchingPairs) {
                setTimeout(showGameResult, 500);
            }
        }, 500);
    } else {
        setTimeout(() => {
            first.tile.classList.remove('flipped');
            second.tile.classList.remove('flipped');
            flippedTiles = [];
            gameLocked = false;
        }, 1000);
    }
}

function showGameResult() {
    showSpeechBubble(`Süpersin! 🎉 Oyunu sadece ${moveCount} hamlede bitirdin!`, 6000);
    resetGame();
}

function startMatchingGame() {
    initMatchingGame();
    renderGame();
    matchingGameElement.classList.add('active');
    showSpeechBubble("Hadi hafızanı test edelim! Aynı çiçekleri bul ve eşleştir! 🧠", 4000);
}

function startMatchingGameAndScroll() {
    startMatchingGame();
    setTimeout(() => {
        matchingGameElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function resetGame() {
    initMatchingGame();
    renderGame();
}

function closeGame() {
    matchingGameElement.classList.remove('active');
}

// BAHÇE QUIZ FONKSİYONLARI
const bahceQuizQuestions = [
    {
        question: "Bitkilerin güneş ışığı kullanarak kendi yemeklerini yapmalarına ne ad verilir?",
        options: ["Solunum", "Fotosentez", "Buharlaşma", "Polenleme"],
        answer: "Fotosentez",
        explanation: "Fotosentez, bitkilerin güneş ışığı, su ve karbondioksit kullanarak besin üretmesi ve oksijen vermesidir."
    },
    {
        question: "Çiçeklerin renkli yapraklarına ne ad verilir?",
        options: ["Yaprak", "Taç yaprak", "Gövde", "Kök"],
        answer: "Taç yaprak",
        explanation: "Taç yapraklar, çiçeğin renkli kısımlarıdır ve arıları çekmek için renklidirler."
    },
    {
        question: "Hangi meyve içinde en çok su bulunur?",
        options: ["Elma", "Muz", "Karpuz", "Üzüm"],
        answer: "Karpuz",
        explanation: "Karpuz %92 oranında sudan oluşur ve yaz günlerinde çok serinleticidir!"
    },
    {
        question: "Ağaçların gövdesindeki halkalar neyi gösterir?",
        options: ["Yükseklik", "Yaş", "Ağırlık", "Renk"],
        answer: "Yaş",
        explanation: "Ağaç gövdesindeki her halka bir yılı temsil eder. Halkaları sayarak ağacın kaç yaşında olduğunu öğrenebilirsin."
    },
    {
        question: "Tohumun filizlenmesine ne ad verilir?",
        options: ["Çimlenme", "Polenleme", "Buharlaşma", "Fotosentez"],
        answer: "Çimlenme",
        explanation: "Çimlenme, tohumun suyu emip, kabuğunun çatlayıp minik bitkinin çıkması sürecidir."
    },
    {
        question: "Hangi sebze yeraltında büyür?",
        options: ["Domates", "Brokoli", "Havuç", "Marul"],
        answer: "Havuç",
        explanation: "Havuç yeraltında büyüyen turuncu bir kök sebzesidir ve A vitamini açısından zengindir."
    },
    {
        question: "Mantarlar hangi krallığa aittir?",
        options: ["Bitki", "Hayvan", "Mantar (Fungi)", "Bakteri"],
        answer: "Mantar (Fungi)",
        explanation: "Mantarlar ne bitkidir ne de hayvandır, tamamen ayrı bir krallık oluştururlar."
    },
    {
        question: "Bitkilerin topraktan su ve besinleri hangi organı ile emer?",
        options: ["Yaprak", "Çiçek", "Kök", "Gövde"],
        answer: "Kök",
        explanation: "Kökler, bitkiyi toprağa bağlar ve topraktan su ile besinleri emer."
    },
    {
        question: "Hangi ağaç yapraklarını kışın dökmez?",
        options: ["Meşe", "Çınar", "Çam", "Ceviz"],
        answer: "Çam",
        explanation: "Çam gibi iğne yapraklı ağaçlar yapraklarını dökmez ve kışın da yeşil kalır."
    },
    {
        question: "Ayçiçeği bitkisi hangi özelliği ile tanınır?",
        options: ["Kokusuz olması", "Güneşi takip etmesi", "Zehirli olması", "Gece açması"],
        answer: "Güneşi takip etmesi",
        explanation: "Ayçiçekleri, gün boyunca Güneş'i takip eder. Bu olaya fototropizm denir."
    }
];

let currentBahceQuizIndex = 0;
let bahceScore = 0;

function startBahceQuiz() {
    currentBahceQuizIndex = 0;
    bahceScore = 0;
    shuffle(bahceQuizQuestions);
    document.getElementById('quizStartCard').style.display = 'none';
    document.getElementById('quizResultCard').style.display = 'none';
    document.getElementById('quizCard').classList.add('active');

    showBahceQuizQuestion();
    document.getElementById('quizSection').scrollIntoView({ behavior: 'smooth' });
}

function showBahceQuizQuestion() {
    if (currentBahceQuizIndex >= bahceQuizQuestions.length) {
        displayBahceResult();
        return;
    }

    const questionData = bahceQuizQuestions[currentBahceQuizIndex];
    document.getElementById('questionNumber').textContent = `Soru ${currentBahceQuizIndex + 1} / ${bahceQuizQuestions.length}`;
    document.getElementById('quizQuestion').textContent = questionData.question;
    document.getElementById('quizExplanation').classList.remove('show');
    document.getElementById('quizNextBtn').classList.remove('show');

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.onclick = () => checkBahceAnswer(option, optionElement);
        optionsContainer.appendChild(optionElement);
    });

    updateBahceQuizProgress();
}

function checkBahceAnswer(selectedOption, element) {
    const questionData = bahceQuizQuestions[currentBahceQuizIndex];
    const allOptions = document.querySelectorAll('.quiz-option');

    allOptions.forEach(opt => opt.classList.add('disabled'));

    const explanationElement = document.getElementById('quizExplanation');
    explanationElement.textContent = `Bilge Arı Açıklaması: ${questionData.explanation}`;
    explanationElement.classList.add('show');
    document.getElementById('quizNextBtn').classList.add('show');

    if (selectedOption === questionData.answer) {
        element.classList.add('correct');
        bahceScore++;
        showSpeechBubble("Doğru bildin! Harika bir bahçıvan adayısın! 🌟", 2000);
    } else {
        element.classList.add('wrong');
        allOptions.forEach(opt => {
            if (opt.textContent === questionData.answer) {
                opt.classList.add('correct');
            }
        });
        showSpeechBubble("Yanlış cevap, ama üzülme! Açıklamayı oku ve öğren! 😉", 2500);
    }

    setTimeout(() => {
        const nextBtn = document.getElementById('quizNextBtn');
        if (nextBtn) {
            nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 300);
}

function nextBahceQuestion() {
    currentBahceQuizIndex++;
    showBahceQuizQuestion();
}

function updateBahceQuizProgress() {
    const progressBar = document.getElementById('quizProgressBar');
    const totalQuestions = bahceQuizQuestions.length;
    const progress = (currentBahceQuizIndex / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${Math.round(progress)}%`;
}

function displayBahceResult() {
    document.getElementById('quizCard').classList.remove('active');
    const resultCard = document.getElementById('quizResultCard');
    resultCard.style.display = 'block';

    const totalQuestions = bahceQuizQuestions.length;
    const percentage = (bahceScore / totalQuestions) * 100;

    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');

    let message = '';
    let icon = '';
    let title = '';

    if (percentage >= 80) {
        icon = '👑';
        title = 'Muhteşem! Sen Gerçek Bir Bahçıvan Oldun!';
        message = `Bitkileri ve doğayı çok iyi öğrenmişsin! Tebrikler!`;
    } else if (percentage >= 50) {
        icon = '👍';
        title = 'Çok İyi! Bahçıvanlık Yolunda İlerliyor sun!';
        message = `İyi iş çıkardın! Biraz daha çalışırsan süper olursun!`;
    } else {
        icon = '📚';
        title = 'Tekrar Bahçe Tura Çıkma Zamanı!';
        message = `Konuları bir daha oku ve yeniden dene! Sen yaparsın!`;
    }

    resultIcon.textContent = icon;
    resultTitle.textContent = title;
    document.getElementById('resultScore').textContent = `Puanın: ${bahceScore} / ${totalQuestions}`;
    resultMessage.textContent = message;

    showSpeechBubble(`${title} ${icon} Puanın: ${bahceScore} / ${totalQuestions}`, 6000);
}

function restartBahceQuiz() {
    document.getElementById('quizResultCard').style.display = 'none';
    document.getElementById('quizStartCard').style.display = 'block';
    updateBahceQuizProgress();
}
