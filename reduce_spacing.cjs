const fs = require('fs');
const path = require('path');

const dirPath = 'd:\\developer Mood\\Never-Alone\\website\\src\\components';

const replacements = [
  { search: /py-24/g, replace: 'py-16' },
  { search: /py-20/g, replace: 'py-12' },
  { search: /py-32/g, replace: 'py-16' },
  { search: /mb-16/g, replace: 'mb-10' },
  { search: /mb-20/g, replace: 'mb-12' },
  { search: /gap-16/g, replace: 'gap-8' },
  { search: /gap-12/g, replace: 'gap-6' },
  { search: /text-5xl/g, replace: 'text-4xl' },
  { search: /text-4xl/g, replace: 'text-3xl' },
  { search: /font-extrabold/g, replace: 'font-bold' },
  { search: /font-bold/g, replace: 'font-semibold' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let original = content;

      for (const { search, replace } of replacements) {
        content = content.replace(search, replace);
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(dirPath);
console.log('Done!');
