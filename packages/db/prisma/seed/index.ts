import { catalogCollections, catalogProducts } from "../../src/catalog-fixtures";

function mapProductKind(kind: string) {
  return kind.toUpperCase();
}

function mapAvailabilityLabel(label: string) {
  return label.toUpperCase();
}

function mapImageTone(tone: string) {
  return tone.toUpperCase();
}

function mapProductStatus(status: string) {
  return status.toUpperCase();
}

function main() {
  console.log(`Seed catalog collections: ${catalogCollections.length}`);
  console.log(`Seed catalog products: ${catalogProducts.length}`);
  console.log(
    "Database write seed will be enabled after the first real dev database is connected."
  );

  for (const collection of catalogCollections) {
    console.log(`Collection: ${collection.slug}`);
  }

  for (const product of catalogProducts) {
    console.log(
      `Product: ${product.slug} / ${mapProductKind(product.kind)} / ${mapProductStatus(
        product.status
      )} / ${mapAvailabilityLabel(product.availability)} / ${mapImageTone(product.imageTone)}`
    );
  }
}

try {
  main();
} catch (error: unknown) {
  console.error(error);
  process.exit(1);
}
