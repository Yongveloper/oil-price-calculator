import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../color';

interface ICalculateButtonProps {
  disabled: boolean;
  mileage: string;
  gasMileage: string;
  selectedPrice: string;
}

function Calculatebutton({
  mileage,
  gasMileage,
  selectedPrice,
  disabled,
}: ICalculateButtonProps) {
  const stringNumberToInt = (stringNumber: string) => {
    return parseInt(stringNumber.replace(/,/g, ''));
  };

  const calculate = () => {
    const result = Math.ceil(
      (stringNumberToInt(mileage) / stringNumberToInt(gasMileage)) *
        stringNumberToInt(selectedPrice)
    );
    console.log(
      `주유비:${result} 주유량: ${(
        result / stringNumberToInt(selectedPrice)
      ).toFixed(3)}`
    );
  };

  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      disabled={disabled}
      onPress={calculate}
    >
      <Text style={[styles.calculationText, disabled && styles.disabled]}>
        계산하기
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    backgroundColor: theme.yellow,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  calculationText: {
    color: theme.black,
    fontSize: 28,
  },
  disabled: {
    backgroundColor: theme.grey,
    color: '#5c5c5c',
  },
});

export default Calculatebutton;
