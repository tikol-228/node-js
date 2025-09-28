const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ['name','version','description','license','author','type','main','scripts'];

function ask(q) {
  return new Promise(resolve => rl.question(q + ': ', answer => resolve(answer)));
}

(async () => {
  const result = {};
  for (const q of questions) {
    result[q] = await ask(q);
  }

  rl.close();
  try {
    result.scripts = JSON.parse(result.scripts);
  } catch (e) {

  }
  fs.writeFileSync('package.json', JSON.stringify(result, null, 2));
  console.log('package.json saved');
})();