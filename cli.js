#!/usr/bin/env node
import meow from 'meow';
import secondsToTimestamp from 'seconds-to-timestamp';

const cli = meow(
  `
	Usage
	  $ seconds-to-timestamp OR sts [seconds]

	Options
	  --hours, -h [Hours to convert to seconds]
	  --minutes, -m [Minutes to convert to seconds]
	  --seconds, -h [Seconds to accumulate]

	Examples
	  $ seconds-to-timestamp 773
	  00:12:53
	  $ youtube-dl --external-downloader ffmpeg --external-downloader-args "-ss $(sts 38) -t 5" -f best https://www.youtube.com/watch?v=reop2bXiNgk
	  Downloading…
`,
  {
    importMeta: import.meta,
    flags: {
      hours: {
        type: 'number',
        alias: 'h',
      },
      minutes: {
        type: 'number',
        alias: 'm',
      },
      seconds: {
        type: 'number',
        alias: 's',
      },
    },
  }
);

const hoursToSeconds = (hours) => hours * 60 * 60;
const minutesToSeconds = (minutes) => minutes * 60;

const accumulateFlags = (flags) =>
  Object.entries(flags).reduce((acc, [time, value]) => {
    if (time === 'hours') {
      acc += hoursToSeconds(value);
    }

    if (time === 'minutes') {
      acc += minutesToSeconds(value);
    }

    if (time === 'seconds') {
      acc += value;
    }

    return acc;
  }, 0);

(() => {
  const { input, flags } = cli;

  if (input.length === 0 && Object.keys(flags).length === 0) {
    cli.showHelp();
  }

  if (input.length === 0 && Object.keys(flags).length > 0) {
    const accumulated = accumulateFlags(flags);
    console.log(secondsToTimestamp(accumulated));
  }

  if (input.length > 0) {
    console.log(secondsToTimestamp(Number(input)));
  }
})();
