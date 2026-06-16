/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("articles");

  const record0 = new Record(collection);
    record0.set("title", "D\u00e9couvrir la beaut\u00e9 minimaliste");
    record0.set("slug", "decouvrir-beaute-minimaliste");
    record0.set("excerpt", "Exploration du design minimaliste et de son impact sur la photographie contemporaine.");
    record0.set("content", "La photographie minimaliste est bien plus qu'une simple technique. C'est une philosophie qui c\u00e9l\u00e8bre la simplicit\u00e9, l'espace et la clart\u00e9. Dans cet article, nous explorons comment les principes du minimalisme peuvent transformer votre approche photographique et cr\u00e9er des images d'une puissance remarquable.");
    const record0_categoryLookup = app.findFirstRecordByFilter("categories", "slug='nature'");
    if (!record0_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='nature'\""); }
    record0.set("category", record0_categoryLookup.id);
    record0.set("published", true);
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
    record1.set("title", "L'art de la photographie urbaine");
    record1.set("slug", "art-photographie-urbaine");
    record1.set("excerpt", "Guide complet pour capturer l'essence des villes modernes \u00e0 travers votre objectif.");
    record1.set("content", "La photographie urbaine offre des opportunit\u00e9s infinies pour capturer la vie, l'architecture et l'\u00e9nergie des villes. D\u00e9couvrez les techniques essentielles pour cr\u00e9er des images urbaines captivantes qui racontent des histoires.");
    const record1_categoryLookup = app.findFirstRecordByFilter("categories", "slug='architecture'");
    if (!record1_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='architecture'\""); }
    record1.set("category", record1_categoryLookup.id);
    record1.set("published", true);
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
    record2.set("title", "Capturer l'essence abstraite");
    record2.set("slug", "capturer-essence-abstraite");
    record2.set("excerpt", "Techniques et perspectives pour explorer la photographie abstraite et cr\u00e9er des compositions uniques.");
    record2.set("content", "La photographie abstraite lib\u00e8re votre cr\u00e9ativit\u00e9 des contraintes du r\u00e9alisme. En explorant les formes, les couleurs et les textures, vous pouvez cr\u00e9er des images qui \u00e9voquent des \u00e9motions et des sensations plut\u00f4t que de simplement documenter la r\u00e9alit\u00e9.");
    const record2_categoryLookup = app.findFirstRecordByFilter("categories", "slug='abstrait'");
    if (!record2_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"slug='abstrait'\""); }
    record2.set("category", record2_categoryLookup.id);
    record2.set("published", true);
  try {
    app.save(record2);
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