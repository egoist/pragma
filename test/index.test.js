import pragma from '../src'

test('main', () => {
  expect(pragma(`
  /*
  @babel {
    preset: 1 + 1
  }
  */
  `)).toEqual({
    babel: {
      preset: 2
    }
  })
})

test('duplicated', () => {
  try {
    pragma(`
    /* @babel {port:1} */
    /* @babel {port:1} */
    `)
  } catch (err) {
    expect(err.message.indexOf('Duplicated namespace: babel') > -1)
      .toBe(true)
  }
})
