import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
  try {
    const validLabels = core.getInput('valid-labels', {required: true}).split(',');
    core.debug(`Verified PR match valid labels: ${validLabels}`);

    const labels = github.context!.payload!.pull_request!.labels;
    console.log(`PR labels: ${labels}`);

    if (!labels || labels === '' || !labels.split(',').some(l => validLabels.includes(l))) {
      core.setFailed(`Please select one of the required labels for this PR: ${validLabels}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
