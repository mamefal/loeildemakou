/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("articles");

  const record0 = new Record(collection);
    record0.set("title", "\u00c9milie Rousseau: Couturi\u00e8re Minimaliste");
    record0.set("slug", "emilie-rousseau-couturiere-minimaliste");
    record0.set("excerpt", "D\u00e9couvrez la vision minimaliste et durable d'\u00c9milie Rousseau, couturi\u00e8re parisienne qui red\u00e9finit la mode responsable.");
    record0.set("content", "\u00c9milie Rousseau est une couturi\u00e8re parisienne reconnue pour son approche minimaliste et durable de la mode. Form\u00e9e aux techniques traditionnelles de la couture, elle cr\u00e9e des pi\u00e8ces intemporelles qui privil\u00e9gient la qualit\u00e9 sur la quantit\u00e9. Son travail explore l'intersection entre l'artisanat et la mode contemporaine, offrant des v\u00eatements qui racontent une histoire. Ses cr\u00e9ations sont port\u00e9es par des femmes qui cherchent l'authenticit\u00e9 et la durabilit\u00e9 dans leur garde-robe.");
    const record0_categoryLookup = app.findFirstRecordByFilter("categories", "name='Créateurs'");
    if (!record0_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"name='Créateurs'\""); }
    record0.set("category", record0_categoryLookup.id);
    record0.set("published", true);
    record0.set("featured", true);
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
    record1.set("title", "Sophie Martin: L'Influenceuse Mode Parisienne");
    record1.set("slug", "sophie-martin-influenceuse-mode");
    record1.set("excerpt", "Sophie Martin incarne l'\u00e9l\u00e9gance parisienne moderne. Avec son style inimitable, elle inspire des milliers de followers \u00e0 travers ses cr\u00e9ations mode audacieuses.");
    record1.set("content", "Sophie Martin est une influenceuse mode bas\u00e9e \u00e0 Paris, connue pour son style \u00e9clectique et sa capacit\u00e9 \u00e0 m\u00e9langer les tendances avec l'intemporel. Avec plus de 500k followers, elle cr\u00e9e du contenu qui c\u00e9l\u00e8bre la diversit\u00e9 et l'expression personnelle. Son influence s'\u00e9tend au-del\u00e0 des r\u00e9seaux sociaux, collaborant avec les plus grandes marques de mode. Elle est une voix authentique dans l'industrie, promouvant l'inclusivit\u00e9 et la confiance en soi.");
    const record1_categoryLookup = app.findFirstRecordByFilter("categories", "name='Créateurs'");
    if (!record1_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"name='Créateurs'\""); }
    record1.set("category", record1_categoryLookup.id);
    record1.set("published", true);
    record1.set("featured", true);
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
    record2.set("title", "Marc Delacroix: Visionnaire du Streetwear");
    record2.set("slug", "marc-delacroix-streetwear");
    record2.set("excerpt", "Marc Delacroix repousse les limites du streetwear avec des designs innovants qui fusionnent art urbain et haute couture.");
    record2.set("content", "Marc Delacroix est un designer de streetwear bas\u00e9 \u00e0 Lyon qui a r\u00e9volutionn\u00e9 la sc\u00e8ne mode urbaine fran\u00e7aise. Ses collections combinent des techniques de fabrication avant-gardistes avec une esth\u00e9tique urbaine brute. Chaque pi\u00e8ce raconte une histoire de r\u00e9bellion cr\u00e9ative et d'innovation. Ses collaborations avec des artistes et des musiciens ont \u00e9tabli sa marque comme un symbole de culture urbaine contemporaine.");
    const record2_categoryLookup = app.findFirstRecordByFilter("categories", "name='Créateurs'");
    if (!record2_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"name='Créateurs'\""); }
    record2.set("category", record2_categoryLookup.id);
    record2.set("published", true);
    record2.set("featured", true);
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
    record3.set("title", "Jade Chen: Fusion Mode Contemporaine");
    record3.set("slug", "jade-chen-fusion-mode");
    record3.set("excerpt", "Jade Chen fusionne les influences asiatiques et occidentales pour cr\u00e9er une mode qui transcende les fronti\u00e8res culturelles.");
    record3.set("content", "Jade Chen est une influenceuse mode et cr\u00e9atrice bas\u00e9e \u00e0 Paris, c\u00e9l\u00e8bre pour sa capacit\u00e9 \u00e0 fusionner les esth\u00e9tiques asiatiques et occidentales. Son approche unique de la mode a inspir\u00e9 une nouvelle g\u00e9n\u00e9ration de cr\u00e9ateurs. Elle collabore r\u00e9guli\u00e8rement avec des marques de luxe et des designers \u00e9mergents. Son influence s'\u00e9tend \u00e0 la direction artistique et \u00e0 la curation de contenu mode, \u00e9tablissant les tendances qui d\u00e9finissent la mode contemporaine.");
    const record3_categoryLookup = app.findFirstRecordByFilter("categories", "name='Créateurs'");
    if (!record3_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"name='Créateurs'\""); }
    record3.set("category", record3_categoryLookup.id);
    record3.set("published", true);
    record3.set("featured", true);
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
    record4.set("title", "Thomas Beaumont: Photographe Mode");
    record4.set("slug", "thomas-beaumont-photographe");
    record4.set("excerpt", "Thomas Beaumont capture l'essence de la mode \u00e0 travers son objectif, cr\u00e9ant des images qui transcendent la simple documentation.");
    record4.set("content", "Thomas Beaumont est un photographe mode r\u00e9put\u00e9 dont le travail a \u00e9t\u00e9 publi\u00e9 dans les plus grands magazines de mode. Son approche narrative de la photographie de mode cr\u00e9e des images qui racontent des histoires complexes et nuanc\u00e9es. Ses collaborations avec des stylistes et des designers ont produit des campagnes iconiques. Son vision artistique a influenc\u00e9 la direction visuelle de la mode contemporaine, \u00e9tablissant de nouveaux standards en photographie de mode.");
    const record4_categoryLookup = app.findFirstRecordByFilter("categories", "name='Créateurs'");
    if (!record4_categoryLookup) { throw new Error("Lookup failed for category: no record in 'categories' matching \"name='Créateurs'\""); }
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
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})