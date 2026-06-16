/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("gallery_photos");

  const record0 = new Record(collection);
    record0.set("title", "Paysage serein");
    record0.set("description", "Montagne enneig\u00e9e au coucher du soleil");
    const record0_categoryLookup = app.findFirstRecordByFilter("categories", "slug='nature'");
    if (!record0_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='nature'\""); }
    record0.set("category", record0_categoryLookup.id);
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
    record1.set("title", "For\u00eat myst\u00e9rieuse");
    record1.set("description", "Arbres anciens dans la brume matinale");
    const record1_categoryLookup = app.findFirstRecordByFilter("categories", "slug='nature'");
    if (!record1_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='nature'\""); }
    record1.set("category", record1_categoryLookup.id);
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
    record2.set("title", "Horizon infini");
    record2.set("description", "Ciel et terre en harmonie");
    const record2_categoryLookup = app.findFirstRecordByFilter("categories", "slug='nature'");
    if (!record2_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='nature'\""); }
    record2.set("category", record2_categoryLookup.id);
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
    record3.set("title", "G\u00e9om\u00e9trie urbaine");
    record3.set("description", "B\u00e2timents modernes et lignes \u00e9pur\u00e9es");
    const record3_categoryLookup = app.findFirstRecordByFilter("categories", "slug='architecture'");
    if (!record3_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='architecture'\""); }
    record3.set("category", record3_categoryLookup.id);
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
    record4.set("title", "D\u00e9tails architecturaux");
    record4.set("description", "Fa\u00e7ade contemporaine");
    const record4_categoryLookup = app.findFirstRecordByFilter("categories", "slug='architecture'");
    if (!record4_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='architecture'\""); }
    record4.set("category", record4_categoryLookup.id);
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
    record5.set("title", "Formes et couleurs");
    record5.set("description", "Composition abstraite minimaliste");
    const record5_categoryLookup = app.findFirstRecordByFilter("categories", "slug='abstrait'");
    if (!record5_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='abstrait'\""); }
    record5.set("category", record5_categoryLookup.id);
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
    record6.set("title", "Texture abstraite");
    record6.set("description", "Jeu de lumi\u00e8re et d'ombre");
    const record6_categoryLookup = app.findFirstRecordByFilter("categories", "slug='abstrait'");
    if (!record6_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='abstrait'\""); }
    record6.set("category", record6_categoryLookup.id);
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
    record7.set("title", "Essence visuelle");
    record7.set("description", "Exploration des formes pures");
    const record7_categoryLookup = app.findFirstRecordByFilter("categories", "slug='abstrait'");
    if (!record7_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='abstrait'\""); }
    record7.set("category", record7_categoryLookup.id);
  try {
    app.save(record7);
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