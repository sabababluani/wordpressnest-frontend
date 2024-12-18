#!/bin/bash

MAX_CHANGES=10
CHANGED_LINES=$(git diff --cached --numstat | awk '{sum += $1} END {print sum}')

if [ "$CHANGED_LINES" -gt "$MAX_CHANGES" ]; then
  echo "❌ You are trying to commit $CHANGED_LINES changed lines, but the limit is $MAX_CHANGES."
  exit 1
else
  echo "✅ Commit allowed: $CHANGED_LINES changed lines (limit: $MAX_CHANGES)"
fi
