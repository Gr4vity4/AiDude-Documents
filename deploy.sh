#!/bin/bash

git pull

npm run build

mkdir /var/www/aidude.io/aidude-docs/src/.vuepress/dist/lessons/

mkdir /var/www/aidude.io/aidude-docs/src/.vuepress/dist/face_recognition/

cp /var/www/aidude.io/videos/lessons/*.mp4 /var/www/aidude.io/aidude-docs/src/.vuepress/dist/lessons/

cp /var/www/aidude.io/videos/face_recognition/*.mp4 /var/www/aidude.io/aidude-docs/src/.vuepress/dist/face_recognition/

chown -R www-data:www-data /var/www/aidude.io/aidude-docs/src/.vuepress/dist/lessons/

chown -R www-data:www-data /var/www/aidude.io/aidude-docs/src/.vuepress/dist/face_recognition/

chmod -R 755 /var/www/aidude.io/aidude-docs/src/.vuepress/dist/lessons/

chmod -R 755 /var/www/aidude.io/aidude-docs/src/.vuepress/dist/face_recognition/
