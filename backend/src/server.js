import mongoose from 'mongoose';
import app from './app';

mongoose.connect(process.env.SERVER_TOKEN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.listen(3333);
