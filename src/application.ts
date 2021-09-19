import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan'

const application = express();

application.use(express.json());
application.use(express.urlencoded({ extended: false }));
application.use(helmet())
application.use(cors());
application.use(compression());
if (process.env.NODE_ENV === 'development') {
  application.use(morgan('tiny'));
}

export default application;

