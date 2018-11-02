# Готовое тестовое задание для Melior Games (Angular 4 with Node.js server)

## Описание
Приложение для поиска книг.
Отображение книг доступных на сервере. Просмотр деталей по каждой книге. Добавление своей книги в базу данных на сервере. Поиск книг по большому количеству параметров работающих одновременно. Url ссылка с поиском содержит все поисковые параметры для возможности передавать ссылку кому угодно для получения тех же поисковых результатов. Валидация всех полей где возможен ввод. Выпадающие списки содержат информацию с сервера.

## Посмотреть сборку
* локально:
  - <i>git clone https://github.com/NikitaVolkov87/test_task_Melior-Games.git</i>
  - <i>cd test_task_Melior-Games</i>
  - <i>npm i</i>
  - <i>node server.js</i>
  - <i>ng serve -o</i>
* онлайн: пока онлайн версия недоступна из-за использования Node.js сервера

## В работе использовалось
* Angular 4
  - TypeScript (с использованием типизации и интерфейсов)
  - продвинутый роутинг
  - подключаемый сервис с get и post запросами с использованием RxJS
  - angular'овская валидация
* RESTful API

## Функционал
* двойное применение формы: для отображения информации по существующей книге и для ввода данных для новой книги (с валидацией)
* на странице поиска книги при вводе параметров они отображаются в строке url, по которой потом можно получить те же поисковые результаты
  ```
  Например, при переходе по ссылке:

      http://localhost:4200/search?author=Miguel%20De%20Cervantes&formatId=1

  осуществляется поиск и отображение книг с параметрами:

      автор:    Miguel De Cervantes
      формат:   Paperback
  ```
* get и post запросы для получения и сохранения книг в базу данных на сервер
* все выпадающие списки получают и отображают информацию с сервера

## Текст задания

### Project setup
```
git clone https://bitbucket.org/melior-games/trial-assignment.git
npm install
node server.js
ng serve --open
```

### Endpoints
```
  http://localhost:3004/books
  http://localhost:3004/formats
  http://localhost:3004/countries
  http://localhost:3004/cities
  http://localhost:3004/companies
```

### Request Authentication header
```
For retrieving data every request should be supplied with "x-auth-token: bad18eba1ff45jk7858b8ae88a77fa30" header.
```

### Assignment 1
```
'Main' - page:
1) Output list of available books on main page.
2) List items should contain links to separate page (similar to 'Add New Book') and pre-populate the form.
```

### Assignment 2
```
'Add New Book' - page:
1) Add form validation and display errors under invalid fields.
2) All fields are required.
3) Format, Country, City, Company options should be loaded from server.
4) Save form data to server.
```
 
### Assignment 3
```
'Search' - page:
1) Format options should be loaded from server.
2) Form fields are filters and are optional, although they should still be validated where needed.
3) List of filtered books should have the same look as the list on the 'Main' page.
4) Form fields state changes should be immediately reflected in url GET parameters dynamically, e.g.:
  Form content:
    Author: Miguel De Cervantes
    Format: Paperback
    
  Corresponding url: "http://localhost:4200/search?author=Miguel%20De%20Cervantes&formatId=1"
  
  It should be possible to copy retrieved url, enter in a new browser tab and get the same form state.
```
