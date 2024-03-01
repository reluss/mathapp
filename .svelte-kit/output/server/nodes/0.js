

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CpE2BdwF.js","_app/immutable/chunks/disclose-version.CeGfHQjQ.js","_app/immutable/chunks/runtime.Ja3GGWF_.js"];
export const stylesheets = [];
export const fonts = [];
