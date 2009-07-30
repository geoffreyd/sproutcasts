// ==========================================================================
// Project:   Sproutcasts.personController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Sproutcasts */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Sproutcasts.personController = SC.ObjectController.create(
/** @scope Sproutcasts.personController.prototype */ {

  greeting: function(){
    return "Hello, "+this.get('fullName') ;
  }.property("fullName").cacheable()

}) ;
