import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useNavigate = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const navigateHandler = (params: SimpleI | ComposedI) => {
    if (params.hasParams) {
      navigation.navigate(params.link, { id: params.id!,name:params.name });
      return;
    }
    navigation.navigate(params.link);
  };

  return { navigateHandler };
};

type SimpleI = {
  hasParams: false;
  link: "Characters" | "Settings" | "Favorites";
};
type ComposedI = {
  hasParams: true;
  link: "Character";
  id: string | number;
  name:string
};
