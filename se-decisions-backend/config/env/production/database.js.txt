module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('postgresql://postgres:bakdIdhaWdfU5jzQRpAl@containers-us-west-190.railway.app:7368/railway'),
        host: env('PGHOST', 'containers-us-west-190.railway.app'),
        port: env.int('PGPORT', 7368),
        database: env('PGDATABASE', 'railway'),
        user: env('PGUSER', 'postgres'),
        password: env('PGPASSWORD', 'bakdIdhaWdfU5jzQRpAl'),
        ssl: env.bool(true),
      },
    },
  });