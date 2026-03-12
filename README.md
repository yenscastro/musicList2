# WEB103 Project 2 - *Music Listicle*

Submitted by: **Yens Castro**

About this web app: **This web application displays a list of iconic songs using a card-style layout. Users can browse songs on the homepage and click on a song to view detailed information. In Project 2, the application was upgraded to use a PostgreSQL database instead of static data. The backend now retrieves song data via SQL queries, while the frontend continues to use HTML, CSS, and JavaScript with PicoCSS for styling.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [X] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [X] **The walkthrough video demonstrates the Render dashboard showing the PostgreSQL database**
  - [ ]  **The walkthrough video demonstrates the table contents using the SELECT * FROM songs; command**


The following **additional** features are implemented:

- The following additional features are implemented:

- PostgreSQL database integration using the pg Node.js library

- Environment variable configuration using dotenv

- Database connection pooling for efficient queries

- SQL schema file to define the songs table

- Database seed script to populate initial data

- Responsive grid layout for song cards

- Dynamic song detail pages using unique routes

- Custom 404 error page

- Reusable header component loaded with JavaScript

## Video Walkthrough

https://youtu.be/Hlc-Oncsihg

## Notes

One of the main challenges in this project was migrating the application from static data to a PostgreSQL database. This required setting up a database connection pool, writing SQL queries to retrieve song data, and creating a seed script to populate the database..

## License

Copyright [2026] [Yens Castro]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
