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

<strong>✅ RESERVAS JÁ FEITAS - As 4 Basílicas Papais:</strong>

1️⃣ <strong>São Paulo Extramuros</strong> - Sobre o túmulo de São Paulo
   → 📅 <strong>Sexta, 28/11 às 15:00</strong>
   → 👤 Reserva: Raul (App Jubilee)
   → 🔑 Código: Constantino&63
   → 🚇 Metro B: Basilica San Paolo

2️⃣ <strong>São Pedro (Vaticano)</strong> - Sobre o túmulo do primeiro Papa
   → 📅 <strong>Sábado, 29/11 às 15:00</strong>
   → 👤 Reserva: Marisa (App Jubilee)
   → 🔑 Código: Constantino&63
   → ✅ Já incluída no itinerário do Vaticano!

3️⃣ <strong>Santa Maria Maior</strong> - A igreja dedicada à Virgem Maria
   → 📅 <strong>Sábado, 29/11 às 17:00</strong>
   → 🚶 Pertinho do hotel! 900m, 12min a pé
   → 💡 Podem ir depois de São Pedro!

4️⃣ <strong>São João de Latrão</strong> - A Catedral oficial do Papa
   → 📅 <strong>Domingo, 30/11 às 14:00</strong>
   → 🚇 Metro A: San Giovanni (3 paragens de Termini)
   → 💡 Depois do Coliseu, antes do Bairro Judeu!

<strong>🎯 TODAS AS 4 PORTAS SANTAS RESERVADAS! 🎉</strong>

Os vossos sobrinhos já trataram de tudo! Têm as 4 Basílicas Papais reservadas. Cada uma tem uma reserva específica na app Jubilee:

• <strong>Raul e Marisa</strong>: Verifiquem a app Jubilee (têm códigos Constantino&63)
• <strong>Horários marcados</strong>: Sexta 15h, Sábado 15h e 17h, Domingo 14h
• <strong>É só aparecer</strong> no horário indicado!

<strong>💡 Dica Importante:</strong>
Descarreguem a <strong>App Jubilee 2025</strong> antes de partir! Lá têm todas as reservas, códigos QR, e informações sobre as celebrações.

<strong>Como organizar os dias:</strong>
• <strong>Sexta (28/11)</strong>: São Paulo Extramuros às 15h (podem encaixar de manhã ou tarde)
• <strong>Sábado (29/11)</strong>: São Pedro às 15h + Santa Maria Maior às 17h ✅
• <strong>Domingo (30/11)</strong>: São João de Latrão às 14h (entre Coliseu e Bairro Judeu)

<strong>🚪 Como Atravessar a Porta Santa (Passo a Passo):</strong>

1️⃣ <strong>Preparação Interior:</strong>
   • Momento de silêncio e recolhimento
   • Pensem nas vossas intenções e conversão
   • Peçam perdão pelos pecados

2️⃣ <strong>Ao Atravessar:</strong>
   • Façam o sinal da cruz
   • Entrem com devoção e reverência
   • Podem rezar: <em>"Por esta Porta Santa, eu entro como peregrino, deixando para trás o pecado e caminhando para a santidade. Senhor, renova a minha fé!"</em>
   • Ou simplesmente rezem um Pai Nosso enquanto atravessam

3️⃣ <strong>Depois de Entrar:</strong>
   • Ajoelhem-se e façam uma breve oração
   • Agradeçam a Deus pela graça do Jubileu
   • Visitem o Santíssimo Sacramento (se disponível)

4️⃣ <strong>Para a Indulgência Plenária (opcional mas recomendado):</strong>
   • ✅ Sacramento da Confissão (alguns dias antes ou depois)
   • ✅ Comunhão Eucarística
   • ✅ Oração pelas intenções do Papa (Pai Nosso + Ave Maria)
   • ✅ Desapego de todo o pecado, mesmo venial

<strong>💡 Nota:</strong> Não é obrigatório fazer tudo isto para atravessar a Porta Santa — o mais importante é a disposição do coração! A indulgência plenária é um dom adicional para quem deseja.

Lembrem-se: <strong>as Portas Santas fecham a 28 de Dezembro de 2025</strong>. Vocês vão em Novembro — timing perfeito!

Esta é uma oportunidade ÚNICA! Vão conseguir atravessar as 4 Portas Santas e receber as graças do Ano Jubilar. Nós, vossos sobrinhos, rezamos para que vivam esta experiência ao máximo. Que cada porta atravessada vos aproxime mais de Cristo! 🚪✝️🙏</div>
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
            intro: "Queridas tias, o vosso primeiro dia em Roma! Depois de uma madrugada cedo (o voo parte às 05:55 de Lisboa), vão chegar à Cidade Eterna pela manhã. Preparámos este dia com um programa especial: chegada tranquila, visita à Basílica de São Paulo Extramuros às 15h (primeira Porta Santa!), e um Free Walking Tour às 19h que vos vai mostrar os encantos de Roma. No final do tour, passeio pela Fontana di Trevi iluminada. Respirem fundo: estão em Roma! 💙",
            summary: { locations: 6, walking: "5km", budget: "€30-50", tickets: 0, holyDoors: 1 },
            schedule: [
                { time: "05:55", title: "Partida de Lisboa", desc: "Voo Ryanair - Aeroporto de Lisboa", religious: "✝️ Que São Rafael, padroeiro dos viajantes, vos proteja!", icon: "✈️" },
                { time: "10:05", title: "Chegada ao Aeroporto Fiumicino", desc: "Voo aterra - Leonardo da Vinci International", religious: "✝️ Chegam à cidade dos 7 montes, onde São Pedro e São Paulo foram martirizados!", icon: "📍" },
                { time: "11:00-12:00", title: "Transfer para o Hotel", desc: "Comboio Leonardo Express + caminhada", mapLink: "https://www.google.com/maps/dir/Fiumicino+-+Aeroporto+Internazionale+Leonardo+da+Vinci,+Fiumicino/Hotel+Quirinale,+Via+Nazionale,+7,+00184+Roma", details: ["✅ Leonardo Express: €14/pessoa até Termini (32min)", "✅ Depois: 8min a pé até ao hotel (650m)", "Alternativa: Carrinha privada €120-150", "Táxis: 2-3 táxis a €50 cada = €100-150"], tip: "💡 O comboio é rápido, direto e económico!", icon: "🚆" },
                { time: "12:00", title: "Chegada ao Hotel Quirinale", desc: "Via Nazionale, 7 - Deixar malas na recepção", details: ["⏰ Check-in: às 17:00 (podem deixar malas guardadas antes)", "Usar as instalações do hotel enquanto esperam"], religious: "✝️ Próximo da Basílica de Santa Maria Maggiore, uma das 4 basílicas papais!", icon: "🏨" },
                { time: "12:30-13:30", title: "Almoço Perto do Hotel", restaurants: ["Regoli - Via dello Statuto, 60 (5min) - Pastelaria histórica desde 1916", "Ou qualquer restaurante típico na Via Nazionale"], icon: "🍽️" },
                { time: "14:00", title: "🚇 Ir para São Paulo Extramuros", desc: "Metro Linha B: Termini → Basilica San Paolo", mapLink: "https://www.google.com/maps/dir/Hotel+Quirinale/Basilica+Papale+San+Paolo+fuori+le+Mura", details: ["Metro B de Termini: 6 paragens, 15min", "Bilhete: €1.50"], icon: "🚇" },
                { time: "15:00", title: "🚪 Basílica de São Paulo Extramuros", desc: "⚠️ RESERVA MARCADA - Raul", details: ["👤 Reserva: Raul (App Jubilee)", "🔑 Código: Constantino&63", "🚪 PRIMEIRA PORTA SANTA! 1/4 completada"], religious: "✝️ Construída sobre o túmulo de São Paulo! Segunda maior basílica depois de São Pedro. O claustro é de uma beleza indescritível!", highlights: ["Porta Santa - atravessar para indulgência plenária!", "Túmulo de São Paulo sob o altar", "Mosaicos dourados bizantinos", "Claustro medieval com colunas decoradas"], tip: "💡 Esta é a mais afastada das 4 basílicas - começamos por ela!", icon: "⛪" },
                { time: "16:30", title: "🚌 Regressar ao Centro", desc: "Bus 23 até Boca della Verità / Monumento Vittorio Emanuele", mapLink: "https://www.google.com/maps/dir/Basilica+San+Paolo/Bocca+della+Verita", details: ["Bus 23: para na Boca della Verità", "Ou Metro B de volta + Bus"], icon: "🚌" },
                { time: "17:00", title: "Check-in no Hotel", desc: "Subir aos quartos, refrescar-se rapidamente", icon: "🏨" },
                { time: "17:30-18:30", title: "Tempo Livre / Descanso", desc: "Descansar ou passear pela Via Nazionale", details: ["(Opcional) Igreja de Santo Inácio de Loyola - 900m, 12min a pé", "(Opcional) Basílica de Santa Maria Sobre Minerva - perto do Panteão"], tip: "💡 Podem descansar ou explorar perto do hotel antes do tour!", icon: "☕" },
                { time: "19:00", title: "🚶 Free Walking Tour MARCADO", desc: "Tour guiado gratuito por Roma (gorjeta ao guia no final)", mapLink: "https://www.civitatis.com/pt/roma/free-tour-roma/", details: ["📍 Início: Santa Maria del Popolo, Piazza del Popolo", "📍 Fim: Piazza Navona (cerca 21:00)", "⏱️ Duração: ~2 horas", "✅ Reserva já feita!", "💰 Grátis (gorjeta sugerida €10-15/pessoa)"], highlights: ["Piazza del Popolo", "Via del Corso", "Piazza di Spagna (opcional)", "Fontana di Trevi (pode passar)", "Piazza Navona"], tip: "💡 O guia vai dar dicas fantásticas sobre Roma e restaurantes!", icon: "🚶" },
                { time: "21:00", title: "Jantar na Piazza Navona", restaurants: ["🍝 Tre Scalini - famoso pelo tartufo gelado", "🍝 Cul de Sac - enoteca com boa comida", "🍝 Estabelle di Bacco", "🍝 Ou onde o guia recomendar!"], tip: "💡 A Piazza Navona à noite é mágica!", icon: "🍽️" },
                { time: "22:30", title: "🌙 Fontana di Trevi à Noite", desc: "Caminhada de Piazza Navona até Trevi (10min, 700m)", mapLink: "https://www.google.com/maps/dir/Piazza+Navona/Trevi+Fountain", religious: "✝️ Lancem a moeda: uma moeda = voltam a Roma; duas = novo amor; três = casamento!", tip: "💡 À noite está lindamente iluminada e com menos gente! Momento perfeito para fotos.", icon: "⛲" },
                { time: "23:30", title: "🏨 Regresso ao Hotel", desc: "15min a pé de Trevi até hotel. Descansar bem - amanhã é dia cheio no Vaticano!", icon: "🚌" }
            ]
        },
        {
            title: "Sábado - Vaticano",
            fullDate: "Sábado, 29 Novembro 2025",
            intro: "Sábado no Vaticano — um dia inteiro dedicado ao coração da fé católica! Começam cedo com os Museus Vaticano e a Capela Sistina, depois a magnífica Basílica de São Pedro às 15h (segunda Porta Santa!), seguida de Santa Maria Maior às 17h (terceira Porta Santa!). No final, jantar em Trastevere. Dia CHEIO e espiritual! ✝️",
            summary: { locations: 5, walking: "8km", budget: "€50-80", tickets: 1, holyDoors: 2 },
            schedule: [
                { time: "07:00", title: "Pequeno-almoço", desc: "Começar cedo!", icon: "☕" },
                { time: "07:45", title: "Ir para o Vaticano", desc: "Metro Linha A: Repubblica → Ottaviano-San Pietro", mapLink: "https://www.google.com/maps/dir/Hotel+Quirinale/Vatican+Museums", details: ["Caminhar 2min até Metro Repubblica (200m do hotel)", "Metro Linha A (vermelha) - 4 paragens, 10min", "Descer em Ottaviano-San Pietro", "Caminhar 7min até Museus Vaticano"], tip: "🎫 Bilhete metro: €1.50 (válido 100min)", religious: "✝️ Vão visitar o menor país do mundo - 0,44 km² de território sagrado!", icon: "🚆" },
                { time: "08:30-12:00", title: "🎨 Museus do Vaticano + Capela Sistina", desc: "Entrada reservada", mapLink: "https://www.museivaticani.va", religious: "✝️ Capela Sistina - onde se elegem os Papas! Michelangelo pintou o tecto em 4 anos!", tip: "💡 MUITA caminhada (7km dentro dos museus!). Silêncio absoluto na Capela Sistina!", highlights: ["Escadaria em espiral de Bramante", "Salas de Rafael", "Capela Sistina - tecto de Michelangelo", "Juízo Final de Michelangelo"], icon: "🎨" },
                { time: "12:00-13:00", title: "Almoço ao Lado do Vaticano", restaurants: ["🍝 Pastasciutta - recomendação especial!", "🍝 Ristorante dei Musei - Via Borgo Pio, 162", "🍝 Tre Pupazzi - Borgo Pio, 183", "🍕 Pizzarium (Bonci) - Via della Meloria, 43 - Pizza al taglio famosa!"], icon: "🍽️" },
                { time: "13:00-15:00", title: "Tempo Livre / Explorar", desc: "Opções enquanto esperam pela reserva das 15h", highlights: ["🏰 Castelo de Santo Ângelo (só passar por fora)", "⛪ Igreja de Santo Inácio de Loyola", "⛪ Basílica de Santa Maria Sobre Minerva", "☕ Café italiano"], tip: "💡 Não se afastem muito - têm reserva às 15h em São Pedro!", icon: "☕" },
                { time: "15:00", title: "🚪 Basílica de São Pedro", desc: "⚠️ RESERVA MARCADA - Marisa", details: ["👤 Reserva: Marisa (App Jubilee)", "🔑 Código: Constantino&63", "🚪 SEGUNDA PORTA SANTA! 2/4 completadas"], highlights: ["🚪 Porta Santa - atravessar para Indulgência Plenária!", "Pietà de Michelangelo", "Baldaquino de Bernini - 29m de altura", "Túmulo de São Pedro - sob o altar principal", "Estátua de São Pedro - beijar o pé (já gasto!)", "Cúpula (opcional subir - 551 degraus ou elevador + 320)", "Praça de São Pedro - colonata de Bernini"], religious: "✝️ A maior igreja do mundo (136m de altura da cúpula). Construída sobre o túmulo de São Pedro, crucificado de cabeça para baixo no Circo de Nero (64 d.C.). Levou 120 anos a construir (1506-1626).", tip: "💡 Subir à cúpula só para quem tiver energia! 👗 CÓDIGO VESTUÁRIO RIGOROSO: Ombros e joelhos cobertos!", icon: "⛪" },
                { time: "16:30", title: "🚇 Ir para Santa Maria Maior", desc: "Metro A: Ottaviano → Termini, depois 10min a pé", mapLink: "https://www.google.com/maps/dir/St.+Peter's+Basilica/Basilica+Papale+Santa+Maria+Maggiore", details: ["Metro A: Ottaviano → Termini (4 paragens)", "Ou Metro A: Ottaviano → Cavour (mais perto)", "10min a pé até à basílica"], icon: "🚇" },
                { time: "17:00", title: "🚪 Basílica de Santa Maria Maior", desc: "TERCEIRA PORTA SANTA!", religious: "✝️ Uma das 4 basílicas papais! Dedicada à Virgem Maria. Contém relíquias do presépio de Jesus!", details: ["🚪 TERCEIRA PORTA SANTA! 3/4 completadas", "💡 Papa Francisco celebra aqui frequentemente!"], highlights: ["Porta Santa - atravessar!", "Mosaicos do século V", "Tecto decorado com primeiro ouro vindo da América", "Capela Sistina (não confundir com a do Vaticano!)", "Relíquias do Presépio de Belém"], tip: "💡 Pertinho do hotel! Podem voltar a pé (900m, 12min)", icon: "⛪" },
                { time: "18:00", title: "Regresso ao Hotel", desc: "12min a pé (900m) - podem descansar!", mapLink: "https://www.google.com/maps/dir/Basilica+Santa+Maria+Maggiore/Hotel+Quirinale", tip: "Foi um dia MUITO intenso! 2 Portas Santas num dia! Descansem bem.", icon: "🚶" },
                { time: "18:00-19:00", title: "Descanso no Hotel", desc: "Recuperar energias, trocar de roupa, refrescar-se", icon: "☕" },
                { time: "19:00", title: "🚇 Ir para Trastevere", desc: "Metro + Bus ou Táxi", mapLink: "https://www.google.com/maps/dir/Hotel+Quirinale/Trastevere", details: ["Metro A: Repubblica → Piramide, depois Bus 8 ou Tram 8", "Ou táxi (mais fácil) ~€15"], icon: "🚇" },
                { time: "19:30", title: "Jantar em Trastevere", desc: "Bairro boémio, atmosfera autêntica de Roma", restaurants: ["🍝 Da Enzo al 29 - ⭐⭐⭐ RESERVAR!", "🍝 Taverna Trilussa - Bom para grupos", "🍝 Tonnarello - Cacio e Pepe na roda de queijo!", "🍝 Flavio al Velavevodetto - Carbonara top!"], tip: "💡 Trastevere à noite é mágico! Ruas de pedra, música ao vivo, ambiente fantástico!", icon: "🍽️" },
                { time: "22:00", title: "🏨 Regresso ao Hotel", desc: "Táxi ou transporte público. Descansar - amanhã é outro dia cheio!", icon: "🚌" }
            ]
        },
        {
            title: "Domingo - Roma Clássica",
            fullDate: "Domingo, 30 Novembro 2025",
            intro: "Domingo em Roma — um dia dedicado aos tesouros clássicos da cidade! Começam com a Fontana di Trevi e o famoso croissant de pistachio, depois visitam marcos icónicos: Escadaria Espanhola, Campidoglio, Campo dei Fiori, Boca della Verità. Às 14h, a quarta e última Porta Santa em São João de Latrão! Depois, o Panteão e descanso. À noite, jantar no Bairro Judeu. Dia perfeito de Roma! ⛲",
            summary: { locations: 8, walking: "10km", budget: "€40-70", tickets: 1, holyDoors: 1 },
            schedule: [
                { time: "08:30", title: "Pequeno-almoço", icon: "☕" },
                { time: "09:00", title: "OPÇÃO A: ⛪ Missa Diária em São Pedro", desc: "Basílica de São Pedro - Para quem preferir", mapLink: "https://www.google.com/maps/dir/Hotel+Quirinale/St.+Peter's+Basilica", details: ["🚇 Metro A: Repubblica → Ottaviano (15min)", "Missa diária às 09:00 na Basílica", "Experiência espiritual única", "Depois podem juntar-se ao grupo no Campidoglio (10:30)"], religious: "✝️ Participar na missa diária na maior igreja do mundo! Momento espiritual profundo antes de explorar a cidade.", tip: "💡 OPCIONAL - para quem quiser começar o dia com oração na Basílica de São Pedro. O resto do grupo vai para Fontana di Trevi.", icon: "⛪" },
                { time: "09:00", title: "OPÇÃO B: ⛲ Fontana di Trevi + Croissant", desc: "L'Antico Forno di Fontana di Trevi", mapLink: "https://www.google.com/maps/dir/Hotel+Quirinale/Trevi+Fountain", details: ["15min a pé do hotel (1.3km)", "🥐 Croissant de pistachio na padaria ao lado da fonte!", "📍 L'Antico Forno di Fontana di Trevi - Via della Panetteria, 37"], religious: "✝️ A fonte celebra a chegada da água do aqueduto Acqua Vergine. Lancem a moeda com a mão direita por cima do ombro esquerdo: 1 moeda = voltam a Roma; 2 = novo amor; 3 = casamento!", highlights: ["Fontana di Trevi - a fonte mais famosa do mundo!", "Croissant de pistachio no L'Antico Forno 🥐", "Lançar a moeda na fonte"], tip: "💡 De manhã está mais tranquilo que à noite! Esta é a opção principal do grupo.", icon: "⛲" },
                { time: "09:45", title: "🪜 Escadaria Espanhola", desc: "Piazza di Spagna - 700m de Trevi (9min a pé)", mapLink: "https://www.google.com/maps/dir/Trevi+Fountain/Spanish+Steps", highlights: ["135 degraus do século XVIII", "Igreja Trinità dei Monti no topo", "Barcaccia (fonte em forma de barco) - Bernini"], tip: "💡 Não podem sentar nem comer nos degraus - é proibido e multam!", icon: "📸" },
                { time: "10:30", title: "Monumento a Vittorio Emanuele + Campidoglio", desc: "1.5km da Escadaria (20min a pé ou Bus)", mapLink: "https://www.google.com/maps/dir/Spanish+Steps/Piazza+Venezia", highlights: ["Altare della Patria - monumento enorme branco", "Praça do Capitólio - desenhada por Michelangelo", "Estátua equestre de Marco Aurélio", "Vista panorâmica de Roma"], tip: "💡 Podem subir ao terraço do monumento (elevador €10) para vista 360°", icon: "📸" },
                { time: "11:30", title: "Campo dei Fiori", desc: "Mercado histórico + praça vibrante", mapLink: "https://www.google.com/maps/dir/Piazza+Venezia/Campo+de'+Fiori", details: ["800m do Campidoglio (10min a pé)", "Mercado de manhã (segunda a sábado)", "Domingo: a praça está aberta mas sem mercado"], highlights: ["Estátua de Giordano Bruno (filósofo queimado aqui)", "Praça rodeada de bares e restaurantes", "Ambiente autêntico romano"], tip: "💡 Ao domingo não há mercado, mas a praça tem ambiente!", icon: "📍" },
                { time: "12:00", title: "👄 Boca della Verità", desc: "Bocca della Verità - Santa Maria in Cosmedin", mapLink: "https://www.google.com/maps/dir/Campo+de'+Fiori/Bocca+della+Verita", religious: "✝️ Igreja de Santa Maria in Cosmedin (século VIII)", highlights: ["Boca della Verità - máscara de mármore", "Lenda: morde a mão de quem mente!", "Interior da igreja muito bonito"], tip: "💡 Pode haver fila para tirar foto - vale a pena!", icon: "📸" },
                { time: "12:45-13:45", title: "Almoço Perto", restaurants: ["🍝 Li Rioni - Via dei Santi Quattro, 24", "🍝 Terre e Domus - Foro di Traiano, 82-84", "🍝 Flavio al Velavevodetto - Testaccio (um pouco mais longe mas excelente!)"], icon: "🍽️" },
                { time: "14:00", title: "🚪 São João de Latrão", desc: "⚠️ QUARTA E ÚLTIMA PORTA SANTA!", mapLink: "https://www.google.com/maps/dir/Bocca+della+Verita/Archbasilica+of+Saint+John+Lateran", details: ["🚇 Metro A: Manzoni ou San Giovanni (10min)", "Ou táxi (~€10)", "🚪 QUARTA PORTA SANTA! 4/4 COMPLETADAS! 🎉"], religious: "✝️ A Catedral de Roma! A igreja do Papa (não São Pedro!). 'Mãe de todas as igrejas do mundo'. Foi a primeira basílica papal, construída por Constantino em 324 d.C.!", highlights: ["🚪 Porta Santa - ÚLTIMA! Completam as 4!", "Fachada monumental", "Interior dourado magnífico", "Claustro medieval", "Escadaria Santa (Scala Santa) - as escadas que Jesus subiu"], tip: "💡 PARABÉNS! Completaram as 4 Portas Santas do Jubileu! Graça extraordinária! 🙏✝️", icon: "⛪" },
                { time: "15:30", title: "🚇 Ir para o Panteão", desc: "Metro A: San Giovanni → Barberini, depois caminhar", mapLink: "https://www.google.com/maps/dir/San+Giovanni+in+Laterano/Pantheon", details: ["Metro A: 15min", "Ou táxi direto (~€12)"], icon: "🚇" },
                { time: "16:00", title: "🏛️ Panteão", desc: "Entrada €5", mapLink: "https://www.pantheonroma.com/", religious: "✝️ Templo pagão convertido em igreja cristã em 609 d.C. (Santa Maria ad Martyres)", highlights: ["Cúpula perfeita - maior cúpula não reforçada do mundo!", "Óculo central (abertura no tecto) - só fonte de luz", "Túmulo de Rafael Sanzio", "Túmulos dos reis de Itália"], tip: "💡 A arquitectura é PERFEITA. Ficam em silêncio a admirar!", icon: "🏛️" },
                { time: "17:00", title: "🏨 Regresso ao Hotel", desc: "20min a pé ou táxi", mapLink: "https://www.google.com/maps/dir/Pantheon/Hotel+Quirinale", tip: "Foi um dia INCRÍVEL! Completaram as 4 Portas Santas! Descansem bem!", icon: "🚶" },
                { time: "17:00-19:00", title: "Descanso no Hotel", desc: "Recuperar energias. Merecido após dia cheio!", icon: "☕" },
                { time: "19:00", title: "🚶 Ir para o Bairro Judeu", desc: "Táxi (~€10) ou caminhar 25min", mapLink: "https://www.google.com/maps/dir/Hotel+Quirinale/Jewish+Ghetto+Rome", religious: "✝️ Comunidade judaica mais antiga da Europa Ocidental (desde 161 a.C.)!", icon: "🚶" },
                { time: "19:30", title: "Jantar no Bairro Judeu", desc: "Especialidades judaico-romanas", restaurants: ["🍝 Nonna Betta - ⭐⭐⭐ Carciofi alla Giudia (alcachofras fritas) OBRIGATÓRIO!", "🍝 Ba'Ghetto - Kosher, terraço romântico", "🍝 Sora Margherita - Sem placa! Procurem, reservar!", "🍝 Piperno - Histórico desde 1860"], highlights: ["Carciofi alla Giudia (alcachofras fritas crocantes)", "Fiori di zucca (flores de abóbora fritas)", "Coda alla vaccinara (rabo de boi estufado)"], tip: "💡 O Bairro Judeu à noite é lindo! Sinagoga iluminada, ruas estreitas, ambiente especial!", icon: "🍽️" },
                { time: "21:30", title: "🏨 Regresso ao Hotel", desc: "Última noite em Roma - descansem bem!", religious: "✝️ Hoje completaram as 4 Portas Santas! Uma bênção única! 🙏", icon: "🚌" }
            ]
        },
        {
            title: "Segunda - Roma Antiga + Partida",
            fullDate: "Segunda-feira, 1 Dezembro 2025",
            intro: "Último dia em Roma! Manhã dedicada à Roma Antiga: Coliseu, Fórum Romano e Monte Palatino - o que estava planeado para domingo. Depois almoço e partida às 14:45 para o aeroporto de carrinha. Voo às 17:55. Arrivederci, Roma! 🏛️✈️",
            summary: { locations: 3, walking: "4km", budget: "€30-50", tickets: 1, holyDoors: 0 },
            schedule: [
                { time: "07:30", title: "Pequeno-almoço", icon: "☕" },
                { time: "08:00", title: "Check-out do Hotel", desc: "⏰ Check-out oficial: pode variar - confirmar com hotel", tip: "💡 Deixar malas guardadas na recepção. Vão buscar depois do Coliseu!", icon: "🏨" },
                { time: "08:30", title: "🚇 Ir para o Coliseu", desc: "Metro Linha B ou caminhar", mapLink: "https://www.google.com/maps/dir/Hotel+Quirinale/Colosseum", details: ["METRO: Termini → Colosseo (2 paragens, 3min) - €1.50", "A PÉ: 2km, 25min descida pela Via dei Fori Imperiali"], icon: "🚆" },
                { time: "09:00-11:30", title: "🏛️ Coliseu + Fórum Romano + Palatino", desc: "Entrada reservada", mapLink: "https://parcocolosseo.it/", religious: "✝️ Palco do martírio de milhares de cristãos. Por isso há uma cruz dentro do Coliseu!", highlights: ["🏛️ Coliseu - anfiteatro flaviano (70-80 d.C.)", "Arena dos gladiadores - capacidade 50.000 espectadores", "Hipogeu - corredores subterrâneos dos gladiadores", "🏛️ Fórum Romano - centro político e social da Roma Antiga", "Templo de Vesta", "Via Sacra - rua principal", "🏛️ Monte Palatino - colina dos imperadores", "Casa de Augusto", "Vistas incríveis sobre o Fórum"], tip: "💡 Comecem pelo Coliseu, depois Fórum, depois Palatino. É muita caminhada!", icon: "🏛️" },
                { time: "11:45-12:45", title: "Almoço Perto do Coliseu", restaurants: ["🍝 Li Rioni - Via dei Santi Quattro, 24", "🍝 Terre e Domus - Foro di Traiano, 82-84", "🍝 La Licata - Via del Colosseo, 16", "🍝 Ou gelado + panini ligeiro se tiverem pouco tempo"], tip: "⚠️ Não demorem - têm que estar no hotel às 13:30!", icon: "🍽️" },
                { time: "13:00", title: "🚇 Regresso ao Hotel", desc: "Metro ou a pé. Buscar malas!", mapLink: "https://www.google.com/maps/dir/Colosseum/Hotel+Quirinale", details: ["Metro B: Colosseo → Termini (2 paragens)", "Ou a pé: 2km, 25min"], icon: "🚆" },
                { time: "13:30-14:30", title: "No Hotel - Preparação Final", desc: "Buscar malas, usar WC, última verificação", tip: "💡 Confirmar que têm tudo: passaportes, bilhetes, carregadores!", icon: "🏨" },
                { time: "14:30-14:45", title: "🚐 Partida para o Aeroporto", desc: "Carrinha alugada (9 lugares)", details: ["✅ Carrinha privada do hotel até Fiumicino", "Duração: ~35-45 minutos (dependendo do trânsito)", "Confortável e porta-a-porta para o grupo"], tip: "💡 Muito mais prático que comboio com todo o grupo e malas!", religious: "✝️ Levem a bênção das 4 Portas Santas convosco! 🙏", icon: "🚐" },
                { time: "15:15-15:30", title: "Chegada ao Aeroporto Fiumicino", desc: "Leonardo da Vinci International Airport", icon: "✈️" },
                { time: "15:30-17:30", title: "Check-in e Segurança", desc: "Tempo para check-in Ryanair, segurança, duty-free", tip: "💡 Ryanair: check-in pode ser feito online antes. Embarque 17:25!", icon: "📍" },
                { time: "17:55", title: "✈️ Partida para Lisboa", desc: "Voo Ryanair FCO-LIS", religious: "✝️ Levam no coração: 4 Portas Santas, a bênção do Papa, e memórias eternas!", icon: "✈️" },
                { time: "20:05", title: "🛬 Chegada a Lisboa", desc: "Aeroporto Humberto Delgado", religious: "✝️ Com o coração cheio de bênçãos e fé renovada! Que experiência incrível! 🙏❤️", tip: "💡 Parabéns! Completaram a peregrinação do Ano Jubilar 2025! 🎉", icon: "🇵🇹" }
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

        <div class="gastro-section" style="background: linear-gradient(to right, #fef3c7, #fde68a); border-left-color: #f59e0b;">
            <div class="gastro-header">
                <span style="font-size: 32px;">🥐</span>
                <h3 class="gastro-title" style="color: #92400e;">Croissant de Pistacchio</h3>
            </div>
            <div class="gastro-card">
                <h4 class="gastro-card-title" style="color: #f59e0b;">⭐⭐⭐ L'Antico Forno di Fontana di Trevi</h4>
                <p class="gastro-card-address">📍 Via della Panetteria, 37 (ao lado da Fontana di Trevi)</p>
                <p class="gastro-card-hours">🕒 7:00-20:00 | 💰 €3-5</p>
                <p class="gastro-card-desc">A melhor padaria perto da Fontana di Trevi! O croissant de pistacchio (cornetto al pistacchio) é uma especialidade italiana que têm ABSOLUTAMENTE de provar. Crocante por fora, macio por dentro, recheado com creme de pistacho siciliano.</p>
                <p class="gastro-card-tip">💡 Incluído no itinerário de Domingo às 09:00 - vão à Fontana di Trevi e param nesta padaria!</p>
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

        <div class="info-section" style="background: #dbeafe; border-left-color: #3b82f6;">
            <h3 class="info-title" style="color: #1e40af;">📱 Apps para Descarregar ANTES da Viagem</h3>
            <div class="info-content">
                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #3b82f6; margin-bottom: 8px; font-size: 14px;">✈️ Ryanair App</h4>
                    <p style="font-size: 12px; color: #374151; margin-bottom: 12px;">Descarreguem a app da Ryanair para receber os bilhetes de embarque digitais.</p>

                    <div style="background: #fef2f2; padding: 10px; border-radius: 4px; margin-bottom: 8px; border-left: 4px solid #dc2626;">
                        <p style="font-size: 11px; color: #991b1b; font-weight: bold; margin-bottom: 4px;">📋 CÓDIGO DE RESERVA:</p>
                        <p style="font-size: 18px; color: #dc2626; font-weight: bold; letter-spacing: 2px; font-family: monospace; margin: 0;">QQZM2F</p>
                    </div>

                    <div style="background: #fff7ed; padding: 10px; border-radius: 4px; margin-bottom: 8px; border-left: 4px solid #f97316;">
                        <p style="font-size: 11px; color: #c2410c; font-weight: bold; margin-bottom: 4px;">📧 EMAIL PARA IMPORTAR:</p>
                        <p style="font-size: 16px; color: #ea580c; font-weight: bold; font-family: monospace; margin: 0;">Saraalkaim@gmail.com</p>
                    </div>

                    <p style="font-size: 11px; color: #6b7280; margin-bottom: 8px;">Usem o código e email acima para adicionar a reserva na app Ryanair</p>
                    <p style="font-size: 12px; color: #3b82f6; margin: 0;">💡 Façam check-in online 48h antes do voo (26 Nov às 05:55)!</p>
                </div>

                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #3b82f6; margin-bottom: 4px; font-size: 14px;">✝️ Jubilee 2025 App</h4>
                    <p style="font-size: 12px; color: #374151;">App oficial do Ano Jubilar com eventos, missas especiais e informações sobre as celebrações nos dias da vossa visita.</p>
                    <p style="font-size: 12px; color: #3b82f6; margin-top: 4px;">💡 Procurem "Jubilee 2025" na App Store ou Google Play</p>
                </div>

                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 8px;">
                    <h4 style="font-weight: bold; color: #3b82f6; margin-bottom: 4px; font-size: 14px;">🗺️ Google Maps Offline</h4>
                    <p style="font-size: 12px; color: #374151;">Descarreguem o mapa de Roma offline para usar sem internet ou roaming!</p>
                    <p style="font-size: 12px; color: #6b7280; margin-top: 4px;">Como fazer:</p>
                    <p style="font-size: 12px; color: #6b7280;">1. Abrir Google Maps</p>
                    <p style="font-size: 12px; color: #6b7280;">2. Procurar "Roma"</p>
                    <p style="font-size: 12px; color: #6b7280;">3. Clicar no nome da cidade em baixo</p>
                    <p style="font-size: 12px; color: #6b7280;">4. Selecionar "Descarregar"</p>
                    <p style="font-size: 12px; color: #3b82f6; margin-top: 4px;">💡 Façam isto antes de sair de Portugal, com WiFi!</p>
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

                <div style="background: white; padding: 12px; border-radius: 4px; margin-bottom: 12px;">
                    <h4 style="font-weight: bold; color: #16a34a; margin-bottom: 4px; font-size: 14px;">💳 Pagamento Contactless nos Transportes</h4>
                    <div style="font-size: 12px;">
                        <p style="color: #374151; margin-bottom: 4px;">Boa notícia! Podem pagar diretamente com cartão nos validadores do metro e autocarros:</p>
                        <p>• ✅ Cartões de Portugal funcionam SEM custos adicionais</p>
                        <p>• ✅ Podem usar Revolut ou outros cartões digitais</p>
                        <p>• 💳 Basta aproximar o cartão no validador (contactless)</p>
                        <p style="color: #16a34a; margin-top: 8px;">💡 Prático e rápido - não precisam comprar bilhetes físicos se não quiserem!</p>
                    </div>
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

// Scroll to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Swipe Gestures for Day Navigation
document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    // Minimum swipe distance (in pixels)
    const minSwipeDistance = 50;

    content.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    content.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeDistanceX = touchEndX - touchStartX;
        const swipeDistanceY = touchEndY - touchStartY;

        // Check if horizontal swipe is more significant than vertical
        if (Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY)) {
            // Swipe left - go to next day
            if (swipeDistanceX < -minSwipeDistance && activeDay < 6) {
                setActiveDay(activeDay + 1);
            }
            // Swipe right - go to previous day
            else if (swipeDistanceX > minSwipeDistance && activeDay > 0) {
                setActiveDay(activeDay - 1);
            }
        }
    }
});
