#!/usr/bin/env bash

MONSTERS_IMG_DIR='public/img/monsters'
MONSTERS_PNG_DIR="$MONSTERS_IMG_DIR/png"

sips -s format jpeg -Z 600 -o $MONSTERS_IMG_DIR $MONSTERS_PNG_DIR/*.png
