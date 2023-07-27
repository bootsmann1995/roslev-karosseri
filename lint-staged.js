// Assuming you have a lint-staged.js script in your project

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require("child_process");

const stagedFiles = execSync("git diff --cached --name-only", { encoding: "utf-8" }).split("\n");

stagedFiles.forEach((file) => {
	if (file.trim().length > 0) {
		try {
			execSync(`eslint --ext .js,.ts,.vue ${file}`);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(`Linting failed at ${file}`);
			process.exitCode = 22;
		}
	}
});
