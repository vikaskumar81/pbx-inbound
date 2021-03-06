'use strict';

module.exports = function(app) {
    var Option = require('../controller/option.class');
    var User = require('../controller/user.class');
    var Campaign = require('../controller/campaign.class');
    var Message = require('../controller/message.class');
    var Supplier = require('../controller/supplier.class');
    var Leads = require('../controller/upload.class');
    var Extension = require('../controller/extension.class');
    var Did = require('../controller/did.class');
    var Queue = require('../controller/queue.class');
    var multer = require('multer');
    var DIR = '../server/uploads/';    
    var upload = multer({dest: DIR});
    var fs = require('fs');
    var type = upload.single('filename');
    // todoList Routes
    app.route('/option/message').get(Option.Message);
    app.route('/option/supplier').get(Option.Supplier);
    app.route('/option/campaign').get(Option.Campaign);
    app.route('/option/extension').get(Option.Extension);
    app.route('/option/customer').get(Option.Customer);
    app.route('/option/queue').get(Option.Queue);

    app.route('/user')
      .get(User.List)
      .post(User.AddNew);
  
    app.route('/user/:id')
      .get(User.Detail)
      .put(User.Update)
      .delete(User.Delete);
    
    app.route('/campaign')
      .get(Campaign.List)
      .post(Campaign.AddNew);
  
    app.route('/campaign/:id')
      .post(Campaign.Status)
      .get(Campaign.Detail)
      .put(Campaign.Update)
      .delete(Campaign.Delete);
    
    app.route('/message')
      .get(Message.List)
      .post(type, Message.Upload);
  
    app.route('/message/:id')
      .get(Message.Detail)
      .put(Message.Update)
      .delete(Message.Delete);
    
    app.route('/supplier')
      .get(Supplier.List)
      .post(Supplier.AddNew);

    app.route('/supplier/:id')
      .get(Supplier.Detail)
      .put(Supplier.Update)
      .delete(Supplier.Delete);

    app.route('/leads')
      .get(Leads.List)
      .post(type, Leads.Upload);
      
	  app.route('/leads/:id')
      .get(Leads.Detail)
      .put(Leads.Update)
      .delete(Leads.Delete);

    app.route('/extension')
      .get(Extension.List)
      .post(Extension.AddNew);
	  
	  app.route('/extension/:id')
      .get(Extension.Detail)
      .put(Extension.Update)
      .delete(Extension.Delete);

      app.route('/did')
      .get(Did.List)
      .post(Did.AddNew);

    app.route('/did/:id')
      .get(Did.Detail)
      .put(Did.Update)
      .delete(Did.Delete);

      app.route('/queue')
      .get(Queue.List)
      .post(Queue.AddNew);

    app.route('/queue/:id')
      .get(Queue.Detail)
      .put(Queue.Update)
      .delete(Queue.Delete);
  
}
