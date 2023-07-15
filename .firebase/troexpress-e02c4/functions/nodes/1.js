

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.eb5fc9a0.js","_app/immutable/chunks/scheduler.91335a88.js","_app/immutable/chunks/index.67e9674d.js","_app/immutable/chunks/singletons.7148629f.js"];
export const stylesheets = [];
export const fonts = [];
