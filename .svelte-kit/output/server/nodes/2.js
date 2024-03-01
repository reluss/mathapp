

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DqArYCvV.js","_app/immutable/chunks/disclose-version.CeGfHQjQ.js","_app/immutable/chunks/runtime.Ja3GGWF_.js"];
export const stylesheets = ["_app/immutable/assets/2.Cnjpd8wi.css"];
export const fonts = [];
