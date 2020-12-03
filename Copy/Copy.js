const fs = require('fs').promises;

async function copyAFile(src, dst) {
    try {
        const file = await fs.readFile(src, 'utf-8');
        await fs.writeFile(dst, file);
    } catch(err) {
        console.log(err)
    }
}

module.exports = { copyAFile }

