import PartnerLogo from "./PartnerLogo";
import LogoVisa from "@/assets/imgs/partner/visa.png";
import LogoBlancBlock from "@/assets/imgs/partner/blanc-block.png";
import LogoHashKey from "@/assets/imgs/partner/hashkey-global.png";
import LogoTrubit from "@/assets/imgs/partner/tru-bit.svg";
import LogoOCBC from "@/assets/imgs/partner/ocbc.png";
import LogoBOC from "@/assets/imgs/partner/boc-hk.png";
import LogoMastercard from "@/assets/imgs/partner/mastercard.png";
import LogoHexPay from "@/assets/imgs/partner/hexpay.png";
import LogoCobo from "@/assets/imgs/partner/cobo.svg";

export function Partner() {
  return (
    <>
      <div className="flex items-center justify-center gap-6 overflow-hidden pb-4">
        <PartnerLogo icon={LogoVisa} />
        <PartnerLogo icon={LogoBlancBlock} />
        <PartnerLogo icon={LogoHashKey} />
        <PartnerLogo icon={LogoTrubit} />
        <PartnerLogo icon={LogoOCBC} />
      </div>
      <div className="flex items-center justify-center gap-6 overflow-hidden">
        <PartnerLogo icon={LogoOCBC} />
        <PartnerLogo icon={LogoBOC} />
        <PartnerLogo icon={LogoCobo} />
        <PartnerLogo icon={LogoMastercard} />
        <PartnerLogo icon={LogoHexPay} />
        <PartnerLogo icon={LogoBlancBlock} />
      </div>
    </>
  );
}