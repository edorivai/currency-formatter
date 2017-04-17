import USD from '../currencies/USD.json';

const currencies = {};
export function addCurrencies(values) {
  if (!Array.isArray(values)) values = [values];

  values.forEach(currency => currencies[currency.code] = currency)
}
addCurrencies(USD);

const locales = {};
export function addLocales(values) {
  if (!Array.isArray(values)) values = [values];

  values.forEach(locale => locales[locale.code] = locale)
}

const defaultFormat = USD;
const defaultLocale = 'en-US';

const formatMapping = [
  {
    symbolOnLeft: true,
    spaceBetweenAmountAndSymbol: false,
    format: {
      pos: '%s%v',
      neg: '-%s%v',
      zero: '%s%v'
    }
  },
  {
    symbolOnLeft: true,
    spaceBetweenAmountAndSymbol: true,
    format: {
      pos: '%s %v',
      neg: '-%s %v',
      zero: '%s %v'
    }
  },
  {
    symbolOnLeft: false,
    spaceBetweenAmountAndSymbol: false,
    format: {
      pos: '%v%s',
      neg: '-%v%s',
      zero: '%v%s'
    }
  },
  {
    symbolOnLeft: false,
    spaceBetweenAmountAndSymbol: true,
    format: {
      pos: '%v %s',
      neg: '-%v %s',
      zero: '%v %s'
    }
  }
];

function getFormat(value, config) {
  const { format } = formatMapping.find(({ symbolOnLeft, spaceBetweenAmountAndSymbol }) =>
    symbolOnLeft === config.symbolOnLeft && spaceBetweenAmountAndSymbol === config.spaceBetweenAmountAndSymbol
  );

  return value === 0 ? format.zero : (value < 0 ? format.neg : format.pos);
}

export function format(value, ...configs) {
  const config = Object.assign({}, defaultFormat);

  configs.forEach(c => {
    if (c.hasOwnProperty('currencyCode') && currencies.hasOwnProperty(c.currencyCode)) {
      Object.assign(config, currencies[c.currencyCode]);
    }
    if (c.hasOwnProperty('localeCode') && locales.hasOwnProperty(c.localeCode)) {
      Object.assign(config, locales[c.localeCode]);
    }
    Object.assign(config, c);
  });

  const number = new Intl.NumberFormat(config.localeCode || defaultLocale, {
    minimumFractionDigits: config.decimalDigits,
    maximumFractionDigits: config.decimalDigits,
  }).format(Math.abs(value));
  const format = getFormat(value, config);

  return format.replace('%v', number).replace('%s', config.symbol);
}
