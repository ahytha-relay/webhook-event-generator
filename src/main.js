const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  console.log("healthcheck");
  reply.send();
});

fastify.get('/helloworld', async (request, reply) => {
  console.log("server hit");
  reply.send('Hello World');
});

const start = async () => {
  try {
    await fastify.listen({
      port: 3000,
      host: '0.0.0.0'
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();