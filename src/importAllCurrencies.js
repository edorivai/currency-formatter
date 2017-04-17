import * as currencies from '../currencies';
import { addCurrencies } from './index';

export default function importAllCurrencies() {
  addCurrencies(Object.values(currencies));
}
