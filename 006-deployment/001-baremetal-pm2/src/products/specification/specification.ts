import { FilterProductsDto } from "../dto/filter-products-dto";
import { Product } from "../model/product";

export type Specification<T> = (object: T) => boolean


const filters = {
  name(name): Specification<Product> {
    return function (product: Product): boolean {
      return product.name.includes(name);
    };
  },
  category(category): Specification<Product> {
    return product => product.category === category;
  },
  priceFrom(priceFrom): Specification<Product> {
    return product => product.price >= parseFloat(priceFrom);
  },
  priceTo(priceTo): Specification<Product> {
    return product => product.price <= parseFloat(priceTo);
  },
}

function applyFilters(filters) {
  return (product) => {
    for (const filter of filters) {
      if (filter(product) === false) {
        return false
      }
    }
    return true
  }
}

export class FiltersBuilder {
  build(filterParams: FilterProductsDto): Specification<Product> {

    const filtersArray = Object.entries(filterParams)
      .reduce((acc, [paramName, paramValue]) => {
        if (paramName in filters) {
          acc.push(filters[paramName](paramValue));
        }
        return acc;
      }, []);

    return applyFilters(filtersArray)
  }
}
