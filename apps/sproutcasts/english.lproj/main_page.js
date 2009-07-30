// ==========================================================================
// Project:   Sproutcasts - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Sproutcasts */

// This page describes the main user interface for your application.  
Sproutcasts.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'labelView textViews'.w(),
    
    labelView: SC.LabelView.design({
      layout: { centerX: 0, top: 10, width: 200, height: 18 },
      tagName: "h1", 
      valueBinding: "Sproutcasts.personController.greeting"
    }),
  
    textViews: SC.View.design({
      layout: { centerX: 0, top: 50, width: 300, height: 26 },
      childViews: [
        SC.TextFieldView.design({
          layout: { left: 3, width: 130, height: 20, centerY:0},
          valueBinding: "Sproutcasts.personController.firstName"
        }),
        SC.TextFieldView.design({
          layout: { right: 3, width: 130, height: 20, centerY:0},
          valueBinding: "Sproutcasts.personController.lastName"
        })
      ]
    })
  })

});
