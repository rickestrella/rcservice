const Modal = ({ onClose, title = "Modal title", body = "Modal content" }) => {
  return (
    <div className="grid h-screen w-screen overflow-hidden z-50 transition-all bg-black/10 backdrop-blur-sm fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="place-self-center rounded bg-slate-950 shadow-lg shadow-blue-800 p-5 max-w-[40ch] border border-slate-800">
        <button
          onClick={onClose}
          className="hover:drop-shadow-clear transition-all duration-150"
        >
          &times;
        </button>
        <h3 className="text-center font-bold text-2xl text-slate-300 mb-2">
          {title}
        </h3>
        <p className="text-center text-slate-200">{body}</p>
      </div>
    </div>
  );
};

export default Modal;
