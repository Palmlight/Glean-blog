module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        uri: env('DATABASE_URI'),
        srv: env.bool('DATABASE_SRV', true),
        port: env('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env('DATABASE_SSL', true),
      },
    },
  },
});