const fs = require('fs').promises

async function reader() {
  try {
    const file = await fs.readFile('../README.md', 'utf-8');
    console.log(file);
  } catch(err) {
    console.log(err);
  }
}

reader();

async function writer() {
  try {
    await fs.writeFile('../texttexttext.txt', 'This is TEXT');
    console.log('Done');
  } catch(err) {
    console.log(err)
  }
}

writer();

async function copier() {
  try {
    const file = await fs.readFile('../texttexttext.txt', 'utf-8');
    await fs.writeFile('../README-COPY.md', file);
    console.log('Done');
  } catch(err) {
    console.log(err)
  }
}
copier();