import 'dotenv/config';
import application from './application';

const serverPort = process.env.SERVER_PORT || 3333;

application.listen(serverPort, () => console.log(`Server running on *:${serverPort}`));

