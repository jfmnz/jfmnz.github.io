#!/bin/sh

echo ''
echo Doing: rm ../docs/\*.\*.\*
rm ../docs/*.*.*

echo ''
echo Doing: ng build --prod
ng build --prod

echo ''
echo Doing: cp dist/jfm/\* ../docs/
cp dist/jfm/* ../docs/

