#pragma strict
var timeToDestroy = 0.5;
function Start () {
	yield WaitForSeconds(timeToDestroy);
	Destroy(transform.gameObject);
}

function Update () {

}