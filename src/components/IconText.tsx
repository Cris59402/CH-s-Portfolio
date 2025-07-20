import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type IconTextProps = {
  text: string;
  icon: IconDefinition;
};

export const IconText: React.FC<IconTextProps> = ({ text, icon }) => {
  return (
    <div className="flex rounded-xl px-3 py-1 bg-primary-content bg-opacity-40 items-center space-x-2">
      <FontAwesomeIcon icon={icon} />
      <span className="text-base-content brightness-200 contrast-200">
        {text}
      </span>
    </div>
  );
};
