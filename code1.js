gdjs.Question_951Code = {};
gdjs.Question_951Code.localVariables = [];
gdjs.Question_951Code.GDQuestionObjects1= [];
gdjs.Question_951Code.GDQuestionObjects2= [];
gdjs.Question_951Code.GDAnswer_95951Objects1= [];
gdjs.Question_951Code.GDAnswer_95951Objects2= [];
gdjs.Question_951Code.GDAnswer_95952Objects1= [];
gdjs.Question_951Code.GDAnswer_95952Objects2= [];
gdjs.Question_951Code.GDAnswer_95953Objects1= [];
gdjs.Question_951Code.GDAnswer_95953Objects2= [];
gdjs.Question_951Code.GDAnswer_95954Objects1= [];
gdjs.Question_951Code.GDAnswer_95954Objects2= [];
gdjs.Question_951Code.GDCorrectObjects1= [];
gdjs.Question_951Code.GDCorrectObjects2= [];
gdjs.Question_951Code.GDWrong1Objects1= [];
gdjs.Question_951Code.GDWrong1Objects2= [];
gdjs.Question_951Code.GDWrong2Objects1= [];
gdjs.Question_951Code.GDWrong2Objects2= [];
gdjs.Question_951Code.GDWrong3Objects1= [];
gdjs.Question_951Code.GDWrong3Objects2= [];
gdjs.Question_951Code.GDSl_9595NoObjects1= [];
gdjs.Question_951Code.GDSl_9595NoObjects2= [];
gdjs.Question_951Code.GDAfterObjects1= [];
gdjs.Question_951Code.GDAfterObjects2= [];
gdjs.Question_951Code.GDBackgroundObjects1= [];
gdjs.Question_951Code.GDBackgroundObjects2= [];
gdjs.Question_951Code.GDHintObjects1= [];
gdjs.Question_951Code.GDHintObjects2= [];


gdjs.Question_951Code.mapOfGDgdjs_9546Question_9595951Code_9546GDAnswer_959595951Objects1Objects = Hashtable.newFrom({"Answer_1": gdjs.Question_951Code.GDAnswer_95951Objects1});
gdjs.Question_951Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Answer_1"), gdjs.Question_951Code.GDAnswer_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question_951Code.mapOfGDgdjs_9546Question_9595951Code_9546GDAnswer_959595951Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9780044);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("After"), gdjs.Question_951Code.GDAfterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Correct"), gdjs.Question_951Code.GDCorrectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hint"), gdjs.Question_951Code.GDHintObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wrong1"), gdjs.Question_951Code.GDWrong1Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "select_007.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.Question_951Code.GDWrong1Objects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDWrong1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_951Code.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDCorrectObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_951Code.GDHintObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDHintObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_951Code.GDAfterObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDAfterObjects1[i].hide(false);
}
}}

}


};gdjs.Question_951Code.mapOfGDgdjs_9546Question_9595951Code_9546GDAnswer_959595952Objects1Objects = Hashtable.newFrom({"Answer_2": gdjs.Question_951Code.GDAnswer_95952Objects1});
gdjs.Question_951Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Answer_2"), gdjs.Question_951Code.GDAnswer_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question_951Code.mapOfGDgdjs_9546Question_9595951Code_9546GDAnswer_959595952Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9782380);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("After"), gdjs.Question_951Code.GDAfterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Correct"), gdjs.Question_951Code.GDCorrectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hint"), gdjs.Question_951Code.GDHintObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "select_007.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.Question_951Code.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDCorrectObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_951Code.GDHintObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDHintObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_951Code.GDAfterObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDAfterObjects1[i].hide(false);
}
}}

}


};gdjs.Question_951Code.mapOfGDgdjs_9546Question_9595951Code_9546GDAnswer_959595953Objects1Objects = Hashtable.newFrom({"Answer_3": gdjs.Question_951Code.GDAnswer_95953Objects1});
gdjs.Question_951Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Answer_3"), gdjs.Question_951Code.GDAnswer_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question_951Code.mapOfGDgdjs_9546Question_9595951Code_9546GDAnswer_959595953Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9784636);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("After"), gdjs.Question_951Code.GDAfterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Correct"), gdjs.Question_951Code.GDCorrectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hint"), gdjs.Question_951Code.GDHintObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wrong2"), gdjs.Question_951Code.GDWrong2Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "select_007.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.Question_951Code.GDWrong2Objects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDWrong2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_951Code.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDCorrectObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_951Code.GDHintObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDHintObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_951Code.GDAfterObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDAfterObjects1[i].hide(false);
}
}}

}


};gdjs.Question_951Code.mapOfGDgdjs_9546Question_9595951Code_9546GDAnswer_959595954Objects1Objects = Hashtable.newFrom({"Answer_4": gdjs.Question_951Code.GDAnswer_95954Objects1});
gdjs.Question_951Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Answer_4"), gdjs.Question_951Code.GDAnswer_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question_951Code.mapOfGDgdjs_9546Question_9595951Code_9546GDAnswer_959595954Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9786884);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("After"), gdjs.Question_951Code.GDAfterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Correct"), gdjs.Question_951Code.GDCorrectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hint"), gdjs.Question_951Code.GDHintObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wrong3"), gdjs.Question_951Code.GDWrong3Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "select_007.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.Question_951Code.GDWrong3Objects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDWrong3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_951Code.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDCorrectObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_951Code.GDHintObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDHintObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_951Code.GDAfterObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDAfterObjects1[i].hide(false);
}
}}

}


};gdjs.Question_951Code.mapOfGDgdjs_9546Question_9595951Code_9546GDHintObjects1Objects = Hashtable.newFrom({"Hint": gdjs.Question_951Code.GDHintObjects1});
gdjs.Question_951Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Hint"), gdjs.Question_951Code.GDHintObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question_951Code.mapOfGDgdjs_9546Question_9595951Code_9546GDHintObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9789124);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Correct"), gdjs.Question_951Code.GDCorrectObjects1);
{for(var i = 0, len = gdjs.Question_951Code.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDCorrectObjects1[i].hide(false);
}
}}

}


};gdjs.Question_951Code.mapOfGDgdjs_9546Question_9595951Code_9546GDAfterObjects1Objects = Hashtable.newFrom({"After": gdjs.Question_951Code.GDAfterObjects1});
gdjs.Question_951Code.asyncCallback9790708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Question_951Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Question_2", false);
}gdjs.Question_951Code.localVariables.length = 0;
}
gdjs.Question_951Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Question_951Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Question_951Code.asyncCallback9790708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Question_951Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("After"), gdjs.Question_951Code.GDAfterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question_951Code.mapOfGDgdjs_9546Question_9595951Code_9546GDAfterObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9790500);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Question_951Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Question_951Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("After"), gdjs.Question_951Code.GDAfterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Correct"), gdjs.Question_951Code.GDCorrectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hint"), gdjs.Question_951Code.GDHintObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wrong1"), gdjs.Question_951Code.GDWrong1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wrong2"), gdjs.Question_951Code.GDWrong2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wrong3"), gdjs.Question_951Code.GDWrong3Objects1);
{for(var i = 0, len = gdjs.Question_951Code.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDCorrectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Question_951Code.GDWrong1Objects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDWrong1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Question_951Code.GDWrong2Objects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDWrong2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Question_951Code.GDWrong3Objects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDWrong3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Question_951Code.GDHintObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDHintObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Question_951Code.GDAfterObjects1.length ;i < len;++i) {
    gdjs.Question_951Code.GDAfterObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Question_951Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Question_951Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Question_951Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Question_951Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Question_951Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Question_951Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.Question_951Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Question_951Code.GDQuestionObjects1.length = 0;
gdjs.Question_951Code.GDQuestionObjects2.length = 0;
gdjs.Question_951Code.GDAnswer_95951Objects1.length = 0;
gdjs.Question_951Code.GDAnswer_95951Objects2.length = 0;
gdjs.Question_951Code.GDAnswer_95952Objects1.length = 0;
gdjs.Question_951Code.GDAnswer_95952Objects2.length = 0;
gdjs.Question_951Code.GDAnswer_95953Objects1.length = 0;
gdjs.Question_951Code.GDAnswer_95953Objects2.length = 0;
gdjs.Question_951Code.GDAnswer_95954Objects1.length = 0;
gdjs.Question_951Code.GDAnswer_95954Objects2.length = 0;
gdjs.Question_951Code.GDCorrectObjects1.length = 0;
gdjs.Question_951Code.GDCorrectObjects2.length = 0;
gdjs.Question_951Code.GDWrong1Objects1.length = 0;
gdjs.Question_951Code.GDWrong1Objects2.length = 0;
gdjs.Question_951Code.GDWrong2Objects1.length = 0;
gdjs.Question_951Code.GDWrong2Objects2.length = 0;
gdjs.Question_951Code.GDWrong3Objects1.length = 0;
gdjs.Question_951Code.GDWrong3Objects2.length = 0;
gdjs.Question_951Code.GDSl_9595NoObjects1.length = 0;
gdjs.Question_951Code.GDSl_9595NoObjects2.length = 0;
gdjs.Question_951Code.GDAfterObjects1.length = 0;
gdjs.Question_951Code.GDAfterObjects2.length = 0;
gdjs.Question_951Code.GDBackgroundObjects1.length = 0;
gdjs.Question_951Code.GDBackgroundObjects2.length = 0;
gdjs.Question_951Code.GDHintObjects1.length = 0;
gdjs.Question_951Code.GDHintObjects2.length = 0;

gdjs.Question_951Code.eventsList7(runtimeScene);
gdjs.Question_951Code.GDQuestionObjects1.length = 0;
gdjs.Question_951Code.GDQuestionObjects2.length = 0;
gdjs.Question_951Code.GDAnswer_95951Objects1.length = 0;
gdjs.Question_951Code.GDAnswer_95951Objects2.length = 0;
gdjs.Question_951Code.GDAnswer_95952Objects1.length = 0;
gdjs.Question_951Code.GDAnswer_95952Objects2.length = 0;
gdjs.Question_951Code.GDAnswer_95953Objects1.length = 0;
gdjs.Question_951Code.GDAnswer_95953Objects2.length = 0;
gdjs.Question_951Code.GDAnswer_95954Objects1.length = 0;
gdjs.Question_951Code.GDAnswer_95954Objects2.length = 0;
gdjs.Question_951Code.GDCorrectObjects1.length = 0;
gdjs.Question_951Code.GDCorrectObjects2.length = 0;
gdjs.Question_951Code.GDWrong1Objects1.length = 0;
gdjs.Question_951Code.GDWrong1Objects2.length = 0;
gdjs.Question_951Code.GDWrong2Objects1.length = 0;
gdjs.Question_951Code.GDWrong2Objects2.length = 0;
gdjs.Question_951Code.GDWrong3Objects1.length = 0;
gdjs.Question_951Code.GDWrong3Objects2.length = 0;
gdjs.Question_951Code.GDSl_9595NoObjects1.length = 0;
gdjs.Question_951Code.GDSl_9595NoObjects2.length = 0;
gdjs.Question_951Code.GDAfterObjects1.length = 0;
gdjs.Question_951Code.GDAfterObjects2.length = 0;
gdjs.Question_951Code.GDBackgroundObjects1.length = 0;
gdjs.Question_951Code.GDBackgroundObjects2.length = 0;
gdjs.Question_951Code.GDHintObjects1.length = 0;
gdjs.Question_951Code.GDHintObjects2.length = 0;


return;

}

gdjs['Question_951Code'] = gdjs.Question_951Code;
