
    var testsContext = require.context("../../app/tests/mocha", false);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    