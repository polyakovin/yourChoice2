# changing all project-name recordings in all files
new_repo=new_repo
new_project_name=new_project_name
for file_name in angular.json package.json src/app/main/main.component.html src/index.html; do
  echo $(sed "s/abracadabra/$new_project_name/g" < $file_name) > $file_name
done

# changing project folder name
# mv ../ngTemplate "../$new_project_name"

# changing git repositiory
# git remote remove origin
# git remote add origin $new_repo
# git add .
# git commit -m "project renamed to $new_project_name"
# git push --set-upstream origin master

# install all the dependencies
# npm i