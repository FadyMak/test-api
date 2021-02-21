// const glob = require("glob");
// const xx = require("path-to-regexp");
const { promisify } = require("util");
const { exec: execCallback } = require("child_process");
const exec = promisify(execCallback);

(async () => {
  console.log(
    await exec(
      "aws s3 cp /build/api/users/routes/patch_user.js s3://lambda-builds-test/patch_user.js"
    )
  );
})();

module.exports = {
  method: "GET",
  path: "/api/users",
  handler: async (context) => {
    console.log("Getting all users....");
    return;
  },
};
