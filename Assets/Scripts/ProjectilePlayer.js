#pragma strict

var speed : float = 5.0f;
var isPlayer = true;

private var player : Transform;
private var SizeCamera:Vector2;
function Start () {
    SizeCamera = Vector2(Camera.main.orthographicSize*Screen.width/Screen.height, Camera.main.orthographicSize);
    player = GameObject.FindWithTag("Player").transform;
    if (!isPlayer)
    {
        speed *= -1;
         if (player.position.y <= transform.position.y )
         {
             
         }
         else
         {
             speed = -speed;
         }
    }
}

function Update () {
     transform.Translate(Vector3(0, speed , 0) * Time.deltaTime );
     if (transform.position.x < -SizeCamera.x
     || transform.position.x > SizeCamera.x
     || transform.position.y < -SizeCamera.y
     || transform.position.y > SizeCamera.y) {
        Destroy(gameObject);
     }
}