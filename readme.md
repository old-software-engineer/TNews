# Description

It is a news website prototype which is built on node js and nuxt 3. Here user can create his account, create news articles, post reactions and comments on the articles.

# Screenshots

- Register new user
![Register new user](https://user-images.githubusercontent.com/15182066/208686016-7fa577ca-cce1-4e4b-8b02-45aa900c605b.png)
- User login
![User login](https://user-images.githubusercontent.com/15182066/208686009-a30506a3-b538-4432-905b-a044fb0c6b31.png)
- Create new article
![Create new article](https://user-images.githubusercontent.com/15182066/208686031-634340af-c6a2-443c-9b06-694d039f661a.png)
- Dashboard with all users' articles
![All publications](https://user-images.githubusercontent.com/15182066/208686019-607083ae-7484-4cf9-8de6-9380aa1e355f.png)
- User specific articles with public and private types
![User specific articles](https://user-images.githubusercontent.com/15182066/208686034-90fd287b-7c5e-47cb-8947-d5bad0bacd9c.png)
- Article detail page with likes and comments
![Article detail page](https://user-images.githubusercontent.com/15182066/208686041-951d8850-6464-49d7-a202-e126191bb1e7.png)
- Create new category
![Create new category](https://user-images.githubusercontent.com/15182066/208686051-930849ac-9cd4-4e8a-b3c9-c57aa8a3229a.png)
- All categories
![All categories](https://user-images.githubusercontent.com/15182066/208686046-9f22a2eb-4b94-4272-9579-4e3f6ad5467f.png)
- Articles of specific category
![Articles of specific category](https://user-images.githubusercontent.com/15182066/208686065-0d6f1d6c-570d-49f3-8ef7-db19034b985a.png)
- Edit profile
![Edit profile](https://user-images.githubusercontent.com/15182066/208686059-ebedfe50-9d3e-46dd-910f-3513408da7b7.png)
- Edit password
![Edit password](https://user-images.githubusercontent.com/15182066/208686062-da2c9781-e10c-4b62-9aa0-ceacbcaf4faf.png)

# About

- It has login, register, dashboard, my articles, category, article detail, update profile and update password pages
- User can see the public articles on dashboard
- You can like, and comment on the article at detail page
- You can check your private and public articles in My articles page
- You can create category and check articles specific to that category on category page

### Getting Started

Installation requirements:

1. Nodejs(>v14.20.0)
2. PostgreSQL(v14.6)

#### Steps to run the backend server:

1. Create the database with the name "tnews"

```bash
sudo -i -u postgres
```

```bash
createdb tnews
```

```bash
psql tnews
```

2. Create latest migrations,

```bash
npm run migrate
```

3. Run the server,

```bash
npm run start
```

Now the api server is running on [http://localhost:3000](http://localhost:3000).

#### Steps to run the frontend:

1. Go to the ui directory

```bash
cd ui
```

2. Run the development server

```bash
npm run dev
```

You can check the results on [http://localhost:3001](http://localhost:3001).

# Concepts

- Used Knex ORM to create queries with postgreSQL and migrations for the database schemas
- Implemented the Passport js authentication with local strategy at login and jwt strategy at updating user and articles
- Used JWT and Bcrypt for the user authentication

# Tech Stack

**Client:** Nuxt 3, Typescript, Pinia, TailwindCSS

**Server:** Node, Express, Knex, PostgreSQL, PassportJS, JWT, Bcrypt

**Formatting and Linting:** ESLint, Prettier
