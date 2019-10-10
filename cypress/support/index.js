require('cypress-plugin-tab')
require('cypress-plugin-retries')

Cypress.env('RETRIES', 1)

const addContext = require('mochawesome/addContext')

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    let screenshotFileName
    if (runnable.parent.parent.title !== '') {
      screenshotFileName = `${runnable.parent.parent.title} -- ${runnable.parent.title} -- ${test.title} (failed).png`
    } else {
      screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
    }
    addContext(
      {
        test,
      },
      `assets/screenshots/${Cypress.spec.name}/${screenshotFileName}`,
    )
  }
  if (test.state === 'passed') {
    const screenshotFileName = `${test.title} -- after each hook.png`
    addContext(
      {
        test,
      },
      `assets/screenshots/${Cypress.spec.name}/${screenshotFileName}`,
    )
  }
})

afterEach(function() {
  const result = RegExp('backend', 'g').test(Cypress.spec.relative)
  if (
    this.currentTest.state === 'passed' &&
    result !== true &&
    Cypress.env('CI') === true
  ) {
    cy.screenshot({capture: 'runner'})
  }
})
