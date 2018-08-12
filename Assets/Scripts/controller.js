#pragma strict

var speed : float = 5.0f;
var projectile : GameObject;
var explosion : GameObject;
var SoundShoot: AudioSource;

var dead = false;
var won = false;


var health : int = 5;

static var numEnemies : int = 6;
static var numEnemiesKilled : int = 0;

function OnLevelWasLoaded(level : int)
{
	Time.timeScale = 0.0f;
	numEnemiesKilled = 0;
}

function Start () {
	Time.timeScale = 0.0f;
	numEnemiesKilled = 0;
    InvokeRepeating("GetShoot", 0.1f, 0.1f);
}

function Update () {
	var vert = Input.GetAxisRaw("Vertical");
	var horz = Input.GetAxisRaw("Horizontal");
	
	
	transform.Translate(Vector3(horz, vert, 0) * Time.deltaTime * speed);
	
	
	if (health <= 0)
	{
		dead = true;
	}
	
	if (numEnemiesKilled >= numEnemies)
	{
		won = true;
	}

}
function GetShoot() {
    if (Input.GetButton("Fire1") && !dead && Time.timeScale != 0)
    {
        Shoot();
    }
}
function Shoot() {
Instantiate(projectile, transform.position, transform.rotation);
SoundShoot.Play();
}
function OnTriggerEnter(other : Collider)
{
	if (other.tag == "Enemy")
	{
		dead = true;

	}
	
	if (other.tag == "ELaser")
	{
		print("enemy laser hit me");
		Instantiate(explosion, transform.position, transform.rotation);
		health--;
	}
}

function OnGUI()
{
	if (Time.timeScale != 0)
	{
		GUILayout.Label("Health");
		GUILayout.HorizontalSlider(health, 0, 5);
	}
	
	if (dead)
	{
		health = 0;
		Time.timeScale = 0.0f;
		GUILayout.Label("YOU ARE DEAD!");
		if (GUILayout.Button("Try Again"))
		{
			Application.LoadLevel(Application.loadedLevel);
		}
		if (GUILayout.Button("Quit"))
		{
			Application.Quit();
			print("quitting");
		}
	}
	
	if (won)
	{
		Time.timeScale = 0.0f;
		GUILayout.Label("YOU WON!");
        
		
        if (GameObject.Find("LastLevel") != null) {
            if (GUILayout.Button("Play Again"))
            {
                Application.LoadLevel("Level1");
            }
        } else {
			if (GUILayout.Button("Next Level"))
            {
                Application.LoadLevel(Application.loadedLevel + 1);
            }
        }
		if (GUILayout.Button("Quit"))
		{
			Application.Quit();
			print("quitting");
		}

	}
	
	if (Time.timeScale == 0 && !dead && !won)
	{
		GUILayout.Label("Space Shooter\n\n-Use the Arrow Keys or WASD to move\n-Click the mouse button to fire");
		if (GUILayout.Button("Play!"))
		{
			Time.timeScale = 1.0f;
		}
		if (GUILayout.Button("Quit"))
		{
			Application.Quit();
			print("quitting");
		}
	}
}
