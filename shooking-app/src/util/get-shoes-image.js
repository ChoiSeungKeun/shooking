import shoes1 from "./../assets/shoes1.jpg";
import shoes2 from "./../assets/shoes2.jpg";
import shoes3 from "./../assets/shoes3.jpg";
import shoes4 from "./../assets/shoes4.jpg";
import shoes5 from "./../assets/shoes5.jpg";
import shoes6 from "./../assets/shoes6.jpg";

export function getShoesImage(shoesId) {
  switch (shoesId) {
    case 1:
      return shoes1;
    case 2:
      return shoes2;
    case 3:
      return shoes3;
    case 4:
      return shoes4;
    case 5:
      return shoes5;
    case 6:
      return shoes6;
    default:
      return null;
  }
}
