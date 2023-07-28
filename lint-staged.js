// Assuming you have a lint-staged.js script in your project

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require("child_process");

const stagedFiles = execSync("git diff --cached --name-only", { encoding: "utf-8" }).split("\n");
const extensions = ["js", "vue", "ts"];
const ignoredFiles = ["generated-types/index", ".json"];

const checkForAllowedFiles = (file) => {
	let lintFile = false;
	extensions.forEach((x) => {
		if (file.indexOf(x) !== -1) {
			lintFile = true;
		}
	});
	return lintFile;
};

const checkForIgnoredFile = (file) => {
	let ignoreFile = false;
	ignoredFiles.forEach((x) => {
		if (file.indexOf(x) !== -1) {
			ignoreFile = true;
		}
	});
	return ignoreFile;
};

stagedFiles.forEach((file, i) => {
	if (file.trim().length > 0) {
		// eslint-disable-next-line no-console
		console.log("linting: ", file, ` - ${i + 1}/${stagedFiles.length}`);
		let lintFile = checkForAllowedFiles(file);
		let ignoreFile = checkForIgnoredFile(file);

		if (lintFile && !ignoreFile) {
			try {
				execSync(`eslint --ext .js,.ts,.vue ${file}`);
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error(`Linting failed at ${file}`);
				process.exitCode = 22;
			}
		}
	}
});
