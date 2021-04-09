[lodash](https://lodash.com/)

[RxJS](https://rxjs-dev.firebaseapp.com/guide/overview)

[ramda](https://www.npmjs.com/package/ramda)

[axios](https://github.com/axios/axios)

[ws](https://www.npmjs.com/package/ws)

#Databases

[sequelize](https://www.npmjs.com/package/sequelize)

[TypeORM](https://typeorm.io/#/)
    
[MikroORM](https://mikro-orm.io/)

[Mongoose](https://mongoosejs.com/)

# Docker 

```
docker build -t app:latest .
docker run -d --name app --rm -p 3000:3000 -v ${PWD}/filestorage:/app/filestorage -e FILESTORE_PATH="filestorage/storage.json" app:latest
```

# Debugging

https://nodejs.org/en/docs/guides/debugging-getting-started/
