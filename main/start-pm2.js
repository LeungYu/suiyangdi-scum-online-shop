const pm2 = require('pm2');

pm2.connect(function(err) {
  if (err) {
    console.error(err);
    process.exit(2);
  }
  pm2.start(
    {
      script: './dist/main.js',
      name: 'suiyangdi-scum-mall',
      exec_mode: 'cluster',
      instances: '1',
      env: {
        SERVER_NODE_ENV: process.env.SERVER_NODE_ENV || 'production',
      },
      max_memory_restart: '700M',
      cron_restart: '0 7 * * *'
    },
    (err, apps) => {
      pm2.disconnect();
      if (err) {
        throw err;
      }
    },
  );
});
