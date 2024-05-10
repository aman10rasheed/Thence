type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className="flex justify-between items-center py-14 px-11">
      <div className="text-[18px]">Talup 2023. All rights reserved</div>
      <div className="flex gap-4">
        <div className="text-[18px]">Terms & Conditions</div>
        <div className="text-[18px]">Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
