# Git & GitHub Workflow

Git is a distributed version control system used to track changes in code.

---

## 1. Initializing & Staging Code

```bash
# Initialize a new Git repository
git init

# Check repository status
git status

# Stage specific file
git add index.html

# Stage all modified and untracked files
git add .

# Commit staged changes with descriptive message
git commit -m "feat: add user authentication form"
```

---

## 2. Remote Repository Workflow

```bash
# Connect local repo to remote GitHub repository
git remote add origin https://github.com/username/repository-name.git

# Rename default branch to main
git branch -M main

# Push local commits to remote GitHub main branch
git push -u origin main

# Pull latest changes from remote
git pull origin main
```

---

## 3. Branching & Merging

```bash
# Create and switch to new feature branch
git checkout -b feature/login-page

# Switch back to main branch
git checkout main

# Merge feature branch into main
git merge feature/login-page
```
