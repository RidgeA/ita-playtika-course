const {readFile, writeFile} = require('fs/promises')

class FileStorage {

  #path

  constructor(path) {
    this.#path = path
  }

  /**
   * @return {Promise<object>}
   */
  async get() {
    const content = await readFile(this.#path, {encoding: 'utf8'})
    return JSON.parse(content)
  }

  /**
   * @param data
   * @return {Promise<void>}
   */
  async store(data) {
    const content = JSON.stringify(data, null, 2)
    await writeFile(this.#path, content)
  }
}

module.exports = FileStorage;
