git add .
DATE=$(date +%F)
git commit -m "changes made on $DATE"
git push
osascript -e "display notification 'pushed to remote' with title 'SUCCESS'"