import { rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const currentDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(currentDir, '..');
const compiledTestsDir = resolve(projectRoot, '.tmp/tests');

async function runCommand(command, args) {
  await new Promise((resolvePromise, rejectPromise) => {
    const child = spawn(command, args, { stdio: 'inherit', cwd: projectRoot, shell: process.platform === 'win32' });

    child.on('exit', (code) => {
      if (code === 0) {
        resolvePromise();
      } else {
        rejectPromise(new Error(`${command} ${args.join(' ')} exited with code ${code}`));
      }
    });
  });
}

async function main() {
  await rm(compiledTestsDir, { recursive: true, force: true });
  await runCommand('tsc', ['--project', 'tsconfig.test.json']);
  await runCommand('node', ['--test', resolve(compiledTestsDir, 'languageRouting.test.js')]);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
