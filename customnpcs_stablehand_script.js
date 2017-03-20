function dialog(event){
	switch(event.dialog.getId()) {
		// thoroughbred
		case 21: //dialog id #
			// checks for gold or emerald coins
			if (checkForMoney(event, "customnpcs:npcCoinDiamond", 44)){
				// see minecraft console commands for details about this command
				event.npc.executeCommand("/summon EntityHorse -7 36 -194 {Type:0, Variant:257, Tame:1, Age:0, Health:24.0f, PersistenceRequired:0, Attributes:[{Name:generic.movementSpeed,Base:.257},{Name:horse.jumpStrength,Base:.72}]}");
				event.npc.say("Your horse is in stall 3.");
			}
			break;
		// mustang
		case 22:
			if (checkForMoney(event, "customnpcs:npcCoinEmerald", 1) || (checkForMoney(event, "customnpcs:npcCoinDiamond", 64))){
				event.npc.executeCommand("/summon EntityHorse -10 36 -194 {Type:0, Variant:1028, Tame:1, Age:0, Health:26.0f, PersistenceRequired:0, Attributes:[{Name:generic.movementSpeed,Base:.280},{Name:horse.jumpStrength,Base:.79}]}");
				event.npc.say("Your horse is in stall 2.");
			}
			break;
		// quarter horse
		case 23:
			if (checkForMoney(event, "customnpcs:npcCoinEmerald", 2) || (checkForMoney(event, "customnpcs:npcCoinDiamond", 128))){
				event.npc.executeCommand("/summon EntityHorse -13 36 -194 {Type:0, Variant:5, Tame:1, Age:0, Health:28.0f, PersistenceRequired:0, Attributes:[{Name:generic.movementSpeed,Base:.305},{Name:horse.jumpStrength,Base:.85}]}");
				event.npc.say("Your horse is in stall 1.");
			}
			break;
		default:
			break;
	}
}

function checkForMoney(event, coinType, quantity) {
// checks that the player has enough money to purchase an item; takes an event, a type of coin or currency, and a number of that currency
	if (event.player.removeItem(coinType, 0, quantity)){
		event.npc.say("Thanks for doing business with me!");
		return true;
	} else {
		event.npc.say("You don't have enough money for that. Come back when you do.");
		return false;
	}
}