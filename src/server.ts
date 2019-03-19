import cors from 'cors';
import express from 'express';
import MyODataServer from './MyODataServer';

const app = express();
app.use(cors());
app.get('/', (req, res) => res.send({ hello: 'world' }));
app.use('/odata', MyODataServer.create());
app.listen(3000, () => console.log('Example app listening on port 3000!'));
