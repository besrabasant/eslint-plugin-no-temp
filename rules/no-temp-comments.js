module.exports = {
  meta: {
      type: 'problem',
      docs: {
          description: 'Disallow temporary code. Found @temp comment',
          recommended: false,
      },
      fixable: false,
  },
  create(context) {
      return {
          Program(node) {
              node.comments.map(n => {
                  const ifPresent = n.value.includes('@temp')
                  if (ifPresent) {
                      context.report({
                          message: 'Temporary code is present',
                          loc: n.loc
                      })
                  }
              })
          }
      };
  }
}
