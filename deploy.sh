#! /usr/bin/env sh

# abort on error
set -e


npm run build

# cd into the build directory
cd dist

# create a new git repo
git init
git add -A
git commit -m "deploy"

# push the content to the gh-pages branch to our github repo
git push -f git@github.com:acadea/course_react_deep_dive.git main:gh-pages

cd - 
