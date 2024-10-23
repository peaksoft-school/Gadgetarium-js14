import styled from "@emotion/styled";
import { Box, Modal, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import { useDropzone } from "react-dropzone";
import { IconAddPhoto, IconDelete } from "../../assets/icon";

const AddBannerModal = ({open,onClose}) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImages((prevImages) => {
      const newImages = acceptedFiles
        .slice(0, 6 - prevImages.length)
        .map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        );
      return [...prevImages, ...newImages];
    });
  }, []);

  useEffect(() => {
    return () => {
      selectedImages.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [selectedImages]);

  const handleDeleteImage = (indexRemove) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexRemove)
    );
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const selected_images = selectedImages?.map((file, index) => (
    <Box
      key={`${file.name}-${index}`}
      sx={{
        position: "relative",
      }}
    >
      <StyledBannerImg
        src={file.preview}
        style={{ height: "140px" }}
        alt={file.name}
        imageCount={selectedImages.length}
        index={index}
      />
      <DeleteBox onClick={() => handleDeleteImage(index)}>
        <img src={IconDelete} alt="delete" />
      </DeleteBox>
    </Box>
  ));


  const handleShowSelectedImages = () => {
    console.log(selectedImages);
    setSelectedImages([]);
  };

  return (
    <Box>
      <StyledModal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalContent>
          <Typography variant="h5" component="h1">
            Загрузить баннер
          </Typography>

          <StyledBox imageCount={selectedImages.length}>
            {selectedImages.length !== 6 && (
              <AddDropzoneBox
                {...getRootProps()}
                imageCount={selectedImages.length}
              >
                <input {...getInputProps()} />

                <img src={IconAddPhoto} alt="addPhoto" />
                {selectedImages.length === 0 ? (
                  <p>Нажмите для добавления фотографии</p>
                ) : (
                  <p>Добавить</p>
                )}
              </AddDropzoneBox>
            )}
            {selected_images}
          </StyledBox>

          <StyledButtonBox>
            <Button variant="text" onClick={onClose}>
              Отменить
            </Button>
            <Button variant="contained" onClick={handleShowSelectedImages}>
              Загрузить
            </Button>
          </StyledButtonBox>
        </StyledModalContent>
      </StyledModal>
    </Box>
  );
};

export default AddBannerModal;

const StyledModal = styled(Modal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledModalContent = styled(Box)(() => ({
  backgroundColor: "white",
  borderRadius: "4px",
  padding: "20px",
  width: "544px",
  minHeight: "438px",
  maxHeight: "573px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "center",
  "& h1": {
    marginTop: "20px",
  },
}));

const StyledButtonBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  paddingBottom: "10px",
}));

const StyledBox = styled(Box)(({ theme, imageCount }) => ({
  width: "fit-content",
  backgroundColor: theme.palette.darkGrey.light,
  maxHeight: "352px",
  minHeight: "217px",
  height: "100%",
  borderRadius: "2px",
  margin: "16px auto",
  gap: "18px",
  alignItems: "center",
  textAlign: "center",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "20px",
  display: imageCount === 4 ? "flex" : "grid",
  gridTemplateColumns:
    imageCount === 1 ? "repeat(2, 1fr)" : imageCount >= 2 && "repeat(3, 1fr)",
}));

const AddDropzoneBox = styled(Box)(({ theme, imageCount }) => ({
  "& p": {
    color: theme.palette.darkGrey.dark,
    margin: "8px",
  },

  gridArea: imageCount === 3 ? "1 / 1 / 2 / 4" : "",
  width: imageCount === 0 ? "210px" : imageCount === 4 && "130px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
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

const StyledBannerImg = styled("img")(({ index, imageCount }) => ({
  height: "140px",
  objectFit: "cover",
  borderRadius: "4px",
  width:
    imageCount === 1
      ? "210px"
      : imageCount > 3 && imageCount < 5
      ? index === 2 || index === 3
        ? "210px"
        : "130px"
      : imageCount === 1
      ? "210px"
      : "130px",
}));
