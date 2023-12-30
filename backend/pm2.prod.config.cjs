module.exports = {
  apps: [
    {
      name: 'qat_prod_backend', // Name of the TypeScript application
      script: './out/index.js', // Script to be executed
      args: '', // 'start' for running in production mode
      watch: false, // Enable watching of file changes (set to false in production)
      env: {
        NODE_ENV: 'production', // Set NODE_ENV for production
        PORT: 4003, // Application's port
      },
      interpreter: 'bun',
      // exec_mode: 'cluster', // Enable cluster mode for load balancing
      // instances: 'max', // Use 'max' to utilize all available cores
      autorestart: true, // Automatically restart if the app crashes
      max_memory_restart: '4G', // Restart if memory limit is reached
    },
  ],
};
