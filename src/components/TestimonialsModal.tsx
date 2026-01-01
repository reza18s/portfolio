import { X } from "lucide-react";

type ModalData = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
  date?: string;
};

type Props = {
  open: boolean;
  data?: ModalData;
  onClose: () => void;
};

function TestimonialsModal({ open, data, onClose }: Props) {
  return (
    <div
      className={`modal-container ${open ? "active" : ""}`}
      data-modal-container
    >
      <div
        className={`overlay ${open ? "active" : ""}`}
        data-overlay
        onClick={onClose}
      ></div>
      <section className="testimonials-modal">
        <button
          className="modal-close-btn"
          data-modal-close-btn
          onClick={onClose}
        >
          <X size={16} aria-hidden="true" focusable={false} />
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            {data && (
              <img
                src={data.imgSrc}
                alt={data.imgAlt}
                width={80}
                data-modal-img
              />
            )}
          </figure>
          <img src="/assets/images/icon-quote.svg" alt="quote icon" />
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>
            {data?.title}
          </h4>
          {data?.date && <time>{data.date}</time>}
          <div data-modal-text>
            <p>{data?.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialsModal;
