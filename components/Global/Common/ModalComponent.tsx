import styled from "@emotion/styled";
import { Button, Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../features/modalSlice";

const ModalComponent = () => {
  const dispatch = useDispatch();

  const open = useSelector((state: RootStateOrAny) => state.modal.open);
  const message = useSelector((state: RootStateOrAny) => state.modal.message);
  const modalType = useSelector(
    (state: RootStateOrAny) => state.modal.modalType
  );

  return (
    <Modal
      open={open}
      onClose={() => dispatch(closeModal())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Wrapper>
        {modalType === "success" ? (
          <Image
            src={"/success.png"}
            width={380}
            height={280}
            layout="intrinsic"
            alt="Success Image"
          />
        ) : modalType === "fail" ? (
          <Image
            src={"/fail.png"}
            width={380}
            height={280}
            layout="intrinsic"
            alt="Fail Image"
          />
        ) : null}

        <Typography marginY={5} color="text.primary">
          {message}
        </Typography>

        <Button
          href={modalType === "success" ? "/" : ""}
          onClick={() => dispatch(closeModal())}
          variant="outlined"
          color="secondary"
          sx={{ marginBottom: "1rem" }}
        >
          {modalType === "success" ? "Back Home" : "Cancel"}
        </Button>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled(Stack)(({ theme }: any) => {
  return {
    minWidth: "60%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
    background: theme.palette.primary.nav,
    borderRadius: "8px",
  };
});

export default ModalComponent;
