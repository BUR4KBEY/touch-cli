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

## Examples
- Folders:<br/>
`touch myFolder` ➜ *Creates folder named **myFolder***<br/>
`touch mySecondFolder myThirdFolder` ➜ *Creates multiple folders*<br/>

- Files:<br/>
`touch myNote.txt` ➜ *Creates a file named **myNote.txt***<br/>
`touch index.html style.css` ➜ *Creates multiple files*

- Files In Folders:<br/>
`touch public/index.html` ➜ *Creates **public** folder if not exist then creates **index.html** file*<br/>
`touch public/script.js assets/style.css assets/myStyle.css` ➜ *Creates multiple files in folders*