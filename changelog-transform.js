module.exports = function (commit, context) {
  const fullHash = commit.hash || "";
  let type = commit.type ? commit.type : "other";
  let message = commit.subject || commit.header || "";

  // Capitalize first letter of type for section headers
  type = type.toLowerCase();

  return `* ${message} commit ID(${fullHash})`;
};
