import mongoose from 'mongoose'
import config from '../config'

mongoose.set('debug', true);

mongoose.connect(config.db);

mongoose.connection.on('disconnected', () => {
	mongoose.connect(config.db);		
});
mongoose.connection.on('error', err => {
	console.error(err);
});
mongoose.connection.on('open', async => {
	console.log('connected to MongoDB')
});
// models
require('./goods');
require('./order')

export const Order = mongoose.model('Order');
export const Goods = mongoose.model('Goods');
