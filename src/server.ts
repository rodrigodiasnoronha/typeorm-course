import App from './app';

const { server } = new App();

const port = process.env.PORT || 3333;
server.listen(port, () => console.log(`server running port ${port}`));
