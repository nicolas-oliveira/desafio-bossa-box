import React from "react";

import {
  ButtonContainerLeft,
  ModalBackground,
  ButtonPrimary,
  ButtonAlert,
  Modal,
} from "../../styles/reuseStyles";

interface Props {
  tool: Tool;
  toggle: Function;
  removeItem: (id: number) => void;
}

interface Tool {
  id: number;
  title: string;
}

export default function ModalConfirmRemove({
  tool,
  toggle,
  removeItem,
}: Props) {
  return (
    <ModalBackground>
      <Modal>
        <h1>Remove tool</h1>
        <p>Are you sure you want remove {tool.title}?</p>

        <ButtonContainerLeft>
          <ButtonPrimary onClick={() => toggle()}>Cancel</ButtonPrimary>
          <ButtonAlert onClick={() => removeItem(tool.id)}>
            Yes, remove
          </ButtonAlert>
        </ButtonContainerLeft>
      </Modal>
    </ModalBackground>
  );
}
