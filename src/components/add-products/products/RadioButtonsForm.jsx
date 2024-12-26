import React from "react";
import { Controller } from "react-hook-form";

import RadioButton from "../../UI/Radiobutton";
import { styled, Box } from "@mui/system";

const optionsGender = [
  { value: "Мужской", label: "Мужской" },
  { value: "Женский", label: "Женский" },
  { value: "Унисекс", label: "Унисекс" },
];

const confirm = [
  { value: "Да", label: "Да" },
  { value: "Нет", label: "Нет" },
];

const interfaces = [
  { value: "bluetooth", label: "Bluetooth" },
  { value: "wi-fi", label: "Wi-Fi" },
  { value: "gps", label: "GPS" },
  { value: "nfc", label: "NFC" },
];

const bodyForm = [
  { value: "Квадратная", label: "Квадратная" },
  { value: "Круглая", label: "Круглая" },
  { value: "Овальная", label: "Овальная" },
  { value: "Прямоугольная", label: "Прямоугольная" },
];
const RadioButtonsForm = ({ control, errors }) => {
  return (
    <>
      <p>Пол</p>
      <StyledBox>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <RadioButton
              options={optionsGender}
              selectedOption={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.confirm && (
          <p style={{ color: "red" }}>{errors.confirm.message}</p>
        )}
      </StyledBox>
      <p>Водонепраницаемый</p>
      <StyledBox>
        <Controller
          name="confirm"
          control={control}
          render={({ field }) => (
            <RadioButton
              options={confirm}
              selectedOption={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.confirm && (
          <p style={{ color: "red" }}>{errors.confirm.message}</p>
        )}
      </StyledBox>

      <p>Беспроводные интерфейсы</p>
      <StyledBox>
        <Controller
          name="interfaces"
          control={control}
          render={({ field }) => (
            <RadioButton
              options={interfaces}
              selectedOption={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.interfaces && (
          <p style={{ color: "red" }}>{errors.interfaces.message}</p>
        )}
      </StyledBox>
      <p>Форма корпуса</p>
      <StyledBox>
        <Controller
          name="bodyForm"
          control={control}
          render={({ field }) => (
            <RadioButton
              options={bodyForm}
              selectedOption={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.bodyForm && (
          <p style={{ color: "red" }}>{errors.bodyForm.message}</p>
        )}
      </StyledBox>
    </>
  );
};

export default RadioButtonsForm;
const StyledBox = styled(Box)(() => ({
  marginBottom: "10px",
  overflow: "hidden",
}));
