# Touch CLI

It's a simple CLI you can use **touch** command.

## Installation

```
npm install @burakbey/touch-cli -g
```

## Usage

You can create multiple files/folders like that:

```
touch <path1> <path2> <path3>...
```

## ⭐ News

_You can create files like **.gitIgnore**, **.npmIgnore** by adding `:file` to the end._<br/>
`touch .gitIgnore:file` ➜ _Creates **.gitIgnore** file_<br/>
`touch myProject/.gitIgnore:file` ➜ _Creates **.gitIgnore** file inside **myProject** folder_

## Examples

- Folders:<br/>
  `touch myFolder` ➜ \*Creates folder named **myFolder\***<br/>
  `touch mySecondFolder myThirdFolder` ➜ _Creates multiple folders_<br/>

- Files:<br/>
  `touch myNote.txt` ➜ \*Creates a file named **myNote.txt\***<br/>
  `touch index.html style.css` ➜ _Creates multiple files_<br/>
- Files In Folders:<br/>
  `touch public/index.html` ➜ _Creates **public** folder if not exist then creates **index.html** file_<br/>
  `touch public/script.js assets/style.css assets/myStyle.css` ➜ _Creates multiple files in folders_<br/>

## ☕ Support

If you find this project useful and would like to support [me](https://github.com/BUR4KBEY), you can do so by visiting [my website](https://burakbey.dev).

<a href="https://burakbey.dev" target="_blank"><img src="https://burakbey.dev/github_support_snippet.png" style="height: 56px !important;width: 200px !important;" alt="Buy me a coffee"></img></a>
