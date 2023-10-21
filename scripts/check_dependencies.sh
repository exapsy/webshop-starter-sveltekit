#!/bin/bash

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check for Node.js and npm
if command_exists node && command_exists npm; then
  echo "Node.js and npm are installed. Proceeding..."
else
  echo "Error: Node.js and npm are required but not installed. Aborting."
  exit 1
fi
