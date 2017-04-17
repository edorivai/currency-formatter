import { format, addCurrencies } from './src/index'
import importAllCurrencies from './currencies/index'
import importAllLocales from './locale-formats/index'
import { assert } from 'chai'
import IntlPolyfill from 'intl';
import ARS from './currencies/ARS.json'

Intl.NumberFormat = IntlPolyfill.NumberFormat

importAllCurrencies()
importAllLocales()

describe('format', () => {
  context('Default Options', () => {
    context('Symbol on the left', () => {
      context('No Space', () => {
        it('Returns -$10.00 for -10', () => {
          var result = format(-10, { currencyCode: 'USD' })
          assert.equal(result, '-$10.00')
        })

        it('Returns $0.00 for 0', () => {
          var result = format(0, { currencyCode: 'USD' })
          assert.equal(result, '$0.00')
        })

        it('Returns $10.00 for 10', () => {
          var result = format(10, { currencyCode: 'USD' })
          assert.equal(result, '$10.00')
        })

        it('Returns $100.00 for 100', () => {
          var result = format(100, { currencyCode: 'USD' })
          assert.equal(result, '$100.00')
        })

        it('Returns $1,000.00 for 1000', () => {
          var result = format(1000, { currencyCode: 'USD' })
          assert.equal(result, '$1,000.00')
        })

        it('Returns $10,000.00 for 10000', () => {
          var result = format(10000, { currencyCode: 'USD' })
          assert.equal(result, '$10,000.00')
        })

        it('Returns $1,000,000.00 for 1000000', () => {
          var result = format(1000000, { currencyCode: 'USD' })
          assert.equal(result, '$1,000,000.00')
        })
      })

      context('With Space', () => {
        it('Returns -$ 10,00 for -10', () => {
          var result = format(-10, { currencyCode: 'ARS', localeCode: 'es-AR' })
          assert.equal(result, '-$ 10,00')
        })

        it('Returns $ 0,00 for 0', () => {
          var result = format(0, { currencyCode: 'ARS', localeCode: 'es-AR' })
          assert.equal(result, '$ 0,00')
        })

        it('Returns $ 10,00 for 10', () => {
          var result = format(10, { currencyCode: 'ARS', localeCode: 'es-AR' })
          assert.equal(result, '$ 10,00')
        })

        it('Returns $ 100,00 for 100', () => {
          var result = format(100, { currencyCode: 'ARS', localeCode: 'es-AR' })
          assert.equal(result, '$ 100,00')
        })

        it('Returns $ 1.000,00 for 1000', () => {
          var result = format(1000, { currencyCode: 'ARS', localeCode: 'es-AR' })
          assert.equal(result, '$ 1.000,00')
        })

        it('Returns $ 10.000,00 for 10000', () => {
          var result = format(10000, { currencyCode: 'ARS', localeCode: 'es-AR' })
          assert.equal(result, '$ 10.000,00')
        })

        it('Returns $ 1.000.000,00 for 1000000', () => {
          var result = format(1000000, { currencyCode: 'ARS', localeCode: 'es-AR' })
          assert.equal(result, '$ 1.000.000,00')
        })
      })
    })

    context('Symbol on the right', () => {
      context('No Space', () => {
        it('Returns -10.00Nfk for -10', () => {
          var result = format(-10, { currencyCode: 'ERN' })
          assert.equal(result, '-10.00Nfk')
        })

        it('Returns 0.00Nfk for 0', () => {
          var result = format(0, { currencyCode: 'ERN' })
          assert.equal(result, '0.00Nfk')
        })

        it('Returns 10.00Nfk for 10', () => {
          var result = format(10, { currencyCode: 'ERN' })
          assert.equal(result, '10.00Nfk')
        })

        it('Returns 100.00Nfk for 100', () => {
          var result = format(100, { currencyCode: 'ERN' })
          assert.equal(result, '100.00Nfk')
        })

        it('Returns 1,000.00Nfk for 1000', () => {
          var result = format(1000, { currencyCode: 'ERN' })
          assert.equal(result, '1,000.00Nfk')
        })

        it('Returns 10,000.00Nfk for 10000', () => {
          var result = format(10000, { currencyCode: 'ERN' })
          assert.equal(result, '10,000.00Nfk')
        })

        it('Returns 1,000,000.00Nfk for 1000000', () => {
          var result = format(1000000, { currencyCode: 'ERN' })
          assert.equal(result, '1,000,000.00Nfk')
        })
      })

      context('With Space', () => {
        it('Returns -10,00 € for -10', () => {
          var result = format(-10, { currencyCode: 'EUR', localeCode: 'de-DE' })
          assert.equal(result, '-10,00 €')
        })

        it('Returns 0,00 € for 0', () => {
          var result = format(0, { currencyCode: 'EUR', localeCode: 'de-DE' })
          assert.equal(result, '0,00 €')
        })

        it('Returns 10,00 € for 10', () => {
          var result = format(10, { currencyCode: 'EUR', localeCode: 'de-DE' })
          assert.equal(result, '10,00 €')
        })

        it('Returns 100,00 € for 100', () => {
          var result = format(100, { currencyCode: 'EUR', localeCode: 'de-DE' })
          assert.equal(result, '100,00 €')
        })

        it('Returns 1.000,00 € for 1000', () => {
          var result = format(1000, { currencyCode: 'EUR', localeCode: 'de-DE' })
          assert.equal(result, '1.000,00 €')
        })

        it('Returns 10.000,00 € for 10000', () => {
          var result = format(10000, { currencyCode: 'EUR', localeCode: 'de-DE' })
          assert.equal(result, '10.000,00 €')
        })

        it('Returns 1.000.000,00 € for 1000000', () => {
          var result = format(1000000, { currencyCode: 'EUR', localeCode: 'de-DE' })
          assert.equal(result, '1.000.000,00 €')
        })
      })
    })
  })

  context('With locale option', () => {
    it('Returns €1.234,56 for nl-NL', () => {
      var result = format(1234.56, {
        currencyCode: 'EUR',
        localeCode: 'nl-NL'
      })

      assert.equal(result, '€1.234,56')
    })

    it('Allows for overriding with options', () => {
      var result = format(1234.56, {
        currencyCode: 'EUR',
        localeCode: 'nl-NL',
        symbol: 'euro',
        spaceBetweenAmountAndSymbol: true,
        symbolOnLeft: false
      })

      assert.equal(result, '1.234,56 euro')
    });

    it('Allows for using locale settings with a custom currency', () => {
      var result = format(1234.56, {
        currencyCode: 'USD',
        localeCode: 'nl-NL'
      })

      assert.equal(result, '$1.234,56')
    });
  })

  xcontext('Overriding Options', () => {
    it('Returns 1^000^000*000 ¯\\_(ツ)_/¯ for the given parameters', () => {
      var result = format(1000000, {
        currencyCode: 'USD',
        symbol: '¯\\_(ツ)_/¯',
        decimal: '*',
        thousand: '^',
        precision: 3,
        format: '%v %s'
      })

      assert.equal(result, '1^000^000*000 ¯\\_(ツ)_/¯')
    })

    it('Supports objects for format, to override the positive result', () => {
      var result = format(10, {
        currencyCode: 'USD',
        format: {
          pos: '%s  %v',
          neg: '-%s%v'
        }
      })

      assert.equal(result, '$  10.00')
    })

    it('Supports objects for format, to override the negative result', () => {
      var result = format(-10, {
        currencyCode: 'USD',
        format: {
          pos: '%s  %v',
          neg: '(%s%v)'
        }
      })

      assert.equal(result, '($10.00)')
    })

    it('Supports empty symbol', () => {
      var result = format(1000000, {
        currencyCode: 'USD',
        symbol: ''
      })

      assert.equal(result, '1,000,000.00')
    })

    it('Supports empty decimal', () => {
      var result = format(1000000, {
        currencyCode: 'USD',
        decimal: ''
      })

      assert.equal(result, '$1,000,00000')
    })

    it('Supports empty thousands separator', () => {
      var result = format(1000000, {
        currencyCode: 'USD',
        thousand: ''
      })

      assert.equal(result, '$1000000.00')
    })

    it('Supports 0 precision digits', () => {
      var result = format(1000000, {
        currencyCode: 'USD',
        precision: 0
      })

      assert.equal(result, '$1,000,000')
    })

    it('Supports empty format', () => {
      var result = format(1000000, {
        currencyCode: 'USD',
        format: ''
      })

      assert.equal(result, '$1,000,000.00')
    })
  })

  context('When the currency is not found', () => {
    it('Uses default values', () => {
      var result = format(1000000, {
        currencyCode: 'None existing currency'
      })

      assert.equal(result, '$1,000,000.00')
    })
  })
})

describe('currencies', () => {
  xit('should be exposed as public via require()', () => {
    assert(Array.isArray(require('./currencies')))
  })

  xit('should be exposed as public via .currencies', () => {
    assert(Array.isArray(currencyFormatter.currencies))
  })
})

xdescribe('findCurrency', () => {
  it('returns the expected currency for USD', () => {
    var expected = {
      currencyCode: 'USD',
      symbol: '$',
      thousandsSeparator: ',',
      decimalSeparator: '.',
      symbolOnLeft: true,
      spaceBetweenAmountAndSymbol: false,
      decimalDigits: 2
    }

    var result = currencyFormatter.findCurrency('USD')

    assert.deepEqual(result, expected)
  })

  it('returns the expected currency for EUR', () => {
    var expected = {
      currencyCode: 'EUR', localeCode: 'de-DE',
      symbol: '€',
      thousandsSeparator: ' ',
      decimalSeparator: ',',
      symbolOnLeft: false,
      spaceBetweenAmountAndSymbol: true,
      decimalDigits: 2
    }

    var result = currencyFormatter.findCurrency('EUR')

    assert.deepEqual(result, expected)
  })

  it('returns undefined when it can\'t find the currency', () => {
    var result = currencyFormatter.findCurrency('NON EXISTING')
    assert.isUndefined(result)
  })
})
