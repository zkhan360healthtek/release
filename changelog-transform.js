module.exports = function (commit, context) {
  if (!commit.type || !commit.subject) return;

  // Use full commit hash
  const fullHash = commit.hash || "";

  // Generate markdown link for commit
  const commitLink = fullHash
    ? `[${fullHash}](https://github.com/${context.owner}/${context.repository}/commit/${fullHash})`
    : "";

  return `* ${commit.subject} (${commitLink})\n`;
};
