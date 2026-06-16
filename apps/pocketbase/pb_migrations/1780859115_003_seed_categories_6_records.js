/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("categories");

  const record0 = new Record(collection);
    record0.set("name", "D\u00e9cryptages");
    record0.set("slug", "decryptages");
    record0.set("description", "Analyses approfondies des tendances et ph\u00e9nom\u00e8nes de la mode");
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
    record1.set("name", "Collections");
    record1.set("slug", "collections");
    record1.set("description", "D\u00e9cryptage des collections des plus grands cr\u00e9ateurs");
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
    record2.set("name", "Cr\u00e9ateurs");
    record2.set("slug", "createurs");
    record2.set("description", "Portraits et interviews des cr\u00e9ateurs de mode");
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
    record3.set("name", "Industrie & Innovation");
    record3.set("slug", "industrie-innovation");
    record3.set("description", "Savoir-faire, innovation textile et supply chain");
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
    record4.set("name", "Fashion Week");
    record4.set("slug", "fashion-week");
    record4.set("description", "Couverture des d\u00e9fil\u00e9s et \u00e9v\u00e9nements majeurs");
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
    record5.set("name", "Opinions");
    record5.set("slug", "opinions");
    record5.set("description", "Tribunes et analyses critiques sur la mode");
  try {
    app.save(record5);
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