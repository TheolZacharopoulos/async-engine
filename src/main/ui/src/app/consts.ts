export class Consts {
  static readonly API_URL: string = 'http://localhost:8081/api';
  // static readonly API_URL: string = window.location.protocol + "//" + window.location.host + '/api';

  static readonly TASK : string = '/task';
  static readonly TASK_GROUP : string = '/task/group';
  static readonly SCHEDULED_TASK : string = '/scheduledTask';

  static readonly ProgressBar = require('progressbar.js');
}
