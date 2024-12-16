import { Plus, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { InputField } from "../form/InputField";

interface SocialLinkProps {
  name: string;
  label: string;
  socialLinks: { [key: string]: boolean };
  toggleLinkVisibility: (link: string) => void;
  form: any; // Replace with appropriate form type
}

const SocialLink = ({ name, label, socialLinks, toggleLinkVisibility, form }: SocialLinkProps) => {
  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <Plus
          className="text-[#000000] border-2 rounded border-black cursor-pointer"
          onClick={() => toggleLinkVisibility(name)}
        />
        <div className="text-black">{label}</div>
      </div>

      {socialLinks[name] && (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <InputField
              name={name}
              label=""
              placeholder={`${label} link`}
              form={form}
            />
          </div>
          <div className="col-span-6 flex justify-start">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => toggleLinkVisibility(name)}
            >
              <Trash2 className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialLink;
