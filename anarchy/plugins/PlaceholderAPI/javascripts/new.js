var messages = ["&9N", "&bNe", "&dNew", "&eNew!"];
var numdata = "%player_name%." + IDv + "." + messages;
var IDv = 0;

function getMessage(ID) {
    if ( args.length == 4) {
        IDv = args[0];
        messages = [args[1], args[2], args[3]];
    }

    var msgnumber = Data.exists(numdata) ? Data.get(numdata) : 0;
    msgnumber++;

    if (msgnumber >= messages.length) {
        msgnumber = 0;
    }
    Data.set(numdata, msgnumber);
    return messages[msgnumber];
}
getMessage(IDv);