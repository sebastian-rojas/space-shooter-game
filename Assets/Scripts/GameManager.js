#pragma strict
var EnemyPrefap:GameObject;
var PositionSpaw:Transform;
private var SizeCamera:Vector2;
function Start () {
    SizeCamera = Vector2(Camera.main.orthographicSize*Screen.width/Screen.height, Camera.main.orthographicSize);
    InvokeRepeating("SpawEnemy", 1, 1);
}

function Update () {

}
function SpawEnemy() {
    Instantiate(EnemyPrefap, PositionSpaw.position + Vector3(Random.Range(-SizeCamera.x, SizeCamera.x), 0, 0), Quaternion.identity);
}