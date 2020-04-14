const Stack = function() {
  return{
    items: [],
    add: function(name){
      this.items.push(name);
    },
    remove: function(){
      return this.items.pop();
    },
    peek: function(){
      return this.items[this.items.length-1];
    },
  };
};

const Queue = function() {
  return{
    items: [],
    add: function (name){
      return this.items.push(name);
    },
    remove: function(){
      return this.items.shift();
    },
    peek: function(){
      return this.items[0];
    },
  };
};

module.exports = {
  Stack,
  Queue,
}