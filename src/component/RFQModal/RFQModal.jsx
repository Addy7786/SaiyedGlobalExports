import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";

import {
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  FileText,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Send,
  Ship,
  UploadCloud,
  UserRound,
  Weight,
  X,
} from "lucide-react";

import countries, {
  getCountryFlag,
} from "./CountryData";

import "./RFQModal.css";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const acceptedFileTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "image/png",
];

const initialForm = {
  companyName: "",
  contactPerson: "",
  designation: "",
  email: "",
  whatsapp: "",
  country: "",
  product: "",
  quantity: "",
  unit: "MT",
  packaging: "",
  destinationCountry: "",
  destinationPort: "",
  shipmentMethod: "Sea Freight",
  incoterm: "FOB",
  targetPrice: "",
  deliveryTimeline: "",
  notes: "",
};

const unitOptions = [
  "Kg",
  "MT",
  "Ton",
  "Piece",
  "Box",
  "Carton",
  "Container",
];

const packagingOptions = [
  "Bag",
  "Box",
  "Carton",
  "Drum",
  "Pallet",
  "Container",
  "Custom Packaging",
];

const shipmentOptions = [
  "Sea Freight",
  "Air Freight",
  "Courier",
  "Road Transport",
];

const incotermOptions = [
  "EXW",
  "FOB",
  "CFR",
  "CIF",
  "DDP",
];

function generateReferenceId() {
  const now = new Date();

  const datePart = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("");

  const randomPart = Math.floor(
    1000 + Math.random() * 9000
  );

  return `SGE-${datePart}-${randomPart}`;
}

function RFQModal({
  isOpen,
  onClose,
}) {
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);
  const firstInputRef = useRef(null);

  const [formData, setFormData] =
    useState(initialForm);

  const [selectedFile, setSelectedFile] =
    useState(null);

  const [fileError, setFileError] =
    useState("");

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] =
    useState(false);

  const [referenceId, setReferenceId] =
    useState("");

  const destinationCountries = useMemo(
    () => countries,
    []
  );

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousBodyOverflow =
      document.body.style.overflow;

    const previousHtmlOverflow =
      document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    document.documentElement.classList.add(
      "lenis-stopped"
    );

    const handleEscape = (event) => {
      if (event.key === "Escape" && !isSending) {
        handleClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 380);

    return () => {
      document.body.style.overflow =
        previousBodyOverflow;

      document.documentElement.style.overflow =
        previousHtmlOverflow;

      document.documentElement.classList.remove(
        "lenis-stopped"
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen, isSending]);

  useEffect(() => {
    if (
      !isOpen ||
      !overlayRef.current ||
      !dialogRef.current
    ) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(
        [
          overlayRef.current,
          dialogRef.current,
        ],
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        }
      );

      return undefined;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.28,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        dialogRef.current,
        {
          autoAlpha: 0,
          y: 48,
          scale: 0.96,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".rfq-modal__header > *, .rfq-modal__field, .rfq-modal__actions > *",
        {
          autoAlpha: 0,
          y: 18,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.42,
          stagger: 0.035,
          delay: 0.12,
          ease: "power2.out",
        }
      );
    }, dialogRef);

    return () => {
      context.revert();
    };
  }, [isOpen]);

  const handleClose = () => {
    if (isSending) {
      return;
    }

    const overlay = overlayRef.current;
    const dialog = dialogRef.current;

    const finishClose = () => {
      onClose?.();
    };

    if (!overlay || !dialog) {
      finishClose();
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      finishClose();
      return;
    }

    gsap.to(dialog, {
      autoAlpha: 0,
      y: 34,
      scale: 0.97,
      duration: 0.24,
      ease: "power2.in",
    });

    gsap.to(overlay, {
      autoAlpha: 0,
      duration: 0.28,
      ease: "power2.in",
      onComplete: finishClose,
    });
  };

  const handleOverlayClick = (event) => {
    if (
      event.target === overlayRef.current &&
      !isSending
    ) {
      handleClose();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleFileChange = (event) => {
    const file =
      event.target.files?.[0] || null;

    setFileError("");

    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (
      !acceptedFileTypes.includes(file.type)
    ) {
      setSelectedFile(null);
      setFileError(
        "Please upload PDF, DOC, DOCX, XLS, XLSX, JPG or PNG."
      );
      event.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setSelectedFile(null);
      setFileError(
        "File size must be 10 MB or less."
      );
      event.target.value = "";
      return;
    }

    setSelectedFile(file);
  };

  const validateForm = () => {
    const requiredFields = [
      formData.companyName,
      formData.contactPerson,
      formData.email,
      formData.whatsapp,
      formData.country,
      formData.product,
      formData.quantity,
      formData.destinationCountry,
    ];

    if (
      requiredFields.some(
        (value) => !value.trim()
      )
    ) {
      setStatus({
        type: "error",
        message:
          "Please complete all required fields.",
      });

      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });

    const newReferenceId =
      generateReferenceId();

    try {
      await emailjs.send(
        import.meta.env
          .VITE_EMAILJS_SERVICE_ID,
        import.meta.env
          .VITE_EMAILJS_RFQ_TEMPLATE_ID ||
          import.meta.env
            .VITE_EMAILJS_TEMPLATE_ID,
        {
          reference_id: newReferenceId,
          company_name:
            formData.companyName,
          contact_person:
            formData.contactPerson,
          designation:
            formData.designation ||
            "Not provided",
          from_email: formData.email,
          whatsapp: formData.whatsapp,
          buyer_country:
            formData.country,
          product_requirement:
            formData.product,
          quantity: `${formData.quantity} ${formData.unit}`,
          packaging:
            formData.packaging ||
            "Not specified",
          destination_country:
            formData.destinationCountry,
          destination_port:
            formData.destinationPort ||
            "Not specified",
          shipment_method:
            formData.shipmentMethod,
          incoterm: formData.incoterm,
          target_price:
            formData.targetPrice ||
            "Not provided",
          delivery_timeline:
            formData.deliveryTimeline ||
            "Not specified",
          additional_notes:
            formData.notes ||
            "No additional notes",
          attachment_name:
            selectedFile?.name ||
            "No attachment",
          attachment_size:
            selectedFile
              ? `${(
                  selectedFile.size /
                  1024 /
                  1024
                ).toFixed(2)} MB`
              : "Not applicable",
        },
        {
          publicKey:
            import.meta.env
              .VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setReferenceId(newReferenceId);

      setStatus({
        type: "success",
        message:
          "Your quotation request has been submitted successfully.",
      });

      setFormData(initialForm);
      setSelectedFile(null);
      setFileError("");
    } catch (error) {
      console.error(
        "RFQ EmailJS error:",
        error
      );

      setStatus({
        type: "error",
        message:
          "RFQ could not be submitted. Please try again or use WhatsApp.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const openWhatsAppBackup = () => {
    const message = [
      "Hello Saiyed Global Exports,",
      "",
      "I would like to request a quotation.",
      "",
      `Company: ${formData.companyName || "-"}`,
      `Contact: ${formData.contactPerson || "-"}`,
      `Country: ${formData.country || "-"}`,
      `Product: ${formData.product || "-"}`,
      `Quantity: ${
        formData.quantity || "-"
      } ${formData.unit}`,
      `Destination: ${
        formData.destinationCountry || "-"
      }`,
      `Incoterm: ${formData.incoterm}`,
    ].join("\n");

    window.open(
      `https://wa.me/917867869243?text=${encodeURIComponent(
        message
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      ref={overlayRef}
      className="rfq-modal"
      onMouseDown={handleOverlayClick}
    >
      <section
        ref={dialogRef}
        className="rfq-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rfq-modal-title"
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        onWheel={(event) => {
          event.stopPropagation();
        }}
        onTouchMove={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          type="button"
          className="rfq-modal__close"
          onClick={handleClose}
          disabled={isSending}
          aria-label="Close quotation form"
        >
          <X
            size={21}
            strokeWidth={1.9}
          />
        </button>

        <div
          className="rfq-modal__glow"
          aria-hidden="true"
        />

        <header className="rfq-modal__header">
          <span className="rfq-modal__eyebrow">
            <Ship
              size={17}
              strokeWidth={1.8}
            />

            International Buyer RFQ
          </span>

          <h2 id="rfq-modal-title">
            Request A
            <span>Quotation</span>
          </h2>

          <p>
            Share your sourcing and shipping
            requirements. Our export team will
            review your request and respond with
            the next steps.
          </p>
        </header>

        {status.type === "success" ? (
          <div className="rfq-modal__success">
            <span className="rfq-modal__success-icon">
              <CheckCircle2
                size={52}
                strokeWidth={1.5}
              />
            </span>

            <h3>Request Submitted</h3>

            <p>{status.message}</p>

            <div className="rfq-modal__reference">
              <span>Reference ID</span>
              <strong>{referenceId}</strong>
            </div>

            <div className="rfq-modal__success-actions">
              <button
                type="button"
                onClick={() => {
                  setStatus({
                    type: "",
                    message: "",
                  });

                  setReferenceId("");
                }}
              >
                Submit Another RFQ
              </button>

              <button
                type="button"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form
            className="rfq-modal__form"
            onSubmit={handleSubmit}
          >
            <div className="rfq-modal__section-title">
              <Building2
                size={18}
                strokeWidth={1.8}
              />

              Buyer Information
            </div>

            <label className="rfq-modal__field">
              <Building2 size={18} />

              <input
                ref={firstInputRef}
                type="text"
                name="companyName"
                placeholder="Company Name *"
                value={formData.companyName}
                onChange={handleChange}
                autoComplete="organization"
                required
              />
            </label>

            <label className="rfq-modal__field">
              <UserRound size={18} />

              <input
                type="text"
                name="contactPerson"
                placeholder="Contact Person *"
                value={formData.contactPerson}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </label>

            <label className="rfq-modal__field">
              <UserRound size={18} />

              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={formData.designation}
                onChange={handleChange}
              />
            </label>

            <label className="rfq-modal__field">
              <Mail size={18} />

              <input
                type="email"
                name="email"
                placeholder="Business Email *"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </label>

            <label className="rfq-modal__field">
              <Phone size={18} />

              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp Number *"
                value={formData.whatsapp}
                onChange={handleChange}
                autoComplete="tel"
                required
              />
            </label>

            <label className="rfq-modal__field rfq-modal__field--select">
              <Globe2 size={18} />

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">
                  Buyer Country *
                </option>

                {countries.map(
                  ({ code, name }) => (
                    <option
                      key={code}
                      value={name}
                    >
                      {getCountryFlag(code)}{" "}
                      {name}
                    </option>
                  )
                )}
              </select>

              <ChevronDown size={16} />
            </label>

            <div className="rfq-modal__section-title rfq-modal__section-title--full">
              <Package
                size={18}
                strokeWidth={1.8}
              />

              Product & Trade Details
            </div>

            <label className="rfq-modal__field rfq-modal__field--full">
              <Package size={18} />

              <input
                type="text"
                name="product"
                placeholder="Product Required *"
                value={formData.product}
                onChange={handleChange}
                required
              />
            </label>

            <label className="rfq-modal__field">
              <Weight size={18} />

              <input
                type="text"
                name="quantity"
                placeholder="Quantity *"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </label>

            <label className="rfq-modal__field rfq-modal__field--select">
              <Weight size={18} />

              <select
                name="unit"
                value={formData.unit}
                onChange={handleChange}
              >
                {unitOptions.map((unit) => (
                  <option
                    key={unit}
                    value={unit}
                  >
                    {unit}
                  </option>
                ))}
              </select>

              <ChevronDown size={16} />
            </label>

            <label className="rfq-modal__field rfq-modal__field--select">
              <Package size={18} />

              <select
                name="packaging"
                value={formData.packaging}
                onChange={handleChange}
              >
                <option value="">
                  Packaging Required
                </option>

                {packagingOptions.map(
                  (packaging) => (
                    <option
                      key={packaging}
                      value={packaging}
                    >
                      {packaging}
                    </option>
                  )
                )}
              </select>

              <ChevronDown size={16} />
            </label>

            <label className="rfq-modal__field rfq-modal__field--select">
              <Globe2 size={18} />

              <select
                name="destinationCountry"
                value={
                  formData.destinationCountry
                }
                onChange={handleChange}
                required
              >
                <option value="">
                  Destination Country *
                </option>

                {destinationCountries.map(
                  ({ code, name }) => (
                    <option
                      key={code}
                      value={name}
                    >
                      {getCountryFlag(code)}{" "}
                      {name}
                    </option>
                  )
                )}
              </select>

              <ChevronDown size={16} />
            </label>

            <label className="rfq-modal__field">
              <MapPin size={18} />

              <input
                type="text"
                name="destinationPort"
                placeholder="Destination Port"
                value={
                  formData.destinationPort
                }
                onChange={handleChange}
              />
            </label>

            <label className="rfq-modal__field rfq-modal__field--select">
              <Ship size={18} />

              <select
                name="shipmentMethod"
                value={
                  formData.shipmentMethod
                }
                onChange={handleChange}
              >
                {shipmentOptions.map(
                  (shipment) => (
                    <option
                      key={shipment}
                      value={shipment}
                    >
                      {shipment}
                    </option>
                  )
                )}
              </select>

              <ChevronDown size={16} />
            </label>

            <label className="rfq-modal__field rfq-modal__field--select">
              <FileText size={18} />

              <select
                name="incoterm"
                value={formData.incoterm}
                onChange={handleChange}
              >
                {incotermOptions.map(
                  (incoterm) => (
                    <option
                      key={incoterm}
                      value={incoterm}
                    >
                      {incoterm}
                    </option>
                  )
                )}
              </select>

              <ChevronDown size={16} />
            </label>

            <label className="rfq-modal__field">
              <CircleDollarSign size={18} />

              <input
                type="text"
                name="targetPrice"
                placeholder="Target Price (Optional)"
                value={formData.targetPrice}
                onChange={handleChange}
              />
            </label>

            <label className="rfq-modal__field">
              <CalendarDays size={18} />

              <input
                type="text"
                name="deliveryTimeline"
                placeholder="Delivery Timeline"
                value={
                  formData.deliveryTimeline
                }
                onChange={handleChange}
              />
            </label>

            <label className="rfq-modal__field rfq-modal__field--textarea rfq-modal__field--full">
              <MessageCircle size={18} />

              <textarea
                name="notes"
                rows="4"
                placeholder="Additional Requirements"
                value={formData.notes}
                onChange={handleChange}
              />
            </label>

            <label className="rfq-modal__upload rfq-modal__field--full">
              <UploadCloud
                size={27}
                strokeWidth={1.5}
              />

              <span>
                <strong>
                  Upload Specification
                </strong>

                <small>
                  PDF, DOC, DOCX, XLS, XLSX,
                  JPG or PNG — Maximum 10 MB
                </small>

                {selectedFile && (
                  <em>
                    Selected:{" "}
                    {selectedFile.name}
                  </em>
                )}
              </span>

              <input
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
            </label>

            {fileError && (
              <div className="rfq-modal__file-error">
                {fileError}
              </div>
            )}

            {status.message && (
              <div
                className={`rfq-modal__status rfq-modal__status--${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            )}

            <div className="rfq-modal__actions">
              <button
                type="submit"
                className="rfq-modal__submit"
                disabled={isSending}
              >
                <Send
                  size={19}
                  strokeWidth={1.9}
                />

                {isSending
                  ? "Submitting..."
                  : "Submit RFQ"}
              </button>

              <button
                type="button"
                className="rfq-modal__whatsapp"
                onClick={
                  openWhatsAppBackup
                }
              >
                <MessageCircle
                  size={19}
                  strokeWidth={1.9}
                />

                WhatsApp Backup
              </button>
            </div>

            <p className="rfq-modal__attachment-note">
              The selected file name and size are
              included in the email. To send the
              actual attachment, configure file
              attachments in your EmailJS RFQ
              template.
            </p>
          </form>
        )}
      </section>
    </div>,
    document.body
  );
}

export default RFQModal;