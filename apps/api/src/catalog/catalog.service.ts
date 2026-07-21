import { Injectable, NotFoundException } from "@nestjs/common";
import { catalogCollections, catalogProducts } from "@soglia/db/catalog-fixtures";

@Injectable()
export class CatalogService {
  listCollections() {
    return catalogCollections;
  }

  listProducts() {
    return catalogProducts;
  }

  getProduct(slug: string) {
    const product = catalogProducts.find((item) => item.slug === slug);

    if (!product) {
      throw new NotFoundException(`Product '${slug}' was not found.`);
    }

    return product;
  }
}
