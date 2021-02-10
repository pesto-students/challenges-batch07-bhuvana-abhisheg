# Git Excercise : Bhuvaneswari K

Learnings & Insights:

1. Used below command to configure VSCode as default editor.
   git config --global core.editor "code --wait" 
2. Created a new branch git-exercise and started working on the git-exercise branch.
   git checkout -b git-exercise
3. Added a new file 'Bhuvana.txt' and performed commit & push operations.
   git add Bhuvana.txt
   git commit -m "Initial file"
   git push -u origin HEAD
4. Inspected the committed file with commit id
   git cat-file -t 1ce472e
   git cat-file -p 1ce472e
5. Used below command to check the files in staging area.
   git ls-files -s
6. Use `git reset` to undo the staging.
7. Stashed changes using below command.
   git stash save "Work in Progress: Modified file for new feature"
   git stash list
8. Added lightweight tag 'DailyExerciseDay1' using below command.
   git tag "DailyExerciseDay1"
   git log
9. Added annotated tag 'ExerciseDay1AnnotatedTag' using below command.
   git tag -a "ExerciseDay1AnnotatedTag" -m "Annotated tag for git-exercise"
   git show ExerciseDay1AnnotatedTag
10. Pushed tags to the remote repository by running below command.
    git push --tags
11. Checked options in git log to see the filtered history of repository.
    git log --since ="5 hour ago"