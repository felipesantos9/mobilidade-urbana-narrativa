import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import historia from '../content/historia.yaml';
import * as abertura from './cenas/abertura.js';
import './styles/tokens.css';
import './styles/base.css';

gsap.registerPlugin(ScrollTrigger);

const cenas = { abertura };
const app = document.querySelector('#app');

for (const { id, altura } of historia.cenas) {
  const el = document.createElement('section');
  el.className = 'cena';
  el.id = id;
  el.style.setProperty('--altura', altura);
  cenas[id].montar(el);
  app.append(el);
}

// matchMedia desfaz e recria as timelines quando a preferência de movimento muda.
gsap.matchMedia().add(
  {
    reduzido: '(prefers-reduced-motion: reduce)',
    completo: '(prefers-reduced-motion: no-preference)',
  },
  ({ conditions }) => {
    for (const { id } of historia.cenas) {
      cenas[id].animar(document.getElementById(id), { reduzido: conditions.reduzido });
    }
  },
);
