const kindOf = require('kind-of')
const kleur = require('kleur')

class Conslur {
  /**
   * @param {Object} options - Options for logger
   * @param {number} options.indentSize - Indent size for log
   * @constructor
   */
  constructor({ indentSize }) {
    this.indentSize = ' '.repeat(options.indentSize)
  }

  generateLog({ toLog, indentSize }) {
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

const log = new Conslur({ indentSize: 4 })
