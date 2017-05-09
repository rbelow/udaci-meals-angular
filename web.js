import gzippo from 'gzippo';
import express from 'express';
const app = express();

app.use(express.logger('dev'));
app.use(gzippo.staticGzip(`${__dirname}/dist`));
app.listen(process.env.PORT || 5000);
