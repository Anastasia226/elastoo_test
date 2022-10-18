# abort on errors
set -e

# build
echo Linting..
npm run lint
echo Building. this may take a minute...
npm run build

# deploy
echo Deploying..
git add -A
git commit -m 'deploy'
git push -f git@github.com:anastasia226/elastoo_test.git master
