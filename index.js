const kindOf = require('kind-of')
const kleur = require('kleur')

class Conslur {
  /**
   * @param {Object} options - Options for logger
   * @param {number} options.indentSize - Indent size for log
   * @constructor
   */
  constructor({ indentSize = 2 }) {
    this.indentSize = ' '.repeat(options.indentSize)
  }

  /**
   *
   * @param {Object} options - Options for generated log
   * @param {number} options.toLog - Item to log
   * @param {number} options.indentSize - Indent size for log
   */
  generateLog({ toLog, indentSize = this.indentSize }) {
    const logType = kindOf(toLog)
    let log = ''
    let startsWith = ''
    let endsWith = ''
    switch (logType) {
      case 'array':
        startsWith = `${kleur.blue.bold('array')} (size: ${toLog.length}`
    }
  }
}
