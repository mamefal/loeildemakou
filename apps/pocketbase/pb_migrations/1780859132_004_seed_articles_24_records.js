/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("articles");

  const record0 = new Record(collection);
    record0.set("title", "Pourquoi le maximalisme revient?");
    record0.set("slug", "pourquoi-maximalisme-revient");
    record0.set("excerpt", "Analyse du retour du maximalisme en mode");
    record0.set("content", "Contenu d\u00e9taill\u00e9 sur le maximalisme...");
    const record0_categoryLookup = app.findFirstRecordByFilter("categories", "slug='decryptages'");
    if (!record0_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='decryptages'\""); }
    record0.set("category", record0_categoryLookup.id);
    record0.set("published", true);
    record0.set("featured", false);
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
    record1.set("title", "Pourquoi le luxe investit dans le sport?");
    record1.set("slug", "luxe-investit-sport");
    record1.set("excerpt", "Comment le luxe conquiert le march\u00e9 sportif");
    record1.set("content", "Contenu d\u00e9taill\u00e9...");
    const record1_categoryLookup = app.findFirstRecordByFilter("categories", "slug='decryptages'");
    if (!record1_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='decryptages'\""); }
    record1.set("category", record1_categoryLookup.id);
    record1.set("published", true);
    record1.set("featured", false);
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
    record2.set("title", "Pourquoi les maisons multiplient les collaborations?");
    record2.set("slug", "collaborations-mode");
    record2.set("excerpt", "Tendance des collaborations en mode");
    record2.set("content", "Contenu d\u00e9taill\u00e9...");
    const record2_categoryLookup = app.findFirstRecordByFilter("categories", "slug='decryptages'");
    if (!record2_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='decryptages'\""); }
    record2.set("category", record2_categoryLookup.id);
    record2.set("published", true);
    record2.set("featured", false);
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
    record3.set("title", "D\u00e9cryptage: La fast-fashion face \u00e0 ses limites");
    record3.set("slug", "fast-fashion-limites");
    record3.set("excerpt", "Analyse critique de la fast-fashion");
    record3.set("content", "Contenu d\u00e9taill\u00e9...");
    const record3_categoryLookup = app.findFirstRecordByFilter("categories", "slug='decryptages'");
    if (!record3_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='decryptages'\""); }
    record3.set("category", record3_categoryLookup.id);
    record3.set("published", true);
    record3.set("featured", false);
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
    record4.set("title", "Chanel Haute Couture Printemps 2026: Entre h\u00e9ritage et modernit\u00e9");
    record4.set("slug", "chanel-ss26-analyse");
    record4.set("excerpt", "Analyse de la collection Chanel SS26");
    record4.set("content", "Contexte, inspirations, silhouettes cl\u00e9s, points forts, analyse...");
    const record4_categoryLookup = app.findFirstRecordByFilter("categories", "slug='collections'");
    if (!record4_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='collections'\""); }
    record4.set("category", record4_categoryLookup.id);
    record4.set("published", true);
    record4.set("featured", true);
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("title", "Dior Homme: La qu\u00eate de l'\u00e9l\u00e9gance minimaliste");
    record5.set("slug", "dior-homme-analyse");
    record5.set("excerpt", "D\u00e9cryptage de la vision Dior Homme");
    record5.set("content", "Contenu d\u00e9taill\u00e9...");
    const record5_categoryLookup = app.findFirstRecordByFilter("categories", "slug='collections'");
    if (!record5_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='collections'\""); }
    record5.set("category", record5_categoryLookup.id);
    record5.set("published", true);
    record5.set("featured", false);
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("title", "Virgil Abloh x Louis Vuitton: L'h\u00e9ritage d'une collaboration");
    record6.set("slug", "virgil-abloh-lv");
    record6.set("excerpt", "Analyse de l'impact Virgil Abloh chez LV");
    record6.set("content", "Contenu d\u00e9taill\u00e9...");
    const record6_categoryLookup = app.findFirstRecordByFilter("categories", "slug='collections'");
    if (!record6_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='collections'\""); }
    record6.set("category", record6_categoryLookup.id);
    record6.set("published", true);
    record6.set("featured", false);
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("title", "Balenciaga Haute Couture: Provocation et \u00e9l\u00e9gance");
    record7.set("slug", "balenciaga-hc");
    record7.set("excerpt", "Analyse de la derni\u00e8re collection Balenciaga");
    record7.set("content", "Contenu d\u00e9taill\u00e9...");
    const record7_categoryLookup = app.findFirstRecordByFilter("categories", "slug='collections'");
    if (!record7_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='collections'\""); }
    record7.set("category", record7_categoryLookup.id);
    record7.set("published", true);
    record7.set("featured", false);
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("title", "Rencontre avec Iris van Herpen: L'architecte de la mode");
    record8.set("slug", "iris-van-herpen-portrait");
    record8.set("excerpt", "Portrait de la cr\u00e9atrice r\u00e9volutionnaire");
    record8.set("content", "Interview et portrait d\u00e9taill\u00e9...");
    const record8_categoryLookup = app.findFirstRecordByFilter("categories", "slug='createurs'");
    if (!record8_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='createurs'\""); }
    record8.set("category", record8_categoryLookup.id);
    record8.set("published", true);
    record8.set("featured", false);
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("title", "Demna Gvasalia: Le provocateur de Balenciaga");
    record9.set("slug", "demna-gvasalia-interview");
    record9.set("excerpt", "Interview exclusive avec Demna");
    record9.set("content", "Contenu d\u00e9taill\u00e9...");
    const record9_categoryLookup = app.findFirstRecordByFilter("categories", "slug='createurs'");
    if (!record9_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='createurs'\""); }
    record9.set("category", record9_categoryLookup.id);
    record9.set("published", true);
    record9.set("featured", false);
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.set("title", "Palomo Spain: La fluidit\u00e9 de genre en mode");
    record10.set("slug", "palomo-spain-decouverte");
    record10.set("excerpt", "D\u00e9couverte du cr\u00e9ateur espagnol");
    record10.set("content", "Contenu d\u00e9taill\u00e9...");
    const record10_categoryLookup = app.findFirstRecordByFilter("categories", "slug='createurs'");
    if (!record10_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='createurs'\""); }
    record10.set("category", record10_categoryLookup.id);
    record10.set("published", true);
    record10.set("featured", false);
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("title", "Simone Rocha: L'intimit\u00e9 dans la haute couture");
    record11.set("slug", "simone-rocha-portrait");
    record11.set("excerpt", "Portrait de la cr\u00e9atrice irlandaise");
    record11.set("content", "Contenu d\u00e9taill\u00e9...");
    const record11_categoryLookup = app.findFirstRecordByFilter("categories", "slug='createurs'");
    if (!record11_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='createurs'\""); }
    record11.set("category", record11_categoryLookup.id);
    record11.set("published", true);
    record11.set("featured", false);
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("title", "Visite \u00e0 l'atelier Herm\u00e8s: Le savoir-faire fran\u00e7ais");
    record12.set("slug", "atelier-hermes-immersion");
    record12.set("excerpt", "Immersion dans les ateliers Herm\u00e8s");
    record12.set("content", "Reportage d\u00e9taill\u00e9 sur la fabrication...");
    const record12_categoryLookup = app.findFirstRecordByFilter("categories", "slug='industrie-innovation'");
    if (!record12_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='industrie-innovation'\""); }
    record12.set("category", record12_categoryLookup.id);
    record12.set("published", true);
    record12.set("featured", false);
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("title", "Innovation textile: Les fibres du futur");
    record13.set("slug", "innovation-fibres-futur");
    record13.set("excerpt", "D\u00e9couverte des nouvelles mati\u00e8res durables");
    record13.set("content", "Contenu d\u00e9taill\u00e9 sur l'innovation textile...");
    const record13_categoryLookup = app.findFirstRecordByFilter("categories", "slug='industrie-innovation'");
    if (!record13_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='industrie-innovation'\""); }
    record13.set("category", record13_categoryLookup.id);
    record13.set("published", true);
    record13.set("featured", false);
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.set("title", "Supply chain mode: Transparence et tra\u00e7abilit\u00e9");
    record14.set("slug", "supply-chain-transparence");
    record14.set("excerpt", "Comment tracer la fabrication d'un v\u00eatement");
    record14.set("content", "Contenu d\u00e9taill\u00e9...");
    const record14_categoryLookup = app.findFirstRecordByFilter("categories", "slug='industrie-innovation'");
    if (!record14_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='industrie-innovation'\""); }
    record14.set("category", record14_categoryLookup.id);
    record14.set("published", true);
    record14.set("featured", false);
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.set("title", "Les fa\u00e7onniers fran\u00e7ais: Les h\u00e9ros cach\u00e9s de la mode");
    record15.set("slug", "faconniers-francais");
    record15.set("excerpt", "Portrait des artisans de la mode");
    record15.set("content", "Contenu d\u00e9taill\u00e9...");
    const record15_categoryLookup = app.findFirstRecordByFilter("categories", "slug='industrie-innovation'");
    if (!record15_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='industrie-innovation'\""); }
    record15.set("category", record15_categoryLookup.id);
    record15.set("published", true);
    record15.set("featured", false);
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.set("title", "Paris Fashion Week SS26: Les tendances qui dominent");
    record16.set("slug", "pfw-ss26-recap");
    record16.set("excerpt", "Compte-rendu de la Fashion Week de Paris");
    record16.set("content", "Reportage d\u00e9taill\u00e9 sur les d\u00e9fil\u00e9s...");
    const record16_categoryLookup = app.findFirstRecordByFilter("categories", "slug='fashion-week'");
    if (!record16_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='fashion-week'\""); }
    record16.set("category", record16_categoryLookup.id);
    record16.set("published", true);
    record16.set("featured", false);
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.set("title", "Street Style PFW: Les plus beaux looks");
    record17.set("slug", "street-style-pfw");
    record17.set("excerpt", "Galerie des meilleurs looks street style");
    record17.set("content", "Contenu d\u00e9taill\u00e9...");
    const record17_categoryLookup = app.findFirstRecordByFilter("categories", "slug='fashion-week'");
    if (!record17_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='fashion-week'\""); }
    record17.set("category", record17_categoryLookup.id);
    record17.set("published", true);
    record17.set("featured", false);
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.set("title", "Milan Fashion Week: L'\u00e9l\u00e9gance italienne en avant");
    record18.set("slug", "mfw-recap");
    record18.set("excerpt", "Analyse de la Fashion Week de Milan");
    record18.set("content", "Contenu d\u00e9taill\u00e9...");
    const record18_categoryLookup = app.findFirstRecordByFilter("categories", "slug='fashion-week'");
    if (!record18_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='fashion-week'\""); }
    record18.set("category", record18_categoryLookup.id);
    record18.set("published", true);
    record18.set("featured", false);
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.set("title", "Backstage Fashion Week: Les coulisses des d\u00e9fil\u00e9s");
    record19.set("slug", "backstage-fashion-week");
    record19.set("excerpt", "Acc\u00e8s exclusif aux coulisses");
    record19.set("content", "Contenu d\u00e9taill\u00e9...");
    const record19_categoryLookup = app.findFirstRecordByFilter("categories", "slug='fashion-week'");
    if (!record19_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='fashion-week'\""); }
    record19.set("category", record19_categoryLookup.id);
    record19.set("published", true);
    record19.set("featured", false);
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.set("title", "La mode durable: Un imp\u00e9ratif ou une tendance?");
    record20.set("slug", "opinion-mode-durable");
    record20.set("excerpt", "Tribune sur la durabilit\u00e9 en mode");
    record20.set("content", "Analyse et prise de position...");
    const record20_categoryLookup = app.findFirstRecordByFilter("categories", "slug='opinions'");
    if (!record20_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='opinions'\""); }
    record20.set("category", record20_categoryLookup.id);
    record20.set("published", true);
    record20.set("featured", false);
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.set("title", "Faut-il encore suivre les tendances?");
    record21.set("slug", "opinion-tendances");
    record21.set("excerpt", "R\u00e9flexion sur le cycle des tendances");
    record21.set("content", "Contenu d\u00e9taill\u00e9...");
    const record21_categoryLookup = app.findFirstRecordByFilter("categories", "slug='opinions'");
    if (!record21_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='opinions'\""); }
    record21.set("category", record21_categoryLookup.id);
    record21.set("published", true);
    record21.set("featured", false);
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.set("title", "Le luxe face \u00e0 la d\u00e9mocratisation");
    record22.set("slug", "opinion-luxe-democratisation");
    record22.set("excerpt", "Analyse du luxe contemporain");
    record22.set("content", "Contenu d\u00e9taill\u00e9...");
    const record22_categoryLookup = app.findFirstRecordByFilter("categories", "slug='opinions'");
    if (!record22_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='opinions'\""); }
    record22.set("category", record22_categoryLookup.id);
    record22.set("published", true);
    record22.set("featured", false);
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.set("title", "Inclusivit\u00e9 en mode: Au-del\u00e0 du marketing");
    record23.set("slug", "opinion-inclusivite");
    record23.set("excerpt", "Prise de position sur l'inclusivit\u00e9");
    record23.set("content", "Contenu d\u00e9taill\u00e9...");
    const record23_categoryLookup = app.findFirstRecordByFilter("categories", "slug='opinions'");
    if (!record23_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='opinions'\""); }
    record23.set("category", record23_categoryLookup.id);
    record23.set("published", true);
    record23.set("featured", false);
  try {
    app.save(record23);
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