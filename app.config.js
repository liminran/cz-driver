module.exports = ({ config }) => {
	const publicUrl = process.env.EXPO_PUBLIC_ROUTER_ORIGIN || process.env.PUBLIC_URL || null;
	return {
		...config,
		router: {
			// 当部署在 GitHub Pages 的子路径时，设置完整 origin，例如 https://<user>.github.io/<repo>
			origin: publicUrl || false,
		},
		extra: {
			...(config.extra || {}),
			publicUrl,
		},
	};
}; 