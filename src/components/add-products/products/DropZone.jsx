import React, { useState, useCallback, useEffect } from "react";
import { Box, styled } from "@mui/system";
import { useDropzone } from "react-dropzone";
import { Controller } from "react-hook-form";
import { IconAddPhoto, IconDelete } from "../../../assets/icon";

const DropZone = ({ control, errors, setFile }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [error, setError] = useState("");

  const validateImage = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width >= 450 && img.height >= 600) {
          resolve(file);
        } else {
          reject("Минимальное разрешение изображения - 450×600");
        }
      };
      img.onerror = () => reject("Ошибка загрузки изображения");
    });
  };

  const onDrop = useCallback(
    (acceptedFiles, field) => {
      const filesArray = Array.from(acceptedFiles);

      filesArray.slice(0, 10 - selectedImages.length).forEach((file) => {
        validateImage(file)
          .then((validFile) => {
            console.log(validFile);

            setSelectedImages((prevImages) => {
              const newImages = [
                ...prevImages,
                Object.assign(validFile, {
                  preview: URL.createObjectURL(validFile),
                }),
              ];

              field.onChange(newImages);
              return newImages;
            });
            setFile(validFile);
            setError("");
          })
          .catch((validationError) => {
            setError(validationError);
          });
      });
    },
    [selectedImages]
  );

  useEffect(() => {
    return () => {
      selectedImages.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [selectedImages]);

  const handleDeleteImage = (indexRemove, field) => {
    setSelectedImages((prevImages) => {
      const updatedImages = prevImages.filter(
        (_, index) => index !== indexRemove
      );

      field.onChange(updatedImages);
      return updatedImages;
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 10,
  });

  return (
    <Controller
      name="dataDropzone"
      control={control}
      render={({ field }) => (
        <>
          <StyledP>Добавьте фото</StyledP>
          <StyledBox imagecount={selectedImages.length}>
            {selectedImages.length !== 10 && (
              <AddDropzoneBox
                {...getRootProps({
                  onClick: (e) => e.preventDefault(),
                })}
              >
                <input
                  {...getInputProps({
                    onChange: (e) => onDrop(e.target.files, field),
                  })}
                  type="file"
                  accept=".png, .jpg, .jpeg, .gif, .bmp, .webp"
                />
                <Box sx={{ textAlign: "center" }}>
                  <img src={IconAddPhoto} alt="addPhoto" />
                  <p>Нажмите или перетащите сюда файл</p>
                  <p>•Минимальное разрешение - 450×600</p>
                  <p>•Максимальное количество - 10 фото</p>
                </Box>
              </AddDropzoneBox>
            )}
            {selectedImages.map((file, index) => (
              <Box key={`${file.name}-${index}`} sx={{ position: "relative" }}>
                <StyledImg src={file.preview} alt={file.name} />
                <DeleteBox onClick={() => handleDeleteImage(index, field)}>
                  <img src={IconDelete} alt="delete" />
                </DeleteBox>
              </Box>
            ))}
          </StyledBox>
          {error && <Box sx={{ color: "red" }}>{error}</Box>}
          {errors.dataDropzone && (
            <Box sx={{ color: "red", marginTop: "10px" }}>
              {errors.dataDropzone.message}
            </Box>
          )}
        </>
      )}
    />
  );
};

export default DropZone;

const StyledBox = styled(Box)(({ theme }) => ({
  width: "800px",
  backgroundColor: "#e8e9eb",
  maxHeight: "352px",
  minHeight: "217px",
  height: "100%",
  borderRadius: "2px",
  alignItems: "center",
  textAlign: "center",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  padding: "20px",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  overflow: "auto",
  border: "2px dashed grey",
  [theme.breakpoints.down("lg")]: {
    gap: "12px",
  },
}));

const AddDropzoneBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "imagecount",
})(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  overflow: "hidden",

  [theme.breakpoints.down("md")]: {
    width: "auto",
  },
}));

const DeleteBox = styled(Box)(() => ({
  backgroundColor: "#909CB5",
  width: "30px",
  height: "30px",
  position: "absolute",
  top: "0px",
  right: "0px",
  borderRadius: "2px",
  paddingTop: "3px",
}));

const StyledImg = styled("img")(({ theme, imagecount }) => ({
  height: "140px",
  objectFit: "cover",
  borderRadius: "4px",
  marginRight: "10px",
  width: imagecount === 1 ? "100%" : "130px",
  maxHeight: "450px",
  maxWidth: "600px",
  [theme.breakpoints.down("md")]: {},
}));

const StyledP = styled("p")(({ theme }) => ({
  fontSize: "16px",
  fontFamily: "sans-serif",
  color: theme.palette.darkGrey.dark,
  marginTop: "20px",
  paddingBottom: "2px",
}));
