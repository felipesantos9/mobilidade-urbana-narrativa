import { gsap } from 'gsap';
import conteudo from '../../content/cenas/abertura.yaml';

export const id = 'abertura';

/** Monta o HTML da cena dentro de el. */
export function montar(el) {
  el.innerHTML = `
    <div class="pin">
      <div class="abertura-numero"></div>
      <p class="abertura-chamada"></p>
    </div>`;
  el.querySelector('.abertura-numero').textContent = conteudo.numero;
  el.querySelector('.abertura-chamada').textContent = conteudo.chamada;
}

/** Cria a timeline ligada ao scroll. Com movimento reduzido, a cena fica estática. */
export function animar(el, { reduzido }) {
  if (reduzido) return;
  const q = gsap.utils.selector(el);
  return gsap
    .timeline({
      scrollTrigger: { trigger: el, start: 'top top', end: 'bottom bottom', scrub: true },
    })
    .to(q('.abertura-numero'), { scale: 0.6, opacity: 0.2 })
    .to(q('.abertura-chamada'), { y: -40, opacity: 0 }, '<');
}
