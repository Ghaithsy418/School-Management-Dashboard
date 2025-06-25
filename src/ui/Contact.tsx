import { HiMiniPhone, HiOutlineEnvelope } from "react-icons/hi2";

interface ContactTypes {
  phone: string;
  email: string;
}

function Contact({ phone, email }: ContactTypes) {
  return (
    <div className="flex items-center gap-2 text-indigo-50">
      <a
        href={`tel:${phone}`}
        className={`${LinkClassName} bg-green-600 hover:bg-green-700/90`}
      >
        <HiMiniPhone />
      </a>
      <a
        href={`mailto:${email}`}
        className={`${LinkClassName} bg-amber-600 hover:bg-amber-700/90`}
      >
        <HiOutlineEnvelope />
      </a>
    </div>
  );
}

const LinkClassName =
  "flex items-center justify-center rounded-full p-2 transition-all duration-300";

export default Contact;
