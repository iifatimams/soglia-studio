import { Controller, Get, Param } from "@nestjs/common";
import { CatalogService } from "./catalog.service";

@Controller("catalog")
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get("collections")
  listCollections() {
    return this.catalogService.listCollections();
  }

  @Get("products")
  listProducts() {
    return this.catalogService.listProducts();
  }

  @Get("products/:slug")
  getProduct(@Param("slug") slug: string) {
    return this.catalogService.getProduct(slug);
  }
}
