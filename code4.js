gdjs.End_32GameCode = {};
gdjs.End_32GameCode.localVariables = [];
gdjs.End_32GameCode.GDbgObjects1= [];
gdjs.End_32GameCode.GDbgObjects2= [];
gdjs.End_32GameCode.GDExitObjects1= [];
gdjs.End_32GameCode.GDExitObjects2= [];
gdjs.End_32GameCode.GDAfterObjects1= [];
gdjs.End_32GameCode.GDAfterObjects2= [];
gdjs.End_32GameCode.GDBackgroundObjects1= [];
gdjs.End_32GameCode.GDBackgroundObjects2= [];
gdjs.End_32GameCode.GDHintObjects1= [];
gdjs.End_32GameCode.GDHintObjects2= [];


gdjs.End_32GameCode.asyncCallback9830252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.End_32GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Exit"), gdjs.End_32GameCode.GDExitObjects2);

{for(var i = 0, len = gdjs.End_32GameCode.GDExitObjects2.length ;i < len;++i) {
    gdjs.End_32GameCode.GDExitObjects2[i].hide(false);
}
}gdjs.End_32GameCode.localVariables.length = 0;
}
gdjs.End_32GameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.End_32GameCode.localVariables);
for (const obj of gdjs.End_32GameCode.GDExitObjects1) asyncObjectsList.addObject("Exit", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.End_32GameCode.asyncCallback9830252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.End_32GameCode.mapOfGDgdjs_9546End_959532GameCode_9546GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.End_32GameCode.GDExitObjects1});
gdjs.End_32GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.End_32GameCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.End_32GameCode.mapOfGDgdjs_9546End_959532GameCode_9546GDExitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9831452);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Game", false);
}}

}


};gdjs.End_32GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.End_32GameCode.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.End_32GameCode.GDbgObjects1);
{for(var i = 0, len = gdjs.End_32GameCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.End_32GameCode.GDbgObjects1[i].play();
}
}{for(var i = 0, len = gdjs.End_32GameCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.End_32GameCode.GDExitObjects1[i].hide();
}
}
{ //Subevents
gdjs.End_32GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.End_32GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.End_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32GameCode.GDbgObjects1.length = 0;
gdjs.End_32GameCode.GDbgObjects2.length = 0;
gdjs.End_32GameCode.GDExitObjects1.length = 0;
gdjs.End_32GameCode.GDExitObjects2.length = 0;
gdjs.End_32GameCode.GDAfterObjects1.length = 0;
gdjs.End_32GameCode.GDAfterObjects2.length = 0;
gdjs.End_32GameCode.GDBackgroundObjects1.length = 0;
gdjs.End_32GameCode.GDBackgroundObjects2.length = 0;
gdjs.End_32GameCode.GDHintObjects1.length = 0;
gdjs.End_32GameCode.GDHintObjects2.length = 0;

gdjs.End_32GameCode.eventsList2(runtimeScene);
gdjs.End_32GameCode.GDbgObjects1.length = 0;
gdjs.End_32GameCode.GDbgObjects2.length = 0;
gdjs.End_32GameCode.GDExitObjects1.length = 0;
gdjs.End_32GameCode.GDExitObjects2.length = 0;
gdjs.End_32GameCode.GDAfterObjects1.length = 0;
gdjs.End_32GameCode.GDAfterObjects2.length = 0;
gdjs.End_32GameCode.GDBackgroundObjects1.length = 0;
gdjs.End_32GameCode.GDBackgroundObjects2.length = 0;
gdjs.End_32GameCode.GDHintObjects1.length = 0;
gdjs.End_32GameCode.GDHintObjects2.length = 0;


return;

}

gdjs['End_32GameCode'] = gdjs.End_32GameCode;
