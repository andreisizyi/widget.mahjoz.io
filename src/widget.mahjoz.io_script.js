
require('./styles.scss');

import { get_parameters, add_button, add_onlick_event } from './functions.js';

window.onload = function() {
  let parameters = get_parameters();
  let button = add_button(parameters.button_text, parameters.button_text_color, parameters.button_backgroud_color);
  add_onlick_event(button, parameters);
}
