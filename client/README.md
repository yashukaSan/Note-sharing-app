# Note Sharer

This Application help users to share their notes and find the notes that are useful to them
---

## Structure of the Project
The main *index.html* file is the main HTML file which run on the browser
The package.json and package-lock.json files store the dependencies and dev-dependencies which tell how many and which file dependencies are need to run run this file; the scripts are use to run the development related task, like creating development environment, test the project, and more; also it store the project name, version, author, license name, and other useful informations
### .gitignore File
store all the files, folder that need to be ignored when backing-up the data to the GitHub
### *.config.ts Files
Used by modern web development tools to define their behavior, plugins, build settings, and rules
### src Folder
In this folder, the main files like *.html*, *.css*, *.tsx* files are store which are directly call by the script tag in the *index.html* file
### public Folder
This folder store all the files which are to store static assets that the browser can access directly without going through the build, compilation, or bundling process (like Webpack or Vite).
### component Folder
This folder store all the components are need to render on the page to show, like Header, footer, login page, register page, etc
