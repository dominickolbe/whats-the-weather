#!/bin/bash

echo " " && echo "### Start release task ###" && echo " "

echo "➜ delete node_modules and yarn.lock" && echo " "
rm -rf node_modules/ yarn.lock yarn-error.log lib/

echo "➜ run yarn cache clean" && echo " "
yarn cache clean --silent

echo "➜ run yarn install" && echo " "
yarn install --silent

echo "➜ build" && echo " "
yarn build || exit 1;

echo "➜ run tests" && echo " "
yarn test || exit 1;

echo "➜ create new version" && echo " "
npx standard-version

echo "➜ build again with new version" && echo " "
yarn build || exit 1;

echo "➜ git push" && echo " "
git push --follow-tags origin master

echo "➜ release new version on npm" && echo " "
npm publish