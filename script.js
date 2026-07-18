document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. TRANSLATIONS DICTIONARY (9 Languages) ---
    const translations = {
        ro: {
            // Navigation
            "nav-arh": "Arhitectura Minții",
            "nav-mec": "Mecanica Mentală",
            "nav-prot": "Protocolul Creației",
            "nav-rel": "Relații Autentice",
            "nav-sac": "Cele 10 Secunde",
            "nav-btn-text": "Inițiază Coborârea",
            
            // Audio panel
            "audio-label": "Sunet Alpha: OFF",
            "audio-label-on": "Sunet Alpha: ON",

            // Hero
            "hero-tagline": "Știința Subconștientului & Arta Manifestării",
            "hero-title": "Enter Alpha <br><span class='gradient-text'>This Way</span>",
            "hero-desc": "O metodologie riguroasă ce convertește misterul metafizic într-o știință aplicabilă a minții. Depășește barierele rațiunii critice și accesează frecvența cerebrală unde gândul capătă putere formatoare asupra realității fizice.",
            "hero-btn-primary": "Accesează Starea Alpha",
            "hero-btn-secondary": "Citește Eseul Filosofic",

            // Arhitectura
            "arh-tag": "Capitolul I",
            "arh-title": "Arhitectura Minții: Dincolo de Iluzia Controlului",
            "essay-dropcap": "M",
            "essay-p1": "intea umană funcționează într-o dualitate profundă, o diviziune ancestrală între rațiune și creație pe care Metoda Silva o transformă dintr-un mister intangibil într-o știință exactă și aplicabilă. Majoritatea existenței noastre diurne se desfășoară sub dictatura undelor Beta. Aceasta este starea de veghe, guvernată de o logică strict analitică. Rolul ei evolutiv este supraviețuirea: ea compară, se îndoiește, judecă, măsoară pericolele și critică în mod constant.",
            "essay-p2": "Însă, din perspectivă filosofică și psihologică, a încerca să îți schimbi realitatea profundă sau să atragi experiențe complet noi utilizând exclusiv această stare este echivalent cu a vorbi cuiva printr-un geam gros de sticlă. Lumea exterioară poate auzi ecoul efortului tău, zgomotul disperat al voinței, dar mesajul subtil, esența intenției, nu ajunge niciodată la destinație.",
            "btn-detail-arh": "Analiză Filosofică Detaliată",
            "essay-quote": "„Încercarea de a programa subconștientul din starea Beta este ca și cum ai scrie pe apă. În Alpha, scrii direct în structura intimă a realității tale.”",
            "chart-title": "Frecvențe Cerebrale & Stări de Conștiință",
            "chart-label-beta": "Beta (14 - 30 Hz) - Mintea Critică",
            "chart-label-alpha": "Alpha (8 - 12 Hz) - Mintea Creativă",
            "chart-label-theta": "Theta/Delta (0.5 - 7 Hz) - Somn Profund",

            // Mecanica
            "mec-tag": "Capitolul II",
            "mec-title": "Mecanica Mentală: Accesarea Subconștientului",
            "mec-desc": "Intrarea în acest sanctuar interior nu este o chestiune de noroc sau de simplă intenție pasivă. Ea necesită o „mecanică mentală” precisă, bazată pe acțiuni neuro-fizice clare pentru a dezarma gardianul minții critice.",
            "step-title-1": "Privirea Ridicată",
            "step-sub-1": "Reflexul neurologic primar",
            "step-desc-1": "Ridicarea ochilor cu doar câteva grade în sus (aproximativ 20 de grade față de linia orizontului), fără a tensiona mușchii oculari, declanșează un reflex neurologic ancestral. Creierul interpretează automat acest gest ca pe o intrare în starea de imaginație controlată.",
            "step-title-2": "Respirația Funcțională",
            "step-sub-2": "Ancorarea frecvenței",
            "step-desc-2": "Printr-o expirație prelungită și eliberarea mentală conștientă a comenzii sacadate „A-L-P-H-A”, declanșezi sistemul nervos parasimpatic. Creierul începe să asocieze acest sunet intern cu scăderea ritmului cardiac.",
            "step-title-3": "Coborârea Interioară",
            "step-sub-3": "Dilatarea realității",
            "step-desc-3": "Presupune o senzație subtilă și voluntară de a coborî mental o treaptă a conștientizării. Vei recunoaște atingerea stării Alpha prin indicatori bio-somatici preciși: corpul devine mai greu și perfect relaxat, iar volumul vocii interioare scade.",
            "btn-detail-mec": "Neurofiziologia Coborârii",
            "sim-title": "Simulator Interactiv de Frecvență",
            "sim-desc": "Urmărește oscilațiile și experimentează coborârea mentală ghidată. Inițiază trecerea de la Beta la Alpha.",
            "btn-descend": "Inițiază Coborârea în Alpha",
            "btn-ascend": "Revino în Beta (Veghe)",
            "sim-text-beta": "Starea Beta (15 - 30 Hz) - Minte Agitată & Critică",
            "sim-text-alpha": "Starea Alpha (8 - 12 Hz) - Deep Relaxation & Visual Creation",

            // Protocol
            "prot-tag": "Capitolul III",
            "prot-title": "Protocolul Creației: Cum Să Comanzi Universului Interior",
            "prot-desc": "Odată ce ai stabilizat starea Alpha, subconștientul este receptiv. Însă el nu recunoaște dorințele abstracte. Subconștientul comunică prin imagini holografice, intens încărcate emoțional.",
            "proto-step-title-1": "1. Vizualizarea finalului, nu a căii",
            "proto-step-desc-1": "Mintea profundă nu operează cu concepte legate de viitor; ea trăiește într-un etern prezent. Vizualizează rezultatul dorit ca și cum s-ar fi întâmplat deja. Dacă proiectezi vizualizarea ca pe un eveniment viitor, subconștientul o va menține permanent într-o stare de așteptare inactivă.",
            "proto-step-title-2": "2. Ancorarea senzorială",
            "proto-step-desc-2": "Subconștientul are nevoie de ancore tangibile pentru a valida noua realitate. Adaugă elemente senzoriale extrem de clare: textura unui obiect pe care îl atingi, intensitatea luminii dintr-o încăpere sau un sunet specific. Acest lucru transformă vizualizarea din fantezie în realitate.",
            "proto-step-title-3": "3. Declanșatorul emoțional",
            "proto-step-desc-3": "Aceasta este adevărata forță formatoare a realității. Emoția reprezintă declanșatorul neuro-chimic care trimite un semnal clar subconștientului: „acest eveniment este important, are valoare existențială și trebuie creat”. Simte recunoștința.",
            "proto-step-title-4": "4. Sigilarea prin Cuvânt",
            "proto-step-desc-4": "Utilizarea unei formule de autoritate mentală incontestabilă, cum ar fi „Așa este”, funcționează ca un decret clar și final. Acest lucru închide bucla logică și înlătură orice îndoială internă sau posibilitate de eșec.",
            "proto-step-title-5": "5. Blocarea auto-sabotajului",
            "proto-step-desc-5": "Întrebările defensive de tipul „cât va dura?” sau „cum se va întâmpla?” anulează instrucțiunea inițială. Procesul trebuie sigilat ferm în minte prin afirmarea silențioasă a frazei: „S-a împlinit”, urmată de detașarea totală.",
            "btn-detail-prot": "Ghidul de Programare Subconștientă",

            // Relatii
            "rel-tag": "Capitolul IV",
            "rel-title": "Aplicabilitatea Supremă: Manifestarea Relațiilor Autentice",
            "rel-desc": "Mecanica mentală a stării Alpha transcende succesul material și devine un instrument de o profunzime excepțională în modelarea experiențelor umane — în mod deosebit în plan relațional. Când utilizezi Metoda Silva pentru a manifesta o relație armonioasă, instrucțiunea nu se bazează pe control sau codependență, ci pe egalitate și respect reciproc.",
            "rel-feat-title-1": "Ancora Senzorială Conștientă",
            "rel-feat-desc-1": "În starea Alpha, vizualizează și simte textura unei mâini care o sprijină pe a ta — caldă, fermă, fără să te strângă posesiv. Ascultă tonul unei voci care îți oferă un spațiu complet non-judecativ.",
            "rel-feat-title-2": "Declanșatorul Vulnerabilității",
            "rel-feat-desc-2": "Trăiește intens sentimentul de ușurare și bucuria profundă de a fi vulnerabil în perfectă siguranță. Subconștientul tău va activa percepția care atrage dinamici mature și conștiente.",
            "btn-detail-rel": "Psihologia Atașamentului Securizat",

            // Sacre
            "sac-tag": "Capitolul V",
            "sac-title": "Cele 10 Secunde Sacre și Punctul Fără Întoarcere",
            "sac-desc": "Filosofia manifestării culminează cu un act de prezență absolută. După finalizarea protocolului de vizualizare, secretul celor care obțin rezultate durabile este să rămână în starea Alpha pentru încă 10 secunde. Acesta este punctul fără întoarcere, în care imaginea, emoția și intenția fuzionează într-o singură instrucțiune bio-chimică.",
            "sac-neuro": "În aceste secunde sacre, creierul profund își reorganizează conexiunile sinaptice. Sistemul Reticular Activat (SRA) își rescrie filtrele cognitive, atenția se ascute, iar chimia corpului se modifică pentru a rezona cu comanda transmisă.",
            "btn-trigger-timer": "Inițiază Cele 10 Secunde Sacre",
            "btn-detail-sac": "Neurobiologia Plasticității",

            // Footer
            "footer-truth": "Este vital să înțelegem un principiu profund eliberator: subconștientul tău nu lucrează niciodată împotriva ta. Dacă realitatea ta prezentă nu reflectă dorințele tale, este pur și simplu pentru că subconștientul a executat cu fidelitate ultima instrucțiune dominantă pe care a primit-o, chiar dacă a fost una inconștientă.",
            "footer-copyright": "&copy; 2026 Silva Alpha. Ghid creat sub egida psihologiei aplicate și a mecanicii mentale.",
            "footer-invite": "Închide ochii, ridică privirea și lasă tăcerea să scrie realitatea."
        },
        en: {
            "nav-arh": "Mind Architecture",
            "nav-mec": "Mental Mechanics",
            "nav-prot": "Creation Protocol",
            "nav-rel": "Authentic Relations",
            "nav-sac": "The 10 Seconds",
            "nav-btn-text": "Initiate Descent",
            "audio-label": "Alpha Sound: OFF",
            "audio-label-on": "Alpha Sound: ON",
            "hero-tagline": "Science of the Subconscious & Art of Manifestation",
            "hero-title": "Enter Alpha <br><span class='gradient-text'>This Way</span>",
            "hero-desc": "A rigorous methodology converting metaphysical mystery into an applicable science of the mind. Transcending critical reasoning barriers, it accesses the brain frequency where thought acquires formative power over physical reality.",
            "hero-btn-primary": "Access Alpha State",
            "hero-btn-secondary": "Read Philosophical Essay",
            "arh-tag": "Chapter I",
            "arh-title": "Mind Architecture: Beyond the Illusion of Control",
            "essay-dropcap": "T",
            "essay-p1": "he human mind operates in a deep duality, an ancestral division between reason and creation that the Silva Method transforms from an intangible mystery into an exact and applicable science. Most of our daytime existence takes place under the dictatorship of Beta waves. This is the waking state, governed by a strictly analytical logic. Its evolutionary role is survival: it compares, doubts, judges, measures dangers, and constantly criticizes.",
            "essay-p2": "However, from a philosophical and psychological perspective, trying to change your deep reality or attract completely new experiences using only this state is equivalent to talking to someone through a thick glass window. The external world can hear the echo of your effort, the desperate noise of your will, but the subtle message, the essence of the intent, never reaches its destination.",
            "btn-detail-arh": "Detailed Philosophical Analysis",
            "essay-quote": "“Trying to program the subconscious from the Beta state is like writing on water. In Alpha, you write directly into the intimate structure of your reality.”",
            "chart-title": "Brain Frequencies & States of Consciousness",
            "chart-label-beta": "Beta (14 - 30 Hz) - Critical Mind",
            "chart-label-alpha": "Alpha (8 - 12 Hz) - Creative Mind",
            "chart-label-theta": "Theta/Delta (0.5 - 7 Hz) - Deep Sleep",
            "mec-tag": "Chapter II",
            "mec-title": "Mental Mechanics: Accessing the Subconscious",
            "mec-desc": "Entering this inner sanctuary is not a matter of luck or passive intent. It requires precise 'mental mechanics' based on clear neuro-physical actions to disarm the critical mind's guardian.",
            "step-title-1": "The Upward Gaze",
            "step-sub-1": "Primary Neurological Reflex",
            "step-desc-1": "Raising the eyes just a few degrees upward (about 20 degrees above the horizon), without straining the eye muscles, triggers an ancestral neurological reflex. The brain automatically interprets this as entry into controlled imagination.",
            "step-title-2": "Functional Breathing",
            "step-sub-2": "Anchoring the Frequency",
            "step-desc-2": "Through a prolonged exhalation and conscious mental release of the paced command 'A-L-P-H-A', you trigger the parasympathetic nervous system. The brain begins to associate this internal sound with heart rate reduction.",
            "step-title-3": "Inner Descent",
            "step-sub-3": "Dilation of Reality",
            "step-desc-3": "Involves a subtle, voluntary sensation of descending a step of awareness. You will recognize reaching the Alpha state by precise bio-somatic indicators: the body becomes heavier and perfectly relaxed, and the volume of the inner voice drops.",
            "btn-detail-mec": "Neurophysiology of Descent",
            "sim-title": "Interactive Frequency Simulator",
            "sim-desc": "Monitor the oscillations and experience guided mental descent. Initiate transition from Beta to Alpha.",
            "btn-descend": "Initiate Descent into Alpha",
            "btn-ascend": "Return to Beta (Waking)",
            "sim-text-beta": "Beta State (15 - 30 Hz) - Restless & Critical Mind",
            "sim-text-alpha": "Alpha State (8 - 12 Hz) - Deep Relaxation & Visual Creation",
            "prot-tag": "Chapter III",
            "prot-title": "Creation Protocol: How to Command Your Inner Universe",
            "prot-desc": "Once you stabilize the Alpha state, the subconscious is receptive. However, it does not recognize abstract desires. The subconscious communicates through holographic images, intensely charged with emotion.",
            "proto-step-title-1": "1. Visualizing the end, not the path",
            "proto-step-desc-1": "The deep mind does not operate with future concepts; it lives in an eternal present. Visualize the desired outcome as if it has already occurred. If you project the visualization as a future event, the subconscious keeps it in an inactive waiting state.",
            "proto-step-title-2": "2. Sensory anchoring",
            "proto-step-desc-2": "The subconscious needs tangible anchors to validate the new reality. Add extremely clear sensory elements: the texture of an object you touch, the intensity of light in a room, or a specific sound. This turns visualization from fantasy into reality.",
            "proto-step-title-3": "3. Emotional trigger",
            "proto-step-desc-3": "This is the true forming force of reality. Emotion represents the neuro-chemical trigger sending a clear signal to the subconscious: 'this event is important, has existential value, and must be created.' Feel the gratitude.",
            "proto-step-title-4": "4. Sealing by Word",
            "proto-step-desc-4": "Using a formula of unquestionable mental authority, such as 'It is so', functions as a clear and final decree. This closes the logic loop and removes all internal doubt or possibility of failure.",
            "proto-step-title-5": "5. Blocking self-sabotage",
            "proto-step-desc-5": "Defensive questions like 'how long will it take?' or 'how will it happen?' cancel the original instruction. The process must be sealed firmly in mind by silently stating: 'It is fulfilled', followed by total detachment.",
            "btn-detail-prot": "Subconscious Programming Guide",
            "rel-tag": "Chapter IV",
            "rel-title": "Supreme Applicability: Manifesting Authentic Relations",
            "rel-desc": "The mental mechanics of the Alpha state transcend material success and become an exceptionally deep tool in shaping human experiences — especially in relationships. When using the Silva Method to manifest a harmonious relationship, the instruction is not based on control or codependency, but on equality and mutual respect.",
            "rel-feat-title-1": "Conscious Sensory Anchor",
            "rel-feat-desc-1": "In the Alpha state, visualize and feel the texture of a hand supporting yours — warm, firm, but without holding possessively. Listen to the tone of a voice offering a completely non-judgmental space.",
            "rel-feat-title-2": "Vulnerability Trigger",
            "rel-feat-desc-2": "Intensely live the feeling of relief and the deep joy of being vulnerable in perfect safety. Your subconscious will activate perception attracting mature and conscious dynamics.",
            "btn-detail-rel": "Psychology of Secure Attachment",
            "sac-tag": "Chapter V",
            "sac-title": "The 10 Sacred Seconds and the Point of No Return",
            "sac-desc": "The philosophy of manifestation culminates in an act of absolute presence. After completing the visualization protocol, the secret of those who achieve lasting results is to remain in the Alpha state for another 10 seconds. This is the point of no return, where image, emotion, and intent fuse into a single bio-chemical instruction.",
            "sac-neuro": "In these sacred seconds, the deep brain reorganizes its synaptic connections. The Reticular Activating System (RAS) rewrites its cognitive filters, attention sharpens, and body chemistry modifies to resonate with the transmitted command.",
            "btn-trigger-timer": "Initiate 10 Sacred Seconds",
            "btn-detail-sac": "Neurobiology of Plasticity",
            "footer-truth": "It is vital to understand a deeply liberating principle: your subconscious never works against you. If your present reality does not reflect your desires, it is simply because the subconscious has faithfully executed the last dominant instruction it received, even if it was an unconscious one.",
            "footer-copyright": "&copy; 2026 Silva Alpha. Guide created under the aegis of applied psychology and mental mechanics.",
            "footer-invite": "Close your eyes, look up, and let the silence write reality."
        },
        pt: {
            "nav-arh": "Arquitetura da Mente",
            "nav-mec": "Mecânica Mental",
            "nav-prot": "Protocolo de Criação",
            "nav-rel": "Relações Autênticas",
            "nav-sac": "Os 10 Segundos",
            "nav-btn-text": "Iniciar Descida",
            "audio-label": "Som Alpha: OFF",
            "audio-label-on": "Som Alpha: ON",
            "hero-tagline": "Ciência do Subconsciente & Arte da Manifestação",
            "hero-title": "Enter Alpha <br><span class='gradient-text'>This Way</span>",
            "hero-desc": "Uma metodologia rigorosa que converte o mistério metafísico em ciência aplicável da mente. Ultrapasse as barreiras da razão crítica e aceda à frequência cerebral onde o pensamento ganha poder formativo sobre a realidade física.",
            "hero-btn-primary": "Aceder ao Estado Alpha",
            "hero-btn-secondary": "Ler Ensaio Filosófico",
            "arh-tag": "Capítulo I",
            "arh-title": "Arquitetura da Mente: Além da Ilusão de Controlo",
            "essay-dropcap": "A",
            "essay-p1": " mente humana funciona numa dualidade profunda, uma divisão ancestral entre razão e criação que o Método Silva transforma de um mistério intangível numa ciência exata e aplicável. A maior parte da nossa existência diurna ocorre sob a ditadura das ondas Beta. Este é o estado de vigília, governado por uma lógica estritamente analítica. O seu papel evolutivo é a sobrevivência: compara, duvida, julga, mede perigos e critica constantemente.",
            "essay-p2": "No entanto, de uma perspetiva filosófica e psicológica, tentar mudar a sua realidade profunda ou atrair experiências completamente novas utilizando apenas este estado é o equivalente a falar com alguém através de uma janela de vidro grosso. O mundo exterior pode ouvir o eco do seu esforço, o ruído desesperado da sua vontade, mas a mensagem subtil, a essência da intenção, nunca chega ao seu destino.",
            "btn-detail-arh": "Análise Filosófica Detalhada",
            "essay-quote": "“Tentar programar o subconsciente a partir do estado Beta é como escrever na água. Em Alpha, escreve diretamente na estrutura íntima da sua realidade.”",
            "chart-title": "Frequências Cerebrais & Estados de Consciência",
            "chart-label-beta": "Beta (14 - 30 Hz) - Mente Crítica",
            "chart-label-alpha": "Alpha (8 - 12 Hz) - Mente Criativa",
            "chart-label-theta": "Theta/Delta (0.5 - 7 Hz) - Sono Profundo",
            "mec-tag": "Capítulo II",
            "mec-title": "Mecânica Mental: Aceder ao Subconsciente",
            "mec-desc": "Entrar neste santuário interior não é uma questão de sorte ou de simples intenção passiva. Requer uma 'mecânica mental' precisa, baseada em ações neurofísicas claras para desarmar o guardião da mente crítica.",
            "step-title-1": "O Olhar Elevado",
            "step-sub-1": "Reflexo Neurológico Primário",
            "step-desc-1": "Elevar os olhos apenas alguns graus para cima (cerca de 20 graus acima do horizonte), sem forçar os músculos oculares, desencadeia um reflexo neurológico ancestral. O cérebro interpreta automaticamente isso como entrada na imaginação controlada.",
            "step-title-2": "Respiração Funcional",
            "step-sub-2": "Ancorar a Frequência",
            "step-desc-2": "Através de uma exalação prolongada e da libertação mental consciente do comando compassado 'A-L-P-H-A', ativa o sistema nervoso parassimpático. O cérebro começa a associar este som interno à redução da frequência cardíaca.",
            "step-title-3": "Descida Interior",
            "step-sub-3": "Dilatação da Realidade",
            "step-desc-3": "Envolve uma sensação subtil e voluntária de descer um degrau de consciência. Reconhecerá ter atingido o estado Alpha através de indicadores biossomáticos precisos: o corpo torna-se mais pesado e perfeitamente relaxado, e o volume da voz interior diminui.",
            "btn-detail-mec": "Neurofisiologia da Descida",
            "sim-title": "Simulador Interativo de Frequência",
            "sim-desc": "Monitorize as oscilações e experimente a descida mental guiada. Inicie a transição de Beta para Alpha.",
            "btn-descend": "Iniciar Descida em Alpha",
            "btn-ascend": "Voltar para Beta (Vigília)",
            "sim-text-beta": "Estado Beta (15 - 30 Hz) - Mente Inquieta & Crítica",
            "sim-text-alpha": "Estado Alpha (8 - 12 Hz) - Relaxamento Profundo & Criação Visual",
            "prot-tag": "Capítulo III",
            "prot-title": "Protocolo de Criação: Como Comandar o Seu Universo Interior",
            "prot-desc": "Uma vez estabilizado o estado Alpha, o subconsciente fica recetivo. No entanto, não reconhece desejos abstratos. O subconsciente comunica através de imagens holográficas, intensamente carregadas de emoção.",
            "proto-step-title-1": "1. Visualizar o fim, não o caminho",
            "proto-step-desc-1": "A mente profunda não opera com conceitos futuros; vive num eterno presente. Visualize o resultado desejado como se já tivesse ocorrido. Se projetar a visualização como um evento futuro, o subconsciente mantém-na num estado de espera inativo.",
            "proto-step-title-2": "2. Ancoragem sensorial",
            "proto-step-desc-2": "O subconsciente precisa de âncoras tangíveis para validar a nova realidade. Adicione elementos sensoriais extremamente claros: a textura de um objeto em que toca, a intensidade da luz num quarto ou um som específico. Isto transforma a visualização de fantasia em realidade.",
            "proto-step-title-3": "3. Gatilho emocional",
            "proto-step-desc-3": "Esta é a verdadeira força formadora da realidade. A emoção representa o gatilho neuroquímico que envia um sinal claro ao subconsciente: 'este evento é importante, tem valor existencial e deve ser criado.' Sinta a gratidão.",
            "proto-step-title-4": "4. Selagem pela Palavra",
            "proto-step-desc-4": "Usar uma fórmula de inquestionável autoridade mental, como 'Assim é', funciona como um decreto claro e final. Isto fecha o ciclo lógico e remove qualquer dúvida interna ou possibilidade de fracasso.",
            "proto-step-title-5": "5. Bloquear a autossabotagem",
            "proto-step-desc-5": "Perguntas defensivas como 'quanto tempo vai demorar?' ou 'como vai acontecer?' cancelam a instrução original. O processo deve ser selado firmemente na mente afirmando silenciosamente: 'Está cumprido', seguido de desapego total.",
            "btn-detail-prot": "Guia de Programação Subconsciente",
            "rel-tag": "Capítulo IV",
            "rel-title": "Aplicabilidade Suprema: Manifestar Relações Autênticas",
            "rel-desc": "A mecânica mental do estado Alpha transcende o sucesso material e torna-se uma ferramenta de profundidade excecional na formação de experiências humanas — especialmente em relacionamentos. Ao usar o Método Silva para manifestar uma relação harmoniosa, a instrução não se baseia em controlo ou codependência, mas em igualdade e respeito mútuo.",
            "rel-feat-title-1": "Âncora Sensorial Consciente",
            "rel-feat-desc-1": "No estado Alpha, visualize e sinta a textura de uma mão que apoia a sua — quente, firme, mas sem segurar possessivamente. Escute o tom de uma voz que oferece um espaço completamente livre de julgamentos.",
            "rel-feat-title-2": "Gatilho da Vulnerabilidade",
            "rel-feat-desc-2": "Viva intensamente o sentimento de alívio e a profunda alegria de ser vulnerável em perfeita segurança. O seu subconsciente ativará a perceção que atrai dinâmicas maduras e conscientes.",
            "btn-detail-rel": "Psicologia do Apego Seguro",
            "sac-tag": "Capítulo V",
            "sac-title": "Os 10 Segundos Sagrados e o Ponto de Não Retorno",
            "sac-desc": "A filosofia da manifestação culmina num ato de presença absoluta. Após concluir o protocolo de visualização, o segredo daqueles que obtêm resultados duradouros é permanecer no estado Alpha por mais 10 segundos. Este é o ponto de não retorno, onde imagem, emoção e intenção se fundem numa única instrução bioquímica.",
            "sac-neuro": "Nestes segundos sagrados, o cérebro profundo reorganiza as suas ligações sinápticas. O Sistema de Ativação Reticular (SAR) reescreve os seus filtros cognitivos, a atenção aguça-se e a química do corpo modifica-se para ressonar com o comando transmitido.",
            "btn-trigger-timer": "Iniciar 10 Segundos Sagrados",
            "btn-detail-sac": "Neurobiologia da Plasticidade",
            "footer-truth": "É vital compreender um princípio profundamente libertador: o seu subconsciente nunca trabalha contra si. Se a sua realidade presente não reflete os seus desejos, é simplesmente porque o subconsciente executou fielmente a última instrução dominante que recebeu, mesmo que tenha sido inconsciente.",
            "footer-copyright": "&copy; 2026 Silva Alpha. Guia criado sob a égide da psicologia aplicada e mecânica mental.",
            "footer-invite": "Feche os olhos, olhe para cima e deixe o silêncio escrever a realidade."
        },
        es: {
            "nav-arh": "Arquitectura Mental",
            "nav-mec": "Mecánica Mental",
            "nav-prot": "Protocolo de Creación",
            "nav-rel": "Relaciones Auténticas",
            "nav-sac": "Los 10 Segundos",
            "nav-btn-text": "Iniciar Descenso",
            "audio-label": "Sonido Alpha: OFF",
            "audio-label-on": "Sonido Alpha: ON",
            "hero-tagline": "Ciencia del Subconsciente & Arte de la Manifestación",
            "hero-title": "Enter Alpha <br><span class='gradient-text'>This Way</span>",
            "hero-desc": "Una metodología rigurosa que convierte el misterio metafísico en una ciencia aplicable de la mente. Supera las barreras de la razón crítica y accede a la frecuencia cerebral donde el pensamiento adquiere poder formativo sobre la realidad física.",
            "hero-btn-primary": "Acceder al Estado Alpha",
            "hero-btn-secondary": "Leer Ensayo Filosófico",
            "arh-tag": "Capítulo I",
            "arh-title": "Arquitectura Mental: Más allá de la Ilusión del Control",
            "essay-dropcap": "L",
            "essay-p1": "a mente humana funciona en una dualidad profunda, una división ancestral entre razón y creación que el Método Silva transforma de un misterio intangible a una ciencia exacta y aplicable. La mayor parte de nuestra existencia diurna transcurre bajo la dictadura de las ondas Beta. Este es el estado de vigilia, gobernado por una lógica estrictamente analítica. Su papel evolutivo es la supervivencia: compara, duda, juzga, mide peligros y critica constantemente.",
            "essay-p2": "Sin embargo, desde una perspectiva filosófica y psicológica, intentar cambiar tu realidad profunda o atraer experiencias completamente nuevas utilizando únicamente este estado equivale a hablar con alguien a través de un vidrio grueso. El mundo exterior puede escuchar el eco de tu esfuerzo, el ruido desesperado de tu voluntad, pero el mensaje sutil, la esencia de la intención, nunca llega a su destino.",
            "btn-detail-arh": "Análisis Filosófico Detallado",
            "essay-quote": "“Intentar programar el subconsciente desde el estado Beta es como escribir sobre el agua. En Alpha, escribes directamente en la estructura íntima de tu realidad.”",
            "chart-title": "Frecuencias Cerebrales & Estados de Conciencia",
            "chart-label-beta": "Beta (14 - 30 Hz) - Mente Crítica",
            "chart-label-alpha": "Alpha (8 - 12 Hz) - Mente Creativa",
            "chart-label-theta": "Theta/Delta (0.5 - 7 Hz) - Sueño Profundo",
            "mec-tag": "Capítulo II",
            "mec-title": "Mecánica Mental: Acceder al Subconsciente",
            "mec-desc": "Entrar en este santuario interior no es cuestión de suerte o de simple intención pasiva. Requiere una 'mecánica mental' precisa, basada en acciones neurofísicas claras para desarmar al guardián de la mente crítica.",
            "step-title-1": "La Mirada Elevada",
            "step-sub-1": "Reflexo Neurológico Primario",
            "step-desc-1": "Elevar los ojos sólo unos grados hacia arriba (unos 20 grados sobre la línea del horizonte), sin tensar los músculos oculares, desencadena un reflejo neurológico ancestral. El cerebro interpreta esto automáticamente como entrada en la imaginación controlada.",
            "step-title-2": "Respiración Funcional",
            "step-sub-2": "Anclar la Frecuencia",
            "step-desc-2": "A través de una exhalación prolongada y la liberación mental consciente de la instrucción acompasada 'A-L-P-H-A', activas el sistema nervioso parasimpático. El cerebro asocia este sonido interno con la reducción del ritmo cardíaco.",
            "step-title-3": "Descenso Interior",
            "step-sub-3": "Dilatación de la Realidad",
            "step-desc-3": "Implica una sensación sutil y voluntaria de descender un peldaño de conciencia. Reconocerás haber alcanzado el estado Alpha por indicadores biosomáticos precisos: el cuerpo se vuelve más pesado y relajado, y disminuye la voz interior.",
            "btn-detail-mec": "Neurofisiología del Descenso",
            "sim-title": "Simulador Interactivo de Frecuencia",
            "sim-desc": "Monitorea las oscilaciones y experimenta el descenso mental guiado. Inicia la transición de Beta a Alpha.",
            "btn-descend": "Iniciar Descenso en Alpha",
            "btn-ascend": "Volver a Beta (Vigilia)",
            "sim-text-beta": "Estado Beta (15 - 30 Hz) - Mente Inquieta & Crítica",
            "sim-text-alpha": "Estado Alpha (8 - 12 Hz) - Relajación Profunda & Creación Visual",
            "prot-tag": "Capítulo III",
            "prot-title": "Protocolo de Creación: Cómo Comandar tu Universo Interior",
            "prot-desc": "Una vez estabilizado el estado Alpha, el subconsciente es receptivo. Sin embargo, no reconoce deseos abstractos. El subconsciente se comunica mediante imágenes holográficas, intensamente cargadas de emoción.",
            "proto-step-title-1": "1. Visualizar el final, no el camino",
            "proto-step-desc-1": "La mente profunda no opera con conceptos futuros; vive en un eterno presente. Visualiza el resultado deseado como si ya hubiera ocurrido. Si proyectas la visualización como un evento futuro, el subconsciente la mantiene en espera inactiva.",
            "proto-step-title-2": "2. Anclaje sensorial",
            "proto-step-desc-2": "El subconsciente necesita anclas tangibles para validar la nueva realidad. Añade elementos sensoriales muy claros: la textura de un objeto que tocas, la intensidad de la luz en una habitación o un sonido específico. Esto transforma la visualización de fantasía a realidad.",
            "proto-step-title-3": "3. Disparador emocional",
            "proto-step-desc-3": "Esta es la verdadera fuerza formadora de la realidad. La emoción representa el disparador neuroquímico que envía una señal clara al subconsciente: 'este evento es importante y debe ser creado.' Siente la gratitud.",
            "proto-step-title-4": "4. Sellado por la Palabra",
            "proto-step-desc-4": "Usar una fórmula de indiscutible autoridad mental, como 'Así es', funciona como un decreto claro y final. Esto cierra el ciclo lógico y elimina cualquier duda interna o posibilidad de fracaso.",
            "proto-step-title-5": "5. Bloquear el autosabotaje",
            "proto-step-desc-5": "Preguntas defensivas como '¿cuánto tardará?' o '¿cómo sucederá?' cancelan la instrucción original. El proceso debe sellarse firmemente en la mente afirmando silenciosamente: 'Se ha cumplido', seguido de un desapego total.",
            "btn-detail-prot": "Guía de Programación Subconsciente",
            "rel-tag": "Capítulo IV",
            "rel-title": "Aplicabilidad Suprema: Manifestar Relaciones Auténticas",
            "rel-desc": "La mecánica mental del estado Alpha trasciende el éxito material y se convierte en una herramienta de una profundidad excepcional para modelar las experiencias humanas, sobre todo en lo relacional. Al aplicar el Método Silva para manifestar una relación armoniosa, la instrucción no se basa en el control ni en la codependencia, sino en la igualdad y el respeto mutuo.",
            "rel-feat-title-1": "Ancla Sensorial Consciente",
            "rel-feat-desc-1": "En el estado Alpha, visualiza y siente la textura de una mano que sostiene la tuya: cálida, firme, pero sin apretar posesivamente. Escucha el tono de una voz que ofrece un espacio libre de juicios.",
            "rel-feat-title-2": "Disparador de Vulnerabilidad",
            "rel-feat-desc-2": "Vive intensamente el sentimiento de alivio y la profunda alegría de poder ser vulnerable en perfecta seguridad. Tu subconsciente ajustará la percepción para atraer dinámicas maduras y conscientes.",
            "btn-detail-rel": "Psicología del Apego Seguro",
            "sac-tag": "Capítulo V",
            "sac-title": "Los 10 Segundos Sagrados y el Punto de No Retorno",
            "sac-desc": "La filosofía de la manifestación culmina en un acto de presencia absoluta. Tras completar el protocolo de visualización, el secreto de quienes obtienen resultados duraderos es permanecer en el estado Alpha 10 segundos más. Este es el punto de no retorno, donde imagen, emoción e intención se fusionan en una sola instrucción bioquímica.",
            "sac-neuro": "En estos segundos sagrados, el cerebro profundo reorganiza sus conexiones sinápticas. El Sistema de Activación Reticular (SAR) reescribe sus filtros cognitivos, la atención se agudiza y la química corporal cambia para resonar con el mandato.",
            "btn-trigger-timer": "Iniciar 10 Segundos Sagrados",
            "btn-detail-sac": "Neurobiología de la Plasticidad",
            "footer-truth": "Es vital comprender un principio profundamente liberador: tu subconsciente nunca trabaja en tu contra. Si tu realidad presente no refleja tus deseos, es simplemente porque el subconsciente ha ejecutado con fidelidad la última instrucción dominante que recibió, aunque haya sido inconsciente.",
            "footer-copyright": "&copy; 2026 Silva Alpha. Guía creada bajo la égida de la psicología aplicada y la mecánica mental.",
            "footer-invite": "Cierra los ojos, mira hacia arriba y deja que el silencio escriba la realidad."
        },
        it: {
            "nav-arh": "Architettura della Mente",
            "nav-mec": "Meccanica Mentale",
            "nav-prot": "Protocollo di Creazione",
            "nav-rel": "Relazioni Autentiche",
            "nav-sac": "I 10 Secondi",
            "nav-btn-text": "Inizia la Discesa",
            "audio-label": "Audio Alpha: OFF",
            "audio-label-on": "Audio Alpha: ON",
            "hero-tagline": "Scienza del Subconscio & Arte della Manifestazione",
            "hero-title": "Enter Alpha <br><span class='gradient-text'>This Way</span>",
            "hero-desc": "Una metodologia rigorosa che converte il mistero metafisico in scienza applicabile della mente. Supera le barriere della ragione critica e accedi alla frequenza cerebrale dove il pensiero acquisisce potere formativo sulla realtà fisica.",
            "hero-btn-primary": "Accedi allo Stato Alpha",
            "hero-btn-secondary": "Leggi il Saggio Filosofico",
            "arh-tag": "Capitolo I",
            "arh-title": "Architettura della Mente: Oltre l'Illusione del Controllo",
            "essay-dropcap": "L",
            "essay-p1": "a mente umana funziona in una dualità profonda, una divisione ancestrale tra ragione e creazione che il Metodo Silva trasforma da un mistero intangibile a una scienza esatta e applicabile. La maggior parte della nostra esistenza diurna si svolge sotto la dittatura delle onde Beta. Questo è lo stato di veglia, governato da una logica strettamente analitica. Il suo ruolo evolutivo è la sopravvivenza: confronta, dubita, giudica, misura i pericoli e critica costantemente.",
            "essay-p2": "Tuttavia, da una prospettiva filosofica e psicologica, tentare di cambiare la tua realtà profonda o attrarre esperienze completamente nuove utilizzando esclusivamente questo stato equivale a parlare a qualcuno attraverso un vetro spesso. Il mondo esterno può sentire l'eco del tuo sforzo, il rumore disperato della tua volontà, ma il messaggio sottile, l'essenza dell'intenzione, non giunge mai a destinazione.",
            "btn-detail-arh": "Analisi Filosofica Dettagliata",
            "essay-quote": "“Tentare di programmare il subconscio dallo stato Beta è come scrivere sull'acqua. In Alpha, scrivi direttamente nella struttura intima della tua realtà.”",
            "chart-title": "Frequenze Cerebrali & Stati di Coscienza",
            "chart-label-beta": "Beta (14 - 30 Hz) - Mente Critica",
            "chart-label-alpha": "Alpha (8 - 12 Hz) - Mente Creativa",
            "chart-label-theta": "Theta/Delta (0.5 - 7 Hz) - Sonno Profondo",
            "mec-tag": "Capitolo II",
            "mec-title": "Meccanica Mentale: Accedere al Subconscio",
            "mec-desc": "Entrare in questo santuario interiore non è una questione di fortuna o di semplice intenzione passiva. Richiede una 'meccanica mentale' precisa, basata su chiare azioni neuro-fisiologiche per disarmare il guardiano della mente critica.",
            "step-title-1": "Lo Sguardo Elevato",
            "step-sub-1": "Riflesso Neurologico Primario",
            "step-desc-1": "Sollevare gli occhi solo di pochi gradi verso l'alto (circa 20 gradi sopra la linea dell'orizzonte), senza tendere i muscoli oculari, innesca un riflesso neurologico ancestrale. Il cervello interpreta questo gesto come ingresso nell'immaginazione controllata.",
            "step-title-2": "Respirazione Funzionale",
            "step-sub-2": "Ancorare la Frequenza",
            "step-desc-2": "Attraverso un'espirazione prolungata e il rilascio mentale consapevole della formula a ritmo 'A-L-P-H-A', attivi il sistema nervoso parasimpatico. Il cervello associa questo suono interno alla riduzione della frequenza cardiaca.",
            "step-title-3": "Discesa Interiore",
            "step-sub-3": "Dilatazione della Realtà",
            "step-desc-3": "Comporta una sensazione sottile e volontaria di scendere un gradino di consapevolezza. Riconoscerai il raggiungimento dello stato Alpha da indicatori biosomatici precisi: il corpo diventa più pesante e rilassato, e la voce interiore si attenua.",
            "btn-detail-mec": "Neurofisiologia della Discesa",
            "sim-title": "Simulatore Interattivo di Frequenza",
            "sim-desc": "Monitora le oscillazioni e sperimenta la discesa mentale guidata. Inizia la transizione da Beta a Alpha.",
            "btn-descend": "Inizia la Discesa in Alpha",
            "btn-ascend": "Ritorna in Beta (Veglia)",
            "sim-text-beta": "Stato Beta (15 - 30 Hz) - Mente Agitata & Critica",
            "sim-text-alpha": "Stato Alpha (8 - 12 Hz) - Rilassamento Profondo & Creazione Visuale",
            "prot-tag": "Capitolo III",
            "prot-title": "Protocollo di Creazione: Come Comandare al Tuo Universo Interiore",
            "prot-desc": "Una volta stabilizzato lo stato Alpha, il subconscio è ricettivo. Tuttavia, non riconosce i desideri astratti. Il subconscio comunica attraverso immagini olografiche, intensamente cariche di emozione.",
            "proto-step-title-1": "1. Visualizzare il finale, non la via",
            "proto-step-desc-1": "La mente profonda non opera con concetti legati al futuro; vive in un eterno presente. Visualizza il risultato desiderato come se fosse già accaduto. Se progetti la visualizzazione come un evento futuro, il subconscio la terrà in attesa inattiva.",
            "proto-step-title-2": "2. Ancoraggio sensoriale",
            "proto-step-desc-2": "Il subconscio ha bisogno di ancore tangibili per validare la nuova realtà. Aggiungi elementi sensoriali estremamente chiari: la consistenza di un oggetto che tocchi, l'intensità della luce in una stanza o un suono specifico. Questo trasforma la visualizzazione da fantasia a realtà.",
            "proto-step-title-3": "3. Innesco emotivo",
            "proto-step-desc-3": "Questa è la vera forza formatrice della realtà. L'emozione rappresenta l'innesco neuro-chimico che invia un segnale chiaro al subconscio: 'questo evento è importante, ha valore esistenziale e deve essere creato.' Senti la gratitudine.",
            "proto-step-title-4": "4. Sigillatura tramite Parola",
            "proto-step-desc-4": "L'uso di una formula di indiscussa autorità mentale, come 'Così è', funziona come un decreto chiaro e finale. Questo chiude il ciclo logico ed elimina qualsiasi dubbio interno o possibilità di fallimento.",
            "proto-step-title-5": "5. Bloccare l'autosabotaggio",
            "proto-step-desc-5": "Domande difensive come 'quanto tempo ci vorrà?' o 'come accadrà?' cancellano l'istruzione originale. Il processo va sigillato fermamente nella mente affermando silenziosamente: 'È compiuto', seguito dal distacco totale.",
            "btn-detail-prot": "Guida alla Programmazione Subconscia",
            "rel-tag": "Capitolo IV",
            "rel-title": "Applicabilità Suprema: Manifestare Relazioni Autentiche",
            "rel-desc": "La meccanica mentale dello stato Alpha trascende il successo materiale e diventa uno strumento di eccezionale profondità nel plasmare le esperienze umane, specialmente nelle relazioni. Quando usi il Metodo Silva per manifestare una relazione armoniosa, l'istruzione non si basa sul controllo o sulla codipendenza, ma sull'uguaglianza e sul rispetto reciproco.",
            "rel-feat-title-1": "Ancora Sensoriale Consapevole",
            "rel-feat-desc-1": "Nello stato Alpha, visualizza e senti la consistenza di una mano che sostiene la tua: calda, salda, ma senza stringere in modo possessivo. Ascolta il tono di una voce che offre uno spazio completamente libero da giudizi.",
            "rel-feat-title-2": "Innesco della Vulnerabilità",
            "rel-feat-desc-2": "Vivi intensamente la sensazione di sollievo e la profonda gioia di poter essere vulnerabile in perfetta sicurezza. Il tuo subconscio regolerà la percezione per attrarre dinamiche mature e consapevoli.",
            "btn-detail-rel": "Psicologia dell'Attaccamento Sicuro",
            "sac-tag": "Capitolo V",
            "sac-title": "I 10 Secondi Sacri e il Punto di Non Ritorno",
            "sac-desc": "La filosofia della manifestazione culmina in un atto di presenza assoluta. Dopo aver completato il protocollo di visualizzazione, il segreto di chi ottiene risultati duraturi è rimanere in stato Alpha per altri 10 secondi. Questo è il punto di non ritorno, in cui immagine, emozione e intenzione si fondono in un'unica istruzione biochimica.",
            "sac-neuro": "In questi secondi sacri, il cervello profondo riorganizza le sue connessioni sinaptiche. Il Sistema di Attivazione Reticolare (SAR) riscrive i suoi filtri cognitivi, l'attenzione si acuisce e la chimica corporea si modifica per risuonare con il comando.",
            "btn-trigger-timer": "Inizia i 10 Secondi Sacri",
            "btn-detail-sac": "Neurobiologia della Plasticità",
            "footer-truth": "È vitale comprendere un principio profondamente liberatorio: il tuo subconscio non lavora mai contro di te. Se la tua realtà presente non riflette i tuoi desideri, è semplicemente perché il subconscio ha eseguito fedelmente l'ultima istruzione dominante che ha ricevuto, anche se inconscia.",
            "footer-copyright": "&copy; 2026 Silva Alpha. Guida creata sotto l'egida della psicologia applicata e della meccanica mentale.",
            "footer-invite": "Chiudi gli occhi, guarda in alto e lascia che il silenzio scriva la realtà."
        },
        cs: {
            "nav-arh": "Architektura Mysli",
            "nav-mec": "Mentální Mechanika",
            "nav-prot": "Protokol Tvorby",
            "nav-rel": "Autentické Vztahy",
            "nav-sac": "Těch 10 Sekund",
            "nav-btn-text": "Zahájit Sestup",
            "audio-label": "Zvuk Alpha: OFF",
            "audio-label-on": "Zvuk Alpha: ON",
            "hero-tagline": "Věda o Podvědomí & Umění Manifestace",
            "hero-title": "Enter Alpha <br><span class='gradient-text'>This Way</span>",
            "hero-desc": "Přísná metodologie, která mění metafyzické tajemství v aplikovanou vědu o mysli. Překonejte bariéry kritického rozumu a vstupte do mozkové frekvence, kde myšlenka získává tvořivou sílu nad fyzickou realitou.",
            "hero-btn-primary": "Vstoupit do Stavu Alpha",
            "hero-btn-secondary": "Číst Filosofickou Esej",
            "arh-tag": "Kapitola I",
            "arh-title": "Architektura Mysli: Za Hranicí Iluze Kontroly",
            "essay-dropcap": "L",
            "essay-p1": "idská mysl funguje v hluboké dualitě, odvěkém rozdělení mezi rozumem a tvorbou, které Silva Metoda transformuje z neuchopitelného tajemství v exaktní a aplikovatelnou vědu. Většina naší denní existence probíhá pod diktaturou vln Beta. To je stav bdělosti, ovládaný přísně analytickou logikou. Jeho evoluční rolí je přežití: porovnává, pochybuje, soudí, měří nebezpečí a neustále kritizuje.",
            "essay-p2": "Z filosofického a psychologického hlediska je však snaha změnit svou hlubokou realitu nebo přilákat zcela nové zkušenosti pouze pomocí tohoto stavu ekvivalentní rozhovoru s někým přes tlusté sklo. Vnější svět slyší ozvěnu vašeho úsilí, zoufalý hluk vaší vůle, ale jemné poselství, podstata záměru, nikdy nedorazí do cíle.",
            "btn-detail-arh": "Podrobná Filosofická Analýza",
            "essay-quote": "„Snažit se programovat podvědomí ze stavu Beta je jako psát na vodu. V Alphě píšete přímo do vnitřní struktury své reality.“",
            "chart-title": "Mozkové Frekvence & Stavy Vědomí",
            "chart-label-beta": "Beta (14 - 30 Hz) - Kritická Mysl",
            "chart-label-alpha": "Alpha (8 - 12 Hz) - Tvořivá Mysl",
            "chart-label-theta": "Theta/Delta (0.5 - 7 Hz) - Hluboký Spánek",
            "mec-tag": "Kapitola II",
            "mec-title": "Mentální Mechanika: Přístup k Podvědomí",
            "mec-desc": "Vstup do této vnitřní svatyně není záležitostí štěstí nebo pasivního záměru. Vyžaduje přesnou 'mentální mechaniku' založenou na jasných neurofyzických akcích, které odzbrojí strážce kritické mysli.",
            "step-title-1": "Zvýšený Pohled",
            "step-sub-1": "Primární Neurologický Reflex",
            "step-desc-1": "Zvednutí očí o pouhých několik stupňů nahoru (asi 20 stupňů nad linii horizontu), bez napínání očních svalů, spouští prastarý neurologický reflex. Mozek to automaticky interpretuje jako vstup do řízené imaginace.",
            "step-title-2": "Funkční Dýchání",
            "step-sub-2": "Ukotvení Frekvence",
            "step-desc-2": "Prodlouženým výdechem a vědomým mentálním uvolněním rytmického příkazu „A-L-P-H-A“ aktivujete parasympatický nervový systém. Mozek si začne spojovat tento vnitřní zvuk se snížením srdečního tepu.",
            "step-title-3": "Vnitřní Sestup",
            "step-sub-3": "Dilatace Reality",
            "step-desc-3": "Zahrnuje jemný a dobrovolný pocit sestupu o stupeň vědomí níže. Dosažení stavu Alpha rozpoznáte podle přesných biosomatických ukazatelů: tělo ztěžkne a dokonale se uvolní a hlasitost vnitřního hlasu klesne.",
            "btn-detail-mec": "Neurofyziologie Sestupu",
            "sim-title": "Interaktivní Simulátor Frekvence",
            "sim-desc": "Sledujte oscilace a vyzkoušejte si vedený mentální sestup. Zahajte přechod z Bety do Alphy.",
            "btn-descend": "Zahájit Sestup do Alphy",
            "btn-ascend": "Návrat do Bety (Bdění)",
            "sim-text-beta": "Stav Beta (15 - 30 Hz) - Neklidná & Kritická Mysl",
            "sim-text-alpha": "Stav Alpha (8 - 12 Hz) - Hluboké Uvolnění & Vizuální Tvorba",
            "prot-tag": "Kapitola III",
            "prot-title": "Protokol Tvorby: Jak Vládnout Svému Vnitřnímu Vesmíru",
            "prot-desc": "Jakmile stabilizujete stav Alpha, podvědomí je vnímavé. Nerozpozná však abstraktní přání. Podvědomí komunikuje prostřednictvím holografických obrazů, intenzivně nabitých emocemi.",
            "proto-step-title-1": "1. Vizualizace konce, nikoli cesty",
            "proto-step-desc-1": "Hluboká mysl nepracuje s pojmy budoucnosti; žije v věčném přítomném okamžiku. Vizualizujte požadovaný výsledek, jako by se již stal. Pokud projektujete vizualizaci jako budoucí událost, podvědomí ji udržuje v neaktivním stavu čekání.",
            "proto-step-title-2": "2. Smyslové ukotvení",
            "proto-step-desc-2": "Podvědomí potřebuje hmatatelné kotvy k ověření nové reality. Přidejte extrémně jasné smyslové prvky: texturu předmětu, kterého se dotýkáte, intenzitu světla v místnosti nebo specifický zvuk. To mění vizualizaci z fantazie v realitu.",
            "proto-step-title-3": "3. Emoční spouštěč",
            "proto-step-desc-3": "To je skutečná formující síla reality. Emoce představuje neurochemický spouštěč, který vysílá jasný signál podvědomí: „tato událost je důležitá, má existenční hodnotu a musí být vytvořena.“ Pociťte vděčnost.",
            "proto-step-title-4": "4. Zpečetění Slovem",
            "proto-step-desc-4": "Použití formule nezpochybnitelné mentální autority, jako je „Tak to je“, funguje jako jasný a konečný dekret. Tím se uzavře logická smyčka a odstraní se jakákoli vnitřní pochybnost nebo možnost selhání.",
            "proto-step-title-5": "5. Blokování autosabotáže",
            "proto-step-desc-5": "Obranné otázky typu „jak dlouho to bude trvat?“ nebo „jak se to stane?“ ruší původní instrukci. Proces musí být pevně zpečetěn v mysli tichým prohlášením: „Je splněno“, po kterém následuje úplné odpoutání.",
            "btn-detail-prot": "Průvodce Programováním Podvědomí",
            "rel-tag": "Kapitola IV",
            "rel-title": "Nejvyšší Aplikovatelnost: Manifestace Autentických Vztahů",
            "rel-desc": "Mentální mechanika stavu Alpha přesahuje materiální úspěch a stává se nástrojem výjimečné hloubky při utváření lidských zkušeností — zejména ve vztazích. Když používáte Silvovu metodu k manifestaci harmonického vztahu, instrukce není založena na kontrole nebo spoluzávislosti, ale na rovnosti a vzájemném respektu.",
            "rel-feat-title-1": "Vědomá Smyslová Kotva",
            "rel-feat-desc-1": "Ve stavu Alpha vizualizujte a vnímejte texturu ruky, která podpírá vaši — teplou, pevnou, ale bez majetnického stisku. Naslouchejte tónu hlasu, který nabízí zcela nesoudící prostor.",
            "rel-feat-title-2": "Spouštěč Zranitelnosti",
            "rel-feat-desc-2": "Intenzivně prožívejte pocit úlevy a hlubokou radost z možnosti být zranitelný v naprostém bezpečí. Vaše podvědomí aktivuje vnímání, které přitahuje zralou a vědomou dynamiku.",
            "btn-detail-rel": "Psychologie Bezpečné Vazby",
            "sac-tag": "Kapitola V",
            "sac-title": "Těch 10 Posvátných Sekund a Bod, Odkud Není Návratu",
            "sac-desc": "Filosofie manifestace vrcholí aktem absolutní přítomnosti. Po dokončení vizualizačního protokolu je tajemstvím těch, kteří dosahují trvalých výsledků, setrvat ve stavu Alpha dalších 10 sekund. To je bod, odkud není návratu, kde se obraz, emoce a záměr spojují do jediné biochemické instrukce.",
            "sac-neuro": "V těchto posvátných sekundách hluboký mozek reorganizuje svá synaptická spojení. Retikulární Aktivační Systém (RAS) přepisuje své kognitivní filtry, pozornost se zaostřuje a chemie těla se mění tak, aby rezonovala s vyslaným příkazem.",
            "btn-trigger-timer": "Zahájit 10 Posvátných Sekund",
            "btn-detail-sac": "Neurobiologie Plasticity",
            "footer-truth": "Je nezbytné pochopit hluboce osvobozující princip: vaše podvědomí nikdy nepracuje proti vám. Pokud vaše současná realita neodráží vaše přání, je to jednoduše proto, že podvědomí věrně provedlo poslední dominantní instrukci, kterou dostalo, i když byla nevědomá.",
            "footer-copyright": "&copy; 2026 Silva Alpha. Průvodce vytvořený pod záštitou aplikované psychologie a mentální mechaniky.",
            "footer-invite": "Zavřete oči, podívejte se nahoru a nechte ticho napsat realitu."
        },
        pl: {
            "nav-arh": "Architektura Umysłu",
            "nav-mec": "Mechanika Mentalna",
            "nav-prot": "Protokół Kreacji",
            "nav-rel": "Autentyczne Relacje",
            "nav-sac": "Te 10 Sekund",
            "nav-btn-text": "Zacznij Schodzenie",
            "audio-label": "Dźwięk Alpha: OFF",
            "audio-label-on": "Dźwięk Alpha: ON",
            "hero-tagline": "Nauka o Podświadomości & Sztuka Manifestacji",
            "hero-title": "Enter Alpha <br><span class='gradient-text'>This Way</span>",
            "hero-desc": "Rygorystyczna metodologia zmieniająca metafizyczną tajemnicę w praktyczną naukę o umyśle. Przekrocz bariery krytycznego rozumu i wejdź w częstotliwość fal mózgowych, w której myśl zyskuje moc kształtowania fizycznej rzeczywistości.",
            "hero-btn-primary": "Wejdź w Stan Alpha",
            "hero-btn-secondary": "Przeczytaj Esej Filozoficzny",
            "arh-tag": "Rozdział I",
            "arh-title": "Architektura Umysłu: Poza Iluzją Kontroli",
            "essay-dropcap": "L",
            "essay-p1": "udzki umysł działa w głębokiej dualizmie, odwiecznym podziale między rozumem a kreacją, który Metoda Silvy przekształca z nieuchwytnej tajemnicy w naukę ścisłą i aplikacyjną. Większość naszej dziennej egzystencji toczy się pod dyktaturą fal Beta. To stan czuwania, rządzony przez ściśle analityczną logikę. Jego ewolucyjną rolą jest przetrwanie: porównuje, wątpi, ocenia, mierzy zagrożenia i nieustannie krytykuje.",
            "essay-p2": "Jednak z perspektywy filozoficznej i psychologicznej, próba zmiany swojej głębokiej rzeczywistości lub przyciągnięcia zupełnie nowych doświadczeń wyłącznie za pomocą tego stanu jest równoznaczna z rozmową z kimś przez grubą szklaną szybę. Świat zewnętrzny słyszy echo twojego wysiłku, rozpaczliwy hałas twojej woli, ale subtelny przekaz, esencja intencji, nigdy nie dociera do celu.",
            "btn-detail-arh": "Szczegółowa Analiza Filozoficzna",
            "essay-quote": "„Próba programowania podświadomości ze stanu Beta jest jak pisanie na wodzie. W Alphie piszesz bezpośrednio w intymnej strukturze swojej rzeczywistości.”",
            "chart-title": "Częstotliwości Mózgowe & Stany Świadomości",
            "chart-label-beta": "Beta (14 - 30 Hz) - Umysł Krytyczny",
            "chart-label-alpha": "Alpha (8 - 12 Hz) - Umysł Twórczy",
            "chart-label-theta": "Theta/Delta (0.5 - 7 Hz) - Głęboki Sen",
            "mec-tag": "Rozdział II",
            "mec-title": "Mechanika Mentalna: Dostęp do Podświadomości",
            "mec-desc": "Wejście do sanktuarium wewnętrznego nie jest kwestią szczęścia czy pasywnej intencji. Wymaga precyzyjnej 'mechaniki mentalnej' opartej na jasnych działaniach neurofizycznych, aby rozbroić strażnika krytycznego umysłu.",
            "step-title-1": "Uniesione Spojrzenie",
            "step-sub-1": "Pierwotny Odruch Neurologiczny",
            "step-desc-1": "Uniesienie oczu o zaledwie kilka stopni w górę (około 20 stopni powyżej linii horyzontu), bez napinania mięśni gałki ocznej, uruchamia prastary odruch neurologiczny. Mózg automatycznie interpretuje to jako wejście w stan kontrolowanej wyobraźni.",
            "step-title-2": "Oddech Funkcjonalny",
            "step-sub-2": "Ukotwiczenie Częstotliwości",
            "step-desc-2": "Poprzez wydłużony wydech i świadome mentalne uwolnienie rytmicznego polecenia „A-L-P-H-A” aktywujesz przywspółczulny układ nerwowy. Mózg zaczyna kojarzyć ten wewnętrzny dźwięk ze spadkiem tętna.",
            "step-title-3": "Schodzenie Wewnętrzne",
            "step-sub-3": "Dylatacja Rzeczywistości",
            "step-desc-3": "Zakłada subtelne i dobrowolne uczucie schodzenia o stopień niżej w świadomości. Osiągnięcie stanu Alpha rozpoznasz po precyzyjnych wskaźnikach biosomatycznych: ciało staje się cięższe i zrelaksowane, a głos wewnętrzny cichnie.",
            "btn-detail-mec": "Neurofizjologia Schodzenia",
            "sim-title": "Interaktywny Symulator Częstotliwości",
            "sim-desc": "Śledź oscylacje i doświadcz prowadzonego schodzenia mentalnego. Rozpocznij przejście z Bety do Alphy.",
            "btn-descend": "Zacznij Schodzenie do Alphy",
            "btn-ascend": "Powrót do Bety (Czuwanie)",
            "sim-text-beta": "Stan Beta (15 - 30 Hz) - Umysł Niespokojny & Krytyczny",
            "sim-text-alpha": "Stan Alpha (8 - 12 Hz) - Głębokie Odprężenie & Twórczość Wizualna",
            "prot-tag": "Rozdział III",
            "prot-title": "Protokół Kreacji: Jak Władać Własnym Wewnętrznym Wszechświatem",
            "prot-desc": "Gdy ustabilizujesz stan Alpha, podświadomość jest receptywna. Nie rozpoznaje jednak abstrakcyjnych pragnień. Podświadomość komunikuje się za pomocą obrazów holograficznych, intensywnie naładowanych emocjami.",
            "proto-step-title-1": "1. Wizualizacja celu, a nie drogi",
            "proto-step-desc-1": "Głęboki umysł nie operuje pojęciami przyszłości; żyje w wiecznej teraźniejszości. Wizualizuj pożądany rezultat tak, jakby już się wydarzył. Jeśli projektujesz wizualizację jako przyszłe wydarzenie, podświadomość utrzymuje ją w nieaktywnym stanie oczekiwania.",
            "proto-step-title-2": "2. Zakotwiczenie sensoryczne",
            "proto-step-desc-2": "Podświadomość potrzebuje namacalnych kotwic, aby potwierdzić nową rzeczywistość. Dodaj niezwykle wyraźne elementy zmysłowe: teksturę dotykanego przedmiotu, intensywność światła w pokoju lub specyficzny dźwięk. To zamienia wizualizację z fantazji w rzeczywistość.",
            "proto-step-title-3": "3. Wyzwalacz emocjonalny",
            "proto-step-desc-3": "To jest prawdziwa siła kształtująca rzeczywistość. Emocja reprezentuje neurochemiczny wyzwalacz, który wysyła jasny sygnał podświadomości: „to wydarzenie jest ważne, ma wartość egzystencjalną i musi zostać stworzone.” Poczuj wdzięczność.",
            "proto-step-title-4": "4. Zapieczętowanie Słowem",
            "proto-step-desc-4": "Użycie formuły niekwestionowanego autorytetu mentalnego, takiego jak „Tak jest”, działa jak jasny i ostateczny dekret. Zamyka to pętlę logiczną i eliminuje wszelkie wewnętrzne wątpliwości lub możliwość porażki.",
            "proto-step-title-5": "5. Blokowanie autosabotażu",
            "proto-step-desc-5": "Obronne pytania typu „jak długo to potrwa?” lub „jak to się stanie?” anulują pierwotną instrukcję. Proces musi być mocno zapieczętowany w umyśle poprzez ciche stwierdzenie: „Dokonało się”, po którym następuje całkowite odpuszczenie.",
            "btn-detail-prot": "Przewodnik Programowania Podświadomości",
            "rel-tag": "Rozdział IV",
            "rel-title": "Najwyższa Stosowalność: Manifestowanie Autentycznych Relacji",
            "rel-desc": "Mechanika mentalna stanu Alpha wykracza poza sukces materialny i staje się narzędziem o wyjątkowej głębi w kształtowaniu ludzkich doświadczeń — szczególnie w relacjach. Kiedy używasz Metody Silvy do manifestowania harmonijnego związku, instrukcja nie opiera się na kontroli czy współuzależnieniu, ale na równości i wzajemnym szacunku.",
            "rel-feat-title-1": "Świadoma Kotwica Sensoryczna",
            "rel-feat-desc-1": "W stanie Alpha wizualizuj i poczuj teksturę ręki, która wspiera twoją — ciepłą, pewną, ale bez zaborczego uścisku. Wsłuchaj się w ton głosu, który oferuje całkowicie nieoceniającą przestrzeń.",
            "rel-feat-title-2": "Wyzwalacz Wrażliwości",
            "rel-feat-desc-2": "Intensywnie przeżywaj poczucie ulgi i głęboką radość z możliwości bycia wrażliwym w pełnym bezpieczeństwie. Twoja podświadomość aktywuje percepcję, która przyciąga dojrzałą i świadomą dynamikę.",
            "btn-detail-rel": "Psychologia Bezpiecznego Przywiązania",
            "sac-tag": "Rozdział V",
            "sac-title": "Te 10 Świętych Sekund i Punkt, z Którego Nie Ma Powrotu",
            "sac-desc": "Filozofia manifestacji kulminuje w akcie absolutnej obecności. Po zakończeniu protokołu wizualizacji, sekretem tych, którzy osiągają trwałe rezultaty, jest pozostanie w stanie Alpha przez kolejne 10 sekund. To jest punkt, z którego nie ma powrotu, gdzie obraz, emocja i intencja łączą się w jedną biochemiczną instrukcję.",
            "sac-neuro": "W tych świętych sekundach głęboki mózg reorganizuje swoje połączenia synaptyczne. Retikularny Układ Aktywujący (RUA) nadpisuje swoje filtry poznawcze, uwaga się wyostrza, a chemia ciała zmienia się, by rezonować z wysłanym poleceniem.",
            "btn-trigger-timer": "Zahacz 10 Świętych Sekund",
            "btn-detail-sac": "Neurobiologia Plastyczności",
            "footer-truth": "Zrozumienie głęboko wyzwalającej zasady jest kluczowe: twoja podświadomość nigdy nie działa przeciwko tobie. Jeśli twoja obecna rzeczywistość nie odzwierciedla twoich pragnień, dzieje się tak po prostu dlatego, że podświadomość wiernie wykonała ostatnią dominującą instrukcję, jaką otrzymała, nawet jeśli była ona nieświadoma.",
            "footer-copyright": "&copy; 2026 Silva Alpha. Przewodnik stworzony pod egidą psychologii stosowanej i mechaniki mentalnej.",
            "footer-invite": "Zamknij oczy, spójrz w górę i pozwól ciszy napisać rzeczywistość."
        },
        ru: {
            "nav-arh": "Архитектура Разума",
            "nav-mec": "Ментальная Механика",
            "nav-prot": "Протокол Творения",
            "nav-rel": "Истинные Отношения",
            "nav-sac": "10 Секунд Силы",
            "nav-btn-text": "Начать Погружение",
            "audio-label": "Звук Alpha: ВЫКЛ",
            "audio-label-on": "Звук Alpha: ВКЛ",
            "hero-tagline": "Наука Подсознания & Искусство Манифестации",
            "hero-title": "Enter Alpha <br><span class='gradient-text'>This Way</span>",
            "hero-desc": "Строгая методология, превращающая метафизическую тайну в прикладную науку о разуме. Преодолейте барьеры критического разума и войдите в частоту мозга, где мысль обретает формирующую силу над физической реальностью.",
            "hero-btn-primary": "Войти в Состояние Альфа",
            "hero-btn-secondary": "Читать Философское Эссе",
            "arh-tag": "Глава I",
            "arh-title": "Архитектура Разума: За Пределами Иллюзии Контроля",
            "essay-dropcap": "Ч",
            "essay-p1": "еловеческий разум функционирует в глубокой дуальности, древнем разделении между разумом и творчеством, которое Метод Сильва превращает из неуловимой тайны в точную и применимую науку. Большая часть нашего дневного существования проходит под диктатом волн Бета. Это состояние бодрствования, управляемое строго аналитической логикой. Его эволюционная роль — выживание: оно сравнивает, сомневается, судит, оценивает опасности и постоянно критикует.",
            "essay-p2": "Однако, с философской и психологической точек зрения, попытка изменить свою глубокую реальность или привлечь совершенно новый опыт, используя только это состояние, эквивалентна разговору с кем-то через толстое стекло. Внешний мир слышит эхо ваших усилий, отчаянный шум вашей воли, но тонкое послание, суть намерения, никогда не доходит до цели.",
            "btn-detail-arh": "Подробный Философский Анализ",
            "essay-quote": "«Попытка запрограммировать подсознание из состояния Бета подобна письму на воде. В Альфе вы пишете непосредственно на внутренней структуре вашей реальности».",
            "chart-title": "Частоты Мозга & Состояния Сознания",
            "chart-label-beta": "Бета (14 - 30 Гц) - Критический Разум",
            "chart-label-alpha": "Альфа (8 - 12 Гц) - Творческий Разум",
            "chart-label-theta": "Тета/Дельта (0.5 - 7 Гц) - Глубокий Сон",
            "mec-tag": "Глава II",
            "mec-title": "Ментальная Механика: Доступ к Подсознанию",
            "mec-desc": "Вход в эту внутреннюю обитель — это не вопрос удачи или пассивного намерения. Он требует точной «ментальной механики», основанной на четких нейрофизических действиях для разоружения стража критического разума.",
            "step-title-1": "Взгляд Вверх",
            "step-sub-1": "Первичный Неврологический Рефлекс",
            "step-desc-1": "Подъем глаз всего на несколько градусов вверх (около 20 градусов над линией горизонта), без напряжения глазных мышц, запускает древний неврологический рефлекс. Мозг автоматически интерпретирует это как вход в состояние управляемого воображения.",
            "step-title-2": "Функциональное Дыхание",
            "step-sub-2": "Якорение Частоты",
            "step-desc-2": "Через продолжительный выдох и сознательное ментальное отпускание ритмичной команды «А-Л-Ь-Ф-А» вы активируете парасимпатическую нервную систему. Мозг начинает связывать этот внутренний звук со снижением пульса.",
            "step-title-3": "Внутренний Спуск",
            "step-sub-3": "Дилатация Реальности",
            "step-desc-3": "Предполагает тонкое и добровольное ощущение спуска на ступеньку сознания ниже. Вы узнаете о достижении состояния Альфа по точным биосоматическим показателям: тело становится более тяжелым и расслабленным, а внутренний голос затихает.",
            "btn-detail-mec": "Нейрофизиология Спуска",
            "sim-title": "Интерактивный Симулятор Частоты",
            "sim-desc": "Следите за колебаниями и испытайте управляемый ментальный спуск. Начните переход из Беты в Альфу.",
            "btn-descend": "Начать Спуск в Альфу",
            "btn-ascend": "Вернуться в Бету (Бодрствование)",
            "sim-text-beta": "Состояние Бета (15 - 30 Гц) - Беспокойный & Критический Разум",
            "sim-text-alpha": "Состояние Альфа (8 - 12 Гц) - Глубокое Расслабление & Визуальное Творчество",
            "prot-tag": "Глава III",
            "prot-title": "Протокол Творения: Как Управлять Своей Внутренней Вселенной",
            "prot-desc": "Как только вы стабилизируете состояние Альфа, подсознание становится восприимчивым. Однако оно не признает абстрактных желаний. Подсознание общается посредством голографических образов, интенсивно заряженных эмоциями.",
            "proto-step-title-1": "1. Визуализация финала, а не пути",
            "proto-step-desc-1": "Глубокий разум не работает с понятиями будущего; он живет в вечном настоящем. Визуализируйте желаемый результат так, как будто он уже произошел. Если вы проецируете визуализацию как будущее событие, подсознание удерживает ее в неактивном состоянии ожидания.",
            "proto-step-title-2": "2. Сенсорное якорение",
            "proto-step-desc-2": "Подсознанию нужны осязаемые якоря для подтверждения новой реальности. Добавьте предельно четкие сенсорные элементы: текстуру предмета, к которому вы прикасаетесь, интенсивность света в комнате или особый звук. Это превращает визуализацию из фантазии в реальность.",
            "proto-step-title-3": "3. Эмоциональный триггер",
            "proto-step-desc-3": "Это настоящая формирующая сила реальности. Эмоция представляет собой нейрохимический триггер, посылающий четкий сигнал подсознанию: «это событие важно, имеет экзистенциальную ценность и должно быть создано». Почувствуйте благодарность.",
            "proto-step-title-4": "4. Запечатывание Словом",
            "proto-step-desc-4": "Использование формулы непререкаемого ментального авторитета, такой как «Да будет так», действует как ясный и окончательный указ. Это закрывает логический цикл и устраняет любые внутренние сомнения или возможность неудачи.",
            "proto-step-title-5": "5. Блокирование автосаботажа",
            "proto-step-desc-5": "Оборонительные вопросы типа «сколько времени это займет?» или «как это произойдет?» отменяют первоначальную инструкцию. Процесс должен быть прочно запечатан в уме тихим заявлением: «Свершилось», за которым следует полное отпущение.",
            "btn-detail-prot": "Руководство по Программированию Подсознания",
            "rel-tag": "Глава IV",
            "rel-title": "Высшая Применимость: Манифестация Истинных Отношений",
            "rel-desc": "Ментальная механика состояния Альфа выходит за рамки материального успеха и становится инструментом исключительной глубины в формировании человеческого опыта — особенно в отношениях. При использовании Метода Сильва для манифестации гармоничных отношений инструкция строится не на контроле или созависимости, а на равенстве и взаимном уважении.",
            "rel-feat-title-1": "Сознательный Сенсорный Якорь",
            "rel-feat-desc-1": "В состоянии Альфа визуализируйте и почувствуйте текстуру руки, поддерживающей вашу — теплой, твердой, но без собственнической хватки. Прислушайтесь к тону голоса, предлагающему полностью безоценочное пространство.",
            "rel-feat-title-2": "Триггер Уязвимости",
            "rel-feat-desc-2": "Интенсивно проживайте чувство облегчения и глубокую радость от возможности быть уязвимым в полной безопасности. Ваше подсознание активирует восприятие, привлекающее зрелую и осознанную динамику.",
            "btn-detail-rel": "Психология Безопасной Привязанности",
            "sac-tag": "Глава V",
            "sac-title": "10 Священных Секунд и Точка Невозврата",
            "sac-desc": "Философия манифестации кульминирует в акте абсолютного присутствия. После завершения протокола визуализации секрет тех, кто достигает устойчивых результатов, заключается в том, чтобы оставаться в состоянии Альфа еще 10 секунд. Это точка невозврата, где образ, эмоция и намерение сливаются в единую биохимическую инструкцию.",
            "sac-neuro": "В эти священные секунды глубокий мозг реорганизует свои синаптические связи. Ретикулярная Активирующая Система (РАС) перезаписывает свои когнитивные фильтры, внимание обостряется, а химия тела меняется, чтобы резонировать с посланной командой.",
            "btn-trigger-timer": "Запустить 10 Священных Секунд",
            "btn-detail-sac": "Нейробиология Пластичности",
            "footer-truth": "Крайне важно понять глубоко освобождающий принцип: ваше подсознание никогда не работает против вас. Если ваша нынешняя реальность не отражает ваших желаний, это происходит просто потому, что подсознание верно выполнило последнюю доминирующую инструкцию, которую оно получило, даже если она была неосознанной.",
            "footer-copyright": "&copy; 2026 Silva Alpha. Руководство создано под эгидой прикладной психологии и ментальной механики.",
            "footer-invite": "Закройте глаза, посмотрите вверх и позвольте тишине написать реальность."
        },
        zh: {
            "nav-arh": "心智架构",
            "nav-mec": "精神力学",
            "nav-prot": "创造法则",
            "nav-rel": "真挚关系",
            "nav-sac": "神圣十秒",
            "nav-btn-text": "开始下降",
            "audio-label": "阿尔法音效: 关",
            "audio-label-on": "阿尔法音效: 开",
            "hero-tagline": "潜意识科学 & 显化艺术",
            "hero-title": "Enter Alpha <br><span class='gradient-text'>This Way</span>",
            "hero-desc": "一种严谨的方法论，将形而上学的奥秘转化为可应用的心智科学。超越批判性理性的壁垒，进入思想对物理现实具有塑形力量的脑电波频率。",
            "hero-btn-primary": "进入阿尔法状态",
            "hero-btn-secondary": "阅读哲学随笔",
            "arh-tag": "第一章",
            "arh-title": "心智架构：超越控制的幻觉",
            "essay-dropcap": "人",
            "essay-p1": "类心智在深刻的二元性中运行，这是理智与创造之间的古老分裂，西尔瓦方法将其从无形的谜团转变为一门精确且可应用的科学。我们白天的绝大多数生存都处于贝塔波的独裁统治下。这是清醒状态，由严格的分析逻辑主导。它的进化角色是生存：它不断地比较、怀疑、判断、衡量危险和批评。",
            "essay-p2": "然而，从哲学和心理学的角度来看，仅使用这种状态试图改变你的深层现实或吸引全新的体验，相当于隔着厚厚的玻璃窗与人交谈。外界能听到你努力的回声，听到你意志的绝望喧嚣，但微妙的信息，即意图 satisfaction 的本质，却永远无法到达目的地。",
            "btn-detail-arh": "详细哲学分析",
            "essay-quote": "“试图从贝塔状态对潜意识进行编程就像在水上写字。在阿尔法状态下，你直接写进现实的内在结构中。”",
            "chart-title": "脑电波频率 & 意识状态",
            "chart-label-beta": "贝塔波 (14 - 30 Hz) - 批判性心智",
            "chart-label-alpha": "阿尔法波 (8 - 12 Hz) - 创造性心智",
            "chart-label-theta": "西塔/德尔塔波 (0.5 - 7 Hz) - 深度睡眠",
            "mec-tag": "第二章",
            "mec-title": "精神力学：连接潜意识",
            "mec-desc": "进入这个内在圣殿不是运气或被动意图的问题。它需要精确的“精神力学”，基于明确的神经物理行为来解除批判性心智守护者的武装。",
            "step-title-1": "眼球向上仰角",
            "step-sub-1": "初级神经反射",
            "step-desc-1": "将眼睛向上抬高几度（大约高出地平线 20 度），在不紧张眼部肌肉的情况下，会触发古老的神经反射。大脑自动将此解释为进入受控想象状态。",
            "step-title-2": "功能性呼吸",
            "step-sub-2": "锚定脑电波频率",
            "step-desc-2": "通过延长的呼气并在心中有意识地释放出有节奏的指令“A-L-P-H-A”，你会触发副交感神经系统。大脑开始将这种内部声音与心率降低联系起来。",
            "step-title-3": "内在意识沉降",
            "step-sub-3": "现实的扩张",
            "step-desc-3": "涉及一种微妙的、主动的向下降低意识维度的感觉。你将通过精确的生物躯体指标识别出到达阿尔法状态：身体变得更重且完美放松，内心的杂音减弱。",
            "btn-detail-mec": "意识沉降的神经生理学",
            "sim-title": "互动频率模拟器",
            "sim-desc": "监测脑电波振荡并体验引导式的心智沉降。启动从贝塔波到阿尔法波的转换。",
            "btn-descend": "启动阿尔法沉降",
            "btn-ascend": "返回贝塔状态 (清醒)",
            "sim-text-beta": "贝塔状态 (15 - 30 Hz) - 焦虑 & 批判性心智",
            "sim-text-alpha": "阿尔法状态 (8 - 12 Hz) - 深度放松 & 视觉创造",
            "prot-tag": "第三章",
            "prot-title": "创造法则：如何命令你的内在宇宙",
            "prot-desc": "一旦你稳定了阿尔法状态，潜意识就会敞开接受。然而，它不识别抽象的愿望。潜意识通过充满强烈情感的全息图像进行交流。",
            "proto-step-title-1": "1. 观想终点，而非途径",
            "proto-step-desc-1": "深层心智不运行与未来相关的概念；它活在永恒的当下。将渴望的结果观想为已经发生。如果你将观想投射为未来的事件，潜意识会将其保持在不活跃的等待状态。",
            "proto-step-title-2": "2. 感官锚定",
            "proto-step-desc-2": "潜意识需要有形的锚来验证新的现实。添加极其清晰的感官元素：你触摸的物体的质地、房间里光线的强度或特定的声音。这使观想从幻想变为现实。",
            "proto-step-title-3": "3. 情绪触发器",
            "proto-step-desc-3": "这是现实的真正形成力量。情绪代表了向潜意识发送清晰信号的神经化学触发器：“这个事件很重要，具有存在价值，必须被创造。”去感受那份感恩。",
            "proto-step-title-4": "4. 言语封印",
            "proto-step-desc-4": "使用具有无可置疑的精神权威的公式，如“就是如此”，起到明确和最终法令的作用。这闭合了逻辑闭环，消除了所有内部怀疑或失败的可能性。",
            "proto-step-title-5": "5. 阻断自我防卫",
            "proto-step-desc-5": "诸如“这需要多长时间？”或“这会如何发生？”之类的防御性问题会取消最初的指令。该过程必须通过在心中默默陈述：“已然成就”来牢牢封印，随后完全放下。",
            "btn-detail-prot": "潜意识编程指南",
            "rel-tag": "第四章",
            "rel-title": "至高应用：显化真挚关系",
            "rel-desc": "阿尔法状态的精神力学超越了物质成功，成为塑造人类体验（尤其是关系中）极其深奥的工具。当使用西尔瓦方法显化和谐关系时，指令不基于控制或共同依赖，而是基于平等和相互尊重。",
            "rel-feat-title-1": "意识感官锚",
            "rel-feat-desc-1": "在阿尔法状态下，观想并感受一只手托住你的手的质感——温暖、坚定，但没有占有欲的紧握。聆听提供完全不加审判的空间的声音语调。",
            "rel-feat-title-2": "脆弱触发器",
            "rel-feat-desc-2": "在完美的安宁中，强烈地体验到如释重负的轻松感和展示脆弱的深切喜悦。你的潜意识将激活吸引成熟和有意识互动的感知。",
            "btn-detail-rel": "安全依恋心理学",
            "sac-tag": "第五章",
            "sac-title": "神圣十秒与无法回头的临界点",
            "sac-desc": "显化的哲学在绝对临在的行为中达到顶点。完成观想步骤后，获得持久效果的秘诀是再保持阿尔法状态 10 秒钟。这是无法回头的临界点，图像、情感和意图在此融合为单一的生物化学指令。",
            "sac-neuro": "在这些神圣的秒数里，深层大脑会重组其突触连接。网状激活系统 (RAS) 重写其认知过滤器，注意力高度集中，身体化学发生改变以与发送的命令共振。",
            "btn-trigger-timer": "启动神圣十秒",
            "btn-detail-sac": "突触可塑性神经生物学",
            "footer-truth": "理解一个深刻解放的原则至关重要：你的潜意识永远不会违背你。如果你目前的现实没有反映你的愿望，那仅仅是因为潜意识忠实地执行了它收到的最后一个主导指令，即使那是无意识的。",
            "footer-copyright": "&copy; 2026 西尔瓦阿尔法。在应用心理学和精神力学指导下创建。",
            "footer-invite": "闭上眼睛，仰望上方，让沉默书写现实。"
        }
    };

    // --- 2. MULTI-LANGUAGE DETAILED LANDING CONTENT ---
    const detailedContent = {
        arhitectura: {
            ro: `
                <h3>Știința Compartimentării Mentale</h3>
                <p>Din punct de vedere psihologic, undele Beta sunt asociate cu cortexul prefrontal activ în stare hiper-vigilentă. Acest gardian logic filtrează informațiile noi prin prisma traumelor din trecut și a fricilor de viitor. Rezultatul este o barieră cognitivă impenetrabilă care respinge orice tentativă de autosugestie rațională.</p>
                <blockquote>„Pentru a modifica scriptul subconștient, trebuie să dezactivăm temporar analiza critică a emisferei stângi.”</blockquote>
                <p>Metoda José Silva demonstrează că intrarea în Alpha scade activitatea amigdalei (centrul fricii) și activează emisfera dreaptă creativă. Subconștientul este similar cu un sistem de operare aflat în modul 'Developer': acceptă direct liniile noi de cod fără să ceară permisiuni de la ego-ul critic.</p>
                <h3>Perspectiva Filosofică: Iluzia Controlului Voinței</h3>
                <p>Trăim cu impresia că voința conștientă (Beta) este cea care ne guvernează destinul. În realitate, psihanaliza modernă confirmă că peste 95% din deciziile noastre zilnice sunt conduse de tiparele automate din subconștient. A încerca să controlezi realitatea doar prin efort conștient este o iluzie obositoare. Eliberarea vine odată cu predarea intenției către inteligența profundă în starea Alpha.</p>
            `,
            en: `
                <h3>Science of Mental Compartmentalization</h3>
                <p>Psychologically, Beta waves are associated with a hyper-vigilant active prefrontal cortex. This logical guardian filters new information through past traumas and future fears. The result is an impenetrable cognitive barrier that rejects any rational autosuggestion attempt.</p>
                <blockquote>“To modify the subconscious script, we must temporarily deactivate the left hemisphere's critical analysis.”</blockquote>
                <p>The José Silva Method demonstrates that entering Alpha decreases amygdala activity (the fear center) and activates the creative right hemisphere. The subconscious is similar to an operating system in 'Developer' mode: it directly accepts new lines of code without asking for permissions from the critical ego.</p>
                <h3>Philosophical Perspective: The Illusion of Will Control</h3>
                <p>We live under the impression that conscious will (Beta) governs our destiny. In reality, modern psychoanalysis confirms that over 95% of our daily decisions are driven by automated subconscious patterns. Trying to control reality through conscious effort alone is an exhausting illusion. Liberation comes when you surrender intent to the deep intelligence in the Alpha state.</p>
            `,
            pt: `
                <h3>Ciência da Compartimentação Mental</h3>
                <p>Do ponto de vista psicológico, as ondas Beta estão associadas ao córtex pré-frontal ativo em estado de hipervigilância. Este guardião lógico filtra novas informações através de traumas passados e medos futuros. O resultado é uma barreira cognitiva impenetrável que rejeita qualquer tentativa de autossugestão racional.</p>
                <blockquote>“Para modificar o guião subconsciente, devemos desativar temporariamente a análise crítica do hemisfério esquerdo.”</blockquote>
                <p>O Método José Silva demonstra que entrar em Alpha diminui a atividade da amígdala (o centro do medo) e ativa o hemisfério direito criativo. O subconsciente é semelhante a um sistema operativo no modo 'Developer': aceita diretamente novas linhas de código sem pedir permissões ao ego crítico.</p>
                <h3>Perspetiva Filosófica: A Ilusão do Controlo da Vontade</h3>
                <p>Vivemos com a impressão de que a vontade consciente (Beta) é a que governa o nosso destino. Na realidade, a psicanálise moderna confirma que mais de 95% das nossas decisões diárias são guiadas pelos padrões automáticos do subconsciente. Tentar controlar a realidade apenas através do esforço consciente é uma ilusão desgastante. A libertação vem ao entregar a intenção à inteligência profunda no estado Alpha.</p>
            `,
            es: `
                <h3>Ciencia de la Compartimentación Mental</h3>
                <p>Psicológicamente, las ondas Beta se asocian con la corteza prefrontal activa en estado de hipervigilancia. Este guardián lógico filtra la información nueva a través de traumas pasados y miedos futuros. El resultado es una barrera cognitiva impenetrable que rechaza cualquier intento de autosugestión racional.</p>
                <blockquote>“Para modificar el guión subconsciente, debemos desactivar temporalmente el análisis crítico del hemisferio izquierdo.”</blockquote>
                <p>El Método José Silva demuestra que entrar en Alpha disminuye la actividad de la amígdala (el centro del miedo) y activa el hemisferio derecho creativo. El subconsciente es similar a un sistema operativo en modo 'Developer': acepta directamente líneas de código sin pedir permisos al ego crítico.</p>
                <h3>Perspectiva Filosofica: La Ilusión del Control de la Voluntad</h3>
                <p>Vivimos con la impresión de que la voluntad consciente (Beta) es la que gobierna nuestro destino. En realidad, el psicoanálisis moderno confirma que más del 95% de nuestras decisiones diarias están dirigidas por patrones automáticos del subconsciente. Intentar controlar la realidad solo con el esfuerzo consciente es una ilusión agotadora. La liberación llega al entregar la intención a la inteligencia profunda en el estado Alpha.</p>
            `,
            it: `
                <h3>Scienza della Compartimentazione Mentale</h3>
                <p>Psicologicamente, le onde Beta sono associate alla corteccia prefrontale attiva in stato di iper-vigilanza. Questo custode logico filtra le nuove informazioni attraverso i traumi passati e le paure future. Il risultato è una barriera cognitiva impenetrabile che rifiuta qualsiasi tentativo di autosuggestione razionale.</p>
                <blockquote>“Per modificare il copione subconscio, dobbiamo disattivare temporaneamente l'analisi critica dell'emisfero sinistro.”</blockquote>
                <p>Il Metodo José Silva dimostra che l'ingresso in Alpha riduce l'attività dell'amigdala (il centro della paura) e attiva l'emisfero destro creativo. Il subconscio è simile a un sistema operativo in modalità 'Developer': accetta direttamente nuove linee di codice senza chiedere permessi all'ego critico.</p>
                <h3>Prospettiva Filosofica: L'Illusione del Controllo della Volontà</h3>
                <p>Viviamo con l'impressione che la volontà cosciente (Beta) sia ciò che governa il nostro destino. In realtà, la psicoanalisi moderna conferma che oltre il 95% delle nostre decisioni quotidiane è guidato da schemi automatici subconsci. Cercare di controllare la realtà solo con lo sforzo cosciente è un'illusione estenuante. La liberazione arriva quando si consegna l'intenzione all'intelligenza profonda nello stato Alpha.</p>
            `,
            cs: `
                <h3>Věda o Mentální Kompartmentalizaci</h3>
                <p>Z psychologického hlediska jsou vlny Beta spojeny s aktivní prefrontální kůrou v hypervigilantním stavu. Tento logický strážce filtruje nové informace přes traumata z minulosti a obavy z budoucnosti. Výsledkem je neproniknutelná kognitivní bariéra, která odmítá jakýkoli pokus o racionální autosugesci.</p>
                <blockquote>„Chcete-li upravit podvědomý scénář, musíme dočasně deaktivovat kritickou analýzu levé hemisféry.“</blockquote>
                <p>José Silva Metoda ukazuje, že vstup do Alphy snižuje aktivitu amygdaly (centra strachu) a aktivuje kreativní pravou hemisféru. Podvědomí je podobné operačnímu systému v režimu 'Developer': přímo přijímá nové řádky kódu bez žádosti o povolení od kritického ega.</p>
                <h3>Filosofická Perspektiva: Iluze Kontroly Vůle</h3>
                <p>Žijeme s dojmem, že vědomá vůle (Beta) vládne našemu osudu. Ve skutečnosti moderní psychoanalýza potvrzuje, že více než 95 % našich každodenních rozhodnutí je řízeno automatickými vzorci v podvědomí. Snažit se kontrolovat realitu pouze vědomým úsilím je vyčerpávající iluze. Osvobození přichází s odevzdáním záměru hluboké inteligenci ve stavu Alpha.</p>
            `,
            pl: `
                <h3>Nauka o Przedziałowości Mentalnej</h3>
                <p>Z psychologicznego punktu widzenia fale Beta są powiązane z aktywną korą przedczołową w stanie hiperczujności. Ten logiczny strażnik filtruje nowe informacje przez pryzmat traum z przeszłości i lęków przed przyszłością. Rezultatem jest nieprzenikniona bariera poznawcza, która odrzuca wszelkie próby racjonalnej autosugestii.</p>
                <blockquote>„Aby zmodyfikować podświadomy skrypt, musimy tymczasowo dezaktywować krytyczną analizę lewej półkuli.”</blockquote>
                <p>Metoda José Silvy wykazuje, że wejście w stan Alpha zmniejsza aktywność ciała migdałowatego (centrum strachu) i aktywuje kreatywną prawą półkulę. Podświadomość jest podobna do systemu operacyjnego w trybie 'Developer': bezpośrednio akceptuje nowe linie kodu bez pytania o uprawnienia krytycznego ego.</p>
                <h3>Perspektywa Filozoficzna: Iluzja Kontroli Woli</h3>
                <p>Żyjemy w przekonaniu, że to świadoma wola (Beta) rządzi naszym losem. W rzeczywistości współczesna psychoanaliza potwierdza, że ponad 95% naszych codziennych decyzji jest kierowanych przez automatyczne wzorce z podświadomości. Próba kontrolowania rzeczywistości wyłącznie za pomocą świadomego wysiłku jest wyczerpującą iluzją. Wyzwolenie przychodzi wraz z oddaniem intencji głębokiej inteligencji w stanie Alpha.</p>
            `,
            ru: `
                <h3>Наука о Ментальной Отсеках</h3>
                <p>С психологической точки зрения бета-волны связаны с активной префронтальной корой в состоянии гипербдительности. Этот логический страж фильтрует новую информацию через призму прошлых травм и страхов перед будущим. Результатом является непробиваемый когнитивный барьер, отвергающий любые попытки рационального самовнушения.</p>
                <blockquote>«Чтобы изменить подсознательный сценарий, мы должны временно отключить критический анализ левого полушария».</blockquote>
                <p>Метод Хосе Сильва доказывает, что вход в Альфу снижает активность миндалевидного тела (центра страха) и активирует творческое правое полушарие. Подсознание аналогично операционной системе в режиме «Разработчик»: оно напрямую принимает новые строки кода без запроса разрешений от критического эго.</p>
                <h3>Философская Перспектива: Иллюзия Контроля Воли</h3>
                <p>Мы живем с иллюзией, что сознательная воля (Бета) управляет нашей судьбой. На самом деле современный психоанализ подтверждает, что более 95% наших ежедневных решений управляются автоматическими шаблонами подсознания. Попытка контролировать реальность только сознательными усилиями — изнурительная иллюзия. Освобождение приходит с передачей намерения глубокому разуму в состоянии Альфа.</p>
            `,
            zh: `
                <h3>心智分区的科学</h3>
                <p>从心理学角度来看，贝塔波与处于高度警惕状态的活跃前额叶皮层相关。这个逻辑守护者通过过去的创伤和对未来的恐惧来过滤新信息。其结果是一个难以逾越的认知障碍，拒绝任何理性的自我暗示尝试。</p>
                <blockquote>“要修改潜意识的脚本，我们必须暂时停用左脑的批判性分析。”</blockquote>
                <p>西尔瓦方法证明，进入阿尔法状态可以降低杏仁核（恐惧中心）的活动，并激活右脑的创造力。潜意识类似于处于“开发者”模式的操作系统：它直接接受新的代码行，而无需向批判性自我请求权限。</p>
                <h3>哲学视角：意志控制的幻觉</h3>
                <p>我们一直以为意识意志（贝塔）在掌控我们的命运。事实上，现代精神分析证实 customize，我们每天 95% 以上的决定都是由潜意识中的自动模式驱动的。仅仅通过意识努力来试图控制现实是一种令人疲惫的幻觉。当你在阿尔法状态下将意图移交给深层智慧时 material，解脱便会到来。</p>
            `
        },
        mecanica: {
            ro: `
                <h3>Anatomia Reflexului Ocular la 20 de Grade</h3>
                <p>Studiile de EEG (electroencefalografie) arată că simpla ridicare a ochilor declanșează producția de unde Alpha în lobul occipital. Acesta este un neuro-reflex: când ochii privesc în sus, creierul dezactivează automat procesarea detaliilor vizuale exterioare și trece în modul de procesare vizuală internă (imaginație).</p>
                <h3>Biologia Respirației și Nervul Vag</h3>
                <p>Expirul prelungit stimulează nervul vag, principalul component al sistemului nervos parasimpatic. Acesta încetinește ritmul cardiac și scade secreția de cortizol (hormonul stresului). Ritmul Beta este strâns legat de starea de alertă ('luptă sau fugi'). Prin respirația funcțională, transmitem creierului semnalul chimic că suntem în siguranță absolută, permițându-i să coboare frecvențele bio-electrice.</p>
            `,
            en: `
                <h3>Anatomy of the 20-Degree Eye Reflex</h3>
                <p>EEG (electroencephalography) studies show that simply raising the eyes triggers Alpha wave production in the occipital lobe. This is a neuro-reflex: when the eyes look up, the brain automatically deactivates external visual detail processing and switches to internal visual processing (imagination).</p>
                <h3>Biology of Breathing and the Vagus Nerve</h3>
                <p>Prolonged exhalation stimulates the vagus nerve, the main component of the parasympathetic nervous system. It slows heart rate and decreases cortisol (stress hormone) secretion. The Beta rhythm is closely linked to the alert ('fight or flight') state. Through functional breathing, we send the chemical signal of absolute safety to the brain, allowing it to lower bio-electric frequencies.</p>
            `,
            pt: `
                <h3>Anatomia do Reflexo Ocular a 20 Graus</h3>
                <p>Estudos de EEG (eletroencefalografia) mostram que a simples elevação dos olhos desencadeia a produção de ondas Alpha no lobo occipital. Este é um neuro-reflexo: quando os olhos olham para cima, o cérebro desativa automaticamente o processamento de detalhes visuais externos e passa para o modo de processamento visual interno (imaginação).</p>
                <h3>Biologia da Respiração e o Nervo Vago</h3>
                <p>A exalação prolongada estimula o nervo vago, o principal componente do sistema nervoso parassimpático. Este abranda o ritmo cardíaco e diminui a secreção de cortisol (hormona do stress). O ritmo Beta está estreitamente ligado ao estado de alerta ('luta ou fuga'). Através da respiração funcional, transmitimos ao cérebro o sinal químico de que estamos em segurança absoluta, permitindo-lhe diminuir as frequências bioelétricas.</p>
            `,
            es: `
                <h3>Anatomía del Reflejo Ocular a 20 Grados</h3>
                <p>Estudios de EEG (electroencefalografía) muestran que la simple elevación de los ojos desencadena la producción de ondas Alpha en el lóbulo occipital. Se trata de un neuroreflejo: cuando los ojos miran hacia arriba, el cerebro desactiva automáticamente el procesamiento de detalles visuales externos y pasa al modo de procesamiento visual interno (imaginación).</p>
                <h3>Biología de la Respiración y el Nervio Vago</h3>
                <p>La exhalación prolongada estimula el nervio vago, el componente principal del sistema nervioso parasimpático. Este ralentiza el ritmo cardíaco y disminuye la secreción de cortisol (hormona del estrés). El ritmo Beta está estrechamente ligado al estado de alerta ('lucha o huida'). A través de la respiración funcional, enviamos al cerebro la señal química de seguridad absoluta, permitiéndole bajar las frecuencias bioeléctricas.</p>
            `,
            it: `
                <h3>Anatomia del Riflesso Oculare a 20 Gradi</h3>
                <p>Gli studi EEG (elettroencefalografia) dimostrano che il semplice sollevamento degli occhi innesca la produzione di onde Alpha nel lobo occipitale. Si tratta di un neuro-riflesso: quando gli occhi guardano verso l'alto, il cervello disattiva automaticamente l'elaborazione dei dettagli visivi esterni e passa alla modalità di elaborazione visiva interna (immaginazione).</p>
                <h3>Biologia della Respirazione e il Nervo Vago</h3>
                <p>L'espirazione prolungata stimola il nervo vago, il componente principale del sistema nervoso parasimpatico. Questo rallenta il battito cardiaco e riduce la secrezione di cortisolo (l'ormone dello stress). Il ritmo Beta è strettamente legato allo stato di allerta ('lotta o fuga'). Attraverso la respirazione funzionale, inviamo al cervello il segnale chimico di sicurezza assoluta, permettendogli di abbassare le frequenze bio-elettriche.</p>
            `,
            cs: `
                <h3>Anatomie Očního Reflexu při 20 Stupních</h3>
                <p>Studie EEG (elektroencefalografie) ukazují, že pouhé zvednutí očí spouští produkci vln Alpha v okcipitálním laloku. Jde o neuroreflex: když se oči dívají nahoru, mozek automaticky deaktivuje zpracování vnějších vizuálních detailů a přejde do režimu vnitřního vizuálního zpracování (imaginace).</p>
                <h3>Biologie Dýchání a Nervus Vagus</h3>
                <p>Prodloužený výdech stimuluje bloudivý nerv (nervus vagus), hlavní složku parasympatického nervového systému. Zpomaluje srdeční frekvenci a snižuje vylučování kortizolu (stresového hormonu). Rytmus Beta úzce souvisí se stavem bdělosti („bojuj, nebo uteč“). Funkčním dýcháním vysíláme do mozku chemický signál absolutního bezpečí, což mu umožňuje snížit bioelektrické frekvence.</p>
            `,
            pl: `
                <h3>Anatomia Odruchu Ocznego przy 20 Stopniach</h3>
                <p>Badania EEG (elektroencefalografia) wykazują, że samo uniesienie oczu wyzwala produkcję fal Alpha w płacie potylicznym. To neuroodruch: gdy oczy patrzą w górę, mózg automatycznie dezaktywuje przetwarzanie zewnętrznych szczegółów wizualnych i przechodzi w tryb wewnętrznego przetwarzania wizualnego (wyobraźnia).</p>
                <h3>Biologia Oddychania i Nerw Błędny</h3>
                <p>Wydłużony wydech stymuluje nerw błędny, główny składnik przywspółczulnego układu nerwowego. Spowalnia on tętno i zmniejsza wydzielanie kortyzolu (hormonu stresu). Rytm Beta jest ściśle powiązany ze stanem czujności („walcz lub uciekaj”). Poprzez oddech funkcjonalny wysyłamy do mózgu chemiczny sygnał absolutnego bezpieczeństwa, co pozwala mu obniżyć częstotliwości bioelektryczne.</p>
            `,
            ru: `
                <h3>Анатомия Глазного Рефлекса под Углом 20 Градусов</h3>
                <p>Исследования ЭЭГ (электроэнцефалографии) показывают, что простой подъем глаз запускает выработку альфа-волн в затылочной доле. Это нейрорефлекс: когда глаза смотрят вверх, мозг автоматически отключает обработку внешних визуальных деталей и переключается в режим внутренней визуальной обработки (воображение).</p>
                <h3>Биология Дыхания и Блуждающий Нерв</h3>
                <p>Продолжительный выдох стимулирует блуждающий нерв, главный компонент парасимпатической нервной системы. Он замедляет частоту сердечных сокращений и снижает секрецию кортизола (гормона стресса). Бета-ритм тесно связан с состоянием тревоги («бей или беги»). С помощью функционального дыхания мы посылаем мозгу химический сигнал абсолютной безопасности, позволяя ему снизить биоэлектрические частоты.</p>
            `,
            zh: `
                <h3>20度眼球反射 production 的解剖学</h3>
                <p>EEG（脑电图）研究表明，只需抬高眼睛即可触发枕叶中阿尔法波的产生。这是一种神经反射：当眼睛向上看时，大脑会自动停用外部视觉细节处理，并切换到内部视觉处理模式（想象）。</p>
                <h3>呼吸生物学与迷走神经</h3>
                <p>延长的呼气会刺激迷走神经，这是副交感神经系统的主要组成部分。它可以减慢心率并减少皮质醇（压力激素）的分泌。贝塔节奏与警觉（“战斗或逃跑”）状态密切相关。通过功能性呼吸，我们向大脑发送绝对安全的化学信号，使其能够降低生物电频率。</p>
            `
        },
        protocol: {
            ro: `
                <h3>Codificarea Realității în Subconștient</h3>
                <p>Pentru subconștient, o dorință exprimată sub forma 'Îmi doresc un job nou' indică o stare de lipsă. Subconștientul preia această instrucțiune și creează mai multă lipsă. Protocolul Silva impune programarea la timpul prezent, însoțită de imagini clare.</p>
                <h3>Importanța Detaliilor Senzoriale</h3>
                <p>Cortexul senzorial nu face diferența între o experiență reală și una vizualizată intens în starea Alpha. Când simți textura specifică a volanului mașinii dorite sau mirosul din acea încăpere, creierul tău activează aceleași rețele neuronale ca și cum experiența ar avea loc fizic. Aceasta creează o 'hartă neuronală a succesului' pe care corpul tău va tinde să o urmeze.</p>
            `,
            en: `
                <h3>Coding Reality in the Subconscious</h3>
                <p>For the subconscious, a desire expressed as 'I want a new job' indicates a state of lack. The subconscious takes this instruction and creates more lack. The Silva Protocol enforces present tense programming accompanied by clear images.</p>
                <h3>Importance of Sensory Details</h3>
                <p>The sensory cortex does not distinguish between a real experience and one intensely visualized in the Alpha state. When you feel the specific texture of the steering wheel of the desired car or the smell in that room, your brain activates the same neural networks as if the experience were physically taking place. This creates a 'neural map of success' that your body will tend to follow.</p>
            `,
            pt: `
                <h3>Codificação da Realidade no Subconsciente</h3>
                <p>Para o subconsciente, um desejo expresso sob a forma de 'Eu quero um novo emprego' indica um estado de falta. O subconsciente assume esta instrução e cria mais falta. O Protocolo Silva impõe a programação no tempo presente, acompanhada de imagens claras.</p>
                <h3>Importância dos Detalhes Sensoriais</h3>
                <p>O córtex sensorial não faz distinção entre uma experiência real e uma visualizada intensamente no estado Alpha. Quando sente a textura específica do volante do carro desejado ou o cheiro daquele quarto, o seu cérebro ativa as mesmas redes neuronais como se a experiência estivesse a ocorrer fisicamente. Isto cria um 'mapa neuronal de sucesso' que o seu corpo tenderá a seguir.</p>
            `,
            es: `
                <h3>Codificación de la Realidad en el Subconsciente</h3>
                <p>Para el subconsciente, un deseo expresado en forma de 'Quiero un nuevo trabajo' indica un estado de carencia. El subconsciente toma esta instrucción y crea más carencia. El Protocolo Silva impone la programación en tiempo presente, acompañada de imágenes claras.</p>
                <h3>Importancia de los Detalles Sensoriales</h3>
                <p>La corteza sensorial no distingue entre una experiencia real y una visualizada intensamente en el estado Alpha. Cuando sientes la textura específica del volante del coche deseado o el olor de esa habitación, tu cerebro activa las mismas redes neuronales que si la experiencia estuviera ocurriendo físicamente. Esto crea un 'mapa neuronal del éxito' que tu cuerpo tenderá a seguir.</p>
            `,
            it: `
                <h3>Codifica della Realtà nel Subconscio</h3>
                <p>Per il subconscio, un desiderio espresso sotto forma di 'Voglio un nuovo lavoro' indica uno stato di mancanza. Il subconscio recepisce questa istruzione e crea ulteriore mancanza. Il Protocollo Silva impone la programmazione al tempo presente, accompagnata da immagini chiare.</p>
                <h3>L'Importanza dei Dettagli Sensoriali</h3>
                <p>La corteccia sensoriale non distingue tra un'esperienza reale e una visualizzata intensamente nello stato Alpha. Quando senti la consistenza specifica del volante dell'auto desiderata o l'odore in quella stanza, il tuo cervello attiva le stesse reti neuronali come se l'esperienza stesse avvenendo fisicamente. Questo crea una 'mappa neurale del successo' che il tuo corpo tenderà a seguire.</p>
            `,
            cs: `
                <h3>Kódování Reality v Podvědomí</h3>
                <p>Pro podvědomí touha vyjádřená jako „chci novou práci“ ukazuje stav nedostatku. Podvědomí převezme tuto instrukci a vytvoří více nedostatku. Silva Protokol vyžaduje programování v přítomném čase, doprovázené jasnými obrazy.</p>
                <h3>Význam Smyslových Detailů</h3>
                <p>Smyslová kůra nerozezná rozdíl mezi skutečným zážitkem a zážitkem intenzivně vizualizovaným ve stavu Alpha. Když ucítíte specifickou texturu volantu vytouženého auta nebo vůni v oné místnosti, váš mozek aktivuje stejné neuronové sítě, jako by zážitek probíhal fyzicky. Tím se vytvoří „neuronová mapa úspěchu“, kterou bude vaše tělo přirozeně následovat.</p>
            `,
            pl: `
                <h3>Kodowanie Rzeczywistości w Podświadomości</h3>
                <p>Dla podświadomości pragnienie wyrażone jako „chcę nowej pracy” wskazuje na stan braku. Podświadomość przyjmuje tę instrukcję i tworzy więcej braku. Protokół Silvy wymaga programowania w czasie teraźniejszym, któremu towarzyszą wyraźne obrazy.</p>
                <h3>Znaczenie Szczegółów Sensorycznych</h3>
                <p>Kora czuciowa nie odróżnia rzeczywistego doświadczenia od doświadczenia intensywnie wizualizowanego w stanie Alpha. Kiedy czujesz specyficzną teksturę kierownicy wymarzonego samochodu lub zapach w tym pokoju, twój mózg aktywuje te same sieci neuronowe, jakby doświadczenie miało miejsce fizycznie. Tworzy to „mapę neuronową sukcesu”, którą twoje ciało będzie starało się podążać.</p>
            `,
            ru: `
                <h3>Кодирование Реальности в Подсознании</h3>
                <p>Для подсознания желание, выраженное в форме «Я хочу новую работу», указывает на состояние нехватки. Подсознание принимает эту инструкцию и создает еще большую нехватку. Протокол Сильва требует программирования в настоящем времени, сопровождаемого четкими образами.</p>
                <h3>Важность Сенсорных Деталей</h3>
                <p>Сенсорная кора не видит разницы между реальным опытом и опытом, интенсивно визуализируемым в состоянии Альфа. Когда вы чувствуете специфическую текстуру руля желаемого автомобиля или запах в этой комнате, ваш мозг активирует те же нейронные сети, как если бы этот опыт происходил физически. Это создает «нейронную карту успеха», которой ваше тело будет стремиться следовать.</p>
            `,
            zh: `
                <h3>在潜意识中对现实进行编码</h3>
                <p>对于潜意识来说，以“我想要一份新工作”形式表达的愿望表示缺乏状态。潜意识接受这个指令并创造更多的缺乏。西尔瓦方案强制执行现在时编程，并伴有清晰的图像。</p>
                <h3>感官细节的重要性</h3>
                <p>感官皮层无法区分真实体验与在阿尔法状态下强烈观想的体验。当你感受到所渴望汽车方向盘的特定质感或那个房间里的气味时，你的大脑会激活与该体验实际发生时相同的神经网络。这创造了一幅“成功的神经图景”，你的身体会倾向于去追随它。</p>
            `
        },
        relatii: {
            ro: `
                <h3>Psihologia Atașamentului și Programarea Alpha</h3>
                <p>Relațiile disfuncționale își au originea în scripturile de atașament nesigur (anxios sau evitant) formate în copilărie. În starea Alpha, poți accesa aceste rădăcini emoționale fără a fi blocat de mecanismele defensive din Beta.</p>
                <h3>Crearea Ancorelor pentru o Relație Securizantă</h3>
                <p>În loc să vizualizezi o persoană anume (ceea ce poate fi o încercare de manipulare a voinței altuia), Metoda Silva recomandă vizualizarea *stării de conexiune*. Simte ușurarea de a fi acceptat complet, bucuria vulnerabilității libere de judecată și pacea interioară. Prin repetarea acestei programări, subconștientul tău va acționa ca un filtru radar (Sistemul Reticular Activat), făcându-te să observi și să atragi exclusiv parteneri maturi din punct de vedere emoțional.</p>
            `,
            en: `
                <h3>Attachment Psychology and Alpha Programming</h3>
                <p>Dysfunctional relationships originate in insecure attachment scripts (anxious or avoidant) formed in childhood. In the Alpha state, you can access these emotional roots without being blocked by defensive mechanisms in Beta.</p>
                <h3>Creating Anchors for a Secure Relationship</h3>
                <p>Instead of visualizing a specific person (which can be an attempt to manipulate another's will), the Silva Method recommends visualizing the *state of connection*. Feel the relief of being completely accepted, the joy of judgment-free vulnerability, and inner peace. By repeating this programming, your subconscious will act as a radar filter (Reticular Activating System), making you notice and attract emotionally mature partners exclusively.</p>
            `,
            pt: `
                <h3>Psicologia do Apego e Programação Alpha</h3>
                <p>As relações disfuncionais têm a sua origem nos guiões de apego inseguro (ansioso ou evitativo) formados na infância. No estado Alpha, pode aceder a estas raízes emocionais sem ser bloqueado pelos mecanismos defensivos do estado Beta.</p>
                <h3>Criar Âncoras para uma Relação Segura</h3>
                <p>Em vez de visualizar uma pessoa específica (o que pode ser uma tentativa de manipular a vontade de outrem), o Método Silva recomenda visualizar o *estado de conexão*. Sinta o alívio de ser aceite completamente, a alegria da vulnerabilidade livre de julgamentos e a paz interior. Ao repetir esta programação, o seu subconsciente atuará como um filtro de radar (Sistema de Ativação Reticular), fazendo-o notar e atrair parceiros emocionalmente maduros.</p>
            `,
            es: `
                <h3>Psicología del Apego y Programación Alpha</h3>
                <p>Las relaciones disfuncionales tienen su origen en los guiones de apego inseguro (ansioso o evitativo) formados en la infancia. En el estado Alpha, puedes acceder a estas raíces emocionales sin ser bloqueado por los mecanismos defensivos del estado Beta.</p>
                <h3>Crear Anclas para una Relación Segura</h3>
                <p>En lugar de visualizar a una persona concreta (lo que puede ser un intento de manipular la voluntad ajena), el Método Silva recomienda visualizar el *estado de conexión*. Siente el alivio de ser aceptado por completo, la alegría de la vulnerabilidad libre de juicios y la paz interior. Al repetir esta programación, tu subconsciente actuará como un filtro de radar (Sistema de Activación Reticular), haciéndote notar y atraer socios maduros emocionalmente.</p>
            `,
            it: `
                <h3>Psicologia dell'Attaccamento e Programmazione Alpha</h3>
                <p>Le relazioni disfunzionali hanno origine nei copioni di attaccamento insicuro (ansioso o evitante) formatisi nell'infanzia. Nello stato Alpha, puoi accedere a queste radici emotive senza essere bloccato dai meccanismi difensivi del Beta.</p>
                <h3>Creare Ancore per una Relazione Sicura</h3>
                <p>Invece di visualizzare una persona specifica (il che può essere un tentativo di manipolare la volontà altrui), il Metodo Silva raccomanda di visualizzare lo *stato di connessione*. Senti il sollievo di essere accettato completamente, la gioia della vulnerabilità libera da giudizi e la pace interiore. Ripetendo questa programmazione, il tuo subconscio agiră come un filtro radar (Sistema di Attivazione Reticolare), portandoti a notare e attrarre esclusivamente partner emotivamente maturi.</p>
            `,
            cs: `
                <h3>Psychologie Vazby a Programování Alpha</h3>
                <p>Nefunkční vztahy mají svůj původ v plánech nejisté vazby (úzkostné nebo vyhýbavé) vytvořené v dětství. Ve stavu Alpha se můžete dostat k těmto emočním kořenům, aniž byste byli blokováni obrannými mechanismy v Betě.</p>
                <h3>Vytváření Kotev pro Bezpečný Vztah</h3>
                <p>Místo vizualizace konkrétní osoby (což může být pokusem o manipulaci s vůlí druhého) doporučuje Silva Metoda vizualizovat *stav spojení*. Pociťte úlevu z úplného přijetí, radost ze zranitelnosti bez odsuzování a vnitřní klid. Opakováním tohoto programování bude vaše podvědomí fungovat jako radarový filtr (retikulární aktivační systém), což vás přiměje všímat si a přitahovat výhradně emočně zralé partnery.</p>
            `,
            pl: `
                <h3>Psychologia Przywiązania i Programowanie Alpha</h3>
                <p>Dysfunkcyjne relacje mają swoje źródło w skryptach niepewnego przywiązania (lękowego lub unikającego) uformowanych w dzieciństwie. W stanie Alpha możesz uzyskać dostęp do tych emocjonalnych korzeni bez blokowania przez mechanizmy obronne w Becie.</p>
                <h3>Tworzenie Kotwic dla Bezpiecznego Związku</h3>
                <p>Zamiast wizualizować konkretną osobę (co może być próbą manipulacji wolą innej osoby), Metoda Silvy zaleca wizualizację *stanu połączenia*. Poczuj ulgę z bycia całkowicie zaakceptowanym, radość z wolnej od ocen wrażliwości i wewnętrzny spokój. Powtarzając to programowanie, twoja podświadomość będzie działać jak filtr radarowy (Retikularny Układ Aktywujący), sprawiając, że będziesz zauważać i przyciągać wyłącznie dojrzałych emocjonalnie partnerów.</p>
            `,
            ru: `
                <h3>Психология Привязанности и Альфа-Программирование</h3>
                <p>Дисфункциональные отношения берут свое начало в сценариях ненадежной привязанности (тревожной или избегающей), сформированных в детстве. В состоянии Альфа вы можете получить доступ к этим эмоциональным корням без блокировки защитными механизмами в Бете.</p>
                <h3>Создание Якорей для Безопасных Отношений</h3>
                <p>Вместо того чтобы визуализировать конкретного человека (что может быть попыткой манипулировать чужой волей), Метод Сильва рекомендует визуализировать *состояние связи*. Почувствуйте облегчение от полного принятия, радость уязвимости без осуждения и внутренний покой. Повторяя это программирование, ваше подсознание будет действовать как радарный фильтр (Ретикулярная Активирующая Система), заставляя вас замечать и привлекать исключительно эмоционально зрелых партнеров.</p>
            `,
            zh: `
                <h3>依恋心理学与阿尔法编程</h3>
                <p>功能失调的关系源于童年时期形成的不安全依恋脚本（焦虑型或回避型）。在阿尔法状态下，你可以访问这些情感根源，而不会被贝塔状态下的防御机制所阻碍。</p>
                <h3>为安全关系建立锚点</h3>
                <p>西尔瓦方法建议观想“连接状态”，而不是观想特定的人（这可能是试图操纵他人的意志）。感受被完全接纳的轻松、无审判脆弱的喜悦以及内在的和平。通过重复这种编程，你的潜意识将充当雷达过滤器（网状激活系统），使你注意到并只吸引情感成熟的伴侣。</p>
            `
        },
        sacre: {
            ro: `
                <h3>Neurobiologia Plasticității Cerebrale Rapide</h3>
                <p>Când rămâi nemișcat în starea Alpha timp de 10 secunde după o vizualizare intensă, creierul tău consolidează impulsurile electrice într-o conexiune sinaptică stabilă. Acest proces este asociat cu fenomenele de LTP (Long-Term Potentiation - Potențare pe Termen Lung).</p>
                <h3>Filtrarea Realității prin RAS (Sistemul Reticular Activat)</h3>
                <p>Sistemul Reticular Activat funcționează ca un filtru de spam pentru creier. El decide ce informații ajung la nivel conștient din milioanele de stimuli pe care îi primim zilnic. Cele 10 secunde de sigilare re-programează acest filtru. Creierul tău va începe să perceapă oportunități, resurse și coincidențe sincronistice care înainte erau invizibile pentru mintea ta Beta agitată.</p>
            `,
            en: `
                <h3>Neurobiology of Rapid Brain Plasticity</h3>
                <p>When you remain still in the Alpha state for 10 seconds after an intense visualization, your brain consolidates electrical impulses into a stable synaptic connection. This process is associated with LTP (Long-Term Potentiation) phenomena.</p>
                <h3>Reality Filtering through RAS (Reticular Activating System)</h3>
                <p>The Reticular Activating System operates as a spam filter for the brain. It decides which information reaches the conscious level from the millions of stimuli we receive daily. The 10 seconds of sealing reprogram this filter. Your brain will begin to perceive opportunities, resources, and synchronistic coincidences that were previously invisible to your agitated Beta mind.</p>
            `,
            pt: `
                <h3>Neurobiologia da Plasticidade Cerebral Rápida</h3>
                <p>Quando permanece imóvel no estado Alpha por 10 segundos após uma visualização intensa, o seu cérebro consolida os impulsos elétricos numa ligação sináptica estável. Este processo está associado aos fenómenos de LTP (Long-Term Potentiation - Potenciação a Longo Prazo).</p>
                <h3>Filtragem da Realidade através do SAR (Sistema de Ativação Reticular)</h3>
                <p>O Sistema de Ativação Reticular funciona como um filtro de spam para o cérebro. Ele decide que informação chega ao nível consciente a partir dos milhões de estímulos que recebemos diariamente. Os 10 segundos de selagem reprogramam este filtro. O seu cérebro começará a perceber oportunidades, recursos e coincidências sincronísticas que antes eram invisíveis para a sua mente Beta agitada.</p>
            `,
            es: `
                <h3>Neurobiología de la Plasticidad Cerebral Rápida</h3>
                <p>Cuando permaneces inmóvil en el estado Alpha durante 10 segundos después de una visualización intensa, tu cerebro consolida los impulsos eléctricos en una conexión sináptica estable. Este proceso se asocia con los fenómenos de LTP (Long-Term Potentiation - Potenciación a Largo Plazo).</p>
                <h3>Filtrado de la Realidad a través del SAR (Sistema de Activación Reticular)</h3>
                <p>El Sistema de Activación Reticular funciona como un filtro de spam para el cerebro. Decide qué información llega al nivel consciente a partir de los millones de estímulos que recibimos a diario. Los 10 segundos de sellado reprograman este filtro. Tu cerebro empezará a percibir oportunidades, recursos y coincidencias sincronísticas que antes eran invisibles para tu mente Beta agitada.</p>
            `,
            it: `
                <h3>Neurobiologia della Plasticità Cerebrale Rapida</h3>
                <p>Quando rimani immobile nello stato Alpha per 10 secondi dopo un'intensa visualizzazione, il tuo cervello consolida gli impulsi elettrici in una connessione sinaptica stabile. Questo processo è associato ai fenomeni di LTP (Long-Term Potentiation - Potenziamento a Lungo Termine).</p>
                <h3>Filtrare la Realtà attraverso il SAR (Sistema di Attivazione Reticolare)</h3>
                <p>Il Sistema di Attivazione Reticolare funziona come un filtro antispam per il cervello. Decide quali informazioni raggiungono il livello cosciente tra i milioni di stimoli che riceviamo ogni giorno. I 10 secondi di sigillatura riprogrammano questo filtro. Il tuo cervello comincerà a percepire opportunità, risorse e coincidenze sincronistiche che prima erano invisibili per la tua agitata mente Beta.</p>
            `,
            cs: `
                <h3>Neurobiologie Rychlé Mozkové Plasticity</h3>
                <p>Když po intenzivní vizualizaci zůstanete 10 sekund bez hnutí ve stavu Alpha, váš mozek konsoliduje elektrické impulsy do stabilního synaptického spojení. Tento proces je spojen s fenomény LTP (Long-Term Potentiation - Dlouhodobá Potenciace).</p>
                <h3>Filtrování Reality přes RAS (Retikulární Aktivační Systém)</h3>
                <p>Retikulární aktivační systém funguje jako spamový filtr pro mozek. Rozhoduje o tom, které informace se dostanou na vědomou úroveň z milionů podnětů, které denně přijímáme. Těchto 10 sekund zpečetění přeprogramuje tento filtr. Váš mozek začne vnímat příležitosti, zdroje a synchronní náhody, které byly dříve pro vaši neklidnou Beta mysl neviditelné.</p>
            `,
            pl: `
                <h3>Neurobiologia Szybkiej Plastyczności Mózgu</h3>
                <p>Kiedy pozostajesz bezruchu w stanie Alpha przez 10 sekund po intensywnej wizualizacji, twój mózg konsoliduje impulsy elektryczne w stabilne połączenie synaptyczne. Proces ten jest związany z zjawiskami LTP (Long-Term Potentiation - Długotrwałe Wzmocnienie Synaptyczne).</p>
                <h3>Filtrowanie Rzeczywistości przez RUA (Retikularny Układ Aktywujący)</h3>
                <p>Retikularny Układ Aktywujący działa jak filtr antyspamowy dla mózgu. Decyduje, które informacje docierają do poziomu świadomego z milionów bodźców, które otrzymujemy codziennie. Te 10 sekund zapieczętowania przeprogramowuje ten filtr. Twój mózg zacznie dostrzegać szanse, zasoby i synchroniczne zbiegi okoliczności, które wcześniej były niewidoczne dla twojego niespokojnego umysłu Beta.</p>
            `,
            ru: `
                <h3>Нейробиология Быстрой Пластичности Мозга</h3>
                <p>Когда вы остаетесь неподвижными в состоянии Альфа в течение 10 секунд после интенсивной визуализации, ваш мозг консолидирует электрические импульсы в стабильную синаптическую связь. Этот процесс связан с явлениями ВП (Временной Потенциации - Long-Term Potentiation).</p>
                <h3>Фильтрация Реальности через РАС (Ретикулярную Активирующую Систему)</h3>
                <p>Ретикулярная Активирующая Система работает как спам-фильтр для мозга. Она решает, какая информация из миллионов ежедневно получаемых стимулов доходит до сознательного уровня. 10 секунд запечатывания перепрограммируют этот фильтр. Ваш мозг начнет воспринимать возможности, ресурсы и синхронистичные совпадения, которые раньше были невидимы для вашего беспокойного бета-разума.</p>
            `,
            zh: `
                <h3>快速大脑可塑性的神经生物学</h3>
                <p>在进行强烈观想后，当你在阿尔法状态下保持静止 10 秒钟时，你的大脑会将电脉冲巩固为稳定的突触连接。该过程与 LTP（长时程增强）现象相关。</p>
                <h3>通过 RAS（网状激活系统）过滤现实</h3>
                <p>网状激活系统充当大脑的垃圾邮件过滤器。它从我们每天接收的数百万个刺激中决定哪些信息到达意识层面。这 10 秒的封印重新编程了这个过滤器。你的大脑将开始感知以前在你焦虑的贝塔心智中看不见的机遇、资源和共时性巧合。</p>
            `
        }
    };

    // --- 3. LANGUAGE SWITCHER LOGIC ---
    const langSelect = document.getElementById('lang-select');
    let currentLang = 'ro';

    function switchLanguage(lang) {
        currentLang = lang;
        const dict = translations[lang];
        
        // Loop through all dictionary keys and update DOM elements
        for (const key in dict) {
            const el = document.getElementById(key);
            if (el) {
                // If it contains HTML elements inside translations (like Hero title span), use innerHTML
                if (dict[key].includes('<span') || dict[key].includes('<br')) {
                    el.innerHTML = dict[key];
                } else {
                    el.innerText = dict[key];
                }
            }
        }

        // Handle specific attribute translations if needed (like placeholders)
        document.documentElement.setAttribute('lang', lang);
    }

    langSelect.addEventListener('change', (e) => {
        switchLanguage(e.target.value);
    });


    // --- 4. DETAILS MODALS LOGIC ---
    const detailModal = document.getElementById('detail-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalBodyContent = document.getElementById('modal-body-content');
    const modalTag = document.getElementById('modal-tag');

    document.querySelectorAll('.btn-detail').forEach(button => {
        button.addEventListener('click', (e) => {
            const sectionKey = e.target.getAttribute('data-section');
            
            // Get content based on current section and language
            const contentHTML = detailedContent[sectionKey][currentLang];
            const sectionTitle = translations[currentLang][`nav-${sectionKey.substring(0,3)}`] || e.target.innerText;
            
            modalTitle.innerText = sectionTitle;
            modalBodyContent.innerHTML = contentHTML;
            modalTag.innerText = translations[currentLang]['nav-arh'].toUpperCase();
            
            // Open modal and lock scroll
            detailModal.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        detailModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && detailModal.classList.contains('open')) {
            closeModal();
        }
    });


    // --- 5. WEB AUDIO API SYNTHESIZER (Alpha Binaural Beats) ---
    const btnAudioToggle = document.getElementById('btn-audio-toggle');
    const audioPanel = document.getElementById('audio-panel');
    const audioIcon = document.getElementById('audio-icon');
    const audioLabel = document.getElementById('audio-label');

    let audioCtx = null;
    let oscLeft = null;
    let oscRight = null;
    let gainNode = null;
    let isPlaying = false;

    // Sample player state
    let activeSampleName = null;
    let sampleOscLeft = null;
    let sampleOscRight = null;
    let sampleGainNode = null;

    function initAudio() {
        // Create audio context
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create oscillators
        oscLeft = audioCtx.createOscillator();
        oscRight = audioCtx.createOscillator();
        
        // Frequencies: Left ear gets 200 Hz carrier wave. Right ear gets 210 Hz.
        // Difference is 10 Hz (Alpha frequency)
        oscLeft.frequency.value = 200; 
        oscRight.frequency.value = 210; 
        
        // Waveform: Sine waves for pure harmonics
        oscLeft.type = 'sine';
        oscRight.type = 'sine';

        // Channel merger to split channels to left/right
        const merger = audioCtx.createChannelMerger(2);

        // Split oscillators to left and right channels
        oscLeft.connect(merger, 0, 0); // oscLeft -> Channel 0 (Left)
        oscRight.connect(merger, 0, 1); // oscRight -> Channel 1 (Right)

        // Gain node for volume control and smooth fade-in
        gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime); // start silent

        merger.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        // Start oscillators
        oscLeft.start(0);
        oscRight.start(0);
    }

    btnAudioToggle.addEventListener('click', () => {
        if (!audioCtx) {
            initAudio();
        }

        // Stop active sample if one is playing
        if (activeSampleName) {
            stopActiveSample();
        }

        if (!isPlaying) {
            // Resume context if suspended
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            // Smooth fade-in to prevent clicks
            gainNode.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 1.5); // low volume for background ambient
            
            isPlaying = true;
            audioPanel.classList.add('audio-active');
            audioIcon.className = 'fa-solid fa-volume-high';
            audioLabel.innerText = translations[currentLang]['audio-label-on'];
        } else {
            // Smooth fade-out
            gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.8);
            
            setTimeout(() => {
                if (!isPlaying) {
                    audioCtx.suspend();
                }
            }, 800);

            isPlaying = false;
            audioPanel.classList.remove('audio-active');
            audioIcon.className = 'fa-solid fa-volume-xmark';
            audioLabel.innerText = translations[currentLang]['audio-label'];
        }
    });

    // Dynamic frequency modulation on scroll (simulating descending depth)
    window.addEventListener('scroll', () => {
        if (isPlaying && oscRight && audioCtx) {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight <= 0) return;
            
            const scrollRatio = window.scrollY / scrollHeight;
            
            // At top: 11 Hz difference (Light Alpha)
            // At bottom (10 Secunde Sacre): 8 Hz difference (Deep Theta/Alpha border)
            const diff = 11 - (scrollRatio * 3.5); 
            
            // Smoothly transition the right oscillator frequency
            oscRight.frequency.setTargetAtTime(200 + diff, audioCtx.currentTime, 0.2);
        }
    });


    // --- 6. SCROLL TO TOP BUTTON ---
    const btnScrollTop = document.getElementById('btn-scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btnScrollTop.classList.add('visible');
        } else {
            btnScrollTop.classList.remove('visible');
        }
    });

    btnScrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // --- 7. SCROLL REVEAL (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.scroll-reveal, .fade-in-up');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.style.getPropertyValue('--delay');
                if (delay) {
                    entry.target.style.transitionDelay = `${delay * 0.15}s`;
                }
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    setTimeout(() => {
        document.querySelectorAll('.hero .fade-in-up').forEach(el => {
            el.classList.add('active');
        });
    }, 150);


    // --- 8. ALPHA SIMULATOR (Oscillator wave visual) ---
    const btnDescend = document.getElementById('btn-descend');
    const simulatorWave = document.getElementById('simulator-wave');
    const waveText = document.getElementById('wave-text');
    let inAlpha = false;

    const wavePath = document.getElementById('wave-path');
    const betaPath = "M 0 75 Q 10 30 20 75 T 40 75 T 60 75 T 80 75 T 100 75 T 120 75 T 140 75 T 160 75 T 180 75 T 200 75 T 220 75 T 240 75 T 260 75 T 280 75 T 300 75 T 320 75 T 340 75 T 360 75 T 380 75 T 400 75 T 420 75 T 440 75 T 460 75 T 480 75 T 500 75 T 520 75 T 540 75 T 560 75 T 580 75 T 600 75 T 620 75 T 640 75 T 660 75 T 680 75 T 700 75 T 720 75 T 740 75 T 760 75 T 780 75 T 800 75";
    const alphaPath = "M 0 75 Q 40 10 80 75 T 160 75 T 240 75 T 320 75 T 400 75 T 480 75 T 560 75 T 640 75 T 720 75 T 800 75";

    btnDescend.addEventListener('click', () => {
        if (!inAlpha) {
            inAlpha = true;
            btnDescend.innerText = translations[currentLang]['btn-ascend'];
            btnDescend.classList.remove('btn-primary');
            btnDescend.classList.add('btn-secondary');
            
            simulatorWave.classList.remove('animate-beta');
            simulatorWave.classList.add('animate-alpha');
            wavePath.setAttribute('d', alphaPath);
            
            waveText.style.opacity = 0;
            setTimeout(() => {
                waveText.innerText = translations[currentLang]['sim-text-alpha'];
                waveText.style.color = 'var(--color-purple)';
                waveText.style.opacity = 1;
            }, 300);

            document.body.style.boxShadow = 'inset 0 0 120px rgba(139, 92, 246, 0.25)';
            setTimeout(() => {
                document.body.style.boxShadow = 'none';
            }, 1200);
        } else {
            inAlpha = false;
            btnDescend.innerText = translations[currentLang]['btn-descend'];
            btnDescend.classList.remove('btn-secondary');
            btnDescend.classList.add('btn-primary');
            
            simulatorWave.classList.remove('animate-alpha');
            simulatorWave.classList.add('animate-beta');
            wavePath.setAttribute('d', betaPath);
            
            waveText.style.opacity = 0;
            setTimeout(() => {
                waveText.innerText = translations[currentLang]['sim-text-beta'];
                waveText.style.color = 'var(--text-secondary)';
                waveText.style.opacity = 1;
            }, 300);
        }
    });


    // --- 9. THE 10 SACRED SECONDS TIMER ---
    const btnTriggerTimer = document.getElementById('btn-trigger-timer');
    const countdownNum = document.getElementById('countdown-num');
    const progressBar = document.getElementById('timer-progress');
    let timerInterval = null;

    btnTriggerTimer.addEventListener('click', () => {
        btnTriggerTimer.disabled = true;
        btnTriggerTimer.innerText = currentLang === 'ro' ? 'Sincronizare...' : 'Syncing...';
        
        let timeLeft = 10;
        countdownNum.innerText = timeLeft;
        
        const totalDash = 534;
        progressBar.style.strokeDashoffset = 0;
        progressBar.style.transition = 'stroke-dashoffset 1s linear';

        timerInterval = setInterval(() => {
            timeLeft--;
            countdownNum.innerText = timeLeft;
            
            const percent = timeLeft / 10;
            const offset = totalDash - (percent * totalDash);
            progressBar.style.strokeDashoffset = offset;

            if (timeLeft === 0) {
                clearInterval(timerInterval);
                
                btnTriggerTimer.innerText = currentLang === 'ro' ? 'Integrare Completă.' : 'Integration Complete.';
                countdownNum.innerText = '✓';
                countdownNum.style.color = 'var(--color-teal)';
                progressBar.style.stroke = 'var(--color-teal)';
                
                const glow = document.querySelector('.glow-2');
                glow.style.transform = 'scale(2.2)';
                glow.style.background = 'radial-gradient(circle, rgba(13, 148, 136, 0.45) 0%, rgba(0,0,0,0) 70%)';
                glow.style.transition = 'transform 2.5s ease, background 2.5s ease';

                setTimeout(() => {
                    glow.style.transform = 'scale(1)';
                    glow.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(0,0,0,0) 70%)';
                }, 4000);

                setTimeout(() => {
                    btnTriggerTimer.disabled = false;
                    btnTriggerTimer.innerText = translations[currentLang]['btn-trigger-timer'];
                    countdownNum.innerText = '10';
                    countdownNum.style.color = 'var(--text-primary)';
                    progressBar.style.transition = 'none';
                    progressBar.style.strokeDashoffset = 534;
                    progressBar.style.stroke = 'var(--color-purple)';
                }, 6000);
            }
        }, 1000);
    });

    // --- 10. FREQUENCY SAMPLE PLAYER LOGIC ---
    const btnPlaySamples = document.querySelectorAll('.btn-play-sample');

    btnPlaySamples.forEach(btn => {
        btn.addEventListener('click', () => {
            const sampleName = btn.getAttribute('data-sample');

            // Initialize Audio Context if not done yet
            if (!audioCtx) {
                initAudio();
            }
            
            // Resume context if suspended
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            // If the clicked sample is currently playing, stop it
            if (activeSampleName === sampleName) {
                stopActiveSample();
                
                // Restore main ambient if it was playing
                if (isPlaying && gainNode) {
                    gainNode.gain.setTargetAtTime(0.08, audioCtx.currentTime, 0.3);
                }
                return;
            }

            // If another sample is playing, stop it first
            if (activeSampleName) {
                stopActiveSample();
            }

            // If main ambient is playing, mute it temporarily
            if (isPlaying && gainNode) {
                gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0.1);
            }

            // Start playing new sample
            activeSampleName = sampleName;
            btn.classList.add('playing');
            btn.querySelector('i').className = 'fa-solid fa-pause';

            // Create Carrier Oscillator (generates the audible pitch)
            sampleOscLeft = audioCtx.createOscillator(); 
            sampleOscLeft.type = 'sine';
            
            // Create LFO Oscillator (generates the brainwave pulse speed)
            sampleOscRight = audioCtx.createOscillator(); 
            sampleOscRight.type = 'sine';

            let carrierFreq = 220;
            let lfoFreq = 10; // Alpha 10 Hz

            if (sampleName === 'beta') {
                carrierFreq = 260; // Higher pitch for active mind
                lfoFreq = 20;      // Beta 20 Hz (rapid vibration)
            } else if (sampleName === 'alpha') {
                carrierFreq = 220; // Medium pitch for relaxed focus
                lfoFreq = 10;      // Alpha 10 Hz (calm pulsation)
            } else if (sampleName === 'theta') {
                carrierFreq = 180; // Deep low pitch for deep sleep/meditation
                lfoFreq = 4;       // Theta/Delta 4 Hz (slow breathing pulse)
            }

            sampleOscLeft.frequency.value = carrierFreq;
            sampleOscRight.frequency.value = lfoFreq;

            // LFO gain controls the depth of volume modulation (how much it drops)
            const lfoGain = audioCtx.createGain();
            lfoGain.gain.value = 0.45; // modulate volume by 45% up and down

            // Carrier gain is the base volume of the carrier tone
            const carrierGain = audioCtx.createGain();
            carrierGain.gain.value = 0.55; // base level

            // Route LFO -> LFO Gain -> Carrier Gain's parameter (Volume Modulation)
            sampleOscRight.connect(lfoGain);
            lfoGain.connect(carrierGain.gain);

            // Connect Carrier -> Modulated Gain
            sampleOscLeft.connect(carrierGain);

            // Main sample gain for smooth volume control
            sampleGainNode = audioCtx.createGain();
            sampleGainNode.gain.setValueAtTime(0, audioCtx.currentTime);
            
            carrierGain.connect(sampleGainNode);
            sampleGainNode.connect(audioCtx.destination);

            // Fade in sample smoothly
            sampleGainNode.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + 0.3);

            sampleOscLeft.start(0);
            sampleOscRight.start(0);
        });
    });

    function stopActiveSample() {
        if (!activeSampleName) return;

        const activeBtn = document.querySelector(`.btn-play-sample[data-sample="${activeSampleName}"]`);
        if (activeBtn) {
            activeBtn.classList.remove('playing');
            activeBtn.querySelector('i').className = 'fa-solid fa-volume-low';
        }

        if (sampleGainNode) {
            try {
                // Fade out to prevent clicks
                sampleGainNode.gain.setValueAtTime(sampleGainNode.gain.value, audioCtx.currentTime);
                sampleGainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.2);
            } catch(e) {}
        }

        const l = sampleOscLeft;
        const r = sampleOscRight;
        setTimeout(() => {
            try {
                if (l) l.stop();
                if (r) r.stop();
            } catch(e) {}
        }, 250);

        activeSampleName = null;
        sampleOscLeft = null;
        sampleOscRight = null;
        sampleGainNode = null;
    }

    // --- 11. INTERACTIVE GUIDED BREATHWORK PANEL ---
    const breathTabs = document.querySelectorAll('.breath-tab');
    const breathCircle = document.getElementById('breath-circle');
    const breathInstruction = document.getElementById('breath-instruction');
    const breathTimer = document.getElementById('breath-timer');
    const btnStartBreath = document.getElementById('btn-start-breath');
    
    const breathTechTitle = document.getElementById('breath-tech-title');
    const breathTechDesc = document.getElementById('breath-tech-desc');
    const breathTechPsych = document.getElementById('breath-tech-psych');

    const breathworkConfig = {
        alpha: {
            cycles: [
                { action: 'inhale', time: 4, scale: 1.6 },
                { action: 'hold', time: 4, scale: 1.6 },
                { action: 'exhale', time: 4, scale: 1.0 },
                { action: 'hold', time: 4, scale: 1.0 }
            ],
            title: {
                ro: "Coborârea Alpha (4-4-4-4)",
                en: "Alpha Descent (4-4-4-4)",
                pt: "Descida Alpha (4-4-4-4)",
                es: "Descenso Alpha (4-4-4-4)",
                it: "Discesa Alpha (4-4-4-4)",
                cs: "Sestup Alpha (4-4-4-4)",
                pl: "Schodzenie Alpha (4-4-4-4)",
                ru: "Альфа-Спуск (4-4-4-4)",
                zh: "阿尔法沉降 (4-4-4-4)"
            },
            desc: {
                ro: "Echilibrează bioxidul de carbon și scade ritmul cardiac, pregătind creierul pentru accesarea stării Alpha.",
                en: "Balances carbon dioxide and lowers heart rate, preparing the brain to access the Alpha state.",
                pt: "Equilibra o dióxido de carbono e reduz o ritmo cardíaco, preparando o cérebro para o estado Alpha.",
                es: "Equilibra el dióxido de carbono y reduce el ritmo cardíaco, preparando al cerebro para el estado Alpha.",
                it: "Equilibra l'anidride carbonica e riduce il battito cardiaco, preparando il cervello allo stato Alpha.",
                cs: "Vyvažuje oxid uhličitý a snižuje srdeční frekvenci, čímž připravuje mozek na stav Alpha.",
                pl: "Równoważy poziom dwutlenku węgla i obniża tętno, przygotowując mózg na wejście w stan Alpha.",
                ru: "Балансирует углекислый газ и снижает частоту сердечных сокращений, готовя мозг к альфа-состоянию.",
                zh: "平衡二氧化碳并降低心率，使大脑准备好进入阿尔法状态。"
            },
            psych: {
                ro: "<strong>Mecanism Psihiatric:</strong> Calmează amigdala cerebrală și reduce tonusul simpatic, suprimând starea de alertă (Beta).",
                en: "<strong>Psychiatric Mechanism:</strong> Calms the amygdala and reduces sympathetic tone, suppressing the alert state (Beta).",
                pt: "<strong>Mecanismo Psiquiátrico:</strong> Acalma a amígdala e reduz o tom simpático, suprimindo o estado de alerta (Beta).",
                es: "<strong>Mecanismo Psiquiátrico:</strong> Calma la amígdala y reduce el tono simpático, suprimiendo el estado de alerta (Beta).",
                it: "<strong>Meccanismo Psichiatrico:</strong> Calma l'amigdala e riduce il tono simpatico, sopprimendo lo stato di allerta (Beta).",
                cs: "<strong>Psychiatrický Mechanismus:</strong> Zklidňuje amygdalu a snižuje sympatický tonus, čímž potlačuje stav bdělosti (Beta).",
                pl: "<strong>Mechanizm Psychiatryczny:</strong> Wycisza ciało migdałowate i zmniejsza napięcie współczulne, tłumiąc stan czuwania (Beta).",
                ru: "<strong>Психиатрический Механизм:</strong> Успокаивает миндалевидное тело и снижает тонус симпатической системы, подавляя бета-тревогу.",
                zh: "<strong>精神病学机制：</strong>镇静杏仁核并降低交感神经张力，从而抑制警觉状态（贝塔波）。"
            }
        },
        vagus: {
            cycles: [
                { action: 'inhale', time: 4, scale: 1.5 },
                { action: 'hold', time: 7, scale: 1.5 },
                { action: 'exhale', time: 8, scale: 1.0 }
            ],
            title: {
                ro: "Decompresie Vagală (4-7-8)",
                en: "Vagus Nerve Decompress (4-7-8)",
                pt: "Descompressão Vagal (4-7-8)",
                es: "Descompresión Vagal (4-7-8)",
                it: "Decompressione Vagale (4-7-8)",
                cs: "Vagální Dekomprese (4-7-8)",
                pl: "Dekompresja Błędna (4-7-8)",
                ru: "Вагусная Декомпрессия (4-7-8)",
                zh: "迷走神经减压 (4-7-8)"
            },
            desc: {
                ro: "Tehnică profundă pentru combaterea insomniei și a anxietății acute Beta, restabilind calmul.",
                en: "Deep technique for combating insomnia and acute Beta anxiety, restoring calmness.",
                pt: "Técnica profunda para combater a insónia e a ansiedade Beta aguda, restaurando a calma.",
                es: "Técnica profunda para combatir el insomnio y la ansiedad Beta aguda, restaurando la calma.",
                it: "Tecnica profonda per combattere l'insonnia e l'ansia Beta acuta, ripristinando la calma.",
                cs: "Hluboká technika pro boj s nespavostí a akutní úzkostí Beta, obnovující klid.",
                pl: "Głęboka technika walki z bezsennością i ostrym lękiem Beta, przywracająca spokój.",
                ru: "Глубокая техника борьбы с бессонницей и острой бета-тревогой, восстанавливающая спокойствие.",
                zh: "对抗失眠和急性贝塔焦虑的深度技术，恢复平静。"
            },
            psych: {
                ro: "<strong>Mecanism Psihiatric:</strong> Expirul prelungit stimulează masiv nervul vag, declanșând eliberarea de acetilcolină și încetinirea imediată a cordului.",
                en: "<strong>Psychiatric Mechanism:</strong> Prolonged exhalation heavily stimulates the vagus nerve, triggering acetylcholine release and immediate cardiac deceleration.",
                pt: "<strong>Mecanismo Psiquiátrico:</strong> A exalação prolongada estimula fortemente o nervo vago, desencadeando a libertação de acetilcolina e desaceleração cardíaca imediata.",
                es: "<strong>Mecanismo Psiquiátrico:</strong> La exhalación prolongada estimula fuertemente el nervio vago, desencadenando la liberación de acetilcolina e inmediata deceleración cardíaca.",
                it: "<strong>Meccanismo Psichiatrico:</strong> L'espirazione prolungata stimola fortemente il nervo vago, innescando il rilascio di acetilcolina e l'immediato rallentamento cardiaco.",
                cs: "<strong>Psychiatrický Mechanismus:</strong> Prodloužený výdech silně stimuluje bloudivý nerv, což spouští uvolňování acetylcholinu a okamžité zpomalení srdce.",
                pl: "<strong>Mechanizm Psychiatryczny:</strong> Wydłużony wydech silnie stymuluje nerw błędny, wyzwalając acetylocholinę i powodując natychmiastowe spowolnienie pracy serca.",
                ru: "<strong>Психиатрический Механизм:</strong> Удлиненный выдох мощно стимулирует блуждающий нерв, запуская выброс ацетилхолина и немедленно замедляя пульс.",
                zh: "<strong>精神病学机制：</strong>延长的呼气会强烈刺激迷走神经，触发乙酰胆碱的释放并立即使心率变慢。"
            }
        },
        coherence: {
            cycles: [
                { action: 'inhale', time: 5, scale: 1.6 },
                { action: 'exhale', time: 5, scale: 1.0 }
            ],
            title: {
                ro: "Ritmul de Coerență (5-5)",
                en: "Coherence Rhythm (5-5)",
                pt: "Ritmo de Coerência (5-5)",
                es: "Ritmo de Coherencia (5-5)",
                it: "Ritmo di Coerenza (5-5)",
                cs: "Rytmus Koherence (5-5)",
                pl: "Rytm Koherencji (5-5)",
                ru: "Ритм Когерентности (5-5)",
                zh: "共振相干呼吸 (5-5)"
            },
            desc: {
                ro: "Sincronizează variabilitatea ritmului cardiac (HRV) cu activitatea undelor cerebrale.",
                en: "Synchronizes heart rate variability (HRV) with brainwave activity.",
                pt: "Sincroniza a variabilidade do ritmo cardíaco (HRV) com a atividade das ondas cerebrais.",
                es: "Sincroniza la variabilidad del ritmo cardíaco (HRV) con la actividad de las ondas cerebrales.",
                it: "Sincronizza la variabilità del battito cardiaco (HRV) con l'attività delle onde generali.",
                cs: "Synchronizuje variabilitu srdeční frekvence (HRV) s aktivitou mozkových vln.",
                pl: "Synchronizuje zmienność rytmu zatokowego (HRV) z aktywnością fal mózgowych.",
                ru: "Синхронизирует вариабельность сердечного ритма (ВСР) с активностью мозговых волн.",
                zh: "使心率变异性 (HRV) 与脑电波活动同步。"
            },
            psych: {
                ro: "<strong>Mecanism Psihiatric:</strong> Resonarea la 0.1 Hz (6 respirații/minut) stabilizează tensiunea și elimină stresul emoțional, creând coerență cardiacă.",
                en: "<strong>Psychiatric Mechanism:</strong> Resonating at 0.1 Hz (6 breaths/minute) stabilizes blood pressure and eliminates emotional stress, creating cardiac coherence.",
                pt: "<strong>Mecanismo Psiquiátrico:</strong> A ressonância a 0.1 Hz (6 respirações/minuto) estabiliza a tensão e elimina o stress emocional, criando coerência cardíaca.",
                es: "<strong>Mecanismo Psiquiátrico:</strong> La resonancia a 0.1 Hz (6 respiraciones/minuto) estabiliza la tensión y elimina el estrés emocional, creando coherencia cardíaca.",
                it: "<strong>Meccanismo Psichiatrico:</strong> La risonanza a 0.1 Hz (6 respirazioni/minuto) stabilizza la pressione e azzera lo stress emotivo, creando coerenza cardiaca.",
                cs: "<strong>Psychiatrický Mechanismus:</strong> Rezonance při 0.1 Hz (6 nádechů/minutu) stabilizuje tlak a odstraňuje emoční stres, čímž vytváří srdeční koherenci.",
                pl: "<strong>Mechanizm Psychiatryczny:</strong> Rezonans przy 0,1 Hz (6 oddechów/minutę) stabilizuje ciśnienie i eliminuje stres emocjonalny, tworząc koherencję serca.",
                ru: "<strong>Психиатрический Механизм:</strong> Резонанс на частоте 0.1 Гц (6 вдохов в минуту) стабилизирует кровяное давление и снижает эмоциональный стресс.",
                zh: "<strong>精神病学机制：</strong>在 0.1 Hz（每分钟 6 次呼吸）下的共振可稳定血压并消除情绪压力，从而产生心脏相干性。"
            }
        }
    };

    const breathWords = {
        inhale: { ro: "Inspiră", en: "Inhale", pt: "Inspire", es: "Inhale", it: "Inspira", cs: "Nádech", pl: "Wdech", ru: "Вдох", zh: "吸气" },
        hold: { ro: "Menține", en: "Hold", pt: "Segure", es: "Retenga", it: "Trattieni", cs: "Zadržet", pl: "Wstrzymaj", ru: "Задержка", zh: "屏气" },
        exhale: { ro: "Expiră", en: "Exhale", pt: "Expire", es: "Exhale", it: "Espira", cs: "Výdech", pl: "Wydech", ru: "Выдох", zh: "呼气" },
        start: { ro: "Apasă Start", en: "Press Start", pt: "Iniciar", es: "Iniciar", it: "Inizia", cs: "Spustit", pl: "Start", ru: "Старт", zh: "开始" },
        btnStart: { ro: "Start", en: "Start", pt: "Iniciar", es: "Iniciar", it: "Inizia", cs: "Spustit", pl: "Start", ru: "Старт", zh: "开始" },
        btnStop: { ro: "Stop", en: "Stop", pt: "Parar", es: "Parar", it: "Ferma", cs: "Zastavit", pl: "Stop", ru: "Стоп", zh: "停止" }
    };

    let breathInterval = null;
    let breathTimeout = null;
    let isBreathing = false;
    let selectedBreathingType = 'alpha';

    function updateBreathPanelLanguage() {
        const config = breathworkConfig[selectedBreathingType];
        breathTechTitle.innerText = config.title[currentLang];
        breathTechDesc.innerText = config.desc[currentLang];
        breathTechPsych.innerHTML = config.psych[currentLang];
        
        if (!isBreathing) {
            breathInstruction.innerText = breathWords.start[currentLang];
            btnStartBreath.innerText = breathWords.btnStart[currentLang];
        } else {
            btnStartBreath.innerText = breathWords.btnStop[currentLang];
        }

        // Translate tab labels
        document.getElementById('breath-tab-alpha').innerText = (currentLang === 'ro' ? 'Alpha' : 'Alpha') + ' 4-4-4-4';
        document.getElementById('breath-tab-vagus').innerText = (currentLang === 'ro' ? 'Vagus' : 'Vagus') + ' 4-7-8';
        document.getElementById('breath-tab-coherence').innerText = (currentLang === 'ro' ? 'Coerență' : 'Coherence') + ' 5-5';
    }

    // Update panel language when language switcher is toggled
    langSelect.addEventListener('change', () => {
        setTimeout(updateBreathPanelLanguage, 50);
    });

    // Handle breathing tabs click
    breathTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            if (isBreathing) {
                stopBreathing();
            }
            breathTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            selectedBreathingType = tab.getAttribute('data-type');
            updateBreathPanelLanguage();
        });
    });

    function startBreathing() {
        isBreathing = true;
        btnStartBreath.innerText = breathWords.btnStop[currentLang];
        btnStartBreath.style.background = 'var(--gradient-beta)';
        
        // Disable tabs while breathing to prevent breaking cycles
        breathTabs.forEach(t => t.style.pointerEvents = 'none');

        const config = breathworkConfig[selectedBreathingType];
        let currentCycleIndex = 0;

        function runCycleStep() {
            if (!isBreathing) return;

            const step = config.cycles[currentCycleIndex];
            const action = step.action;
            let timeRemaining = step.time;

            breathInstruction.innerText = breathWords[action][currentLang];
            breathTimer.innerText = timeRemaining + 's';
            breathCircle.style.transform = `scale(${step.scale})`;

            if (breathInterval) clearInterval(breathInterval);
            breathInterval = setInterval(() => {
                timeRemaining--;
                breathTimer.innerText = timeRemaining + 's';

                if (timeRemaining <= 0) {
                    clearInterval(breathInterval);
                    // Move to next step in the cycle
                    currentCycleIndex = (currentCycleIndex + 1) % config.cycles.length;
                    runCycleStep();
                }
            }, 1000);
        }

        runCycleStep();
    }

    function stopBreathing() {
        isBreathing = false;
        if (breathInterval) clearInterval(breathInterval);
        if (breathTimeout) clearTimeout(breathTimeout);

        btnStartBreath.innerText = breathWords.btnStart[currentLang];
        btnStartBreath.style.background = '';
        breathInstruction.innerText = breathWords.start[currentLang];
        breathTimer.innerText = '';
        breathCircle.style.transform = 'scale(1.0)';

        // Re-enable tabs
        breathTabs.forEach(t => t.style.pointerEvents = 'auto');
    }

    btnStartBreath.addEventListener('click', () => {
        if (!isBreathing) {
            startBreathing();
        } else {
            stopBreathing();
        }
    });

    // Run initial setup for breathing text
    updateBreathPanelLanguage();
});
