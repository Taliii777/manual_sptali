// Logo de Solware
import logoSolware from "@/assets/logo-solware.png";

const SolwareLogo = ({ className = "h-32 w-auto" }: { className?: string }) => {
  return (
    <img
      src={logoSolware}
      alt="Logo de Solware"
      className={className}
    />
  );
};

export default SolwareLogo;
