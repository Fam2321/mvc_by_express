module.exports = {
    Account : function(id,hashtag) {
        this.id = id;
        this.name = "account" + id;
        this.message = makeMessage(60) + "#" + hashtag;
        return {id:this.id, name:this.name, message:this.message}
    }
} 
//random charactor A-Z
function makeMessage(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}