/* =========================
   SCORES DES IDEOLOGIES
========================= */

const ideologies = {
  marxism:0,
  marxismLeninism:0,
  stalinism:0,
  maoism:0,
  trotskyism:0,
  castrism:0,
  titoism:0,
  guevarism:0,
  anarchocommunism:0
};

/* =========================
   IMAGES RESULTAT
========================= */

const ideologyImages = {
  marxism:"images/marx.jpg",
  marxismLeninism:"images/lenin.jpg",
  stalinism:"images/stalin.jpg",
  maoism:"images/mao.jpg",
  trotskyism:"images/trotsky.jpg",
  castrism:"images/castro.jpg",
  titoism:"images/tito.jpg",
  guevarism:"images/guevara.jpg",
  anarchocommunism:"images/anarcho.jpg"
};

/* =========================
   QUESTIONS (~40)
========================= */

const questions = [

{q:"Le capitalisme peut-il évoluer pacifiquement vers le socialisme ?",
a:[
{text:"Non, seule une révolution peut renverser le système.",e:{marxism:2,marxismLeninism:2}},
{text:"Oui, des réformes profondes peuvent suffire.",e:{marxism:1}},
{text:"Le système doit être aboli immédiatement par l'action directe.",e:{anarchocommunism:3}}
]},

{q:"Un parti révolutionnaire centralisé est-il nécessaire ?",
a:[
{text:"Oui, il doit diriger la révolution.",e:{marxismLeninism:3,stalinism:2}},
{text:"Oui, mais sous contrôle démocratique constant.",e:{trotskyism:3}},
{text:"Non, les travailleurs doivent s’auto-organiser.",e:{anarchocommunism:3}}
]},

{q:"La révolution doit-elle être internationale ?",
a:[
{text:"Oui, elle doit être mondiale.",e:{trotskyism:3,marxism:2}},
{text:"Elle peut réussir dans un seul pays.",e:{stalinism:3}},
{text:"Chaque pays suit sa propre voie socialiste.",e:{titoism:3}}
]},

{q:"Quel rôle pour l’État après la révolution ?",
a:[
{text:"Un État fort pour défendre le socialisme.",e:{stalinism:3,marxismLeninism:2}},
{text:"Un État temporaire destiné à disparaître.",e:{marxism:3}},
{text:"Aucun État, seulement des communes libres.",e:{anarchocommunism:3}}
]},

{q:"Les paysans sont-ils une force révolutionnaire majeure ?",
a:[
{text:"Oui, surtout dans les pays ruraux.",e:{maoism:4}},
{text:"Secondaires face aux ouvriers.",e:{marxism:3}},
{text:"Importants mais aux côtés des ouvriers.",e:{castrism:2,guevarism:2}}
]},

{q:"La guérilla rurale peut-elle déclencher une révolution ?",
a:[
{text:"Oui, elle peut créer une dynamique révolutionnaire.",e:{guevarism:4,castrism:3}},
{text:"Parfois, selon les conditions.",e:{maoism:3}},
{text:"Non, priorité à l’organisation ouvrière.",e:{marxism:2}}
]},

{q:"Le socialisme doit-il être adapté au contexte national ?",
a:[
{text:"Oui, chaque pays développe son modèle.",e:{titoism:4}},
{text:"Oui mais basé sur le marxisme classique.",e:{marxism:2}},
{text:"Non, un modèle unique est préférable.",e:{stalinism:2}}
]},

{q:"La bureaucratie est-elle un danger majeur ?",
a:[
{text:"Oui, elle peut trahir la révolution.",e:{trotskyism:4}},
{text:"Elle est nécessaire pour organiser l’État.",e:{stalinism:3}},
{text:"Elle doit être totalement supprimée.",e:{anarchocommunism:3}}
]},

{q:"Les syndicats doivent-ils être indépendants du parti ?",
a:[
{text:"Oui, pour préserver la démocratie ouvrière.",e:{trotskyism:3,anarchocommunism:2}},
{text:"Non, ils doivent suivre la ligne révolutionnaire.",e:{marxismLeninism:3}},
{text:"Ils doivent gérer directement l’économie.",e:{titoism:3}}
]},

{q:"L’économie doit-elle être entièrement planifiée ?",
a:[
{text:"Oui, planification centrale complète.",e:{stalinism:4}},
{text:"Planification avec participation ouvrière.",e:{titoism:3}},
{text:"Organisation libre par les communes.",e:{anarchocommunism:4}}
]},

{q:"La révolution peut-elle commencer dans un pays du tiers monde ?",
a:[
{text:"Oui, via lutte armée et mobilisation rurale.",e:{maoism:3,guevarism:3}},
{text:"Oui mais avec soutien international.",e:{trotskyism:2}},
{text:"Priorité aux pays industrialisés.",e:{marxism:2}}
]},

{q:"Le leadership révolutionnaire doit-il être fort ?",
a:[
{text:"Oui, indispensable pour maintenir l’unité.",e:{stalinism:3,marxismLeninism:2}},
{text:"Oui mais contrôlé démocratiquement.",e:{trotskyism:3}},
{text:"Non, leadership collectif horizontal.",e:{anarchocommunism:3}}
]},

{q:"La démocratie interne du parti est-elle essentielle ?",
a:[
{text:"Oui, débat constant nécessaire.",e:{trotskyism:4}},
{text:"Limitée pour préserver l’efficacité.",e:{stalinism:3}},
{text:"Le parti ne doit pas dominer.",e:{anarchocommunism:3}}
]},

{q:"Le nationalisme peut-il coexister avec le socialisme ?",
a:[
{text:"Oui, indépendance nationale d’abord.",e:{titoism:3,castrism:2}},
{text:"Non, priorité à l’internationalisme.",e:{trotskyism:3,marxism:2}},
{text:"Seulement contre l’impérialisme.",e:{maoism:2}}
]},

{q:"La lutte anti-impérialiste est-elle centrale ?",
a:[
{text:"Oui, priorité absolue.",e:{maoism:3,castrism:3,guevarism:3}},
{text:"Importante mais liée à la lutte de classe.",e:{marxism:2}},
{text:"Secondaire face à la révolution mondiale.",e:{trotskyism:2}}
]},

{q:"Les coopératives ouvrières doivent-elles gérer l’économie ?",
a:[
{text:"Oui, autogestion généralisée.",e:{titoism:4}},
{text:"Oui mais sous planification.",e:{marxismLeninism:2}},
{text:"Oui sans État.",e:{anarchocommunism:4}}
]},

{q:"La révolution doit-elle être permanente ?",
a:[
{text:"Oui, elle doit s’étendre continuellement.",e:{trotskyism:4}},
{text:"Non, stabilisation après victoire.",e:{stalinism:3}},
{text:"Elle évolue selon les conditions.",e:{marxism:2}}
]},

{q:"La violence révolutionnaire est-elle inévitable ?",
a:[
{text:"Oui, face à la résistance bourgeoise.",e:{marxismLeninism:2,stalinism:2}},
{text:"Souvent, mais pas toujours.",e:{marxism:2}},
{text:"L’action directe populaire suffit.",e:{anarchocommunism:2}}
]},

{q:"Les intellectuels ont-ils un rôle clé ?",
a:[
{text:"Oui, pour guider la conscience politique.",e:{marxism:2}},
{text:"Oui mais soumis aux masses.",e:{maoism:3}},
{text:"Non, priorité à l’auto-organisation.",e:{anarchocommunism:2}}
]},

{q:"Le socialisme doit-il être exporté activement ?",
a:[
{text:"Oui, soutenir les révolutions.",e:{trotskyism:3,guevarism:2}},
{text:"Seulement défendre son pays.",e:{stalinism:2}},
{text:"Chaque peuple décide seul.",e:{titoism:2}}
]},

/* --- QUESTIONS COMPLEMENTAIRES POUR EQUILIBRAGE --- */

{q:"Les conseils ouvriers doivent-ils diriger directement ?",
a:[
{text:"Oui, pouvoir direct des travailleurs.",e:{anarchocommunism:4}},
{text:"Oui mais encadrés par le parti.",e:{marxismLeninism:2}},
{text:"Ils complètent l’État socialiste.",e:{marxism:2}}
]},

{q:"Une révolution lente est-elle acceptable ?",
a:[
{text:"Oui, construction progressive.",e:{marxism:2}},
{text:"Non, rupture rapide nécessaire.",e:{leninism:2,stalinism:2}},
{text:"Processus continu d’expérimentation.",e:{titoism:2}}
]},

{q:"La discipline révolutionnaire doit-elle être stricte ?",
a:[
{text:"Oui, absolument.",e:{stalinism:3}},
{text:"Oui mais démocratique.",e:{trotskyism:2}},
{text:"Non, organisation libre.",e:{anarchocommunism:3}}
]},

{q:"Le culte du chef est-il acceptable ?",
a:[
{text:"Oui s’il renforce l’unité.",e:{stalinism:2}},
{text:"Non, dangereux pour le socialisme.",e:{trotskyism:3,anarchocommunism:2}},
{text:"Leadership respecté mais critique possible.",e:{marxismLeninism:2}}
]},

{q:"La révolution doit-elle transformer la culture ?",
a:[
{text:"Oui, révolution culturelle profonde.",e:{maoism:4}},
{text:"Oui mais progressivement.",e:{marxism:2}},
{text:"Elle doit émerger librement.",e:{anarchocommunism:2}}
]},

{q:"Les armées populaires sont-elles nécessaires ?",
a:[
{text:"Oui, défense révolutionnaire.",e:{maoism:3,castrism:2}},
{text:"Oui sous contrôle étatique.",e:{stalinism:2}},
{text:"Non, milices populaires locales.",e:{anarchocommunism:2}}
]},

{q:"La révolution cubaine est-elle un modèle ?",
a:[
{text:"Oui, exemple moderne.",e:{castrism:4,guevarism:3}},
{text:"Partiellement.",e:{maoism:2}},
{text:"Non, contexte spécifique.",e:{marxism:1}}
]},

{q:"L’autogestion économique est-elle idéale ?",
a:[
{text:"Oui, cœur du socialisme.",e:{titoism:4}},
{text:"Utile mais limitée.",e:{marxism:2}},
{text:"Oui sans structure étatique.",e:{anarchocommunism:3}}
]},

{q:"Le parti doit-il contrôler l’armée ?",
a:[
{text:"Oui, pour protéger la révolution.",e:{marxismLeninism:3,stalinism:2}},
{text:"Contrôle collectif préférable.",e:{trotskyism:2}},
{text:"Pas d’armée permanente.",e:{anarchocommunism:2}}
]},

{q:"La révolution peut-elle venir d’un petit groupe engagé ?",
a:[
{text:"Oui, avant-garde révolutionnaire.",e:{guevarism:4}},
{text:"Non, masses organisées nécessaires.",e:{marxism:3}},
{text:"Les deux peuvent jouer un rôle.",e:{maoism:2}}
]}

];

/* =========================
   SYSTEME QUIZ
========================= */

let currentQuestion = 0;

function startQuiz(){
  document.getElementById("startScreen").style.display="none";
  document.getElementById("quizScreen").style.display="block";
  showQuestion();
}

function showQuestion(){
  const q = questions[currentQuestion];
  document.getElementById("question").innerText=q.q;

  const answersDiv=document.getElementById("answers");
  answersDiv.innerHTML="";

  q.a.forEach(ans=>{
    const btn=document.createElement("button");
    btn.className="answer-btn";
    btn.innerText=ans.text;
    btn.onclick=()=>selectAnswer(ans.e);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(effects){
  for(const key in effects){
    ideologies[key]+=effects[key];
  }

  currentQuestion++;

  if(currentQuestion<questions.length){
    showQuestion();
  }else{
    showResults();
  }
}

/* =========================
   RESULTATS + CLASSEMENT
========================= */

function showResults(){

  document.getElementById("quizScreen").style.display="none";
  document.getElementById("resultScreen").style.display="block";

  const total=Object.values(ideologies).reduce((a,b)=>a+b,0);

  const ranking=Object.entries(ideologies)
    .map(([k,v])=>[k, total?Math.round(v/total*100):0])
    .sort((a,b)=>b[1]-a[1]);

  const topIdeology=ranking[0][0];

  document.getElementById("resultImage").src=ideologyImages[topIdeology];

  const rankingDiv=document.getElementById("ranking");
  rankingDiv.innerHTML="";

  ranking.forEach(([name,percent])=>{
    const bar=document.createElement("div");
    bar.className="result-bar";

    bar.innerHTML=`
      <div class="result-label">${formatName(name)} — ${percent}%</div>
      <div class="bar-container">
        <div class="bar-fill" style="width:${percent}%"></div>
      </div>
    `;

    rankingDiv.appendChild(bar);
  });
}

function formatName(id){
  return {
    marxism:"Marxisme",
    marxismLeninism:"Marxisme-Léninisme",
    stalinism:"Stalinisme",
    maoism:"Maoïsme",
    trotskyism:"Trotskisme",
    castrism:"Castrisme",
    titoism:"Titisme",
    guevarism:"Guevarisme",
    anarchocommunism:"Anarcho-communisme"
  }[id];
}
