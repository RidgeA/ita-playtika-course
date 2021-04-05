class ProductsRepository {
  #storage
  #products = []

  /**
   * @param {FileStorage} storage
   */
  constructor(storage) {
    this.#storage = storage
  }

  /**
   * @return {Promise<[object]>}
   */
  async getAll() {
    await this.#loadIfCacheEmpty()

    return this.#products
  }

  /**
   * @param {number} id
   * @return {Promise<object|undefined>}
   */
  async getById(id) {
    await this.#loadIfCacheEmpty();

    return this.#products.find(product => product.id === id);
  }

  /**
   * @param {object} product
   * @return {Promise<void>}
   */
  async create(product) {
    this.#products.push(product)
    await this.#flush()
  }

  /**
   * @param {object} product
   * @return {Promise<void>}
   */
  async update(product) {
    const idx = this.#products.findIndex(p => p.id === product.id)
    if (idx === -1) {
      throw new Error(`no product with id ${product.id}`)
    }
    const existingProduct = this.#products[idx];
    this.#products.splice(idx, 1, {
      ...existingProduct,
      ...product,
      id: existingProduct.id
    });

    await this.#flush();
  }

  /**
   * @param {number} id
   * @return {Promise<void>}
   */
  async delete(id) {
    const idx = this.#products.findIndex(p => p.id === id)
    if (idx !== -1) {
      this.#products.splice(idx, 1)
      await this.#flush();
    }
  }

  async #loadIfCacheEmpty() {
    if (this.#products.length === 0) {
      await this.#loadFromStorage();
    }
  }

  async #loadFromStorage() {
    this.#products = await this.#storage.get();
  }

  async #flush() {
    await this.#storage.store(this.#products);
  }

}

module.exports = ProductsRepository;
