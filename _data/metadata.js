let data = {
	username: "nutriot", // No leading @ here
	homeLabel: "Home",
	homeUrl: "https://nutriot.github.com/twitter",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;