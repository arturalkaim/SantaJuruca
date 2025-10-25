// ============================================================================
// DATA.JS - Rome Travel Guide Data
// ============================================================================
// All content data for the Rome Jubilee Year 2025 travel guide
// Separated from logic (app.js) for better maintainability
// ============================================================================

// ============================================================================
// MAP ROUTES CONFIGURATION
// ============================================================================

export const dayRoutes = {
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

// ============================================================================
// INTRODUCTION CONTENT
// ============================================================================

export const introContent = {
    title: "Uma Viagem Especial ao Coração da Fé",
    sections: [
        {
            icon: "💙",
            title: "Como Tudo Começou",
            content: `Queridas tias,

Esta viagem começou com uma proposta muito especial dos vossos sobrinhos, que desejavam partilhar convosco uma experiência que marcou profundamente os seus corações: uma peregrinação a Roma e ao Vaticano neste Ano Jubilar tão significativo.

Depois de viverem esta experiência juntos este ano — nós, primos entre nós, num tempo de oração, renovação de fé e partilha que tocou cada um de forma única — sentimos que vocês, que têm a fé e a Igreja tão presentes nas vossas vidas, mereciam viver também este momento especial.`
        },
        {
            icon: "🎁",
            title: "O Presente dos Sobrinhos",
            content: `Mesmo não podendo acompanhar-vos nesta viagem (já tendo estado lá neste Jubileu), nós, vossos sobrinhos, quisemos oferecer-vos algo igualmente precioso: todo o planeamento, organização e preparação desta peregrinação.

Este guia é o fruto desse carinho — cada detalhe foi pensado para que a vossa viagem seja tranquila, segura e cheia de sentido espiritual. Das reservas aos caminhos, das igrejas aos momentos de oração, tudo foi preparado com dedicação para vocês.`
        },
        {
            icon: "✝️",
            title: "Um Ano Santo, Uma Graça Única",
            content: `O Ano Jubilar de 2025 é uma oportunidade verdadeiramente rara — acontece apenas de 25 em 25 anos. É um tempo de graça especial proclamado pelo Papa, onde os peregrinos que visitam Roma podem receber indulgências plenárias e renovar profundamente a sua fé.

Este não é apenas um passeio turístico, mas uma peregrinação ao centro da cristandade, aos lugares onde São Pedro e São Paulo deram a vida pela fé, onde os primeiros cristãos rezaram nas catacumbas, onde cada pedra conta uma história de dois mil anos de Igreja.`
        },
        {
            icon: "🙏",
            title: "O Espírito desta Peregrinação",
            content: `Enquanto caminham pelas ruas de Roma, pedimos que rezem também por nós, vossos sobrinhos, que preparámos esta viagem com tanto amor. Que cada igreja que visitarem, cada oração que fizerem, cada momento de silêncio diante da Pietá ou sob a cúpula de São Pedro seja uma forma de união na fé que nos une a todos.

Roma não é apenas a "Cidade Eterna" — é a nossa casa espiritual, o coração pulsante da Igreja universal. Que possam sentir esta pertença profunda e voltar renovadas na fé e na alegria.`
        },
        {
            icon: "🚪✝️",
            title: "🚪 O Desafio das 4 Portas Santas",
            content: `Este Ano Jubilar de 2025 oferece-vos uma graça única que só acontece de 25 em 25 anos: atravessar as **Portas Santas** das 4 Basílicas Papais Maiores de Roma!

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

Esta é uma oportunidade ÚNICA! Vão conseguir atravessar as 4 Portas Santas e receber as graças do Ano Jubilar. Nós, vossos sobrinhos, rezamos para que vivam esta experiência ao máximo. Que cada porta atravessada vos aproxime mais de Cristo! 🚪✝️🙏`
        },
        {
            icon: "📖",
            title: "Como Usar Este Guia",
            content: `Este guia foi elaborado com todo o cuidado para o vosso grupo de 9 pessoas. Cada dia está planeado ao minuto, com:

• Horários flexíveis mas realistas
• Opções de transporte com links diretos
• Restaurantes testados e recomendados
• Informação sobre bilhetes e reservas
• Contexto religioso e histórico de cada lugar
• Momentos de descanso pensados para o grupo

Não hesitem em adaptar conforme as vossas necessidades e energia. O importante é viverem esta experiência com o coração aberto e tranquilo.`
        },
        {
            icon: "ℹ️",
            title: "Informações Importantes",
            content: `⚠️ <strong>Ano Jubilar 2025:</strong> Roma espera 32 milhões de peregrinos! Por isso:
• Todas as reservas foram feitas com antecedência
• Os bilhetes online são obrigatórios (já indicados no guia)
• Alguns locais estarão mais cheios que o habitual
• A paciência e a oração são vossos melhores companheiros

🎒 <strong>O Que Levar:</strong>
• Sapatos muito confortáveis (muita caminhada!)
• Lenço ou xaile para cobrir ombros nas igrejas
• Garrafa de água reutilizável
• Medicação pessoal e seguro de viagem
• Fé, alegria e disponibilidade para Deus surpreender!`
        }
    ],
    closing: {
        icon: "💝",
        title: "Com Todo o Carinho e Fé",
        content: `Este guia é mais do que um planeamento — é um abraço à distância, um desejo profundo de que vivam algo tão bonito quanto nós vivemos, e uma forma de estarmos convosco, mesmo não estando fisicamente presentes.

Que São Pedro vos abra as portas do céu e do seu coração.
Que São Paulo vos dê a coragem da fé.
Que Maria, Mãe da Igreja, vos acompanhe em cada passo.

<strong>Boa viagem, queridas tias! Rezem por nós em Roma! 🙏</strong>

<em>Com carinho e fé,</em>
<em>Os vossos sobrinhos que vos amam</em> ❤️`
    }
};

// ============================================================================
// DAILY ITINERARIES
// ============================================================================

export const daysData = [
    // DAY 1 - Friday
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
    // DAY 2 - Saturday
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
    // DAY 3 - Sunday
    {
        title: "Domingo - Roma Clássica",
        fullDate: "Domingo, 30 Novembro 2025",
        intro: "Domingo em Roma — um dia dedicado aos tesouros clássicos da cidade! Começam com a Fontana di Trevi e o famoso croissant de pistachio, depois visitam marcos icónicos: Escadaria Espanhola, Campidoglio, Campo dei Fiori, Boca della Verità. Às 14h, a quarta e última Porta Santa em São João de Latrão! Depois, o Panteão e descanso. À noite, jantar no Bairro Judeu. Dia perfeito de Roma! ⛲",
        summary: { locations: 8, walking: "10km", budget: "€40-70", tickets: 1, holyDoors: 1 },
        schedule: [
            { time: "07:30", title: "Pequeno-almoço", icon: "☕" },
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
    // DAY 4 - Monday
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
            { time: "14:30-14:45", title: "🚐 Partida para o Aeroporto", desc: "Carrinha alugada (9 lugares)", details: ["Duração: ~35-45 minutos (dependendo do trânsito)"], religious: "✝️ Levem a bênção das 4 Portas Santas convosco! 🙏", icon: "🚐" },
            { time: "15:15-15:30", title: "Chegada ao Aeroporto Fiumicino", desc: "Leonardo da Vinci International Airport", icon: "✈️" },
            { time: "15:30-17:30", title: "Check-in e Segurança", desc: "Tempo para check-in Ryanair, segurança, duty-free", tip: "💡 Ryanair: check-in pode ser feito online antes. Embarque 17:25!", icon: "📍" },
            { time: "17:55", title: "✈️ Partida para Lisboa", desc: "Voo Ryanair FCO-LIS", religious: "✝️ Levam no coração: 4 Portas Santas, a bênção do Papa, e memórias eternas!", icon: "✈️" },
            { time: "20:05", title: "🛬 Chegada a Lisboa", desc: "Aeroporto Humberto Delgado", religious: "✝️ Com o coração cheio de bênçãos e fé renovada! Que experiência incrível! 🙏❤️", tip: "💡 Parabéns! Completaram a peregrinação do Ano Jubilar 2025! 🎉", icon: "🇵🇹" }
        ]
    }
];

// ============================================================================
// GASTRONOMY GUIDE DATA
// ============================================================================

export const gastronomyData = {
    title: "🍝 Guia Gastronómico de Roma",
    subtitle: "Os melhores lugares para comer, beber e saborear a verdadeira Roma!",
    sections: [
        {
            id: "gelato",
            icon: "🍦",
            title: "Gelatarias Imperdíveis",
            color: "#ec4899",
            places: [
                {
                    name: "Giolitti (desde 1900)",
                    rating: "⭐",
                    address: "📍 Via degli Uffici del Vicario, 40",
                    hours: "🕒 7:00-1:00",
                    price: "💰 €3-6",
                    description: "A gelataria mais antiga de Roma! Experimente o Crema Giolitti (receita secreta de 1900) e o pistacchio di Bronte.",
                    tip: "💡 Perto do Panteão - ideal para segunda de manhã!"
                },
                {
                    name: "Gelateria del Teatro",
                    rating: "⭐",
                    address: "📍 Via dei Coronari, 65",
                    hours: "🕒 10:30-22:00",
                    price: "💰 €3-5",
                    description: "Gelado artesanal feito à vista! Sabores criativos como ricota com figos, vinho tinto, e chocolate com pimenta.",
                    tip: ""
                }
            ]
        },
        {
            id: "tiramisu",
            icon: "🍰",
            title: "Os Melhores Tiramisus",
            color: "#f59e0b",
            places: [
                {
                    name: "Pompi - \"Il Regno del Tiramisù\"",
                    rating: "⭐⭐⭐",
                    address: "📍 Via della Croce, 82 (perto de Trevi)",
                    hours: "🕒 9:00-23:00",
                    price: "💰 €5-7",
                    description: "O MELHOR tiramisu de Roma! 6 variedades: clássico, pistacchio, morango, nutella, limão, chocolate branco.",
                    tip: "💡 Imperdível na sexta à noite após a Fontana di Trevi!"
                }
            ]
        },
        {
            id: "croissant",
            icon: "🥐",
            title: "Croissant de Pistacchio",
            color: "#f59e0b",
            places: [
                {
                    name: "L'Antico Forno di Fontana di Trevi",
                    rating: "⭐⭐⭐",
                    address: "📍 Via della Panetteria, 37 (ao lado da Fontana di Trevi)",
                    hours: "🕒 7:00-20:00",
                    price: "💰 €3-5",
                    description: "A melhor padaria perto da Fontana di Trevi! O croissant de pistacchio (cornetto al pistacchio) é uma especialidade italiana que têm ABSOLUTAMENTE de provar. Crocante por fora, macio por dentro, recheado com creme de pistacho siciliano.",
                    tip: "💡 Incluído no itinerário de Domingo às 09:00 - vão à Fontana di Trevi e param nesta padaria!"
                }
            ]
        },
        {
            id: "quattro-grandi",
            icon: "👑",
            title: "I Quattro Grandi - Os 4 Pratos de Roma",
            color: "#ca8a04",
            description: "TÊM que provar os 4 pratos típicos da cozinha romana!",
            dishes: [
                {
                    number: "1️⃣",
                    name: "Carbonara",
                    ingredients: "Ingredientes: Guanciale (bochecha de porco), ovos, pecorino romano, pimenta preta.",
                    warning: "⚠️ SEM NATAS! Nunca leva natas! A cremosidade vem dos ovos.",
                    where: "✅ Onde provar: Flavio al Velavevodetto, Roscioli, Armando al Pantheon"
                },
                {
                    number: "2️⃣",
                    name: "Cacio e Pepe",
                    ingredients: "Ingredientes: Apenas 3! Pecorino romano, pimenta preta, água da massa.",
                    warning: "💡 O mais simples, mas difícil de fazer. Tem que ser cremoso, não granulado.",
                    where: "✅ Onde provar: Tonnarello (na roda!), Flavio al Velavevodetto"
                },
                {
                    number: "3️⃣",
                    name: "Amatriciana",
                    ingredients: "Ingredientes: Guanciale, tomate, pecorino, vinho branco.",
                    warning: "💡 De Amatrice, cidade perto de Roma. Molho vermelho, picante.",
                    where: "✅ Onde provar: Flavio al Velavevodetto, Sora Margherita"
                },
                {
                    number: "4️⃣",
                    name: "Gricia",
                    ingredients: "Ingredientes: Guanciale, pecorino, pimenta preta.",
                    warning: "💡 \"Carbonara sem ovo\" ou \"Amatriciana sem tomate\" - a mãe de todas!",
                    where: "✅ Onde provar: Armando al Pantheon, Sora Margherita"
                }
            ],
            challenge: {
                title: "🎯 DESAFIO GASTRONÓMICO:",
                description: "Provem os 4 pratos durante a viagem! Carbonara na sexta, Cacio e Pepe no sábado, Amatriciana no domingo, Gricia na segunda!"
            }
        },
        {
            id: "cafes",
            icon: "☕",
            title: "Cafés Históricos",
            color: "#f59e0b",
            places: [
                {
                    name: "Sant'Eustachio Il Caffè",
                    rating: "⭐⭐⭐",
                    address: "📍 Piazza Sant'Eustachio, 82",
                    hours: "🕒 8:30-1:00",
                    price: "💰 €1.30 no balcão",
                    description: "O melhor café de Roma! Receita secreta desde 1938. Pedir: \"Gran Caffè\" (espresso cremoso).",
                    tip: "💡 OBRIGATÓRIO na segunda de manhã! Ficam a 2min do Panteão."
                }
            ],
            cafeTip: {
                title: "☕ Dica:",
                description: "Em Itália, café de pé no balcão custa €1-1.50. Sentado pode custar €5-10! Façam como os romanos: de pé, rápido, e a falar alto! 😄"
            }
        }
    ],
    tips: [
        {
            icon: "💰",
            title: "Preços:",
            description: "€ = até 15€ | €€ = 15-30€ | €€€ = 30€+"
        },
        {
            icon: "🍽️",
            title: "Reservas:",
            description: "Restaurantes com ⭐⭐⭐ = Reservar com DIAS de antecedência!"
        },
        {
            icon: "⏰",
            title: "Horários:",
            description: "Almoço: 12:30-15:00 | Jantar: 19:30-23:00"
        },
        {
            icon: "🧾",
            title: "Coperto:",
            description: "Taxa de €1-3 por pessoa (pão e serviço). É normal!"
        },
        {
            icon: "⚠️",
            title: "Armadilhas:",
            description: "Evitem restaurantes com fotos plastificadas na porta ou empregados a chamar na rua!"
        }
    ]
};

// ============================================================================
// GENERAL INFORMATION DATA
// ============================================================================

export const generalInfoData = {
    title: "ℹ️ Informações Gerais & Dicas Práticas",
    sections: [
        {
            id: "hotel",
            icon: "🏨",
            title: "Hotel Quirinale ⭐⭐⭐⭐",
            color: "#3b82f6",
            content: {
                address: "📍 Via Nazionale, 7, 00184 Roma",
                phone: "📞 +39 06 4707",
                highlights: [
                    "• 8min a pé da estação Termini",
                    "• 12min a pé de Santa Maria Maggiore (Porta Santa!)",
                    "• Metro Repubblica a 2min",
                    "• Rodeado de restaurantes e cafés"
                ],
                checkin: "⏰ Check-in: 14:30 | Check-out: 12:00",
                tip: "💡 Podem deixar malas guardadas antes/depois destes horários"
            }
        },
        {
            id: "apps",
            icon: "📱",
            title: "Apps para Descarregar ANTES da Viagem",
            color: "#3b82f6",
            apps: [
                {
                    name: "✈️ Ryanair App",
                    description: "Descarreguem a app da Ryanair para receber os bilhetes de embarque digitais.",
                    bookingCode: "QQZM2F",
                    email: "Saraalkaim@gmail.com",
                    note: "Usem o código e email acima para adicionar a reserva na app Ryanair",
                    tip: "💡 Façam check-in online 48h antes do voo (26 Nov às 05:55)!"
                },
                {
                    name: "✝️ Jubilee 2025 App",
                    description: "App oficial do Ano Jubilar com eventos, missas especiais e informações sobre as celebrações nos dias da vossa visita.",
                    tip: "💡 Procurem \"Jubilee 2025\" na App Store ou Google Play"
                },
                {
                    name: "🗺️ Google Maps Offline",
                    description: "Descarreguem o mapa de Roma offline para usar sem internet ou roaming!",
                    steps: [
                        "1. Abrir Google Maps",
                        "2. Procurar \"Roma\"",
                        "3. Clicar no nome da cidade em baixo",
                        "4. Selecionar \"Descarregar\""
                    ],
                    tip: "💡 Façam isto antes de sair de Portugal, com WiFi!"
                }
            ]
        },
        {
            id: "transport",
            icon: "🚇",
            title: "Transportes em Roma",
            color: "#16a34a",
            tickets: {
                title: "🎫 Bilhetes ATAC (Metro/Bus/Elétrico)",
                options: [
                    "• BIT (100 min): €1.50 - 1 viagem metro + ilimitado bus/elétrico",
                    "• 24 horas: €7",
                    "• 48 horas: €12.50",
                    "• 72 horas: €18"
                ],
                recommendation: "💡 Recomendação: Comprem bilhetes individuais (€1.50). Vão andar muito a pé!"
            },
            metro: {
                title: "🚇 Linhas de Metro Úteis",
                lines: [
                    "• Linha A (Vermelha): Repubblica ↔ Ottaviano (Vaticano)",
                    "• Linha B (Azul): Termini ↔ Colosseo"
                ],
                warning: "⚠️ Metro fecha à meia-noite (23:30 sexta/sábado)"
            },
            contactless: {
                title: "💳 Pagamento Contactless nos Transportes",
                description: "Boa notícia! Podem pagar diretamente com cartão nos validadores do metro e autocarros:",
                features: [
                    "• ✅ Cartões de Portugal funcionam SEM custos adicionais",
                    "• ✅ Podem usar Revolut ou outros cartões digitais",
                    "• 💳 Basta aproximar o cartão no validador (contactless)"
                ],
                tip: "💡 Prático e rápido - não precisam comprar bilhetes físicos se não quiserem!"
            }
        },
        {
            id: "safety",
            icon: "🔒",
            title: "Segurança & Cuidados",
            color: "#dc2626",
            pickpockets: {
                title: "⚠️ Carteiristas",
                description: "Roma tem muitos! Especialmente em:",
                locations: [
                    "• Metro (especialmente Linha A)",
                    "• Termini e zonas turísticas",
                    "• Coliseu, Vaticano, Trevi"
                ],
                solution: "Solução: Mochila à frente, carteiras em bolsos interiores, não mostrar telemóveis/câmaras desnecessariamente"
            },
            emergency: {
                title: "👮 Em Caso de Emergência",
                contacts: [
                    "• Polícia: 112 (número único europeu)",
                    "• Ambulância: 118",
                    "• Embaixada Portugal: +39 06 847 5481"
                ]
            }
        },
        {
            id: "practical-tips",
            icon: "💡",
            title: "Dicas Práticas",
            color: "#eab308",
            weather: {
                title: "🌡️ Clima em Novembro",
                info: [
                    "• Temperatura: 12-18°C",
                    "• Pode chover! Levem guarda-chuva pequeno",
                    "• Casaco necessário, especialmente à noite"
                ],
                tip: "💡 Vestuário em camadas + sapatos impermeáveis confortáveis!"
            },
            dressCode: {
                title: "👗 Código de Vestuário (Igrejas)",
                rules: [
                    "• Ombros cobertos (sem alças, sem decote)",
                    "• Joelhos cobertos (saias/calções abaixo do joelho)",
                    "• Chapéus têm que ser tirados"
                ],
                warning: "⚠️ São Pedro e Vaticano são RIGOROSOS! Negam entrada.",
                tip: "💡 Levem xaile/lenço grande para cobrir ombros"
            },
            water: {
                title: "💧 Água Potável",
                info: [
                    "• Roma tem 2500+ \"nasoni\" (fontes públicas)",
                    "• Água é potável e gratuita!",
                    "• Levem garrafa reutilizável"
                ],
                tip: "💡 Poupa €€€ e é ecológico!"
            },
            money: {
                title: "💶 Dinheiro",
                info: [
                    "• Euro (€) - mesma moeda!",
                    "• Cartões aceites na maioria dos lugares",
                    "• Tenham €50-100 em cash para emergências",
                    "• Tabacarias, gelados, cafés = às vezes só cash"
                ],
                tip: "💡 Multibanco em todo o lado, sem comissões UE"
            }
        },
        {
            id: "packing",
            icon: "🎒",
            title: "O Que Levar na Mala",
            color: "#6366f1",
            essentials: [
                "✅ Sapatos MUITO confortáveis (vão andar 15-20km/dia!)",
                "✅ Segundo par de sapatos confortáveis",
                "✅ Xaile/lenço grande (igrejas)",
                "✅ Guarda-chuva pequeno dobrável",
                "✅ Casaco corta-vento impermeável",
                "✅ Medicação pessoal + pequena farmácia",
                "✅ Garrafa água reutilizável",
                "✅ Carregador telemóvel + powerbank",
                "✅ Cartão Europeu Seguro Doença (pedir no centro de saúde!)"
            ]
        },
        {
            id: "special-tips",
            icon: "❤️",
            title: "Dicas Especiais para o Vosso Grupo",
            subtitle: "Pensadas especialmente para tornar a viagem mais confortável e tranquila",
            color: "#f43f5e",
            tips: [
                {
                    title: "⏰ Ritmo Tranquilo",
                    description: [
                        "• O itinerário tem pausas para descanso - usem-nas!",
                        "• Não se sintam obrigadas a fazer tudo. É melhor ver menos com calma",
                        "• Sugestão: dividam o grupo se alguém quiser descansar"
                    ],
                    tip: "💡 Roma não se vê num dia - aproveitem ao vosso ritmo!"
                },
                {
                    title: "👟 Cuidado com os Pés",
                    description: [
                        "• Vão andar MUITO! Roma tem calçada paralelepípedos (irregular)",
                        "• Sapatos já usados e confortáveis (não estrear!)",
                        "• Meias grossas, sem costuras que irritem",
                        "• Levem pensos/compeed para bolhas",
                        "• À noite no hotel: pés ao alto, descansar bem!"
                    ],
                    warning: "⚠️ Não tenham vergonha de parar para descansar. Há bancos em todo o lado!"
                },
                {
                    title: "✝️ Espiritualidade & Fé",
                    description: [
                        "• Esta é uma PEREGRINAÇÃO, não só turismo",
                        "• Deem-se tempo para orar, meditar, estar em silêncio",
                        "• Não se preocupem em ver tudo - sintam os lugares",
                        "• A missa de domingo em São Pedro é o momento alto"
                    ],
                    tip: "🙏 Lembrem-se: estão a caminhar onde São Pedro e São Paulo caminharam!"
                }
            ],
            reminder: {
                title: "❤️ LEMBREM-SE:",
                content: `Esta viagem foi planeada com muito amor e cuidado. O itinerário é uma SUGESTÃO, não uma obrigação.
Se estiverem cansadas, descansem. Se quiserem ficar mais tempo num sítio, fiquem. Se preferirem sentar-se
num café a ver o mundo passar, façam-no! O importante é voltarem felizes, descansadas e com o coração cheio.
Roma estará sempre lá, mas vocês merecem aproveitar ao VOSSO ritmo.

Não é uma corrida, é uma peregrinação. ✝️

Qualquer dúvida, liguem para o hotel ou para nós (vossos sobrinhos). Estamos a uma chamada de distância! 📱❤️`
            }
        },
        {
            id: "italian-phrases",
            icon: "🇮🇹",
            title: "Frases Básicas em Italiano",
            subtitle: "Italiano útil para a viagem - os romanos apreciam o esforço!",
            color: "#10b981",
            categories: [
                {
                    title: "👋 Cumprimentos & Educação",
                    phrases: [
                        { it: "Buongiorno", pt: "Bom dia", note: "(até às 14h)" },
                        { it: "Buonasera", pt: "Boa tarde/noite", note: "(depois das 14h)" },
                        { it: "Buonanotte", pt: "Boa noite", note: "(ao despedir)" },
                        { it: "Ciao", pt: "Olá / Adeus", note: "(informal)" },
                        { it: "Arrivederci", pt: "Adeus", note: "(formal)" },
                        { it: "Per favore", pt: "Por favor", note: "" },
                        { it: "Grazie", pt: "Obrigado/a", note: "" },
                        { it: "Grazie mille", pt: "Muito obrigado/a", note: "" },
                        { it: "Prego", pt: "De nada", note: "" },
                        { it: "Scusi", pt: "Desculpe", note: "(formal)" },
                        { it: "Mi dispiace", pt: "Desculpe/Lamento", note: "" }
                    ]
                },
                {
                    title: "🍽️ No Restaurante",
                    phrases: [
                        { it: "Un tavolo per nove, per favore", pt: "Uma mesa para nove, por favor", note: "" },
                        { it: "Il menù, per favore", pt: "A ementa, por favor", note: "" },
                        { it: "Il conto, per favore", pt: "A conta, por favor", note: "" },
                        { it: "Acqua naturale", pt: "Água natural (sem gás)", note: "" },
                        { it: "Acqua frizzante", pt: "Água com gás", note: "" },
                        { it: "Un caffè", pt: "Um café", note: "(espresso)" },
                        { it: "Un cappuccino", pt: "Um cappuccino", note: "(só de manhã!)" },
                        { it: "Buonissimo!", pt: "Delicioso!", note: "" },
                        { it: "Siamo allergici a...", pt: "Somos alérgicos a...", note: "" },
                        { it: "Senza glutine", pt: "Sem glúten", note: "" }
                    ]
                },
                {
                    title: "🗺️ Orientação & Ajuda",
                    phrases: [
                        { it: "Dov'è...?", pt: "Onde fica...?", note: "" },
                        { it: "Quanto costa?", pt: "Quanto custa?", note: "" },
                        { it: "Non capisco", pt: "Não compreendo", note: "" },
                        { it: "Parla inglese?", pt: "Fala inglês?", note: "" },
                        { it: "Parla portoghese?", pt: "Fala português?", note: "" },
                        { it: "Dov'è la toilette?", pt: "Onde fica a casa de banho?", note: "" },
                        { it: "Dov'è la fermata?", pt: "Onde é a paragem?", note: "(metro/autocarro)" },
                        { it: "Un biglietto, per favore", pt: "Um bilhete, por favor", note: "" },
                        { it: "Aiuto!", pt: "Socorro!", note: "" },
                        { it: "Ho bisogno di aiuto", pt: "Preciso de ajuda", note: "" }
                    ]
                },
                {
                    title: "🙏 Frases Religiosas",
                    phrases: [
                        { it: "Pace e bene", pt: "Paz e bem", note: "(saudação franciscana)" },
                        { it: "Sia lodato Gesù Cristo", pt: "Louvado seja Jesus Cristo", note: "" },
                        { it: "Ave Maria", pt: "Avé Maria", note: "(igual em italiano)" },
                        { it: "In nome del Padre...", pt: "Em nome do Pai...", note: "" },
                        { it: "Amen", pt: "Ámen", note: "" },
                        { it: "Dove posso pregare?", pt: "Onde posso rezar?", note: "" },
                        { it: "La messa è a che ora?", pt: "A que horas é a missa?", note: "" }
                    ]
                },
                {
                    title: "🔢 Números Úteis",
                    phrases: [
                        { it: "Uno", pt: "Um", note: "1" },
                        { it: "Due", pt: "Dois", note: "2" },
                        { it: "Tre", pt: "Três", note: "3" },
                        { it: "Quattro", pt: "Quatro", note: "4" },
                        { it: "Cinque", pt: "Cinco", note: "5" },
                        { it: "Sei", pt: "Seis", note: "6" },
                        { it: "Sette", pt: "Sete", note: "7" },
                        { it: "Otto", pt: "Oito", note: "8" },
                        { it: "Nove", pt: "Nove", note: "9" },
                        { it: "Dieci", pt: "Dez", note: "10" }
                    ]
                }
            ],
            tip: "💡 Mesmo que não pronunciem perfeitamente, os italianos apreciam IMENSO o esforço! Um 'Grazie' bem dito abre muitas portas (e sorrisos)."
        },
        {
            id: "wc-guide",
            icon: "🚻",
            title: "Guia de Casas de Banho Públicas (WC)",
            subtitle: "Porque ninguém quer ficar apertado em Roma!",
            color: "#3b82f6",
            intro: {
                title: "🗺️ Realidade em Roma:",
                points: [
                    "• WC públicos gratuitos são RAROS",
                    "• A maioria cobra €1-2 (tenham trocos!)",
                    "• Bares/cafés: comprem algo pequeno e usem o WC",
                    "• Museus e igrejas grandes geralmente têm WC",
                    "• McDonald's = salvação em emergências"
                ],
                warning: "⚠️ DICA DE OURO: Usem sempre o WC do hotel antes de sair! Evita muitas chatices."
            },
            locations: [
                {
                    title: "🏨 Hotel Quirinale",
                    desc: "Base de operações - usem sempre antes de sair!",
                    tip: "De manhã, à tarde quando voltarem, e antes do jantar"
                },
                {
                    title: "⛪ Basílica de São Pedro",
                    desc: "WC gratuitos à esquerda da entrada principal",
                    tip: "Podem estar com fila, mas são limpos e gratuitos"
                },
                {
                    title: "🏛️ Museus Vaticanos",
                    desc: "Vários WC ao longo do percurso",
                    tip: "Usem ANTES da Capela Sistina (não há WC depois!)"
                },
                {
                    title: "🏟️ Coliseu",
                    desc: "WC dentro do complexo (perto da entrada)",
                    tip: "Pequenos, use antes de entrar se possível"
                },
                {
                    title: "🏛️ Fórum Romano",
                    desc: "WC perto da entrada na Via dei Fori Imperiali",
                    tip: "Não há muitos pelo percurso, use na entrada"
                },
                {
                    title: "⛲ Estação Termini",
                    desc: "WC pagos (€1) mas limpos e bem mantidos",
                    tip: "Útil se estiverem perto, trocos necessários"
                },
                {
                    title: "🍟 McDonald's",
                    desc: "Várias localizações em Roma, WC acessível",
                    locations: [
                        "📍 Perto Fontana di Trevi: Piazza di San Silvestro",
                        "📍 Termini: Várias localizações na zona",
                        "📍 Piazza di Spagna: Via del Tritone"
                    ],
                    tip: "Tecnicamente para clientes, mas muito usados"
                },
                {
                    title: "☕ Bares & Cafés",
                    desc: "A solução italiana: consumo = WC",
                    examples: [
                        "Peçam um caffè (€1-1.50) ao balcão",
                        "Peçam água (€1-2)",
                        "Comprem um gelado"
                    ],
                    tip: "É a norma italiana: consumo pequeno = direito ao WC"
                },
                {
                    title: "🏛️ Pantheon",
                    desc: "Não tem WC público dentro",
                    solution: "Usem cafés na Piazza della Rotonda (em frente)"
                },
                {
                    title: "⛲ Piazza Navona",
                    desc: "Não há WC público na praça",
                    solution: "Cafés à volta da praça (consumo necessário)"
                }
            ],
            strategies: {
                title: "💡 Estratégias Inteligentes:",
                tips: [
                    {
                        icon: "⏰",
                        title: "Planeamento",
                        desc: "Vejam o itinerário e planeiem: hotel → museu (WC) → restaurante (WC) → próximo local"
                    },
                    {
                        icon: "💶",
                        title: "Trocos",
                        desc: "Tenham sempre moedas de €0.50, €1 e €2 para WC pagos"
                    },
                    {
                        icon: "☕",
                        title: "Cafés Estratégicos",
                        desc: "Quando pararem para beber algo, aproveitem sempre o WC (mesmo que não precisem muito)"
                    },
                    {
                        icon: "🏛️",
                        title: "Museus",
                        desc: "Usem SEMPRE o WC dos museus quando lá estiverem"
                    },
                    {
                        icon: "🍽️",
                        title: "Restaurantes",
                        desc: "Antes de sair do restaurante, perguntem: 'Posso usare il bagno?'"
                    }
                ]
            },
            emergency: {
                title: "🚨 Em Emergência:",
                options: [
                    "1. McDonald's (mais próximo - Google Maps)",
                    "2. Hotel grande (entrem como se fossem hóspedes)",
                    "3. Café/bar (peçam água, €1-2)",
                    "4. Loja grande (tipo lojas de departamento)"
                ],
                phrase: "🇮🇹 Frase útil: 'Scusi, dov'è la toilette? È urgente!' (Desculpe, onde fica o WC? É urgente!)"
            },
            reminder: "💡 LEMBRETE: Esta é uma viagem de 9 pessoas. Se alguém precisar, o grupo para! Não tenham vergonha, comuniquem. É melhor parar 5 minutos que passar mal."
        },
        {
            id: "contacts",
            icon: "📞",
            title: "Contactos Úteis",
            color: "#6b7280",
            contacts: [
                "🏨 Hotel Quirinale: +39 06 4707",
                "🚔 Emergências: 112",
                "🚑 Ambulância: 118",
                "🇵🇹 Embaixada Portugal: +39 06 847 5481",
                "ℹ️ Turismo Roma: 060608",
                "🚕 Táxi Roma: 060609 / 063570"
            ]
        }
    ]
};
