import { FlatListProps } from "react-native";

export interface AnimationPage {
  to: string;
  label: string;
}

export interface AnimationPageItem extends AnimationPage {
  key: string;
}

export type AnimationPageList = FlatListProps<AnimationPageItem>;
