Bot.register ("JerryBot", function(game_state, my_state, done) {
    var me = game_state.me;
    var board = game_state.board;
    var hexes = board.hexes;
    var safe_dirs = board.safe_directions(me);
    var move = 1;
    var regions = new Array(6);
    for (var i = 0; i < 6; i ++) {
	regions[i] = new Array();
    }
    var my_x = me.x;
    var my_y = me.y;
    function in_range(test, neg_x, neg_y, pos_x, pos_y) {
	var real_pos_x = my_x + pos_x;
	var real_neg_x = my_x - neg_x;
	var real_pos_y = my_y + pos_y;
	var real_neg_y = my_y - neg_y;
	return (test.x <= real_pos_x && test.x >= real_neg_x && test.y <= real_pos_y && test.y >= real_neg_y);
    };
    for (var i = 0; i < hexes.length; i++) {
	var hex = hexes[i];
	if (in_range(hex, 3, 1, 3, 5)) {
	    alert("added");
	    regions[0].push(hex);
	}
    }
    done(move);
})