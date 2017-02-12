module.exports = function (input) {
  if (typeof input !== 'string') {
    throw new Error('Expected input to be string')
  }

  const ast = require('babylon').parse(input, {sourceType: 'module', plugins: ['*']})
  const comments = ast.tokens.filter(token => ['CommentBlock', 'CommentLine'].indexOf(token.type) > -1)

  const re = /^\s*@([\w_-]+)(?:[\s\n])([\s\S]+)$/
  const codes = {}
  for (const comment of comments) {
    if (re.test(comment.value)) {
      const [, namespace, content] = re.exec(comment.value)
      if (codes[namespace]) {
        throw new Error(`Duplicated namespace: ${namespace}`)
      } else {
        const execute = new Function(`return ${content}`) // eslint-disable-line no-new-func
        codes[namespace] = execute()
      }
    }
  }

  return codes
}

