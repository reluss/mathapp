import { G as escape, K as attr, E as pop, L as stringify, z as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push(false);
  let zahl1 = Math.floor(Math.random() * 11);
  let zahl2 = Math.floor(Math.random() * 11);
  let ergebnisI = "";
  let falsch = 0;
  let richtig = 0;
  let antwort = "";
  let color = "";
  $$payload.out += `<div class="container svelte-jevd6t">${escape(zahl1)} * ${escape(zahl2)} = <input type="number"${attr("value", ergebnisI, false)} placeholder="" class="svelte-jevd6t"> <br> <br> <button>Nächste Aufgabe</button> <br> <br> Richtig: ${escape(richtig)} <br> Falsch: ${escape(falsch)} <br> <h1${attr("style", `--theme-color: ${stringify(color)}`, false)} class="svelte-jevd6t">${escape(antwort)}</h1></div>`;
  pop();
}
export {
  _page as default
};
