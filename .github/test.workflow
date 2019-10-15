workflow "Build, Test, and Publish" {
  on = "push"
  resolves = [
    "Test"
  ]
}

action "Build" {
  uses = "golfzaptw/cypress-docker@master"
  args = "install"
}

action "Test" {
  needs = "Build"
  uses = "golfzaptw/cypress-docker@master"
  args = "cypress:verify"
}
