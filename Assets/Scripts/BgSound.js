#pragma strict

private static var Created : boolean = false;

function Start () {
    if (!Created) {
        Created = true;
        DontDestroyOnLoad(gameObject);
    }
    else {
        Destroy(gameObject);
    }
}

function Update () {

}