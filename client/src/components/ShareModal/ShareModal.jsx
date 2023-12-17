import React from "react";
import PropTypes from 'prop-types';
import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";

const ShareModal = ({modalOpened, setModalOpened}) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <PostShare/>
    </Modal>
  );
};

ShareModal.propTypes = {
  modalOpened: PropTypes.bool,
  setModalOpened: PropTypes.func,
};

export default ShareModal;
