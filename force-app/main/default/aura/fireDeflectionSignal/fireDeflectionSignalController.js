({
    invoke : function(component, event, helper) {
        var evt = $A.get("e.lightningcommunity:deflectionSignal");
       
        if(component.get("v.shouldSubmitSourceTypeSignals") == false) {
            var SourceTypeSignals = 'shouldSubmitSourceTypeSignals';
        }
        if(component.get("v.shouldSubmitSourceTypeSignals") == true) {
            var SourceTypeSignals = 'true';
        }

        evt.setParams({
            sourceType: "caseCreateDeflectionModal",
            source: component.get("v.deflectionTerm"),
            destinationType: component.get("v.deflectionEntityType"),
            destination: component.get("v.deflectionEntityId"),
            payload: {
                deflectionAnswer: component.get("v.deflectionAnswer"),
                confirmationAnswer: component.get("v.confirmationAnswer"),
                state: component.get("v.deflectionState"),
                caseCreated: component.get("v.caseCreated")
            },
            shouldSubmitSourceTypeSignals:(SourceTypeSignals),
        });
        evt.fire();
    }
})
