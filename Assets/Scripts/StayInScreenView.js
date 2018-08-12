 /**
  * Restricts the movement of the object to the screen.
  * @author Jorjon
  *(From Unity Answers)
  */
 

     
     function LateUpdate () {
         var left = Camera.main.ViewportToWorldPoint(Vector3.zero).x;
         var right = Camera.main.ViewportToWorldPoint(Vector3.one).x;
         var top = Camera.main.ViewportToWorldPoint(Vector3.zero).y;
         var bottom = Camera.main.ViewportToWorldPoint(Vector3.one).y;
         var x = transform.position.x;
         var y = transform.position.y;
         if (transform.position.x <= left + GetComponent.<Renderer>().bounds.extents.x) {
             x = left + GetComponent.<Renderer>().bounds.extents.x;
         } else if (transform.position.x >= right - GetComponent.<Renderer>().bounds.extents.x) {
             x = right - GetComponent.<Renderer>().bounds.extents.x;
         }
         if (transform.position.y <= top + GetComponent.<Renderer>().bounds.extents.y) {
             y = top + GetComponent.<Renderer>().bounds.extents.y;
         } else if (transform.position.y >= bottom - GetComponent.<Renderer>().bounds.extents.y) {
             y = bottom - GetComponent.<Renderer>().bounds.extents.y;
         }
         transform.position = new Vector3(x, y, transform.position.z);
     }
 