// =======================
// SCORES IDEOLOGIQUES
// =======================

var audio = new Audio('clickaudio.mp3');

const ideologies = {
    marxism: 0,
    leninism: 0,
    stalinism: 0,
    maoism: 0,
    trotskyism: 0,
    castrism: 0,
    titoism: 0,
    guevarism: 0,
    anarchocommunism: 0
};

let currentQuestion = 0;

// =======================
// SCORE MAXIMUM PAR IDEOLOGIE
// =======================

const maxScores = {
    marxism: 0,
    leninism: 0,
    stalinism: 0,
    maoism: 0,
    trotskyism: 0,
    castrism: 0,
    titoism: 0,
    guevarism: 0,
    anarchocommunism: 0
};

// =======================
// NOMS DES IDEOLOGIES
// =======================

const ideologyNames = {
    marxism:"Marxisme",
    leninism:"Marxisme-Léninisme",
    stalinism:"Stalinisme",
    maoism:"Maoïsme",
    trotskyism:"Trotskisme",
    castrism:"Castrisme",
    titoism:"Titisme",
    guevarism:"Guevarisme",
    anarchocommunism:"Anarcho-communisme"
};

// =======================
// QUESTIONS (35 UNIQUES)
// =======================

const questions = [
{
q:"La révolution doit-elle être mondiale ?",
a:[
{text:"Oui, elle doit s’étendre à tous les pays pour assurer le succès durable.", e:{trotskyism:2}},
{text:"Elle peut débuter dans un seul pays et servir de modèle aux autres.", e:{stalinism:2,leninism:1}},
{text:"Chaque pays suit sa propre voie selon sa situation.", e:{titoism:2}}
]
},
{
q:"Quel rôle doit jouer le parti révolutionnaire ?",
a:[
{text:"Il doit centraliser toutes les décisions pour garantir l’unité et l’efficacité.", e:{stalinism:2,leninism:2}},
{text:"Il organise la révolution tout en laissant aux travailleurs une marge de décision.", e:{marxism:2,trotskyism:1}},
{text:"Il n’est pas nécessaire, les travailleurs peuvent s’auto-organiser collectivement.", e:{anarchocommunism:3}}
]
},
{
q:"Qui doit diriger la révolution ?",
a:[
{text:"Le parti d’avant-garde, pour structurer l’action et orienter la société.", e:{leninism:3}},
{text:"Les travailleurs eux-mêmes, par assemblées et décisions directes.", e:{anarchocommunism:3}},
{text:"Une coalition large et inclusive, représentant plusieurs groupes.", e:{marxism:2}}
]
},
{
q:"Le rôle des paysans dans la révolution :",
a:[
{text:"Ils sont centraux, surtout dans les zones rurales sous oppression.", e:{maoism:3}},
{text:"Importants mais subordonnés aux ouvriers urbains et au parti.", e:{castrism:2,guevarism:1}},
{text:"Leur rôle est limité, la révolution se concentre sur l’industrie.", e:{marxism:2}}
]
},
{
q:"La guérilla armée est :",
a:[
{text:"Un outil central pour renverser un pouvoir oppressif.", e:{guevarism:3,castrism:2}},
{text:"Une stratégie parmi d’autres, selon les conditions locales.", e:{maoism:2}},
{text:"Peu efficace, elle détourne les forces de l’organisation sociale.", e:{marxism:2}}
]
},
{
q:"L’économie socialiste doit être :",
a:[
{text:"Fortement planifiée par l’État pour garantir stabilité et production.", e:{stalinism:3}},
{text:"Autogérée localement pour responsabiliser les travailleurs.", e:{anarchocommunism:3,titoism:2}},
{text:"Planifiée mais flexible, selon les besoins et contraintes.", e:{marxism:2}}
]
},
{
q:"Les syndicats doivent :",
a:[
{text:"Suivre les directives du parti pour la cohérence politique.", e:{leninism:2}},
{text:"Être indépendants tout en coopérant avec la révolution.", e:{trotskyism:2}},
{text:"S’organiser eux-mêmes, sans dépendre du parti.", e:{anarchocommunism:3}}
]
},
{
q:"La révolution dans les pays industrialisés :",
a:[
{text:"Prioritaire, car la classe ouvrière y est plus forte.", e:{marxism:3}},
{text:"Peut être secondaire selon les conditions locales.", e:{maoism:2,guevarism:1}},
{text:"Doit suivre le modèle national adapté au contexte.", e:{castrism:2}}
]
},
{
q:"Le socialisme peut exister dans un seul pays :",
a:[
{text:"Oui, si le pays est capable de consolider ses acquis.", e:{stalinism:3}},
{text:"Non, le socialisme doit être international.", e:{trotskyism:3}},
{text:"Cela dépend du contexte historique et économique.", e:{marxism:2}}
]
},
{
q:"Le rôle de l’État après la révolution :",
a:[
{text:"Un État fort est nécessaire pour stabiliser la société.", e:{stalinism:3}},
{text:"L’État est temporaire, pour organiser la transition.", e:{leninism:2,marxism:1}},
{text:"L’État doit disparaître rapidement pour laisser place à l’autogestion.", e:{anarchocommunism:3}}
]
},
{
q:"La démocratie ouvrière doit être :",
a:[
{text:"Directe, avec assemblées et décisions collectives.", e:{anarchocommunism:3}},
{text:"Encadrée par le parti pour maintenir la cohérence.", e:{leninism:2}},
{text:"Pluraliste et représentative, mais guidée par le socialisme.", e:{trotskyism:2}}
]
},
{
q:"La révolution doit être exportée :",
a:[
{text:"Oui, activement pour soutenir d’autres peuples opprimés.", e:{trotskyism:2,guevarism:2}},
{text:"Seulement si la situation l’exige.", e:{leninism:2}},
{text:"Non, chaque pays doit agir selon ses propres conditions.", e:{stalinism:2}}
]
},
{
q:"L’autogestion économique :",
a:[
{text:"Essentielle pour l’émancipation des travailleurs.", e:{titoism:3,anarchocommunism:2}},
{text:"Secondaire, utile mais pas prioritaire.", e:{leninism:2}},
{text:"Peut être dangereuse si mal organisée.", e:{stalinism:2}}
]
},
{
q:"La discipline du parti doit être :",
a:[
{text:"Très stricte pour garantir l’efficacité de la révolution.", e:{stalinism:3}},
{text:"Basée sur le centralisme démocratique et la discussion.", e:{leninism:3}},
{text:"Souple pour permettre les débats internes.", e:{trotskyism:2}}
]
},
{
q:"Les mouvements intellectuels sont :",
a:[
{text:"Importants pour théoriser et guider la révolution.", e:{marxism:2,trotskyism:1}},
{text:"Secondaires, ils soutiennent mais ne dirigent pas.", e:{stalinism:2}},
{text:"Peu pertinents dans l’action concrète.", e:{maoism:1}}
]
},
{
q:"La lutte armée rurale :",
a:[
{text:"Stratégie principale pour mobiliser les paysans.", e:{maoism:3}},
{text:"Peut être utile selon le contexte.", e:{castrism:2}},
{text:"Rarement efficace comparée à l’organisation urbaine.", e:{marxism:2}}
]
},
{
q:"Le nationalisme révolutionnaire peut être :",
a:[
{text:"Compatible avec la lutte socialiste si dirigé contre l’oppression.", e:{castrism:2,titoism:2}},
{text:"Secondaire, à prendre en compte selon le contexte.", e:{leninism:2}},
{text:"Incompatible avec l’internationalisme.", e:{trotskyism:2}}
]
},
{
q:"La révolution doit être :",
a:[
{text:"Rapide, pour surprendre l’adversaire et éviter la répression.", e:{guevarism:2}},
{text:"Organisée progressivement, avec préparation et structures.", e:{leninism:2}},
{text:"Spontanée, basée sur l’élan populaire.", e:{anarchocommunism:2}}
]
},
{
q:"Le multipartisme socialiste :",
a:[
{text:"Acceptable pour représenter différentes tendances.", e:{trotskyism:2}},
{text:"Dangereux, il divise la révolution.", e:{stalinism:2}},
{text:"Inutile, les décisions doivent être collectives.", e:{anarchocommunism:2}}
]
},
{
q:"Les conseils ouvriers doivent :",
a:[
{text:"Gouverner directement la société.", e:{anarchocommunism:3}},
{text:"Compléter et soutenir le parti.", e:{leninism:2}},
{text:"Être secondaires, pour ne pas nuire à l’organisation.", e:{stalinism:2}}
]
},
{
q:"La révolution en Amérique latine :",
a:[
{text:"Doit passer par la guérilla populaire et la mobilisation rurale.", e:{guevarism:3}},
{text:"S’adapter aux conditions nationales et locales.", e:{castrism:2}},
{text:"S’inspirer d’un modèle universel si possible.", e:{marxism:2}}
]
},
{
q:"L’économie locale autonome :",
a:[
{text:"Très importante pour la stabilité et l’auto-gestion.", e:{titoism:3}},
{text:"Peu souhaitable, peut fragmenter le socialisme.", e:{stalinism:2}},
{text:"Possible, mais subordonnée à la planification générale.", e:{marxism:1}}
]
},
{
q:"La spontanéité révolutionnaire :",
a:[
{text:"Essentielle pour refléter la volonté populaire.", e:{anarchocommunism:3}},
{text:"Doit être guidée par le parti.", e:{leninism:2}},
{text:"Secondaire, la planification prime.", e:{stalinism:2}}
]
},
{
q:"La révolution culturelle permanente :",
a:[
{text:"Nécessaire pour transformer la société et l’idéologie.", e:{maoism:3}},
{text:"Risque d’instabilité si excessive.", e:{stalinism:1}},
{text:"Peu utile, mieux vaut se concentrer sur l’économie.", e:{marxism:1}}
]
},
{
q:"L’internationalisme :",
a:[
{text:"Priorité absolue pour unir les peuples et soutenir la révolution.", e:{trotskyism:3}},
{text:"Important mais secondaire aux conditions nationales.", e:{marxism:2}},
{text:"Secondaire par rapport à la consolidation interne.", e:{stalinism:2}}
]
},
{
q:"Le rôle du leader révolutionnaire :",
a:[
{text:"Central pour coordonner et inspirer l’action.", e:{stalinism:2,maoism:2}},
{text:"Important mais limité, pour éviter la domination.", e:{leninism:2}},
{text:"Doit être évité, privilégier la décision collective.", e:{anarchocommunism:2}}
]
},
{
q:"Les réformes avant révolution :",
a:[
{text:"Utiles pour préparer le terrain et mobiliser les masses.", e:{marxism:2}},
{text:"Tactiques uniquement, pour affaiblir le pouvoir en place.", e:{leninism:2}},
{text:"Inutiles, la révolution doit être directe.", e:{guevarism:2}}
]
},
{
q:"La révolution urbaine :",
a:[
{text:"Essentielle, car la classe ouvrière est concentrée dans les villes.", e:{marxism:2}},
{text:"Complémentaire à la révolution rurale.", e:{maoism:2}},
{text:"Secondaire, la priorité est la guérilla rurale.", e:{guevarism:1}}
]
},
{
q:"La propriété collective doit être :",
a:[
{text:"Gérée par l’État central pour organiser la production.", e:{stalinism:2}},
{text:"Autogérée localement par les travailleurs.", e:{titoism:3}},
{text:"Directement communale et horizontale.", e:{anarchocommunism:3}}
]
},
{
q:"Les alliances socialistes internationales :",
a:[
{text:"Indispensables pour soutenir les mouvements révolutionnaires.", e:{trotskyism:2}},
{text:"Utile mais tactique, selon le contexte.", e:{leninism:2}},
{text:"Secondaires, priorité à la consolidation interne.", e:{stalinism:1}}
]
},
{
q:"Une minorité organisée peut lancer la révolution :",
a:[
{text:"Oui, une minorité consciente peut initier l’action avec soutien populaire.", e:{leninism:2,guevarism:2}},
{text:"Non, seule la masse populaire peut réussir.", e:{marxism:2}},
{text:"Seulement si les travailleurs s’auto-organisent.", e:{anarchocommunism:2}}
]
},
{
q:"Le modèle soviétique historique :",
a:[
{text:"Globalement positif pour le socialisme industriel.", e:{stalinism:2}},
{text:"Partiellement efficace, nécessite des adaptations.", e:{leninism:2}},
{text:"Critiquable, surtout sur les plans politiques et humains.", e:{trotskyism:2}}
]
},
{
q:"La révolution doit transformer la culture :",
a:[
{text:"Oui, pour que les idées socialistes imprègnent la société.", e:{maoism:2}},
{text:"Secondaire, l’économie est plus importante.", e:{marxism:1}},
{text:"Non imposée, la culture doit rester libre.", e:{anarchocommunism:2}}
]
},
{
q:"La stratégie révolutionnaire idéale :",
a:[
{text:"Organisation du parti pour diriger et coordonner.", e:{leninism:2}},
{text:"Insurrection populaire spontanée et collective.", e:{anarchocommunism:2}},
{text:"Guérilla prolongée pour mobiliser les régions rurales.", e:{maoism:2,guevarism:1}}
]
}
];

// =======================
// CALCUL DES SCORES MAXIMUM
// =======================

function computeMaxScores() {
    questions.forEach(q => {
        q.a.forEach(ans => {
            for (let key in ans.e) {
                maxScores[key] += Math.abs(ans.e[key]);
            }
        });
    });
}

computeMaxScores();

// =======================
// LOGIQUE DU TEST
// =======================

function startTest(){
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("quizScreen").classList.remove("hidden");
    showQuestion();
}

function showQuestion(){
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.q;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.a.forEach(ans=>{
        const btn = document.createElement("button");
        btn.className="answer";
        btn.innerText = ans.text;
        btn.onclick=()=>selectAnswer(ans.e);
        answersDiv.appendChild(btn);
        audio.play();
    });

    document.getElementById("progress").innerText =
        `Question ${currentQuestion+1} / ${questions.length}`;
}

function selectAnswer(effect){
    for (let key in effect){
        ideologies[key] += effect[key];
    }
    currentQuestion++;
    if(currentQuestion < questions.length){
        showQuestion();
    } else {
        showResult();
    }
}

// =======================
// AFFICHAGE DES RESULTATS
// =======================

function showResult(){

    document.getElementById("quizScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");

    const results = [];

    for (let ideology in ideologies){
        if(maxScores[ideology] === 0) continue;

        const normalizedScore = ideologies[ideology] / maxScores[ideology];
        results.push({
            name: ideology,
            percent: Math.round(normalizedScore*100)
        });
    }

    // Trier par pourcentage décroissant
    results.sort((a,b)=> b.percent - a.percent);

    // Gagnant principal
    if(results.length>0){
        document.getElementById("resultTitle").innerText =
            `Résultat principal : ${ideologyNames[results[0].name]}`;
    }

    document.getElementById("resultDescription").innerText =
        "Classement complet des idéologies selon vos réponses :";

    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";

    results.forEach(r => {
        const li = document.createElement("li");
        li.innerText = `${ideologyNames[r.name]} : ${r.percent}%`;
        li.style.setProperty('--percent', r.percent + '%');
        li.style.width = '100%'; // largeur totale du li
        li.style.position = 'relative';
        li.style.overflow = 'hidden';
        li.style.background = `linear-gradient(to right, #ff3333 ${r.percent}%, #ecf0f1 ${r.percent}%)`;
        resultList.appendChild(li);
    });
}

function restart(){
    location.reload();
}
