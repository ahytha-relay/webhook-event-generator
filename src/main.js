const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return 'Hello World';
});


const start = async () => {
  try {
    await fastiy.listen({port: 3000});
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();