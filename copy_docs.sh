#!/bin/bash

mkdir -p /var/www/html/drutil/
cd docs
zip -r drutil.zip *
rm -rf /var/www/html/drutil/*
mv drutil.zip /var/www/html/drutil/
cd /var/www/html/drutil/
unzip drutil.zip
rm drutil.zip
