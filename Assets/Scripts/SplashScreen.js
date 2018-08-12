#pragma strict
var BlackIMG:Texture2D;
private var alpha:float;
var TimeWait:float;
var TimeChange:float;
function Start () {
    alpha = 0;
}

function Update () {
    if (Time.timeSinceLevelLoad > TimeWait) { 
    alpha += Time.deltaTime/TimeChange;
    }
    if (alpha >= 1) {
        Application.LoadLevel("Level1");
    }
}
function OnGUI() {
GUI.color = Color(1, 1, 1, alpha);
GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), BlackIMG);
}