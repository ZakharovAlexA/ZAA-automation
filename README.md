# ZAA-automation
## [Skillfactory](https://skillfactory.ru) E13.7 Практическая работа

<hr>
<p> </p>

### Техническое задание  

1. Установить и настроить webpack-dev-server.
2. Настроить hot module replacement.
3. Сделать возможность запуска на разных окружениях (dev, prod) c разной конфигурацией (например, убрать HMR на проде).
4. Настроить JSON-server и отображать полученные с него данные.
5. Добавить запуск линтера при комите.
<br>

### Quick start


```bash
npm i
```

Запуск в окружении development. Конфигурация: webpack.config.js
```bash
npm run start:dev
```

Запуск в окружении production. Конфигурация: webpack.prod.js
```bash
npm run start:prod
```  
Открыть страницу: http://localhost:8001/

Запуск JSON-server
```bash
json-server.cmd --watch database.json
```

Открыть страницу:
<ul>
 Resources
  <li> http://localhost:3000/posts </li> 
  <li>http://localhost:3000/comments</li>
  <li>http://localhost:3000/profile</li>
  <li>http://localhost:3000/contacts</li>
<br>
  Home
  <li>http://localhost:3000</li>
</ul>

Запуск commit с ESLint 
```bash
git commit -a -m "commit_message"
```

<br>

:arrow_up: [в начало](README.md#ZAA-automation)


<br><br>
