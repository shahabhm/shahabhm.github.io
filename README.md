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
