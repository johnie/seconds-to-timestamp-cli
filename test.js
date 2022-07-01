import test from 'ava';
import { execa } from 'execa';

test('Format and validate "1 second"', async (t) => {
  const { stdout } = await execa('./cli.js', [1]);
  t.is(stdout, '00:00:01');
});

test('Format and validate "10 seconds"', async (t) => {
  const { stdout } = await execa('./cli.js', [10]);
  t.is(stdout, '00:00:10');
});

test('Format and validate "600 seconds as 10 minutes"', async (t) => {
  const { stdout } = await execa('./cli.js', [600]);
  t.is(stdout, '00:10:00');
});

test('Format and validate "3600 seconds as 1 hour"', async (t) => {
  const { stdout } = await execa('./cli.js', [3600]);
  t.is(stdout, '01:00:00');
});

test('Format and validate "4321 seconds as 1 hour 12 minutes and 1 second"', async (t) => {
  const { stdout } = await execa('./cli.js', [4321]);
  t.is(stdout, '01:12:01');
});

test('Format and validate "1 second" using flags', async (t) => {
  const { stdout } = await execa('./cli.js', ['-s 1']);
  t.is(stdout, '00:00:01');
});

test('Format and validate "10 seconds" using flags', async (t) => {
  const { stdout } = await execa('./cli.js', ['-s 10']);
  t.is(stdout, '00:00:10');
});

test('Format and validate "600 seconds as 10 minutes" using flags', async (t) => {
  const { stdout } = await execa('./cli.js', ['-m 10']);
  t.is(stdout, '00:10:00');
});

test('Format and validate "3600 seconds as 1 hour" using flags', async (t) => {
  const { stdout } = await execa('./cli.js', ['-h 1']);
  t.is(stdout, '01:00:00');
});
