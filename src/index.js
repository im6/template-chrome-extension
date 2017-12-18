import $ from 'jquery';
import config from './config.json';


const elems = config.path[window.location.pathname].rm;
elems.forEach(v => {
  $(v).each((k1, v1) => {
    v1.remove();
  });
});