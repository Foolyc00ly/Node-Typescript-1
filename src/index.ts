import{CONSOLEHandler,Main}from 'common/config';
import argv from 'config/yargs';

CONSOLEHandler.render(Main,argv['b'],argv['l'],argv['h']);
