git init example
ls
cd example\
git status
touch file
git add file
git commit -m 'first'
git config --global user.email "angelo.galanti@gmail.com"
git config --global user.name "Angelo Galanti"
git commit -m 'first'
git status
git log
git push
git remote add origin https://github.com/angelogalanti/example.git
git push -u origin master
git pull
ls
