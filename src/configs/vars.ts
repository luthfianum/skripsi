const vars = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    service: process.env.DB_SERVICE || 'postgres',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'surveyup',
    dialect: process.env.DB_DIALECT || 'postgres',
    logging: Boolean(process.env.DB_LOGGING) || false,
    schema: process.env.DB_SCHEMA || 'public',
  },
};

export default vars;