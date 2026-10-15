import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "git-basics",
    title: "Git Basics",
    icon: "📘",
    description:
      "Understand version control, Git, repositories, and the basic Git workflow.",

    sections: [
      {
        title: "What is Git?",
        content: (
          <>
            <p>
              <strong>Git</strong> is a distributed version control system
              used to track changes in source code and other files.
            </p>

            <p>
              Git allows developers to record versions of their work, compare
              changes, restore previous versions, create branches and
              collaborate safely.
            </p>

            <div className="lesson-note">
              <strong>Remember:</strong> Git is the version control tool.
              GitHub is a platform that provides hosting and collaboration
              features around Git repositories.
            </div>
          </>
        ),
      },

      {
        title: "Why Use Version Control?",
        content: (
          <>
            <p>
              Without version control, tracking changes across a project can
              become difficult. Git provides a history of changes and helps
              developers work safely.
            </p>

            <ul>
              <li>Track changes over time.</li>
              <li>Restore previous versions.</li>
              <li>Work on features independently.</li>
              <li>Collaborate with other developers.</li>
              <li>Review changes before integrating them.</li>
            </ul>
          </>
        ),
      },

      {
        title: "The Basic Git Workflow",
        content: (
          <>
            <p>
              A common Git workflow consists of modifying files, staging
              changes and committing them.
            </p>

            <CodeBlock
              code={`git status

git add .

git commit -m "Add homepage"

git status`}
            />

            <p>
              <code>git status</code> shows the current state of your working
              directory and staging area.
            </p>

            <p>
              <code>git add</code> stages changes, while <code>git commit</code>
              records those staged changes in Git history.
            </p>
          </>
        ),
      },

      {
        title: "Git States",
        content: (
          <>
            <p>
              Files commonly move through different states during the Git
              workflow.
            </p>

            <ol>
              <li>
                <strong>Working directory</strong> — files you are currently
                modifying.
              </li>
              <li>
                <strong>Staging area</strong> — changes selected for the next
                commit.
              </li>
              <li>
                <strong>Repository</strong> — committed history stored by Git.
              </li>
            </ol>

            <CodeBlock
              code={`Working Directory
       ↓
    git add
       ↓
Staging Area
       ↓
  git commit
       ↓
Repository`}
            />
          </>
        ),
      },
    ],

    keyPoints: [
      "Git is a distributed version control system.",
      "Git tracks changes to files.",
      "The staging area prepares changes for a commit.",
      "Commits create snapshots in Git history.",
      "Git and GitHub are related but are not the same thing.",
    ],

    mistakes: [
      "Thinking Git and GitHub are the same thing.",
      "Committing without checking what changed.",
      "Putting everything into one huge commit.",
      "Ignoring Git status before making changes.",
    ],

    quiz: [
      {
        question: "What is Git?",
        options: [
          "A database",
          "A version control system",
          "A programming language",
          "A web browser",
        ],
        answer: 1,
      },
      {
        question: "Which command shows the current Git state?",
        options: ["git check", "git status", "git state", "git show-state"],
        answer: 1,
      },
      {
        question: "Which command records staged changes?",
        options: ["git save", "git push", "git commit", "git record"],
        answer: 2,
      },
    ],
  },

  {
    id: "installation-configuration",
    title: "Git Installation & Configuration",
    icon: "⚙️",
    description:
      "Install Git and configure your identity and common Git settings.",

    sections: [
      {
        title: "Installing Git",
        content: (
          <>
            <p>
              Git can be installed on Windows, macOS and Linux. After
              installation, you can verify it from a terminal.
            </p>

            <CodeBlock
              code={`git --version`}
            />

            <p>
              If Git is installed correctly, the command prints the installed
              Git version.
            </p>
          </>
        ),
      },

      {
        title: "Configure Your Name",
        content: (
          <>
            <p>
              Git associates commits with an author name. You can configure
              your global Git username with:
            </p>

            <CodeBlock
              code={`git config --global user.name "Your Name"`}
            />

            <p>
              The <code>--global</code> option applies the setting to your
              user account.
            </p>
          </>
        ),
      },

      {
        title: "Configure Your Email",
        content: (
          <>
            <p>
              Git also stores an email address with commits.
            </p>

            <CodeBlock
              code={`git config --global user.email "you@example.com"`}
            />

            <p>
              Use an email configuration appropriate for the Git hosting
              account you use.
            </p>
          </>
        ),
      },

      {
        title: "View Configuration",
        content: (
          <>
            <p>
              You can inspect your Git configuration using:
            </p>

            <CodeBlock
              code={`git config --list`}
            />

            <p>
              You can also inspect a particular setting.
            </p>

            <CodeBlock
              code={`git config user.name
git config user.email`}
            />
          </>
        ),
      },
    ],

    keyPoints: [
      "git --version verifies the installation.",
      "user.name identifies the author of commits.",
      "user.email is stored with commits.",
      "--global applies configuration across repositories for your user.",
      "git config can inspect and modify Git settings.",
    ],

    mistakes: [
      "Skipping Git installation verification.",
      "Configuring the wrong email address.",
      "Using global configuration when a repository-specific setting is required.",
      "Sharing sensitive configuration files unnecessarily.",
    ],

    quiz: [
      {
        question: "Which command checks the installed Git version?",
        options: [
          "git version-check",
          "git --version",
          "git install",
          "git check",
        ],
        answer: 1,
      },
      {
        question: "Which command configures your global Git name?",
        options: [
          "git user name",
          "git config --global user.name",
          "git name --global",
          "git set-name",
        ],
        answer: 1,
      },
      {
        question: "Which command displays Git configuration?",
        options: ["git config --list", "git settings", "git show-config-only", "git list-config"],
        answer: 0,
      },
    ],
  },

  {
    id: "repositories",
    title: "Repositories",
    icon: "📁",
    description:
      "Learn how Git repositories work and how to create or clone them.",

    sections: [
      {
        title: "What is a Repository?",
        content: (
          <>
            <p>
              A <strong>Git repository</strong> is a project tracked by Git.
              It contains the project's files and Git's history and metadata.
            </p>

            <p>
              The repository allows Git to understand how files changed over
              time.
            </p>
          </>
        ),
      },

      {
        title: "Initialize a Repository",
        content: (
          <>
            <p>
              To turn an existing project folder into a Git repository, use:
            </p>

            <CodeBlock
              code={`cd my-project

git init`}
            />

            <p>
              Git creates a hidden <code>.git</code> directory containing
              repository metadata.
            </p>
          </>
        ),
      },

      {
        title: "Check Repository Status",
        content: (
          <>
            <CodeBlock
              code={`git status`}
            />

            <p>
              This command is one of the most useful Git commands. It shows
              modified files, staged files, untracked files and the current
              branch.
            </p>
          </>
        ),
      },

      {
        title: "Clone a Repository",
        content: (
          <>
            <p>
              To copy an existing remote repository to your computer, use
              <code>git clone</code>.
            </p>

            <CodeBlock
              code={`git clone https://github.com/user/project.git`}
            />

            <p>
              Cloning downloads the repository and its history to your local
              machine.
            </p>
          </>
        ),
      },

      {
        title: "The .gitignore File",
        content: (
          <>
            <p>
              The <code>.gitignore</code> file tells Git which files or
              directories should normally not be tracked.
            </p>

            <CodeBlock
              code={`node_modules/
.env
dist/
*.log`}
            />

            <div className="lesson-note">
              <strong>Important:</strong> Never commit secrets such as API
              keys or passwords to a public repository.
            </div>
          </>
        ),
      },
    ],

    keyPoints: [
      "A repository contains project files and Git history.",
      "git init creates a repository in an existing folder.",
      "git clone copies an existing repository.",
      "git status shows repository state.",
      ".gitignore excludes files from normal tracking.",
    ],

    mistakes: [
      "Running git init in the wrong directory.",
      "Committing node_modules.",
      "Committing .env files containing secrets.",
      "Not checking repository status.",
    ],

    quiz: [
      {
        question: "Which command creates a Git repository?",
        options: ["git create", "git init", "git new", "git repository"],
        answer: 1,
      },
      {
        question: "Which file tells Git which files to ignore?",
        options: [".gitconfig", ".gitignore", ".ignoregit", ".gitexclude"],
        answer: 1,
      },
      {
        question: "Which command copies an existing repository?",
        options: ["git copy", "git download", "git clone", "git fetch-project"],
        answer: 2,
      },
    ],
  },

  {
    id: "commit-history",
    title: "Commit & History",
    icon: "📝",
    description:
      "Learn how to create meaningful commits and inspect project history.",

    sections: [
      {
        title: "What is a Commit?",
        content: (
          <>
            <p>
              A <strong>commit</strong> is a recorded snapshot of staged
              changes in a Git repository.
            </p>

            <CodeBlock
              code={`git add index.html

git commit -m "Add homepage structure"`}
            />

            <p>
              A good commit represents a logical unit of work.
            </p>
          </>
        ),
      },

      {
        title: "Writing Commit Messages",
        content: (
          <>
            <p>
              Commit messages should clearly describe what the commit changes.
            </p>

            <CodeBlock
              code={`git commit -m "Add login form validation"

git commit -m "Fix navbar mobile layout"`}
            />

            <p>
              Avoid vague messages such as <code>"changes"</code>,
              <code>"update"</code> or <code>"stuff"</code>.
            </p>
          </>
        ),
      },

      {
        title: "View Commit History",
        content: (
          <>
            <CodeBlock
              code={`git log`}
            />

            <p>
              A shorter and more visual history can be viewed with:
            </p>

            <CodeBlock
              code={`git log --oneline`}
            />
          </>
        ),
      },

      {
        title: "Inspect Changes",
        content: (
          <>
            <p>
              <code>git diff</code> shows changes that have not been staged.
            </p>

            <CodeBlock
              code={`git diff`}
            />

            <p>
              To inspect staged changes, you can use:
            </p>

            <CodeBlock
              code={`git diff --staged`}
            />
          </>
        ),
      },

      {
        title: "Undoing Changes",
        content: (
          <>
            <p>
              Git provides different commands for undoing changes depending on
              whether they are unstaged, staged or committed.
            </p>

            <CodeBlock
              code={`git restore file.txt

git restore --staged file.txt`}
            />

            <p>
              Always understand which state the file is in before using an
              undo command.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "A commit records staged changes.",
      "Commit messages should be clear and meaningful.",
      "git log displays commit history.",
      "git diff helps inspect changes.",
      "Undo commands should be chosen based on the current Git state.",
    ],

    mistakes: [
      "Writing meaningless commit messages.",
      "Creating one giant commit for unrelated changes.",
      "Not checking a diff before committing.",
      "Using destructive commands without understanding them.",
    ],

    quiz: [
      {
        question: "What does a Git commit represent?",
        options: [
          "A remote server",
          "A snapshot of staged changes",
          "A branch name",
          "A GitHub account",
        ],
        answer: 1,
      },
      {
        question: "Which command shows commit history?",
        options: ["git history", "git log", "git commits", "git timeline"],
        answer: 1,
      },
      {
        question: "Which command shows unstaged changes?",
        options: ["git diff", "git changes", "git compare", "git inspect"],
        answer: 0,
      },
    ],
  },

  {
    id: "branches",
    title: "Branches",
    icon: "🌿",
    description:
      "Learn how Git branches allow developers to work on features independently.",

    sections: [
      {
        title: "What is a Branch?",
        content: (
          <>
            <p>
              A Git branch is a movable pointer to a line of commits. Branches
              allow developers to work on changes independently from other
              development work.
            </p>

            <CodeBlock
              code={`git branch feature-login`}
            />
          </>
        ),
      },

      {
        title: "Create and Switch Branches",
        content: (
          <>
            <p>
              A traditional way to create and switch to a branch is:
            </p>

            <CodeBlock
              code={`git branch feature-login
git switch feature-login`}
            />

            <p>
              Git also provides a shortcut:
            </p>

            <CodeBlock
              code={`git switch -c feature-login`}
            />
          </>
        ),
      },

      {
        title: "List Branches",
        content: (
          <>
            <CodeBlock
              code={`git branch`}
            />

            <p>
              The current branch is normally marked with an asterisk.
            </p>
          </>
        ),
      },

      {
        title: "Working on a Feature Branch",
        content: (
          <>
            <CodeBlock
              code={`git switch -c feature-navbar

# make changes

git add .

git commit -m "Add responsive navbar"`}
            />

            <p>
              Feature branches help keep unfinished work separate from the
              main development branch.
            </p>
          </>
        ),
      },

      {
        title: "Deleting a Branch",
        content: (
          <>
            <p>
              After a branch is no longer needed, it can be deleted locally.
            </p>

            <CodeBlock
              code={`git branch -d feature-navbar`}
            />

            <p>
              A branch that contains unmerged work may require a force delete,
              which should be used carefully.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "Branches provide separate lines of development.",
      "git switch changes branches.",
      "git switch -c creates and switches to a branch.",
      "Feature branches help isolate work.",
      "Unused branches can be deleted.",
    ],

    mistakes: [
      "Doing feature work directly on main without a reason.",
      "Forgetting which branch is currently active.",
      "Creating branches with unclear names.",
      "Deleting branches without checking whether important work exists.",
    ],

    quiz: [
      {
        question: "Why are branches useful?",
        options: [
          "They store passwords",
          "They isolate lines of development",
          "They replace commits",
          "They create databases",
        ],
        answer: 1,
      },
      {
        question: "Which command creates and switches to a new branch?",
        options: [
          "git branch -new",
          "git switch -c",
          "git create-branch",
          "git checkout-new",
        ],
        answer: 1,
      },
      {
        question: "Which command lists local branches?",
        options: ["git list", "git branches", "git branch", "git show-branches"],
        answer: 2,
      },
    ],
  },

  {
    id: "merging",
    title: "Merging",
    icon: "🔀",
    description:
      "Learn how to combine work from different Git branches and resolve conflicts.",

    sections: [
      {
        title: "What is Merging?",
        content: (
          <>
            <p>
              <strong>Merging</strong> combines the changes from one branch
              into another branch.
            </p>

            <CodeBlock
              code={`git switch main
git merge feature-login`}
            />

            <p>
              The command above merges <code>feature-login</code> into the
              currently checked-out <code>main</code> branch.
            </p>
          </>
        ),
      },

      {
        title: "Fast-Forward Merge",
        content: (
          <>
            <p>
              A fast-forward merge can happen when the target branch has no
              commits that diverged from the source branch.
            </p>

            <CodeBlock
              code={`main:     A---B
                \
feature:          C---D

After merge:

main:     A---B---C---D`}
            />
          </>
        ),
      },

      {
        title: "Merge Commit",
        content: (
          <>
            <p>
              When branches have diverged, Git may create a merge commit that
              combines their histories.
            </p>

            <CodeBlock
              code={`A---B---C
     \
      D---E`}
            />

            <p>
              A merge can preserve both lines of development in the history.
            </p>
          </>
        ),
      },

      {
        title: "Merge Conflicts",
        content: (
          <>
            <p>
              A merge conflict occurs when Git cannot automatically determine
              how conflicting changes should be combined.
            </p>

            <p>
              Conflict markers can look like this:
            </p>

            <CodeBlock
              code={`<<<<<<< HEAD
your current changes
=======
incoming changes
>>>>>>> feature-login`}
            />

            <p>
              The developer must manually choose the correct content, remove
              the conflict markers, stage the resolved file and complete the
              merge.
            </p>
          </>
        ),
      },

      {
        title: "Resolving a Conflict",
        content: (
          <>
            <CodeBlock
              code={`# edit the conflicted file

git add conflicted-file.js

git commit -m "Resolve merge conflict"`}
            />

            <div className="lesson-note">
              <strong>Tip:</strong> Never blindly choose one side of a
              conflict. Understand what both changes do before resolving it.
            </div>
          </>
        ),
      },
    ],

    keyPoints: [
      "Merging combines changes from branches.",
      "The destination branch must be checked out before merging.",
      "Fast-forward merges are possible when histories have not diverged.",
      "Conflicts happen when Git cannot automatically combine changes.",
      "Conflicts must be resolved before the merge can be completed.",
    ],

    mistakes: [
      "Merging into the wrong branch.",
      "Ignoring conflict markers.",
      "Resolving conflicts without understanding the code.",
      "Forgetting to test after resolving a conflict.",
    ],

    quiz: [
      {
        question: "Which command merges a branch into the current branch?",
        options: ["git combine", "git merge", "git join", "git integrate"],
        answer: 1,
      },
      {
        question: "What is a merge conflict?",
        options: [
          "A missing Git installation",
          "A situation where Git cannot automatically combine conflicting changes",
          "A deleted repository",
          "A GitHub login error",
        ],
        answer: 1,
      },
      {
        question: "What should you do after manually resolving a conflict?",
        options: [
          "Delete the repository",
          "Stage the resolved files and complete the merge",
          "Run git init again",
          "Create a new GitHub account",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: "github-basics",
    title: "GitHub Basics",
    icon: "🐙",
    description:
      "Understand GitHub and how it extends Git with hosting and collaboration features.",

    sections: [
      {
        title: "What is GitHub?",
        content: (
          <>
            <p>
              <strong>GitHub</strong> is a platform for hosting Git
              repositories and collaborating on software projects.
            </p>

            <p>
              GitHub provides features such as pull requests, issues,
              discussions, project management and code review.
            </p>

            <div className="lesson-note">
              <strong>Remember:</strong> Git can work completely locally.
              GitHub is a remote platform that can host and facilitate
              collaboration around Git repositories.
            </div>
          </>
        ),
      },

      {
        title: "Repositories on GitHub",
        content: (
          <>
            <p>
              A GitHub repository can contain source code, documentation,
              configuration files, issues and other project information.
            </p>

            <p>
              Repositories can be public or private depending on the project's
              requirements and account permissions.
            </p>
          </>
        ),
      },

      {
        title: "README Files",
        content: (
          <>
            <p>
              A <code>README.md</code> file explains what a project is and how
              people can use it.
            </p>

            <CodeBlock
              code={`# My Project

A web application built with React.

## Installation

npm install

## Run

npm run dev`}
            />

            <p>
              A useful README makes it easier for others to understand and run
              the project.
            </p>
          </>
        ),
      },

      {
        title: "GitHub Issues",
        content: (
          <>
            <p>
              GitHub Issues can be used to track bugs, feature requests, tasks
              and other project discussions.
            </p>

            <ul>
              <li>Report bugs.</li>
              <li>Plan features.</li>
              <li>Track tasks.</li>
              <li>Discuss implementation ideas.</li>
            </ul>
          </>
        ),
      },
    ],

    keyPoints: [
      "GitHub hosts Git repositories.",
      "GitHub supports collaboration and code review.",
      "Repositories can be public or private.",
      "README files explain projects.",
      "Issues can track bugs and tasks.",
    ],

    mistakes: [
      "Thinking GitHub is required for Git to work.",
      "Publishing secrets in public repositories.",
      "Leaving a project without documentation.",
      "Ignoring repository access permissions.",
    ],

    quiz: [
      {
        question: "What is GitHub primarily used for?",
        options: [
          "Hosting and collaborating on Git repositories",
          "Replacing HTML",
          "Running operating systems",
          "Creating databases",
        ],
        answer: 0,
      },
      {
        question: "Which file commonly documents a project?",
        options: ["PROJECT.txt", "README.md", "ABOUT.git", "DOCS.exe"],
        answer: 1,
      },
      {
        question: "What can GitHub Issues track?",
        options: [
          "Only passwords",
          "Bugs and tasks",
          "Only images",
          "Only Git versions",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: "remote-repositories",
    title: "Remote Repositories",
    icon: "☁️",
    description:
      "Learn how local Git repositories communicate with remote repositories such as GitHub.",

    sections: [
      {
        title: "What is a Remote?",
        content: (
          <>
            <p>
              A <strong>remote repository</strong> is another copy of a Git
              repository, commonly hosted on a service such as GitHub.
            </p>

            <p>
              Your local repository can exchange commits and branches with the
              remote repository.
            </p>
          </>
        ),
      },

      {
        title: "Adding a Remote",
        content: (
          <>
            <p>
              A local repository can be connected to a remote using:
            </p>

            <CodeBlock
              code={`git remote add origin https://github.com/user/project.git`}
            />

            <p>
              <code>origin</code> is the conventional name for the primary
              remote.
            </p>
          </>
        ),
      },

      {
        title: "Viewing Remotes",
        content: (
          <>
            <CodeBlock
              code={`git remote -v`}
            />

            <p>
              This displays configured remote names and their URLs.
            </p>
          </>
        ),
      },

      {
        title: "Pushing Changes",
        content: (
          <>
            <p>
              <code>git push</code> uploads local commits to a remote
              repository.
            </p>

            <CodeBlock
              code={`git push origin main`}
            />

            <p>
              The first push of a new branch can establish an upstream
              relationship.
            </p>

            <CodeBlock
              code={`git push -u origin feature-login`}
            />
          </>
        ),
      },

      {
        title: "Fetching and Pulling",
        content: (
          <>
            <p>
              <code>git fetch</code> downloads information about remote
              changes without automatically merging them into your current
              branch.
            </p>

            <CodeBlock
              code={`git fetch origin`}
            />

            <p>
              <code>git pull</code> typically fetches remote changes and then
              integrates them into the current branch according to the
              configured pull behavior.
            </p>

            <CodeBlock
              code={`git pull origin main`}
            />
          </>
        ),
      },
    ],

    keyPoints: [
      "A remote is another copy of a Git repository.",
      "origin is a common name for the primary remote.",
      "git push sends commits to a remote.",
      "git fetch retrieves remote information without integrating it.",
      "git pull fetches and integrates remote changes according to configuration.",
    ],

    mistakes: [
      "Pushing to the wrong remote or branch.",
      "Assuming fetch automatically changes your current files.",
      "Pulling without understanding incoming changes.",
      "Committing secrets before pushing.",
    ],

    quiz: [
      {
        question: "What does git push do?",
        options: [
          "Deletes commits",
          "Uploads local commits to a remote",
          "Creates HTML",
          "Downloads files only",
        ],
        answer: 1,
      },
      {
        question: "What is the conventional name for the main remote?",
        options: ["main", "origin", "remote-main", "github"],
        answer: 1,
      },
      {
        question: "What does git fetch primarily do?",
        options: [
          "Deletes remote branches",
          "Retrieves remote information without automatically integrating it",
          "Creates a local repository",
          "Commits local files",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: "pull-requests",
    title: "Pull Requests",
    icon: "🔃",
    description:
      "Learn how pull requests are used to review and integrate changes on GitHub.",

    sections: [
      {
        title: "What is a Pull Request?",
        content: (
          <>
            <p>
              A <strong>Pull Request</strong>, commonly called a PR, is a
              request to review and integrate changes from one branch into
              another.
            </p>

            <p>
              Pull requests are widely used for code review and collaborative
              development.
            </p>
          </>
        ),
      },

      {
        title: "Creating a Pull Request",
        content: (
          <>
            <p>A typical workflow looks like this:</p>

            <CodeBlock
              code={`git switch -c feature-login

# make changes

git add .
git commit -m "Add login feature"

git push -u origin feature-login`}
            />

            <p>
              After pushing the branch, a pull request can be opened on the
              hosting platform.
            </p>
          </>
        ),
      },

      {
        title: "Code Review",
        content: (
          <>
            <p>
              Reviewers inspect the proposed changes and can leave comments or
              request modifications.
            </p>

            <ul>
              <li>Check correctness.</li>
              <li>Look for bugs.</li>
              <li>Review readability.</li>
              <li>Check security concerns.</li>
              <li>Suggest improvements.</li>
            </ul>
          </>
        ),
      },

      {
        title: "Updating a Pull Request",
        content: (
          <>
            <p>
              A pull request normally updates automatically when additional
              commits are pushed to its source branch.
            </p>

            <CodeBlock
              code={`git add .
git commit -m "Address review comments"
git push`}
            />
          </>
        ),
      },

      {
        title: "Merging a Pull Request",
        content: (
          <>
            <p>
              Once the required reviews and checks are complete, the pull
              request can be merged according to the project's workflow.
            </p>

            <div className="lesson-note">
              <strong>Best practice:</strong> Do not treat code review as a
              personal criticism. The goal is to improve the software.
            </div>
          </>
        ),
      },
    ],

    keyPoints: [
      "Pull requests propose changes for review and integration.",
      "PRs are commonly created from feature branches.",
      "Reviewers can comment and request changes.",
      "Additional commits can update an existing PR.",
      "Projects can define their own merge requirements.",
    ],

    mistakes: [
      "Creating extremely large pull requests.",
      "Writing unclear PR descriptions.",
      "Ignoring reviewer feedback.",
      "Merging without checking automated tests.",
    ],

    quiz: [
      {
        question: "What is a pull request?",
        options: [
          "A request to install Git",
          "A proposal to review and integrate changes",
          "A command to delete a branch",
          "A Git configuration file",
        ],
        answer: 1,
      },
      {
        question: "Where are pull requests commonly created?",
        options: ["Text editor", "GitHub", "Terminal only", "Database"],
        answer: 1,
      },
      {
        question: "What happens when you push new commits to a PR branch?",
        options: [
          "The PR can reflect the new commits",
          "The PR is always deleted",
          "Git is uninstalled",
          "The repository becomes private",
        ],
        answer: 0,
      },
    ],
  },

  {
    id: "collaboration",
    title: "Collaboration",
    icon: "👥",
    description:
      "Learn practical Git workflows for working with other developers on shared projects.",

    sections: [
      {
        title: "Working as a Team",
        content: (
          <>
            <p>
              Git makes it possible for multiple developers to work on the
              same project while maintaining separate branches and histories.
            </p>

            <p>
              Teams usually establish conventions for branches, commits,
              reviews and releases.
            </p>
          </>
        ),
      },

      {
        title: "Feature Branch Workflow",
        content: (
          <>
            <CodeBlock
              code={`main
  |
  +---- feature-login
  |
  +---- feature-navbar
  |
  +---- fix-footer`}
            />

            <p>
              Each developer can work on a separate branch and later propose
              the changes for integration.
            </p>
          </>
        ),
      },

      {
        title: "Keeping Your Branch Updated",
        content: (
          <>
            <p>
              Before continuing work, developers often need to synchronize
              their local view with the latest changes.
            </p>

            <CodeBlock
              code={`git fetch origin

git status

git pull`}
            />

            <p>
              Teams may use different strategies, such as merge or rebase,
              depending on their workflow.
            </p>
          </>
        ),
      },

      {
        title: "Code Reviews",
        content: (
          <>
            <p>
              Code review helps teams catch problems and share knowledge.
            </p>

            <ul>
              <li>Review logic and correctness.</li>
              <li>Check readability.</li>
              <li>Look for security issues.</li>
              <li>Check tests.</li>
              <li>Suggest maintainable solutions.</li>
            </ul>
          </>
        ),
      },

      {
        title: "Issues and Project Tracking",
        content: (
          <>
            <p>
              Teams can connect Git work to issues or tasks so that developers
              understand why a change is being made.
            </p>

            <CodeBlock
              code={`Issue #42
"Add password reset"

        ↓

feature/password-reset

        ↓

Pull Request

        ↓

Code Review

        ↓

Merge`}
            />
          </>
        ),
      },
    ],

    keyPoints: [
      "Teams commonly use branches for separate work.",
      "Code review improves quality and knowledge sharing.",
      "Developers should keep their work synchronized with team changes.",
      "Issues can connect technical work with project requirements.",
      "Teams should agree on Git workflow conventions.",
    ],

    mistakes: [
      "Working directly on shared branches without a team agreement.",
      "Creating huge branches that remain open for too long.",
      "Ignoring conflicts until the end of a feature.",
      "Skipping code review for important changes.",
    ],

    quiz: [
      {
        question: "Why do teams use feature branches?",
        options: [
          "To isolate development work",
          "To remove Git history",
          "To store passwords",
          "To replace GitHub",
        ],
        answer: 0,
      },
      {
        question: "What is a major benefit of code review?",
        options: [
          "It deletes commits",
          "It helps identify problems and improve code quality",
          "It removes the need for testing",
          "It replaces branches",
        ],
        answer: 1,
      },
      {
        question: "What can issues help teams track?",
        options: [
          "Bugs and tasks",
          "Only Git versions",
          "Only images",
          "Only passwords",
        ],
        answer: 0,
      },
    ],
  },

  {
    id: "git-best-practices",
    title: "Git Best Practices",
    icon: "⭐",
    description:
      "Learn professional habits that make Git repositories cleaner, safer and easier to maintain.",

    sections: [
      {
        title: "Make Small Logical Commits",
        content: (
          <>
            <p>
              A commit should ideally represent one logical change.
            </p>

            <CodeBlock
              code={`git commit -m "Add user registration form"

git commit -m "Add registration validation"

git commit -m "Fix registration button styling"`}
            />

            <p>
              Smaller logical commits are easier to review and understand.
            </p>
          </>
        ),
      },

      {
        title: "Use Meaningful Branch Names",
        content: (
          <>
            <p>
              Branch names should communicate what kind of work they contain.
            </p>

            <CodeBlock
              code={`feature/user-profile
feature/payment-page
fix/navbar-overflow
docs/update-readme`}
            />

            <p>
              Consistent naming helps teams understand branches quickly.
            </p>
          </>
        ),
      },

      {
        title: "Never Commit Secrets",
        content: (
          <>
            <p>
              API keys, passwords, private tokens and other secrets should not
              be committed to a repository.
            </p>

            <CodeBlock
              code={`# .gitignore

.env
.env.local
*.pem`}
            />

            <div className="lesson-note">
              <strong>Important:</strong> Adding a secret to .gitignore does
              not remove a secret that has already been committed. If a secret
              is exposed, it may need to be revoked or rotated.
            </div>
          </>
        ),
      },

      {
        title: "Review Before Commit and Push",
        content: (
          <>
            <CodeBlock
              code={`git status

git diff

git diff --staged

git log --oneline`}
            />

            <p>
              Reviewing changes before committing or pushing helps prevent
              accidental files and mistakes from entering the repository.
            </p>
          </>
        ),
      },

      {
        title: "Keep the Repository Clean",
        content: (
          <>
            <ul>
              <li>Use .gitignore appropriately.</li>
              <li>Remove unnecessary generated files.</li>
              <li>Keep documentation updated.</li>
              <li>Use consistent branch names.</li>
              <li>Write useful commit messages.</li>
              <li>Review changes before pushing.</li>
            </ul>
          </>
        ),
      },

      {
        title: "A Professional Git Workflow",
        content: (
          <>
            <CodeBlock
              code={`git switch main
git pull

git switch -c feature/profile

# make changes

git status
git diff

git add .
git commit -m "Add user profile page"

git push -u origin feature/profile

# Open Pull Request
# Review
# Test
# Merge`}
            />

            <p>
              The exact workflow varies between teams, but the core principles
              remain: make understandable changes, review them, test them and
              collaborate safely.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "Keep commits small and logical.",
      "Use clear branch names.",
      "Never commit passwords or API secrets.",
      "Review changes before committing and pushing.",
      "Use documentation and repository conventions consistently.",
    ],

    mistakes: [
      "Committing secrets.",
      "Using meaningless commit messages.",
      "Pushing unreviewed changes.",
      "Creating enormous commits containing unrelated work.",
      "Ignoring the project's contribution guidelines.",
    ],

    quiz: [
      {
        question: "What is a good Git commit?",
        options: [
          "A huge collection of unrelated changes",
          "A small logical unit of change",
          "A password backup",
          "A GitHub account",
        ],
        answer: 1,
      },
      {
        question: "Which should never be committed?",
        options: [
          "README files",
          "Source code",
          "API keys and passwords",
          "Documentation",
        ],
        answer: 2,
      },
      {
        question: "What should you do before pushing important changes?",
        options: [
          "Delete Git history",
          "Review and test the changes",
          "Run git init again",
          "Remove the repository",
        ],
        answer: 1,
      },
    ],
  },
];

function CodeBlock({ code }) {
  return (
    <pre
      style={{
        background: "#111827",
        color: "#f9fafb",
        padding: "18px",
        borderRadius: "12px",
        overflowX: "auto",
        fontSize: "14px",
        lineHeight: "1.6",
        margin: "18px 0",
      }}
    >
      <code>{code}</code>
    </pre>
  );
}

function InfoCard({ title, children }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "18px",
        padding: "28px",
        marginTop: "22px",
        border: "1px solid #dbeafe",
      }}
    >
      <h2
        style={{
          margin: "0 0 18px",
          color: "#111827",
        }}
      >
        {title}
      </h2>

      {children}
    </div>
  );
}

const listStyle = {
  color: "#374151",
  lineHeight: "1.8",
  paddingLeft: "25px",
};

function buttonStyle(background) {
  return {
    background,
    color: "white",
    border: "none",
    borderRadius: "9px",
    padding: "11px 20px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  };
}

function navButtonStyle(disabled) {
  return {
    background: disabled ? "#e5e7eb" : "#2563eb",
    color: disabled ? "#9ca3af" : "white",
    border: "none",
    borderRadius: "9px",
    padding: "11px 20px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: disabled ? "not-allowed" : "pointer",
  };
}

function GitGitHub({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("fullstack-gitgithub", subtopics);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const completedSubtopics = completed.length;

  const overallProgress =
    subtopics.length === 0
      ? 0
      : Math.round((completedSubtopics / subtopics.length) * 100);

  const selectedIndex = subtopics.findIndex(
    (subtopic) => subtopic.id === selectedSubtopic
  );

  const currentSubtopic =
    selectedIndex >= 0 ? subtopics[selectedIndex] : null;

  const toggleComplete = () => {
    if (!currentSubtopic) return;
    saveProgress(currentSubtopic.id);
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    if (!currentSubtopic) return;

    setQuizAnswers((previous) => ({
      ...previous,
      [`${currentSubtopic.id}-${questionIndex}`]: answerIndex,
    }));
  };

  const submitQuiz = async () => {
    const score = currentSubtopic.quiz.reduce((total, question, index) => {
      const selectedAnswer = quizAnswers[`${currentSubtopic.id}-${index}`];
      return total + (selectedAnswer === question.answer ? 1 : 0);
    }, 0);

    await saveQuizResult({
      subject: "Full Stack",
      role: "Full Stack Developer",
      topic: currentSubtopic.title,
      topicId: currentSubtopic.id,
      score,
      totalQuestions: currentSubtopic.quiz.length
    });

    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    if (!currentSubtopic) return;

    const updatedAnswers = { ...quizAnswers };

    currentSubtopic.quiz.forEach((_, index) => {
      delete updatedAnswers[`${currentSubtopic.id}-${index}`];
    });

    setQuizAnswers(updatedAnswers);
    setQuizSubmitted(false);
  };

  const openSubtopic = (subtopic) => {
    setSelectedSubtopic(subtopic.id);
    setQuizSubmitted(false);
  };

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedSubtopic(subtopics[selectedIndex - 1].id);
      setQuizSubmitted(false);
    }
  };

  const goToNext = () => {
    if (selectedIndex < subtopics.length - 1) {
      setSelectedSubtopic(subtopics[selectedIndex + 1].id);
      setQuizSubmitted(false);
    }
  };

  if (currentSubtopic) {
    const isCompleted = completed.includes(currentSubtopic.id);

    const quizScore = currentSubtopic.quiz.reduce(
      (score, question, index) => {
        const selectedAnswer =
          quizAnswers[`${currentSubtopic.id}-${index}`];

        return score + (selectedAnswer === question.answer ? 1 : 0);
      },
      0
    );

    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
          padding: "30px 20px 60px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={() => setSelectedSubtopic(null)}
            style={{
              ...buttonStyle("#2563eb"),
              marginBottom: "20px",
            }}
          >
            ← Back to Git & GitHub
          </button>

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #bfdbfe",
              boxShadow:
                "0 4px 15px rgba(37, 99, 235, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 8px",
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  Git & GitHub • Lesson {selectedIndex + 1} of{" "}
                  {subtopics.length}
                </p>

                <h1
                  style={{
                    margin: "0 0 10px",
                    fontSize: "30px",
                    color: "#111827",
                  }}
                >
                  {currentSubtopic.icon} {currentSubtopic.title}
                </h1>

                <p
                  style={{
                    margin: 0,
                    color: "#555",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  {currentSubtopic.description}
                </p>
              </div>

              <div
                style={{
                  background: isCompleted ? "#dcfce7" : "#eff6ff",
                  color: isCompleted ? "#166534" : "#1d4ed8",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  fontWeight: "600",
                }}
              >
                {isCompleted ? "✅ Completed" : "📚 In Progress"}
              </div>
            </div>

            <div
              style={{
                marginTop: "25px",
                height: "10px",
                background: "#e5e7eb",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${Math.round(
                    ((selectedIndex + 1) / subtopics.length) * 100
                  )}%`,
                  height: "100%",
                  background: "#2563eb",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          {currentSubtopic.sections.map((section, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "18px",
                padding: "28px",
                marginTop: "22px",
                border: "1px solid #dbeafe",
                boxShadow:
                  "0 3px 12px rgba(37, 99, 235, 0.06)",
              }}
            >
              <h2
                style={{
                  margin: "0 0 18px",
                  color: "#111827",
                  fontSize: "23px",
                }}
              >
                {index + 1}. {section.title}
              </h2>

              <div
                style={{
                  color: "#374151",
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                {section.content}
              </div>
            </div>
          ))}

          <InfoCard title="💡 Key Points">
            <ul style={listStyle}>
              {currentSubtopic.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </InfoCard>

          <div
            style={{
              background: "#fff7ed",
              borderRadius: "18px",
              padding: "28px",
              marginTop: "22px",
              border: "1px solid #fed7aa",
            }}
          >
            <h2
              style={{
                margin: "0 0 18px",
                color: "#9a3412",
              }}
            >
              ⚠️ Common Mistakes
            </h2>

            <ul
              style={{
                color: "#7c2d12",
                lineHeight: "1.8",
                paddingLeft: "25px",
              }}
            >
              {currentSubtopic.mistakes.map((mistake, index) => (
                <li key={index}>{mistake}</li>
              ))}
            </ul>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "28px",
              marginTop: "22px",
              border: "1px solid #dbeafe",
            }}
          >
            <h2
              style={{
                margin: "0 0 22px",
                color: "#111827",
              }}
            >
              🧠 Quick Quiz
            </h2>

            {currentSubtopic.quiz.map((question, questionIndex) => {
              const selectedAnswer =
                quizAnswers[`${currentSubtopic.id}-${questionIndex}`];

              const isCorrect = selectedAnswer === question.answer;

              return (
                <div
                  key={questionIndex}
                  style={{
                    marginBottom: "28px",
                    paddingBottom: "24px",
                    borderBottom:
                      questionIndex !== currentSubtopic.quiz.length - 1
                        ? "1px solid #e5e7eb"
                        : "none",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "17px",
                      color: "#111827",
                      marginBottom: "14px",
                    }}
                  >
                    {questionIndex + 1}. {question.question}
                  </h3>

                  {question.options.map((option, optionIndex) => {
                    const selected = selectedAnswer === optionIndex;

                    let background = "white";
                    let border = "1px solid #d1d5db";

                    if (
                      quizSubmitted &&
                      optionIndex === question.answer
                    ) {
                      background = "#dcfce7";
                      border = "1px solid #22c55e";
                    } else if (
                      quizSubmitted &&
                      selected &&
                      optionIndex !== question.answer
                    ) {
                      background = "#fee2e2";
                      border = "1px solid #ef4444";
                    } else if (selected) {
                      background = "#eff6ff";
                      border = "1px solid #2563eb";
                    }

                    return (
                      <button
                        key={optionIndex}
                        onClick={() =>
                          handleQuizAnswer(
                            questionIndex,
                            optionIndex
                          )
                        }
                        disabled={quizSubmitted}
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "left",
                          background,
                          border,
                          borderRadius: "9px",
                          padding: "12px 15px",
                          marginBottom: "9px",
                          cursor: quizSubmitted
                            ? "default"
                            : "pointer",
                          fontSize: "15px",
                          color: "#111827",
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}

                  {quizSubmitted && (
                    <p
                      style={{
                        marginTop: "10px",
                        fontWeight: "600",
                        color: isCorrect
                          ? "#15803d"
                          : "#b91c1c",
                      }}
                    >
                      {isCorrect
                        ? "✅ Correct!"
                        : `❌ Incorrect. Correct answer: ${
                            question.options[question.answer]
                          }`}
                    </p>
                  )}
                </div>
              );
            })}

            {!quizSubmitted ? (
              <button
                onClick={submitQuiz}
                style={buttonStyle("#2563eb")}
              >
                Submit Quiz
              </button>
            ) : (
              <div>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "17px",
                    color: "#111827",
                  }}
                >
                  🎯 Score: {quizScore} /{" "}
                  {currentSubtopic.quiz.length}
                </p>

                <button
                  onClick={resetQuiz}
                  style={{
                    background: "white",
                    color: "#2563eb",
                    border: "1px solid #2563eb",
                    borderRadius: "9px",
                    padding: "10px 18px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "25px",
              marginTop: "22px",
              border: "1px solid #dbeafe",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={goToPrevious}
              disabled={selectedIndex === 0}
              style={navButtonStyle(selectedIndex === 0)}
            >
              ← Previous
            </button>

            <button
              onClick={toggleComplete}
              style={buttonStyle(
                isCompleted ? "#16a34a" : "#2563eb"
              )}
            >
              {isCompleted
                ? "✓ Completed"
                : "Mark as Complete"}
            </button>

            <button
              onClick={goToNext}
              disabled={selectedIndex === subtopics.length - 1}
              style={navButtonStyle(
                selectedIndex === subtopics.length - 1
              )}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
        padding: "30px 20px 60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        <button
          onClick={goBack}
          style={{
            ...buttonStyle("#2563eb"),
            marginBottom: "20px",
          }}
        >
          ← Back to Full Stack
        </button>

        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 8px",
            color: "#111827",
          }}
        >
          🐙 Git & GitHub
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Learn version control, GitHub, collaboration, branching, and
          professional Git workflows.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "25px 22px",
            marginBottom: "28px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.06)",
            border: "1px solid #dbeafe",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "21px",
                color: "#111827",
              }}
            >
              Overall Progress: {overallProgress}% 🎯
            </h2>

            <span
              style={{
                color: "#555",
                fontSize: "14px",
              }}
            >
              {completedSubtopics} / {subtopics.length} completed
            </span>
          </div>

          <div
            style={{
              width: "100%",
              height: "13px",
              background: "#e5e7eb",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${overallProgress}%`,
                height: "100%",
                background: "#2563eb",
                borderRadius: "10px",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
          }}
        >
          {subtopics.map((subtopic, index) => {
            const isCompleted = completed.includes(subtopic.id);
            const progress = isCompleted ? 100 : 0;

            return (
              <div
                key={subtopic.id}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "25px 26px",
                  minHeight: "205px",
                  border: isCompleted
                    ? "1px solid #86efac"
                    : "1px solid #bfdbfe",
                  boxShadow:
                    "0 4px 12px rgba(37, 99, 235, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: "0 0 8px",
                      fontSize: "20px",
                      color: "#111827",
                      lineHeight: "1.3",
                    }}
                  >
                    {index + 1}. {subtopic.icon}{" "}
                    {subtopic.title}
                  </h2>

                  <p
                    style={{
                      margin: "0 0 12px",
                      fontSize: "15px",
                      color: "#555",
                      lineHeight: "1.5",
                    }}
                  >
                    {subtopic.description}
                  </p>

                  <p
                    style={{
                      margin: "0 0 8px",
                      fontSize: "15px",
                      color: "#111827",
                    }}
                  >
                    Progress: {progress}%
                  </p>

                  <div
                    style={{
                      width: "100%",
                      height: "10px",
                      background: "#e5e7eb",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${progress}%`,
                        height: "100%",
                        background: "#2563eb",
                        borderRadius: "10px",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => openSubtopic(subtopic)}
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "18px",
                    ...buttonStyle(
                      isCompleted ? "#16a34a" : "#2563eb"
                    ),
                  }}
                >
                  {isCompleted
                    ? "Review Topic →"
                    : "Open Topic →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GitGitHub;