import { A as create_anchor, F as slot, E as pop, z as push } from "../../chunks/index.js";
function Layout($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}`;
  pop();
}
export {
  Layout as default
};
