# soft-lab1

################################################################################################
--01
Git folder is a directory that contains all the metadata and object data necessary for a Git repository to function.
Git directory is created to store the following information:
• Configuration Settings: Stored in the config file, which contains repository-specific configurations, such as user details and settings.
• Commit History: Stored in the refs and logs directories.
• Hooks: The hooks directory contains client-side or server-side scripts that Git executes for various events, such as committing or receiving pushed commits.
• Additional Metadata: Various other files and directories store additional metadata and state information, such as the info and packed-refs files.
• Stores more info like: Obj DB, Index(Staging Area), Head,... .

Command: using by git init.

When you run git init in a directory, Git initializes a new repository and creates a .git directory within it. This directory contains all the subdirectories and files mentioned above, setting up the necessary structure for tracking the project’s history and changes.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--02
"Atomic" in Git refers to making a single, self-contained change that doesn't break the repository. “atomic” refers to an operation that is indivisible and irreducible, meaning it is performed as a single, complete unit without any possibility of partial completion or interruption.

In an atomic commit, you make a single logical change in a single commit.
By anotherword, it should represents a single, coherent change. The principle of atomic commits dictates that each commit should:
  Be Self-Contained: The commit should represent a single logical change, such as fixing a bug or adding a feature, without mixing unrelated changes.
  Be Fully Functional: The repository should be in a working state after the commit, meaning it compiles and passes tests (if applicable).
  Be Reversible: If needed, the commit can be reverted without causing partial changes that could break the codebase.
Atomic commits help in maintaining a clean and understandable history, making it easier to review, test, and debug.

In an atomic pull-request, the changes are self-contained, testable, and don't depend on each other.
It help maintain code quality, make the review process more efficient, and simplify the integration of changes into the main codebase. 
It minimizes the risk of introducing bugs and makes it easier to understand the evolution of the code over time.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--03
fetch: 
  Retrieves changes from a remote repository without merging.
  Downloads changes from the remote repository but does not apply them.

pull: 
  Combines a fetch and a merge in one step to update your branch.
  Downloads changes and immediately merges them into your current branch.

merge: 
  Integrates changes from another branch into your current branch.
  Combines changes from one branch into your current branch, creating a merge commit.

rebase: 
  Moves or combines a sequence of commits to a new base commit.
  Re-applies commits from your branch onto another branch, creating a linear history.

cherry-pick: 
  Selects and applies specific commits from one branch to another.
  Applies the changes from a specific commit to your current branch without merging entire branches.
  
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--03
reset: 
  Moves the current branch to a different commit, discarding commits.
  Use reset to undo changes in your commit history. It is typically used to remove unwanted commits from a branch
  
revert: 
  Creates new commits to undo specific changes made in the commit history.
  Use revert to undo the changes from a previous commit in a safe way that preserves the integrity of the repository’s history. This is useful for reversing changes in a shared or public branch.
  
restore: 
  Restores a file in your working directory to a specific commit state.
  Use restore to discard changes in the working directory or to revert files to their state in a specific commit or the index. This command can be used to undo changes before staging or committing

  swich:
     switch is used to change branches more safely and clearly than checkout. It updates the working directory and index to match the specified branch.
     Use switch to change branches without the risk of mistakenly checking out files or commits. It helps avoid confusion between checking out files and changing branches.

checkout:
  serves multiple purposes: switching branches, updating files in the working directory to match a commit, and creating new branches. It updates the working directory and index to reflect the specified branch, commit, or paths.
  Use checkout to switch branches, revert files to a specific commit, or create new branches. However, it can be confusing due to its multiple uses, which led to the introduction of switch and restore.


  
Differences:
  •  Reset: Alters the commit history by moving the branch pointer and optionally updating the index and working directory.
  •  Revert: Creates a new commit that undoes the changes introduced by a specified commit, preserving the commit history.
  •  Restore: Restores files in the working directory or index to their state in a specific commit or the index.
  •  Switch: Changes branches safely and clearly, avoiding the confusion of checkout.
  •  Checkout: A versatile command for switching branches, updating the working directory to match a commit, and creating new branches, but can be confusing due to its multiple purposes.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  --04
  Stage" refers to preparing changes for the next commit. You use git add to stage changes.
  In Git, the terms stage and index refer to an intermediate area where changes are collected before they are committed to the repository.
  An intermediate area where changes are collected and reviewed before committing.

  The stash command temporarily saves changes in your working directory and index (staging area) that you do not want to commit yet. 
  It allows you to clean your working directory without committing changes, so you can work on something else.
  Use git stash when you need to switch branches or perform other work but do not want to commit your current changes. 
  This is useful when you have unfinished work that you need to temporarily set aside.
  
  The stash command temporarily saves uncommitted changes to allow you to switch branches or perform other actions without losing work in progress.
  Temporarily saves changes in the working directory and index so you can work on something else without committing those changes.
  
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

  
    
