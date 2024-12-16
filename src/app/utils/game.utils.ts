export function mapPlayerNoToColor(number: number) {
    switch(number){
      case 0:
        return "red";
      case 1:
        return "blue";
      case 2:
        return "yellow";
      case 3:
        return "green";
      default:
        return "black"
    }
  }

export function mapPlayerNoToColorPolish(number: number) {
  switch(number){
    case 0:
      return "Czerwoni";
    case 1:
      return "Niebiescy";
    case 2:
      return "Żółci";
    case 3:
      return "Zieloni";
    default:
      return "Czarni"
  }
}