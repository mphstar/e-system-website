import useGlobalAdmin from "@/stores/useGlobalAdmin";
import React from "react";
import CustomModal from "../templates/CustomModal";

const ModalLayout = () => {
  const useGlobal = useGlobalAdmin();

  return (
    <CustomModal
      className={useGlobal.classNameModal}
      show={useGlobal.modal}
      setShow={useGlobal.handleModal}
      title={useGlobal.titleModal}
    >
      {useGlobal.bodyModal}
    </CustomModal>
  );
};

export default ModalLayout;
