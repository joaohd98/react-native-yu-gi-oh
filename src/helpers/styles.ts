import {Dimensions} from "react-native";

export class HelperStyles {
  static getPercentSizePage = (type: "width" | "height", number: number) => {
    const {width, height} = Dimensions.get("window");
    const value = type === "width" ? width : height;


    return `${value * (number / 100)}px`;
  };
}
