/**
 * The Item class is a blueprint for each game element we generate
 * @author  John Doe
 * @version 1.0, Nov 2015
 */
function Item(){
	//properties to let each item store its own x/y position
	this.x = Math.floor(Math.random()*720); 
	this.y = Math.floor(Math.random()*500);
	//property that keeps track of the item's visual
	this.item_on_page;
	/**
	 * The create method puts a visual of the item on the screen
	 */ 
	 this.create = function(){
		 this.item_on_page = document.createElement("div");
		 this.item_on_page.className = "raindrop";
		 //use this object's x & y var's to position it in CSS
		 this.item_on_page.style.left = this.x + "px";
		 this.item_on_page.style.top = this.y + "px";
		 //put the div on the page as a child of the body
		 document.body.appendChild(this.item_on_page);
	 }//end function create()
	 /**
	 * The destroy method removes the item from the game
	 */ 
	 this.destroy = function(){
		 
	 }//end function destroy()

}//end the Item class