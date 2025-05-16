import { HiMiniPhone, HiOutlineEnvelope } from "react-icons/hi2";

function Contact() {
  return (
    <div className="flex items-center gap-2 text-indigo-50">
      <a href="tel:+963996240804" className={`${LinkClassName} bg-green-600`}>
        <HiMiniPhone />
      </a>
      <a
        href="mailto:ghaithsy418@gmail.com"
        className={`${LinkClassName} bg-amber-600`}
      >
        <HiOutlineEnvelope />
      </a>
    </div>
  );
}

const LinkClassName = "flex items-center justify-center rounded-full p-2";

export default Contact;
