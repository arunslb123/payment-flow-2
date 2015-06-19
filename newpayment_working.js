
jQuery( document ).ready(function($) {
  // **Item class**: The atomic part of our Model. A model is basically a Javascript object, i.e. key-value pairs, with some helper functions to handle event triggering, persistence, etc.
  var Item = Backbone.Model.extend({
    defaults: {
      username:"arun@entrayn.com"
    }
  });

  // **List class**: A collection of `Item`s. Basically an array of Model objects with some helper functions.
  var List = Backbone.Collection.extend({
    model: Item
  });

  var ListView = Backbone.View.extend({
    el: jQuery('#emailpart'),
    events: {
      'click button#emailbutton': 'addItem'
    },
    initialize: function(){
      _.bindAll(this, 'render', 'addItem', 'addPassword','setPasswords','validateEmail'); // remember: every function that uses 'this' as the current object should be in here

      this.collection = new List();
    },

    addItem: function(){
      var self=this;
      var item = new Item();
      var emailButtonVal=jQuery("#InputEmail").val();
      console.log("email value= "+emailButtonVal);
      var val= self.validateEmail(emailButtonVal);
      console.log(val);
      if( !self.validateEmail(emailButtonVal) || (!emailButtonVal)){
        alert("Enter the correct email id");
        //jQuery("#InputEmail").append('<div class="row"><div class="col-xs-6 col-xs-offset-2">Check </div></div>');
        console.log("appended")
      }

      else if(emailButtonVal===item.get('username')){
        self.addPassword();
      }else{
        self.setPasswords();
      }
      //console.log(emailButtonVal);
      console.log("additem check");
    },


    addPassword: function(){
          var emailButtonVal=jQuery("#InputEmail").val();
           jQuery("#emailpart").empty();
          var newDiv = emailButtonVal +'<br>'+'Enter Password'+
          '<input type="password" class="form-control" id="enterPassword"> <br>'+
          '<button type="button" class="btn btn-success btn-sm center-block" id="signinbutton"> Sign In</button>';
          jQuery('#emailpart').prepend(newDiv);
        // if( !this.validateEmail(emailaddress)) { /* do stuff here */ }

    },

    setPasswords: function(){

           jQuery("#emailpart").empty();
          var newDiv = 'Set Password'+
          '<input type="password" class="form-control" id="setPassword"> <br>'+
          'Confirm Password'+
          '<input type="password" class="form-control" id="confirmPassword"> <br>'+
          '<button type="button" class="btn btn-success btn-sm center-block" id="signupbutton">Sign Up</button>';
          jQuery('#emailpart').prepend(newDiv);

    },
    validateEmail:  function ($email) {

        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
         return emailReg.test( $email );
     }

  });

  var listView = new ListView();
});

// order summary

jQuery(document).ready(function($){

var Item=Backbone.Model.extend({
defaults:{
  imageCart :"http://entrayn.com/sites/default/files/styles/uc_cart/public/maths_1.jpg",
  productName : " GRE Mock Tests",
  price :"8000"
}

});

  var List = Backbone.Collection.extend({
    model: Item
  });

  var ListView = Backbone.View.extend({

    events: function () {
      $('#couponcheck2').click(function (e) {
        e.preventDefault();
        $('#couponcheck').empty();
       $('#couponcheck').append('<div class="col-xs-8"><input type="text" class="form-control" id="enterCoupon"></div>');
        $('#couponcheck').append('<div class="col-xs-8"><button type="button" class="btn btn-success btn-sm" id="couponbutton">Apply</button></div>');
      }),
       $(document).on('click', '#signupbutton', function(e){
    e.preventDefault();
    console.log("in sec 2")
  //  $('#section2').prepend('<h4 class="panel-title" data-parent="#accordion"data-target="#collapseTwo" data-toggle="collapse">')
    // $("#collapseOne").removeClass("in");
    // $("#collapseTwo").removeClass("in");
    // $( "#collapseTwo" ).addClass( "in" );
  });
    },

    initialize: function(){
            var self=this;
      _.bindAll(this,'addProductDetails'); // remember: every function that uses 'this' as the current object should be in here

      this.collection = new List();
      this.addProductDetails();
    },

    addProductDetails: function(){

      var item = new Item();

      var imageTag='<img src="'+item.get('imageCart')+'" class="img-responsive" alt="Cinque Terre">';
      // jQuery('#imagecart').append(imageTag);
      // jQuery('#productname').append('<br>'+item.get('productName'));
      // jQuery('#productprice').append('<br>'+item.get('price'));
      jQuery('#amountdisplay').append("Amout Payable Rs "+'<b>'+item.get('price')+'</b>');
$('#producttable').append('<tr><td><input type="checkbox" id="checkvalue"></td><td>'+imageTag+'</td><td>'+item.get('productName')+'</td><td>'+item.get('price')+'</tr>');
$('#producttable').append('<tr><td><input type="checkbox" id="checkvalue"></td><td>'+imageTag+'</td><td>'+item.get('productName')+'</td><td>'+item.get('price')+'</tr>');
$('#producttable').append('<tr><td><input type="checkbox" id="checkvalue"></td><td>'+imageTag+'</td><td>'+item.get('productName')+'</td><td>'+item.get('price')+'</tr>');
$('#ac1').append('<span class="tick"></span>');

    },

    addCoupon: function(){
       console.log("ch")
      $('#couponcheck').empty();
       $('#couponcheck').append('<input type="text" class="form-control" id="enterCoupon">');
       $('#couponcheck').append('<button type="button" class="btn btn-success btn-sm" id="couponbutton"><span class="glyphicon glyphicon-ok"></span> Apply</button>');

  }
    //console.log("sec check");
  });

  var listView = new ListView();



});


// accordion flow










jQuery( document ).ready(function($) {
  // **Item class**: The atomic part of our Model. A model is basically a Javascript object, i.e. key-value pairs, with some helper functions to handle event triggering, persistence, etc.
  var Item = Backbone.Model.extend({
    defaults: {
      part1: 'hello',
      part2: 'world',
      part3:'arun'
    }
  });

  // **List class**: A collection of `Item`s. Basically an array of Model objects with some helper functions.
  var List = Backbone.Collection.extend({
    model: Item
  });

  var ListView = Backbone.View.extend({
    el: jQuery('#container2'),
    events: {
      'dblclick button#add': 'addItem'
    },
    // `initialize()` now instantiates a Collection, and binds its `add` event to own method `appendItem`. (Recall that Backbone doesn't offer a separate Controller for bindings...).
    initialize: function(){
      _.bindAll(this, 'render', 'addItem', 'appendItem'); // remember: every function that uses 'this' as the current object should be in here

      this.collection = new List();
      this.collection.bind('add', this.appendItem); // collection event binder

      this.counter = 0;
      this.render();
    },
    render: function(){
      // Save reference to `this` so it can be accessed from within the scope of the callback below
      var self = this;
      jQuery(this.el).append("<button id='add'>Add list item</button>");
      jQuery(this.el).append("<ul></ul>");
      _(this.collection.models).each(function(item){ // in case collection is not empty
        self.appendItem(item);
      }, this);
    },
    // `addItem()` now deals solely with models/collections. View updates are delegated to the `add` event listener `appendItem()` below.
    addItem: function(){
      this.counter++;
      var item = new Item();
      item.set({
        part2: item.get('part2') + this.counter // modify item defaults
      });
      this.collection.add(item); // add item to collection; view is updated via event 'add'
    },
    // `appendItem()` is triggered by the collection event `add`, and handles the visual update.
    appendItem: function(item){
      jQuery('ul', this.el).append("<li>"+item.get('part1')+" "+item.get('part2')+item.get('part3')+"</li>");
    }
  });

  var listView = new ListView();
});


