class Letter {
  constructor(char){
      this.visible= !/[/a-z1-9/]/.test(char)
      this.char = char
  }

  toString(){
   if(this.visible === true){
    return this.char;
   }
    return "_";
  }

guess(charguessed){
    if (charguessed.toUpperCase() === this.char.toUpperCase()){
      this.visible = true;
      return true;
    }
    return false;
}

getSolution(){
 return this.letter;
}
}

module.exports = Letter;
