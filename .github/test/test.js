const getMarkdownStats = require("md-stats");
const path = "../../attendances";
const MINIMAL_WORDS = 150;

(async () => {
  const stats = await getMarkdownStats(path);
  stats.files.forEach((file) => {
    if (file.words < MINIMAL_WORDS) {
      console.error(`file ${file.name} doesn't meet summary requirements (minimum ${MINIMAL_WORDS} words): ${file.words} words`);
      process.exit(1);
    }
  });
  console.log(`All summary passed`);
  process.exit(0);
})();
