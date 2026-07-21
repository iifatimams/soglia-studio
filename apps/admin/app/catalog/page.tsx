import { catalogCollections, catalogProducts } from "@soglia/db/catalog-fixtures";
import { CatalogAdminClient } from "./catalog-admin-client";

export default function CatalogPage() {
  return <CatalogAdminClient collections={catalogCollections} initialProducts={catalogProducts} />;
}
