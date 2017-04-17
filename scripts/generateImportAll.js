import fs from 'fs';
import path from 'path';

// Currencies
const currencies = fs.readdirSync(path.resolve(__dirname, '../currencies'))
  .filter(filename => /^[A-Z]{3}\.json$/.test(filename))
  .map(filename => filename.replace('.json', ''));

const importAllCurrenciesScript = (
  `${currencies.map(
    currency => `import ${currency} from '../currencies/${currency}.json'`
  ).join('\n')}
import { addCurrencies } from '../src/index';

export default function importAllCurrencies() {
  addCurrencies([${currencies.join(', ')}]);
}
`);

fs.writeFileSync(path.resolve(__dirname, '../currencies/index.js'), importAllCurrenciesScript);

// Locales
const locales = fs.readdirSync(path.resolve(__dirname, '../locale-formats'))
  .filter(filename => /^[a-z]{2}-[A-Z]{2}\.json$/.test(filename))
  .map(filename => filename.replace('.json', ''));

const importAllLocalesScript = (
  `${locales.map(
    locale => `import ${locale.replace('-', '_')} from '../locale-formats/${locale}.json'`
  ).join('\n')}
import { addLocales } from '../src/index';

export default function importAllLocales() {
  addLocales([${locales.map(l => l.replace('-', '_')).join(', ')}]);
}
`);

fs.writeFileSync(path.resolve(__dirname, '../locale-formats/index.js'), importAllLocalesScript);
