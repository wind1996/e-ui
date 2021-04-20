cd ./dist
git init
git add .
git commit -m deploy
git push -f git@github.com:wind1996/e-ui.git master:gh-pages
