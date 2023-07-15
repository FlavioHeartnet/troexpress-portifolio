export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Magalu.png","background.jpg","background.jpg:Zone.Identifier","bg2.jpg","bg2.jpg:Zone.Identifier","c-e-a-logo.png","caedu.png","ceadis.png","esplanada-moveis.png","favicon.png","logos/Magalu.png","logos/Magalu.png:Zone.Identifier","logos/c-e-a-logo.png","logos/c-e-a-logo.png:Zone.Identifier","logos/caedis.jpg","logos/caedis.jpg:Zone.Identifier","logos/caedu.png","logos/caedu.png:Zone.Identifier","logos/esplanada-moveis.png","logos/esplanada-moveis.png:Zone.Identifier","logos/renner.png","logos/renner.png:Zone.Identifier","logos/torra-4096.png:Zone.Identifier","logos/torra.png","man.png","man.png:Zone.Identifier","renner.png","torra.png","truck.png","truck.png:Zone.Identifier"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.b9890e44.js","app":"_app/immutable/entry/app.a6ad2d4c.js","imports":["_app/immutable/entry/start.b9890e44.js","_app/immutable/chunks/scheduler.91335a88.js","_app/immutable/chunks/singletons.7148629f.js","_app/immutable/entry/app.a6ad2d4c.js","_app/immutable/chunks/scheduler.91335a88.js","_app/immutable/chunks/index.67e9674d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
