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
      return "Drużyna Janusza";
    case 1:
      return "Drużyna Grażyny";
    case 2:
      return "Drużna Seby";
    case 3:
      return "Drużyna Karyny";
    default:
      return "Czarni"
  }
}