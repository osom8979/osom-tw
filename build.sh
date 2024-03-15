#!/usr/bin/env bash

ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" || exit; pwd)

"$ROOT_DIR/yarn" build:tailwind && "$ROOT_DIR/yarn" build:pages
