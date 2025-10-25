// Global state
let activeDay = 0;
let mapInstances = {};

// Data
const dayRoutes = {
    day1: {
        center: [41.9010, 12.4890],
        zoom: 15,
        locations: [
            { name: "Hotel Quirinale", coords: [41.9010, 12.4952], type: "hotel" },
            { name: "Fontana di Trevi", coords: [41.9009, 12.4833], type: "attraction" }
        ]
    },
    day2: {
        center: [41.9030, 12.4630],
        zoom: 13,
        locations: [
            { name: "Hotel Quirinale", coords: [41.9010, 12.4952], type: "hotel" },
            { name: "Museus Vaticano", coords: [41.9065, 12.4536], type: "attraction" },
            { name: "Basílica São Pedro", coords: [41.9022, 12.4539], type: "attraction" },
            { name: "Trastevere", coords: [41.8897, 12.4689], type: "restaurant" }
        ]
    },
    day3: {
        center: [41.8950, 12.4850],
        zoom: 14,
        locations: [
            { name: "Hotel Quirinale", coords: [41.9010, 12.4952], type: "hotel" },
            { name: "Coliseu", coords: [41.8902, 12.4922], type: "attraction" },
            { name: "Fórum Romano", coords: [41.8925, 12.4853], type: "attraction" },
            { name: "Vaticano (Angelus)", coords: [41.9022, 12.4539], type: "attraction" },
            { name: "Bairro Judeu", coords: [41.8919, 12.4775], type: "restaurant" }
        ]
    },
    day4: {
        center: [41.9000, 12.4760],
        zoom: 15,
        locations: [
            { name: "Hotel Quirinale", coords: [41.9010, 12.4952], type: "hotel" },
            { name: "Panteão", coords: [41.8986, 12.4768], type: "attraction" },
            { name: "Piazza Navona", coords: [41.8992, 12.4731], type: "attraction" }
        ]
    }
};

// Initialize map for a specific day
function initializeMap(day) {
    if (day < 1 || day > 4) return;

    const mapId = `map-day-${day}`;
    const mapElement = document.getElementById(mapId);
    if (!mapElement) return;

    // Remove existing map if any
    if (mapInstances[day]) {
        mapInstances[day].remove();
        mapInstances[day] = null;
    }

    const dayKey = `day${day}`;
    const route = dayRoutes[dayKey];
    if (!route) return;

    try {
        const map = L.map(mapElement).setView(route.center, route.zoom);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(map);

        const icons = {
            hotel: '🏨',
            attraction: '⭐',
            restaurant: '🍽️',
            transport: '🚇'
        };

        route.locations.forEach((loc, index) => {
            const icon = L.divIcon({
                html: `<div style="font-size: 24px;">${icons[loc.type]}</div>`,
                className: 'custom-div-icon',
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            const marker = L.marker(loc.coords, { icon }).addTo(map);
            marker.bindPopup(`<b>${loc.name}</b>`);

            if (index === 0) marker.openPopup();
        });

        if (route.locations.length > 1) {
            const routeCoords = route.locations.map(loc => loc.coords);
            L.polyline(routeCoords, {
                color: '#f97316',
                weight: 3,
                opacity: 0.7,
                dashArray: '10, 5'
            }).addTo(map);
        }

        mapInstances[day] = map;
    } catch (error) {
        console.log('Erro ao inicializar mapa:', error);
    }
}

// Render intro content
function renderIntro() {
    return `
        <div class="intro-title">Uma Viagem Especial ao Coração da Fé</div>
        <div class="intro-divider"></div>

        <div class="section-card">
            <div class="section-header">
                <div class="section-icon">💙</div>
                <div>
                    <h3 class="section-title">Como Tudo Começou</h3>
                    <div class="section-content">Queridas tias,

Esta viagem começou com uma proposta muito especial dos vossos sobrinhos, que desejavam partilhar convosco uma experiência que marcou profundamente os seus corações: uma peregrinação a Roma e ao Vaticano neste Ano Jubilar tão significativo.

Depois de viverem esta experiência juntos este ano — nós, primos entre nós, num tempo de oração, renovação de fé e partilha que tocou cada um de forma única — sentimos que vocês, que têm a fé e a Igreja tão presentes nas vossas vidas, mereciam viver também este momento especial.</div>
                </div>
            </div>
        </div>

        <div class="section-card">
            <div class="section-header">
                <div class="section-icon">🎁</div>
                <div>
                    <h3 class="section-title">O Presente dos Sobrinhos</h3>
                    <div class="section-content">Mesmo não podendo acompanhar-vos nesta viagem (já tendo estado lá neste Jubileu), nós, vossos sobrinhos, quisemos oferecer-vos algo igualmente precioso: todo o planeamento, organização e preparação desta peregrinação.

Este guia é o fruto desse carinho — cada detalhe foi pensado para que a vossa viagem seja tranquila, segura e cheia de sentido espiritual. Das reservas aos caminhos, das igrejas aos momentos de oração, tudo foi preparado com dedicação para vocês.</div>
                </div>
            </div>
        </div>

        <div class="section-card">
            <div class="section-header">
                <div class="section-icon">✝️</div>
                <div>
                    <h3 class="section-title">Um Ano Santo, Uma Graça Única</h3>
                    <div class="section-content">O Ano Jubilar de 2025 é uma oportunidade verdadeiramente rara — acontece apenas de 25 em 25 anos. É um tempo de graça especial proclamado pelo Papa, onde os peregrinos que visitam Roma podem receber indulgências plenárias e renovar profundamente a sua fé.

Este não é apenas um passeio turístico, mas uma peregrinação ao centro da cristandade, aos lugares onde São Pedro e São Paulo deram a vida pela fé, onde os primeiros cristãos rezaram nas catacumbas, onde cada pedra conta uma história de dois mil anos de Igreja.</div>
                </div>
            </div>
        </div>

        <div class="section-card">
            <div class="section-header">
                <div class="section-icon">🙏</div>
                <div>
                    <h3 class="section-title">O Espírito desta Peregrinação</h3>
                    <div class="section-content">Enquanto caminham pelas ruas de Roma, pedimos que rezem também por nós, vossos sobrinhos, que preparámos esta viagem com tanto amor. Que cada igreja que visitarem, cada oração que fizerem, cada momento de silêncio diante da Pietá ou sob a cúpula de São Pedro seja uma forma de união na fé que nos une a todos.

Roma não é apenas a "Cidade Eterna" — é a nossa casa espiritual, o coração pulsante da Igreja universal. Que possam sentir esta pertença profunda e voltar renovadas na fé e na alegria.</div>
                </div>
            </div>
        </div>

        <div class="section-card">
            <div class="section-header">
                <div class="section-icon">🚪✝️</div>
                <div>
                    <h3 class="section-title">🚪 O Desafio das 4 Portas Santas</h3>
                    <div class="section-content">Este Ano Jubilar de 2025 oferece-vos uma graça única que só acontece de 25 em 25 anos: atravessar as **Portas Santas** das 4 Basílicas Papais Maiores de Roma!

<strong>O que são as Portas Santas?</strong>
São portas especiais que só se abrem durante os Anos Santos. Atravessá-las é um acto profundo de fé que simboliza passar de uma vida de pecado para uma vida renovada em Cristo. Jesus disse: <em>"Eu sou a porta: se alguém entrar por mim, será salvo"</em> (João 10:9).

<strong>A Indulgência Plenária:</strong>
Ao atravessar cada Porta Santa com as condições adequadas (confissão, comunhão, oração pelas intenções do Papa, e espírito de conversão), recebem o perdão completo dos pecados — uma graça extraordinária!

<strong>As 4 Basílicas Papais com Portas Santas:</strong>

1️⃣ <strong>São Pedro (Vaticano)</strong> - Sobre o túmulo do primeiro Papa
   → <em>Já incluída no itinerário - Domingo durante a missa!</em>

2️⃣ <strong>Santa Maria Maior</strong> - A igreja dedicada à Virgem Maria
   → <em>Pertinho do hotel! 900m, 12min a pé</em>

3️⃣ <strong>São João de Latrão</strong> - A Catedral oficial do Papa, "Mãe de todas as igrejas"
   → <em>Metro A: San Giovanni (3 paragens de Termini)</em>

4️⃣ <strong>São Paulo Extramuros</strong> - Sobre o túmulo de São Paulo
   → <em>Metro B: Basilica San Paolo</em>

<strong>O DESAFIO que vos lançamos:</strong>
Tentem visitar as 4 Portas Santas durante a vossa peregrinação! Não será fácil em apenas 3 dias, mas é possível com alguma reorganização. Ou, pelo menos, visitem 2 ou 3 das 4. Cada porta atravessada é uma bênção única!

<strong>Como encaixar no itinerário:</strong>
• <strong>São Pedro</strong>: Domingo de manhã ✅ (já incluído!)
• <strong>Santa Maria Maior</strong>: Segunda de manhã cedo (08:15-09:15), antes do Panteão — muito fácil!
• <strong>São João de Latrão</strong>: Sábado após o Bairro Judeu, ou Domingo à tarde (em vez de descanso)
• <strong>São Paulo Extramuros</strong>: O mais difícil de encaixar (mais afastado)

<strong>Sugestão prática:</strong>
Façam pelo menos <strong>São Pedro + Santa Maria Maior</strong> (2 Portas Santas) — é perfeitamente viável e já é uma peregrinação completa! As outras podem ficar para uma próxima visita a Roma.

Lembrem-se: <strong>as Portas Santas fecham a 28 de Dezembro de 2025</strong>. Vocês vão em Novembro — timing perfeito!

Esta é uma oportunidade única de receberem graças extraordinárias. Nós, vossos sobrinhos, rezamos para que consigam viver esta experiência ao máximo. Que cada porta atravessada vos aproxime mais de Cristo! 🚪✝️</div>
                </div>
            </div>
        </div>

        <div class="section-card">
            <div class="section-header">
                <div class="section-icon">📖</div>
                <div>
                    <h3 class="section-title">Como Usar Este Guia</h3>
                    <div class="section-content">Este guia foi elaborado com todo o cuidado para o vosso grupo de 9 pessoas. Cada dia está planeado ao minuto, com:

• Horários flexíveis mas realistas
• Opções de transporte com links diretos
• Restaurantes testados e recomendados
• Informação sobre bilhetes e reservas
• Contexto religioso e histórico de cada lugar
• Momentos de descanso pensados para o grupo

Não hesitem em adaptar conforme as vossas necessidades e energia. O importante é viverem esta experiência com o coração aberto e tranquilo.</div>
                </div>
            </div>
        </div>

        <div class="section-card">
            <div class="section-header">
                <div class="section-icon">ℹ️</div>
                <div>
                    <h3 class="section-title">Informações Importantes</h3>
                    <div class="section-content">⚠️ <strong>Ano Jubilar 2025:</strong> Roma espera 32 milhões de peregrinos! Por isso:
• Todas as reservas foram feitas com antecedência
• Os bilhetes online são obrigatórios (já indicados no guia)
• Alguns locais estarão mais cheios que o habitual
• A paciência e a oração são vossos melhores companheiros

🎒 <strong>O Que Levar:</strong>
• Sapatos muito confortáveis (muita caminhada!)
• Lenço ou xaile para cobrir ombros nas igrejas
• Garrafa de água reutilizável
• Medicação pessoal e seguro de viagem
• Fé, alegria e disponibilidade para Deus surpreender!</div>
                </div>
            </div>
        </div>

        <div class="closing-card">
            <div class="closing-icon">💝</div>
            <h3 class="closing-title">Com Todo o Carinho e Fé</h3>
            <div class="closing-content">Este guia é mais do que um planeamento — é um abraço à distância, um desejo profundo de que vivam algo tão bonito quanto nós vivemos, e uma forma de estarmos convosco, mesmo não estando fisicamente presentes.

Que São Pedro vos abra as portas do céu e do seu coração.
Que São Paulo vos dê a coragem da fé.
Que Maria, Mãe da Igreja, vos acompanhe em cada passo.

<strong>Boa viagem, queridas tias! Rezem por nós em Roma! 🙏</strong>

<em>Com carinho e fé,</em>
<em>Os vossos sobrinhos que vos amam</em> ❤️</div>
        </div>

        <div style="text-align: center;">
            <button class="btn-primary" onclick="setActiveDay(1)">✈️ Ver Itinerário - Dia 1</button>
        </div>
    `;
}

// Render day content
function renderDay(dayNum) {
    const days = [
        {
            title: "Sexta-feira - Chegada",
            fullDate: "Sexta-feira, 28 Novembro 2025",
            intro: "Queridas tias, o vosso primeiro dia em Roma! Depois de uma madrugada cedo (o voo parte às 05:55 de Lisboa), vão chegar à Cidade Eterna pela manhã. Preparámos este dia com calma e carinho: instalação tranquila no hotel, um descanso merecido para recuperar da viagem, e ao final do dia têm um Free Walking Tour às 19h para uma primeira descoberta guiada da cidade. Respirem fundo: estão em Roma! 💙",
            schedule: [
                { time: "05:55", title: "Partida de Lisboa", desc: "Voo Ryanair - Aeroporto de Lisboa", religious: "✝️ Que São Rafael, padroeiro dos viajantes, vos proteja!", icon: "📍" },
                { time: "10:05", title: "Chegada ao Aeroporto Fiumicino", desc: "Voo aterra - Leonardo da Vinci International", religious: "✝️ Chegam à cidade dos 7 montes, onde São Pedro e São Paulo foram martirizados!", icon: "📍" },
                { time: "11:00-12:00", title: "Transfer para o Hotel", desc: "Opção recomendada: Carrinha privada 9 lugares", mapLink: "https://www.google.com/maps/dir/Fiumicino+-+Aeroporto+Internazionale+Leonardo+da+Vinci,+Fiumicino/Hotel+Quirinale,+Via+Nazionale,+7,+00184+Roma", details: ["Carrinha privada: €120-150 (recomendado para o grupo)", "Leonardo Express + caminhada: €14/pessoa para Termini, depois 8min a pé", "Táxis: 2-3 táxis a €50 cada = €100-150"], tip: "💡 A carrinha é mais confortável e porta-a-porta!", icon: "🚆" },
                { time: "12:30", title: "Chegada ao Hotel Quirinale", desc: "Via Nazionale, 7 - Deixar malas na recepção", details: ["⏰ Check-in oficial: 14:30 (2:30 PM)", "Podem deixar as malas guardadas se chegarem antes", "Usar as instalações do hotel enquanto esperam"], religious: "✝️ Próximo da Basílica de Santa Maria Maggiore, uma das 4 basílicas papais!", icon: "📍" },
                { time: "14:00", title: "Almoço no Hotel ou Perto", restaurants: ["Regoli - Via dello Statuto, 60 (5min) - Pastelaria histórica desde 1916"], tip: "💡 Almoçar enquanto esperam pelo check-in às 14:30", icon: "🍽️" },
                { time: "14:30", title: "Check-in no Hotel", desc: "Subir aos quartos, instalar-se com calma", icon: "📍" },
                { time: "15:30-17:30", title: "Descanso nos Quartos", desc: "Tempo para descansar, tomar banho, recuperar da madrugada", tip: "⚠️ Importante! Novembro pode estar fresco (12-18°C). A madrugada foi cedo - descansem bem!", icon: "☕" },
                { time: "18:00", title: "Passeio à Fontana di Trevi", desc: "1.3 km a pé do hotel (15min, descida suave)", mapLink: "https://www.google.com/maps/dir/Hotel+Quirinale,+Via+Nazionale,+7,+00184+Roma/Trevi+Fountain,+Piazza+di+Trevi,+00187+Roma", religious: "✝️ A fonte celebra a chegada da água do aqueduto Acqua Vergine. Lancem a moeda com a mão direita por cima do ombro esquerdo!", tip: "💡 À noite está lindamente iluminada e menos gente", icon: "📸" },
                { time: "19:30", title: "Jantar na zona de Trevi", restaurants: ["🍝 Hostaria Romana - Via del Boccaccio, 1 - Carbonara autêntica", "🍝 Al Moro - Vicolo delle Bollette, 13 - Histórico desde 1929", "🍝 Colline Emiliane - Via degli Avignonesi, 22 - Tortellini famosos", "🍝 Ou na zona onde o tour terminar - o guia dá boas dicas!"], icon: "🍽️" },
                { time: "23:00", title: "🏨 Regresso ao Hotel", desc: "Descansar bem - amanhã é dia cheio no Vaticano!", icon: "🚌" }
            ]
        },
        {
            title: "Sábado - Vaticano",
            fullDate: "Sábado, 29 Novembro 2025",
            intro: "Sábado no Vaticano — um dia inteiro dedicado ao coração da fé católica! Comecem tranquilamente com os Museus Vaticano e a Capela Sistina, depois explorem a magnífica Basílica de São Pedro. Este é um dos dias mais importantes da vossa peregrinação. ✝️",
            schedule: [
                { time: "08:30", title: "Pequeno-almoço", icon: "☕" },
                { time: "09:00", title: "Ir para o Vaticano", desc: "Metro Linha A: Repubblica → Ottaviano-San Pietro", mapLink: "https://www.google.com/maps/dir/Hotel+Quirinale/Vatican+Museums", details: ["Caminhar 2min até Metro Repubblica (200m do hotel)", "Metro Linha A (vermelha) - 4 paragens, 10min", "Descer em Ottaviano-San Pietro", "Caminhar 7min até Museus Vaticano"], tip: "🎫 Bilhete: €1.50 (válido 100min)", religious: "✝️ Vão visitar o menor país do mundo - 0,44 km² de território sagrado!", icon: "🚆" },
                { time: "09:30-12:30", title: "🎨 Museus do Vaticano + Capela Sistina", desc: "⚠️ BILHETES ONLINE! €25", movieRef: "🎬 'Angels & Demons' (2009)", religious: "✝️ Capela Sistina - onde se elegem os Papas! Michelangelo pintou o tecto em 4 anos!", tip: "💡 MUITA caminhada. Silêncio absoluto na Capela!", highlights: ["Escadaria em espiral de Bramante", "Salas de Rafael", "Capela Sistina - tecto de Michelangelo"], icon: "📸" },
                { time: "12:30-13:30", title: "Almoço em Borgo Pio", restaurants: ["🍝 Ristorante dei Musei - Via Borgo Pio, 162", "🍝 Tre Pupazzi - Borgo Pio, 183", "🍝 L'Arcangelo - Via G.G. Belli, 59 - Reservar!", "🍕 Pizzarium (Bonci) - Via della Meloria, 43 - Pizza al taglio famosa!"], icon: "🍽️" },
                { time: "13:30-15:30", title: "⛪ Basílica de São Pedro", desc: "Entrada gratuita pela basílica", highlights: ["Pietà de Michelangelo", "Cúpula (opcional subir - 551 degraus ou elevador + 320 degraus)", "Baldaquino de Bernini - 29m de altura", "Túmulo de São Pedro - sob o altar principal", "Estátua de São Pedro - beijar o pé (já gasto!)", "🚪 Porta Santa - atravessar para Indulgência Plenária!", "Praça de São Pedro - colonata de Bernini"], religious: "✝️ A maior igreja do mundo (136m de altura da cúpula). Construída sobre o túmulo de São Pedro, crucificado de cabeça para baixo no Circo de Nero (64 d.C.). Levou 120 anos a construir (1506-1626).", tip: "💡 Subir à cúpula só para quem tiver energia! Vista incrível sobre Roma. 👗 CÓDIGO VESTUÁRIO: Ombros e joelhos cobertos!", movieRef: "🎬 'Angels & Demons' (2009) - mas sem bombas, prometemos!", icon: "📸" },
                { time: "15:30", title: "Regresso ao Hotel para Descanso", desc: "Metro de volta. Tempo para descansar bem as pernas!", mapLink: "https://www.google.com/maps/dir/St.+Peter's+Basilica/Hotel+Quirinale", tip: "Foi um dia intenso e espiritual - descansem bem antes do jantar!", icon: "🚆" },
                { time: "19:30", title: "Jantar em Trastevere", desc: "Bairro boémio, atmosfera autêntica", restaurants: ["🍝 Da Enzo al 29 - ⭐ RESERVAR!", "🍝 Taverna Trilussa - Bom para grupos", "🍝 Tonnarello - Cacio e Pepe na roda de queijo!"], movieRef: "🎬 Alma de Roma como em 'Roman Holiday'", icon: "🍽️" }
            ]
        },
        {
            title: "Domingo - Roma Antiga + Angelus (Opcional)",
            fullDate: "Domingo, 30 Novembro 2025",
            intro: "Domingo em Roma — uma verdadeira viagem no tempo! De manhã, o Coliseu, o Fórum Romano, o Monte Palatino. Ao meio-dia, oportunidade ÚNICA de ver o Papa no Angelus (opcional)! À tarde, o encantador Bairro Judeu com as famosas alcachofras fritas. É um dia com muita caminhada — mas cada passo vale a pena. 🏛️",
            schedule: [
                { time: "08:30", title: "Pequeno-almoço", icon: "☕" },
                { time: "09:00", title: "Ir para o Coliseu", desc: "Metro Linha B ou caminhar", mapLink: "https://www.google.com/maps/dir/Hotel+Quirinale,+Via+Nazionale,+7,+00184+Roma/Colosseum,+Piazza+del+Colosseo,+00184+Roma", details: ["METRO: Termini → Colosseo (2 paragens, 3min) - €1.50", "A PÉ: 2km, 25min descida pela Via dei Fori Imperiali"], icon: "🚆" },
                { time: "09:30-11:30", title: "🏛️ Coliseu + Fórum Romano + Palatino", desc: "⚠️ BILHETES ONLINE! €18", movieRef: "🎬 'Gladiator' (2000)", religious: "✝️ Palco do martírio de muitos cristãos. Por isso há uma cruz dentro!", highlights: ["Coliseu - arena dos gladiadores", "Fórum Romano - centro da Roma Antiga", "Palatino - colina dos imperadores"], tip: "💡 Visita rápida (2h) para ter tempo para o Angelus!", icon: "📸" },
                { time: "11:30", title: "🚇 OPCIONAL: Ir para o Vaticano para o Angelus", desc: "Se quiserem ver o Papa!", mapLink: "https://www.google.com/maps/dir/Colosseum/St.+Peter's+Square", details: ["Metro B: Colosseo → Termini", "Trocar para Metro A: Termini → Ottaviano", "Caminhar 7min até Praça São Pedro", "⏰ Total: 30min de viagem"], tip: "💡 OPCIONAL! Se não forem, podem almoçar perto do Coliseu e continuar o itinerário", icon: "🚆" },
                { time: "12:00-12:15", title: "⛪ ANGELUS COM O PAPA (OPCIONAL)", desc: "Oração do Angelus na Praça de São Pedro", religious: "✝️ MOMENTO ÚNICO! Todos os domingos ao meio-dia, o Papa aparece à janela do Palácio Apostólico e reza o Angelus com os fiéis. Breve mensagem + bênção apostólica.", highlights: ["Papa aparece à janela às 12:00", "Reza o Angelus com a multidão", "Breve mensagem (5-10min)", "Bênção apostólica", "Termina às 12:15 aproximadamente"], tip: "💡 Chegar cedo (11:45) para boa posição. É grátis, não precisa bilhete! Muita gente mas vale MUITO a pena!", icon: "✝️", movieRef: "✝️ 'Ver o Papa é uma graça única! Momento inesquecível!'" },
                { time: "13:00", title: "Almoço", restaurants: ["SE FORAM AO ANGELUS: 🍝 Borgo Pio (perto Vaticano)", "SE NÃO FORAM: 🍝 Li Rioni - Via dei Santi Quattro, 24 (perto Coliseu)", "🍝 Terre e Domus - Foro di Traiano, 82-84"], icon: "🍽️" },
                { time: "14:30", title: "Piazza Venezia + Campidoglio", mapLink: "https://www.google.com/maps/dir/Colosseum/Piazza+Venezia,+00186+Roma", highlights: ["Monumento Vittorio Emanuele II", "Praça do Capitólio - desenho de Michelangelo"], icon: "📸" },
                { time: "16:00", title: "Bairro Judeu", mapLink: "https://www.google.com/maps/dir/Piazza+Venezia/Jewish+Ghetto,+Rome", religious: "✝️ Comunidade judaica mais antiga da Europa Ocidental (161 a.C.)!", icon: "📍" },
                { time: "19:00", title: "Jantar no Bairro Judeu", restaurants: ["🍝 Nonna Betta - ⭐ Carciofi alla Giudia OBRIGATÓRIO!", "🍝 Ba'Ghetto - Kosher, terraço", "🍝 Sora Margherita - Sem placa! Reservar!"], icon: "🍽️" },
                { time: "21:00", title: "Regresso ao Hotel", icon: "🚌" }
            ]
        },
        {
            title: "Segunda - Partida",
            fullDate: "Segunda-feira, 1 Dezembro 2025",
            intro: "Último dia em Roma! Manhã tranquila: Panteão, Piazza Navona, café italiano. Voo às 17:55 - sair do hotel às 14:30. Arrivederci! 🙏",
            schedule: [
                { time: "07:30", title: "Pequeno-almoço e Check-out", desc: "⏰ Check-out: 12:00", tip: "Deixar malas guardadas na recepção", icon: "☕" },
                { time: "08:30", title: "Ir para o Panteão", mapLink: "https://www.google.com/maps/dir/Hotel+Quirinale/Pantheon", icon: "📍" },
                { time: "09:00-10:00", title: "Panteão", desc: "Entrada €5", movieRef: "🎬 'Angels & Demons' - Rafael está enterrado aqui!", religious: "✝️ Templo convertido em igreja em 609 d.C.", icon: "📸" },
                { time: "10:15", title: "Piazza Navona", mapLink: "https://www.google.com/maps/dir/Pantheon/Piazza+Navona", highlights: ["Fonte dos Quatro Rios - Bernini", "Igreja Sant'Agnese"], icon: "📸" },
                { time: "10:45", title: "☕ Café Italiano Autêntico", cafes: ["⭐ Sant'Eustachio Il Caffè", "⭐ Tazza d'Oro"], movieRef: "☕ De pé no balcão como os locais!", icon: "☕" },
                { time: "11:30", title: "Almoço Ligeiro (SE houver tempo)", restaurants: ["🍝 Armando al Pantheon", "Ou apenas gelado e tramezzino"], tip: "⚠️ Não demorar - hotel às 13:00!", icon: "🍽️" },
                { time: "13:00", title: "Regresso ao Hotel", desc: "Buscar malas", icon: "🚌" },
                { time: "13:15-14:30", title: "Tempo Livre no Hotel", desc: "Descansar, organizar", icon: "☕" },
                { time: "14:30", title: "Caminhar para Termini", desc: "8 minutos a pé", icon: "📍" },
                { time: "14:45", title: "🚆 Leonardo Express em Termini", desc: "Comboio direto para Fiumicino", details: ["Duração: 32 minutos", "Bilhete: €14/pessoa", "Partidas a cada 15 minutos"], tip: "💡 Chegam às 15:17 - perfeito!", religious: "✝️ Levem a bênção de São Pedro convosco!", icon: "🚆" },
                { time: "15:17", title: "Chegada ao Aeroporto", icon: "📍" },
                { time: "15:55", title: "🛫 Check-in", icon: "📍" },
                { time: "17:55", title: "✈️ Partida para Lisboa", movieRef: "🎬 'Arrivederci Roma!'", icon: "📍" },
                { time: "20:05", title: "🛬 Chegada a Lisboa", religious: "✝️ Com o coração cheio de bênçãos!", icon: "📍" }
            ]
        }
    ];

    const day = days[dayNum - 1];
    if (!day) return '';

    let html = `
        <h2 class="day-title">${day.title}</h2>
        <p class="day-date">${day.fullDate}</p>

        <div class="day-intro">
            <p>${day.intro}</p>
        </div>

        <div class="map-container" id="map-day-${dayNum}"></div>

        <div>
    `;

    day.schedule.forEach(item => {
        html += `
            <div class="schedule-item">
                <div class="schedule-header">
                    <div class="schedule-icon">${item.icon}</div>
                    <div style="flex: 1;">
                        <div class="schedule-time">
                            <span>🕐</span>
                            <span class="time-text">${item.time}</span>
                        </div>
                        <h3 class="schedule-title">${item.title}</h3>
                        <p class="schedule-desc">${item.desc || ''}</p>
        `;

        if (item.mapLink) {
            html += `<a href="${item.mapLink}" target="_blank" rel="noopener noreferrer" class="map-link">🗺️ Ver Mapa</a>`;
        }

        if (item.details) {
            html += '<div class="detail-box">';
            item.details.forEach(detail => {
                html += `<div class="detail-item">• ${detail}</div>`;
            });
            html += '</div>';
        }

        if (item.highlights) {
            html += '<div class="highlights-box"><div class="highlights-title">✨ Destaques:</div>';
            item.highlights.forEach(h => {
                html += `<div class="highlight-item">• ${h}</div>`;
            });
            html += '</div>';
        }

        if (item.restaurants) {
            html += '<div class="restaurants-box"><div class="restaurants-title">🍽️ Restaurantes:</div>';
            item.restaurants.forEach(r => {
                html += `<div class="restaurant-item">${r}</div>`;
            });
            html += '</div>';
        }

        if (item.cafes) {
            html += '<div class="cafes-box">';
            item.cafes.forEach(c => {
                html += `<div class="cafe-item">${c}</div>`;
            });
            html += '</div>';
        }

        if (item.religious) {
            html += `<div class="religious-box">${item.religious}</div>`;
        }

        if (item.movieRef) {
            html += `<div class="movie-box">${item.movieRef}</div>`;
        }

        if (item.tip) {
            html += `<div class="tip-box">${item.tip}</div>`;
        }

        html += `
                    </div>
                </div>
            </div>
        `;
    });

    html += '</div>';

    return html;
}

// Render gastronomy content (simplified for brevity - full content would be too long)
function renderGastro() {
    return `
        <h2 class="day-title">🍝 Guia Gastronómico de Roma</h2>
        <p class="day-date">Os melhores lugares para comer, beber e saborear a verdadeira Roma!</p>

        <div class="gastro-section">
            <div class="gastro-header">
                <span style="font-size: 32px;">🍦</span>
                <h3 class="gastro-title">Gelatarias Imperdíveis</h3>
            </div>
            <div class="gastro-card">
                <h4 class="gastro-card-title" style="color: #ec4899;">⭐ Giolitti (desde 1900)</h4>
                <p class="gastro-card-address">📍 Via degli Uffici del Vicario, 40</p>
                <p class="gastro-card-hours">🕒 7:00-1:00 | 💰 €3-6</p>
                <p class="gastro-card-desc">A gelataria mais antiga de Roma! Experimente o Crema Giolitti (receita secreta de 1900) e o pistacchio di Bronte.</p>
                <p class="gastro-card-tip">💡 Perto do Panteão - ideal para segunda de manhã!</p>
            </div>
            <div class="gastro-card">
                <h4 class="gastro-card-title" style="color: #ec4899;">⭐ Gelateria del Teatro</h4>
                <p class="gastro-card-address">📍 Via dei Coronari, 65</p>
                <p class="gastro-card-hours">🕒 10:30-22:00 | 💰 €3-5</p>
                <p class="gastro-card-desc">Gelado artesanal feito à vista! Sabores criativos como ricota com figos, vinho tinto, e chocolate com pimenta.</p>
            </div>
        </div>

        <div class="gastro-section" style="background: linear-gradient(to right, #fef3c7, #fed7aa); border-left-color: #f59e0b;">
            <div class="gastro-header">
                <span style="font-size: 32px;">🍰</span>
                <h3 class="gastro-title" style="color: #92400e;">Os Melhores Tiramisus</h3>
            </div>
            <div class="gastro-card">
                <h4 class="gastro-card-title" style="color: #f59e0b;">⭐⭐⭐ Pompi - "Il Regno del Tiramisù"</h4>
                <p class="gastro-card-address">📍 Via della Croce, 82 (perto de Trevi)</p>
                <p class="gastro-card-hours">🕒 9:00-23:00 | 💰 €5-7</p>
                <p class="gastro-card-desc">O MELHOR tiramisu de Roma! 6 variedades: clássico, pistacchio, morango, nutella, limão, chocolate branco.</p>
                <p class="gastro-card-tip">💡 Imperdível na sexta à noite após a Fontana di Trevi!</p>
            </div>
        </div>

        <div class="gastro-section" style="background: linear-gradient(to right, #fef3c7, #fef9c3); border-left-color: #ca8a04;">
            <div class="gastro-header">
                <span style="font-size: 32px;">👑</span>
                <h3 class="gastro-title" style="color: #854d0e;">I Quattro Grandi - Os 4 Pratos de Roma</h3>
            </div>
            <p style="font-size: 12px; color: #6b7280; margin-bottom: 12px;">TÊM que provar os 4 pratos típicos da cozinha romana!</p>

            <div class="gastro-card">
                <h4 class="gastro-card-title" style="color: #ca8a04;">1️⃣ Carbonara</h4>
                <p class="gastro-card-desc">Ingredientes: Guanciale (bochecha de porco), ovos, pecorino romano, pimenta preta.</p>
                <p style="font-size: 12px; color: #ca8a04; margin-top: 4px;">⚠️ SEM NATAS! Nunca leva natas! A cremosidade vem dos ovos.</p>
                <p style="font-size: 12px; color: #16a34a; margin-top: 4px;">✅ Onde provar: Flavio al Velavevodetto, Roscioli, Armando al Pantheon</p>
            </div>

            <div class="gastro-card">
                <h4 class="gastro-card-title" style="color: #ca8a04;">2️⃣ Cacio e Pepe</h4>
                <p class="gastro-card-desc">Ingredientes: Apenas 3! Pecorino romano, pimenta preta, água da massa.</p>
                <p style="font-size: 12px; color: #ca8a04; margin-top: 4px;">💡 O mais simples, mas difícil de fazer. Tem que ser cremoso, não granulado.</p>
                <p style="font-size: 12px; color: #16a34a; margin-top: 4px;">✅ Onde provar: Tonnarello (na roda!), Flavio al Velavevodetto</p>
            </div>

            <div class="gastro-card">
                <h4 class="gastro-card-title" style="color: #ca8a04;">3️⃣ Amatriciana</h4>
                <p class="gastro-card-desc">Ingredientes: Guanciale, tomate, pecorino, vinho branco.</p>
                <p style="font-size: 12px; color: #ca8a04; margin-top: 4px;">💡 De Amatrice, cidade perto de Roma. Molho vermelho, picante.</p>
                <p style="font-size: 12px; color: #16a34a; margin-top: 4px;">✅ Onde provar: Flavio al Velavevodetto, Sora Margherita</p>
            </div>

            <div class="gastro-card">
                <h4 class="gastro-card-title" style="color: #ca8a04;">4️⃣ Gricia</h4>
                <p class="gastro-card-desc">Ingredientes: Guanciale, pecorino, pimenta preta.</p>
                <p style="font-size: 12px; color: #ca8a04; margin-top: 4px;">💡 "Carbonara sem ovo" ou "Amatriciana sem tomate" - a mãe de todas!</p>
                <p style="font-size: 12px; color: #16a34a; margin-top: 4px;">✅ Onde provar: Armando al Pantheon, Sora Margherita</p>
            </div>

            <div style="margin-top: 12px; padding: 12px; background: #fef3c7; border-radius: 8px;">
                <p style="font-size: 12px; font-weight: bold; color: #854d0e; margin-bottom: 4px;">🎯 DESAFIO GASTRONÓMICO:</p>
                <p style="font-size: 12px; color: #374151;">Provem os 4 pratos durante a viagem! Carbonara na sexta, Cacio e Pepe no sábado, Amatriciana no domingo, Gricia na segunda!</p>
            </div>
        </div>

        <div class="gastro-section" style="background: linear-gradient(to right, #fef3c7, #fef9c3); border-left-color: #f59e0b;">
            <div class="gastro-header">
                <span style="font-size: 32px;">☕</span>
                <h3 class="gastro-title" style="color: #92400e;">Cafés Históricos</h3>
            </div>

            <div class="gastro-card">
                <h4 class="gastro-card-title" style="color: #f59e0b;">⭐⭐⭐ Sant'Eustachio Il Caffè</h4>
                <p class="gastro-card-address">📍 Piazza Sant'Eustachio, 82</p>
                <p class="gastro-card-hours">🕒 8:30-1:00 | 💰 €1.30 no balcão</p>
                <p class="gastro-card-desc">O melhor café de Roma! Receita secreta desde 1938. Pedir: "Gran Caffè" (espresso cremoso).</p>
                <p class="gastro-card-tip">💡 OBRIGATÓRIO na segunda de manhã! Ficam a 2min do Panteão.</p>
            </div>

            <div style="margin-top: 12px; font-size: 12px; background: #fef3c7; padding: 8px; border-radius: 4px;">
                <strong>☕ Dica:</strong> Em Itália, café de pé no balcão custa €1-1.50. Sentado pode custar €5-10! Façam como os romanos: de pé, rápido, e a falar alto! 😄
            </div>
        </div>

        <div class="info-section">
            <h3 class="info-title">💡 Dicas Importantes</h3>
            <div style="font-size: 12px;">
                <div style="background: white; padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                    <strong style="color: #1d4ed8;">💰 Preços:</strong> € = até 15€ | €€ = 15-30€ | €€€ = 30€+
                </div>
                <div style="background: white; padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                    <strong style="color: #1d4ed8;">🍽️ Reservas:</strong> Restaurantes com ⭐⭐⭐ = Reservar com DIAS de antecedência!
                </div>
                <div style="background: white; padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                    <strong style="color: #1d4ed8;">⏰ Horários:</strong> Almoço: 12:30-15:00 | Jantar: 19:30-23:00
                </div>
                <div style="background: white; padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                    <strong style="color: #1d4ed8;">🧾 Coperto:</strong> Taxa de €1-3 por pessoa (pão e serviço). É normal!
                </div>
                <div style="background: white; padding: 8px; border-radius: 4px;">
                    <strong style="color: #1d4ed8;">⚠️ Armadilhas:</strong> Evitem restaurantes com fotos plastificadas na porta ou empregados a chamar na rua!
                </div>
            </div>
        </div>
    `;
}

// Render info content (simplified)
function renderInfo() {
    return `
        <h2 class="day-title">ℹ️ Informações Gerais & Dicas Práticas</h2>

        <div class="info-section">
            <h3 class="info-title">🏨 Hotel Quirinale ⭐⭐⭐⭐</h3>
            <div class="info-content">
                <p class="info-item">📍 Via Nazionale, 7, 00184 Roma</p>
                <p class="info-item">📞 +39 06 4707</p>
                <p class="info-highlight">✅ Localização perfeita:</p>
                <p class="info-item">• 8min a pé da estação Termini</p>
                <p class="info-item">• 12min a pé de Santa Maria Maggiore (Porta Santa!)</p>
                <p class="info-item">• Metro Repubblica a 2min</p>
                <p class="info-item">• Rodeado de restaurantes e cafés</p>
                <div class="info-box">
                    <p class="info-box-text"><strong>⏰ Check-in:</strong> 14:30 | <strong>Check-out:</strong> 12:00</p>
                    <p class="info-box-text" style="margin-top: 4px;">💡 Podem deixar malas guardadas antes/depois destes horários</p>
                </div>
            </div>
        </div>

        <div class="info-section" style="background: #dcfce7; border-left-color: #16a34a;">
            <h3 class="info-title" style="color: #166534;">🚇 Transportes em Roma</h3>
            <div class="info-content">
                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 12px;">
                    <h4 style="font-weight: bold; color: #16a34a; margin-bottom: 4px; font-size: 14px;">🎫 Bilhetes ATAC (Metro/Bus/Elétrico)</h4>
                    <div style="font-size: 12px;">
                        <p>• BIT (100 min): €1.50 - 1 viagem metro + ilimitado bus/elétrico</p>
                        <p>• 24 horas: €7</p>
                        <p>• 48 horas: €12.50</p>
                        <p>• 72 horas: €18</p>
                        <p style="color: #16a34a; margin-top: 8px;">💡 <strong>Recomendação:</strong> Comprem bilhetes individuais (€1.50). Vão andar muito a pé!</p>
                    </div>
                </div>

                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 12px;">
                    <h4 style="font-weight: bold; color: #16a34a; margin-bottom: 4px; font-size: 14px;">🚇 Linhas de Metro Úteis</h4>
                    <div style="font-size: 12px;">
                        <p>• <span style="background: #dc2626; color: white; padding: 2px 8px; border-radius: 4px;">A</span> Linha Vermelha: Repubblica ↔ Ottaviano (Vaticano)</p>
                        <p>• <span style="background: #2563eb; color: white; padding: 2px 8px; border-radius: 4px;">B</span> Linha Azul: Termini ↔ Colosseo</p>
                        <p style="color: #6b7280; margin-top: 8px;">⚠️ Metro fecha à meia-noite (23:30 sexta/sábado)</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="info-section" style="background: #f3e8ff; border-left-color: #9333ea;">
            <h3 class="info-title" style="color: #6b21a8;">🎫 Bilhetes para Atrações</h3>
            <div class="info-content">
                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #9333ea; font-size: 14px; margin-bottom: 4px;">⛪ Basílica de São Pedro</h4>
                    <p style="font-size: 12px; color: #374151;">✅ GRÁTIS (entrada pela basílica)</p>
                    <p style="font-size: 12px; color: #6b7280;">Cúpula: €10 (elevador + 320 degraus) ou €8 (551 degraus)</p>
                    <p style="font-size: 12px; color: #9333ea; margin-top: 4px;">💡 Fila de segurança 30-60min. Chegar cedo!</p>
                </div>

                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #9333ea; font-size: 14px; margin-bottom: 4px;">🎨 Museus Vaticano + Capela Sistina</h4>
                    <p style="font-size: 12px; color: #374151;">💰 €25 (online obrigatório!)</p>
                    <p style="font-size: 12px; color: #dc2626; margin-top: 4px;">⚠️ Reservar em: museivaticani.va</p>
                </div>

                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #9333ea; font-size: 14px; margin-bottom: 4px;">🏛️ Coliseu + Fórum + Palatino</h4>
                    <p style="font-size: 12px; color: #374151;">💰 €18 (bilhete único, válido 24h)</p>
                    <p style="font-size: 12px; color: #dc2626; margin-top: 4px;">⚠️ Reservar em: coopculture.it ou parcocolosseo.it</p>
                </div>
            </div>
        </div>

        <div class="info-section" style="background: #fef2f2; border-left-color: #dc2626;">
            <h3 class="info-title" style="color: #991b1b;">🔒 Segurança & Cuidados</h3>
            <div class="info-content">
                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #dc2626; margin-bottom: 4px;">⚠️ Carteiristas</h4>
                    <p style="font-size: 12px; color: #374151;">Roma tem muitos! Especialmente em:</p>
                    <p style="font-size: 12px; color: #6b7280;">• Metro (especialmente Linha A)</p>
                    <p style="font-size: 12px; color: #6b7280;">• Termini e zonas turísticas</p>
                    <p style="font-size: 12px; color: #6b7280;">• Coliseu, Vaticano, Trevi</p>
                    <p style="font-size: 12px; color: #dc2626; margin-top: 8px;"><strong>Solução:</strong> Mochila à frente, carteiras em bolsos interiores, não mostrar telemóveis/câmaras desnecessariamente</p>
                </div>

                <div style="background: white; padding: 12px; border-radius: 4px;">
                    <h4 style="font-weight: bold; color: #dc2626; margin-bottom: 4px;">👮 Em Caso de Emergência</h4>
                    <p style="font-size: 12px; color: #374151;">• Polícia: 112 (número único europeu)</p>
                    <p style="font-size: 12px; color: #374151;">• Ambulância: 118</p>
                    <p style="font-size: 12px; color: #374151;">• Embaixada Portugal: +39 06 847 5481</p>
                </div>
            </div>
        </div>

        <div class="info-section" style="background: #fef9c3; border-left-color: #eab308;">
            <h3 class="info-title" style="color: #854d0e;">💡 Dicas Práticas</h3>
            <div class="info-content">
                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #ca8a04; margin-bottom: 4px;">🌡️ Clima em Novembro</h4>
                    <p style="font-size: 12px; color: #374151;">• Temperatura: 12-18°C</p>
                    <p style="font-size: 12px; color: #374151;">• Pode chover! Levem guarda-chuva pequeno</p>
                    <p style="font-size: 12px; color: #374151;">• Casaco necessário, especialmente à noite</p>
                    <p style="font-size: 12px; color: #ca8a04; margin-top: 8px;">💡 Vestuário em camadas + sapatos impermeáveis confortáveis!</p>
                </div>

                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #ca8a04; margin-bottom: 4px;">👗 Código de Vestuário (Igrejas)</h4>
                    <p style="font-size: 12px; color: #374151;">• Ombros cobertos (sem alças, sem decote)</p>
                    <p style="font-size: 12px; color: #374151;">• Joelhos cobertos (saias/calções abaixo do joelho)</p>
                    <p style="font-size: 12px; color: #374151;">• Chapéus têm que ser tirados</p>
                    <p style="font-size: 12px; color: #dc2626; margin-top: 8px;">⚠️ São Pedro e Vaticano são RIGOROSOS! Negam entrada.</p>
                    <p style="font-size: 12px; color: #ca8a04;">💡 Levem xaile/lenço grande para cobrir ombros</p>
                </div>

                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #ca8a04; margin-bottom: 4px;">💧 Água Potável</h4>
                    <p style="font-size: 12px; color: #374151;">• Roma tem 2500+ "nasoni" (fontes públicas)</p>
                    <p style="font-size: 12px; color: #374151;">• Água é potável e gratuita!</p>
                    <p style="font-size: 12px; color: #374151;">• Levem garrafa reutilizável</p>
                    <p style="font-size: 12px; color: #ca8a04; margin-top: 8px;">💡 Poupa €€€ e é ecológico!</p>
                </div>

                <div style="background: white; padding: 12px; border-radius: 4px;">
                    <h4 style="font-weight: bold; color: #ca8a04; margin-bottom: 4px;">💶 Dinheiro</h4>
                    <p style="font-size: 12px; color: #374151;">• Euro (€) - mesma moeda!</p>
                    <p style="font-size: 12px; color: #374151;">• Cartões aceites na maioria dos lugares</p>
                    <p style="font-size: 12px; color: #374151;">• Tenham €50-100 em cash para emergências</p>
                    <p style="font-size: 12px; color: #374151;">• Tabacarias, gelados, cafés = às vezes só cash</p>
                    <p style="font-size: 12px; color: #ca8a04; margin-top: 8px;">💡 Multibanco em todo o lado, sem comissões UE</p>
                </div>
            </div>
        </div>

        <div class="info-section" style="background: #e0e7ff; border-left-color: #6366f1;">
            <h3 class="info-title" style="color: #3730a3;">🎒 O Que Levar na Mala</h3>
            <div class="info-content">
                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #6366f1; margin-bottom: 4px;">👟 OBRIGATÓRIO</h4>
                    <p style="font-size: 12px; color: #374151;">✅ Sapatos MUITO confortáveis (vão andar 15-20km/dia!)</p>
                    <p style="font-size: 12px; color: #374151;">✅ Segundo par de sapatos confortáveis</p>
                    <p style="font-size: 12px; color: #374151;">✅ Xaile/lenço grande (igrejas)</p>
                    <p style="font-size: 12px; color: #374151;">✅ Guarda-chuva pequeno dobrável</p>
                    <p style="font-size: 12px; color: #374151;">✅ Casaco corta-vento impermeável</p>
                    <p style="font-size: 12px; color: #374151;">✅ Medicação pessoal + pequena farmácia</p>
                    <p style="font-size: 12px; color: #374151;">✅ Garrafa água reutilizável</p>
                    <p style="font-size: 12px; color: #374151;">✅ Carregador telemóvel + powerbank</p>
                    <p style="font-size: 12px; color: #374151;">✅ Cartão Europeu Seguro Doença (pedir no centro de saúde!)</p>
                </div>
            </div>
        </div>

        <div class="info-section" style="background: #ffe4e6; border-left-color: #f43f5e;">
            <h3 class="info-title" style="color: #9f1239;">❤️ Dicas Especiais para o Vosso Grupo</h3>
            <p style="font-size: 12px; color: #6b7280; margin-bottom: 12px;">Pensadas especialmente para tornar a viagem mais confortável e tranquila</p>
            <div class="info-content">
                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #f43f5e; margin-bottom: 4px;">⏰ Ritmo Tranquilo</h4>
                    <p style="font-size: 12px; color: #374151;">• O itinerário tem pausas para descanso - usem-nas!</p>
                    <p style="font-size: 12px; color: #374151;">• Não se sintam obrigadas a fazer tudo. É melhor ver menos com calma</p>
                    <p style="font-size: 12px; color: #374151;">• Sugestão: dividam o grupo se alguém quiser descansar</p>
                    <p style="font-size: 12px; color: #f43f5e; margin-top: 8px;">💡 Roma não se vê num dia - aproveitem ao vosso ritmo!</p>
                </div>

                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #f43f5e; margin-bottom: 4px;">👟 Cuidado com os Pés</h4>
                    <p style="font-size: 12px; color: #374151;">• Vão andar MUITO! Roma tem calçada paralelepípedos (irregular)</p>
                    <p style="font-size: 12px; color: #374151;">• Sapatos já usados e confortáveis (não estrear!)</p>
                    <p style="font-size: 12px; color: #374151;">• Meias grossas, sem costuras que irritem</p>
                    <p style="font-size: 12px; color: #374151;">• Levem pensos/compeed para bolhas</p>
                    <p style="font-size: 12px; color: #374151;">• À noite no hotel: pés ao alto, descansar bem!</p>
                    <p style="font-size: 12px; color: #f43f5e; margin-top: 8px;">⚠️ Não tenham vergonha de parar para descansar. Há bancos em todo o lado!</p>
                </div>

                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #f43f5e; margin-bottom: 4px;">✝️ Espiritualidade & Fé</h4>
                    <p style="font-size: 12px; color: #374151;">• Esta é uma PEREGRINAÇÃO, não só turismo</p>
                    <p style="font-size: 12px; color: #374151;">• Deem-se tempo para orar, meditar, estar em silêncio</p>
                    <p style="font-size: 12px; color: #374151;">• Não se preocupem em ver tudo - sintam os lugares</p>
                    <p style="font-size: 12px; color: #374151;">• A missa de domingo em São Pedro é o momento alto</p>
                    <p style="font-size: 12px; color: #f43f5e; margin-top: 8px;">🙏 Lembrem-se: estão a caminhar onde São Pedro e São Paulo caminharam!</p>
                </div>
            </div>

            <div style="margin-top: 16px; padding: 16px; background: #ffe4e6; border-radius: 8px; border: 2px solid #fb7185;">
                <p style="font-size: 14px; font-weight: bold; color: #9f1239; margin-bottom: 8px;">❤️ LEMBREM-SE:</p>
                <p style="font-size: 12px; color: #1f2937; line-height: 1.6;">
                    Esta viagem foi planeada com muito amor e cuidado. O itinerário é uma SUGESTÃO, não uma obrigação.
                    Se estiverem cansadas, descansem. Se quiserem ficar mais tempo num sítio, fiquem. Se preferirem sentar-se
                    num café a ver o mundo passar, façam-no! O importante é voltarem felizes, descansadas e com o coração cheio.
                    Roma estará sempre lá, mas vocês merecem aproveitar ao VOSSO ritmo.
                    <br><br>
                    <strong>Não é uma corrida, é uma peregrinação. ✝️</strong>
                    <br><br>
                    Qualquer dúvida, liguem para o hotel ou para nós (vossos sobrinhos). Estamos a uma chamada de distância! 📱❤️
                </p>
            </div>
        </div>

        <div class="info-section" style="background: #f3f4f6; border-left-color: #6b7280;">
            <h3 class="info-title" style="color: #1f2937;">📞 Contactos Úteis</h3>
            <div style="font-size: 12px;">
                <p style="color: #374151; margin-bottom: 4px;">🏨 <strong>Hotel Quirinale:</strong> +39 06 4707</p>
                <p style="color: #374151; margin-bottom: 4px;">🚔 <strong>Emergências:</strong> 112</p>
                <p style="color: #374151; margin-bottom: 4px;">🚑 <strong>Ambulância:</strong> 118</p>
                <p style="color: #374151; margin-bottom: 4px;">🇵🇹 <strong>Embaixada Portugal:</strong> +39 06 847 5481</p>
                <p style="color: #374151; margin-bottom: 4px;">ℹ️ <strong>Turismo Roma:</strong> 060608</p>
                <p style="color: #374151;">🚕 <strong>Táxi Roma:</strong> 060609 / 063570</p>
            </div>
        </div>
    `;
}

// Set active day and update content
function setActiveDay(day) {
    activeDay = day;

    // Update tabs
    document.querySelectorAll('.tab').forEach((tab, index) => {
        if (parseInt(tab.dataset.day) === day) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Update content
    const contentDiv = document.getElementById('content');

    if (day === 0) {
        contentDiv.innerHTML = renderIntro();
    } else if (day >= 1 && day <= 4) {
        contentDiv.innerHTML = renderDay(day);
        // Initialize map after a short delay to ensure DOM is ready
        setTimeout(() => initializeMap(day), 200);
    } else if (day === 5) {
        contentDiv.innerHTML = renderGastro();
    } else if (day === 6) {
        contentDiv.innerHTML = renderInfo();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add click listeners to tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const day = parseInt(this.dataset.day);
            setActiveDay(day);
        });
    });

    // Load initial content
    setActiveDay(0);
});
