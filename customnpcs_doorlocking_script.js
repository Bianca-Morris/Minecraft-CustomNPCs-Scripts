// Note that if the block is powered with redstone, it will still open. Prevent this using "function powered(event) {event.block.setCanceled(true);}" I didn't do this because I'll be using this script for rented keys, where the innkeeper/landlord will destroy any instances of the key in the player's inventory after a certain period of time. This will result in the possibility of the player getting locked inside of their room or house without a key to open the door, so I will allow them to use redstone buttons to power the door and exit. 

function init(event) {
	// initializes the door
	event.block.setBlockModel("minecraft:iron_door");
	event.block.setOpen(false);
}

function interact(event) {
	// initializes the item that will open the door
	var key = event.player.world.createItem("customnpcs:npcKey", 0, 1);
	key.setCustomName("Inn Key");
	
	// checks if there's a key item in inventory; if not, rejects player
	if (event.player.inventoryItemCount(key) < 1) {
		event.player.world.broadcast("The door is locked... I should rent a room key.");
		event.setCanceled(true);
	} else {
		// checks each item in player's inventory for a key with the right display name
		var rightItem = false;
		var playerInventory = event.player.getInventory();
		for (i=0; i < (playerInventory.length - 1); i++) {
			// if the inventory slot is empty, moves on to next
			if (playerInventory[i] == null){
				continue;
			}
			// is it the right item type w/right name? if so, stops checking item
			if ((playerInventory[i].getDisplayName() == key.getDisplayName()) && (playerInventory[i].getItemName() == key.getItemName())){
				rightItem = true;
				break;
			};
		};
		// if not, gives error message
		if (rightItem == false) {
			event.player.world.broadcast("The door is locked... I should rent a room key.");
			event.setCanceled(true);
		};		
	};
}

function tick(event) {
	// Checks each tick to see if the door is open; if it is, door autocloses. Should be just enough time between interaction and new tick to allow a single player to enter if they have a key.
	event.block.setOpen(false);
}