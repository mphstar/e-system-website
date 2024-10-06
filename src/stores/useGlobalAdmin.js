const { create } = require("zustand");

const useGlobalAdmin = create((set) => ({
  modal: false,
  handleModal: () => set((state) => ({ modal: !state.modal })),
  titleModal: "Modal Title",
  bodyModal: <div>Hello World</div>,
  setTitleModal: (title) => set({ titleModal: title }),
  setBodyModal: (body) => set({ bodyModal: body }),
  classNameModal: "",
  setClassNameModal: (className) => set({ classNameModal: className }),
}));

export default useGlobalAdmin;
