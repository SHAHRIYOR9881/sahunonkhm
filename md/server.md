### Server enter
```
port: 22
login:      ssh root@95.130.227.53
password:   li75ENnS6PEGX5r6

DNS address: https://vps2.eskiz.uz
DNS login: shahriyornodejs@mail.ru
DNS password: 124536798assa
DNS names: ns1.eskiz.uz | ns2.eskiz.uz
```

### Set up - Node.js
```
1. sudo apt update
2. sudo apt install curl
3. curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
4. sudo bash nodesource_setup.sh
5. sudo apt install nodejs
```


### Set up - MongoDB
```
1. curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
2. echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
3. sudo apt update
4. sudo apt install mongodb-org
5. sudo systemctl start mongod.service
---------------------------  Database statusini tekshirish  --------------------------------
sudo systemctl status mongod
---------------------------  Database ni o'chirish (1-usul)  --------------------------------
sudo rm -rf /tmp/mongodb-27017.sock
sudo service mongod start
---------------------------  Database ni o'chirish (2-usul)  --------------------------------
sudo service mongod stop
sudo apt-get purge mongodb-org*
sudo rm -r /var/log/mongodb /var/lib/mongodb
service mongod status
```

### Set up - MC
```
sudo apt update
sudo apt install mc
---------------------------  Serverda keraksiz papkalarni o'chirish  --------------------------------
sudo rm -r -f <folder or filename> 
---------------------------  serverda  papkalarni yaratish  --------------------------------
sudo mkdir <folder or filename>    
```

### Set up - NGINX
```
sudo apt update
sudo apt install nginx
nano /etc/nginx/sites-available/default
server {
    root /var/www/html;
    server_name 95.130.227.53 sayhunobodtuman1sonkhm.uz www.sayhunobodtuman1sonkhm.uz;
    location / {
    proxy_pass http://localhost:5000; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

---------------------------  NGINX da fayl yuklanish hajmini sozlash  --------------------------------
nano /etc/nginx/nginx.conf
server {
    client_max_body_size 100M;
}
---------------------------  NGINX ni saqlash  --------------------------------
Press "CTRL + X" 
Press "Y" button
Press "Enter" button
---------------------------  NGINX ga restart berish  --------------------------------
systemctl restart nginx
---------------------------  NGINX statusini tekshirish  --------------------------------
sudo nginx -t
sudo systemctl status nginx                 
```


### Set up GIT
```
sudo apt update
sudo apt install git
cd ../home
git clone https://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:x-oauth-basic@github.com/SHAHRIYOR9881/sahunonkhm.git
cd ../home/sahunonkhm
npm install
```

### PM2
```
git clone https://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:x-oauth-basic@github.com/SHAHRIYOR9881/sahunonkhm.git
cd ../home/sahunonkhm
npm install
---------------------------  pm2 ni sozlash  --------------------------------
npm install -g pm2
npm i pm2
pm2 start app.js
pm2 startup
pm2 save
---------------------------  serverda loyihani ishlashini bekor qilish  --------------------------------
pm2 delete all
pm2 delete id
---------------------------  ishlayotgan loyihalarni ro'yhatini olish  --------------------------------
pm2 list
---------------------------  serverni qayta ishga tushirish  --------------------------------
pm2 reload all
pm2 reload id
---------------------------  serverda  monitoring qilish  --------------------------------
pm2 monit
```

### SSL
```
sudo apt update
sudo apt install snapd
apt policy snapd
sudo snap install core
sudo snap refresh core
sudo apt-get remove certbot
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx
1.Yes
2.No
3.Press "Enter"

```

### Admin 
```
POST - http://localhost:5000/api/user/create
POST - http://95.130.227.53/api/user/create
{   
    "name": "Admin",   
    "phone": "998-90-129-98-81", 
    "password": "124536798sayjunkhm",   
    "role": "admin"  
}
```


