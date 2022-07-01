# seconds-to-timestamp

![test status](https://github.com/johnie/seconds-to-timestamp-cli/actions/workflows/main.yml/badge.svg)

> CLI-tool to Convert seconds to HH:MM:SS based on [seconds-to-timestamp](https://github.com/johnie/seconds-to-timestamp)

## Getting started

# seconds-to-timestamp-cli

> CLI-tool to Convert seconds to HH:MM:SS

## Install

```
$ npm install --global seconds-to-timestamp-cli
```

## Usage

```
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
```

## Licence

[MIT](/licence) © Johnie Hjelm
