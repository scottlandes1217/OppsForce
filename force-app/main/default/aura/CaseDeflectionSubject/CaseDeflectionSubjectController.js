({
     itemsChange : function(component, event, helper) {           
           var appEvent = $A.get("e.selfService:caseCreateFieldChange");
           appEvent.setParams({
               "modifiedField": event.getSource().get("v.fieldName"),
               "modifiedFieldValue": event.getSource().get("v.value")
           });
   
           appEvent.fire();

           var subjectText = component.find("sub").get("v.value");
           component.set("v.subject", subjectText);
        },

   })