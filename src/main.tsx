import App from './App.tsx'
import r2wc from '@r2wc/react-to-web-component'

const wcPokemon = r2wc(App);

customElements.define('wc-pokemon', wcPokemon);