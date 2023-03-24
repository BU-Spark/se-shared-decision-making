module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-138.railway.app'),
      port: env.int('PGPORT', 5865),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', '9tcJBdK6HqEQCdibzGuF'),
      ssl: env.bool(true),
    },
  },
});