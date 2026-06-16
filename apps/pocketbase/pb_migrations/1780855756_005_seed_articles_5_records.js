/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("articles");

  const record0 = new Record(collection);
    record0.set("title", "D\u00e9fil\u00e9 Haute Couture Printemps 2026");
    record0.set("slug", "defile-haute-couture-printemps-2026");
    record0.set("excerpt", "Explorez les cr\u00e9ations les plus prestigieuses de la saison printemps 2026");
    record0.set("content", "Le d\u00e9fil\u00e9 haute couture printemps 2026 a pr\u00e9sent\u00e9 des cr\u00e9ations exceptionnelles m\u00e9langeant tradition et innovation. Les designers ont propos\u00e9 des silhouettes audacieuses avec des mati\u00e8res nobles et des finitions impeccables.");
    const record0_categoryLookup = app.findFirstRecordByFilter("categories", "slug='collections'");
    if (!record0_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='collections'\""); }
    record0.set("category", record0_categoryLookup.id);
    record0.set("published", true);
    record0.set("meta_description", "D\u00e9couvrez le d\u00e9fil\u00e9 haute couture printemps 2026");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("title", "Tendances Mode 2026: Minimalisme vs Maximalisme");
    record1.set("slug", "tendances-mode-2026-minimalisme-vs-maximalisme");
    record1.set("excerpt", "Analyse des deux tendances majeures qui dominent la mode en 2026");
    record1.set("content", "La mode 2026 se divise entre deux tendances oppos\u00e9es: le minimalisme \u00e9pur\u00e9 et le maximalisme exub\u00e9rant. Chaque approche offre une vision unique de l'expression personnelle \u00e0 travers la mode.");
    const record1_categoryLookup = app.findFirstRecordByFilter("categories", "slug='decryptages'");
    if (!record1_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='decryptages'\""); }
    record1.set("category", record1_categoryLookup.id);
    record1.set("published", true);
    record1.set("meta_description", "Analyse des tendances mode 2026");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("title", "Pourquoi la Mode Durable est l'Avenir");
    record2.set("slug", "pourquoi-la-mode-durable-est-l-avenir");
    record2.set("excerpt", "La mode durable n'est plus une tendance, c'est une n\u00e9cessit\u00e9");
    record2.set("content", "La mode durable repr\u00e9sente l'avenir de l'industrie. Les consommateurs exigent de plus en plus de transparence et de responsabilit\u00e9 environnementale. Les marques qui adoptent des pratiques durables se positionnent comme les leaders de demain.");
    const record2_categoryLookup = app.findFirstRecordByFilter("categories", "slug='opinions'");
    if (!record2_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='opinions'\""); }
    record2.set("category", record2_categoryLookup.id);
    record2.set("published", true);
    record2.set("meta_description", "La mode durable est l'avenir");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("title", "Analyse: Le Retour du Vintage");
    record3.set("slug", "analyse-le-retour-du-vintage");
    record3.set("excerpt", "Comment le vintage revient en force dans la mode contemporaine");
    record3.set("content", "Le vintage n'est plus seulement une affaire de nostalgie. C'est devenu un mouvement de mode \u00e0 part enti\u00e8re, avec des pi\u00e8ces authentiques et des r\u00e9interpr\u00e9tations modernes qui s\u00e9duisent les fashionistas du monde entier.");
    const record3_categoryLookup = app.findFirstRecordByFilter("categories", "slug='decryptages'");
    if (!record3_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='decryptages'\""); }
    record3.set("category", record3_categoryLookup.id);
    record3.set("published", true);
    record3.set("meta_description", "Le retour du vintage en mode");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("title", "Critique Collection Printemps");
    record4.set("slug", "critique-collection-printemps");
    record4.set("excerpt", "Notre critique exclusive de la collection printemps 2026");
    record4.set("content", "La collection printemps 2026 marque un tournant dans l'industrie de la mode. Avec des designs innovants et une attention particuli\u00e8re aux d\u00e9tails, cette collection promet de redessiner les standards de l'excellence en mati\u00e8re de mode.");
    const record4_categoryLookup = app.findFirstRecordByFilter("categories", "slug='collections'");
    if (!record4_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='collections'\""); }
    record4.set("category", record4_categoryLookup.id);
    record4.set("published", true);
    record4.set("meta_description", "Critique de la collection printemps");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})