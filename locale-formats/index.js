import de_AT from '../locale-formats/de-AT.json'
import el_GR from '../locale-formats/el-GR.json'
import en_IE from '../locale-formats/en-IE.json'
import es_ES from '../locale-formats/es-ES.json'
import it_IT from '../locale-formats/it-IT.json'
import nl_BE from '../locale-formats/nl-BE.json'
import nl_NL from '../locale-formats/nl-NL.json'
import { addLocales } from '../src/index';

export default function importAllLocales() {
  addLocales([de_AT, el_GR, en_IE, es_ES, it_IT, nl_BE, nl_NL]);
}
