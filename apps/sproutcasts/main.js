// ==========================================================================
// Project:   Sproutcasts
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Sproutcasts */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Sproutcasts.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  var mainPane = Sproutcasts.getPath('mainPage.mainPane') ;
  Sproutcasts.getPath('mainPage.mainPane').append() ;

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: .contactsController.set('content',.contacts);
  
  var person = Sproutcasts.store.createRecord(Sproutcasts.Person, {firstName:"John", lastName:"Smith"}) ;
  
  Sproutcasts.personController.set('content', person) ;
  mainPane.makeFirstResponder(mainPane.get('responderView')) ;

} ;

function main() { Sproutcasts.main(); }
