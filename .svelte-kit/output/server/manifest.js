export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CPxtf3bl.js","app":"_app/immutable/entry/app.DPJp1r5N.js","imports":["_app/immutable/entry/start.CPxtf3bl.js","_app/immutable/chunks/entry.DqOQxnsL.js","_app/immutable/chunks/runtime.Ja3GGWF_.js","_app/immutable/entry/app.DPJp1r5N.js","_app/immutable/chunks/runtime.Ja3GGWF_.js","_app/immutable/chunks/disclose-version.CeGfHQjQ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
		},
		server_assets: {}
	}
}
})();
