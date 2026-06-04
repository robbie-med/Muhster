#!/usr/bin/env bash
set -euo pipefail
find . -path './node_modules' -prune -o -path './.git' -prune -o -type f | sort
