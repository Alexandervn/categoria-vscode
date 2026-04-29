#!/usr/bin/env bash

# Constants and variables
NAME="categoria"
VERSION=1
LOG_FILE="/tmp/${NAME}.log"

# Function definition
greet() {
  local target="${1:-world}"
  echo "Hello, ${target}!"
}

# Conditionals
if [[ -f "$LOG_FILE" ]]; then
  echo "Log exists"
elif [[ -d "/tmp" ]]; then
  echo "Temp dir exists"
else
  echo "Nothing found"
fi

# Loops
for i in 1 2 3; do
  echo "Item: $i"
done

while read -r line; do
  echo "$line"
done < "$LOG_FILE"

# Arrays
files=("a.txt" "b.txt" "c.txt")
for f in "${files[@]}"; do
  echo "$f"
done

# Command substitution and pipes
current_dir=$(pwd)
file_count=$(ls | wc -l | tr -d ' ')

# Exit codes
greet "world" || exit 1

# Case statement
case "$NAME" in
  categoria) echo "matched" ;;
  *)         echo "no match" ;;
esac
