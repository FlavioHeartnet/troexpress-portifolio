

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.330f025c.js","_app/immutable/chunks/scheduler.91335a88.js","_app/immutable/chunks/index.67e9674d.js"];
export const stylesheets = ["_app/immutable/assets/0.f194ccf8.css"];
export const fonts = [];
