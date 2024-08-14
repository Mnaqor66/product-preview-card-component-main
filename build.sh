#!/bin/bash
echo "Starting Building the project"
sleep 2
npx tailwindcss -i ./tailwind.css -o ./css/style.css
sleep 2
echo "Finished Building CSS"

rm -R ./dist
sleep 2
echo "Finished removing dist folder"
mkdir dist
sleep 2
echo "Finished remake dist folder"

cp -R ./public/index.html ./dist
sleep 2
echo "Done, Moving index.html"

cp -R ./public/css ./dist/css
sleep 2
echo "Done, Moving CSS"

cp -R ./public/images ./dist/
sleep 2
echo "Done, Moving images"
echo "Procces Finished"