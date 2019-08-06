const builder = require("electron-builder");
const fs = require("fs");
const path = require("path");
const packagePath = path.resolve(__dirname, "../package.json");

console.log(packagePath);

const packagejson = JSON.parse(fs.readFileSync(packagePath));
console.log(packagejson);

builder.build({
	// platform: "win", //このバージョンではプラットフォームの指定はいらないっぽい
	config: {
	"appId": `com.umetaman.${packagejson.name}`,
	"win": {
		"target": "zip"
		}
	}
});