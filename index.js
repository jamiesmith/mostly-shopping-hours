'use strict'

var weekend = require('is-it-weekend')

var HOUR_WEIGHTS = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.7, 0.8, 0.5, 1.0, 1.0, 1.0, 0.7, 0.5, 0.7, 0.8, 0.9, 0.9, 0.9, 0.7, 0.2, 0.1]

module.exports = function (cb) {
  var odds = HOUR_WEIGHTS[(new Date()).getHours()] * (weekend() ? 2 : 1)
  if (odds > Math.random()) {
    cb()
  }
}
