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

const questions = [
{
q: "La révolution doit-elle être mondiale ?",
a: [
{text:"Oui, permanente", e:{trotskyism:2}},
{text:"Elle peut commencer dans un seul pays", e:{stalinism:2,leninism:1}},
{text:"Chaque pays suit son propre chemin", e:{titoism:2}}
]
},
{
q:"Le parti doit-il diriger la révolution ?",
a:[
{text:"Oui, un parti d'avant-garde est nécessaire", e:{leninism:2,stalinism:1}},
{text:"Oui mais contrôlé démocratiquement", e:{marxism:2}},
{text:"Non, auto-organisation populaire", e:{anarchocommunism:3}}
]
},
{
q:"Les paysans sont-ils une force révolutionnaire majeure ?",
a:[
{text:"Oui, centrale", e:{maoism:3}},
{text:"Secondaire", e:{marxism:2,leninism:1}},
{text:"Variable selon le contexte", e:{castrism:2}}
]
},
{
q:"Le pouvoir doit être exercé par :",
a:[
{text:"Un État révolutionnaire fort", e:{stalinism:3}},
{text:"Des conseils ouvriers", e:{anarchocommunism:3}},
{text:"Un parti + institutions ouvrières", e:{leninism:2}}
]
},
{
q:"La guérilla peut-elle être un moteur révolutionnaire ?",
a:[
{text:"Oui, essentielle", e:{guevarism:3,castrism:2}},
{text:"Parfois", e:{maoism:2}},
{text:"Non, priorité aux travailleurs industriels", e:{marxism:2}}
]
},
{
q:"La planification économique doit être :",
a:[
{text:"Très centralisée", e:{stalinism:3}},
{text:"Planifiée mais flexible", e:{titoism:3}},
{text:"Gérée localement par les travailleurs", e:{anarchocommunism:3}}
]
},
{
q:"La démocratie interne du parti doit être :",
a:[
{text:"Strictement encadrée", e:{stalinism:2}},
{text:"Centralisme démocratique", e:{leninism:3}},
{text:"Très ouverte", e:{trotskyism:2,marxism:1}}
]
},
{
q:"La révolution peut-elle venir du tiers-monde ?",
a:[
{text:"Oui, prioritairement", e:{maoism:2,guevarism:2,castrism:2}},
{text:"Elle commence dans les pays industrialisés", e:{marxism:2}},
{text:"Partout simultanément", e:{trotskyism:2}}
]
},
{
q:"Les syndicats doivent :",
a:[
{text:"Soutenir le parti", e:{leninism:2}},
{text:"Être indépendants", e:{trotskyism:2}},
{text:"Être autogérés", e:{anarchocommunism:3}}
]
},
{
q:"Le socialisme peut-il coexister avec plusieurs modèles nationaux ?",
a:[
{text:"Oui", e:{titoism:3}},
{text:"Non, modèle unique", e:{stalinism:2}},
{text:"Oui selon conditions matérielles", e:{marxism:2}}
]
}
];

// duplication automatique pour atteindre ~35 questions
while (questions.length < 35) {
    questions.push(JSON.parse(JSON.stringify(
        questions[questions.length % 10]
    )));
}

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
    });

    document.getElementById("progress").innerText =
        `Question ${currentQuestion+1} / ${questions.length}`;
}

function selectAnswer(effect){
    for (let key in effect){
        ideologies[key]+=effect[key];
    }

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    } else {
        showResult();
    }
}

function showResult(){
    document.getElementById("quizScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");

    let result = Object.keys(ideologies)
        .reduce((a,b)=> ideologies[a]>ideologies[b]?a:b);

    const names = {
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

    document.getElementById("resultTitle").innerText = names[result];
    document.getElementById("resultDescription").innerText =
        "Ce résultat représente le courant idéologique dont tes réponses sont les plus proches.";
}

function restart(){
    location.reload();
}
