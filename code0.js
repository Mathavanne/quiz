gdjs.Start_32GameCode = {};
gdjs.Start_32GameCode.localVariables = [];
gdjs.Start_32GameCode.GDbgObjects1= [];
gdjs.Start_32GameCode.GDbgObjects2= [];
gdjs.Start_32GameCode.GDStartObjects1= [];
gdjs.Start_32GameCode.GDStartObjects2= [];
gdjs.Start_32GameCode.GDAfterObjects1= [];
gdjs.Start_32GameCode.GDAfterObjects2= [];
gdjs.Start_32GameCode.GDBackgroundObjects1= [];
gdjs.Start_32GameCode.GDBackgroundObjects2= [];
gdjs.Start_32GameCode.GDHintObjects1= [];
gdjs.Start_32GameCode.GDHintObjects2= [];


gdjs.Start_32GameCode.asyncCallback9766052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Start_32GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Start"), gdjs.Start_32GameCode.GDStartObjects2);

{for(var i = 0, len = gdjs.Start_32GameCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDStartObjects2[i].hide(false);
}
}gdjs.Start_32GameCode.localVariables.length = 0;
}
gdjs.Start_32GameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Start_32GameCode.localVariables);
for (const obj of gdjs.Start_32GameCode.GDStartObjects1) asyncObjectsList.addObject("Start", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Start_32GameCode.asyncCallback9766052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Start_32GameCode.GDStartObjects1});
gdjs.Start_32GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Start_32GameCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDStartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9766900);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Question_1", false);
}}

}


};gdjs.Start_32GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Start_32GameCode.GDStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.Start_32GameCode.GDbgObjects1);
{for(var i = 0, len = gdjs.Start_32GameCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDbgObjects1[i].play();
}
}{for(var i = 0, len = gdjs.Start_32GameCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDStartObjects1[i].hide();
}
}
{ //Subevents
gdjs.Start_32GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Start_32GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Start_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32GameCode.GDbgObjects1.length = 0;
gdjs.Start_32GameCode.GDbgObjects2.length = 0;
gdjs.Start_32GameCode.GDStartObjects1.length = 0;
gdjs.Start_32GameCode.GDStartObjects2.length = 0;
gdjs.Start_32GameCode.GDAfterObjects1.length = 0;
gdjs.Start_32GameCode.GDAfterObjects2.length = 0;
gdjs.Start_32GameCode.GDBackgroundObjects1.length = 0;
gdjs.Start_32GameCode.GDBackgroundObjects2.length = 0;
gdjs.Start_32GameCode.GDHintObjects1.length = 0;
gdjs.Start_32GameCode.GDHintObjects2.length = 0;

gdjs.Start_32GameCode.eventsList2(runtimeScene);
gdjs.Start_32GameCode.GDbgObjects1.length = 0;
gdjs.Start_32GameCode.GDbgObjects2.length = 0;
gdjs.Start_32GameCode.GDStartObjects1.length = 0;
gdjs.Start_32GameCode.GDStartObjects2.length = 0;
gdjs.Start_32GameCode.GDAfterObjects1.length = 0;
gdjs.Start_32GameCode.GDAfterObjects2.length = 0;
gdjs.Start_32GameCode.GDBackgroundObjects1.length = 0;
gdjs.Start_32GameCode.GDBackgroundObjects2.length = 0;
gdjs.Start_32GameCode.GDHintObjects1.length = 0;
gdjs.Start_32GameCode.GDHintObjects2.length = 0;


return;

}

gdjs['Start_32GameCode'] = gdjs.Start_32GameCode;
