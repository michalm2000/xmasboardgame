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