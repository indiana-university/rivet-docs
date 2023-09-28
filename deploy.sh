#!/bin/bash

# Rebuild site

rm -rf ./public
npx gulp build

# Read Sitehost username from .env

set -o allexport
source .env
set +o allexport

# Set production flag to FALSE by default

production=false

# Set production flag to TRUE if -P flag was passed

while getopts ':P' opt; do
  case ${opt} in
    P) production=true
  esac
done

if [[ "$production" = true ]]; then

  # Run Hugo in production mode

  export HUGO_ENV="production"

  hugo --baseURL $HUGO_BASE_URL_LIVE
  
  # Require confirmation for production deployment

  echo "[rsync] Confirm production deployment by entering 'ok', enter 'no' to cancel:"
  
  read ok_no
  
  if [[ "$ok_no" = "ok" ]]; then

    # Deployment confirmed, deploy to Sitehost

    echo "[rsync] Deploying to Sitehost..."
    rsync -av --delete ./public/ "$SITEHOST_USERNAME@ssh.sitehost.iu.edu:/groups/$SITEHOST_USERNAME/web/"
  
  else

    # Deployment cancelled

    echo "[rsync] Deployment cancelled"
  
  fi

else

  # Run Hugo in test (development) mode

  hugo --baseURL $HUGO_BASE_URL_TEST

  # Deploy to Sitehost-Test

  echo "[rsync] Deploying to Sitehost-Test..."
  rsync -av --delete ./public/ "$SITEHOST_USERNAME@ssh.sitehost-test.iu.edu:/groups/$SITEHOST_USERNAME/web/"

fi