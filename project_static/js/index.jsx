'use strict';

import Point from 'my_app/static/my_app/js/my_app'

const body = document.querySelector('body');

let point = new Point(1,2);
body.textContent = `Point: ${point}`;