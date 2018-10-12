# come sincronizzare un repository locale su github
# leggere il seguente link
# https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/
# prima creare un nuovo repository su github chiamato example
mkdir example
cd example
git init
touch file
echo "ciao" >> file
git add .
# le due istruzioni seguenti solo la prima volta che si usa git
# git config --global user.email "angelo.galanti@gmail.com"
# git config --global user.name "Angelo Galanti"
git commit -m "First commit"
git remote add origin https://github.com/angelogalanti/example.git
git push origin master

# aggiungere un file nuovo da github
# scaricare le nuove modifiche dal repository 
# remoto su github sul repository locale

# controllare quali file ci sono
ls
# scaricare i file
git pull origin master
# ricontrollare quali file ci sono
ls
