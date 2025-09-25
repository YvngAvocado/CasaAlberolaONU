// === CARD DATA ===============================================================
const cards = [
  {
    title: 'Bienvenida & Filosofía',
    paragraphs: [
      'Somos un hotel independiente en Alicante. Nuestro tamaño es una ventaja: nos permite conocer la realidad del turismo y poner a las personas en el centro.',
      'Conocemos la realidad del turismo en el dia a dia, de forma inmediata.'
    ],
    list: [
      { icon: 'people-group', text: 'Turismo como fuerza de transformación social y cultural.' },
      { icon: 'seedling',      text: 'Gestión basada en arraigo local y responsabilidad ambiental.' },
      { icon: 'venus',         text: '90 % del equipo: mujeres de diversas culturas.' }
    ],
    chartjs: { type: 'doughnut', labels: ['Mujeres', 'Otros'], data: [90, 10] },
    alt: 'Fachada del hotel'
  },
  {
    title: 'VALORES',
    valores: [
      {
        img: 'Multicultural.jpeg',
        heading: 'Multiculturalidad',
        text: 'Alicante es un referente de multiculturalidad, con un 25% de su población de diversas nacionalidades. La antigua Lucentum fue un cruce de culturas cartaginés, Árabe y Romana.'
      },
      {
        img: 'Compromiso.jpeg',
        heading: 'Compromiso Empresarial',
        text: 'Nuestra gestión se centra en la sostenibilidad, la igualdad de género, la conciliación laboral, el apoyo a la economía local y la reducción del impacto ambiental, utilizando tecnología específica para la eficiencia energética.'
      },
      {
        img: 'Turismo.jpeg',
        heading: 'El Turismo como Diplomacia',
        text: 'Creemos que nuestra voz puede enriquecer este foro desde la perspectiva de quienes conocen el turismo en su realidad más humana y cotidiana. El turismo es, en esencia, la forma más auténtica de diplomacia.'
      }
    ]
  },
  {
    title: '¿Por qué elegirnos?',
    paragraphs: [
      'Elegirnos es apostar por un modelo inclusivo y sostenible.'
    ],
    list: [
      { icon: 'female',            text: 'Liderazgo femenino y diversidad en todo el proyecto.' },
      { icon: 'recycle',           text: 'Ahorro energético y reducción de huella de carbono (70 % menos que la media de 4★).' },
      { icon: 'certificate',       text: 'Certificaciones: ISO 1401, Ecostars, Green Key y Bioscore.' },
      { icon: 'plane-departure',   text: 'Destino conectado: 4º aeropuerto de España y puerto base de cruceros.' }
    ],
    chartjs: {
      type: 'bar',
      labels: ['1★', '2★', '3★', '4★', '5★'],
      data: [15.11, 24.25, 41.79, 12.55, 76.81],
      custom: {
        casaIdx: 3,
        casaLabel: 'Casa Alberola',
        casaValue: 12.55
      }
    },
    alt: 'Benchmarking huella de carbono'
  },
  {
    title: 'Alicante: modelo de ciudad',
    paragraphs: [
      'Alicante es un ecosistema donde la conectividad y la cultura conviven con un entorno único.'
    ],
    list: [
      { icon: 'plane',       text: '4º aeropuerto de España, en el top 30 mundial.' },
      { icon: 'ship',        text: 'Puerto base de cruceros en el Mediterráneo.' },
      { icon: 'fire',        text: 'Hogueras de San Juan: fiesta de Interés Turístico Internacional.' },
      { icon: 'utensils',    text: 'Gastronomía mediterránea reconocida por la UNESCO.' },
      { icon: 'utensils',    text: 'Capital de la gastronomía de España 2025' }
    ],
    alt: 'Ciudad de Alicante', // shows placeholder image instead of chart
    extra: ''
  },
  {
    title: 'Compromiso Ambiental',
    paragraphs: [
      'Nuestro compromiso ambiental se mide con hechos y certificaciones.'
    ],
    list: [
      { icon: 'certificate',  text: 'Sistema de gestión ambiental ISO 14001.' },
      { icon: 'leaf',         text: 'Huella de carbono un 70 % inferior a la media 4★.' },
      { icon: 'bolt',         text: 'Eficiencia energética, reducción de plásticos y movilidad sostenible.' },
      { icon: 'tree',         text: 'Alineación con los Objetivos de Desarrollo Sostenible (ODS).' }
    ],
    chartjs: { type: 'line', labels: ['2021','2022','2023'], data: [1.8,1.5,1.3] },
    alt: 'Compromiso ambiental'
  },

  /* === NEW CARD: ODS Prioritarios (radial diagram with image placeholders) === */
    {
    title: 'ODS prioritarios (2023–2028)',
    paragraphs: [
        'Basamos nuestra estrategia en los ODS de Naciones Unidas. Estos son los prioritarios a corto y medio plazo y cómo actuamos en cada uno.'
    ],
    list: [
        { icon: 'bullseye', text: 'Foco realista a corto/medio plazo sin perder de vista los 17 ODS.' }
    ],
    /* Each item draws a square image around the circle. If an image is
        missing or fails to load, it falls back to a numbered cube. */
    radial: [
        { num: 5,  img: 'ods5.jpg',  title: 'Casa Alberola apuesta por la igualdad de género: gran parte de la dirección está formada por mujeres. Apostamos por la conciliación familiar y ajustamos los horarios a todos los miembros del equipo.' },
        { num: 7,  img: 'ods7.jpg',  title: 'Desde 2019 apostamos por eficiencia energética: instalaciones con aerotermia, limitadores de aire acondicionado y calefacción, y formación al equipo.' },
        { num: 8,  img: 'ods8.jpg',  title: 'Fomentamos el bienestar laboral: beneficios especiales, descuentos en hoteles, comidas de equipo e incentivos para todos los trabajadores.' },
        { num: 10, img: 'ods10.png', title: 'Más del 90% del equipo son mujeres y es multicultural.' },
        { num: 11, img: 'ods11.jpg',  title: 'Cuidamos Alicante y fomentamos transporte sostenible: uso de bicicletas, transporte público y recorridos a pie. Potenciamos el aspecto cultural de la ciudad y provincia.' },
        { num: 12, img: 'ods12.jpg', title: 'Ejemplo de producción y consumo responsable: platos de elaboración al momento para evitar desperdicio y uso de "Too Good To Go" para reducirlo aún más.' },
        { num: 13, img: 'ods13.jpg', title: 'Calculamos nuestra huella de carbono para ser conscientes del impacto en el ecosistema y trabajamos para reducirla.' },
        { num: 14, img: 'ods14.jpg', title: 'Proteger los océanos es prioridad: ayudamos en el cuidado y formamos parte de una región con el mayor número de banderas azules por la calidad del agua.' },
        { num: 15, img: 'ods15.jpg', title: 'El cuidado de los ecosistemas es esencial: recomendamos siempre turismo sostenible con el menor impacto posible.' },
        { num: 17, img: 'ods17.jpg', title: 'Buscamos proveedores y colaboramos con asociaciones locales que comparten nuestra filosofía para cumplir estos objetivos juntos.' }
    ],
    alt: 'ODS en círculo'
    },
  {
    title: 'Turismo Responsable',
    paragraphs: [
      'Proponemos un turismo responsable con consejos prácticos para visitantes:'
    ],
    list: [
      { icon: 'calendar-check', text: 'Planifica con antelación para evitar imprevistos.' },
      { icon: 'bus',            text: 'Transporte público, bici o caminar cuando sea viable.' },
      { icon: 'hotel',          text: 'Alojamientos sostenibles y herramientas digitales.' },
      { icon: 'faucet',         text: 'No derroches agua ni energía; cuida la naturaleza.' },
      { icon: 'shopping-bag',   text: 'Compra local y minimiza residuos reutilizando.' }
    ],
    alt: 'Turismo responsable'
  },
  {
    title: 'They say it',
    team: [
      {
        img: 'papa.jpg',
        role: 'FOUNDER',
        name: 'Fco.Javier Gutierrez'
      },
      {
        img: 'mama.png',
        role: 'FOUNDER&CEO',
        name: 'Asuncion Ujeda'
      },
      {
        img: 'sandra.jpg',
        role: 'DIRECCION',
        name: 'Alejandra Gutierrez'
      }
    ]
  },
  {
    title: 'Galería Comunidad Valenciana',
    gallery: [
      {
        section: 'Alicante imprescindible',
        images: [
          { src: 'barrio-santa-cruz-que-ver-en-alicante.jpg', title: 'Barrio de Santa Cruz' },
          { src: 'explanada-que-visitar-en-alicante.jpg', title: 'Explanada de España' },
          { src: 'plaza-luceros-que-ver-en-alicante.jpg', title: 'Plaza de los Luceros' },
          { src: 'puerto-alicante.jpg', title: 'Puerto de Alicante' },
          { src: 'Lucentum.jpg', title: 'Lucentum', style: { objectFit: 'cover', aspectRatio: '1.5/1' } } // Ensure consistent layout
        ]
      },
      {
        section: 'Playas de Bandera Azul',
        images: [
          { src: 'playa-de-sant-joan-1-3325259306.jpg', title: 'Playa de San Juan' },
          { src: 'Postiguet Bandera Azul.jpg', title: 'Playa del Postiguet' },
          { src: 'Tabarca-2725659091.jpg', title: 'Playa de Tabarca' },
          { src: 'Urbanova-1-2048x1152-3651766787.jpg', title: 'Playa de Urbanova' }
        ]
      }
    ]
  }
];

// === DOM HOOKS ===============================================================
const cardEl  = document.getElementById('card');
const dotsWrap= document.querySelector('.dots');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

// init dots
dotsWrap.innerHTML = cards.map((_,i)=>`<button class="dot" data-i="${i}" aria-label="Ir a tarjeta ${i+1}"></button>`).join('');
const dotBtns = Array.from(document.querySelectorAll('.dot'));

// === LANGUAGE SWITCHER ======================================================
const langBtn = document.createElement('button');
langBtn.id = 'lang-switch';
langBtn.textContent = 'ESPAÑOL';
langBtn.setAttribute('aria-label', 'Cambiar idioma');
langBtn.style.position = 'absolute';
langBtn.style.top = '32px';
langBtn.style.right = '32px';
langBtn.style.zIndex = '1000';
langBtn.style.padding = '0.7em 1.3em';
langBtn.style.fontSize = '1.1rem';
langBtn.style.borderRadius = '2em';
langBtn.style.border = 'none';
langBtn.style.background = 'var(--gold)';
langBtn.style.color = '#222';
langBtn.style.fontWeight = '700';
langBtn.style.cursor = 'pointer';
langBtn.style.display = 'flex';
langBtn.style.alignItems = 'center';
langBtn.innerHTML = '🌐 <span style="margin-left:0.5em; font-size:0.95em;">ESPAÑOL</span>';
document.body.appendChild(langBtn);

const langDropdown = document.createElement('ul');
langDropdown.id = 'lang-dropdown';
langDropdown.style.position = 'absolute';
langDropdown.style.top = '70px';
langDropdown.style.right = '32px';
langDropdown.style.zIndex = '1001';
langDropdown.style.listStyle = 'none';
langDropdown.style.margin = '0';
langDropdown.style.padding = '0';
langDropdown.style.background = 'var(--gold)';
langDropdown.style.borderRadius = '1em';
langDropdown.style.boxShadow = '0 2px 12px rgba(0,0,0,0.12)';
langDropdown.style.display = 'none';
langDropdown.style.minWidth = '140px';
langDropdown.style.fontWeight = '600';
langDropdown.style.fontSize = '1rem';
langDropdown.style.color = '#222';
langDropdown.setAttribute('role', 'menu');
langDropdown.innerHTML = `
  <li role="menuitem" tabindex="0" data-lang="es">ESPAÑOL</li>
  <li role="menuitem" tabindex="0" data-lang="en">ENGLISH</li>
  <li role="menuitem" tabindex="0" data-lang="fr">FRANÇAIS</li>
  <li role="menuitem" tabindex="0" data-lang="de">DEUTSCH</li>
`;
document.body.appendChild(langDropdown);

const langFlags = {
  es: '🇪🇸',
  en: '🇬🇧',
  fr: '🇫🇷',
  de: '🇩🇪',
  ar: '🇸🇦'
};
const langNames = {
  es: 'ESPAÑOL',
  en: 'ENGLISH',
  fr: 'FRANÇAIS',
  de: 'DEUTSCH',
  ar: 'العربية'
};
langBtn.innerHTML = `${langFlags.es} <span style="margin-left:0.5em; font-size:0.85em;">${langNames.es}</span>`;

langDropdown.innerHTML = `
  <li role="menuitem" tabindex="0" data-lang="es">${langFlags.es} <span style="font-size:0.85em;">${langNames.es}</span></li>
  <li role="menuitem" tabindex="0" data-lang="en">${langFlags.en} <span style="font-size:0.85em;">${langNames.en}</span></li>
  <li role="menuitem" tabindex="0" data-lang="fr">${langFlags.fr} <span style="font-size:0.85em;">${langNames.fr}</span></li>
  <li role="menuitem" tabindex="0" data-lang="de">${langFlags.de} <span style="font-size:0.85em;">${langNames.de}</span></li>
  <li role="menuitem" tabindex="0" data-lang="ar">${langFlags.ar} <span style="font-size:0.85em;">${langNames.ar}</span></li>
`;

let currentLang = 'es';
function updateLangBtn() {
  langBtn.innerHTML = `${langFlags[currentLang]} <span style='margin-left:0.5em; font-size:0.85em;'>${langNames[currentLang]}</span>`;
  langBtn.setAttribute('aria-label', `Cambiar idioma (${langNames[currentLang]})`);
}
langBtn.onclick = function() {
  langDropdown.style.display = langDropdown.style.display === 'none' ? 'block' : 'none';
};
langBtn.onkeydown = function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    langDropdown.style.display = langDropdown.style.display === 'none' ? 'block' : 'none';
  }
};
langDropdown.onmouseleave = function() {
  langDropdown.style.display = 'none';
};
Array.from(langDropdown.children).forEach(li => {
  li.onclick = function() {
    currentLang = li.getAttribute('data-lang');
    updateLangBtn();
    langDropdown.style.display = 'none';
    renderCard(idx);
  };
  li.onkeydown = function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      currentLang = li.getAttribute('data-lang');
      updateLangBtn();
      langDropdown.style.display = 'none';
      renderCard(idx);
    }
  };
});
updateLangBtn();

const translations = {
  es: {
    'Bienvenida & Filosofía': 'Bienvenida & Filosofía',
    'Somos un hotel independiente en Alicante. Nuestro tamaño es una ventaja: nos permite conocer la realidad del turismo y poner a las personas en el centro.': 'Somos un hotel independiente en Alicante. Nuestro tamaño es una ventaja: nos permite conocer la realidad del turismo y poner a las personas en el centro.',
    'Conocemos la realidad del turismo en el dia a dia, de forma inmediata.': 'Conocemos la realidad del turismo en el dia a dia, de forma inmediata.',
    'Turismo como fuerza de transformación social y cultural.': 'Turismo como fuerza de transformación social y cultural.',
    'Gestión basada en arraigo local y responsabilidad ambiental.': 'Gestión basada en arraigo local y responsabilidad ambiental.',
    '90 % del equipo: mujeres de diversas culturas.': '90 % del equipo: mujeres de diversas culturas.',
    'VALORES': 'VALORES',
    'Multiculturalidad': 'Multiculturalidad',
    'Alicante es un referente de multiculturalidad, con un 25% de su población de diversas nacionalidades. La antigua Lucentum fue un cruce de culturas cartaginés, Árabe y Romana.': 'Alicante es un referente de multiculturalidad, con un 25% de su población de diversas nacionalidades. La antigua Lucentum fue un cruce de culturas cartaginés, Árabe y Romana.',
    'Compromiso Empresarial': 'Compromiso Empresarial',
    'Nuestra gestión se centra en la sostenibilidad, la igualdad de género, la conciliación laboral, el apoyo a la economía local y la reducción del impacto ambiental, utilizando tecnología específica para la eficiencia energética.': 'Nuestra gestión se centra en la sostenibilidad, la igualdad de género, la conciliación laboral, el apoyo a la economía local y la reducción del impacto ambiental, utilizando tecnología específica para la eficiencia energética.',
    'El Turismo como Diplomacia': 'El Turismo como Diplomacia',
    'Creemos que nuestra voz puede enriquecer este foro desde la perspectiva de quienes conocen el turismo en su realidad más humana y cotidiana. El turismo es, en esencia, la forma más auténtica de diplomacia.': 'Creemos que nuestra voz puede enriquecer este foro desde la perspectiva de quienes conocen el turismo en su realidad más humana y cotidiana. El turismo es, en esencia, la forma más auténtica de diplomacia.',
    '¿Por qué elegirnos?': '¿Por qué elegirnos?',
    'Elegirnos es apostar por un modelo inclusivo y sostenible.': 'Elegirnos es apostar por un modelo inclusivo y sostenible.',
    'Liderazgo femenino y diversidad en todo el proyecto.': 'Liderazgo femenino y diversidad en todo el proyecto.',
    'Ahorro energético y reducción de huella de carbono (70 % menos que la media de 4★).': 'Ahorro energético y reducción de huella de carbono (70 % menos que la media de 4★).',
    'Certificaciones: ISO 1401, Ecostars, Green Key y Bioscore.': 'Certificaciones: ISO 1401, Ecostars, Green Key y Bioscore.',
    'Destino conectado: 4º aeropuerto de España y puerto base de cruceros.': 'Destino conectado: 4º aeropuerto de España y puerto base de cruceros.',
    'Alicante: modelo de ciudad': 'Alicante: modelo de ciudad',
    'Alicante es un ecosistema donde la conectividad y la cultura conviven con un entorno único.': 'Alicante es un ecosistema donde la conectividad y la cultura conviven con un entorno único.',
    '4º aeropuerto de España, en el top 30 mundial.': '4º aeropuerto de España, en el top 30 mundial.',
    'Puerto base de cruceros en el Mediterráneo.': 'Puerto base de cruceros en el Mediterráneo.',
    'Hogueras de San Juan: fiesta de Interés Turístico Internacional.': 'Hogueras de San Juan: fiesta de Interés Turístico Internacional.',
    'Gastronomía mediterránea reconocida por la UNESCO.': 'Gastronomía mediterránea reconocida por la UNESCO.',
    'Capital de la gastronomía de España 2025': 'Capital de la gastronomía de España 2025',
    'Compromiso Ambiental': 'Compromiso Ambiental',
    'Nuestro compromiso ambiental se mide con hechos y certificaciones.': 'Nuestro compromiso ambiental se mide con hechos y certificaciones.',
    'Sistema de gestión ambiental ISO 14001.': 'Sistema de gestión ambiental ISO 14001.',
    'Huella de carbono un 70 % inferior a la media 4★.': 'Huella de carbono un 70 % inferior a la media 4★.',
    'Eficiencia energética, reducción de plásticos y movilidad sostenible.': 'Eficiencia energética, reducción de plásticos y movilidad sostenible.',
    'Alineación con los Objetivos de Desarrollo Sostenible (ODS).': 'Alineación con los Objetivos de Desarrollo Sostenible (ODS).',
    'ODS prioritarios (2023–2028)': 'ODS prioritarios (2023–2028)',
    'Basamos nuestra estrategia en los ODS de Naciones Unidas. Estos son los prioritarios a corto y medio plazo y cómo actuamos en cada uno.': 'Basamos nuestra estrategia en los ODS de Naciones Unidas. Estos son los prioritarios a corto y medio plazo y cómo actuamos en cada uno.',
    'Foco realista a corto/medio plazo sin perder de vista los 17 ODS.': 'Foco realista a corto/medio plazo sin perder de vista los 17 ODS.',
    'Playas de Bandera Azul': 'Playas de Bandera Azul',
    'Parques Naturales': 'Parques Naturales',
    'Puntos de Interés': 'Puntos de Interés',
    'Turismo Responsable': 'Turismo Responsable',
    'Proponemos un turismo responsable con consejos prácticos para visitantes:': 'Proponemos un turismo responsable con consejos prácticos para visitantes:',
    'Planifica con antelación para evitar imprevistos.': 'Planifica con antelación para evitar imprevistos.',
    'Transporte público, bici o caminar cuando sea viable.': 'Transporte público, bici o caminar cuando sea viable.',
    'Alojamientos sostenibles y herramientas digitales.': 'Alojamientos sostenibles y herramientas digitales.',
    'No derroches agua ni energía; cuida la naturaleza.': 'No derroches agua ni energía; cuida la naturaleza.',
    'Compra local y minimiza residuos reutilizando.': 'Compra local y minimiza residuos reutilizando.',
    'They say it': 'They say it',
    'FOUNDER': 'FOUNDER',
    'FOUNDER&CEO': 'FOUNDER&CEO',
    'DIRECCION': 'DIRECCION',
    'Galería Comunidad Valenciana': 'Galería Comunidad Valenciana',
    'Playa de San Juan (Alicante)': 'Playa de San Juan (Alicante)',
    'Playa de la Malvarrosa (Valencia)': 'Playa de la Malvarrosa (Valencia)',
    'Playa Norte de Gandía (Gandía)': 'Playa Norte de Gandía (Gandía)',
    'Parque Natural de la Albufera (Valencia)': 'Parque Natural de la Albufera (Valencia)',
    'Parque Natural de la Sierra de Irta (Castellón)': 'Parque Natural de la Sierra de Irta (Castellón)',
    'Parque Natural de las Salinas de Santa Pola (Alicante)': 'Parque Natural de las Salinas de Santa Pola (Alicante)',
    'Ciudad de las Artes y las Ciencias (Valencia)': 'Ciudad de las Artes y las Ciencias (Valencia)',
    'Castillo de Santa Bárbara (Alicante)': 'Castillo de Santa Bárbara (Alicante)',
    'La Lonja de la Seda (Valencia)': 'La Lonja de la Seda (Valencia)'
  },
  en: {
    'Bienvenida & Filosofía': 'Welcome & Philosophy',
    'Somos un hotel independiente en Alicante. Nuestro tamaño es una ventaja: nos permite conocer la realidad del turismo y poner a las personas en el centro.': 'We are an independent hotel in Alicante. Our size is an advantage: it allows us to understand the reality of tourism and put people at the center.',
    'Conocemos la realidad del turismo en el dia a dia, de forma inmediata.': 'We know the reality of tourism day-to-day, immediately.',
    'Turismo como fuerza de transformación social y cultural.': 'Tourism as a force for social and cultural transformation.',
    'Gestión basada en arraigo local y responsabilidad ambiental.': 'Management based on local roots and environmental responsibility.',
    '90 % del equipo: mujeres de diversas culturas.': '90% of the team: women from diverse cultures.',
    'VALORES': 'VALUES',
    'Multiculturalidad': 'Multiculturalism',
    'Alicante es un referente de multiculturalidad, con un 25% de su población de diversas nacionalidades. La antigua Lucentum fue un cruce de culturas cartaginés, Árabe y Romana.': 'Alicante is a benchmark for multiculturalism, with 25% of its population from different nationalities. Ancient Lucentum was a crossroads of Carthaginian, Arab, and Roman cultures.',
    'Compromiso Empresarial': 'Business Commitment',
    'Nuestra gestión se centra en la sostenibilidad, la igualdad de género, la conciliación laboral, el apoyo a la economía local y la reducción del impacto ambiental, utilizando tecnología específica para la eficiencia energética.': 'Our management focuses on sustainability, gender equality, work-life balance, support for the local economy, and reducing environmental impact, using specific technology for energy efficiency.',
    'El Turismo como Diplomacia': 'Tourism as Diplomacy',
    'Creemos que nuestra voz puede enriquecer este foro desde la perspectiva de quienes conocen el turismo en su realidad más humana y cotidiana. El turismo es, en esencia, la forma más auténtica de diplomacia.': 'We believe our voice can enrich this forum from the perspective of those who know tourism in its most human and everyday reality. Tourism is, in essence, the most authentic form of diplomacy.',
    '¿Por qué elegirnos?': 'Why choose us?',
    'Elegirnos es apostar por un modelo inclusivo y sostenible.': 'Choosing us means betting on an inclusive and sustainable model.',
    'Liderazgo femenino y diversidad en todo el proyecto.': 'Female leadership and diversity throughout the project.',
    'Ahorro energético y reducción de huella de carbono (70 % menos que la media de 4★).': 'Energy savings and carbon footprint reduction (70% less than the 4★ average).',
    'Certificaciones: ISO 1401, Ecostars, Green Key y Bioscore.': 'Certifications: ISO 1401, Ecostars, Green Key, and Bioscore.',
    'Destino conectado: 4º aeropuerto de España y puerto base de cruceros.': 'Connected destination: 4th airport in Spain and cruise base port.',
    'Alicante: modelo de ciudad': 'Alicante: city model',
    'Alicante es un ecosistema donde la conectividad y la cultura conviven con un entorno único.': 'Alicante is an ecosystem where connectivity and culture coexist with a unique environment.',
    '4º aeropuerto de España, en el top 30 mundial.': '4th airport in Spain, in the world top 30.',
    'Puerto base de cruceros en el Mediterráneo.': 'Cruise base port in the Mediterranean.',
    'Hogueras de San Juan: fiesta de Interés Turístico Internacional.': 'Hogueras de San Juan: Festival of International Tourist Interest.',
    'Gastronomía mediterránea reconocida por la UNESCO.': 'Mediterranean cuisine recognized by UNESCO.',
    'Capital de la gastronomía de España 2025': 'Gastronomy Capital of Spain 2025',
    'Compromiso Ambiental': 'Environmental Commitment',
    'Nuestro compromiso ambiental se mide con hechos y certificaciones.': 'Our environmental commitment is measured by actions and certifications.',
    'Sistema de gestión ambiental ISO 14001.': 'ISO 14001 environmental management system.',
    'Huella de carbono un 70 % inferior a la media 4★.': 'Carbon footprint 70% lower than the 4★ average.',
    'Eficiencia energética, reducción de plásticos y movilidad sostenible.': 'Energy efficiency, plastic reduction, and sustainable mobility.',
    'Alineación con los Objetivos de Desarrollo Sostenible (ODS).': 'Alignment with the Sustainable Development Goals (SDGs).',
    'ODS prioritarios (2023–2028)': 'Priority SDGs (2023–2028)',
    'Basamos nuestra estrategia en los ODS de Naciones Unidas. Estos son los prioritarios a corto y medio plazo y cómo actuamos en cada uno.': 'We base our strategy on the UN SDGs. These are the short- and medium-term priorities and how we act on each.',
    'Foco realista a corto/medio plazo sin perder de vista los 17 ODS.': 'Realistic focus in the short/medium term without losing sight of all 17 SDGs.',
    'Playas de Bandera Azul': 'Blue Flag Beaches',
    'Parques Naturales': 'Natural Parks',
    'Puntos de Interés': 'Points of Interest',
    'Turismo Responsable': 'Responsible Tourism',
    'Proponemos un turismo responsable con consejos prácticos para visitantes:': 'We propose responsible tourism with practical tips for visitors:',
    'Planifica con antelación para evitar imprevistos.': 'Plan ahead to avoid surprises.',
    'Transporte público, bici o caminar cuando sea viable.': 'Public transport, bike, or walk when possible.',
    'Alojamientos sostenibles y herramientas digitales.': 'Sustainable accommodations and digital tools.',
    'No derroches agua ni energía; cuida la naturaleza.': 'Don’t waste water or energy; take care of nature.',
    'Compra local y minimiza residuos reutilizando.': 'Buy local and minimize waste by reusing.',
    'They say it': 'They say it',
    'FOUNDER': 'FOUNDER',
    'FOUNDER&CEO': 'FOUNDER&CEO',
    'DIRECCION': 'MANAGEMENT',
    'Galería Comunidad Valenciana': 'Comunidad Valenciana Gallery',
    'Playa de San Juan (Alicante)': 'San Juan Beach (Alicante)',
    'Playa de la Malvarrosa (Valencia)': 'Malvarrosa Beach (Valencia)',
    'Playa Norte de Gandía (Gandía)': 'North Beach of Gandía (Gandía)',
    'Parque Natural de la Albufera (Valencia)': 'Albufera Natural Park (Valencia)',
    'Parque Natural de la Sierra de Irta (Castellón)': 'Sierra de Irta Natural Park (Castellón)',
    'Parque Natural de las Salinas de Santa Pola (Alicante)': 'Salinas de Santa Pola Natural Park (Alicante)',
    'Ciudad de las Artes y las Ciencias (Valencia)': 'City of Arts and Sciences (Valencia)',
    'Castillo de Santa Bárbara (Alicante)': 'Santa Bárbara Castle (Alicante)',
    'La Lonja de la Seda (Valencia)': 'Silk Exchange (Valencia)',
    // ODS radial items
    'Casa Alberola apuesta por la igualdad de género: gran parte de la dirección está formada por mujeres. Apostamos por la conciliación familiar y ajustamos los horarios a todos los miembros del equipo.': 'Casa Alberola supports gender equality: much of the management is made up of women. We support work-life balance and adjust schedules for all team members.',
    'Desde 2019 apostamos por eficiencia energética: instalaciones con aerotermia, limitadores de aire acondicionado y calefacción, y formación al equipo.': 'Since 2019, we have focused on energy efficiency: facilities with aerothermal technology, air conditioning and heating limiters, and team training.',
    'Fomentamos el bienestar laboral: beneficios especiales, descuentos en hoteles, comidas de equipo e incentivos para todos los trabajadores.': 'We promote workplace well-being: special benefits, hotel discounts, team meals, and incentives for all employees.',
    'Más del 90% del equipo son mujeres y es multicultural.': 'More than 90% of the team are women and it is multicultural.',
    'Cuidamos Alicante y fomentamos transporte sostenible: uso de bicicletas, transporte público y recorridos a pie. Potenciamos el aspecto cultural de la ciudad y provincia.': 'We care for Alicante and promote sustainable transport: use of bicycles, public transport, and walking tours. We enhance the cultural aspect of the city and province.',
    'Ejemplo de producción y consumo responsable: platos de elaboración al momento para evitar desperdicio y uso de "Too Good To Go" para reducirlo aún más.': 'Example of responsible production and consumption: freshly prepared dishes to avoid waste and use of "Too Good To Go" to reduce it even further.',
    'Calculamos nuestra huella de carbono para ser conscientes del impacto en el ecosistema y trabajamos para reducirla.': 'We calculate our carbon footprint to be aware of the impact on the ecosystem and work to reduce it.',
    'Proteger los océanos es prioridad: ayudamos en el cuidado y formamos parte de una región con el mayor número de banderas azules por la calidad del agua.': 'Protecting the oceans is a priority: we help with care and are part of a region with the highest number of blue flags for water quality.',
    'El cuidado de los ecosistemas es esencial: recomendamos siempre turismo sostenible con el menor impacto posible.': 'Caring for ecosystems is essential: we always recommend sustainable tourism with the least possible impact.',
    'Buscamos proveedores y colaboramos con asociaciones locales que comparten nuestra filosofía para cumplir estos objetivos juntos.': 'We seek suppliers and collaborate with local associations that share our philosophy to achieve these goals together.'
  },
  fr: {
    'Bienvenida & Filosofía': 'Bienvenue & Philosophie',
    'Somos un hotel independiente en Alicante. Nuestro tamaño es una ventaja: nos permite conocer la realidad del turismo y poner a las personas en el centro.': "Nous sommes un hôtel indépendant à Alicante. Notre taille est un avantage : elle nous permet de connaître la réalité du tourisme et de mettre les personnes au centre.",
    'Conocemos la realidad del turismo en el dia a dia, de forma inmediata.': "Nous connaissons la réalité du tourisme au quotidien, immédiatement.",
    'Turismo como fuerza de transformación social y cultural.': "Le tourisme comme force de transformation sociale et culturelle.",
    'Gestión basada en arraigo local y responsabilidad ambiental.': "Gestion basée sur l'ancrage local et la responsabilité environnementale.",
    '90 % del equipo: mujeres de diversas culturas.': "90 % de l'équipe : femmes de diverses cultures.",
    'VALORES': 'VALEURS',
    'Multiculturalidad': 'Multiculturalisme',
    'Alicante es un referente de multiculturalidad, con un 25% de su población de diversas nacionalidades. La antigua Lucentum fue un cruce de culturas cartaginés, Árabe y Romana.': "Alicante est une référence en matière de multiculturalisme, avec 25 % de sa population de différentes nationalités. L'ancienne Lucentum était un carrefour de cultures carthaginienne, arabe et romaine.",
    'Compromiso Empresarial': "Engagement d'entreprise",
    'Nuestra gestión se centra en la sostenibilidad, la igualdad de género, la conciliación laboral, el apoyo a la economía local y la reducción del impacto ambiental, utilizando tecnología específica para la eficiencia energética.': "Notre gestion est axée sur la durabilité, l'égalité des sexes, la conciliation travail-vie, le soutien à l'économie locale et la réduction de l'impact environnemental, en utilisant des technologies spécifiques pour l'efficacité énergétique.",
    'El Turismo como Diplomacia': 'Le tourisme comme diplomatie',
    'Creemos que nuestra voz puede enriquecer este foro desde la perspectiva de quienes conocen el turismo en su realidad más humana y cotidiana. El turismo es, en esencia, la forma más auténtica de diplomacia.': "Nous pensons que notre voix peut enrichir ce forum du point de vue de ceux qui connaissent le tourisme dans sa réalité la plus humaine et quotidienne. Le tourisme est, en essence, la forme la plus authentique de diplomatie.",
    '¿Por qué elegirnos?': 'Pourquoi nous choisir ?',
    'Elegirnos es apostar por un modelo inclusivo y sostenible.': "Nous choisir, c'est miser sur un modèle inclusif et durable.",
    'Liderazgo femenino y diversidad en todo el proyecto.': "Leadership féminin et diversité dans tout le projet.",
    'Ahorro energético y reducción de huella de carbono (70 % menos que la media de 4★).': "Économies d'énergie et réduction de l'empreinte carbone (70 % de moins que la moyenne des 4★).",
    'Certificaciones: ISO 1401, Ecostars, Green Key y Bioscore.': "Certifications : ISO 1401, Ecostars, Green Key et Bioscore.",
    'Destino conectado: 4º aeropuerto de España y puerto base de cruceros.': "Destination connectée : 4e aéroport d'Espagne et port de croisière.",
    'Alicante: modelo de ciudad': "Alicante : modèle de ville",
    'Alicante es un ecosistema donde la conectividad y la cultura conviven con un entorno único.': "Alicante est un écosystème où la connectivité et la culture coexistent avec un environnement unique.",
    '4º aeropuerto de España, en el top 30 mundial.': "4e aéroport d'Espagne, dans le top 30 mondial.",
    'Puerto base de cruceros en el Mediterráneo.': "Port de croisière en Méditerranée.",
    'Hogueras de San Juan: fiesta de Interés Turístico Internacional.': "Fêtes de San Juan : fête d'intérêt touristique international.",
    'Gastronomía mediterránea reconocida por la UNESCO.': "Gastronomie méditerranéenne reconnue par l'UNESCO.",
    'Capital de la gastronomía de España 2025': "Capitale de la gastronomie d'Espagne 2025",
    'Compromiso Ambiental': "Engagement environnemental",
    'Nuestro compromiso ambiental se mide con hechos y certificaciones.': "Notre engagement environnemental se mesure par des actions et des certifications.",
    'Sistema de gestión ambiental ISO 14001.': "Système de gestion environnementale ISO 14001.",
    'Huella de carbono un 70 % inferior a la media 4★.': "Empreinte carbone 70 % inférieure à la moyenne des 4★.",
    'Eficiencia energética, reducción de plásticos y movilidad sostenible.': "Efficacité énergétique, réduction des plastiques et mobilité durable.",
    'Alineación con los Objetivos de Desarrollo Sostenible (ODS).': "Alignement avec les Objectifs de Développement Durable (ODD).",
    'ODS prioritarios (2023–2028)': "ODD prioritaires (2023–2028)",
    'Basamos nuestra estrategia en los ODS de Naciones Unidas. Estos son los prioritarios a corto y medio plazo y cómo actuamos en cada uno.': "Nous basons notre stratégie sur les ODD de l'ONU. Voici nos priorités à court et moyen terme et comment nous agissons pour chacune.",
    'Foco realista a corto/medio plazo sin perder de vista los 17 ODS.': "Focus réaliste à court/moyen terme sans perdre de vue les 17 ODD.",
    'Turismo Responsable': "Tourisme responsable",
    'Proponemos un turismo responsable con consejos prácticos para visitantes:': "Nous proposons un tourisme responsable avec des conseils pratiques pour les visiteurs :",
    'Planifica con antelación para evitar imprevistos.': "Planifiez à l'avance pour éviter les imprévus.",
    'Transporte público, bici o caminar cuando sea viable.': "Transports publics, vélo ou marche lorsque c'est possible.",
    'Alojamientos sostenibles y herramientas digitales.': "Hébergements durables et outils numériques.",
    'No derroches agua ni energía; cuida la naturaleza.': "Ne gaspillez pas l'eau ni l'énergie ; prenez soin de la nature.",
    'Compra local y minimiza residuos reutilizando.': "Achetez local et minimisez les déchets en réutilisant.",
    'They say it': "Ils le disent",
    'FOUNDER': "FONDATEUR",
    'FOUNDER&CEO': "FONDATEUR & PDG",
    'DIRECCION': "DIRECTION",
    'Galería Comunidad Valenciana': "Galerie Communauté Valencienne",
    'Barrio de Santa Cruz': "Quartier de Santa Cruz",
    'Explanada de España': "Explanade d'Espagne",
    'Plaza de los Luceros': "Place des Luceros",
    'Puerto de Alicante': "Port d'Alicante",
    // ODS radial items
    'Casa Alberola apuesta por la igualdad de género: gran parte de la dirección está formada por mujeres. Apostamos por la conciliación familiar y ajustamos los horarios a todos los miembros del equipo.': "Casa Alberola soutient l'égalité des sexes : une grande partie de la direction est composée de femmes. Nous favorisons la conciliation familiale et adaptons les horaires à tous les membres de l'équipe.",
    'Desde 2019 apostamos por eficiencia energética: instalaciones con aerotermia, limitadores de aire acondicionado y calefacción, y formación al equipo.': "Depuis 2019, nous misons sur l'efficacité énergétique : installations avec aérothermie, limiteurs de climatisation et de chauffage, et formation de l'équipe.",
    'Fomentamos el bienestar laboral: beneficios especiales, descuentos en hoteles, comidas de equipo e incentivos para todos los trabajadores.': "Nous favorisons le bien-être au travail : avantages spéciaux, réductions dans les hôtels, repas d'équipe et incitations pour tous les employés.",
    'Más del 90% del equipo son mujeres y es multicultural.': "Plus de 90 % de l'équipe sont des femmes et elle est multiculturelle.",
    'Cuidamos Alicante y fomentamos transporte sostenible: uso de bicicletas, transporte público y recorridos a pie. Potenciamos el aspecto cultural de la ciudad y provincia.': "Nous prenons soin d'Alicante et favorisons le transport durable : utilisation de vélos, transports publics et promenades à pied. Nous valorisons l'aspect culturel de la ville et de la province.",
    'Ejemplo de producción y consumo responsable: platos de elaboración al momento para evitar desperdicio y uso de "Too Good To Go" para reducirlo aún más.': "Exemple de production et de consommation responsable : plats préparés à la demande pour éviter le gaspillage et utilisation de 'Too Good To Go' pour le réduire encore plus.",
    'Calculamos nuestra huella de carbono para ser conscientes del impacto en el ecosistema y trabajamos para reducirla.': "Nous calculons notre empreinte carbone pour être conscients de l'impact sur l'écosystème et travaillons à la réduire.",
    'Proteger los océanos es prioridad: ayudamos en el cuidado y formamos parte de una región con el mayor número de banderas azules por la calidad del agua.': "Protéger les océans est une priorité : nous aidons à leur préservation et faisons partie d'une région avec le plus grand nombre de pavillons bleus pour la qualité de l'eau.",
    'El cuidado de los ecosistemas es esencial: recomendamos siempre turismo sostenible con el menor impacto posible.': "La préservation des écosystèmes est essentielle : nous recommandons toujours un tourisme durable avec le moins d'impact possible.",
    'Buscamos proveedores y colaboramos con asociaciones locales que comparten nuestra filosofía para cumplir estos objetivos juntos.': "Nous recherchons des fournisseurs et collaborons avec des associations locales qui partagent notre philosophie pour atteindre ces objectifs ensemble."
  },
  de: {
    'Bienvenida & Filosofía': 'Willkommen & Philosophie',
    'Somos un hotel independiente en Alicante. Nuestro tamaño es una ventaja: nos permite conocer la realidad del turismo y poner a las personas en el centro.': "Wir sind ein unabhängiges Hotel in Alicante. Unsere Größe ist ein Vorteil: Sie ermöglicht es uns, die Realität des Tourismus zu verstehen und die Menschen in den Mittelpunkt zu stellen.",
    'Conocemos la realidad del turismo en el dia a dia, de forma inmediata.': "Wir kennen die Realität des Tourismus im Alltag, sofort.",
    'Turismo como fuerza de transformación social y cultural.': "Tourismus als Kraft für sozialen und kulturellen Wandel.",
    'Gestión basada en arraigo local y responsabilidad ambiental.': "Management basierend auf lokaler Verwurzelung und Umweltverantwortung.",
    '90 % del equipo: mujeres de diversas culturas.': "90 % des Teams: Frauen aus verschiedenen Kulturen.",
    'VALORES': 'WERTE',
    'Multiculturalidad': 'Multikulturalismus',
    'Alicante es un referente de multiculturalidad, con un 25% de su población de diversas nacionalidades. La antigua Lucentum fue un cruce de culturas cartaginés, Árabe y Romana.': "Alicante ist ein Vorbild für Multikulturalismus, mit 25 % seiner Bevölkerung aus verschiedenen Nationalitäten. Das antike Lucentum war ein Schnittpunkt karthagischer, arabischer und römischer Kulturen.",
    'Compromiso Empresarial': 'Unternehmerisches Engagement',
    'Nuestra gestión se centra en la sostenibilidad, la igualdad de género, la conciliación laboral, el apoyo a la economía local y la reducción del impacto ambiental, utilizando tecnología específica para la eficiencia energética.': "Unser Management konzentriert sich auf Nachhaltigkeit, Geschlechtergleichstellung, Vereinbarkeit von Beruf und Privatleben, Unterstützung der lokalen Wirtschaft und Reduzierung der Umweltbelastung durch spezielle Technologien für Energieeffizienz.",
    'El Turismo como Diplomacia': 'Tourismus als Diplomatie',
    'Creemos que nuestra voz puede enriquecer este foro desde la perspectiva de quienes conocen el turismo en su realidad más humana y cotidiana. El turismo es, en esencia, la forma más auténtica de diplomacia.': "Wir glauben, dass unsere Stimme dieses Forum aus der Perspektive derjenigen bereichern kann, die den Tourismus in seiner menschlichsten und alltäglichsten Realität kennen. Tourismus ist im Wesentlichen die authentischste Form der Diplomatie.",
    '¿Por qué elegirnos?': 'Warum uns wählen?',
    'Elegirnos es apostar por un modelo inclusivo y sostenible.': "Uns zu wählen bedeutet, auf ein inklusives und nachhaltiges Modell zu setzen.",
    'Liderazgo femenino y diversidad en todo el proyecto.': "Weibliche Führung und Vielfalt im gesamten Projekt.",
    'Ahorro energético y reducción de huella de carbono (70 % menos que la media de 4★).': "Energieeinsparung und Reduzierung des CO₂-Fußabdrucks (70 % weniger als der Durchschnitt der 4★).",
    'Certificaciones: ISO 1401, Ecostars, Green Key y Bioscore.': "Zertifizierungen: ISO 1401, Ecostars, Green Key und Bioscore.",
    'Destino conectado: 4º aeropuerto de España y puerto base de cruceros.': "Vernetztes Reiseziel: 4. Flughafen Spaniens und Kreuzfahrthafen.",
    'Alicante: modelo de ciudad': "Alicante: Stadtmodell",
    'Alicante es un ecosistema donde la conectividad y la cultura conviven con un entorno único.': "Alicante ist ein Ökosystem, in dem Konnektivität und Kultur mit einer einzigartigen Umgebung koexistieren.",
    '4º aeropuerto de España, en el top 30 mundial.': "4. Flughafen Spaniens, unter den Top 30 weltweit.",
    'Puerto base de cruceros en el Mediterráneo.': "Kreuzfahrthafen im Mittelmeer.",
    'Hogueras de San Juan: fiesta de Interés Turístico Internacional.': "Hogueras de San Juan: Fest von internationalem touristischem Interesse.",
    'Gastronomía mediterránea reconocida por la UNESCO.': "Mittelmeerküche von der UNESCO anerkannt.",
    'Capital de la gastronomía de España 2025': "Gastronomiehauptstadt Spaniens 2025",
    'Compromiso Ambiental': "Umweltengagement",
    'Nuestro compromiso ambiental se mide con hechos y certificaciones.': "Unser Umweltengagement wird durch Taten und Zertifikate gemessen.",
    'Sistema de gestión ambiental ISO 14001.': "Umweltmanagementsystem ISO 14001.",
    'Huella de carbono un 70 % inferior a la media 4★.': "CO₂-Fußabdruck 70 % niedriger als der Durchschnitt der 4★.",
    'Eficiencia energética, reducción de plásticos y movilidad sostenible.': "Energieeffizienz, Plastikreduzierung und nachhaltige Mobilität.",
    'Alineación con los Objetivos de Desarrollo Sostenible (ODS).': "Ausrichtung an den Zielen für nachhaltige Entwicklung (SDGs).",
    'ODS prioritarios (2023–2028)': "Prioritäre SDGs (2023–2028)",
    'Basamos nuestra estrategia en los ODS de Naciones Unidas. Estos son los prioritarios a corto y medio plazo y cómo actuamos en cada uno.': "Unsere Strategie basiert auf den SDGs der Vereinten Nationen. Dies sind die kurzfristigen und mittelfristigen Prioritäten und wie wir bei jedem handeln.",
    'Foco realista a corto/medio plazo sin perder de vista los 17 ODS.': "Realistischer Fokus auf kurze/mittlere Sicht, ohne die 17 SDGs aus den Augen zu verlieren.",
    'Turismo Responsable': "Verantwortungsvoller Tourismus",
    'Proponemos un turismo responsable con consejos prácticos para visitantes:': "Wir schlagen verantwortungsvollen Tourismus mit praktischen Tipps für Besucher vor:",
    'Planifica con antelación para evitar imprevistos.': "Planen Sie im Voraus, um Überraschungen zu vermeiden.",
    'Transporte público, bici o caminar cuando sea viable.': "Öffentliche Verkehrsmittel, Fahrrad oder zu Fuß, wenn möglich.",
    'Alojamientos sostenibles y herramientas digitales.': "Nachhaltige Unterkünfte und digitale Tools.",
    'No derroches agua ni energía; cuida la naturaleza.': "Verschwenden Sie kein Wasser oder Energie; achten Sie auf die Natur.",
    'Compra local y minimiza residuos reutilizando.': "Kaufen Sie lokal und minimieren Sie Abfall durch Wiederverwendung.",
    'They say it': "Sie sagen es",
    'FOUNDER': "GRÜNDER",
    'FOUNDER&CEO': "GRÜNDER & CEO",
    'DIRECCION': "LEITUNG",
    'Galería Comunidad Valenciana': "Galerie der Valencianischen Gemeinschaft",
    'Barrio de Santa Cruz': "Stadtteil Santa Cruz",
    'Explanada de España': "Explanada de España",
    'Plaza de los Luceros': "Platz der Luceros",
    'Puerto de Alicante': "Hafen von Alicante",
    'Lucentum': "Lucentum",
    'Playa de San Juan': "Strand von San Juan",
    'Playa del Postiguet': "Strand von Postiguet",
    'Playa de Tabarca': "Strand von Tabarca",
    'Playa de Urbanova': "Strand von Urbanova",
    // ODS radial items
    'Casa Alberola apuesta por la igualdad de género: gran parte de la dirección está formada por mujeres. Apostamos por la conciliación familiar y ajustamos los horarios a todos los miembros del equipo.': 'Casa Alberola setzt sich für Gleichstellung der Geschlechter ein: Ein Großteil der Leitung besteht aus Frauen. Wir setzen auf Vereinbarkeit von Familie und Beruf und passen die Arbeitszeiten für alle Teammitglieder an.',
    'Desde 2019 apostamos por eficiencia energética: instalaciones con aerotermia, limitadores de aire acondicionado y calefacción, y formación al equipo.': 'Seit 2019 setzen wir auf Energieeffizienz: Anlagen mit Aerothermie, Begrenzungen für Klimaanlage und Heizung sowie Schulungen für das Team.',
    'Fomentamos el bienestar laboral: beneficios especiales, descuentos en hoteles, comidas de equipo e incentivos para todos los trabajadores.': 'Wir fördern das Wohlbefinden am Arbeitsplatz: besondere Vorteile, Rabatte in Hotels, Teamessen und Anreize für alle Mitarbeitenden.',
    'Más del 90% del equipo son mujeres y es multicultural.': 'Mehr als 90 % des Teams sind Frauen und es ist multikulturell.',
    'Cuidamos Alicante y fomentamos transporte sostenible: uso de bicicletas, transporte público y recorridos a pie. Potenciamos el aspecto cultural de la ciudad y provincia.': 'Wir kümmern uns um Alicante und fördern nachhaltigen Transport: Nutzung von Fahrrädern, öffentlichen Verkehrsmitteln und Spaziergängen. Wir stärken den kulturellen Aspekt der Stadt und Provinz.',
    'Ejemplo de producción y consumo responsable: platos de elaboración al momento para evitar desperdicio y uso de "Too Good To Go" para reducirlo aún más.': 'Beispiel für verantwortungsvolle Produktion und Konsum: frisch zubereitete Gerichte zur Vermeidung von Verschwendung und Nutzung von "Too Good To Go" zur weiteren Reduzierung.',
    'Calculamos nuestra huella de carbono para ser conscientes del impacto en el ecosistema y trabajamos para reducirla.': 'Wir berechnen unseren CO₂-Fußabdruck, um uns der Auswirkungen auf das Ökosystem bewusst zu sein und arbeiten daran, ihn zu reduzieren.',
    'Proteger los océanos es prioridad: ayudamos en el cuidado y formamos parte de una región con el mayor número de banderas azules por la calidad del agua.': 'Der Schutz der Ozeane hat Priorität: Wir helfen bei der Pflege und sind Teil einer Region mit der höchsten Anzahl an Blauen Flaggen für Wasserqualität.',
    'El cuidado de los ecosistemas es esencial: recomendamos siempre turismo sostenible con el menor impacto posible.': 'Die Pflege der Ökosysteme ist essenziell: Wir empfehlen immer nachhaltigen Tourismus mit möglichst geringer Auswirkung.',
    'Buscamos proveedores y colaboramos con asociaciones locales que comparten nuestra filosofía para cumplir estos objetivos juntos.': 'Wir suchen Lieferanten und arbeiten mit lokalen Verbänden zusammen, die unsere Philosophie teilen, um diese Ziele gemeinsam zu erreichen.'
  },
  ar: {
    'Bienvenida & Filosofía': 'الترحيب والفلسفة',
    'Somos un hotel independiente en Alicante. Nuestro tamaño es una ventaja: nos permite conocer la realidad del turismo y poner a las personas en el centro.': 'نحن فندق مستقل في أليكانتي. حجمنا ميزة: يسمح لنا بفهم واقع السياحة ووضع الناس في المركز.',
    'Conocemos la realidad del turismo en el dia a dia, de forma inmediata.': 'نحن نعرف واقع السياحة يومياً وبشكل فوري.',
    'Turismo como fuerza de transformación social y cultural.': 'السياحة كقوة للتحول الاجتماعي والثقافي.',
    'Gestión basada en arraigo local y responsabilidad ambiental.': 'إدارة قائمة على الجذور المحلية والمسؤولية البيئية.',
    '90 % del equipo: mujeres de diversas culturas.': '90٪ من الفريق: نساء من ثقافات متنوعة.',
    'VALORES': 'القيم',
    'Multiculturalidad': 'التعددية الثقافية',
    'Alicante es un referente de multiculturalidad, con un 25% de su población de diversas nacionalidades. La antigua Lucentum fue un cruce de culturas cartaginés, Árabe y Romana.': 'أليكانتي مثال للتعددية الثقافية، حيث أن 25٪ من سكانها من جنسيات مختلفة. كانت لوكنتوم القديمة ملتقى للثقافات القرطاجية والعربية والرومانية.',
    'Compromiso Empresarial': 'الالتزام المؤسسي',
    'Nuestra gestión se centra en la sostenibilidad, la igualdad de género, la conciliación laboral, el apoyo a la economía local y la reducción del impacto ambiental, utilizando tecnología específica para la eficiencia energética.': 'تركز إدارتنا على الاستدامة والمساواة بين الجنسين والتوفيق بين العمل والحياة ودعم الاقتصاد المحلي وتقليل التأثير البيئي باستخدام تقنيات خاصة للكفاءة الطاقية.',
    'El Turismo como Diplomacia': 'السياحة كدبلوماسية',
    'Creemos que nuestra voz puede enriquecer este foro desde la perspectiva de quienes conocen el turismo en su realidad más humana y cotidiana. El turismo es, en esencia, la forma más auténtica de diplomacia.': 'نعتقد أن صوتنا يمكن أن يثري هذا المنتدى من منظور من يعرفون السياحة في واقعها الإنساني واليومي. السياحة هي في جوهرها أكثر أشكال الدبلوماسية أصالة.',
    '¿Por qué elegirnos?': 'لماذا تختارنا؟',
    'Elegirnos es apostar por un modelo inclusivo y sostenible.': 'اختيارنا هو الرهان على نموذج شامل ومستدام.',
    'Liderazgo femenino y diversidad en todo el proyecto.': 'قيادة نسائية وتنوع في جميع جوانب المشروع.',
    'Ahorro energético y reducción de huella de carbono (70 % menos que la media de 4★).': 'توفير الطاقة وتقليل البصمة الكربونية (أقل بنسبة 70٪ من متوسط الفنادق ذات الأربع نجوم).',
    'Certificaciones: ISO 1401, Ecostars, Green Key y Bioscore.': 'شهادات: ISO 1401، إيكوستارز، المفتاح الأخضر، وبايوسكور.',
    'Destino conectado: 4º aeropuerto de España y puerto base de cruceros.': 'وجهة متصلة: رابع أكبر مطار في إسبانيا وميناء رئيسي للرحلات البحرية.',
    'Alicante: modelo de ciudad': 'أليكانتي: نموذج المدينة',
    'Alicante es un ecosistema donde la conectividad y la cultura conviven con un entorno único.': 'أليكانتي نظام بيئي حيث تتعايش الاتصال والثقافة مع بيئة فريدة.',
    '4º aeropuerto de España, en el top 30 mundial.': 'رابع أكبر مطار في إسبانيا، من بين أفضل 30 مطاراً في العالم.',
    'Puerto base de cruceros en el Mediterráneo.': 'ميناء رئيسي للرحلات البحرية في البحر المتوسط.',
    'Hogueras de San Juan: fiesta de Interés Turístico Internacional.': 'مهرجان سان خوان: احتفال ذو اهتمام سياحي دولي.',
    'Gastronomía mediterránea reconocida por la UNESCO.': 'المطبخ المتوسطي معترف به من قبل اليونسكو.',
    'Capital de la gastronomía de España 2025': 'عاصمة فن الطهو في إسبانيا 2025',
    'Compromiso Ambiental': 'الالتزام البيئي',
    'Nuestro compromiso ambiental se mide con hechos y certificaciones.': 'يتم قياس التزامنا البيئي بالأفعال والشهادات.',
    'Sistema de gestión ambiental ISO 14001.': 'نظام إدارة بيئية ISO 14001.',
    'Huella de carbono un 70 % inferior a la media 4★.': 'بصمة كربونية أقل بنسبة 70٪ من متوسط الفنادق ذات الأربع نجوم.',
    'Eficiencia energética, reducción de plásticos y movilidad sostenible.': 'كفاءة الطاقة، تقليل البلاستيك والتنقل المستدام.',
    'Alineación con los Objetivos de Desarrollo Sostenible (ODS).': 'الالتزام بأهداف التنمية المستدامة (SDGs).',
    'ODS prioritarios (2023–2028)': 'الأهداف ذات الأولوية (2023–2028)',
    'Basamos nuestra estrategia en los ODS de Naciones Unidas. Estos son los prioritarios a corto y medio plazo y cómo actuamos en cada uno.': 'نحن نبني استراتيجيتنا على أهداف الأمم المتحدة للتنمية المستدامة. هذه هي الأولويات على المدى القصير والمتوسط وكيف نتصرف في كل منها.',
    'Foco realista a corto/medio plazo sin perder de vista los 17 ODS.': 'تركيز واقعي على المدى القصير والمتوسط دون فقدان رؤية جميع الأهداف السبعة عشر.',
    'Playas de Bandera Azul': 'شواطئ العلم الأزرق',
    'Parques Naturales': 'الحدائق الطبيعية',
    'Puntos de Interés': 'نقاط الاهتمام',
    'Turismo Responsable': 'السياحة المسؤولة',
    'Proponemos un turismo responsable con consejos prácticos para visitantes:': 'نقترح سياحة مسؤولة مع نصائح عملية للزوار:',
    'Planifica con antelación para evitar imprevistos.': 'خطط مسبقاً لتجنب المفاجآت.',
    'Transporte público, bici o caminar cuando sea viable.': 'استخدم وسائل النقل العامة أو الدراجة أو المشي عندما يكون ذلك ممكناً.',
    'Alojamientos sostenibles y herramientas digitales.': 'إقامة مستدامة وأدوات رقمية.',
    'No derroches agua ni energía; cuida la naturaleza.': 'لا تهدر الماء أو الطاقة؛ اعتنِ بالطبيعة.',
    'Compra local y minimiza residuos reutilizando.': 'اشترِ محلياً وقلل النفايات بإعادة الاستخدام.',
    'They say it': 'قالوا عنا',
    'FOUNDER': 'المؤسس',
    'FOUNDER&CEO': 'المؤسس والمدير التنفيذي',
    'DIRECCION': 'الإدارة',
    'Galería Comunidad Valenciana': 'معرض مجتمع فالنسيا',
    'Barrio de Santa Cruz': 'حي سانتا كروز',
    'Explanada de España': 'ممشى إسبانيا',
    'Plaza de los Luceros': 'ساحة لوس لوسيروس',
    'Puerto de Alicante': 'ميناء أليكانتي',
    'Lucentum': 'لوكنتوم',
    'Playa de San Juan': 'شاطئ سان خوان',
    'Playa del Postiguet': 'شاطئ بوستيغيت',
    'Playa de Tabarca': 'شاطئ تاباركا',
    'Playa de Urbanova': 'شاطئ أوربانوفا',
    // ODS radial items
    'Casa Alberola apuesta por la igualdad de género: gran parte de la dirección está formada por mujeres. Apostamos por la conciliación familiar y ajustamos los horarios a todos los miembros del equipo.': 'كازا ألبيرولا تدعم المساواة بين الجنسين: معظم الإدارة من النساء. نحن ندعم التوفيق بين العمل والأسرة ونضبط الجداول الزمنية لجميع أعضاء الفريق.',
    'Desde 2019 apostamos por eficiencia energética: instalaciones con aerotermia, limitadores de aire acondicionado y calefacción, y formación al equipo.': 'منذ عام 2019، نركز على كفاءة الطاقة: منشآت بتقنية الهواء الحراري، محددات التكييف والتدفئة، وتدريب الفريق.',
    'Fomentamos el bienestar laboral: beneficios especiales, descuentos en hoteles, comidas de equipo e incentivos para todos los trabajadores.': 'نحن نشجع الرفاهية في العمل: مزايا خاصة، خصومات في الفنادق، وجبات جماعية وحوافز لجميع الموظفين.',
    'Más del 90% del equipo son mujeres y es multicultural.': 'أكثر من 90٪ من الفريق من النساء وهو متعدد الثقافات.',
    'Cuidamos Alicante y fomentamos transporte sostenible: uso de bicicletas, transporte público y recorridos a pie. Potenciamos el aspecto cultural de la ciudad y provincia.': 'نهتم بأليكانتي ونعزز النقل المستدام: استخدام الدراجات، النقل العام والمشي. نعزز الجانب الثقافي للمدينة والمقاطعة.',
    'Ejemplo de producción y consumo responsable: platos de elaboración al momento para evitar desperdicio y uso de "Too Good To Go" para reducirlo aún más.': 'مثال على الإنتاج والاستهلاك المسؤول: أطباق تُحضّر عند الطلب لتجنب الهدر واستخدام "تو جود تو جو" لتقليله أكثر.',
    'Calculamos nuestra huella de carbono para ser conscientes del impacto en el ecosistema y trabajamos para reducirla.': 'نحسب بصمتنا الكربونية لندرك تأثيرنا على النظام البيئي ونعمل على تقليلها.',
    'Proteger los océanos es prioridad: ayudamos en el cuidado y formamos parte de una región con el mayor número de banderas azules por la calidad del agua.': 'حماية المحيطات أولوية: نساعد في العناية وننتمي إلى منطقة بها أكبر عدد من الأعلام الزرقاء لجودة المياه.',
    'El cuidado de los ecosistemas es esencial: recomendamos siempre turismo sostenible con el menor impacto posible.': 'العناية بالنظم البيئية أمر أساسي: نوصي دائماً بالسياحة المستدامة بأقل تأثير ممكن.',
    'Buscamos proveedores y colaboramos con asociaciones locales que comparten nuestra filosofía para cumplir estos objetivos juntos.': 'نبحث عن موردين ونتعاون مع جمعيات محلية تشاركنا فلسفتنا لتحقيق هذه الأهداف معاً.'
  }
};

// === RENDERING ===============================================================
let idx = 0, busy = false, currentChart = null;

function translateCard(card, lang) {
  if (!translations[lang]) return card;
  const t = translations[lang];
  // Deep clone card
  const c = JSON.parse(JSON.stringify(card));
  if (c.title) c.title = t[c.title] || c.title;
  if (c.paragraphs) c.paragraphs = c.paragraphs.map(p => t[p] || p);
  if (c.list) c.list = c.list.map(li => ({ ...li, text: t[li.text] || t[li.text.replace(/،/g,',')] || li.text }));
  if (c.valores) c.valores = c.valores.map(v => ({ ...v, heading: t[v.heading] || v.heading, text: t[v.text] || v.text }));
  if (c.team) c.team = c.team.map(m => ({ ...m, role: t[m.role] || m.role, name: t[m.name] || m.name }));
  if (c.gallery) c.gallery = c.gallery.map(g => ({
    ...g,
    section: t[g.section] || g.section,
    images: g.images.map(im => ({ ...im, title: t[im.title] || im.title }))
  }));
  if (c.radial) c.radial = c.radial.map(r => ({ ...r, title: t[r.title] || r.title }));
  return c;
}

function setDots(i){
  dotBtns.forEach((d,k)=>{
    d.classList.toggle('active',k===i);
    d.setAttribute('aria-selected', k===i?'true':'false');
  });
}

function positionRadial() {
  const ring = document.querySelector('.radial-ring');
  if (!ring) return;
  const items = ring.querySelectorAll('.radial-item');
  if (!items.length) return;
  const infoBox = ring.querySelector('.radial-info');
  const rect = ring.getBoundingClientRect();
  const size = Math.min(rect.width, rect.height);
  const rCube = size / 2 - 70;
  const n = items.length;
  let activeIdx = null;
  items.forEach((el, i) => {
    const angle = (i * 2 * Math.PI / n) - Math.PI / 2;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const cx = rCube * cos;
    const cy = rCube * sin;
    el.style.left = `${50 + (cx / (size / 2)) * 50}%`;
    el.style.top = `${50 + (cy / (size / 2)) * 50}%`;
    const lbl = el.querySelector('.label');
    if (lbl) lbl.style.display = 'none';
    el.style.zIndex = 1;
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `ODS ${i+1}`);
  });
  // Click/keyboard logic: show info in center box until another is selected
  function showInfo(idx) {
    items.forEach(e => e.classList.remove('active'));
    items[idx].classList.add('active');
    if (infoBox) {
      // Use translated text for info box
      const desc = items[idx].getAttribute('data-desc');
      const translatedDesc = translations[currentLang] && translations[currentLang][desc] ? translations[currentLang][desc] : desc;
      infoBox.style.display = 'flex';
      infoBox.innerHTML = `<div class='radial-info-content'>${translatedDesc}</div>`;
    }
    activeIdx = idx;
  }
  items.forEach((el, i) => {
    el.onmouseenter = () => {
      showInfo(i);
    };
    el.onclick = () => {
      showInfo(i);
    };
    el.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        showInfo(i);
      }
      if (e.key === 'ArrowLeft') {
        showInfo((i-1+n)%n);
        items[(i-1+n)%n].focus();
      }
      if (e.key === 'ArrowRight') {
        showInfo((i+1)%n);
        items[(i+1)%n].focus();
      }
      if (e.key === 'Escape') {
        if (infoBox) infoBox.style.display = 'none';
        items[i].classList.remove('active');
        activeIdx = null;
      }
    };
  });
  // Hide info on mouseleave only if not clicked
  ring.onmouseleave = () => {
    if (activeIdx === null && infoBox) {
      infoBox.style.display = 'none';
      items.forEach(e => e.classList.remove('active'));
    }
  };
}

function renderCard(i, overrideCard) {
  const c = overrideCard || cards[i];
  let html = '<div class="card-content">';

  // Special layout for VALORES card
  if (c.valores) {
    html += `<div class="valores-wrap">`;
    html += `<h2 style="text-align:center; font-size:2.2rem; margin-bottom:2rem; color:var(--gold); font-family:'Playfair Display',serif;">${c.title}</h2>`;
    html += '<div class="valores-grid valores-grid-horizontal">';
    c.valores.forEach(val => {
      html += `
        <div class="valor-card">
          <div class="valor-img-wrap">
            <img src="${val.img}" alt="${val.heading}" class="valor-img" />
          </div>
          <h3 class="valor-heading">${translations[currentLang][val.heading] || val.heading}</h3>
          <p class="valor-text">${translations[currentLang][val.text] || val.text}</p>
        </div>
      `;
    });
    html += '</div></div>';
  } else if (c.team) {
    // Special layout for "They say it" card
    html += `<div class="valores-wrap">`;
    html += `<h2 style="text-align:center; font-size:2.2rem; margin-bottom:2rem; color:var(--gold); font-family:'Playfair Display',serif;">${translations[currentLang][c.title] || c.title}</h2>`;
    html += '<div class="valores-grid valores-grid-horizontal">';
    c.team.forEach(member => {
      html += `
        <div class="valor-card">
          <div class="valor-img-wrap">
            <img src="${member.img}" alt="${translations[currentLang][member.name] || member.name}" class="valor-img" />
          </div>
          <h3 class="valor-heading">${translations[currentLang][member.role] || member.role}</h3>
          <p class="valor-text">${translations[currentLang][member.name] || member.name}</p>
        </div>
      `;
    });
    html += '</div></div>';
  } else if (c.gallery) {
    // Special layout for gallery card
    html += `<div class="gallery-wrap gallery-scrollable">`;
    html += `<h2 style="text-align:center; font-size:2.2rem; margin-bottom:2rem; color:var(--gold); font-family:'Playfair Display',serif;">${translations[currentLang][c.title] || c.title}</h2>`;
    c.gallery.forEach(section => {
      html += `<div class="gallery-section">`;
      html += `<h3 class="gallery-section-title">${translations[currentLang][section.section] || section.section}</h3>`;
      html += `<div class="gallery-row">`;
      section.images.forEach((imgObj, idx) => {
        let style = '';
        if (section.section === 'Alicante imprescindible' || section.section === 'Playas de Bandera Azul') {
          style = 'object-fit:cover;aspect-ratio:1.5/1;';
        } else if (imgObj.style) {
          style = Object.entries(imgObj.style).map(([k,v]) => `${k}:${v};`).join('');
        }
        html += `
          <div class="gallery-img-wrap">
            <img src="${imgObj.src}" alt="${translations[currentLang][imgObj.title] || imgObj.title}" class="gallery-img" style="${style}" />
            <div class="gallery-img-title">${translations[currentLang][imgObj.title] || imgObj.title}</div>
          </div>
        `;
      });
      html += `</div></div>`;
    });
    html += `<div id="gallery-modal" class="gallery-modal" style="display:none;"></div>`;
    html += `</div>`;
  } else {
    html += '<div class="card-flex">';
    html += '<div class="text-column">';
    html += `<h2>${translations[currentLang][c.title] || c.title}</h2>`;
    (c.paragraphs || []).forEach(p => {
      html += `<p>${translations[currentLang][p] || p}</p>`;
    });
    if (c.list && c.list.length) {
      html += '<ul class="icon-list">';
      c.list.forEach(it => {
        html += `<li><i class="fa-solid fa-${it.icon}"></i><span>${translations[currentLang][it.text] || it.text}</span></li>`;
      });
      html += '</ul>';
    }
    html += '</div>';
    html += '<div class="chart-column">';
    if (c.radial) {
      html += `<div class="radial"><div class="radial-ring">`;
      c.radial.forEach(it => {
        const imgOrCube = it.img
          ? `<img class="cube" src="${it.img}" alt="ODS ${it.num}"
                 onerror="this.outerHTML='<div class=\'cube\'>${it.num}</div>'">`
          : `<div class="cube">${it.num}</div>`;
        html += `
          <div class="radial-item" data-desc="${translations[currentLang][it.title] || it.title}">
            ${imgOrCube}
            <div class="label">${translations[currentLang][it.title] || it.title}</div>
          </div>`;
      });
      html += `<div class="radial-info" style="display:none;"></div>`;
      html += `</div></div>`;
    } else if (c.chartjs) {
      html += '<div class="chart-container"><canvas id="chartjs-canvas"></canvas></div>';
      if (c.chartjs.custom && typeof c.chartjs.custom.casaIdx === 'number') {
        html += `<div style="text-align:center;margin-top:8px;font-size:1.08rem;color:var(--gold);font-family:'Playfair Display',serif;">
          <span style="font-weight:700;">${translations[currentLang][c.chartjs.custom.casaLabel] || c.chartjs.custom.casaLabel}</span>: <span style="color:var(--text);font-weight:600;">${c.chartjs.custom.casaValue} kgCO₂eq/hab ocup</span>
        </div>`;
      }
    } else if (c.alt) {
      let imgSrc = '';
      if (c.title === 'Turismo Responsable' || c.title === translations['es']['Turismo Responsable']) {
        imgSrc = 'Turismo.jpeg';
      } else if (c.title === 'Alicante: modelo de ciudad' || c.title === translations['es']['Alicante: modelo de ciudad']) {
        imgSrc = 'AlicanteCentro.jpg';
      } else {
        imgSrc = 'AlicanteCentro.jpg';
      }
      html += `<img class="card-img" src="${imgSrc}" alt="${translations[currentLang][c.alt] || c.alt}">`;
    }
    let imgSrc = c.image;
    if (c.title === 'Alicante: modelo de ciudad' || c.title === translations['es']['Alicante: modelo de ciudad']) {
      imgSrc = 'AlicanteCentro.jpg';
    }
    if (c.title === 'Turismo Responsable' || c.title === translations['es']['Turismo Responsable']) {
      imgSrc = 'Turismo.jpeg';
    }
    if (!c.alt && imgSrc) {
      html += `<img src="${imgSrc}" alt="${translations[currentLang][c.title] || c.title}" class="card-img">`;
    }
    html += '</div>';
    html += '</div>';
  }
  html += '</div>';
  cardEl.innerHTML = html;
  positionRadial();
  cardEl.setAttribute('aria-label', `${i + 1} de ${cards.length}`);
  setDots(i);
  setTimeout(() => setupChart(c), 0);
}

// Patch renderCard to use translation
const _renderCard = renderCard;
renderCard = function(i) {
  const c = translateCard(cards[i], currentLang);
  _renderCard(i, c);
};

function setupChart(c){
  if (currentChart){ currentChart.destroy(); currentChart = null; }
  if (!c.chartjs) return;

  const canvas = document.getElementById('chartjs-canvas');
  const ctx = canvas.getContext('2d');
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--gold').trim() || '#d4af37';
  const text   = getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#f7f7f7';

  // center text for doughnut
  const centerText = {
    id:'centerText',
    beforeDraw(chart){
      if (chart.config.type !== 'doughnut') return;
      const value = chart.config.data.datasets[0].data[0];
      const {ctx, chartArea:{left,top,width,height}} = chart;
      ctx.save();
      ctx.font = '700 32px Playfair Display, serif';
      ctx.fillStyle = accent;
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(value + '%', left + width/2, top + height/2);
      ctx.restore();
    }
  };

  let cfg;
  if (c.chartjs.type === 'doughnut'){
    cfg = {
      type:'doughnut',
      data:{ labels:c.chartjs.labels, datasets:[{ data:c.chartjs.data, backgroundColor:[accent,'rgba(255,255,255,.2)'], borderWidth:0 }] },
      options:{ cutout:'65%', responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false}, tooltip:{enabled:false} } },
      plugins:[centerText]
    };
  } else if (c.chartjs.type === 'bar'){
    cfg = {
      type:'bar',
      data:{ labels:c.chartjs.labels, datasets:[{ data:c.chartjs.data, backgroundColor:c.chartjs.data.map((_,i)=>i===c.chartjs.custom.casaIdx?accent:'rgba(255,255,255,.2)'), borderRadius:6, borderWidth:0 }] },
      options:{ responsive:true, maintainAspectRatio:false,
        scales:{ x:{ grid:{display:false}, ticks:{color:text}}, y:{ beginAtZero:true, grid:{color:'rgba(255,255,255,.1)'}, ticks:{color:text}} },
        plugins:{ legend:{display:false}, tooltip:{backgroundColor:'#111', titleColor:accent, bodyColor:text} }
      }
    };
  } else if (c.chartjs.type === 'line'){
    cfg = {
      type:'line',
      data:{ labels:c.chartjs.labels, datasets:[{ data:c.chartjs.data, borderColor:accent, borderWidth:3, pointBackgroundColor:accent, pointBorderColor:accent, tension:.3, fill:false }] },
      options:{ responsive:true, maintainAspectRatio:false,
        scales:{ x:{ grid:{display:false}, ticks:{color:text}}, y:{ beginAtZero:true, grid:{color:'rgba(255,255,255,.1)'}, ticks:{color:text}} },
        plugins:{ legend:{display:false}, tooltip:{backgroundColor:'#111', titleColor:accent, bodyColor:text} }
      }
    };
  }
  currentChart = new Chart(ctx, cfg);
}

// === NAV / TRANSITIONS =======================================================
function go(to){
  if (busy) return;
  const n = (to + cards.length) % cards.length; busy = true;
  const tl = gsap.timeline({ defaults:{ duration:.45, ease:'power2.out' }, onComplete(){ busy=false; } });
  tl.to(cardEl, { y:12, opacity:0, filter:'blur(3px)' })
    .add(()=>{ idx=n; renderCard(idx); })
    .to(cardEl, { y:0, opacity:1, filter:'blur(0px)' });
}

document.getElementById('prev').addEventListener('click', ()=>go(idx-1));
document.getElementById('next').addEventListener('click', ()=>go(idx+1));
Array.from(document.querySelectorAll('.dot')).forEach(d=>d.addEventListener('click',e=>go(Number(e.currentTarget.dataset.i))));
window.addEventListener('keydown',e=>{
  if (busy) return;
  if (e.key==='ArrowRight') go(idx+1);
  if (e.key==='ArrowLeft')  go(idx-1);
  if (/^[1-9]$/.test(e.key)) go(Number(e.key)-1);
});
window.addEventListener('resize', positionRadial);

let touchX=null;
window.addEventListener('touchstart',e=>{ if(e.touches[0]) touchX=e.touches[0].clientX; },{passive:true});
window.addEventListener('touchend',e=>{
  if (touchX===null) return;
  const dx=e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx)>40){ if(dx<0) go(idx+1); else go(idx-1); }
  touchX=null;
},{passive:true});

// === INTRO ANIMATION (split background) ======================================
const sliceL=document.querySelector('.slice.left');
const sliceR=document.querySelector('.slice.right');
const sliceB=document.querySelector('.slice.bottom');
const sliceT=document.querySelector('.slice.top');
const reveal =document.querySelector('.reveal');

gsap.set(sliceL,{x:'-60vw'});
gsap.set(sliceR,{x:'60vw'});
gsap.set(sliceB,{y:'60vh'});
gsap.set(sliceT,{y:'-60vh'});
gsap.set(cardEl,{opacity:0,scale:.985});
gsap.set(reveal,{opacity:1});

function boot(){
  // build dots again (in case cards changed) and render first
  renderCard(0);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    gsap.set([sliceL,sliceR,sliceB,sliceT],{x:0,y:0});
    gsap.set(cardEl,{opacity:1,scale:1});
    gsap.set(reveal,{opacity:0});
  } else {
    const tl = gsap.timeline({ defaults:{ease:'power3.out'} });
    tl.to(sliceL,{x:'0vw',duration:1.1},0)
      .to(sliceR,{x:'0vw',duration:1.1},0)
      .to(sliceB,{y:'0vh',duration:1.2},0.05)
      .to(sliceT,{y:'0vh',duration:1.2},0.05)
      .to(reveal,{opacity:0,duration:.35,ease:'power2.out'}, '-=0.15')
      .to(cardEl,{opacity:1,scale:1,duration:.8,ease:'power2.out'}, '-=0.1');
  }
}
document.addEventListener('DOMContentLoaded', boot);

// === GALLERY MODAL HANDLERS ==================================================
window.enlargeGalleryImg = function(event) {
  const wrap = event.currentTarget;
  const imgSrc = wrap.getAttribute('data-img');
  const imgTitle = wrap.getAttribute('data-title');
  let modal = document.getElementById('gallery-modal');
  if (!modal) return;
  modal.innerHTML = `
    <div class="gallery-modal-content" tabindex="0" role="dialog" aria-modal="true" aria-label="${imgTitle}">
      <div class="gallery-modal-title">${imgTitle}</div>
      <img src="${imgSrc}" alt="${imgTitle}" class="gallery-modal-img" />
      <button class="gallery-modal-close" aria-label="Cerrar" onclick="window.closeGalleryModal()">&times;</button>
    </div>
  `;
  modal.style.display = 'flex';
  modal.focus();
  // Add click anywhere to close
  modal.onclick = function(e) {
    if (e.target === modal) window.closeGalleryModal();
  };
  // Keyboard navigation
  modal.onkeydown = function(e) {
    if (e.key === 'Escape') window.closeGalleryModal();
    if (e.key === 'Tab') {
      const closeBtn = modal.querySelector('.gallery-modal-close');
      closeBtn.focus();
      e.preventDefault();
    }
  };
};
window.closeGalleryModal = function() {
  let modal = document.getElementById('gallery-modal');
  if (modal) modal.style.display = 'none';
};

// === YOUTUBE AUTOPLAY FALLBACK ===
(function(){
  const iframe = document.querySelector('.video-bg iframe');
  if (!iframe) return;
  let started = false;
  function restartVideo() {
    if (started) return;
    started = true;
    // Reload the iframe with autoplay and mute
    iframe.src = 'https://www.youtube.com/embed/HCNhaSZQaCQ?autoplay=1&mute=1&loop=1&playlist=HCNhaSZQaCQ&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&fs=0&disablekb=1';
  }
  ['click','keydown','touchstart'].forEach(evt => {
    window.addEventListener(evt, restartVideo, { once: true });
  });
})();

// === BACKGROUND MUSIC =======================================================
const bgAudio = document.createElement('audio');
bgAudio.src = 'background.mp3';
bgAudio.loop = true;
bgAudio.autoplay = true;
bgAudio.volume = 0.2;
bgAudio.style.display = 'none';
document.body.appendChild(bgAudio);

const muteBtn = document.createElement('button');
muteBtn.id = 'mute-btn';
muteBtn.innerHTML = '🔈';
muteBtn.style.position = 'fixed';
muteBtn.style.bottom = '32px';
muteBtn.style.right = '32px';
muteBtn.style.zIndex = '1002';
muteBtn.style.padding = '0.7em 1.3em';
muteBtn.style.fontSize = '1.1rem';
muteBtn.style.borderRadius = '2em';
muteBtn.style.border = 'none';
muteBtn.style.background = 'var(--gold)';
muteBtn.style.color = '#222';
muteBtn.style.fontWeight = '700';
muteBtn.style.cursor = 'pointer';
muteBtn.style.display = 'flex';
muteBtn.style.alignItems = 'center';
document.body.appendChild(muteBtn);

muteBtn.onclick = function() {
  bgAudio.muted = !bgAudio.muted;
  muteBtn.innerHTML = bgAudio.muted ? '🔇' : '🔈';
};