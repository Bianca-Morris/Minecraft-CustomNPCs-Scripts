function tick(event) {
	// need to update to also check for key in inventory
  if (event.npc.world.getTime() == 4000) {
    event.npc.say("I have collected your key. Make a new booking if you'd like to stay another night. Thanks for staying with us!");
    event.npc.executeCommand('/clear @a customnpcs:npcKey 0 1 {display: {Name:"Inn Key"}}');
  } else if (event.npc.world.getTime() == 3000) {
    event.npc.say("Check out is in 1 hour. Collect your belongings or purchase another key if you'd like to stay another night.");
  };
}