import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useDropzone } from "react-dropzone";
import ReactQuill from "react-quill";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-quill/dist/quill.snow.css";
import Input from "../../UI/Input";
import { IconPDF } from "../../../assets/icon";
import "./DescriptionQuill.css";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { setAllProductData } from "../../../store/admin-addproduct/productsSlice";
import {
  postAllProducts,
  postFile,
} from "../../../store/admin-addproduct/productsThunk";

const schema = yup.object().shape({
  urlFile: yup
    .string()
    .url("Введите корректный URL")
    .required("Обязательно для заполнения"),
  pdfFile: yup
    .mixed()
    .required("Выберите PDF файл")
    .test("fileType", "Должен быть PDF", (value) =>
      value ? value.type === "application/pdf" : false
    ),
  quill: yup.string().required("Введите описание"),
});

const DescriptionQuill = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { mainData } = useSelector((state) => state.product);
  const subProducts = mainData?.subProducts || [];

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setValue("pdfFile", acceptedFiles[0], { shouldValidate: true });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
  });
  const onSubmit = (data) => {
    const produts = {
      ...mainData,
      video: data.urlFile,
      PDF: data.pdfFile,
      description: data.quill,
      subProducts: Array.isArray(subProducts) ? subProducts : [subProducts],
    };

    console.log("Products:", produts);
    dispatch(postAllProducts(produts));
    setValue("pdfFile", null);
  };

  useEffect(() => {
    if (file) {
      dispatch(postFile(file));
    }
  }, [file, dispatch]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <div>
          <Controller
            name="urlFile"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                Icon={
                  <img
                    style={{ paddingLeft: "15px" }}
                    src={IconPDF}
                    alt="PDF Icon"
                  />
                }
                placeholder="Вставьте ссылку на видеообзор"
                label={
                  <p
                    style={{
                      color: "#6b6e75",
                      fontFamily: "sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    Загрузите видеообзор
                  </p>
                }
                type="url"
                sx={{ width: "390px" }}
              />
            )}
          />
          {errors.urlFile && (
            <p style={{ color: "red" }}>{errors.urlFile.message}</p>
          )}{" "}
        </div>

        <Box
          {...getRootProps()}
          sx={{
            cursor: "pointer",
            width: "390px",
          }}
        >
          <input {...getInputProps()} />
          <Controller
            name="pdfFile"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                value={watch("pdfFile")?.name || ""}
                Icon={
                  <img
                    style={{ paddingLeft: "15px" }}
                    src={IconPDF}
                    alt="PDF Icon"
                  />
                }
                placeholder="Выберите PDF файл"
                label={
                  <p
                    style={{
                      color: "#6b6e75",
                      fontFamily: "sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    Загрузите документ PDF
                  </p>
                }
                readOnly
              />
            )}
          />
          {errors.pdfFile && (
            <p style={{ color: "red" }}>{errors.pdfFile.message}</p>
          )}
        </Box>
      </Box>

      <Controller
        name="quill"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <div style={{ width: "50%", marginTop: "20px" }}>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "13px",
                paddingBottom: "3px",
              }}
            >
              Описание {errors.quill && <span style={{ color: "red" }}>*</span>}
            </p>
            <ReactQuill
              {...field}
              placeholder="Введите описание"
              modules={{
                toolbar: [
                  ["bold", "italic", "underline"],
                  [{ list: "ordered" }, { list: "bullet" }],
                ],
              }}
            />
          </div>
        )}
      />
      {errors.quill && <p style={{ color: "red" }}>{errors.quill.message}</p>}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "30px",
          marginTop: "30px",

          width: "660px",
          "& div": {
            width: "130px",
          },
        }}
      >
        <div>
          <Button variant="outlined">Отменить</Button>
        </div>
        <div>
          <Button variant="contained" type="submit">
            Добавить
          </Button>
        </div>
      </Box>
    </form>
  );
};

export default DescriptionQuill;
