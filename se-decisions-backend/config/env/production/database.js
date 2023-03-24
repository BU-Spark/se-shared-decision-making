module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('PGHOST', 'containers-us-west-190.railway.app'),
        port: env.int('PGPORT', 7368),
        database: env('PGDATABASE', 'railway'),
        user: env('PGUSER', 'postgres'),
        password: env('PGPASSWORD', 'bakdIdhaWdfU5jzQRpAl'),
        ssl: env.bool(true),
      },
    },
  });