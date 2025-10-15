module.exports = function (commit, context) {
  if (!commit.type) return;

  const fullHash = commit.hash || "";

  return `* ${commit.subject} commit ID(${fullHash})\n`;
};
