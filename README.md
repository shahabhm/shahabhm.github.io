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

