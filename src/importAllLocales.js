import * as locales from '../localeformats';
import { addLocales } from './index';

export default function importAllLocales() {
  addLocales(Object.values(locales));
}
