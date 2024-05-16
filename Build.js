const fs = require('fs');
const path = require('path');

// Source directory containing HTML files
const sourceDir = './';
// Destination directory where HTML files will be copied
const destDir = './dist';

// Ensure destination directory exists, create it if not
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
}

// Function to copy HTML files from source to destination directory
const copyHtmlFiles = () => {
    fs.readdir(sourceDir, (err, files) => {
        if (err) {
            console.error('Error reading source directory:', err);
            return;
        }
        
        files.forEach(file => {
            if (path.extname(file) === '.html') {
                fs.copyFile(path.join(sourceDir, file), path.join(destDir, file), err => {
                    if (err) {
                        console.error('Error copying HTML file:', err);
                    } else {
                        console.log(`Copied ${file} to ${destDir}`);
                    }
                });
            }
        });
    });
};

// Call the function to copy HTML files
copyHtmlFiles();
