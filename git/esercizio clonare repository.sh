x@PROF:~/Desktop$ git clone https://github.com/angelogalanti/2018-19_5J.git
Cloning into '2018-19_5J'...
remote: Enumerating objects: 41, done.
remote: Counting objects: 100% (41/41), done.
remote: Compressing objects: 100% (35/35), done.
remote: Total 41 (delta 11), reused 5 (delta 1), pack-reused 0
Unpacking objects: 100% (41/41), done.
x@PROF:~/Desktop$ cd 2018-19_5J/
x@PROF:~/Desktop/2018-19_5J$ ls
comandi git.sh  esercizio git 2 sincronizzazione repository remoto.sh  README.md
x@PROF:~/Desktop/2018-19_5J$ touch repositoryclonato.txt
x@PROF:~/Desktop/2018-19_5J$ git add .
x@PROF:~/Desktop/2018-19_5J$ git commit -m "nuovo file repositoryclonato.txt"
[master d005995] nuovo file repositoryclonato.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 repositoryclonato.txt
x@PROF:~/Desktop/2018-19_5J$ git push origin master
Username for 'https://github.com': angelogalanti
Password for 'https://angelogalanti@github.com': 
Counting objects: 3, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 303 bytes | 303.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/angelogalanti/2018-19_5J.git
   b43592f..d005995  master -> master

