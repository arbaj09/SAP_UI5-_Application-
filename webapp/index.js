sap.ui.define(["sap/ui/core/ComponentContainer"],function (ComponentContainer){
    "use strict"

    // XMLView.create({
    //     id:"app",
    //     viewName:"sap.training.exc.view.App"

    // }).then(function (oView){
    //     oView.placeAt("content");
    // })

    var oContainer= new ComponentContainer({
        id:'container',
        name:'sap.training.exc',
        manefest:true,
        async:true,
        settings:{
            id:'sap.training.exc'
        }

    })

    oContainer.placeAt('content');

    




    
});