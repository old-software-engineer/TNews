# Description

This is news website prototype created with node js in the backend and nuxt 3 in the frontend. Here we can create the news article and user can see it on the public dashboard. Also, he can like and comment on that article.

# Screenshots

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

**Client:** Nuxt 3, Pinia, TailwindCSS

**Server:** Node, Express, Knex, PostgreSQL, PassportJS, JWT, Bcrypt
