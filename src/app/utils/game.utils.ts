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
      return "Janusza";
    case 1:
      return "Grażyny";
    case 2:
      return "Seby";
    case 3:
      return "Karyny";
    default:
      return "Czarni"
  }
}