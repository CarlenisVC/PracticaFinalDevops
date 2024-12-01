const fs = require('fs');
const path = require('path');

test('la página contiene un h1', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
    expect(html).toContain('<h1>Hola Mundo!</h1>');
});