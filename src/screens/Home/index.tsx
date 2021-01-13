import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";
import { StyledButton, StyledButtonLabel, StyledWrapper } from "./styles";
import data from "./consts";
import { AnimationPageList } from "./types";

const Home: React.FC<AnimationPageList> = () => {
  const navigation = useNavigation();

  return (
    <StyledWrapper>
      <FlatList
        {...{ data }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          const { label, to } = item;

          return (
            <StyledButton onPress={() => navigation.navigate(to)}>
              <StyledButtonLabel>{label}</StyledButtonLabel>
            </StyledButton>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </StyledWrapper>
  );
};

export default Home;
