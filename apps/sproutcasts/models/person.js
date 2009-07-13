// ==========================================================================
// Project:   Sproutcasts.Person
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Sproutcasts */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Sproutcasts.Person = SC.Record.extend(
/** @scope Sproutcasts.Person.prototype */ {

  firstName: SC.Record.attr(String),
  lastName: SC.Record.attr(String),
  
  fullName: function() {
    return this.get('firstName')+" "+this.get('lastName') ;
  }.property('firstName', 'lastName').cacheable()

}) ;
