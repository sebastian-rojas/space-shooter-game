#pragma strict

var target : Transform;
var speed : float = 5.0f;
var health : int = 7;
var laser : GameObject;
var explosion : GameObject;

var shootWaitTime : float = 1.0f;
private var timer : float = 0.0f;

var SoundBulletCollision:AudioSource;

function Start () {
	if (!target)
	{
		target = GameObject.FindWithTag("Player").transform;
	}
}

function Update () {

	transform.position = Vector2.MoveTowards(transform.position, target.position, speed * Time.deltaTime);
	
	if (health <= 0)
	{
		controller.numEnemiesKilled++;
		Destroy(gameObject);
	}
	
	timer += Time.deltaTime;
	if (timer > shootWaitTime)
	{
		Instantiate(laser, transform.position, transform.rotation);
		timer = 0;
	}
}

function OnTriggerEnter(other : Collider)
{
	if (other.tag == "PLaser")
	{
		print("laser hit enemy");
		var exp = Instantiate(explosion.gameObject, transform.position, transform.rotation);
		health--;
        if (!SoundBulletCollision.isPlaying) {
            SoundBulletCollision.Play();
        }
        Destroy(other.gameObject);
	}
}