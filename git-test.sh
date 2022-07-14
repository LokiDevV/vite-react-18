git add .
DATE=$(date)
git commit -m "changes made on $DATE"

git push

osascript -e "display notification 'pushed to remote' with title 'SUCCESS'"